import { Wordmark } from '@anser/ui';

export const Brand = () => <Wordmark size={44} />;

export const WithTagline = () => <Wordmark size={36} sub="EVERY CALL, ANSWERED" />;

export const AppIcon = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <Wordmark variant="icon" size={48} />
    <Wordmark variant="icon" size={32} />
    <Wordmark variant="icon" size={20} />
  </div>
);

export const Lockup = () => <Wordmark variant="lockup" size={30} />;
