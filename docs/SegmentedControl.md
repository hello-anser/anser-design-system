---
category: Forms
---

# SegmentedControl

A row of pill buttons for choosing exactly one of a few modes — answering modes, date ranges, voice options. The active pill goes navy (the neutral button colours), never amber: amber stays reserved for the screen's one primary action.

```tsx
<SegmentedControl
  options={[
    { label: '24/7', value: 'always' },
    { label: 'Out of hours', value: 'out-of-hours' },
    { label: 'After no answer', value: 'no-answer' },
    { label: 'When busy', value: 'busy' },
  ]}
  defaultValue="out-of-hours"
  onChange={(mode) => saveAnsweringMode(mode)}
/>
```

Use `value` for controlled selection, `defaultValue` for uncontrolled. `size="sm"` tightens the pills for toolbars and inline range pickers:

```tsx
<SegmentedControl
  size="sm"
  options={[
    { label: 'Today', value: 'today' },
    { label: '7 days', value: '7d' },
    { label: '30 days', value: '30d' },
  ]}
  value="7d"
/>
```
