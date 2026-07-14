---
category: Forms
---

# Select

Native dropdown styled to match `Input` — panel-2 surface, hairline border, 10px radius, custom chevron. Neutral by default; amber appears only as the focus ring.

```tsx
<Select
  label="Vertical"
  hint="Sets the trades prompt template"
  options={[
    { label: 'Plumbing & Heating', value: 'plumbing' },
    { label: 'Electrical', value: 'electrical' },
    { label: 'Roofing', value: 'roofing' },
    { label: 'Landscaping', value: 'landscaping' },
  ]}
  defaultValue="plumbing"
/>
```

```tsx
<Select label="Transfer target" error="Choose a number before going live">
  <option value="">Select a number…</option>
  <option value="mobile">Dave&apos;s mobile — 07700 900418</option>
  <option value="office">Office line — 0118 496 0230</option>
</Select>
```

Options come either as the `options` array or as `<option>` children (or both — array first). `error` replaces `hint` and turns the border red. All native `<select>` props pass through (`value`, `onChange`, `disabled`, `name`, …).
