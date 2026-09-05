import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onHireClick?: () => void;
  onWorkClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onHireClick, onWorkClick }) => {
  return (
    <section className="relative w-full py-20 px-5 sm:px-8 bg-[#080808]">
      <div className="max-w-[1199px] mx-auto">
        {/* SIGNATURE FRAMER ATMOSPHERIC CARD (Sunset-Orange Wash Spotlight) */}
        <div className="relative gradient-spotlight-orange p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Subtle interior atmospheric glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-300/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-left">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[12px] font-medium text-white mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get started in minutes</span>
            </div>

            {/* Display Headline with Framer Negative Letter-Spacing */}
            <h2 className="text-white text-[38px] sm:text-[54px] lg:text-[62px] font-medium leading-[0.94] tracking-[-2.6px] sm:tracking-[-3.5px]">
              Ready to hire or start working?
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-white/85 text-[15px] sm:text-[17px] leading-[1.4] tracking-[-0.15px] max-w-lg">
              Join hundreds of thousands of companies and independent talent building world-class products together on MINDS.
            </p>

            {/* Framer Button Pair: White Pill + Translucent Secondary Pill */}
            <div className="mt-9 flex items-center gap-3.5 flex-wrap">
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
