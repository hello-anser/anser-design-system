---
category: Forms
---

# Tag

A removable word in a list the owner builds: the words the receptionist should catch, the towns a business covers. A quiet pill, never a status colour (that is `Badge`). With `onRemove` it carries a real `<button type="button">`, so removing a word never submits the form.

```tsx
<Tag onRemove={() => remove('Worcester Bosch')}>Worcester Bosch</Tag>
<Tag onRemove={() => remove('Solihull')}>Solihull</Tag>
<Tag>Vaillant</Tag>
```

The remove button's accessible name is "Remove" and the tag's text; pass `removeLabel` when the child is not a plain string.
