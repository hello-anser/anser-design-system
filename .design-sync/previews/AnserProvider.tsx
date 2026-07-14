import { AnserProvider, Button, StatTile } from '@anser/ui';

const Sample = () => (
  <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
    <StatTile label="Missed-call recoveries" value="14" caption="This week · calls answered after hours" emphasis />
    <div style={{ display: 'flex', gap: 10 }}>
      <Button variant="primary">Start demo</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  </div>
);

export const LightTheme = () => (
  <AnserProvider theme="light" style={{ borderRadius: 12, overflow: 'hidden' }}>
    <Sample />
  </AnserProvider>
);

export const DarkTheme = () => (
  <AnserProvider theme="dark" style={{ borderRadius: 12, overflow: 'hidden' }}>
    <Sample />
  </AnserProvider>
);
