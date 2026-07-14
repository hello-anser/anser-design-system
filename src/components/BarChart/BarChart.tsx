import type { HTMLAttributes } from 'react';

export interface BarChartProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Bars in display order. `label` is the x-axis caption beneath the bar
   * (kept short: "Mon", "Thu", "05"); `value` scales the bar against the
   * largest value in the set.
   */
  data: Array<{ label: string; value: number }>;
  /**
   * Index of the single bar rendered amber — the peak, the day that matters.
   * Amber is a scalpel: highlight one bar at most, or omit for an
   * all-neutral chart.
   */
  highlight?: number;
  /** Pixel height of the bar area (x labels sit below it). Default 120. */
  height?: number;
}

/**
 * Pure-CSS column chart for call and booking volumes. Bars are neutral by
 * default; `highlight` paints exactly one bar amber — the scalpel rule —
 * so the eye lands on the one day that matters.
 */
export function BarChart({ data, highlight, height = 120, className, ...rest }: BarChartProps) {
  const max = data.reduce((m, d) => (d.value > m ? d.value : m), 0);

  return (
    <div
      role="img"
      aria-label={`Bar chart: ${data.map((d) => `${d.label} ${d.value}`).join(', ')}`}
      className={['anser-bar-chart', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="anser-bar-chart__bars" style={{ height }}>
        {data.map((d, i) => (
          <div
            key={`${d.label}-${i}`}
            className={[
              'anser-bar-chart__bar',
              i === highlight && 'anser-bar-chart__bar--highlight',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ height: `${max > 0 ? (Math.max(d.value, 0) / max) * 100 : 0}%` }}
          />
        ))}
      </div>
      <div className="anser-bar-chart__x anser-label">
        {data.map((d, i) => (
          <span key={`${d.label}-${i}`} className="anser-bar-chart__x-label">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
