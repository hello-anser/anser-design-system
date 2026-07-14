import { SegmentedControl } from '@anser/ui';

export const AnsweringMode = () => (
  <SegmentedControl
    options={[
      { label: '24/7', value: 'always' },
      { label: 'Out of hours', value: 'out-of-hours' },
      { label: 'After no answer', value: 'no-answer' },
      { label: 'When busy', value: 'busy' },
    ]}
    defaultValue="out-of-hours"
  />
);

export const DateRangeSmall = () => (
  <SegmentedControl
    size="sm"
    options={[
      { label: 'Today', value: 'today' },
      { label: '7 days', value: '7d' },
      { label: '30 days', value: '30d' },
    ]}
    defaultValue="7d"
  />
);
