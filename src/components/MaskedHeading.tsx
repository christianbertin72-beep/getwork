import React from 'react';

interface MaskedHeadingProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  isRevealed?: boolean;
  delayPerLineMs?: number;
  startDelayMs?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'div';
}

/**
 * MaskedHeading renders text split into lines, where each line is enclosed
 * in an `overflow-hidden` mask. The inner text physically slides up from below
 * the mask (`translateY(115%)` -> `translateY(0%)`) with opacity increasing
 * from 0% to 100%, driven by a smooth cubic-bezier easing with no bounce.
 * Reference: Second uploaded motion design video.
 */
export const MaskedHeading: React.FC<MaskedHeadingProps> = ({
  lines,
  className = '',
  lineClassName = '',
  isRevealed = true,
  delayPerLineMs = 120,
  startDelayMs = 0,
  tag = 'h2',
}) => {
  const Tag = tag;

  return (
    <Tag className={`${className} flex flex-col items-start text-left`}>
      {lines.map((line, index) => {
        const delay = startDelayMs + index * delayPerLineMs;

        return (
          <span
            key={index}
            className="block overflow-hidden w-full leading-[inherit] py-[2px]"
          >
            <span
              className={`block transition-all duration-[850ms] ${lineClassName}`}
              style={{
                transform: isRevealed ? 'translateY(0%)' : 'translateY(115%)',
                opacity: isRevealed ? 1 : 0,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, opacity',
              }}
            >
              {line}
            </span>
          </span>
        );
      })}
    </Tag>
  );
};

interface MaskedWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  isRevealed?: boolean;
  delayPerWordMs?: number;
  startDelayMs?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'div';
}

/**
 * MaskedWords renders a phrase word-by-word, each word emerging from an invisible mask.
 * Specifically used for the "Large Typography Moment" (22–26s).
 */
export const MaskedWords: React.FC<MaskedWordsProps> = ({
  text,
  className = '',
  wordClassName = '',
  isRevealed = true,
  delayPerWordMs = 90,
  startDelayMs = 0,
  tag = 'h2',
}) => {
  const Tag = tag;
  const words = text.split(' ');

  return (
    <Tag className={`${className} flex flex-wrap gap-x-[0.28em] gap-y-1 items-start text-left`}>
      {words.map((word, index) => {
        const delay = startDelayMs + index * delayPerWordMs;

        return (
          <span
            key={index}
            className="inline-block overflow-hidden py-[3px]"
          >
            <span
              className={`inline-block transition-all duration-[900ms] ${wordClassName}`}
              style={{
                transform: isRevealed ? 'translateY(0%)' : 'translateY(120%)',
                opacity: isRevealed ? 1 : 0,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: 'transform, opacity',
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Tag>
  );
};
