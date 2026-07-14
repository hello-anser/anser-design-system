import type { SelectHTMLAttributes } from 'react';
import { forwardRef } from 'react';

/** A single choice in a `Select`'s `options` array. */
export interface SelectOption {
  /** Text shown to the user. */
  label: string;
  /** Value submitted with the form. */
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label rendered above the control, 13px semibold. */
  label?: string;
  /** Helper text under the control. Hidden while `error` is set. */
  hint?: string;
  /** Error message under the control; also turns the border red. */
  error?: string;
  /**
   * Choices as `{ label, value }` pairs. Alternatively (or additionally)
   * pass `<option>` elements as children — options render first.
   */
  options?: SelectOption[];
}

/**
 * Native dropdown field styled to match Input — panel-2 surface, hairline
 * border, custom chevron. Neutral by default; amber appears only on focus.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, hint, error, options, className, children, ...rest },
  ref
) {
  return (
    <label
      className={['anser-select', error ? 'anser-select--error' : undefined, className]
        .filter(Boolean)
        .join(' ')}
    >
      {label != null && <span className="anser-select__label">{label}</span>}
      <span className="anser-select__control">
        <select
          ref={ref}
          className="anser-select__field"
          aria-invalid={error ? true : undefined}
          {...rest}
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
          {children}
        </select>
        <svg
          className="anser-select__chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M2.5 4.25 L6 7.75 L9.5 4.25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {error ? (
        <span className="anser-select__error">{error}</span>
      ) : hint != null ? (
        <span className="anser-select__hint">{hint}</span>
      ) : null}
    </label>
  );
});
