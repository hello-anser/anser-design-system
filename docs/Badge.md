---
category: Data display
---

# Badge

Status chip for call outcomes and standing states. Colour is data, not decoration — every tone means one thing, and the call-outcome mapping is fixed:

| Outcome     | Tone      |
| ----------- | --------- |
| Booked      | `green`   |
| Question    | `neutral` |
| Transferred | `steel`   |
| Spam        | `red`     |
| Message     | `amber`   |

In dense tables and call lists use the dotted form: `dot` puts the tone in a leading 6px dot while the chip itself stays quiet (soft panel background, muted text).

```tsx
<Badge tone="green" dot>Booked</Badge>
<Badge tone="steel" dot>Transferred</Badge>
<Badge tone="red" dot>Spam</Badge>
```

Without `dot`, the chip goes solid — a soft tone wash with tone-strong text — for standalone states where the colour should carry at a glance:

```tsx
<Badge tone="green">LIVE</Badge>
<Badge tone="amber">Message taken</Badge>
<Badge tone="navy">Pro plan</Badge>
```

`neutral` is the default tone. `navy` is for brand and plan labels, never for outcomes. All native `<span>` props pass through (`title`, `className`, …).
