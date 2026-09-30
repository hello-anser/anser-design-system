import type { HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** The word or short phrase the tag holds, e.g. "Worcester Bosch". */
  children?: ReactNode;
  /** When set, the tag carries a remove button that calls this. Optional: without it the tag is read-only. */
  onRemove?: () => void;
  /** Accessible name for the remove button. Defaults to "Remove" followed by the tag's text when it is a string. */
  removeLabel?: string;
}

/**
 * A removable word in a list the owner builds: words to catch, service areas.
 * A quiet pill on the raised surface, never a status colour; that is Badge's
 * job. The remove button is a real `<button type="button">`, so it never
 * submits the form it sits in.
 */
export function Tag({ children, onRemove, removeLabel, className, ...rest }: TagProps) {
  const name = removeLabel ?? (typeof children === 'string' ? `Remove ${children}` : 'Remove');
  return (
    <span
      className={['anser-tag', onRemove ? 'anser-tag--removable' : undefined, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="anser-tag__text">{children}</span>
      {onRemove && (
        <button type="button" className="anser-tag__remove" aria-label={name} onClick={onRemove}>
          <span aria-hidden="true">×</span>
        </button>
      )}
    </span>
  );
}
