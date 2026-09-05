import React from 'react';
import { Users, ShieldCheck, MessageSquare, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface FeaturesSectionProps {
  onCardClick?: (featureTitle: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCardClick }) => {
  return (
    <section id="features" className="relative w-full py-24 md:py-32 px-5 sm:px-8 bg-[#080808]">
      <div className="max-w-[1199px] mx-auto flex flex-col items-start text-left">
        {/* Charcoal Pill Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/[0.08] text-[13px] font-medium text-[#999999] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white">Platform capabilities</span>
        </div>

        {/* Poster Heading */}
        <h2 className="text-white text-[36px] sm:text-[52px] lg:text-[60px] font-medium leading-[0.96] tracking-[-2.5px] sm:tracking-[-3.1px] max-w-2xl">
          Everything you need on one canvas.
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-[#999999] text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.15px] max-w-xl">
          From recruiting pre-vetted specialists to escrow-backed project completions, MINDS keeps your remote workflow synchronized and frictionless.
        </p>

        {/* Feature Layout with Signature Gradient Spotlight Card */}
        <div className="mt-14 w-full grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* SIGNATURE FRAMER GRADIENT SPOTLIGHT CARD (Violet Atmosphere Tile) */}
          <div
            onClick={() => onCardClick?.('Smart Project Workspace')}
            className="lg:col-span-7 gradient-spotlight-violet p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between cursor-pointer group shadow-2xl transition-transform duration-200 hover:scale-[0.995]"
          >
            {/* Ambient interior lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            {/* Card Header */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                <Zap className="w-5 h-5" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[12px] font-medium tracking-[-0.12px] backdrop-blur-md">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            </div>

            {/* Poster statement within Spotlight Card */}
            <div className="relative z-10 my-10 max-w-md">
              <h3 className="text-[28px] sm:text-[34px] font-medium text-white tracking-[-1.4px] leading-[1.05]">
                Smart Project Workspace. Synchronized milestones.
              </h3>
              <p className="mt-3 text-white/80 text-[15px] leading-[1.35] tracking-[-0.14px]">
                Collaborate directly, share build artifacts, track deliverables, and manage approval checkpoints in one integrated interface.
              </p>
            </div>

            {/* Interactive preview pill */}
            <div className="relative z-10 pt-4 flex items-center justify-between border-t border-white/20">
              <span className="text-[13px] font-medium text-white tracking-[-0.13px]">Explore collaborative workspace</span>
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Surface-1 Charcoal Feature Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Feature 2: Top Talent */}
            <div
              onClick={() => onCardClick?.('Find Top Talent')}
              className="bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[20px] p-7 transition-all cursor-pointer flex-1 flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white mb-6">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[20px] font-medium text-white tracking-[-0.7px]">
                  Vetted Global Talent
                </h3>
                <p className="mt-2 text-[14px] text-[#999999] leading-[1.35] tracking-[-0.14px]">
                  Direct access to senior developers, designers, and creative specialists pre-screened for excellence.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-[13px] font-medium text-white group-hover:text-[#0099ff] transition-colors">
                <span>View talent directory</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* Feature 3: Escrow Payments */}
            <div
              onClick={() => onCardClick?.('Secure Payments')}
              className="bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[20px] p-7 transition-all cursor-pointer flex-1 flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[20px] font-medium text-white tracking-[-0.7px]">
                  Escrow-Protected Payments
                </h3>
                <p className="mt-2 text-[14px] text-[#999999] leading-[1.35] tracking-[-0.14px]">
                  Funds are secured upon milestone initialization and only disbursed once deliverables meet your standards.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-[13px] font-medium text-white group-hover:text-[#0099ff] transition-colors">
                <span>Learn about escrow</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Row of Framer Surface-1 Cards */}
        <div className="mt-5 w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card 4: Asynchronous Communication */}
          <div
            onClick={() => onCardClick?.('Easy Communication')}
            className="bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[20px] p-7 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white mb-6">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[20px] font-medium text-white tracking-[-0.7px]">
                Threaded Async Communication
              </h3>
              <p className="mt-2 text-[14px] text-[#999999] leading-[1.35] tracking-[-0.14px]">
                Built-in revision trails, code snippets, file uploads, and contextual video memos keep your team aligned across timezones.
              </p>
            </div>
          </div>

          {/* Card 5: Real-time Analytics & Transparency */}
          <div
            onClick={() => onCardClick?.('Project Analytics')}
            className="bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[20px] p-7 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[20px] font-medium text-white tracking-[-0.7px]">
                Instant Milestone Tracking
              </h3>
              <p className="mt-2 text-[14px] text-[#999999] leading-[1.35] tracking-[-0.14px]">
                Clear project velocity charts, time logs, and automated invoices generated upon milestone approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
