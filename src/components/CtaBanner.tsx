import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MaskedHeading } from './MaskedHeading';

interface CtaBannerProps {
  onHireClick?: () => void;
  onWorkClick?: () => void;
  currentTime?: number;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onHireClick, onWorkClick, currentTime }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (currentTime !== undefined) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [currentTime]);

  // Timeline triggers:
  // 31-36s: Approach final CTA section, slow scrolling down.
  // 31.8s+: Eyebrow & headline reveal line-by-line from underneath mask
  // 33.2s+: Subtitle reveals
  // 33.8s+: Buttons rise with subtle upward motion & fade
  // 36-40s: Slowly settle on final CTA & footer, held visible for 2+ seconds
  const isEyebrowRevealed = currentTime !== undefined ? currentTime >= 31.4 : isInView;
  const isHeadlineRevealed = currentTime !== undefined ? currentTime >= 31.8 : isInView;
  const isSubtitleRevealed = currentTime !== undefined ? currentTime >= 33.0 : isInView;
  const isButtonsRevealed = currentTime !== undefined ? currentTime >= 33.8 : isInView;

  return (
    <section ref={sectionRef} className="relative w-full py-20 px-5 sm:px-8 bg-[#080808]">
      <div className="max-w-[1199px] mx-auto">
        {/* SIGNATURE FRAMER ATMOSPHERIC CARD (Sunset-Orange Wash Spotlight) */}
        <div className="relative gradient-spotlight-orange p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Subtle interior atmospheric glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-300/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-left">
            {/* Pill Eyebrow */}
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[12px] font-medium text-white mb-6 backdrop-blur-md transition-all duration-700"
              style={{
                opacity: isEyebrowRevealed ? 1 : 0,
                transform: isEyebrowRevealed ? 'translateY(0)' : 'translateY(12px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get started in minutes</span>
            </div>

            {/* Display Headline with Masked Upward Line Reveal */}
            <MaskedHeading
              tag="h2"
              lines={[
                'Ready to hire or',
                'start working?',
              ]}
              isRevealed={isHeadlineRevealed}
              delayPerLineMs={160}
              startDelayMs={0}
              className="text-white text-[38px] sm:text-[54px] lg:text-[62px] font-medium leading-[0.94] tracking-[-2.6px] sm:tracking-[-3.5px]"
            />

            {/* Subtitle */}
            <p
              className="mt-5 text-white/85 text-[15px] sm:text-[17px] leading-[1.4] tracking-[-0.15px] max-w-lg transition-all duration-800"
              style={{
                opacity: isSubtitleRevealed ? 1 : 0,
                transform: isSubtitleRevealed ? 'translateY(0)' : 'translateY(16px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Join hundreds of thousands of companies and independent talent building world-class products together on MINDS.
            </p>

            {/* Framer Button Pair: White Pill + Translucent Secondary Pill */}
            <div
              className="mt-9 flex items-center gap-3.5 flex-wrap transition-all duration-700"
              style={{
                opacity: isButtonsRevealed ? 1 : 0,
                transform: isButtonsRevealed ? 'translateY(0)' : 'translateY(16px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <button
                type="button"
                onClick={onHireClick}
                className="bg-white text-black font-medium text-[14px] px-5 py-3 rounded-full hover:scale-[0.98] active:scale-[0.96] transition-transform shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>Hire a freelancer</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </button>

              <button
                type="button"
                onClick={onWorkClick}
                className="bg-black/30 hover:bg-black/45 text-white font-medium text-[14px] px-5 py-3 rounded-full border border-white/20 backdrop-blur-md transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Apply as a freelancer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
