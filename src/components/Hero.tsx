import React, { useEffect, useState } from 'react';
import { LaptopMockup } from './LaptopMockup';
import { MaskedHeading } from './MaskedHeading';
import teamBgImg from '../assets/images/team_laptop_bg_1788801086292.jpg';

interface HeroProps {
  onHireClick?: () => void;
  onWorkClick?: () => void;
  onCategoryClick?: (category: string) => void;
  currentTime?: number; // Optional cinematic timeline time in seconds (0 to 40)
}

export const Hero: React.FC<HeroProps> = ({
  onHireClick,
  onWorkClick,
  onCategoryClick,
  currentTime,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Quick entry trigger for seamless page load
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const isHeadlineRevealed = currentTime !== undefined ? currentTime >= 0.6 : mounted;
  const isParagraphRevealed = currentTime !== undefined ? currentTime >= 2.8 : mounted;
  const isButtonsRevealed = currentTime !== undefined ? currentTime >= 3.6 : mounted;
  const isStatsRevealed = currentTime !== undefined ? currentTime >= 4.0 : mounted;

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onWorkClick?.();
    }
  };

  return (
    <section className="relative w-full pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#080808]">
      {/* ========================================================================= */}
      {/* CINEMATIC BACKGROUND: PEOPLE VISIBLE (HIDDEN ON MOBILE, VISIBLE ON MD+) */}
      {/* ========================================================================= */}
      <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none">
        <img
          src={teamBgImg}
          alt="Collaborative creative team"
          className="w-full h-full object-cover object-[28%_18%] md:object-[26%_16%] opacity-90 md:opacity-95 filter brightness-[0.92] contrast-[1.08]"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Vignettes tuned to let the people show clearly behind headline and extending to the edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/25 via-transparent to-[#080808]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_85%_at_32%_28%,transparent_0%,#080808_94%)]" />

        {/* Soft atmospheric electric blue ambient glows */}
        <div className="absolute -left-12 top-1/4 w-[520px] h-[520px] bg-[#0099ff]/12 rounded-full blur-[130px]" />
        <div className="absolute right-0 top-1/4 w-[520px] h-[520px] bg-[#0099ff]/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">
          {/* Left Column: Poster-Grade Headline & CTAs */}
          <div className="col-span-1 lg:col-span-6 xl:col-span-5 z-20 flex flex-col items-start text-left max-w-2xl lg:max-w-none pointer-events-auto">
            {/* Charcoal Pill Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414]/85 backdrop-blur-md border border-white/[0.12] text-[13px] font-medium text-[#cccccc] mb-6 shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-700"
              style={{
                opacity: isHeadlineRevealed ? 1 : 0,
                transform: isHeadlineRevealed ? 'translateY(0)' : 'translateY(12px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white font-medium">The freelance network</span>
              <span className="text-white/25">/</span>
              <span>Global talent</span>
            </div>

            {/* Poster Display Headline with Masked Upward Line Reveal */}
            <MaskedHeading
              tag="h1"
              lines={[
                'Hire the right freelancer.',
                'Get your project done.',
              ]}
              isRevealed={isHeadlineRevealed}
              delayPerLineMs={160}
              startDelayMs={0}
              className="text-white text-[48px] sm:text-[68px] lg:text-[76px] font-medium leading-[0.92] tracking-[-3.8px] sm:tracking-[-4.6px]"
              lineClassName="drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
            />

            {/* Lead Body Paragraph (Revealed 0.2-0.4s after headline) */}
            <p
              className="mt-6 text-[#b5b5b5] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.15px] max-w-lg transition-all duration-800"
              style={{
                opacity: isParagraphRevealed ? 1 : 0,
                transform: isParagraphRevealed ? 'translateY(0)' : 'translateY(16px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Connect with vetted freelancers worldwide to streamline hiring, communication, milestone management, and payments — all on a single dark canvas.
            </p>

            {/* Framer Button Pair: Primary White Pill + Secondary Charcoal Pill */}
            <div
              className="mt-8 flex items-center gap-3 flex-wrap transition-all duration-700"
              style={{
                opacity: isButtonsRevealed ? 1 : 0,
                transform: isButtonsRevealed ? 'translateY(0)' : 'translateY(14px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <button
                type="button"
                onClick={onHireClick}
                className="button-primary cursor-pointer"
              >
                <span>Hire a freelancer</span>
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="button-secondary cursor-pointer"
              >
                <span>How it works</span>
              </button>
            </div>

            {/* 4 Stat Items in Clean Monochromatic Layout with Staggered Rise */}
            <div
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] w-full transition-all duration-800"
              style={{
                opacity: isStatsRevealed ? 1 : 0,
                transform: isStatsRevealed ? 'translateY(0)' : 'translateY(16px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="transition-transform duration-500">
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums">500K+</div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">Freelancers</div>
              </div>
              <div className="transition-transform duration-500">
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums">120K+</div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">Projects done</div>
              </div>
              <div className="transition-transform duration-500">
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums">180+</div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">Countries</div>
              </div>
              <div className="transition-transform duration-500">
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums flex items-center gap-1">
                  <span>4.9</span>
                  <span className="text-[14px] text-[#999999]">/ 5</span>
                </div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">20K+ reviews</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Jobs Showcase, Mouse Arrow & Arrows (Hidden on mobile, visible on md+) */}
          <div
            className="hidden md:flex lg:col-span-6 xl:col-span-7 relative w-full justify-center lg:justify-end z-10 transition-all duration-700 ease-out mt-4 md:-mt-4 lg:-mt-6 xl:-mt-8 lg:-ml-8 xl:-ml-16 pointer-events-auto"
            style={{
              opacity: isHeadlineRevealed ? 1 : 0.8,
            }}
          >
            <LaptopMockup
              onCategoryClick={onCategoryClick}
              onHireClick={onHireClick}
              onWorkClick={onWorkClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
