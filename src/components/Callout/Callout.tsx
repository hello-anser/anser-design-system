import type { ReactNode } from 'react';

export interface CalloutProps {
  /**
   * Signal tone. `info` is the quiet default (soft panel wash, neutral rule);
   * `success` confirms, `warning` flags time-sensitive notices in amber,
   * `danger` marks failures. Reserve `warning` for things that genuinely
   * need attention — amber is a scalpel.
   */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Optional 600-weight heading rendered in the tone's strong colour. */
  title?: string;
  /** Extra class names merged onto the root element. */
  className?: string;
  /** Note body — plain prose, kept short. */
  children?: ReactNode;
}

/**
 * Quiet note panel for inline guidance, confirmations, and warnings. No
 * icons — restraint is the message; a 3px tone-coloured left rule is the
 * only device.
 */
export function Callout({ tone = 'info', title, className, children }: CalloutProps) {
  return (
    <div
      role="note"
      className={['anser-callout', `anser-callout--${tone}`, className]
        .filter(Boolean)
        .join(' ')}
    >
      {title != null && <div className="anser-callout__title">{title}</div>}
      <div className="anser-callout__body">{children}</div>
    </div>
  );
}
