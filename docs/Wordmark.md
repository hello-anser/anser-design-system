---
category: Foundations
---

# Wordmark

The Anser logo, placed from Samir's supplied SVG files (brand pack v1.1), never retyped: `anser-wordmark-primary.svg` on light, `anser-wordmark-reversed.svg` on dark, and the mark (`anser-mark-navy.svg`, dark `anser-mark-darkmode.svg`) whenever the wordmark would be narrower than 96px. Never recolour, redraw or put words inside it.

```tsx
<Wordmark size={32} />
<Wordmark size={22} />
<Wordmark variant="icon" size={40} />
```

`size` is the height in pixels; the width follows the file. `icon` always places the mark. `lockup` is the June name and renders the same as `wordmark`; `sub` is ignored.
