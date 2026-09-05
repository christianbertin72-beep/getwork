import React from 'react';
import { FileText, Users, TrendingUp, CreditCard, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onStepClick?: (stepNumber: number) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStepClick }) => {
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
    <section id="how-it-works" className="relative w-full py-24 md:py-32 px-5 sm:px-8 bg-[#080808] border-t border-white/[0.04]">
      <div className="max-w-[1199px] mx-auto flex flex-col items-start text-left">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/[0.08] text-[13px] font-medium text-[#999999] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-white">The workflow</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-white text-[36px] sm:text-[52px] lg:text-[60px] font-medium leading-[0.96] tracking-[-2.5px] sm:tracking-[-3.1px] max-w-2xl">
          Four steps from brief to launch.
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-[#999999] text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.15px] max-w-xl">
          A transparent, predictable process designed for remote founders and high-output teams.
        </p>

        {/* 4 Steps Grid on Framer Surface-1 */}
        <div className="mt-14 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item) => (
            <div
              key={item.step}
              onClick={() => onStepClick?.(item.step)}
              className="bg-[#141414] border border-white/[0.08] hover:border-white/20 hover:bg-[#1e1e1e] rounded-[20px] p-7 transition-all cursor-pointer flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-[13px] font-mono text-[#999999] tracking-tight">{item.num}</span>
                </div>

                <h3 className="text-[18px] font-medium text-white tracking-[-0.6px] group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] text-[#999999] leading-[1.35] tracking-[-0.14px]">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[13px] font-medium text-white group-hover:text-[#0099ff] transition-colors">
                <span>View details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
