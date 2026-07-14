---
category: Navigation
---

# Sidebar

The app's left navigation rail — `Sidebar` (the frame), `SidebarSection` (a labelled group) and `SidebarItem` (one destination). Chrome uses the dedicated `--anser-sidebar-*` tokens; the **active item is the only amber in the rail**: a soft amber fill, strong text and a 3px amber left rule. Everything else stays neutral.

```tsx
<Sidebar
  footer={<CompanySwitcher company="Halloway Plumbing & Heating" />}
>
  <SidebarSection label="Main">
    <SidebarItem icon={<HomeIcon />} href="/home">Home</SidebarItem>
    <SidebarItem icon={<SparkIcon />} active>Demo Room</SidebarItem>
    <SidebarItem icon={<PhoneIcon />} badge={<Badge tone="amber">3</Badge>}>
      Call Log
    </SidebarItem>
  </SidebarSection>
  <SidebarSection label="Build">
    <SidebarItem icon={<PersonIcon />}>Assistant</SidebarItem>
    <SidebarItem icon={<BookIcon />}>Knowledge Base</SidebarItem>
  </SidebarSection>
</Sidebar>
```

`Sidebar` fills the height of its parent (flex column, nav scrolls, `footer` pinned to the bottom) and holds a fixed `width` (default 232). The `header` slot defaults to the Anser wordmark with the "AI RECEPTIONIST" sub-label — pass your own node to replace it, or `null` to remove it.

`SidebarItem` renders an `<a>` when `href` is set, otherwise a `<button>`; `icon` takes a 16px inline SVG on `currentColor` (it turns amber when active) and `badge` right-aligns a count or status chip:

```tsx
<SidebarItem icon={<CalendarIcon />} onClick={() => go('scheduler')}>
  Scheduler
</SidebarItem>
```

`SidebarSection`'s `label` renders in the mono micro-label idiom (10px, letter-spaced, uppercase) with 18px of air above — sections, not dividers, are how the rail breathes.
