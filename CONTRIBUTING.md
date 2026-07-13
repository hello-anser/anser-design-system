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
- **Colours only via `var(--anser-*)` tokens** (see `src/styles/tokens.css`). Never a hex literal — the token set is how dark theme works. The two exceptions already blessed: `#1a1205` for text on amber, and `color-mix` derivatives of a token.
- Amber (`--anser-amber`) appears only where meaning concentrates: the primary action, the active nav item, the one number that matters. When in doubt, use a neutral.
- Big numbers use the sans at 700/tight tracking; captions and micro-labels use the `.anser-label` idiom (mono, 10px, letter-spaced, uppercase) — that pairing of vast figure and hairline annotation is the brand's signature rhythm.
- Radii from tokens: inputs/buttons `--anser-radius` (10px), panels `--anser-radius-lg` (14px), pills `--anser-radius-pill`.
- Both themes must look right. Tokens do most of it; if a rule needs a theme-specific value, add a token to `tokens.css` (orchestrator only), don't write `[data-theme]` selectors in component CSS.

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
