import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** What the slider sets, above the track, e.g. "Speaking speed". */
  label?: ReactNode;
  /** The current value in the owner's words, right of the label, e.g. "A little slower". Never a raw number. */
  valueText?: ReactNode;
  /** The owner's word for the low end, under the track's left edge, e.g. "Slower". */
  lo?: ReactNode;
  /** The owner's word for the high end, under the track's right edge, e.g. "Faster". */
  hi?: ReactNode;
  /** Extra class on the root. */
  className?: string;
}

/**
 * A stepped range control: a real `<input type="range">`, so a form posts it
 * with no script, with the setting's name, its value in words, and words at
 * the two ends. The fill is Anser Blue (a mark, not an action); no raw number
 * is shown, because an owner reads "a little slower", not 0.9.
 */
export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
  { label, valueText, lo, hi, className, id, disabled, ...rest },
  ref
) {
  const generated = useId();
  const inputId = id ?? generated;
  return (
    <div
      className={['anser-slider', disabled ? 'anser-slider--disabled' : undefined, className]
        .filter(Boolean)
        .join(' ')}
    >
      {(label != null || valueText != null) && (
        <div className="anser-slider__head">
          {label != null && (
            <label className="anser-slider__label" htmlFor={inputId}>
              {label}
            </label>
          )}
          {valueText != null && (
            <span className="anser-slider__value" aria-live="polite">
              {valueText}
            </span>
          )}
        </div>
      )}
      <input ref={ref} id={inputId} type="range" disabled={disabled} className="anser-slider__input" {...rest} />
      {(lo != null || hi != null) && (
        <div className="anser-slider__ends" aria-hidden="true">
          <span>{lo}</span>
          <span>{hi}</span>
        </div>
      )}
    </div>
  );
});
