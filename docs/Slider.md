---
category: Forms
---

# Slider

A stepped range control on a real `<input type="range">`, so a plain form posts it with no script. The setting's name and its value **in words** sit above the track and the owner's words for the two ends sit under it; no raw number is shown. The fill is Anser Blue, a mark rather than an action.

```tsx
<Slider
  name="voice_speed_step"
  label="Speaking speed"
  valueText="A little slower"
  lo="Slower"
  hi="Faster"
  min={0}
  max={4}
  step={1}
  defaultValue={1}
/>
```

Controlled use pairs `value` with `onChange` and updates `valueText` from the step; the control still renders and posts fine without a handler. Other native `<input>` props pass through.
