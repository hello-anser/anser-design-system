export interface WordmarkProps {
  /**
   * `wordmark` is the lowercase `anser.` with the amber stop. `icon` is the
   * standalone app icon (navy speech bubble, amber dot). `lockup` places the
   * icon beside the wordmark.
   */
  variant?: 'wordmark' | 'icon' | 'lockup';
  /** Pixel height of the mark. The wordmark scales its type from this. */
  size?: number;
  /** Optional mono sub-label under the wordmark, e.g. "EVERY CALL, ANSWERED". */
  sub?: string;
  className?: string;
}

/**
 * The Anser brand mark. Lowercase `anser.` — the full stop is the fixed
 * brand device (the answer, given) and is always amber. Never recolour it,
 * never remove it.
 */
export function Wordmark({ variant = 'wordmark', size = 28, sub, className }: WordmarkProps) {
  const icon = (
    <svg
      className="anser-wordmark__icon"
      width={size}
      height={size}
      viewBox="0 0 96 96"
      aria-hidden="true"
    >
      <rect x="4" y="8" width="88" height="72" rx="20" fill="var(--anser-navy)" />
      <path d="M24 80 L24 94 L40 80 Z" fill="var(--anser-navy)" />
      <circle cx="48" cy="44" r="10" fill="var(--anser-amber)" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <span className={['anser-wordmark', className].filter(Boolean).join(' ')} role="img" aria-label="Anser">
        {icon}
      </span>
    );
  }

  const text = (
    <span className="anser-wordmark__stack">
      <span className="anser-wordmark__text" style={{ fontSize: size }}>
        anser<span className="anser-wordmark__stop">.</span>
      </span>
      {sub != null && <span className="anser-wordmark__sub">{sub}</span>}
    </span>
  );

  return (
    <span className={['anser-wordmark', className].filter(Boolean).join(' ')} role="img" aria-label="Anser">
      {variant === 'lockup' && icon}
      {text}
    </span>
  );
}
