import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Megaphone,
  ArrowRight,
  PenTool,
  FileEdit,
  ShieldCheck,
  Search,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Briefcase,
} from 'lucide-react';

interface LaptopMockupProps {
  onCategoryClick?: (category: string) => void;
  onHireClick?: () => void;
  onWorkClick?: () => void;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({
  onCategoryClick,
  onHireClick,
  onWorkClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [realMouse, setRealMouse] = useState({
    x: 0,
    y: 0,
    rotateX: 2,
    rotateY: -16,
  });

  // Track the user's real mouse arrow pointer across the screen
  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center of screen to user's real mouse cursor
      const diffX = e.clientX - centerX;
      const diffY = e.clientY - centerY;

      // Normalized coordinates within responsive range
      const maxRange = 500;
      const normX = Math.max(-1, Math.min(1, diffX / maxRange));
      const normY = Math.max(-1, Math.min(1, diffY / maxRange));

      // Move in the exact same direction as the real mouse pointer
      targetX = normX * 30;
      targetY = normY * 24;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateLoop = () => {
      // Smooth interpolation for fluid responsive movement
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      const normX = currentX / 30;
      const normY = currentY / 24;
      const rotY = -16 + normX * 6; // Tilts toward pointer direction, base -16deg receded behind headline
      const rotX = 2 - normY * 5;   // Tilts vertically with pointer

      setRealMouse({
        x: Math.round(currentX * 100) / 100,
        y: Math.round(currentY * 100) / 100,
        rotateX: Math.round(rotX * 100) / 100,
        rotateY: Math.round(rotY * 100) / 100,
      });

      rafId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div
      id="laptop-hero-mockup"
      className="relative w-full max-w-[410px] sm:max-w-[435px] xl:max-w-[460px] mx-auto lg:ml-auto lg:mr-0 select-none pointer-events-auto py-2 -translate-y-3 sm:-translate-y-5 lg:-translate-y-7 lg:-translate-x-6 xl:-translate-x-10"
    >
      {/* Soft electric blue backlight glow beneath laptop */}
      <div className="absolute -bottom-8 inset-x-8 h-32 bg-[#0099ff]/18 filter blur-3xl rounded-full pointer-events-none z-0" />

      {/* ========================================================================= */}
      {/* 4 SKILL BOXES ON THE RIGHT OF THE LAPTOP WITH ARROWS FLOWING OUT OF LAPTOP */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex flex-col gap-2 absolute -right-36 xl:-right-40 top-1 z-30 w-36 xl:w-40">
        {/* Card 1: Web Development */}
        <div
          onClick={() => onCategoryClick?.('Web Development')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-[#0099ff] hover:bg-[#0099ff]/15 hover:shadow-[0_0_24px_rgba(0,153,255,0.45)] rounded-[14px] p-2.5 transition-all duration-200 cursor-pointer shadow-xl flex items-center justify-between"
        >
          {/* Arrow pointing OUT of the laptop toward the card */}
          <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex items-center pointer-events-none pr-1 z-30">
            <div className="w-5 xl:w-7 h-[1.5px] bg-gradient-to-r from-[#0099ff]/50 via-[#0099ff]/80 to-[#0099ff] group-hover:from-[#0099ff] group-hover:to-[#0099ff] transition-all duration-200" />
            <svg
              className="w-4 h-4 text-[#0099ff] -ml-1.5 transition-colors duration-200 flex-none filter drop-shadow-[0_0_5px_rgba(0,153,255,0.85)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 group-hover:bg-[#0099ff]/25 group-hover:border-[#0099ff]/60 group-hover:text-[#0099ff] flex items-center justify-center text-white flex-none transition-colors duration-200">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-[#66bfff] transition-colors duration-200">
                Web Development
              </h4>
              <p className="text-[10px] text-[#999999] group-hover:text-blue-200/90 leading-tight mt-0.5 truncate tracking-[-0.1px] transition-colors duration-200">
                Modern web applications
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: UI/UX Design */}
        <div
          onClick={() => onCategoryClick?.('UI/UX Design')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-[#0099ff] hover:bg-[#0099ff]/15 hover:shadow-[0_0_24px_rgba(0,153,255,0.45)] rounded-[14px] p-2.5 transition-all duration-200 cursor-pointer shadow-xl flex items-center justify-between"
        >
          {/* Arrow pointing OUT of the laptop toward the card */}
          <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex items-center pointer-events-none pr-1 z-30">
            <div className="w-6 xl:w-9 h-[1.5px] bg-gradient-to-r from-[#0099ff]/50 via-[#0099ff]/80 to-[#0099ff] group-hover:from-[#0099ff] group-hover:to-[#0099ff] transition-all duration-200" />
            <svg
              className="w-4 h-4 text-[#0099ff] -ml-1.5 transition-colors duration-200 flex-none filter drop-shadow-[0_0_5px_rgba(0,153,255,0.85)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 group-hover:bg-[#0099ff]/25 group-hover:border-[#0099ff]/60 group-hover:text-[#0099ff] flex items-center justify-center text-white flex-none transition-colors duration-200">
              <PenTool className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-[#66bfff] transition-colors duration-200">
                UI/UX Design
              </h4>
              <p className="text-[10px] text-[#999999] group-hover:text-blue-200/90 leading-tight mt-0.5 truncate tracking-[-0.1px] transition-colors duration-200">
                Design systems & apps
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Digital Marketing */}
        <div
          onClick={() => onCategoryClick?.('Digital Marketing')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-[#0099ff] hover:bg-[#0099ff]/15 hover:shadow-[0_0_24px_rgba(0,153,255,0.45)] rounded-[14px] p-2.5 transition-all duration-200 cursor-pointer shadow-xl flex items-center justify-between"
        >
          {/* Arrow pointing OUT of the laptop toward the card */}
          <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex items-center pointer-events-none pr-1 z-30">
            <div className="w-6 xl:w-9 h-[1.5px] bg-gradient-to-r from-[#0099ff]/50 via-[#0099ff]/80 to-[#0099ff] group-hover:from-[#0099ff] group-hover:to-[#0099ff] transition-all duration-200" />
            <svg
              className="w-4 h-4 text-[#0099ff] -ml-1.5 transition-colors duration-200 flex-none filter drop-shadow-[0_0_5px_rgba(0,153,255,0.85)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 group-hover:bg-[#0099ff]/25 group-hover:border-[#0099ff]/60 group-hover:text-[#0099ff] flex items-center justify-center text-white flex-none transition-colors duration-200">
              <Megaphone className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-[#66bfff] transition-colors duration-200">
                Marketing
              </h4>
              <p className="text-[10px] text-[#999999] group-hover:text-blue-200/90 leading-tight mt-0.5 truncate tracking-[-0.1px] transition-colors duration-200">
                Targeted growth strategies
              </p>
            </div>
          </div>
        </div>

        {/* Card 4: Content Writing */}
        <div
          onClick={() => onCategoryClick?.('Content Writing')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-[#0099ff] hover:bg-[#0099ff]/15 hover:shadow-[0_0_24px_rgba(0,153,255,0.45)] rounded-[14px] p-2.5 transition-all duration-200 cursor-pointer shadow-xl flex items-center justify-between"
        >
          {/* Arrow pointing OUT of the laptop toward the card */}
          <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 flex items-center pointer-events-none pr-1 z-30">
            <div className="w-6 xl:w-9 h-[1.5px] bg-gradient-to-r from-[#0099ff]/50 via-[#0099ff]/80 to-[#0099ff] group-hover:from-[#0099ff] group-hover:to-[#0099ff] transition-all duration-200" />
            <svg
              className="w-4 h-4 text-[#0099ff] -ml-1.5 transition-colors duration-200 flex-none filter drop-shadow-[0_0_5px_rgba(0,153,255,0.85)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 group-hover:bg-[#0099ff]/25 group-hover:border-[#0099ff]/60 group-hover:text-[#0099ff] flex items-center justify-center text-white flex-none transition-colors duration-200">
              <FileEdit className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-[#66bfff] transition-colors duration-200">
                Content Writing
              </h4>
              <p className="text-[10px] text-[#999999] group-hover:text-blue-200/90 leading-tight mt-0.5 truncate tracking-[-0.1px] transition-colors duration-200">
                High-converting copy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING JOBS BOARD & FEED WITH LIVE AUTONOMOUS MOUSE ARROW */}
      {/* ========================================================================= */}
      <div
        className="relative w-full max-w-[410px] sm:max-w-[435px] xl:max-w-[460px] mx-auto lg:ml-auto lg:mr-0 z-20"
        style={{
          perspective: '1200px',
        }}
      >
        {/* Soft atmospheric electric blue backlight glow beneath jobs card */}
        <div
          className="absolute -inset-2 bg-gradient-to-r from-[#0099ff]/25 via-blue-600/15 to-transparent rounded-[26px] blur-2xl opacity-70 pointer-events-none -z-10"
          style={{
            transform: `translate3d(${realMouse.x}px, ${realMouse.y}px, 0px)`,
            willChange: 'transform',
          }}
        />

        {/* The Sleek Floating Jobs Card - 3D depth moving interactively in the same direction as the user's real mouse arrow */}
        <div
          ref={cardRef}
          className="w-full bg-[#0b0c10]/92 backdrop-blur-2xl rounded-[18px] border border-white/[0.12] shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_1px_rgba(255,255,255,0.15)] overflow-hidden flex flex-col relative text-left"
          style={{
            transform: `translate3d(${realMouse.x}px, ${realMouse.y}px, -95px) rotateY(${realMouse.rotateY}deg) rotateX(${realMouse.rotateX}deg)`,
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        >
          {/* Subtle top edge specular highlight */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-30" />

          {/* LIVE AUTONOMOUS MOUSE ARROW WITH ELECTRIC BLUE BEACON */}
          <div
            className="absolute z-50 pointer-events-none animate-natural-cursor select-none"
            style={{ top: 0, left: 0 }}
          >
            <div className="relative">
              {/* High-fidelity macOS Pointer Arrow */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] filter"
              >
                <path
                  d="M5.5 3.5L18.5 13.5L12 14.5L15.5 21L12.5 22.5L9 16L5.5 19.5V3.5Z"
                  fill="#FFFFFF"
                  stroke="#050607"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Accent-Blue Selection Halo / Beacon */}
              <div className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 rounded-full bg-[#0099ff] shadow-[0_0_10px_#0099ff]" />
              <div className="absolute -top-1 -left-1 w-3.5 h-3.5 rounded-full bg-[#0099ff]/50 animate-ping" />

              {/* Click ripples */}
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full border border-[#0099ff] pointer-events-none opacity-0 animate-click-ripple-1" />
              <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full border border-[#0099ff] pointer-events-none opacity-0 animate-click-ripple-2" />
            </div>
          </div>

          {/* JOBS FEED HEADER */}
          <div className="w-full px-3.5 py-2 flex items-center justify-between border-b border-white/[0.08] bg-[#121318]/90 z-20">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[6px] bg-[#0099ff] flex items-center justify-center text-white flex-none shadow-[0_0_8px_rgba(0,153,255,0.4)]">
                <Briefcase className="w-3 h-3" />
              </div>
              <span className="text-[11px] font-semibold tracking-[-0.3px] text-white">MINDS</span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[8px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Jobs</span>
              </div>
            </div>

            {/* Search pill mockup */}
            <div className="hidden xs:flex items-center gap-1.5 bg-[#17181f] border border-white/[0.08] rounded-full px-2.5 py-1 text-[8px] text-[#888888] max-w-[150px] w-full">
              <Search className="w-2.5 h-2.5 text-[#666666]" />
              <span className="truncate">Search 1,420+ jobs...</span>
            </div>

            <div className="flex items-center gap-2">
              <span
                onClick={onHireClick}
                className="text-[9px] text-[#999999] hover:text-white cursor-pointer transition-colors"
              >
                Post Job
              </span>
              <button
                type="button"
                onClick={onWorkClick}
                className="text-[9px] bg-white hover:bg-neutral-200 text-black font-medium px-2.5 py-0.5 rounded-full cursor-pointer transition-transform"
              >
                Browse All
              </button>
            </div>
          </div>

          {/* CATEGORY FILTER PILLS */}
          <div className="px-3.5 py-1.5 flex items-center gap-1.5 border-b border-white/[0.06] bg-[#0d0e13] z-20 overflow-x-auto no-scrollbar">
            <span className="text-[7.5px] text-[#777777] mr-0.5 font-medium uppercase tracking-wider">Feed:</span>
            <span className="text-[8px] px-2.5 py-0.5 rounded-full bg-[#0099ff] text-white font-medium cursor-pointer flex-none shadow-[0_0_8px_rgba(0,153,255,0.35)]">
              All (1,420)
            </span>
            <span
              onClick={() => onCategoryClick?.('Web Development')}
              className="text-[8px] px-2 py-0.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#bbbbbb] cursor-pointer transition-colors flex-none"
            >
              Web Dev
            </span>
            <span
              onClick={() => onCategoryClick?.('UI/UX Design')}
              className="text-[8px] px-2 py-0.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#bbbbbb] cursor-pointer transition-colors flex-none"
            >
              UI/UX
            </span>
            <span
              onClick={() => onCategoryClick?.('Digital Marketing')}
              className="text-[8px] px-2 py-0.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#bbbbbb] cursor-pointer transition-colors flex-none"
            >
              Marketing
            </span>
            <span
              onClick={() => onCategoryClick?.('Content Writing')}
              className="text-[8px] px-2 py-0.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#bbbbbb] cursor-pointer transition-colors flex-none"
            >
              Writing
            </span>
          </div>

          {/* MAIN JOBS FEED */}
          <div className="p-3 flex flex-col gap-2 relative z-20 overflow-hidden bg-[#090a0e]">
            {/* Job Card 1: Web Development */}
            <div
              onClick={onWorkClick}
              className="group/job bg-[#13141a] hover:bg-[#181a22] border border-white/[0.08] hover:border-[#0099ff] hover:shadow-[0_0_18px_rgba(0,153,255,0.28)] rounded-xl p-2.5 transition-all duration-200 cursor-pointer text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[7.5px] font-mono text-[#888888]">Apex Core</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[7.5px] text-[#0099ff] font-medium flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#0099ff]" /> Verified Client
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[7.5px] text-[#777777] flex items-center gap-0.5">
                      <Clock className="w-2.5 h-2.5" /> 2h ago
                    </span>
                  </div>
                  <h4 className="text-[11px] font-medium text-white group-hover/job:text-[#66bfff] tracking-[-0.2px] leading-tight truncate transition-colors">
                    Full-Stack Next.js 15 & AI Dashboard Platform
                  </h4>
                </div>
                <div className="text-right flex-none">
                  <span className="text-[11px] font-semibold text-emerald-400 font-mono block leading-tight">
                    $4,800
                  </span>
                  <span className="text-[7px] text-[#888888]">Fixed Price</span>
                </div>
              </div>

              <div className="mt-1.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    Next.js
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    TypeScript
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    Tailwind
                  </span>
                </div>
                <button
                  type="button"
                  className="text-[8px] px-2.5 py-0.5 rounded-full bg-white group-hover/job:bg-[#0099ff] text-black group-hover/job:text-white font-medium flex items-center gap-1 transition-colors shadow-sm"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* Job Card 2: UI/UX Design */}
            <div
              onClick={onWorkClick}
              className="group/job bg-[#13141a] hover:bg-[#181a22] border border-white/[0.08] hover:border-[#0099ff] hover:shadow-[0_0_18px_rgba(0,153,255,0.28)] rounded-xl p-2.5 transition-all duration-200 cursor-pointer text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[7.5px] font-mono text-[#888888]">Loomix Design</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[7.5px] text-emerald-400 font-medium flex items-center gap-0.5">
                      <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" /> Escrow Funded
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[7.5px] text-[#777777] flex items-center gap-0.5">
                      <Clock className="w-2.5 h-2.5" /> 4h ago
                    </span>
                  </div>
                  <h4 className="text-[11px] font-medium text-white group-hover/job:text-[#66bfff] tracking-[-0.2px] leading-tight truncate transition-colors">
                    Enterprise Design System & Mobile App Redesign
                  </h4>
                </div>
                <div className="text-right flex-none">
                  <span className="text-[11px] font-semibold text-emerald-400 font-mono block leading-tight">
                    $85 - $115/hr
                  </span>
                  <span className="text-[7px] text-[#888888]">Hourly</span>
                </div>
              </div>

              <div className="mt-1.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    Figma
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    UI/UX
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    iOS/Android
                  </span>
                </div>
                <button
                  type="button"
                  className="text-[8px] px-2.5 py-0.5 rounded-full bg-white group-hover/job:bg-[#0099ff] text-black group-hover/job:text-white font-medium flex items-center gap-1 transition-colors shadow-sm"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* Job Card 3: Digital Marketing & Content */}
            <div
              onClick={onWorkClick}
              className="group/job bg-[#13141a] hover:bg-[#181a22] border border-white/[0.08] hover:border-[#0099ff] hover:shadow-[0_0_18px_rgba(0,153,255,0.28)] rounded-xl p-2.5 transition-all duration-200 cursor-pointer text-left"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[7.5px] font-mono text-[#888888]">Synthetix Scale</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[7.5px] text-[#0099ff] font-medium flex items-center gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#0099ff]" /> Payment Verified
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[7.5px] text-[#777777] flex items-center gap-0.5">
                      <Clock className="w-2.5 h-2.5" /> 6h ago
                    </span>
                  </div>
                  <h4 className="text-[11px] font-medium text-white group-hover/job:text-[#66bfff] tracking-[-0.2px] leading-tight truncate transition-colors">
                    Growth Acquisition Marketer & Technical Copywriter
                  </h4>
                </div>
                <div className="text-right flex-none">
                  <span className="text-[11px] font-semibold text-emerald-400 font-mono block leading-tight">
                    $3,200
                  </span>
                  <span className="text-[7px] text-[#888888]">Fixed Price</span>
                </div>
              </div>

              <div className="mt-1.5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    Google Ads
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    SEO
                  </span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[#cccccc]">
                    Copywriting
                  </span>
                </div>
                <button
                  type="button"
                  className="text-[8px] px-2.5 py-0.5 rounded-full bg-white group-hover/job:bg-[#0099ff] text-black group-hover/job:text-white font-medium flex items-center gap-1 transition-colors shadow-sm"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>

            {/* BOTTOM FOOTER STATUS STRIP */}
            <div className="pt-1.5 border-t border-white/[0.06] flex items-center justify-between text-[8px] text-[#888888]">
              <div className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3 h-3" />
                <span>100% Escrow Protection</span>
              </div>
              <div
                onClick={onWorkClick}
                className="hover:text-white text-[#999999] flex items-center gap-1 cursor-pointer transition-colors font-medium"
              >
                <span>View all 1,420 jobs</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
