import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
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
    <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* ============ LEFT COLUMN: HERO COPY & ACTIONS ============ */}
          <div className="lg:col-span-5 xl:col-span-5 z-20 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-neutral-300 mb-6 hover:border-white/20 transition-colors shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#34d77f] shadow-[0_0_8px_#34d77f]" />
              <span>The future of freelancing is here</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.12]">
              Hire the right freelancer.
              <br />
              Get your project
              <br />
              <span className="text-[#34d77f]">done—on time.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-neutral-400 text-sm sm:text-[15px] leading-relaxed max-w-lg">
              MINDS connects businesses with verified freelancers worldwide to simplify hiring, communication, project management, and secure payments — all in one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex items-center gap-3.5 flex-wrap">
              <button
                type="button"
                onClick={onHireClick}
                className="bg-[#34d77f] hover:bg-[#2bc471] active:scale-[0.98] text-[#051c0f] font-bold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all shadow-lg shadow-[#34d77f]/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d77f]"
              >
                <span>Hire a Freelancer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToHowItWorks}
                className="bg-[#0f1114] hover:bg-neutral-800 active:scale-[0.98] text-white font-medium text-sm sm:text-[15px] border border-white/10 hover:border-white/20 px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d77f]"
              >
                <Play className="w-3.5 h-3.5 fill-current text-white" />
                <span>How it works</span>
              </button>
            </div>

            {/* 4 Hero Stats Row (Matching image.png) */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-white/[0.08] w-full">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">500K+</div>
                <div className="text-xs text-neutral-400 mt-0.5">Freelancers</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">120K+</div>
                <div className="text-xs text-neutral-400 mt-0.5">Projects completed</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">180+</div>
                <div className="text-xs text-neutral-400 mt-0.5">Countries</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                  <span className="text-sm font-bold text-white ml-0.5">4.9/5</span>
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">From 20,000+ reviews</div>
              </div>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: 3D LAPTOP HARDWARE WITH FLANKING CATEGORY CARDS ============ */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full flex justify-center lg:justify-end">
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
