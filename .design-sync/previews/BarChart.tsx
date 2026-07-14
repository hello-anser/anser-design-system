import { BarChart } from '@anser/ui';

export const CallsPerDay = () => (
  <div style={{ maxWidth: 420 }}>
    <BarChart
      data={[
        { label: 'Mon', value: 12 },
        { label: 'Tue', value: 16 },
        { label: 'Wed', value: 14 },
        { label: 'Thu', value: 23 },
        { label: 'Fri', value: 18 },
        { label: 'Sat', value: 9 },
        { label: 'Sun', value: 6 },
      ]}
      highlight={3}
    />
  </div>
);

export const Fortnight = () => (
  <div style={{ maxWidth: 560 }}>
    <BarChart
      height={160}
      data={[
        { label: '30', value: 8 },
        { label: '01', value: 11 },
        { label: '02', value: 14 },
        { label: '03', value: 17 },
        { label: '04', value: 13 },
        { label: '05', value: 7 },
        { label: '06', value: 5 },
        { label: '07', value: 12 },
        { label: '08', value: 19 },
        { label: '09', value: 16 },
        { label: '10', value: 21 },
        { label: '11', value: 15 },
        { label: '12', value: 10 },
        { label: '13', value: 6 },
      ]}
    />
  </div>
);
