# @anser/ui

The Anser design system: React components for the Anser product (AI receptionist for trades and home services). Built on Samir's brand pack v1.1 (2026-09-15): Ink `#0A0A2E` for words, Anser Blue `#1AA7FE` for the one thing that matters, Figtree as the one family, and the supplied logo files placed, never retyped. Light theme default, dark via `data-theme="dark"` or the OS preference.

## Use

```tsx
import { AnserProvider, Button, Wordmark } from '@anser/ui';
import '@anser/ui/styles.css';

<AnserProvider theme="light">
  <Wordmark size={28} />
  <Button variant="primary">Start demo</Button>
</AnserProvider>
```

## Develop

```sh
npm ci
npm run build    # → dist/index.js, dist/index.d.ts, dist/anser.css, dist/fonts/, dist/logo/
npm test         # builds, then the token and Wordmark tests (node --test)
```

See `CONTRIBUTING.md` for the component contract. Brand sources live in the parent Anser folder: `04-Brand-Anser.md`, `17-CTO-Handover-and-Quickstart.md` Part 6.1, `deck/Anser-Deck-Design-Philosophy.md`.

## Tokens, v2 (BO-411, 2026-09-29)

`src/styles/tokens.css` Part A is Samir's `anser-tokens.css` v1.1 verbatim: the palette (`--anser-ink`, `--anser-blue`, ...), the semantic `--a-*` layer that components use, each with a dark partner, and the type, spacing, radius and motion scales. Part B adds an explicit-light partner, the two logo display switches Wordmark reads, and the old names below.

### Old token names (aliases, removed in the release after BO-412 to BO-415)

Every `--anser-*` name the June set defined still resolves, as an alias onto the nearest semantic token, so no component or page breaks mid-migration. New code uses the `--a-*` names.

| June name | Now |
|---|---|
| `--anser-navy` | `--anser-ink` |
| `--anser-amber` | `--a-accent` |
| `--anser-bg` | `--a-surface` |
| `--anser-panel` | `--a-surface-raised` |
| `--anser-panel-2`, `--anser-panel-3` | `--a-surface-sunken` |
| `--anser-line` | `--a-border` |
| `--anser-text` | `--a-text` |
| `--anser-muted`, `--anser-faint`, `--anser-steel` | `--a-text-secondary` |
| `--anser-amber-soft` | `--a-accent-wash` |
| `--anser-amber-strong` | `--a-text-link` |
| `--anser-green` | `--a-status-booked` |
| `--anser-red` | `--a-status-missed` |
| `--anser-red-soft` | `--a-status-missed` at 14% (`color-mix`) |
| `--anser-sidebar-bg` | `--a-surface` |
| `--anser-sidebar-card`, `--anser-sidebar-hover` | `--a-surface-raised` |
| `--anser-sidebar-input` | `--a-surface-sunken` |
| `--anser-sidebar-line` | `--a-border` |
| `--anser-sidebar-text`, `--anser-sidebar-faint` | `--a-text-secondary` |
| `--anser-sidebar-strong` | `--a-text` |
| `--anser-topbar-bg` | `--a-surface` at 85% (`color-mix`) |
| `--anser-neutral-btn-bg` | `--a-text` |
| `--anser-neutral-btn-text` | `--a-surface` |
| `--anser-font-sans`, `--anser-font-mono` | `--anser-font` (Figtree) |
| `--anser-radius` | `--anser-radius-md` (12px) |
| `--anser-radius-sm`, `--anser-radius-lg`, `--anser-radius-pill` | Samir's own names now: 6px, 20px, 999px |

`.anser-label` is now a sentence-case fine label (Figtree, 13px, secondary): the June mono, uppercase, letter-spaced idiom is gone because the brand forbids all caps. `.anser-mono` is Figtree with tabular figures. `Wordmark`'s `sub` prop is accepted and ignored until the aliases go.
