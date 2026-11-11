// Design tokens for the "Custom (AI)" theme.
// Shared by the Cloudflare Worker (worker/) and the site, so both validate against the same rules.
// Claude only ever returns these tokens; they are mapped to CSS values here, never passed through as raw CSS.

export const FONTS = {
  bricolage: "'Bricolage Grotesque Variable', 'Arial Narrow', system-ui, sans-serif",
  manrope: "'Manrope Variable', system-ui, -apple-system, 'Segoe UI', sans-serif",
  fraunces: "'Fraunces Variable', Georgia, 'Times New Roman', serif",
  'space-mono': "'Space Mono', ui-monospace, Menlo, Consolas, monospace",
  atkinson: "'Atkinson Hyperlegible', Verdana, system-ui, sans-serif",
  'system-sans': "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  'system-serif': "Georgia, 'Times New Roman', serif",
} as const;
export type FontId = keyof typeof FONTS;

export const RADII = { none: '0px', small: '6px', medium: '14px', large: '24px' } as const;
export const SHADOWS = ['none', 'soft', 'hard', 'glow'] as const;
export const BACKGROUNDS = ['plain', 'dots', 'grid', 'diagonal', 'gradient'] as const;
export const MODES = ['light', 'dark'] as const;
export const COLOR_KEYS = ['bg', 'surface', 'text', 'muted', 'accent', 'accentText', 'border', 'panel', 'panelText', 'highlight'] as const;

export type ColorKey = (typeof COLOR_KEYS)[number];
export type ThemeTokens = {
  name: string;
  mode: (typeof MODES)[number];
  colors: Record<ColorKey, string>;
  fonts: { heading: FontId; body: FontId };
  radius: keyof typeof RADII;
  shadow: (typeof SHADOWS)[number];
  background: (typeof BACKGROUNDS)[number];
};

export const MAX_PROMPT_LENGTH = 200;
const NAME_MAX = 40;
const HEX = /^#[0-9a-f]{6}$/;
const TOP_KEYS = ['name', 'mode', 'colors', 'fonts', 'radius', 'shadow', 'background'] as const;

const COLOR_HELP: Record<ColorKey, string> = {
  bg: 'Page background',
  surface: 'Cards, chips and menus, drawn on top of bg',
  text: 'Main body text on bg and surface',
  muted: 'Secondary text on bg and surface',
  accent: 'Links, labels and primary buttons; also used as small text on bg',
  accentText: 'Text on top of accent (primary button label)',
  border: 'Borders and dividers',
  panel: 'Background of the large decorative word panels',
  panelText: 'Large words on panel',
  highlight: 'Second colour for words and details on panel',
};

/** JSON schema used as the Claude tool input schema. */
export const tokensJsonSchema = {
  type: 'object',
  additionalProperties: false,
  required: [...TOP_KEYS],
  properties: {
    name: { type: 'string', maxLength: NAME_MAX, description: 'Short, friendly name for the theme (2-4 words)' },
    mode: { type: 'string', enum: [...MODES] },
    colors: {
      type: 'object',
      additionalProperties: false,
      required: [...COLOR_KEYS],
      properties: Object.fromEntries(
        COLOR_KEYS.map((k) => [k, { type: 'string', pattern: '^#[0-9a-f]{6}$', description: `${COLOR_HELP[k]}. Lowercase 6-digit hex.` }]),
      ),
    },
    fonts: {
      type: 'object',
      additionalProperties: false,
      required: ['heading', 'body'],
      properties: {
        heading: { type: 'string', enum: Object.keys(FONTS) },
        body: { type: 'string', enum: Object.keys(FONTS) },
      },
    },
    radius: { type: 'string', enum: Object.keys(RADII) },
    shadow: { type: 'string', enum: [...SHADOWS] },
    background: { type: 'string', enum: [...BACKGROUNDS] },
  },
};

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const exactKeys = (o: Record<string, unknown>, keys: readonly string[]) =>
  Object.keys(o).length === keys.length && keys.every((k) => Object.prototype.hasOwnProperty.call(o, k));
const oneOf = <T extends string>(v: unknown, list: readonly T[]): v is T => typeof v === 'string' && (list as readonly string[]).includes(v);

