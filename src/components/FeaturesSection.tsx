import React from 'react';
import { Users, FileText, ShieldCheck, MessageSquare, Plus } from 'lucide-react';

interface FeaturesSectionProps {
  onCardClick?: (featureTitle: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCardClick }) => {
  const features = [
    {
      id: 'talent',
      title: 'Find Top Talent',
      description: 'Access a global pool of verified freelancers across various skills and industries.',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-[#34d77f] flex-none">
          <Users className="w-7 h-7 stroke-[1.8]" />
        </div>
      ),
    },
    {
      id: 'management',
      title: 'Smart Project Management',
      description: 'Collaborate, track progress, and manage tasks all in one seamless workspace.',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-[#34d77f] flex-none relative">
          <div className="w-7 h-7 border-2 border-[#34d77f] rounded-md flex items-center justify-center relative">
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <div className="absolute -bottom-1 -right-1 w-2 h-0.5 bg-[#34d77f]" />
          </div>
        </div>
      ),
    },
    {
      id: 'payments',
      title: 'Secure Payments',
      description: 'Pay safely with escrow protection and multiple secure payment options.',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-[#34d77f] flex-none">
          <ShieldCheck className="w-7 h-7 stroke-[1.8]" />
        </div>
      ),
    },
    {
      id: 'communication',
      title: 'Easy Communication',
      description: 'Chat, share files, and stay updated with real-time notifications.',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-transparent flex items-center justify-center text-[#34d77f] flex-none">
          <MessageSquare className="w-7 h-7 stroke-[1.8]" />
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative w-full py-20 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#060709]">
      {/* Laser lines at bottom left and bottom right corners as in the screenshot */}
      <svg
        className="absolute bottom-0 left-0 w-80 h-64 pointer-events-none opacity-80"
        viewBox="0 0 320 250"
        fill="none"
      >
        <line
          x1="-50"
          y1="250"
          x2="280"
          y2="80"
          stroke="#34d77f"
          strokeWidth="1.6"
          strokeOpacity="0.8"
          className="laser-beam"
        />
        <line
          x1="-80"
          y1="280"
          x2="190"
          y2="140"
          stroke="#22c55e"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-80 h-64 pointer-events-none opacity-80"
        viewBox="0 0 320 250"
        fill="none"
      >
        <line
          x1="370"
          y1="250"
          x2="40"
          y2="80"
          stroke="#34d77f"
          strokeWidth="1.6"
          strokeOpacity="0.8"
          className="laser-beam"
        />
        <line
          x1="400"
          y1="280"
          x2="130"
          y2="140"
          stroke="#22c55e"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#0c2214] border border-[#1b4329] text-[11px] font-bold tracking-wider text-[#34d77f] uppercase mb-5">
          POWERFUL FEATURES
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Everything you need in one platform
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          From finding the right talent to delivering successful projects, MINDS has you covered.
        </p>

        {/* 4 Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full text-left">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => onCardClick?.(feature.title)}
              className="group bg-[#0f1114] border border-white/[0.08] hover:border-[#34d77f]/40 hover:bg-[#14171b] rounded-2xl p-6 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#34d77f]/5 hover:-translate-y-0.5 flex flex-col justify-start"
            >
              <div className="mb-4 text-[#34d77f] group-hover:scale-110 transition-transform origin-left">
                {feature.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-white tracking-tight group-hover:text-[#34d77f] transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
