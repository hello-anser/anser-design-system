---
category: Layout
---

# Card

The Anser panel — white surface, 1px hairline border, 14px radius, 20px padding. Every dashboard block lives in one; the card stays quiet so the content inside can earn emphasis.

```tsx
<Card
  title="Recent calls"
  note="Latest first · answered by Anser"
  actions={<Button variant="ghost" size="sm">View all</Button>}
>
  <p>38 calls answered this week for Halloway Plumbing &amp; Heating.</p>
</Card>
```

Set `padded={false}` when the card wraps edge-to-edge content like a table or call list, and let the rows carry their own padding:

```tsx
<Card padded={false}>
  <CallRow caller="Mrs Patel" number="07700 900341" summary="Leaking radiator, Didsbury" />
  <CallRow caller="J. Okafor" number="07700 900118" summary="Boiler service booking" />
</Card>
```

`title` renders at 14px/600 with the muted 12px `note` beneath it; `actions` is a right-aligned slot in the title row for a ghost button or badge. All three are optional — a bare `<Card>` is just the panel.
