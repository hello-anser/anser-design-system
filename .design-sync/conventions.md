# Building with @anser/ui

Anser is an AI receptionist for UK trades businesses. Screens you build must feel like "the answer, given": calm navy-and-neutral surfaces, one deliberate amber mark, nothing decorative.

## Wrap every screen

Wrap the whole screen in `AnserProvider` — it applies the Inter type, the canvas colour, and the theme. Components outside it render on an unthemed canvas.

```tsx
<AnserProvider theme="light">…screen…</AnserProvider>
```

`theme="light"` is the product default (warm off-white); `theme="dark"` flips every token. Never hard-code theme colours — use tokens and both themes work automatically.

## The styling idiom: tokens, not invented CSS

Components carry their look via props (`variant`, `tone`, `size`, `emphasis`). For your own layout glue, style with the CSS custom properties the system ships — never hex literals, never made-up class names:

- Surfaces: `--anser-bg` (canvas), `--anser-panel` (cards), `--anser-panel-2` (nested/inputs), `--anser-panel-3` (chips/tracks), `--anser-line` (hairline borders)
- Text: `--anser-text`, `--anser-muted`, `--anser-faint`
- Brand: `--anser-navy`, `--anser-amber`, `--anser-amber-soft`, `--anser-amber-strong` (text-safe amber on light)
- Signals: `--anser-green`, `--anser-red`, `--anser-red-soft`, `--anser-steel` (the "transferred" outcome)
- Type: `--anser-font-sans` (Inter), `--anser-font-mono` (JetBrains Mono)
- Radii: `--anser-radius-sm` 8px, `--anser-radius` 10px (controls), `--anser-radius-lg` 14px (panels), `--anser-radius-pill`

Two shipped utility classes: `anser-label` (the instrument-marking idiom — mono 10px letter-spaced uppercase, used for micro-captions and section labels) and `anser-mono` (mono for phone numbers, durations, URLs, call IDs).

## The amber law

Amber is a scalpel, never a brush. Per screen: **one** `Button variant="primary"`, **one** `StatTile emphasis`, **one** active `SidebarItem`, **one** highlighted `BarChart` bar. Everything else is navy, neutral, or hairline. When in doubt, don't use amber.

## Content voice

Plain-spoken, in jobs and money, never AI jargon: "14 calls recovered this week", "Boiler repair — booked for Thu 9am", UK phone numbers (07911 123456). A stat is anchored by a tiny mono caption citing its period or source.

## Where the truth lives

Read `styles.css` (tokens + every component's CSS) before styling anything custom, and each component's `.prompt.md` for its API and intended use.

## Idiomatic example

```tsx
<AnserProvider theme="light">
  <div style={{ padding: 24, display: 'grid', gap: 14 }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
      <StatTile label="Calls this period" value="214" caption="1–13 July" />
      <StatTile label="Missed-call recoveries" value="14" caption="Jobs saved from voicemail" emphasis />
      <StatTile label="Appointments booked" value="31" caption="Synced to Google Calendar" />
    </div>
    <Card title="Recent calls" note="Live from your Anser line" actions={<Button variant="ghost" size="sm">View all</Button>}>
      <Table
        columns={['Time', 'Caller', 'Outcome']}
        rows={[[<span className="anser-mono">14:22</span>, <span className="anser-mono">07911 123456</span>, <Badge dot tone="green">Booked</Badge>]]}
      />
    </Card>
    <Button variant="primary">Start demo</Button>
  </div>
</AnserProvider>
```
