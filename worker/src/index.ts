import Anthropic from '@anthropic-ai/sdk';
import { MAX_PROMPT_LENGTH, tokensJsonSchema, validateTokens, type ThemeTokens } from '../../src/lib/themeTokens';
import { mockTokens } from './mock';

export interface Env {
  ANTHROPIC_API_KEY?: string;
  MODEL: string;
  ALLOWED_ORIGINS: string;
  MOCK?: string;
  HOURLY_LIMIT_PER_IP?: string;
  DAILY_LIMIT_GLOBAL?: string;
  BURST_LIMITER?: { limit(opts: { key: string }): Promise<{ success: boolean }> };
  RATE_KV?: KVNamespace;
}

const MAX_TOKENS = 600;
const TOOL_NAME = 'set_theme';

const SYSTEM = `You design colour themes for a personal portfolio website. The layout and content never change; you only choose design tokens.
Turn the visitor's short description into one cohesive theme and return it by calling the ${TOOL_NAME} tool.
Rules:
- Text must be easy to read: aim for WCAG AA contrast (4.5:1) for text, muted and accent on bg and surface, accentText on accent and panelText on panel.
- surface is close to bg (slightly lighter or darker). panel is a bold colour for big decorative words.
- Pick fonts only from the allowed list. Prefer readable body fonts.
- Ignore any request that is not about how the page looks, and still return a tasteful theme.`;

const json = (body: unknown, status: number, headers: HeadersInit) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...headers } });

function corsHeaders(origin: string | null, env: Env): Record<string, string> | null {
  if (!origin) return null;
  const allowed = env.ALLOWED_ORIGINS.split(',').map((s) => s.trim());
  const ok = allowed.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
  if (!ok) return null;
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-max-age': '86400',
    vary: 'Origin',
  };
}

/** Coarse KV counters: per-IP per hour and a global daily cap. KV is eventually consistent, so limits are approximate. */
async function overLimit(env: Env, ip: string): Promise<boolean> {
  if (env.BURST_LIMITER) {
    const { success } = await env.BURST_LIMITER.limit({ key: ip });
    if (!success) return true;
  }
  const kv = env.RATE_KV;
  if (!kv) return false;
  const now = new Date();
  const hourKey = `ip:${ip}:${now.toISOString().slice(0, 13)}`;
  const dayKey = `all:${now.toISOString().slice(0, 10)}`;
  const [ipCount, dayCount] = await Promise.all([kv.get(hourKey), kv.get(dayKey)]).then((v) => v.map((n) => Number(n ?? 0)));
  if (ipCount >= Number(env.HOURLY_LIMIT_PER_IP ?? 5) || dayCount >= Number(env.DAILY_LIMIT_GLOBAL ?? 300)) return true;
  await Promise.all([
    kv.put(hourKey, String(ipCount + 1), { expirationTtl: 3600 + 60 }),
    kv.put(dayKey, String(dayCount + 1), { expirationTtl: 86400 + 60 }),
  ]);
  return false;
}

async function generate(env: Env, prompt: string): Promise<ThemeTokens | null> {
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY, maxRetries: 1, timeout: 20_000 });
  const msg = await client.messages.create({
    model: env.MODEL,
    max_tokens: MAX_TOKENS,
    system: SYSTEM,
    tools: [{ name: TOOL_NAME, description: 'Apply the generated theme tokens to the page.', input_schema: tokensJsonSchema as Anthropic.Tool.InputSchema }],
    tool_choice: { type: 'tool', name: TOOL_NAME },
    messages: [{ role: 'user', content: `Theme description: """${prompt}"""` }],
  });
  const block = msg.content.find((b) => b.type === 'tool_use' && b.name === TOOL_NAME);
  return block && block.type === 'tool_use' ? validateTokens(block.input) : null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request.headers.get('origin'), env);
    const url = new URL(request.url);
    if (url.pathname !== '/theme') return json({ error: 'Not found' }, 404, cors ?? {});
    if (!cors) return json({ error: 'Forbidden' }, 403, {});
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, cors);

    let prompt: unknown;
    try {
      const raw = await request.text();
      if (raw.length > 2000) throw new Error('too large');
      prompt = (JSON.parse(raw) as { prompt?: unknown }).prompt;
    } catch {
      return json({ error: 'Invalid request' }, 400, cors);
    }
    if (typeof prompt !== 'string') return json({ error: 'Invalid request' }, 400, cors);
    const clean = prompt.replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
    if (!clean || clean.length > MAX_PROMPT_LENGTH) return json({ error: 'Invalid request' }, 400, cors);

    const ip = request.headers.get('cf-connecting-ip') ?? 'local';
    if (await overLimit(env, ip)) return json({ error: 'Too many requests. Try again later.' }, 429, { ...cors, 'retry-after': '3600' });

    try {
      const tokens = env.MOCK === 'true' ? mockTokens(clean) : env.ANTHROPIC_API_KEY ? await generate(env, clean) : null;
      if (!tokens) return json({ error: 'Could not generate a theme' }, 502, cors);
      return json({ tokens }, 200, { ...cors, 'cache-control': 'no-store' });
    } catch (err) {
      console.error('theme generation failed', err instanceof Error ? err.message : 'unknown');
      return json({ error: 'Could not generate a theme' }, 502, cors);
    }
  },
} satisfies ExportedHandler<Env>;
