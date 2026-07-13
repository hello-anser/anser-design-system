import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual weight. `primary` is amber — use it once per screen, on the one
   * action that matters. `neutral` is the navy workhorse. `ghost` for
   * secondary actions, `danger` for destructive ones.
   */
  variant?: 'primary' | 'neutral' | 'ghost' | 'danger';
  /** Control height. `md` is the default. */
  size?: 'sm' | 'md';
  /** Optional leading icon or glyph. */
  icon?: ReactNode;
  children?: ReactNode;
}

/**
 * Push button. Amber is a scalpel: one primary button per screen, on the
 * action that answers the user's question. Everything else is neutral or ghost.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'neutral', size = 'md', icon, className, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={['anser-btn', `anser-btn--${variant}`, `anser-btn--${size}`, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {icon != null && <span className="anser-btn__icon">{icon}</span>}
      {children}
    </button>
  );
});
