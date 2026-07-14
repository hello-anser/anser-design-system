import type { HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Signal colour. The call-outcome mapping is fixed: `green` = Booked,
   * `neutral` = Question, `steel` = Transferred, `red` = Spam,
   * `amber` = Message. `navy` is for brand/plan labels, not outcomes.
   */
  tone?: 'neutral' | 'amber' | 'green' | 'red' | 'steel' | 'navy';
  /**
   * Render as an outcome chip: a leading 6px status dot carries the tone
   * while the chip itself stays neutral (soft panel background, muted text).
   * This is the default treatment for call outcomes in tables and lists.
   */
  dot?: boolean;
  /** Chip label, e.g. "Booked" or "Transferred". */
  children?: ReactNode;
}

/**
 * Status chip for call outcomes and standing states. Colour is data, not
 * decoration: prefer the dotted form in dense tables (tone lives in the dot,
 * the chip stays quiet), and keep amber for message-taken outcomes only.
 */
export function Badge({ tone = 'neutral', dot = false, className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={[
        'anser-badge',
        dot ? 'anser-badge--dot' : `anser-badge--${tone}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {dot && <span className={`anser-badge__dot anser-badge__dot--${tone}`} aria-hidden="true" />}
      {children}
    </span>
  );
}
