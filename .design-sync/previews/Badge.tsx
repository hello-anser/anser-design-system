import { Badge } from '@anser/ui';

export const CallOutcomes = () => (
  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <Badge tone="green" dot>Booked</Badge>
    <Badge tone="neutral" dot>Question</Badge>
    <Badge tone="steel" dot>Transferred</Badge>
    <Badge tone="red" dot>Spam</Badge>
    <Badge tone="amber" dot>Message</Badge>
  </div>
);

export const SolidTones = () => (
  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <Badge tone="neutral">Mock data</Badge>
    <Badge tone="amber">Message taken</Badge>
    <Badge tone="green">Provisioned</Badge>
    <Badge tone="red">Missed call</Badge>
    <Badge tone="steel">After hours</Badge>
    <Badge tone="navy">Pro plan</Badge>
  </div>
);

export const Live = () => <Badge tone="green">LIVE</Badge>;

export const InContext = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13 }}>
    <span style={{ fontWeight: 600 }}>07911 123456</span>
    <span style={{ color: 'var(--anser-faint)', fontSize: 11.5 }}>Today 14:22 · 2m 41s</span>
    <Badge tone="green" dot>Booked</Badge>
    <span style={{ color: 'var(--anser-faint)', fontSize: 11.5 }}>Boiler banging, booked Thu 9am, RG1</span>
  </div>
);
