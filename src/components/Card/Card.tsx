import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Panel heading, 14px/600. Omit for a bare panel. */
  title?: string;
  /** Small muted line under the title, e.g. "Latest first · answered by Anser". */
  note?: string;
  /** Right-aligned slot in the title row — typically a ghost Button or Badge. */
  actions?: ReactNode;
  /**
   * Apply the standard 20px panel padding. Set `false` when the card wraps
   * edge-to-edge content such as a table or call list.
   */
  padded?: boolean;
  /** Panel content. */
  children?: ReactNode;
}

/**
 * The Anser panel: white surface, hairline border, 14px radius. Every
 * dashboard block lives in one — content earns emphasis inside it, the
 * card itself stays quiet.
 */
export function Card({ title, note, actions, padded = true, className, children, ...rest }: CardProps) {
  const hasHead = title != null || note != null || actions != null;

  return (
    <div
      className={['anser-card', padded ? 'anser-card--padded' : '', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {hasHead && (
        <div className="anser-card__head">
          <div className="anser-card__heading">
            {title != null && <div className="anser-card__title">{title}</div>}
            {note != null && <div className="anser-card__note">{note}</div>}
          </div>
          {actions != null && <div className="anser-card__actions">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
