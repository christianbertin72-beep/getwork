import React from 'react';
import {
  Code2,
  Layout,
  Smartphone,
  Megaphone,
  ArrowRight,
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
      id="laptop-hero-mockup"
      className="relative w-full max-w-[620px] mx-auto select-none pointer-events-auto py-4"
    >
      {/* ========================================================================= */}
      {/* FLANKING SKILL CARDS (Framer Surface-1 Tiles) */}
      {/* ========================================================================= */}
      {/* LEFT FLANK CARDS (Visible on xl screens) */}
      <div className="hidden 2xl:flex flex-col gap-3 absolute -left-52 top-6 z-40 w-48">
        {/* Card 1: Web Development */}
        <div
          onClick={() => onCategoryClick?.('Web Development')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              Web Development
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              Modern web applications
            </p>
          </div>
          {/* Connector Line */}
          <div className="absolute right-0 top-1/2 translate-x-full w-6 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {/* Card 2: UI/UX Design */}
        <div
          onClick={() => onCategoryClick?.('UI/UX Design')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <PenTool className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              UI/UX Design
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              Design systems & apps
            </p>
          </div>
          {/* Connector Line */}
          <div className="absolute right-0 top-1/2 translate-x-full w-8 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {/* Card 3: Digital Marketing */}
        <div
          onClick={() => onCategoryClick?.('Digital Marketing')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <Megaphone className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              Marketing
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              Targeted growth strategies
            </p>
          </div>
          {/* Connector Line */}
          <div className="absolute right-0 top-1/2 translate-x-full w-7 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {/* Card 4: Content Writing */}
        <div
          onClick={() => onCategoryClick?.('Content Writing')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <FileEdit className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              Content Writing
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              High-converting copy
            </p>
          </div>
          {/* Connector Line */}
          <div className="absolute right-0 top-1/2 translate-x-full w-6 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
      </div>

      {/* RIGHT FLANK CARDS */}
      <div className="hidden 2xl:flex flex-col gap-3 absolute -right-52 top-6 z-40 w-48">
        {/* Card 1: Video Editing */}
        <div
          onClick={() => onCategoryClick?.('Video Editing')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-6 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <Video className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              Video Editing
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              Studio post-production
            </p>
          </div>
        </div>

        {/* Card 2: SEO Optimization */}
        <div
          onClick={() => onCategoryClick?.('SEO Optimization')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-8 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              SEO Optimization
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              Organic search rank
            </p>
          </div>
        </div>

        {/* Card 3: Virtual Assistant */}
        <div
          onClick={() => onCategoryClick?.('Virtual Assistant')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-7 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <UserCheck className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              Virtual Assistant
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              Executive operations
            </p>
          </div>
        </div>

        {/* Card 4: Data Entry */}
        <div
          onClick={() => onCategoryClick?.('Data Entry')}
          className="group relative bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[15px] p-2.5 transition-all cursor-pointer shadow-xl flex items-center gap-2.5"
        >
          {/* Connector Line from screen */}
          <div className="absolute left-0 top-1/2 -translate-x-full w-6 h-[1px] bg-white/20 pointer-events-none">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
          <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white flex-none">
            <Database className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <h4 className="text-[12px] font-medium text-white tracking-[-0.14px] leading-tight group-hover:text-white transition-colors">
              Data Systems
            </h4>
            <p className="text-[10px] text-[#999999] leading-tight mt-0.5 truncate tracking-[-0.1px]">
              Accurate records & ETL
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUBTLE ARCHITECTURAL LIGHT VECTORS (Dark Aesthetic) */}
      {/* ========================================================================= */}
      <svg
        className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%] pointer-events-none z-0 overflow-visible opacity-30"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="980"
          y1="50"
          x2="520"
          y2="600"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <line
          x1="860"
          y1="180"
          x2="560"
          y2="580"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="1"
        />
        <line
          x1="450"
          y1="120"
          x2="600"
          y2="340"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
        />
      </svg>

      {/* ========================================================================= */}
      {/* 3D FLOATING MACBOOK PRO HARDWARE */}
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
            transform: 'rotateY(-14deg) rotateX(13deg) rotateZ(2.2deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ==================== MACBOOK PRO DISPLAY LID ==================== */}
          <div
            className="relative z-30 w-[92%] sm:w-[490px] md:w-[520px] aspect-[16/10.2] bg-[#121212] rounded-t-[18px] p-[7px] pb-2 shadow-[0_30px_70px_rgba(0,0,0,0.95)] border border-white/[0.12]"
            style={{
              transformOrigin: 'bottom center',
              transform: 'rotateX(-8deg) translateZ(8px)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.95), 0 0 1px rgba(255,255,255,0.1)',
            }}
          >
            {/* Specular highlight rim */}
            <div className="absolute inset-0 rounded-t-[18px] pointer-events-none border-t border-l border-white/20" />

            {/* Top Display Camera Notch */}
            <div className="absolute top-1.5 inset-x-0 flex items-center justify-center pointer-events-none z-40">
              <div className="w-1.5 h-1.5 rounded-full bg-[#050505] border border-white/15 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-[#0099ff]/60" />
              </div>
            </div>

            {/* SCREEN DISPLAY CONTAINER (Framer Canvas Inside) */}
            <div className="w-full h-full bg-[#080808] rounded-[12px] overflow-hidden border border-white/[0.08] flex flex-col relative text-left shadow-inner">
              {/* Glass specular sheen reflection */}
              <div
                className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.025] to-white/[0.06] z-30"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 32% 100%, 0 100%)',
                  opacity: 0.65,
                }}
              />

              {/* LIVE AUTONOMOUS CURSOR WITH FRAMER ACCENT BLUE BEACON */}
              <div
                className="absolute z-50 pointer-events-none animate-natural-cursor select-none"
                style={{ top: 0, left: 0 }}
              >
                <div className="relative">
                  {/* High-fidelity macOS Pointer Arrow */}
                  <svg
                    width="18"
                    height="18"
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

                  {/* Accent-Blue Selection Halo / Beacon */}
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 rounded-full bg-[#0099ff] shadow-[0_0_8px_#0099ff]" />
                  <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-[#0099ff]/50 animate-ping" />

                  {/* Click ripples */}
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full border border-[#0099ff] pointer-events-none opacity-0 animate-click-ripple-1" />
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full border border-[#0099ff] pointer-events-none opacity-0 animate-click-ripple-2" />
                </div>
              </div>

              {/* MINI FRAMER APP HEADER BAR */}
              <div className="w-full px-3 py-2 flex items-center justify-between border-b border-white/[0.04] bg-[#080808] z-20">
                <div className="flex items-center">
                  <span className="text-[10px] font-medium tracking-[-0.4px] text-white">MINDS</span>
                </div>

                <div className="flex items-center gap-2.5 text-[8px] text-[#999999] font-normal">
                  <span
                    onClick={onHireClick}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Find Talent
                  </span>
                  <span
                    onClick={onWorkClick}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Find Work
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">Pricing</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-[#999999] cursor-pointer hover:text-white">Log in</span>
                  <button
                    type="button"
                    onClick={onHireClick}
                    className="text-[8px] bg-white hover:bg-neutral-200 text-black font-medium px-2 py-0.5 rounded-full cursor-pointer transition-transform"
                  >
                    Get started
                  </button>
                </div>
              </div>

              {/* SCREEN MAIN HERO SECTION */}
              <div className="flex-1 p-3.5 flex flex-col justify-between relative z-20 overflow-hidden bg-[#080808]">
                <div className="text-center pt-2 px-3">
                  <h3 className="text-[14px] sm:text-[15px] font-medium text-white tracking-[-0.7px] leading-[1.05]">
                    Hire the right freelancer.
                    <br />
                    Get your project done.
                  </h3>
                  <p className="text-[8.5px] text-[#999999] mt-1.5 max-w-[280px] mx-auto leading-[1.3] tracking-[-0.1px]">
                    Access global talent. Milestone escrow. Real-time delivery.
                  </p>

                  {/* Framer White Pill + Charcoal Pill */}
                  <div className="mt-3 flex items-center justify-center gap-1.5">
                    <button
                      type="button"
                      onClick={onHireClick}
                      className="bg-white hover:bg-neutral-200 text-black font-medium text-[8px] px-2.5 py-1 rounded-full flex items-center gap-1 cursor-pointer shadow-sm transition-all"
                    >
                      <span>Hire a freelancer</span>
                      <ArrowRight className="w-2 h-2" />
                    </button>
                    <button
                      type="button"
                      onClick={onWorkClick}
                      className="bg-[#141414] hover:bg-[#1e1e1e] text-white font-medium text-[8px] px-2.5 py-1 rounded-full border border-white/[0.08] cursor-pointer transition-all"
                    >
                      <span>How it works</span>
                    </button>
                  </div>
                </div>

                {/* CATEGORIES ROW WITH SIGNATURE ATMOSPHERIC VIOLET CARD */}
                <div className="mt-2 pt-2 border-t border-white/[0.04]">
                  <div className="flex items-center justify-between text-[7.5px] text-[#999999] mb-1.5 px-0.5">
                    <span className="font-medium tracking-[-0.1px] text-white">Categories</span>
                    <span className="text-[#0099ff] hover:underline cursor-pointer">Explore all ↗</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {/* Category 1: Violet Spotlight Card */}
                    <div
                      onClick={() => onCategoryClick?.('Web Development')}
                      className="group gradient-spotlight-violet rounded-[10px] p-2 flex flex-col justify-between text-left shadow-lg hover:scale-105 transition-all cursor-pointer border border-white/20"
                    >
                      <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white mb-1">
                        <Code2 className="w-2.5 h-2.5" />
                      </div>
                      <div>
                        <span className="text-[7.5px] font-medium text-white leading-tight block tracking-[-0.2px]">Web Dev</span>
                        <span className="text-[6px] text-white/80 leading-tight">Scalable apps</span>
                      </div>
                    </div>

                    {/* Category 2: Charcoal Surface-1 Card */}
                    <div
                      onClick={() => onCategoryClick?.('UI/UX Design')}
                      className="group bg-[#141414] border border-white/[0.08] hover:border-white/20 rounded-[10px] p-2 flex flex-col justify-between text-left transition-all cursor-pointer"
                    >
                      <div className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center text-white mb-1">
                        <Layout className="w-2.5 h-2.5" />
                      </div>
                      <div>
                        <span className="text-[7.5px] font-medium text-white leading-tight block tracking-[-0.2px]">Design</span>
                        <span className="text-[6px] text-[#999999] leading-tight">UI & Systems</span>
                      </div>
                    </div>

                    {/* Category 3: Charcoal Surface-1 Card */}
                    <div
                      onClick={() => onCategoryClick?.('Digital Marketing')}
                      className="group bg-[#141414] border border-white/[0.08] hover:border-white/20 rounded-[10px] p-2 flex flex-col justify-between text-left transition-all cursor-pointer"
                    >
                      <div className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center text-white mb-1">
                        <Megaphone className="w-2.5 h-2.5" />
                      </div>
                      <div>
                        <span className="text-[7.5px] font-medium text-white leading-tight block tracking-[-0.2px]">Marketing</span>
                        <span className="text-[6px] text-[#999999] leading-tight">Paid & organic</span>
                      </div>
                    </div>

                    {/* Category 4: Charcoal Surface-1 Card */}
                    <div
                      onClick={() => onCategoryClick?.('Content Writing')}
                      className="group bg-[#141414] border border-white/[0.08] hover:border-white/20 rounded-[10px] p-2 flex flex-col justify-between text-left transition-all cursor-pointer"
                    >
                      <div className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center text-white mb-1">
                        <Smartphone className="w-2.5 h-2.5" />
                      </div>
                      <div>
                        <span className="text-[7.5px] font-medium text-white leading-tight block tracking-[-0.2px]">Mobile</span>
                        <span className="text-[6px] text-[#999999] leading-tight">iOS & Android</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== MACBOOK PRO HINGE ==================== */}
          <div
            className="w-[74%] h-2.5 bg-gradient-to-r from-[#111316] via-[#24262b] to-[#111316] rounded-full z-25 -mt-1 shadow-[0_2px_4px_rgba(0,0,0,0.9)] border-t border-black/80"
            style={{
              transform: 'translateZ(6px)',
            }}
          />

          {/* ==================== MACBOOK PRO UNIBODY BASE ==================== */}
          <div
            className="relative z-20 w-[98%] sm:w-[530px] md:w-[560px] h-[14px] bg-[#1a1c20] rounded-b-[16px] shadow-[0_45px_90px_rgba(0,0,0,0.98),0_15px_30px_rgba(0,0,0,0.9)] border border-[#2b2f35] flex items-center justify-center"
            style={{
              transform: 'rotateX(58deg) translateZ(-6px) translateY(-14px)',
            }}
          >
            {/* Display opening center thumb notch */}
            <div className="w-16 h-1.5 bg-[#0a0b0d] rounded-b-md border-x border-b border-[#383d44]" />
            {/* Polished front edge reflection */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          {/* Soft contact shadow beneath the laptop */}
          <div
            className="w-[85%] h-8 bg-black/90 rounded-full blur-[22px] -mt-1 pointer-events-none"
            style={{ transform: 'translateZ(-20px)' }}
          />
        </div>
      </div>
    </div>
  );
};
