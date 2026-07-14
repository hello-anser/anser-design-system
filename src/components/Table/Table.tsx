import type { ReactNode, TableHTMLAttributes } from 'react';

export interface TableProps
  extends Omit<TableHTMLAttributes<HTMLTableElement>, 'align' | 'children'> {
  /** Column header labels, rendered in the mono micro-label idiom. */
  columns: string[];
  /**
   * Body rows: one array of cells per row, in column order. Cells accept any
   * ReactNode — plain text, mono spans for times and numbers, a `Badge` for
   * outcomes.
   */
  rows: ReactNode[][];
  /**
   * Per-column alignment, by column index. Defaults to `left`; set `right`
   * for numeric columns (right-aligned cells also get tabular figures).
   */
  align?: Array<'left' | 'right'>;
  /** Tighter 10px cell padding for dense screens and sidebars. */
  compact?: boolean;
  /** Extra class names on the `<table>` element. */
  className?: string;
}

/**
 * Data table for call logs, bookings and numbers. Headers are mono
 * micro-labels, rows sit on 1px hairlines — no zebra, no outer border; the
 * host Card supplies the frame.
 */
export function Table({ columns, rows, align, compact = false, className, ...rest }: TableProps) {
  const isRight = (index: number): boolean => align?.[index] === 'right';

  return (
    <table
      className={['anser-table', compact && 'anser-table--compact', className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <thead>
        <tr>
          {columns.map((column, c) => (
            <th
              key={c}
              scope="col"
              className={[
                'anser-label',
                'anser-table__th',
                isRight(c) && 'anser-table__th--right',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={r} className="anser-table__row">
            {row.map((cell, c) => (
              <td
                key={c}
                className={['anser-table__td', isRight(c) && 'anser-table__td--right']
                  .filter(Boolean)
                  .join(' ')}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
