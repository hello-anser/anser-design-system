import type { ReactNode } from 'react';

export interface ModalProps {
  /** Whether the dialog is shown. When `false` the component renders nothing. */
  open: boolean;
  /** Called when the scrim is clicked. Wire it to set `open` to false. */
  onClose?: () => void;
  /** Dialog heading — the question the dialog asks, 15px/600. */
  title?: string;
  /**
   * Right-aligned action row. Compose from `Button`: a ghost dismiss plus the
   * one action that answers the title.
   */
  footer?: ReactNode;
  /** Dialog width in pixels. Defaults to 480; it never exceeds the viewport. */
  width?: number;
  /** Extra class on the dialog panel. */
  className?: string;
  /** Body content. */
  children?: ReactNode;
}

/**
 * Centered dialog over a dark scrim, rendered in place (no portal). Keep it to
 * one decision — a title, a short body, a footer with a ghost dismiss and a
 * single weighted action; amber stays a scalpel even here.
 */
export function Modal({
  open,
  onClose,
  title,
  footer,
  width = 480,
  className,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="anser-modal">
      <div className="anser-modal__scrim" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={['anser-modal__dialog', className].filter(Boolean).join(' ')}
        style={{ width }}
      >
        {title != null && <h2 className="anser-modal__title">{title}</h2>}
        <div className="anser-modal__body">{children}</div>
        {footer != null && <div className="anser-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
