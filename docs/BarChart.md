---
category: Data display
---

# BarChart

Pure-CSS column chart for call and booking volumes — flex columns auto-scaled to the largest value, mono x-axis labels beneath. The brand law: **amber is a scalpel** — `highlight` paints exactly one bar amber (the peak day, the number that matters); omit it for an all-neutral chart.

```tsx
<BarChart
  data={[
    { label: 'Mon', value: 12 },
    { label: 'Tue', value: 16 },
    { label: 'Wed', value: 14 },
    { label: 'Thu', value: 23 },
    { label: 'Fri', value: 18 },
    { label: 'Sat', value: 9 },
    { label: 'Sun', value: 6 },
  ]}
  highlight={3}
/>
```

`height` sets the bar area in pixels (default `120`); labels sit below it. All native `<div>` props pass through, and the chart carries a generated `aria-label` describing every bar.

```tsx
<BarChart height={160} data={bookingsLastFortnight} />
```
