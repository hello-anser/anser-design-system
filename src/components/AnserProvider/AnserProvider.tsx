import type { CSSProperties, ReactNode } from 'react';

export interface AnserProviderProps {
  /** Theme for everything inside. Light is the product default. */
  theme?: 'light' | 'dark';
  /** App content. */
  children?: ReactNode;
  /** Extra class for the root element. */
  className?: string;
  style?: CSSProperties;
}

/**
 * Theme root for the Anser design system. Wrap your app (or any subtree)
 * in AnserProvider so components pick up the brand tokens, Inter type and
 * the light or dark canvas. Without it, components render unthemed.
 */
export function AnserProvider({ theme = 'light', children, className, style }: AnserProviderProps) {
  return (
    <div
      className={['anser-root', className].filter(Boolean).join(' ')}
      data-theme={theme}
      style={style}
    >
      {children}
    </div>
  );
}
