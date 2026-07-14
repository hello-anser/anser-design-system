import { Fragment } from 'react';

export interface PipelineStep {
  /** Step name, set as a micro mono label, e.g. "KB profile". */
  label: string;
  /**
   * Where the step stands. `done` shows a green tick, `active` an amber
   * dot (the one step in progress), `pending` a hollow dot.
   */
  status: 'done' | 'active' | 'pending';
  /** Optional one-line detail under the label — a URL, number, or count. */
  detail?: string;
}

export interface PipelineProps {
  /** Ordered steps, rendered left to right and joined by hairline arrows. */
  steps: PipelineStep[];
  /** Extra class on the root element. */
  className?: string;
}

/**
 * Readiness pipeline (the Demo Room path): a horizontal row of step cards
 * joined by hairline arrows. Amber marks only the step in progress — done
 * steps go green, pending steps stay hollow and quiet.
 */
export function Pipeline({ steps, className }: PipelineProps) {
  return (
    <div className={['anser-pipeline', className].filter(Boolean).join(' ')} role="list">
      {steps.map((step, i) => (
        <Fragment key={`${step.label}-${i}`}>
          {i > 0 && (
            <span className="anser-pipeline__link" aria-hidden="true">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path
                  d="M0 5h12M9 1.5 12.5 5 9 8.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          <div
            role="listitem"
            className={`anser-pipeline__step anser-pipeline__step--${step.status}`}
          >
            <span className="anser-pipeline__head">
              {step.status === 'done' ? (
                <svg
                  className="anser-pipeline__tick"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5.8 4.4 8.2 9 3"
                    stroke="var(--anser-green)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span
                  className={`anser-pipeline__dot anser-pipeline__dot--${step.status}`}
                  aria-hidden="true"
                />
              )}
              <span className="anser-pipeline__label">{step.label}</span>
            </span>
            {step.detail != null && <span className="anser-pipeline__detail">{step.detail}</span>}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
