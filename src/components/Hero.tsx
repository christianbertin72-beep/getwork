import React, { useEffect, useState } from 'react';
import { LaptopMockup } from './LaptopMockup';
import { MaskedHeading } from './MaskedHeading';
import teamBgImg from '../assets/images/team_laptop_bg_1788801086292.jpg';
import { Maximize2, X } from 'lucide-react';

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
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);

  useEffect(() => {
    // Quick entry trigger for seamless page load
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreenImage(false);
      }
    };
    if (isFullscreenImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenImage]);

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
      {/* CINEMATIC BACKGROUND: PEOPLE BEHIND HEADLINE, RIGHT SIDE BEHIND JOBS SCREEN */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none">
        <img
          src={teamBgImg}
          alt="Collaborative creative team"
          className="w-full h-full object-cover object-[40%_25%] md:object-[38%_25%] opacity-80 md:opacity-85 filter brightness-[0.80] contrast-[1.12]"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Vignettes:
            - Left side: clear view of people behind "Hire the right freelancer" with subtle text protection
            - Right side: right side of the creative studio photo visible directly behind the screen showing the jobs
            - Top and Bottom: smooth fade to #080808 dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/45 via-[#080808]/25 to-[#080808]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_40%_35%,transparent_0%,#080808_90%)]" />

        {/* Soft atmospheric electric blue ambient glows */}
        <div className="absolute -left-12 top-1/4 w-[520px] h-[520px] bg-[#0099ff]/14 rounded-full blur-[130px]" />
        <div className="absolute right-0 top-1/4 w-[520px] h-[520px] bg-[#0099ff]/12 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Poster-Grade Headline & CTAs */}
          <div className="lg:col-span-5 z-20 flex flex-col items-start text-left">
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

          {/* Right Column: Interactive Jobs Showcase, Mouse Arrow & Arrows */}
          <div
            className="flex lg:col-span-7 relative w-full justify-center lg:justify-start xl:justify-center transition-all duration-700 ease-out mt-8 md:mt-0"
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

      {/* Floating pill to view the photo in full screen */}
      <div className="absolute bottom-3 right-5 z-20 hidden sm:block">
        <button
          type="button"
          onClick={() => setIsFullscreenImage(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212]/80 hover:bg-[#1a1a1a] text-[#888888] hover:text-white text-[11px] font-medium border border-white/[0.08] backdrop-blur-md transition-colors cursor-pointer shadow-lg"
          title="Open photo full screen"
        >
          <Maximize2 className="w-3 h-3 text-[#0099ff]" />
          <span>Expand Picture Fullscreen</span>
        </button>
      </div>

      {/* Fullscreen Picture Modal */}
      {isFullscreenImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
          onClick={() => setIsFullscreenImage(false)}
        >
          <div className="absolute top-4 right-5 z-50 flex items-center gap-3">
            <span className="text-[12px] text-[#888888]">Click anywhere or press Esc to close</span>
            <button
              type="button"
              onClick={() => setIsFullscreenImage(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Close full page photo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative max-w-7xl max-h-[92vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={teamBgImg}
              alt="Creative collaborative team working on laptop in library"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
