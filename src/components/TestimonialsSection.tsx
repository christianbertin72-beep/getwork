import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: '"MINDS made hiring a freelancer so easy. The quality of work and communication is always top-notch."',
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      quote: '"I\'ve found consistent work and amazing clients through MINDS. It\'s a game-changer for freelancers."',
      name: 'Michael Chen',
      role: 'Full-Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      quote: '"The platform is reliable, payments are secure, and the support team is always helpful."',
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Expert',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      quote: '"We scaled our engineering sprint velocity by 3x within two weeks of using MINDS. Essential tool."',
      name: 'David Kim',
      role: 'Head of Engineering, Veloce',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      quote: '"Escrow milestones give both client and talent complete peace of mind. Highest tier of professionalism."',
      name: 'Elena Rostova',
      role: 'Lead UX Researcher',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1));
  };

  // Visible cards slice (showing 3 on desktop)
  const visibleCards = testimonials.slice(currentIndex, currentIndex + 3).concat(
    testimonials.slice(0, Math.max(0, currentIndex + 3 - testimonials.length))
  );

  return (
    <section className="relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#060709]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#0c2214] border border-[#1b4329] text-[11px] font-bold tracking-wider text-[#34d77f] uppercase mb-4">
          TRUSTED BY THOUSANDS
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
          Loved by clients and freelancers worldwide
        </h2>

        {/* Carousel Container with Left/Right Arrows */}
        <div className="mt-14 w-full relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e1115] border border-white/10 hover:border-[#34d77f]/40 hover:bg-[#15191f] text-neutral-300 hover:text-white items-center justify-center transition-all shadow-xl cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 w-full text-left">
            {visibleCards.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group bg-[#090b0e] border border-white/[0.08] hover:border-[#34d77f]/30 hover:bg-[#0e1216] rounded-2xl p-6 lg:p-7 flex flex-col justify-between transition-all duration-200 shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-300 text-sm sm:text-[14.5px] leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-7 flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{item.name}</h4>
                    <p className="text-xs text-neutral-400 mt-0.5">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0e1115] border border-white/10 hover:border-[#34d77f]/40 hover:bg-[#15191f] text-neutral-300 hover:text-white items-center justify-center transition-all shadow-xl cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3 mt-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="w-9 h-9 rounded-full bg-[#0e1115] border border-white/10 text-neutral-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="w-9 h-9 rounded-full bg-[#0e1115] border border-white/10 text-neutral-300 flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
