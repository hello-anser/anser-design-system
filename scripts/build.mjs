import { build } from 'esbuild';
import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(join(dist, 'fonts'), { recursive: true });

// 1. JS bundle — ESM, React external
await build({
  entryPoints: [join(root, 'src/index.ts')],
  bundle: true,
  format: 'esm',
  outfile: join(dist, 'index.js'),
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  jsx: 'automatic',
  target: 'es2020',
  // The supplied logo files go into the bundle byte for byte, as data URLs,
  // so Wordmark needs no asset path in the consuming app (BO-411).
  loader: { '.svg': 'dataurl' },
});

// 2. Fonts — copy the woff2 files the @font-face rules in fonts.css reference
const fontFiles = [
  ['@fontsource/figtree', [400, 500, 600, 700].map((w) => `figtree-latin-${w}-normal.woff2`)],
];
for (const [pkg, files] of fontFiles) {
  for (const f of files) {
    cpSync(join(root, 'node_modules', pkg, 'files', f), join(dist, 'fonts', f));
  }
}

// 2b. Logo files — Samir's `--a-logo` and `--a-mark` tokens name them
// relative to dist/anser.css, so they ship beside it, unchanged.
mkdirSync(join(dist, 'logo'), { recursive: true });
for (const f of readdirSync(join(root, 'src/assets/logo'))) {
  if (f.endsWith('.svg')) cpSync(join(root, 'src/assets/logo', f), join(dist, 'logo', f));
}

// 3. CSS — tokens, fonts, base, then every component stylesheet, concatenated.
// All CSS is plain (no preprocessing); URLs are written relative to dist/anser.css.
const cssParts = ['tokens.css', 'fonts.css', 'base.css'].map((f) =>
  readFileSync(join(root, 'src/styles', f), 'utf8')
);
const componentsDir = join(root, 'src/components');
for (const comp of readdirSync(componentsDir).sort()) {
  const d = join(componentsDir, comp);
  if (!statSync(d).isDirectory()) continue;
  for (const f of readdirSync(d).sort()) {
    if (f.endsWith('.css')) cssParts.push(`/* — ${comp} — */\n` + readFileSync(join(d, f), 'utf8'));
  }
}
writeFileSync(join(dist, 'anser.css'), cssParts.join('\n'));

// 4. Type declarations
execSync('npx tsc -p tsconfig.json', { cwd: root, stdio: 'inherit' });

console.log('build ok → dist/');
