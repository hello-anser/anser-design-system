import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Micro-label above the field, set in the mono instrument idiom. */
  label?: string;
  /** Helper text below the field — 11px, muted. */
  hint?: string;
  /**
   * Validation message. Replaces the hint, turns the field border red and
   * sets `aria-invalid` on the input.
   */
  error?: string;
  /** JetBrains Mono field text — for URLs, phone numbers, references. */
  mono?: boolean;
}

/**
 * Single-line text field. Quiet panel surface at rest; focus is its one amber
 * moment — amber border plus a soft ring — so colour lands only where typing happens.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, mono = false, className, ...rest },
  ref
) {
  return (
    <label
      className={[
        'anser-input',
        mono && 'anser-input--mono',
        error != null && 'anser-input--error',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label != null && <span className="anser-label anser-input__label">{label}</span>}
      <input
        ref={ref}
        className="anser-input__field"
        aria-invalid={error != null ? true : undefined}
        {...rest}
      />
      {error != null ? (
        <span className="anser-input__error">{error}</span>
      ) : hint != null ? (
        <span className="anser-input__hint">{hint}</span>
      ) : null}
    </label>
  );
});
