import type { HTMLAttributes, MouseEventHandler, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';
import { Wordmark } from '../Wordmark/Wordmark';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Slot above the nav. Defaults to the Anser wordmark at 22px; pass
   * `null` to render no header at all.
   */
  header?: ReactNode;
  /**
   * Slot pinned to the bottom of the rail — typically the company switcher
   * or an account card.
   */
  footer?: ReactNode;
  /** Fixed pixel width of the rail. */
  width?: number;
  /** `SidebarSection`s (or bare `SidebarItem`s). */
  children?: ReactNode;
}

/**
 * The app's left navigation rail: quiet sidebar surface, right hairline,
 * header on top, nav scrolls, footer pinned. All chrome uses the dedicated
 * sidebar tokens so both themes hold.
 */
export function Sidebar({
  header,
  footer,
  width = 232,
  className,
  style,
  children,
  ...rest
}: SidebarProps) {
  const headerContent =
    header === undefined ? <Wordmark size={22} /> : header;

  return (
    <aside
      className={['anser-sidebar', className].filter(Boolean).join(' ')}
      style={{ width, flex: `0 0 ${width}px`, ...style }}
      {...rest}
    >
      {headerContent != null && <div className="anser-sidebar__header">{headerContent}</div>}
      <nav className="anser-sidebar__nav">{children}</nav>
      {footer != null && <div className="anser-sidebar__footer">{footer}</div>}
    </aside>
  );
}

export interface SidebarSectionProps {
  /** Mono micro-label heading the group, e.g. "Main" or "Build". */
  label: string;
  /** Extra classes on the section wrapper. */
  className?: string;
  /** The section's `SidebarItem`s. */
  children?: ReactNode;
}

/**
 * A labelled group of sidebar items. The label renders in the mono
 * micro-label idiom (10px, letter-spaced, uppercase) with 18px of air above.
 */
export function SidebarSection({ label, className, children }: SidebarSectionProps) {
  return (
    <div className={['anser-sidebar-section', className].filter(Boolean).join(' ')}>
      <div className="anser-sidebar-section__label">{label}</div>
      {children}
    </div>
  );
}

export interface SidebarItemProps {
  /**
   * Marks the current screen: amber-soft fill, strong text, 3px amber left
   * rule, amber icon. Exactly one item per rail should be active.
   */
  active?: boolean;
  /** Optional 16px leading glyph — an inline SVG using `currentColor`. */
  icon?: ReactNode;
  /** Right-aligned slot, e.g. a count `Badge` for unread calls. */
  badge?: ReactNode;
  /** Click handler. Without `href` the item renders as a `<button>`. */
  onClick?: MouseEventHandler<HTMLElement>;
  /** Destination URL. When set the item renders as an `<a>`. */
  href?: string;
  /** Extra classes on the item. */
  className?: string;
  /** The item label, e.g. "Call Log". */
  children?: ReactNode;
}

/**
 * One destination in the sidebar. Neutral by default; the active item is the
 * only place amber appears in the rail — a soft fill and a 3px left rule.
 */
export const SidebarItem = forwardRef<HTMLElement, SidebarItemProps>(function SidebarItem(
  { active = false, icon, badge, onClick, href, className, children },
  ref
) {
  const cls = ['anser-sidebar-item', active ? 'anser-sidebar-item--active' : '', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon != null && (
        <span className="anser-sidebar-item__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="anser-sidebar-item__label">{children}</span>
      {badge != null && <span className="anser-sidebar-item__badge">{badge}</span>}
    </>
  );

  if (href != null) {
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        className={cls}
        href={href}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type="button"
      className={cls}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      {content}
    </button>
  );
});
