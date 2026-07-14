import { Switch } from '@anser/ui';

export const CallHandling = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
    <Switch defaultChecked label="Answer out-of-hours calls" />
    <Switch defaultChecked label="Text the caller a booking confirmation" />
    <Switch label="Transfer urgent calls to 07700 900418" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
    <Switch disabled label="Auto-book emergency call-outs" />
    <Switch disabled defaultChecked label="Record calls for training" />
  </div>
);

export const NoLabel = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Switch aria-label="Answer weekend calls" />
    <Switch defaultChecked aria-label="Answer weekday calls" />
  </div>
);
