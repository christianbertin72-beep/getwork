import React from 'react';
import { FileText, Users, TrendingUp, CreditCard, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onStepClick?: (stepNumber: number) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onStepClick }) => {
  const steps = [
    {
      step: 1,
      title: '1. Post a Project',
      description: 'Share your project details and requirements in minutes.',
      icon: <FileText className="w-5 h-5 text-[#34d77f]" />,
    },
    {
      step: 2,
      title: '2. Choose a Freelancer',
      description: 'Review proposals and hire the best freelancer for your needs.',
      icon: <Users className="w-5 h-5 text-[#34d77f]" />,
    },
    {
      step: 3,
      title: '3. Collaborate & Track',
      description: 'Work together, track progress, and communicate in real time.',
      icon: <TrendingUp className="w-5 h-5 text-[#34d77f]" />,
    },
    {
      step: 4,
      title: '4. Approve & Pay',
      description: 'Approve the work and release payment securely.',
      icon: <CreditCard className="w-5 h-5 text-[#34d77f]" />,
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#060709]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#0c2214] border border-[#1b4329] text-[11px] font-bold tracking-wider text-[#34d77f] uppercase mb-4">
          HOW IT WORKS
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
          Get your project done in 4 simple steps
        </h2>

        {/* 4 Steps Horizontal Flow */}
        <div className="mt-14 w-full relative">
          {/* Connecting Dotted Line across cards on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-12 right-12 h-[2px] pointer-events-none z-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(52, 215, 127, 0.4) 1px, transparent 1px)',
              backgroundSize: '12px 2px',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10 text-left">
            {steps.map((item, index) => (
              <div
                key={item.step}
                onClick={() => onStepClick?.(item.step)}
                className="group relative bg-[#090b0e] border border-white/[0.08] hover:border-[#34d77f]/40 hover:bg-[#0e1217] rounded-2xl p-5 md:p-6 transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-1 flex items-start gap-4"
              >
                {/* Glowing Green Circled Icon */}
                <div className="relative flex-none">
                  <div className="w-12 h-12 rounded-full border border-[#34d77f]/40 bg-[#0c2214] flex items-center justify-center shadow-[0_0_15px_rgba(52,215,127,0.15)] group-hover:border-[#34d77f] group-hover:shadow-[0_0_20px_rgba(52,215,127,0.3)] transition-all">
                    {item.icon}
                  </div>
                  {/* Step indicator node */}
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#34d77f] text-[#060709] text-[9px] font-black flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#34d77f] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
