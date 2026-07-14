---
category: Overlay
---

# Modal

Centered dialog over a dark scrim, rendered in place — no portal, so it drops into any tree and shows statically from `open`. One decision per modal: a `title` that asks the question, a short body, and a `footer` with a ghost dismiss beside the single action that answers it. Clicking the scrim calls `onClose`; when `open` is false it renders nothing.

```tsx
<Modal
  open={confirming}
  onClose={() => setConfirming(false)}
  title="Delete phone number?"
  width={400}
  footer={
    <>
      <Button variant="ghost" onClick={() => setConfirming(false)}>Cancel</Button>
      <Button variant="danger" onClick={deleteNumber}>Delete number</Button>
    </>
  }
>
  Callers dialling 0161 496 0724 will no longer reach Anser, and forwarding
  from your existing line stops immediately.
</Modal>
```

```tsx
<Modal
  open={editing}
  onClose={() => setEditing(false)}
  title="Reschedule booking"
  width={440}
  footer={
    <>
      <Button variant="ghost">Cancel</Button>
      <Button variant="neutral">Save changes</Button>
    </>
  }
>
  <div style={{ display: 'grid', gap: 14 }}>
    <Input label="Customer" defaultValue="Mrs Patel — leaking radiator" />
    <Input label="New time" mono defaultValue="Tue 14 Jul, 09:30" />
  </div>
</Modal>
```

`width` sets the dialog width in pixels (default 480) and is capped to the viewport. The dialog is a standard panel — white surface, 1px line border, 14px radius — so nested Inputs and Buttons sit on it exactly as they do on any panel.
