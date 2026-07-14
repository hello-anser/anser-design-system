import { Button, Card } from '@anser/ui';

export const TitledWithActions = () => (
  <div style={{ maxWidth: 520 }}>
    <Card
      title="Recent calls"
      note="Latest first · answered by Anser"
      actions={
        <Button variant="ghost" size="sm">
          View all
        </Button>
      }
    >
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--anser-muted)' }}>
        38 calls answered this week for Halloway Plumbing &amp; Heating. 14 came in
        after hours and would have gone to voicemail — Anser booked 9 of them
        straight into the diary.
      </p>
    </Card>
  </div>
);

export const UnpaddedList = () => (
  <div style={{ maxWidth: 520 }}>
    <Card padded={false}>
      {[
        { caller: 'Mrs Patel', number: '07700 900341', summary: 'Leaking radiator, Didsbury' },
        { caller: 'J. Okafor', number: '07700 900118', summary: 'Boiler service booking' },
        { caller: 'Dale Roofing', number: '0161 496 0723', summary: 'Scaffold hire enquiry' },
      ].map((row, i) => (
        <div
          key={row.number}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 12,
            padding: '12px 20px',
            borderTop: i === 0 ? 'none' : '1px solid var(--anser-line)',
          }}
        >
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{row.caller}</div>
            <div style={{ fontSize: 12, color: 'var(--anser-muted)' }}>{row.summary}</div>
          </div>
          <span
            style={{
              fontFamily: 'var(--anser-font-mono)',
              fontSize: 11,
              color: 'var(--anser-faint)',
            }}
          >
            {row.number}
          </span>
        </div>
      ))}
    </Card>
  </div>
);

export const Plain = () => (
  <div style={{ maxWidth: 520 }}>
    <Card>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55 }}>
        Your demo number 0161 496 0100 is live. Ring it now to hear the Anser
        receptionist answer as Halloway Plumbing &amp; Heating.
      </p>
    </Card>
  </div>
);
