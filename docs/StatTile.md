---
category: Data display
---

# StatTile

Dashboard stat: a vast 32px figure over a hairline mono label — the pairing of huge number and instrument caption is the brand's signature rhythm. `emphasis` paints the value in strong amber; amber is a scalpel, so emphasise **at most one tile per screen** — the number that matters.

```tsx
<StatTile
  label="Calls answered"
  value={38}
  delta={{ text: '▲ 12% vs last week', tone: 'up' }}
/>
```

```tsx
<StatTile
  label="Missed-call recovery"
  value={14}
  emphasis
  caption="jobs saved from voicemail"
/>
```

`value` is a ReactNode, so composite figures work — e.g. minutes against an allowance:

```tsx
<StatTile
  label="Minutes used"
  value={<>182<span style={{ fontSize: 15, color: 'var(--anser-faint)' }}> / 250</span></>}
  caption="Growth plan"
/>
```

`delta` tones: `up` (green), `down` (red), `neutral` (muted, the default). `caption` sits below the delta and cites the source or period. All native `<div>` props pass through.
