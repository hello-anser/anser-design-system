import type { ButtonHTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Controlled on/off state. When set, the switch follows this prop and `defaultChecked` is ignored. */
  checked?: boolean;
  /** Initial state for uncontrolled use. Off by default. */
  defaultChecked?: boolean;
  /** Called with the next state when the user toggles. Optional — the switch renders fine without it. */
  onChange?: (checked: boolean) => void;
  /** Text label rendered 13px to the right of the track. Clicking it toggles the switch. */
  label?: string;
  /** Greys the whole control out, label included, and blocks toggling. */
  disabled?: boolean;
  /** id on the underlying button, for external labels or tests. */
  id?: string;
  /** Extra class on the root button. */
  className?: string;
}

/**
 * On/off toggle — a real `<button role="switch">`, never a styled checkbox.
 * The on-state track is navy (the neutral convention), not amber: amber stays
 * reserved for the screen's one primary action.
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, defaultChecked = false, onChange, label, disabled, id, className, onClick, ...rest },
  ref
) {
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked !== undefined ? checked : internal;

  return (
    <button
      ref={ref}
      id={id}
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      className={['anser-switch', on ? 'anser-switch--on' : undefined, className]
        .filter(Boolean)
        .join(' ')}
      onClick={(event) => {
        onClick?.(event);
        if (checked === undefined) setInternal(!on);
        onChange?.(!on);
      }}
      {...rest}
    >
      <span className="anser-switch__track" aria-hidden="true">
        <span className="anser-switch__knob" />
      </span>
      {label != null && <span className="anser-switch__label">{label}</span>}
    </button>
  );
});