/** Strict validation: exact keys, hex colours, allowlisted enums. Returns a clean copy or null. */
export function validateTokens(input: unknown): ThemeTokens | null {
  if (!isObj(input) || !exactKeys(input, TOP_KEYS)) return null;
  const { name, mode, colors, fonts, radius, shadow, background } = input;
  if (typeof name !== 'string') return null;
  const cleanName = name.replace(/[^\p{L}\p{N} '’&.,!?-]/gu, '').trim().slice(0, NAME_MAX);
  if (!cleanName) return null;
  if (!oneOf(mode, MODES) || !oneOf(shadow, SHADOWS) || !oneOf(background, BACKGROUNDS)) return null;
  if (!oneOf(radius, Object.keys(RADII) as (keyof typeof RADII)[])) return null;
  if (!isObj(colors) || !exactKeys(colors, COLOR_KEYS)) return null;
  const outColors = {} as Record<ColorKey, string>;
  for (const k of COLOR_KEYS) {
    const v = colors[k];
    if (typeof v !== 'string') return null;
    const hex = v.trim().toLowerCase();
    if (!HEX.test(hex)) return null;
    outColors[k] = hex;
  }
  const fontIds = Object.keys(FONTS) as FontId[];
  if (!isObj(fonts) || !exactKeys(fonts, ['heading', 'body']) || !oneOf(fonts.heading, fontIds) || !oneOf(fonts.body, fontIds)) return null;
  return { name: cleanName, mode, colors: outColors, fonts: { heading: fonts.heading, body: fonts.body }, radius, shadow, background };
}

// ---------- WCAG contrast ----------

type RGB = [number, number, number];
const toRgb = (hex: string): RGB => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as RGB;
const toHex = (rgb: number[]) => '#' + rgb.map((c) => Math.round(Math.min(255, Math.max(0, c))).toString(16).padStart(2, '0')).join('');
const lum = (hex: string) => {
  const [r, g, b] = toRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const contrast = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
const mix = (a: string, b: string, t: number) => {
  const [x, y] = [toRgb(a), toRgb(b)];
  return toHex(x.map((c, i) => c + (y[i] - c) * t));
};

/** Nudge fg toward black or white until it reaches `ratio` against every background. Null if impossible. */
function fix(fg: string, bgs: string[], ratio: number): string | null {
  const ok = (c: string) => bgs.every((b) => contrast(c, b) >= ratio);
  if (ok(fg)) return fg;
  // Try the direction that already contrasts better first, so the colour keeps its character.
  const targets = contrast('#000000', bgs[0]) > contrast('#ffffff', bgs[0]) ? ['#000000', '#ffffff'] : ['#ffffff', '#000000'];
  for (const target of targets) {
    for (let step = 1; step <= 20; step++) {
      const c = mix(fg, target, step / 20);
      if (ok(c)) return c;
    }
  }
  return null;
}

/** Contrast pairs the custom theme relies on: [foreground, backgrounds, minimum ratio]. */
const PAIRS: [ColorKey, ColorKey[], number][] = [
  ['text', ['bg', 'surface'], 4.5],
  ['muted', ['bg', 'surface'], 4.5],
  ['accent', ['bg', 'surface'], 4.5],
  ['accentText', ['accent'], 4.5],
  ['panelText', ['panel'], 4.5],
  ['highlight', ['panel'], 3],
  ['border', ['bg'], 3],
];

export type ContrastResult = { tokens: ThemeTokens; adjusted: ColorKey[] } | null;

/** Enforce WCAG AA. Adjusts failing foreground colours; returns null if a pair can't be fixed. */
export function ensureContrast(tokens: ThemeTokens): ContrastResult {
  const colors = { ...tokens.colors };
  const adjusted: ColorKey[] = [];
  for (const [fg, bgs, ratio] of PAIRS) {
    const fixed = fix(colors[fg], bgs.map((b) => colors[b]), ratio);
    if (!fixed) return null;
    if (fixed !== colors[fg]) {
      colors[fg] = fixed;
      adjusted.push(fg);
    }
  }
  return { tokens: { ...tokens, colors }, adjusted };
}

// ---------- tokens -> CSS custom properties ----------

const alpha = (hex: string, a: number) => {
  const [r, g, b] = toRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

/** Map tokens to --ai-* custom properties. Every value comes from a validated hex or a fixed lookup table. */
export function tokensToVars(t: ThemeTokens): Record<string, string> {
  const c = t.colors;
  const shadow = {
    none: 'none',
    soft: `0 12px 32px -14px ${alpha(c.text, 0.35)}`,
    hard: `6px 6px 0 ${c.highlight}`,
    glow: `0 0 0 1px ${alpha(c.accent, 0.35)}, 0 10px 40px -10px ${alpha(c.accent, 0.55)}`,
  }[t.shadow];
  const pattern = {
    plain: 'none',
    dots: `radial-gradient(${alpha(c.border, 0.45)} 1px, transparent 1.5px)`,
    grid: `linear-gradient(${alpha(c.border, 0.3)} 1px, transparent 1px), linear-gradient(90deg, ${alpha(c.border, 0.3)} 1px, transparent 1px)`,
    diagonal: `repeating-linear-gradient(45deg, ${alpha(c.border, 0.18)} 0 2px, transparent 2px 14px)`,
    gradient: `radial-gradient(60rem 40rem at 85% -10%, ${alpha(c.accent, 0.16)}, transparent 70%), radial-gradient(50rem 40rem at -10% 110%, ${alpha(c.highlight, 0.14)}, transparent 70%)`,
  }[t.background];
  const size = { plain: 'auto', dots: '22px 22px', grid: '28px 28px', diagonal: 'auto', gradient: 'auto' }[t.background];
  return {
    '--ai-bg': c.bg,
    '--ai-surface': c.surface,
    '--ai-text': c.text,
    '--ai-muted': c.muted,
    '--ai-accent': c.accent,
    '--ai-accent-text': c.accentText,
    '--ai-border': c.border,
    '--ai-panel': c.panel,
    '--ai-panel-text': c.panelText,
    '--ai-highlight': c.highlight,
    '--ai-display': FONTS[t.fonts.heading],
    '--ai-body': FONTS[t.fonts.body],
    '--ai-radius': RADII[t.radius],
    '--ai-shadow': shadow,
    '--ai-pattern': pattern,
    '--ai-pattern-size': size,
    '--ai-scheme': t.mode,
  };
}
