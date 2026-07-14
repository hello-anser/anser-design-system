import { Callout } from '@anser/ui';

export const Tones = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 520 }}>
    <Callout tone="info">
      New numbers can take up to 10 minutes to start receiving calls after provisioning.
    </Callout>
    <Callout tone="success">
      Your agent is live. Calls to 020 7946 0958 are now answered by Anser.
    </Callout>
    <Callout tone="warning">
      Your Twilio number expires in 3 days. Renew it in Phone Numbers.
    </Callout>
    <Callout tone="danger">
      Call forwarding failed twice today. Check the divert settings with your provider.
    </Callout>
  </div>
);

export const WithTitle = () => (
  <div style={{ maxWidth: 520 }}>
    <Callout tone="warning" title="Number expiring">
      Your Twilio number 020 7946 0958 expires in 3 days. Renew it in Phone Numbers to keep
      answering calls for Hartley Plumbing &amp; Heating.
    </Callout>
  </div>
);

export const InfoDefault = () => (
  <div style={{ maxWidth: 520 }}>
    <Callout title="Mock data">
      This dashboard is showing sample calls until your first real call arrives. Booked jobs,
      messages, and transfers will replace it automatically.
    </Callout>
  </div>
);
