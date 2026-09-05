import React from 'react';
import {
  Code2,
  Layout,
  Smartphone,
  Megaphone,
  ArrowRight,
  Play,
  PenTool,
  FileEdit,
  Video,
  TrendingUp,
  UserCheck,
  Database,
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
  return (
    <div
      className="relative w-full max-w-[680px] mx-auto select-none pointer-events-auto py-4"
    >
      {/* ========================================================================= */}
      {/* FLANKING SKILL CARDS (Matching image.png on xl screens) */}
      {/* ========================================================================= */}
      {/* LEFT FLANK CARDS */}
      <div className="hidden 2xl:flex flex-col gap-3.5 absolute -left-56 top-8 z-40 w-52">
        {/* Card 1: Web Development */}
        <div
          onClick={() => onCategoryClick?.('Web Development')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#34d77f] flex-none">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              Web Development
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Build modern, scalable web applications
            </p>
          </div>
          {/* Connector Line to screen */}
          <div className="absolute right-0 top-1/2 translate-x-full w-7 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
        </div>

        {/* Card 2: UI/UX Design */}
        <div
          onClick={() => onCategoryClick?.('UI/UX Design')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-none">
            <PenTool className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              UI/UX Design
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Create engaging user experiences
            </p>
          </div>
          {/* Connector Line to screen */}
          <div className="absolute right-0 top-1/2 translate-x-full w-9 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
        </div>

        {/* Card 3: Digital Marketing */}
        <div
          onClick={() => onCategoryClick?.('Digital Marketing')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 flex-none">
            <Megaphone className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              Digital Marketing
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Grow your business with smart strategies
            </p>
          </div>
          {/* Connector Line to screen */}
          <div className="absolute right-0 top-1/2 translate-x-full w-10 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
        </div>

        {/* Card 4: Content Writing */}
        <div
          onClick={() => onCategoryClick?.('Content Writing')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-none">
            <FileEdit className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              Content Writing
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Engaging content that converts
            </p>
          </div>
          {/* Connector Line to screen */}
          <div className="absolute right-0 top-1/2 translate-x-full w-8 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
        </div>
      </div>

      {/* RIGHT FLANK CARDS */}
      <div className="hidden 2xl:flex flex-col gap-3.5 absolute -right-56 top-8 z-40 w-52">
        {/* Card 1: Video Editing */}
        <div
          onClick={() => onCategoryClick?.('Video Editing')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-8 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-fuchsia-500/15 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 flex-none">
            <Video className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              Video Editing
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Professional videos that stand out
            </p>
          </div>
        </div>

        {/* Card 2: SEO Optimization */}
        <div
          onClick={() => onCategoryClick?.('SEO Optimization')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-9 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-400 flex-none">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              SEO Optimization
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Improve rankings, drive more traffic
            </p>
          </div>
        </div>

        {/* Card 3: Virtual Assistant */}
        <div
          onClick={() => onCategoryClick?.('Virtual Assistant')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-10 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-none">
            <UserCheck className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              Virtual Assistant
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Admin support you can rely on
            </p>
          </div>
        </div>

        {/* Card 4: Data Entry */}
        <div
          onClick={() => onCategoryClick?.('Data Entry')}
          className="group relative bg-[#090b0e]/95 border border-white/10 hover:border-[#34d77f]/60 hover:bg-[#0f1317] rounded-xl p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-8 h-[1px] bg-[#34d77f]/60 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#34d77f] shadow-[0_0_6px_#34d77f]" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-none">
            <Database className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-white tracking-tight leading-tight group-hover:text-[#34d77f] transition-colors">
              Data Entry
            </h4>
            <p className="text-[10px] text-neutral-400 leading-tight mt-0.5 truncate">
              Accurate & fast data management
            </p>
          </div>
        </div>
      </div>
      {/* ========================================================================= */}
      {/* 1. PHOTOREALISTIC NEON GREEN LASER BEAMS & GLOW ENGINE */}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-0 w-[150%] h-[150%] -left-[25%] -top-[25%] pointer-events-none z-0 overflow-visible opacity-95 laser-animated"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="laserGlowCore" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" result="blurCore" />
            <feGaussianBlur stdDeviation="6" result="blurInner" />
            <feGaussianBlur stdDeviation="16" result="blurOuter" />
            <feMerge>
              <feMergeNode in="blurOuter" />
              <feMergeNode in="blurInner" />
              <feMergeNode in="blurCore" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="laserBeam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="30%" stopColor="#34d77f" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#34d77f" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="laserBeam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="35%" stopColor="#34d77f" stopOpacity="0.9" />
            <stop offset="52%" stopColor="#e6fffa" stopOpacity="1" />
            <stop offset="68%" stopColor="#34d77f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="frontLaserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d77f" stopOpacity="0" />
            <stop offset="25%" stopColor="#34d77f" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="75%" stopColor="#34d77f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Diagonal Ray 1: Top Right downwards behind screen */}
        <line
          x1="1040"
          y1="10"
          x2="480"
          y2="610"
          stroke="url(#laserBeam1)"
          strokeWidth="2.4"
          filter="url(#laserGlowCore)"
        />

        {/* Diagonal Ray 2: Top-Mid slicing behind the screen */}
        <line
          x1="930"
          y1="150"
          x2="510"
          y2="590"
          stroke="url(#laserBeam1)"
          strokeWidth="2"
          filter="url(#laserGlowCore)"
        />

        {/* Diagonal Ray 3: Upper-Mid radiating to Left */}
        <line
          x1="620"
          y1="80"
          x2="480"
          y2="290"
          stroke="url(#laserBeam1)"
          strokeWidth="1.8"
          filter="url(#laserGlowCore)"
        />

        {/* Diagonal Ray 4: Upper-Left down towards screen */}
        <line
          x1="470"
          y1="90"
          x2="590"
          y2="320"
          stroke="url(#laserBeam2)"
          strokeWidth="2.2"
          filter="url(#laserGlowCore)"
        />

        {/* Diagonal Ray 5: Middle Left cutting across scene */}
        <line
          x1="510"
          y1="240"
          x2="780"
          y2="620"
          stroke="url(#laserBeam2)"
          strokeWidth="2.4"
          filter="url(#laserGlowCore)"
        />

        {/* Diagonal Ray 6: Far right beam shooting past keyboard */}
        <line
          x1="1010"
          y1="330"
          x2="700"
          y2="600"
          stroke="url(#laserBeam1)"
          strokeWidth="2.1"
          filter="url(#laserGlowCore)"
        />

        {/* Diagonal Ray 7: Emerging across front lip of laptop towards bottom right */}
        <line
          x1="710"
          y1="570"
          x2="990"
          y2="760"
          stroke="url(#frontLaserBeam)"
          strokeWidth="2.6"
          filter="url(#laserGlowCore)"
        />

        {/* Intense laser emission node on laptop edge */}
        <circle cx="705" cy="570" r="4.5" fill="#ffffff" filter="url(#laserGlowCore)" />
        <circle cx="705" cy="570" r="2" fill="#ffffff" />
      </svg>

      {/* ========================================================================= */}
      {/* 2. STATIC 3D COMPOSITION: REALISTIC FLOATING MACBOOK PRO (NO SHAKE) */}
      {/* ========================================================================= */}
      <div
        className="relative w-full"
        style={{
          perspective: '1500px',
          perspectiveOrigin: '55% 42%',
        }}
      >
        <div
          className="relative mx-auto w-full flex flex-col items-center"
          style={{
            transform: 'rotateY(-15deg) rotateX(15deg) rotateZ(2.8deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ==================== 2A. MACBOOK PRO DISPLAY LID ==================== */}
          <div
            className="relative z-30 w-[92%] sm:w-[500px] md:w-[530px] aspect-[16/10.2] bg-[#16181b] rounded-t-2xl p-[7px] pb-2 shadow-[0_30px_70px_rgba(0,0,0,0.95)] border border-[#383d44]"
            style={{
              transformOrigin: 'bottom center',
              transform: 'rotateX(-9deg) translateZ(8px)',
              boxShadow: '0 30px 70px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.8)',
            }}
          >
            {/* Specular highlight rim around aluminum screen lid */}
            <div className="absolute inset-0 rounded-t-2xl pointer-events-none border-t border-l border-white/25" />

            {/* Top Display Bezel with FaceTime HD Camera Notch */}
            <div className="absolute top-1.5 inset-x-0 flex items-center justify-center pointer-events-none z-40">
              <div className="w-1.5 h-1.5 rounded-full bg-[#050607] border border-neutral-700/80 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-900" />
              </div>
            </div>

            {/* HIGH-RES RETINA SCREEN DISPLAY CONTAINER */}
            <div className="w-full h-full bg-[#080a0c] rounded-xl overflow-hidden border border-white/[0.08] flex flex-col relative text-left shadow-inner">
              {/* Authentic glass specular sheen reflection across display */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.035] to-white/[0.08] z-30"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 32% 100%, 0 100%)',
                  opacity: 0.75,
                }}
              />

              {/* LIVE AUTONOMOUS CURSOR ARROW */}
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
                    className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] filter"
                  >
                    <path
                      d="M5.5 3.5L18.5 13.5L12 14.5L15.5 21L12.5 22.5L9 16L5.5 19.5V3.5Z"
                      fill="#FFFFFF"
                      stroke="#050607"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Pulsing emerald beacon at cursor tip */}
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 rounded-full bg-[#34d77f] shadow-[0_0_8px_#34d77f]" />
                  <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-[#34d77f]/50 animate-ping" />

                  {/* Live Click Ripples radiating on clicks */}
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full border-2 border-[#34d77f] pointer-events-none opacity-0 animate-click-ripple-1" />
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full border-2 border-[#34d77f] pointer-events-none opacity-0 animate-click-ripple-2" />
                </div>
              </div>

              {/* MINI APP HEADER BAR */}
              <div className="w-full px-3 py-1.5 flex items-center justify-between border-b border-white/5 bg-[#090b0d]/95 z-20">
                <div className="flex items-center gap-0.5">
                  <span className="text-[10px] font-black tracking-wider text-white">MINDS</span>
                  <span className="text-[#34d77f] text-[10px] font-bold">.</span>
                </div>

                <div className="flex items-center gap-2 text-[7.5px] text-neutral-400 font-medium">
                  <span
                    onClick={onHireClick}
                    className="hover:text-white hover:text-[#34d77f] transition-colors cursor-pointer"
                  >
                    Find Talent ▾
                  </span>
                  <span
                    onClick={onWorkClick}
                    className="hover:text-white hover:text-[#34d77f] transition-colors cursor-pointer"
                  >
                    Find Work ▾
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">Pricing</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[7.5px] text-neutral-300 cursor-pointer hover:text-white">Log in</span>
                  <button
                    type="button"
                    onClick={onHireClick}
                    className="text-[7.5px] bg-[#34d77f] hover:bg-[#2bc471] text-neutral-950 font-bold px-2 py-0.5 rounded cursor-pointer transition-colors shadow-sm"
                  >
                    Sign up
                  </button>
                </div>
              </div>

              {/* SCREEN MAIN HERO SECTION */}
              <div className="flex-1 p-3 flex flex-col justify-between relative z-20 overflow-hidden bg-gradient-to-b from-[#090b0d] via-[#0d1013] to-[#111418]">
                <div className="text-center pt-1 px-2">
                  <h3 className="text-[13.5px] sm:text-[14.5px] font-bold text-white tracking-tight leading-tight">
                    Hire the right freelancer.
                    <br />
                    Get your project <span className="text-[#34d77f]">done—on time.</span>
                  </h3>
                  <p className="text-[8px] sm:text-[9px] text-neutral-400 mt-1 max-w-[290px] mx-auto leading-tight">
                    Access global talent. Work smarter. Grow faster.
                  </p>

                  {/* Action buttons inside screen */}
                  <div className="mt-2.5 flex items-center justify-center gap-1.5">
                    <button
                      type="button"
                      onClick={onHireClick}
                      className="bg-[#34d77f] hover:bg-[#2bc471] active:scale-95 text-neutral-950 font-bold text-[7.5px] px-2 py-0.5 rounded flex items-center gap-0.5 cursor-pointer shadow-sm transition-all"
                    >
                      <span>Hire a Freelancer</span>
                      <ArrowRight className="w-2 h-2" />
                    </button>
                    <button
                      type="button"
                      onClick={onWorkClick}
                      className="bg-neutral-800/90 hover:bg-neutral-700 active:scale-95 text-white font-medium text-[7.5px] px-2 py-0.5 rounded flex items-center gap-0.5 border border-white/10 cursor-pointer transition-all"
                    >
                      <Play className="w-1.5 h-1.5 fill-current" />
                      <span>Find Work</span>
                    </button>
                  </div>
                </div>

                {/* TOP CATEGORIES 4-CARD ROW (Matching image.png) */}
                <div className="mt-2 pt-1.5 border-t border-white/5">
                  <div className="flex items-center justify-between text-[7px] text-neutral-400 mb-1 px-0.5">
                    <span className="font-semibold text-neutral-300 uppercase tracking-wider">Top Categories</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {/* Category 1: Web Development */}
                    <div
                      onClick={() => onCategoryClick?.('Web Development')}
                      className="group bg-white rounded-md p-1.5 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="w-4 h-4 rounded bg-emerald-100 flex items-center justify-center text-emerald-600 mb-0.5 group-hover:scale-110 transition-transform">
                        <Code2 className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[6.5px] font-bold text-neutral-800 leading-tight">Web Development</span>
                      <span className="text-[5px] text-neutral-400 mt-0.5 line-clamp-1">Build modern apps</span>
                    </div>

                    {/* Category 2: UI/UX Design */}
                    <div
                      onClick={() => onCategoryClick?.('UI/UX Design')}
                      className="group bg-white rounded-md p-1.5 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="w-4 h-4 rounded bg-purple-100 flex items-center justify-center text-purple-600 mb-0.5 group-hover:scale-110 transition-transform">
                        <Layout className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[6.5px] font-bold text-neutral-800 leading-tight">UI/UX Design</span>
                      <span className="text-[5px] text-neutral-400 mt-0.5 line-clamp-1">Create engaging UX</span>
                    </div>

                    {/* Category 3: Digital Marketing */}
                    <div
                      onClick={() => onCategoryClick?.('Digital Marketing')}
                      className="group bg-white rounded-md p-1.5 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="w-4 h-4 rounded bg-amber-100 flex items-center justify-center text-amber-600 mb-0.5 group-hover:scale-110 transition-transform">
                        <Megaphone className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[6.5px] font-bold text-neutral-800 leading-tight">Digital Marketing</span>
                      <span className="text-[5px] text-neutral-400 mt-0.5 line-clamp-1">Smart strategies</span>
                    </div>

                    {/* Category 4: Content Writing */}
                    <div
                      onClick={() => onCategoryClick?.('Content Writing')}
                      className="group bg-white rounded-md p-1.5 flex flex-col items-center text-center shadow-md hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="w-4 h-4 rounded bg-orange-100 flex items-center justify-center text-orange-600 mb-0.5 group-hover:scale-110 transition-transform">
                        <Smartphone className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[6.5px] font-bold text-neutral-800 leading-tight">Content Writing</span>
                      <span className="text-[5px] text-neutral-400 mt-0.5 line-clamp-1">Engaging copy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 2B. AUTHENTIC MACBOOK PRO HINGE ==================== */}
          <div
            className="w-[74%] h-2.5 bg-gradient-to-r from-[#111316] via-[#2a2e34] to-[#111316] rounded-full z-25 -mt-1 shadow-[0_2px_4px_rgba(0,0,0,0.9)] border-t border-black/80"
            style={{
              transform: 'translateZ(6px)',
            }}
          />

          {/* ==================== 2C. REALISTIC MACBOOK PRO UNIBODY BASE ==================== */}
          {/* Sits seamlessly attached at the hinge, extending forward into 3D space */}
          <div
            className="relative z-20 w-[98%] sm:w-[530px] md:w-[570px] -mt-1 rounded-b-2xl bg-gradient-to-b from-[#25282d] via-[#1c1f23] to-[#131518] border-t border-[#454b54] border-x border-b border-[#0d0e10] p-3 pt-2 shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
            style={{
              transformOrigin: 'top center',
              transform: 'rotateX(62deg)',
            }}
          >
            {/* Screen reflection casting down across keyboard deck */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#34d77f]/[0.14] via-[#22c55e]/[0.03] to-transparent pointer-events-none screen-ambient-glow" />

            {/* Aluminum bevel highlight lines */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {/* Top Base Section: Speaker Grilles & Recessed Keyboard Well */}
            <div className="flex items-center justify-between gap-2 px-1">
              {/* Left Speaker Grille Strip (micro-perforated acoustic texture) */}
              <div className="w-5 h-24 rounded bg-[radial-gradient(#2d3238_1px,transparent_1px)] [background-size:2.5px_2.5px] opacity-80" />

              {/* Recessed Keyboard Well with Tactile Keycaps */}
              <div className="flex-1 bg-[#0b0d0f] rounded-lg p-1.5 border border-black/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.9)]">
                {/* Function Key Row */}
                <div className="grid grid-cols-13 gap-0.5 mb-0.5">
                  <div className="h-1.5 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="h-1.5 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  ))}
                  <div className="h-1.5 bg-[#23272d] rounded-full border border-neutral-600" /> {/* Touch ID */}
                </div>

                {/* Number Key Row */}
                <div className="grid grid-cols-13 gap-0.5 mb-0.5">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <div key={i} className="h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10 shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                  ))}
                </div>

                {/* QWERTY Row */}
                <div className="grid grid-cols-13 gap-0.5 mb-0.5">
                  <div className="h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="h-2 bg-[#1e2226] rounded-[1px] border-t border-white/10 shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                  ))}
                  <div className="h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                </div>

                {/* ASDF Row */}
                <div className="grid grid-cols-12 gap-0.5 mb-0.5">
                  <div className="h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="h-2 bg-[#1e2226] rounded-[1px] border-t border-white/10 shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                  ))}
                  <div className="h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                </div>

                {/* Bottom Spacebar & Modifier Row */}
                <div className="flex gap-0.5">
                  <div className="w-6 h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  <div className="w-5 h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  <div className="w-5 h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  <div className="flex-1 h-2 bg-[#252a2f] rounded-[1px] border-t border-white/15 shadow-[0_1px_1px_rgba(0,0,0,0.8)]" /> {/* Spacebar */}
                  <div className="w-5 h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  <div className="w-5 h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                  <div className="w-6 h-2 bg-[#1b1e22] rounded-[1px] border-t border-white/10" />
                </div>
              </div>

              {/* Right Speaker Grille Strip */}
              <div className="w-5 h-24 rounded bg-[radial-gradient(#2d3238_1px,transparent_1px)] [background-size:2.5px_2.5px] opacity-80" />
            </div>

            {/* Force Touch Glass Trackpad */}
            <div className="w-28 h-14 mx-auto mt-2 rounded-lg bg-gradient-to-b from-[#181a1d] to-[#1f2226] border border-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]" />

            {/* Front Lip Display Opening Thumb Scoop Notch */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#3a3f47] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.9)]" />

            {/* Aluminum 3D Base Thickness Rim */}
            <div className="absolute -bottom-2 left-1 right-1 h-2 bg-gradient-to-b from-[#141618] to-[#08090a] rounded-b-xl border-b border-black/90" />
          </div>
        </div>
      </div>
    </div>
  );
};
