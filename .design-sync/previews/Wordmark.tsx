import { Wordmark } from '@anser/ui';

export const Brand = () => <Wordmark size={44} />;

export const InTheRail = () => <Wordmark size={22} />;

export const Mark = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Wordmark variant="icon" size={48} />
    <Wordmark variant="icon" size={32} />
    <Wordmark size={16} />
  </div>
);
