# Authoring components for @anser/ui

Every component follows the same contract. `Button/` is the exemplar — copy its shape.

## Files per component

```
src/components/<Name>/<Name>.tsx    — the component
src/components/<Name>/<name>.css    — its styles (plain CSS, auto-bundled)
docs/<Name>.md                      — usage doc with `category:` frontmatter
```

Register exports in `src/index.ts`: `export { <Name> } from …` and `export type { <Name>Props } from …`.

## Component contract

- Export a named PascalCase component and an exported `<Name>Props` interface. No default exports.
- A `/** … */` JSDoc line on the component — it becomes the design agent's one-line summary. Say what it is and the brand rule that governs it.
- Props are typed and documented with JSDoc. Extend native props (`ButtonHTMLAttributes`, `InputHTMLAttributes`…) where the component wraps a native element; always pass `className` through.
- Function components only; `forwardRef` where the underlying element is interactive.
- No context, no hooks with side effects, no data fetching. Everything must render statically from props. Controlled props (`checked`, `value`) accept an `onChange` but must render fine without one.

## Styling contract

- Class names: `anser-<block>`, modifiers `anser-<block>--<mod>`, elements `anser-<block>__<part>`. Plain CSS, no preprocessor, no nesting.
- **Colours only via the semantic `var(--a-*)` tokens** (see `src/styles/tokens.css`, Part A, Samir's brand pack v1.1). Never a hex literal and never a palette name (`--anser-ink`, `--anser-blue`) in a component — the semantic layer is how dark theme works. The one blessed exception: `color-mix` derivatives of a token. The June `--anser-*` colour names are aliases for one release (README, "Old token names"); do not write new code against them.
- Anser Blue (`--a-accent`) is for fills and marks only, on the one thing that matters, under a tenth of any screen. Blue is never text on a light surface; links use `--a-text-link`. The primary button is blue with `--a-text-on-accent` ink text in both themes, never white on blue.
- Type is Figtree only, from the `--anser-size-*` scale (13px is the floor). Sentence case everywhere: no uppercase micro-labels, no letter-spaced captions. `.anser-label` is a sentence-case fine label.
- Radii from tokens: tags `--anser-radius-sm` (6px), buttons and inputs `--anser-radius-md` (12px), cards and panels `--anser-radius-lg` (20px), status pills only `--anser-radius-pill`.
- The logo is placed from the supplied files in `src/assets/logo/`, never retyped or recoloured; swap a file, never edit its paths.
- Both themes must look right. Tokens do most of it; if a rule needs a theme-specific value, add a token to `tokens.css` Part B (orchestrator only), don't write `[data-theme]` selectors in component CSS.
- `npm test` must stay green: it asserts every `--a-*` token has a dark partner, every old name resolves, the primary button's colours, and that `Wordmark` places the supplied files.

## Docs contract (`docs/<Name>.md`)

Frontmatter `category:` sets the group in the component picker: `Foundations`, `Actions`, `Forms`, `Data display`, `Layout`, `Navigation`, `Overlay`, `Patterns`. Body: one sentence on what it is, the brand rule if any, then 1–3 short JSX examples with realistic Anser content (calls, jobs, bookings, trades customers — never foo/bar).

## Preview contract (`.design-sync/previews/<Name>.tsx`)

One file per component, named exports only — each export is one preview card cell:

```tsx
import { Button } from '@anser/ui';

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button variant="primary">Start demo</Button>
    <Button variant="neutral">Save changes</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="danger">Delete number</Button>
  </div>
);
export const Disabled = () => <Button variant="primary" disabled>Start demo</Button>;
```

2–6 exports: one canonical story, the main variant axis swept, static states (`disabled`, `error`, `open`), realistic composition for compounds. Realistic Anser content everywhere — these cards are browsed by humans and imitated by the design agent.
