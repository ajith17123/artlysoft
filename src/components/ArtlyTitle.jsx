import '../assets/style/ArtlyTitle.css';

/**
 * Renders "Artlysoft Private Limited" with a letter-by-letter color wave.
 * Colors: sky blue (#87CEEB) → yellow (#FFD700) → sky blue, rippling left-to-right.
 * Each character gets its own <span> with a CSS --i custom property for stagger delay.
 * Spaces are rendered as non-breaking spaces but excluded from the index count.
 *
 * @param {string} className - Extra classes merged onto the root span
 */
const AnimatedLogoText = ({ className = '' }) => {
  const text = 'Artlysoft';

  let letterIndex = 0;
  const chars = text.split('').map((char, i) => {
    if (char === ' ') {
      return (
        <span key={i} className="letter space" aria-hidden="true">
          &nbsp;
        </span>
      );
    }
    const idx = letterIndex++;
    return (
      <span key={i} className="letter" style={{ '--i': idx }}>
        {char}
      </span>
    );
  });

  return (
    <span className={`animated-logo-text ${className}`.trim()} aria-label={text}>
      {chars}
    </span>
  );
};

export default AnimatedLogoText;
