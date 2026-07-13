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
});

// 2. Fonts — copy the woff2 files the @font-face rules in fonts.css reference
const fontFiles = [
  ['@fontsource/inter', ['inter-latin-400-normal.woff2', 'inter-latin-500-normal.woff2', 'inter-latin-600-normal.woff2', 'inter-latin-700-normal.woff2', 'inter-latin-800-normal.woff2']],
  ['@fontsource/jetbrains-mono', ['jetbrains-mono-latin-400-normal.woff2', 'jetbrains-mono-latin-500-normal.woff2']],
];
for (const [pkg, files] of fontFiles) {
  for (const f of files) {
    cpSync(join(root, 'node_modules', pkg, 'files', f), join(dist, 'fonts', f));
  }
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
