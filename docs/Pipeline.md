---
category: Patterns
---

# Pipeline

The Demo Room readiness pipeline: a horizontal row of step cards joined by hairline arrows, showing how far a prospect's demo has been provisioned. The brand rule holds — **amber marks only the step in progress**; done steps get a green tick, pending steps stay hollow and quiet.

```tsx
<Pipeline
  steps={[
    { label: 'Website URL', status: 'done', detail: 'hallowayplumbing.co.uk' },
    { label: 'KB profile', status: 'done', detail: 'Halloway Plumbing & Heating' },
    { label: 'Agent', status: 'done', detail: 'Live agent linked' },
    { label: 'Number', status: 'active', detail: 'Provisioning +44 7700 900123' },
    { label: 'Web call', status: 'pending', detail: 'Awaiting first test call' },
    { label: 'Call log', status: 'pending', detail: 'No rows yet' },
  ]}
/>
```

Each step takes an equal share of the row, so the pipeline suits full-width panels. `detail` is optional — a URL, number, or count set in the mono at 11px. Give it room: six steps want roughly 700px or more.
