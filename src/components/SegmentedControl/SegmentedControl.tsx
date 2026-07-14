import { useState } from 'react';

export interface SegmentedControlProps {
  /** The pills, in display order. `value` is the identity, `label` is what the user reads. */
  options: Array<{ label: string; value: string }>;
  /** Controlled selected value. When set, the component follows this prop and `defaultValue` is ignored. */
  value?: string;
  /** Initial selected value for uncontrolled use. */
  defaultValue?: string;
  /** Called with the clicked option's `value`. Optional — the control renders fine without it. */
  onChange?: (value: string) => void;
  /** Pill height. `md` is the default; `sm` for toolbars and inline range pickers. */
  size?: 'sm' | 'md';
  /** Extra class on the root element. */
  className?: string;
}

/**
 * A row of pill buttons for choosing exactly one of a few modes. The active
 * pill is navy (neutral), never amber — amber stays reserved for the screen's
 * primary action.
 */
export function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  size = 'md',
  className,
}: SegmentedControlProps) {
  const [internal, setInternal] = useState<string | undefined>(defaultValue);
  const selected = value !== undefined ? value : internal;

  return (
    <div
      role="group"
      className={['anser-segmented', `anser-segmented--${size}`, className]
        .filter(Boolean)
        .join(' ')}
    >
      {options.map((option) => {
        const on = option.value === selected;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={on}
            className={['anser-segmented__pill', on ? 'anser-segmented__pill--on' : undefined]
              .filter(Boolean)
              .join(' ')}
            onClick={() => {
              if (value === undefined) setInternal(option.value);
              onChange?.(option.value);
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
