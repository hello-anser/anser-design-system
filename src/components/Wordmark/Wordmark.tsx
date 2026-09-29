import markDark from '../../assets/logo/anser-mark-darkmode.svg';
import markLight from '../../assets/logo/anser-mark-navy.svg';
import wordmarkDark from '../../assets/logo/anser-wordmark-reversed.svg';
import wordmarkLight from '../../assets/logo/anser-wordmark-primary.svg';

/** The supplied files' own proportions (their viewBox), width over height. */
export const WORDMARK_ASPECT = 4339.9 / 818.6;
export const MARK_ASPECT = 1147.9 / 816.4;
/** Below this width the brand places the mark, not the wordmark. */
export const WORDMARK_MIN_WIDTH = 96;

export interface WordmarkProps {
  /**
   * `wordmark` places the supplied wordmark file, or the mark when it would
   * be narrower than 96px. `icon` always places the mark. `lockup` is the
   * June name for the wordmark and renders exactly the same: the brand puts
   * no words and no second device inside the lockup.
   */
  variant?: 'wordmark' | 'icon' | 'lockup';
  /** Pixel height of the logo. Its width follows the file's proportions. */
  size?: number;
  /**
   * @deprecated Ignored since BO-411: the brand puts no words inside the
   * lockup, so nothing renders it. Still accepted so a June call site
   * compiles; removed in the release that removes the `--anser-*` aliases.
   */
  sub?: string;
  className?: string;
}

/**
 * The Anser logo. Places Samir's supplied SVG files (brand pack v1.1) and
 * never retypes the name: the primary file on light, the reversed file on
 * dark, and the mark instead of the wordmark below 96px wide. Never
 * recolour, redraw or add words to it.
 */
export function Wordmark({ variant = 'wordmark', size = 28, className }: WordmarkProps) {
  const useMark = variant === 'icon' || size * WORDMARK_ASPECT < WORDMARK_MIN_WIDTH;
  const [light, dark, aspect] = useMark
    ? [markLight, markDark, MARK_ASPECT]
    : [wordmarkLight, wordmarkDark, WORDMARK_ASPECT];
  const width = Math.round(size * aspect * 10) / 10;
  const src = (base64: string) => `data:image/svg+xml;base64,${base64}`;

  return (
    <span
      className={['anser-wordmark', useMark && 'anser-wordmark--mark', className].filter(Boolean).join(' ')}
      role="img"
      aria-label="Anser"
    >
      <img className="anser-wordmark__on-light" src={src(light)} alt="" width={width} height={size} />
      <img className="anser-wordmark__on-dark" src={src(dark)} alt="" width={width} height={size} />
    </span>
  );
}
