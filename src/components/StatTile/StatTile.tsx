import type { HTMLAttributes, ReactNode } from 'react';

export interface StatTileProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Instrument caption above the value — rendered in the `.anser-label`
   * idiom (mono, 10px, letter-spaced, uppercase).
   */
  label: string;
  /**
   * The hero figure: 32px/700, tight tracking. A ReactNode so composite
   * values work, e.g. `642` with a faint ` / 800` suffix.
   */
  value: ReactNode;
  /** Muted 11px line below the value citing the source or period, e.g. "Growth plan". */
  caption?: string;
  /**
   * Paints the value in strong amber. Amber is a scalpel: emphasise at most
   * one tile per screen — the one number that matters.
   */
  emphasis?: boolean;
  /**
   * Small change annotation below the value, 11px. `up` is green, `down` is
   * red, `neutral` (the default) is muted.
   */
  delta?: { text: string; tone?: 'up' | 'down' | 'neutral' };
}

/**
 * Dashboard stat tile: a vast figure over a hairline mono label — the brand's
 * signature rhythm. `emphasis` turns the value amber; use it on one tile per
 * screen at most.
 */
export function StatTile({
  label,
  value,
  caption,
  emphasis = false,
  delta,
  className,
  ...rest
}: StatTileProps) {
  return (
    <div
      className={['anser-stat-tile', emphasis && 'anser-stat-tile--emphasis', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <div className="anser-label anser-stat-tile__label">{label}</div>
      <div className="anser-stat-tile__value">{value}</div>
      {delta != null && (
        <div className={`anser-stat-tile__delta anser-stat-tile__delta--${delta.tone ?? 'neutral'}`}>
          {delta.text}
        </div>
      )}
      {caption != null && <div className="anser-stat-tile__caption">{caption}</div>}
    </div>
  );
}
