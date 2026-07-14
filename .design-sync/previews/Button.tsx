import { Button } from '@anser/ui';

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
    <Button variant="primary">Start demo</Button>
    <Button variant="neutral">Save changes</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="danger">Delete number</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="neutral" size="md">Book appointment</Button>
    <Button variant="neutral" size="sm">Reschedule</Button>
    <Button variant="ghost" size="sm">View transcript</Button>
  </div>
);

export const WithIcon = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" icon={<span aria-hidden>▸</span>}>Call the demo line</Button>
    <Button variant="ghost" icon={<span aria-hidden>↻</span>}>Re-scrape site</Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" disabled>Start demo</Button>
    <Button variant="ghost" disabled>Cancel</Button>
  </div>
);
