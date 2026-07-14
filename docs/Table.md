---
category: Data display
---

# Table

Data table for call logs, bookings and numbers. Headers are mono micro-labels (the `.anser-label` idiom), body rows are 13px on 1px hairlines — **no zebra striping, no outer border**: the host puts the table inside a Card, which supplies the frame.

```tsx
<Table
  columns={['Time', 'Caller', 'Duration', 'Outcome', 'Summary']}
  rows={[
    [
      <span className="anser-mono">14:22</span>,
      '07911 123456',
      <span className="anser-mono">2m 41s</span>,
      <Badge tone="green" dot>Booked</Badge>,
      'Boiler banging, booked Thu 9am, RG1',
    ],
    [
      <span className="anser-mono">09:47</span>,
      '01183 900900',
      <span className="anser-mono">3m 06s</span>,
      <Badge tone="steel" dot>Transferred</Badge>,
      'Bathroom + boiler refit, passed to owner',
    ],
  ]}
/>
```

Cells are `ReactNode`, so compose freely: mono spans for times, durations and phone numbers, `Badge dot` for outcomes. Numeric columns right-align via `align` (right-aligned cells also get tabular figures):

```tsx
<Table
  compact
  columns={['Trade', 'Calls', 'Booked', 'Value']}
  align={['left', 'right', 'right', 'right']}
  rows={[
    ['Boiler repair', '34', '21', '£3,840'],
    ['Emergency callout', '18', '14', '£2,170'],
  ]}
/>
```

`compact` tightens cell padding to 10px for dense screens. All native `<table>` props pass through (`aria-label`, `className`, …).
