import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LaptopMockup } from './LaptopMockup';

interface HeroProps {
  onHireClick?: () => void;
  onWorkClick?: () => void;
  onCategoryClick?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onHireClick,
  onWorkClick,
  onCategoryClick,
}) => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onWorkClick?.();
    }
  };

  return (
    <section className="relative w-full pt-12 pb-20 md:pt-16 md:pb-24 overflow-visible bg-[#080808]">
      <div className="max-w-[1199px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Poster-Grade Headline & CTAs */}
          <div className="lg:col-span-6 z-20 flex flex-col items-start text-left">
            {/* Charcoal Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/[0.08] text-[13px] font-medium text-[#999999] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white">The freelance network</span>
              <span className="text-white/20">/</span>
              <span>Global talent</span>
            </div>

            {/* Poster Display Headline with Extreme Negative Tracking */}
            <h1 className="text-white text-[48px] sm:text-[68px] lg:text-[76px] font-medium leading-[0.92] tracking-[-3.8px] sm:tracking-[-4.6px]">
              Hire the right freelancer. Get your project done.
            </h1>

            {/* Lead Body Paragraph */}
            <p className="mt-6 text-[#999999] text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.15px] max-w-lg">
              Connect with vetted freelancers worldwide to streamline hiring, communication, milestone management, and payments — all on a single dark canvas.
            </p>

            {/* Framer Button Pair: Primary White Pill + Secondary Charcoal Pill */}
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={onHireClick}
                className="button-primary cursor-pointer"
              >
                <span>Hire a freelancer</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="button-secondary cursor-pointer"
              >
                <span>How it works</span>
              </button>
            </div>

            {/* 4 Stat Items in Clean Monochromatic Layout */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] w-full">
              <div>
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums">500K+</div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">Freelancers</div>
              </div>
              <div>
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums">120K+</div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">Projects done</div>
              </div>
              <div>
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums">180+</div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">Countries</div>
              </div>
              <div>
                <div className="text-[22px] font-medium text-white tracking-[-0.8px] tabular-nums flex items-center gap-1">
                  <span>4.9</span>
                  <span className="text-[14px] text-[#999999]">/ 5</span>
                </div>
                <div className="text-[13px] text-[#999999] tracking-[-0.13px] mt-0.5">20K+ reviews</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Laptop Hardware & Showcase (Hidden on mobile phones) */}
          <div className="hidden md:flex lg:col-span-6 relative w-full justify-center lg:justify-end">
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
