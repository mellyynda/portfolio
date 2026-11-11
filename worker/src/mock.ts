import type { ThemeTokens } from '../../src/lib/themeTokens';

// Sample themes for local testing without an API key (MOCK=true). Picked by keyword, otherwise by a hash of the prompt.
const PRESETS: { match: RegExp; tokens: ThemeTokens }[] = [
  {
    match: /ocean|sea|beach|water|blue|wave|hav|strand|blå/i,
    tokens: {
      name: 'Deep Ocean',
      mode: 'dark',
      colors: { bg: '#0b1d2a', surface: '#11293a', text: '#e6f4f1', muted: '#9fc3c9', accent: '#4fd1c5', accentText: '#062026', border: '#2b5466', panel: '#0f766e', panelText: '#ecfeff', highlight: '#fcd34d' },
      fonts: { heading: 'fraunces', body: 'manrope' },
      radius: 'large',
      shadow: 'glow',
      background: 'gradient',
    },
  },
  {
    match: /forest|green|nature|moss|plant|tree|skog|grön|moss/i,
    tokens: {
      name: 'Mossy Forest',
      mode: 'light',
      colors: { bg: '#f3f1e7', surface: '#e7e9d8', text: '#1f2a1d', muted: '#4a5a45', accent: '#2f6b3a', accentText: '#f3f1e7', border: '#8a9a7b', panel: '#2f4a2a', panelText: '#e9f5d6', highlight: '#e0b84c' },
      fonts: { heading: 'fraunces', body: 'atkinson' },
      radius: 'medium',
      shadow: 'soft',
      background: 'dots',
    },
  },
  {
    match: /neon|cyber|synth|80s|arcade|night|80-tal|arkad/i,
    tokens: {
      name: 'Neon Arcade',
      mode: 'dark',
      colors: { bg: '#0d0221', surface: '#1a0b3b', text: '#f5f3ff', muted: '#c4b5fd', accent: '#ff4fd8', accentText: '#0d0221', border: '#5b3fa8', panel: '#2a0a5e', panelText: '#00f0ff', highlight: '#ffe14f' },
      fonts: { heading: 'space-mono', body: 'manrope' },
      radius: 'none',
      shadow: 'hard',
      background: 'grid',
    },
  },
  {
    match: /paper|newspaper|minimal|mono|ink|print|swiss|tidning/i,
    tokens: {
      name: 'Newsprint',
      mode: 'light',
      colors: { bg: '#fafaf7', surface: '#efeee9', text: '#111111', muted: '#4b4b4b', accent: '#c1121f', accentText: '#ffffff', border: '#1f1f1f', panel: '#111111', panelText: '#fafaf7', highlight: '#ff6b6b' },
      fonts: { heading: 'system-serif', body: 'system-sans' },
      radius: 'none',
      shadow: 'none',
      background: 'plain',
    },
  },
  {
    match: /candy|pastel|sweet|pink|bubble|spring|godis|pastell|rosa/i,
    tokens: {
      name: 'Candy Pastel',
      mode: 'light',
      colors: { bg: '#fff5fa', surface: '#ffe4f1', text: '#3b1d33', muted: '#6d4560', accent: '#b0266f', accentText: '#ffffff', border: '#e9a6c8', panel: '#ffb3d9', panelText: '#3b1d33', highlight: '#5b2a86' },
      fonts: { heading: 'bricolage', body: 'manrope' },
      radius: 'large',
      shadow: 'soft',
      background: 'diagonal',
    },
  },
];

export function mockTokens(prompt: string): ThemeTokens {
  const hit = PRESETS.find((p) => p.match.test(prompt));
  if (hit) return hit.tokens;
  let h = 0;
  for (const ch of prompt) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return PRESETS[h % PRESETS.length].tokens;
}
