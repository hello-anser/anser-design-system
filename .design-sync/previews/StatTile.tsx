import { StatTile } from '@anser/ui';

export const DashboardRow = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
    <StatTile
      label="Calls this period"
      value={214}
      delta={{ text: '▲ 9% vs last period', tone: 'up' }}
    />
    <StatTile
      label="Missed-call recoveries"
      value={14}
      emphasis
      caption="jobs saved from voicemail"
    />
    <StatTile label="Appointments booked" value={31} caption="1–13 July" />
    <StatTile
      label="Minutes used"
      value={
        <>
          642<span style={{ fontSize: 15, color: 'var(--anser-faint)' }}> / 800</span>
        </>
      }
      caption="Growth plan"
    />
  </div>
);

export const Emphasis = () => (
  <div style={{ maxWidth: 240 }}>
    <StatTile
      label="Missed-call recovery"
      value={14}
      emphasis
      caption="jobs saved from voicemail"
    />
  </div>
);

export const UpDelta = () => (
  <div style={{ maxWidth: 240 }}>
    <StatTile
      label="Calls answered"
      value={38}
      delta={{ text: '▲ 12% vs last week', tone: 'up' }}
      caption="Halloway Plumbing & Heating"
    />
  </div>
);
