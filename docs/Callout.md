---
category: Layout
---

# Callout

A quiet note panel for inline guidance, confirmations, and warnings. The brand rule: **no icons — restraint is the message**. A 3px tone-coloured left rule is the only device; the body stays muted, and the optional `title` takes the tone's strong colour at 600 weight.

```tsx
<Callout>
  New numbers can take up to 10 minutes to start receiving calls after provisioning.
</Callout>
```

```tsx
<Callout tone="warning" title="Number expiring">
  Your Twilio number 020 7946 0958 expires in 3 days. Renew it in Phone Numbers
  to keep answering calls.
</Callout>
```

```tsx
<Callout tone="success">Your agent is live. Calls to 020 7946 0958 are now answered by Anser.</Callout>
<Callout tone="danger">Call forwarding failed twice today. Check the divert with your provider.</Callout>
```

Tones: `info` (default, neutral wash), `success`, `warning` (amber — reserve it for genuinely time-sensitive notices), `danger`.
