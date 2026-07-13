---
category: Foundations
---

# AnserProvider

Theme root for every Anser screen. Wrap the app (or any subtree) in `AnserProvider` — it applies the brand tokens, Inter type, and the light or dark canvas. Components rendered outside it are unthemed.

Light is the product default; dark is the toggle. Amber stays the single accent in both.

```tsx
<AnserProvider theme="light">
  <YourApp />
</AnserProvider>
```

Switch theme by swapping the prop — every token flips with it:

```tsx
<AnserProvider theme={dark ? 'dark' : 'light'}>…</AnserProvider>
```
