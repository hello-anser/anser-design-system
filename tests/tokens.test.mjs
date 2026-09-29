import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

import { hexToRgb, parseCss, ruleValue, themeVars } from './css.mjs';

const tokens = parseCss(readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8'));
const sheet = parseCss(readFileSync(new URL('../dist/anser.css', import.meta.url), 'utf8'));

const declared = (rules, selector, media) =>
  new Set(
    rules
      .filter((r) => (media ? r.media?.includes(media) : !r.media) && r.selectors.includes(selector))
      .flatMap((r) => r.decls.map(([p]) => p)),
  );

// Every way a theme reaches a component: the app stamps <html> and the
// provider (and a toggle can stamp only the provider), or nothing is
// stamped and the OS preference decides.
const CONTEXTS = {
  light: { rootTheme: 'light', providerTheme: 'light' },
  dark: { rootTheme: 'dark', providerTheme: 'dark' },
  'dark provider under a light root': { rootTheme: 'light', providerTheme: 'dark' },
  'light provider under an OS-dark root': { osDark: true, providerTheme: 'light' },
  'OS dark, nothing stamped': { osDark: true },
};

test('every --a-* token has a dark partner, on both of the brand pack\'s dark signals', () => {
  const light = [...declared(tokens, ':root')].filter((p) => p.startsWith('--a-'));
  assert.ok(light.length >= 13, `expected the brand pack's semantic layer, found ${light.length}`);
  const dark = declared(tokens, '[data-theme="dark"]');
  const osDark = declared(tokens, ':root:not([data-theme="light"])', 'prefers-color-scheme: dark');
  const explicitLight = declared(tokens, '[data-theme="light"]');
  for (const p of light) {
    assert.ok(dark.has(p), `${p} has no [data-theme="dark"] partner`);
    assert.ok(osDark.has(p), `${p} has no prefers-color-scheme: dark partner`);
    assert.ok(explicitLight.has(p), `${p} has no [data-theme="light"] partner`);
  }
});

// Every --anser-* name tokens.css declared at the merge base, 6d4b6ee.
const JUNE_NAMES = `--anser-amber --anser-amber-soft --anser-amber-strong --anser-bg --anser-faint
--anser-font-mono --anser-font-sans --anser-green --anser-line --anser-muted --anser-navy
--anser-neutral-btn-bg --anser-neutral-btn-text --anser-panel --anser-panel-2 --anser-panel-3
--anser-radius --anser-radius-lg --anser-radius-pill --anser-radius-sm --anser-red --anser-red-soft
--anser-sidebar-bg --anser-sidebar-card --anser-sidebar-faint --anser-sidebar-hover
--anser-sidebar-input --anser-sidebar-line --anser-sidebar-strong --anser-sidebar-text
--anser-steel --anser-text --anser-topbar-bg`.split(/\s+/);

test('every --anser-* name the merge base defined still resolves, in every theme context', () => {
  assert.equal(JUNE_NAMES.length, 33);
  for (const [name, ctx] of Object.entries(CONTEXTS)) {
    const vars = themeVars(sheet, ctx);
    for (const n of JUNE_NAMES) {
      const v = vars.get(n);
      assert.ok(v !== undefined && v !== '', `${n} does not resolve (${name})`);
      assert.doesNotMatch(v, /var\(/, `${n} is left unresolved (${name}): ${v}`);
    }
  }
});

test('an alias follows the theme stamped on the provider, not the one :root resolved', () => {
  const light = themeVars(sheet, CONTEXTS.light);
  const toggled = themeVars(sheet, CONTEXTS['dark provider under a light root']);
  assert.equal(light.get('--anser-bg'), '#FFFFFF');
  assert.equal(toggled.get('--anser-bg'), '#0A0A2E');
  assert.equal(toggled.get('--anser-text'), '#F4F6FC');
  assert.equal(toggled.get('--anser-logo-on-dark'), 'inline-block');
  assert.equal(toggled.get('--anser-logo-on-light'), 'none');
});

test('the primary button is Anser Blue with ink text, in every theme context', () => {
  for (const [name, ctx] of Object.entries(CONTEXTS)) {
    const vars = themeVars(sheet, ctx);
    assert.equal(hexToRgb(ruleValue(sheet, '.anser-btn--primary', 'background', vars)), 'rgb(26, 167, 254)', name);
    assert.equal(hexToRgb(ruleValue(sheet, '.anser-btn--primary', 'color', vars)), 'rgb(10, 10, 46)', name);
  }
});

test('Figtree is the one family, and the June faces and the uppercase idiom are gone', () => {
  const css = readFileSync(new URL('../dist/anser.css', import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  for (const w of [400, 500, 600, 700]) assert.match(css, new RegExp(`figtree-latin-${w}-normal\\.woff2`));
  assert.doesNotMatch(css, /Inter|JetBrains/);
  const base = readFileSync(new URL('../src/styles/base.css', import.meta.url), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  assert.doesNotMatch(base, /uppercase|letter-spacing/);
  const vars = themeVars(sheet, CONTEXTS.light);
  assert.match(vars.get('--anser-font-sans'), /^"Figtree"/);
  assert.match(vars.get('--anser-font-mono'), /^"Figtree"/);
});
