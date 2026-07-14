---
category: Navigation
---

# SidebarItem

One navigation entry inside a `Sidebar`. The active item is the screen the user is on — amber-soft fill, strong text, and a 3px amber left rule (amber marks exactly one item at a time). Renders an `<a>` when `href` is set, otherwise a `<button>`.

```tsx
<SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
<SidebarItem icon={<CallIcon />} badge="14">Call Log</SidebarItem>
<SidebarItem href="/numbers">Phone Numbers</SidebarItem>
```

`badge` takes a small trailing count or status; `icon` a leading glyph. Always place items inside `Sidebar`, grouped under `SidebarSection` labels.
