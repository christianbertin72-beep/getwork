import React from 'react';
import { Rocket, ArrowRight, Play } from 'lucide-react';

interface CtaBannerProps {
  onHireClick?: () => void;
  onWorkClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onHireClick, onWorkClick }) => {
  return (
    <section className="relative w-full py-12 md:py-16 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#060709]">
      <div className="max-w-7xl mx-auto relative">
        {/* Banner Card */}
        <div className="relative rounded-3xl bg-[#090c0f] border border-white/10 p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Laser Accent Lines in Corner Backgrounds (Matching image.png) */}
          <svg
            className="absolute left-0 bottom-0 w-64 h-full pointer-events-none opacity-40"
            viewBox="0 0 260 140"
            fill="none"
          >
            <line x1="-20" y1="140" x2="160" y2="0" stroke="#34d77f" strokeWidth="2" />
            <line x1="10" y1="140" x2="190" y2="0" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
          </svg>

          <svg
            className="absolute right-0 top-0 w-64 h-full pointer-events-none opacity-40"
            viewBox="0 0 260 140"
            fill="none"
          >
            <line x1="100" y1="140" x2="280" y2="0" stroke="#34d77f" strokeWidth="2" />
            <line x1="70" y1="140" x2="250" y2="0" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5" />
          </svg>

          {/* Left: Rocket Icon + Text */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-5 sm:gap-6 text-center sm:text-left z-10">
            {/* Glowing Rocket Icon Circle */}
            <div className="relative flex-none">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#0c2214] border border-[#34d77f]/50 flex items-center justify-center text-[#34d77f] shadow-[0_0_25px_rgba(52,215,127,0.25)]">
                <Rocket className="w-8 h-8 stroke-[1.8] transform -rotate-45" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ready to get started?
              </h3>
              <p className="mt-2 text-neutral-400 text-sm sm:text-base max-w-md">
                Join MINDS today and experience the future of freelancing.
              </p>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-3.5 flex-wrap justify-center sm:justify-start z-10">
            <button
              type="button"
              onClick={onHireClick}
              className="bg-[#34d77f] hover:bg-[#2bc471] active:scale-[0.98] text-[#051c0f] font-bold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all shadow-lg shadow-[#34d77f]/20 cursor-pointer"
            >
              <span>Hire a Freelancer</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onWorkClick}
              className="bg-[#12161a] hover:bg-[#1a2026] active:scale-[0.98] text-white font-medium text-sm sm:text-[15px] border border-white/15 hover:border-white/30 px-6 py-3.5 rounded-xl flex items-center gap-2.5 transition-all cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white" />
              <span>Find Work</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
