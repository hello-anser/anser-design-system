---
category: Forms
---

# Input

Single-line text field. The field rests quietly on the `panel-2` surface; focus is its one amber moment — amber border plus a soft amber ring. `mono` switches the field text to JetBrains Mono for machine-ish values: URLs, phone numbers, booking references.

```tsx
<Input label="Business name" placeholder="Smith's Plumbing & Heating" />
<Input
  label="Booking page"
  mono
  defaultValue="https://smithsplumbing.co.uk"
  hint="Sent in the confirmation text after a booking."
/>
<Input
  label="Divert number"
  mono
  defaultValue="0161 496 33"
  error="That number is too short — UK landlines have 11 digits."
/>
```

`label` renders in the mono instrument idiom above the field; `hint` sits 11px muted below; `error` replaces the hint and turns the field red. All native `<input>` props pass through (`value`, `onChange`, `type`, `disabled`, …).
