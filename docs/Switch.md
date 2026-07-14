---
category: Forms
---

# Switch

On/off toggle, rendered as a real `<button role="switch">` — no hidden checkbox. The on-state track is navy (the neutral convention, same as the active segmented pill), never amber: amber stays reserved for the screen's one primary action.

```tsx
<Switch defaultChecked label="Answer out-of-hours calls" />
<Switch label="Text the caller a booking confirmation" />
```

Controlled use pairs `checked` with `onChange`; the switch still renders fine without a handler.

```tsx
<Switch
  checked={smsConfirmations}
  onChange={setSmsConfirmations}
  label="Send SMS confirmations"
/>
```

`disabled` greys the whole control, label included. Without `label`, pass `aria-label` so the switch keeps an accessible name. Other native `<button>` props pass through (`id`, `aria-describedby`, …).
