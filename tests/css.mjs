// A small, honest model of the cascade the tests need: rules parsed from a
// stylesheet, custom properties computed on two elements — the document
// root and AnserProvider's div inside it — and var() substituted the way a
// browser does it, on the element that declares the property. It is enough
// to answer "what colour is this" for token chains; it is not a CSS engine.

export function parseCss(text) {
  const src = text.replace(/\/\*[\s\S]*?\*\//g, '');
  const rules = [];
  const parseRules = (chunk, media) => {
    let k = 0;
    while (k < chunk.length) {
      const open = chunk.indexOf('{', k);
      if (open === -1) break;
      const prelude = chunk.slice(k, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < chunk.length && depth > 0) {
        if (chunk[j] === '{') depth++;
        else if (chunk[j] === '}') depth--;
        j++;
      }
      const body = chunk.slice(open + 1, j - 1);
      if (prelude.startsWith('@')) {
        parseRules(body, prelude);
      } else {
        const decls = [];
        for (const part of body.split(';')) {
          const c = part.indexOf(':');
          if (c === -1) continue;
          decls.push([part.slice(0, c).trim(), part.slice(c + 1).trim().replace(/\s+/g, ' ')]);
        }
        rules.push({ media, selectors: prelude.split(',').map((s) => s.trim().replace(/'/g, '"')), decls });
      }
      k = j;
    }
  };
  parseRules(src, null);
  return rules;
}

const VAR = /var\(\s*(--[\w-]+)\s*(?:,\s*([^()]*))?\)/;

function resolveOn(raw, own, inherited, seen = new Set()) {
  let out = raw;
  for (let n = 0; n < 50 && VAR.test(out); n++) {
    out = out.replace(VAR, (_, name, fallback) => {
      if (seen.has(name)) throw new Error(`cycle through ${name}`);
      if (own.has(name)) return resolveOn(own.get(name), own, inherited, new Set([...seen, name]));
      if (inherited.has(name)) return inherited.get(name);
      if (fallback !== undefined) return fallback.trim();
      throw new Error(`undefined custom property ${name}`);
    });
  }
  return out;
}

/** Computed custom properties on one element, given the ones it inherits. */
function computeElement(rules, matches, osDark, inherited) {
  const own = new Map();
  for (const r of rules) {
    if (r.media && !(osDark && r.media.includes('prefers-color-scheme: dark'))) continue;
    if (r.media && !r.media.includes('prefers-color-scheme')) continue;
    if (!r.selectors.some(matches)) continue;
    for (const [p, v] of r.decls) if (p.startsWith('--')) own.set(p, v);
  }
  const computed = new Map(inherited);
  for (const [p, v] of own) computed.set(p, resolveOn(v, own, inherited));
  return computed;
}

/**
 * The custom properties AnserProvider's element ends up with.
 * rootTheme: the data-theme on <html> (or null); providerTheme: the one on
 * the provider (or null for "no provider stamp"); osDark: the OS preference.
 */
export function themeVars(rules, { rootTheme = null, providerTheme = null, osDark = false }) {
  const rootMatches = (s) =>
    s === ':root' ||
    (s === '[data-theme]' && rootTheme !== null) ||
    (rootTheme !== null && s === `[data-theme="${rootTheme}"]`) ||
    (s === ':root:not([data-theme="light"])' && rootTheme !== 'light');
  const root = computeElement(rules, rootMatches, osDark, new Map());
  if (providerTheme === null) return root;
  const providerMatches = (s) => s === '[data-theme]' || s === `[data-theme="${providerTheme}"]`;
  return computeElement(rules, providerMatches, osDark, root);
}

/** A declared property of a class rule, var() resolved against `vars`. */
export function ruleValue(rules, selector, property, vars) {
  let raw;
  for (const r of rules) {
    if (r.media) continue;
    if (!r.selectors.includes(selector)) continue;
    for (const [p, v] of r.decls) if (p === property) raw = v;
  }
  if (raw === undefined) throw new Error(`${selector} declares no ${property}`);
  return resolveOn(raw, new Map(), vars);
}

export function hexToRgb(value) {
  const m = /^#([0-9a-f]{6})$/i.exec(value.trim());
  if (!m) return value;
  const n = parseInt(m[1], 16);
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
}
