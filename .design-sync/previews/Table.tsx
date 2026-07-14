import type { CSSProperties, ReactNode } from 'react';
import { Badge, Table } from '@anser/ui';

const Mono = ({ children }: { children: ReactNode }) => (
  <span style={{ fontFamily: 'var(--anser-font-mono)', fontSize: 12.5 }}>{children}</span>
);

const card: CSSProperties = {
  background: 'var(--anser-panel)',
  border: '1px solid var(--anser-line)',
  borderRadius: 'var(--anser-radius-lg)',
  padding: '18px 6px 8px',
};

export const CallLog = () => (
  <div style={card}>
    <Table
      aria-label="Call log"
      columns={['Time', 'Caller', 'Duration', 'Outcome', 'Summary']}
      rows={[
        [
          <Mono>14:22</Mono>,
          <Mono>07911 123456</Mono>,
          <Mono>2m 41s</Mono>,
          <Badge tone="green" dot>Booked</Badge>,
          'Boiler banging, booked Thu 9am, RG1',
        ],
        [
          <Mono>12:08</Mono>,
          <Mono>07822 654321</Mono>,
          <Mono>1m 12s</Mono>,
          <Badge tone="neutral" dot>Question</Badge>,
          'Landlord gas certs, asked for a quote',
        ],
        [
          <Mono>09:47</Mono>,
          <Mono>01183 900900</Mono>,
          <Mono>3m 06s</Mono>,
          <Badge tone="steel" dot>Transferred</Badge>,
          'Bathroom + boiler refit, passed to owner',
        ],
        [
          <Mono>02:31</Mono>,
          <Mono>07700 900111</Mono>,
          <Mono>2m 18s</Mono>,
          <Badge tone="amber" dot>Message</Badge>,
          'Out-of-hours ceiling leak, emergency callout',
        ],
      ]}
    />
  </div>
);

export const CompactNumeric = () => (
  <div style={{ ...card, maxWidth: 440 }}>
    <Table
      compact
      aria-label="Bookings by trade this month"
      columns={['Trade', 'Calls', 'Booked', 'Value']}
      align={['left', 'right', 'right', 'right']}
      rows={[
        ['Boiler repair', '34', '21', '£3,840'],
        ['Emergency callout', '18', '14', '£2,170'],
        ['Bathroom fitting', '12', '5', '£9,600'],
        ['Gas safety cert', '9', '7', '£630'],
      ]}
    />
  </div>
);
