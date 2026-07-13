# @anser/ui

The Anser design system: React components for the Anser product (AI receptionist for trades and home services). Built on the brand law — deep navy `#15233B` plus one warm amber `#F5A623`, the lowercase `anser.` wordmark with its amber full stop, Inter for text, JetBrains Mono for instrument-marking captions. Light theme default, dark via toggle; amber constant in both.

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
npm run build    # → dist/index.js, dist/index.d.ts, dist/anser.css, dist/fonts/
```

See `CONTRIBUTING.md` for the component contract. Brand sources live in the parent Anser folder: `04-Brand-Anser.md`, `17-CTO-Handover-and-Quickstart.md` Part 6.1, `deck/Anser-Deck-Design-Philosophy.md`.
