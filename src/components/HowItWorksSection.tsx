import React, { useEffect, useRef, useState } from 'react';
import { FileText, Users, TrendingUp, CreditCard, ArrowRight } from 'lucide-react';
import { MaskedWords } from './MaskedHeading';

interface HowItWorksSectionProps {
  onStepClick?: (stepNumber: number) => void;
  currentTime?: number;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStepClick, currentTime }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (currentTime !== undefined) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [currentTime]);

  // Exact timeline triggers (22–26s: Large Typography Moment):
  // 22.0s: Scroll centers on headline
  // 22.4s: Eyebrow emerges
  // 22.8s: Masked word-by-word emergence begins ("Four", "steps", "from", "brief", "to", "launch.")
  // 24.2s: Subtitle reveals
  // 24.6s+: Step cards stagger into view (100ms apart)
  // 25.5s-26.2s: Held briefly once fully revealed
  const isEyebrowRevealed = currentTime !== undefined ? currentTime >= 22.2 : isInView;
  const isHeadlineRevealed = currentTime !== undefined ? currentTime >= 22.6 : isInView;
  const isSubRevealed = currentTime !== undefined ? currentTime >= 23.8 : isInView;
  const isCardsRevealed = currentTime !== undefined ? currentTime >= 24.2 : isInView;

  const steps = [
    {
      step: 1,
      num: '01',
      title: 'Post a Project',
      description: 'Define your scope, budget, and timeline. Receive tailored proposals within 24 hours.',
      icon: <FileText className="w-5 h-5 text-white" />,
    },
    {
      step: 2,
      num: '02',
      title: 'Select Talent',
      description: 'Review proven portfolios, verified client ratings, and conduct concise technical interviews.',
      icon: <Users className="w-5 h-5 text-white" />,
    },
    {
      step: 3,
      num: '03',
      title: 'Collaborate & Track',
      description: 'Manage sprints, inspect deliverables in real time, and communicate asynchronously.',
      icon: <TrendingUp className="w-5 h-5 text-white" />,
    },
    {
      step: 4,
      num: '04',
      title: 'Approve & Release',
      description: 'Verify finished milestones with complete confidence before releasing escrow payments.',
      icon: <CreditCard className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-5 sm:px-8 bg-[#080808] border-t border-white/[0.04]"
    >
      <div className="max-w-[1199px] mx-auto flex flex-col items-start text-left">
        {/* Eyebrow Pill */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/[0.08] text-[13px] font-medium text-[#999999] mb-6 transition-all duration-700"
          style={{
            opacity: isEyebrowRevealed ? 1 : 0,
            transform: isEyebrowRevealed ? 'translateY(0)' : 'translateY(12px)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white">The workflow</span>
        </div>

        {/* LARGE TYPOGRAPHY MOMENT: Word-by-Word Masked Upward Reveal */}
        <div className="max-w-3xl">
          <MaskedWords
            tag="h2"
            text="Four steps from brief to launch."
            isRevealed={isHeadlineRevealed}
            delayPerWordMs={110}
            startDelayMs={0}
            className="text-white text-[38px] sm:text-[56px] lg:text-[68px] font-medium leading-[0.94] tracking-[-2.8px] sm:tracking-[-3.8px]"
          />
        </div>

        {/* Subtitle */}
        <p
          className="mt-5 text-[#999999] text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.15px] max-w-xl transition-all duration-800"
          style={{
            opacity: isSubRevealed ? 1 : 0,
            transform: isSubRevealed ? 'translateY(0)' : 'translateY(16px)',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          A transparent, predictable process designed for remote founders and high-output teams.
        </p>

        {/* 4 Steps Grid on Framer Surface-1 (Staggered 100ms apart, 97% -> 100% scale, +24px -> 0px rise) */}
        <div className="mt-14 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => {
            const cardDelay = idx * 100;
            return (
              <div
                key={item.step}
                onClick={() => onStepClick?.(item.step)}
                className="bg-[#141414] border border-white/[0.08] hover:border-[#0099ff] hover:bg-[#0099ff]/10 hover:shadow-[0_0_24px_rgba(0,153,255,0.25)] rounded-[20px] p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between group h-full"
                style={{
                  opacity: isCardsRevealed ? 1 : 0,
                  transform: isCardsRevealed
                    ? 'translateY(0px) scale(1)'
                    : 'translateY(26px) scale(0.97)',
                  transitionDelay: `${cardDelay}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform, opacity',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 group-hover:bg-[#0099ff]/20 group-hover:border-[#0099ff]/50 group-hover:text-[#0099ff] flex items-center justify-center text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[13px] font-mono text-[#999999] group-hover:text-[#66bfff] tracking-tight transition-colors">{item.num}</span>
                  </div>

                  <h3 className="text-[18px] font-medium text-white tracking-[-0.6px] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] text-[#999999] group-hover:text-blue-100/80 leading-[1.35] tracking-[-0.14px] transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[13px] font-medium text-white group-hover:text-[#0099ff] transition-colors">
                  <span>View details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
