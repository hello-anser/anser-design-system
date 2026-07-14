import { Pipeline } from '@anser/ui';

export const DemoReadiness = () => (
  <Pipeline
    steps={[
      { label: 'Website URL', status: 'done', detail: 'hallowayplumbing.co.uk' },
      { label: 'KB profile', status: 'done', detail: 'Halloway Plumbing & Heating' },
      { label: 'Agent', status: 'done', detail: 'Live agent linked' },
      { label: 'Number', status: 'active', detail: 'Provisioning +44 7700 900123' },
      { label: 'Web call', status: 'pending', detail: 'Awaiting first test call' },
      { label: 'Call log', status: 'pending', detail: 'No rows yet' },
    ]}
  />
);

export const AllDone = () => (
  <Pipeline
    steps={[
      { label: 'Website URL', status: 'done', detail: 'gable-electrical.co.uk' },
      { label: 'KB profile', status: 'done', detail: 'Gable & Sons Electrical' },
      { label: 'Agent', status: 'done', detail: 'Live agent linked' },
      { label: 'Number', status: 'done', detail: '+44 7700 900456' },
      { label: 'Web call', status: 'done', detail: 'call_c187e5ff73f8b99f' },
      { label: 'Call log', status: 'done', detail: '3 recent rows' },
    ]}
  />
);

export const ShortPath = () => (
  <div style={{ maxWidth: 520 }}>
    <Pipeline
      steps={[
        { label: 'Site scraped', status: 'done', detail: 'brixton-heating.co.uk' },
        { label: 'Agent', status: 'active', detail: 'Building voice profile' },
        { label: 'Go live', status: 'pending' },
      ]}
    />
  </div>
);
