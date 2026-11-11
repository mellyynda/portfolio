import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COLOR_KEYS, ensureContrast, tokensToVars, validateTokens } from '../src/lib/themeTokens.ts';

const valid = () => ({
  name: 'Deep Ocean',
  mode: 'dark',
  colors: { bg: '#0b1d2a', surface: '#11293a', text: '#e6f4f1', muted: '#9fc3c9', accent: '#4fd1c5', accentText: '#062026', border: '#2b5466', panel: '#0f766e', panelText: '#ecfeff', highlight: '#fcd34d' },
  fonts: { heading: 'fraunces', body: 'manrope' },
  radius: 'large',
  shadow: 'glow',
  background: 'gradient',
});

test('accepts a complete theme and normalises hex case', () => {
  const t = valid();
  t.colors.bg = ' #0B1D2A ';
  const out = validateTokens(t);
  assert.ok(out);
  assert.equal(out.colors.bg, '#0b1d2a');
  const checked = ensureContrast(out);
  assert.ok(checked);
  assert.equal(tokensToVars(checked.tokens)['--ai-bg'], '#0b1d2a');
});

test('rejects missing or malformed fields without throwing', () => {
  const cases: [string, unknown][] = [
    ['undefined', undefined],
    ['null', null],
    ['string', 'theme'],
    ['array', []],
    ['empty object', {}],
    ['missing fields (mock:incomplete)', { name: 'Incomplete', mode: 'dark', colors: { bg: '#000000', text: '#ffffff' }, fonts: { heading: 'manrope' } }],
    ['colors null', { ...valid(), colors: null }],
    ['fonts null', { ...valid(), fonts: null }],
    ['name missing', { ...valid(), name: undefined }],
    ['name not a string', { ...valid(), name: 42 }],
    ['bad hex', { ...valid(), colors: { ...valid().colors, accent: 'red' } }],
    ['unknown font', { ...valid(), fonts: { heading: 'comic-sans', body: 'manrope' } }],
    ['extra key', { ...valid(), css: 'body{}' }],
  ];
  for (const k of COLOR_KEYS) {
    const colors: Record<string, unknown> = { ...valid().colors };
    delete colors[k];
    cases.push([`missing colors.${k}`, { ...valid(), colors }]);
    cases.push([`undefined colors.${k}`, { ...valid(), colors: { ...valid().colors, [k]: undefined } }]);
  }
  for (const [label, input] of cases) {
    assert.doesNotThrow(() => validateTokens(input), label);
    assert.equal(validateTokens(input), null, label);
  }
});

test('restoring a saved theme survives corrupted localStorage JSON', () => {
  for (const raw of ['null', '[]', '"x"', '{}', JSON.stringify({ ...valid(), colors: { bg: '#000000' } })]) {
    assert.equal(validateTokens(JSON.parse(raw)), null, raw);
  }
});
