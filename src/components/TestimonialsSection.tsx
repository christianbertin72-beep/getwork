import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { MaskedHeading } from './MaskedHeading';

interface TestimonialsSectionProps {
  currentTime?: number;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentTime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Timeline triggers:
  // 26-31s: Continue through landing page -> Testimonials section
  // 26.6s+: Eyebrow & headline reveal
  // 27.5s+: Cards rise into view with 100ms stagger
  const isEyebrowRevealed = currentTime !== undefined ? currentTime >= 26.4 : isInView;
  const isHeadingRevealed = currentTime !== undefined ? currentTime >= 26.8 : isInView;
  const isCardsRevealed = currentTime !== undefined ? currentTime >= 27.4 : isInView;

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Head of Engineering at Aurora',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      content: 'We staffed our entire React Native mobile team via MINDS within five days. The caliber of candidates was uniformly exceptional, and the escrow milestone workflow made billing utterly painless.',
      rating: 5,
      tag: 'Engineering Scale',
    },
    {
      id: 2,
      name: 'Marcus Vance',
      role: 'Founder & CEO, Hyperdrive',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      content: 'As an early-stage founder, finding dependable senior designers used to take months. On MINDS, our brand identity and Design System were finalized ahead of schedule with zero friction.',
      rating: 5,
      tag: 'Design Systems',
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Principal AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80',
      content: 'MINDS connects me with high-impact machine learning projects globally while guaranteeing timely payouts. The asynchronous collaboration interface is the best in the industry.',
      rating: 5,
      tag: 'Machine Learning',
    },
  ];

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-5 sm:px-8 bg-[#080808] border-t border-white/[0.04]"
    >
      <div className="max-w-[1199px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="text-left">
            {/* Charcoal Pill Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/[0.08] text-[13px] font-medium text-[#999999] mb-6 transition-all duration-700"
              style={{
                opacity: isEyebrowRevealed ? 1 : 0,
                transform: isEyebrowRevealed ? 'translateY(0)' : 'translateY(12px)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-white">Client stories</span>
            </div>

            {/* Masked Heading Line-by-Line Reveal */}
            <MaskedHeading
              tag="h2"
              lines={[
                'Proven by the teams that',
                'build the future.',
              ]}
              isRevealed={isHeadingRevealed}
              delayPerLineMs={160}
              startDelayMs={0}
              className="text-white text-[36px] sm:text-[52px] lg:text-[60px] font-medium leading-[0.96] tracking-[-2.5px] sm:tracking-[-3.1px] max-w-xl"
            />
          </div>

          {/* Circular Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="button-icon-circular cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="button-icon-circular cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid on Framer Surface-1 with Staggered Slide & Scale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {testimonials.map((t, idx) => {
            const isFeatured = idx === currentIndex;
            const cardDelay = idx * 110;
            return (
              <div
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`rounded-[20px] p-7 sm:p-8 transition-all duration-700 cursor-pointer flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-[#1e1e1e] border border-white/[0.16] shadow-xl'
                    : 'bg-[#141414] border border-white/[0.08] hover:border-white/20'
                }`}
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
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[12px] font-medium text-[#999999] px-2.5 py-0.5 rounded-full bg-white/[0.04]">
                      {t.tag}
                    </span>
                  </div>

                  <p className="text-white text-[15px] sm:text-[16px] leading-[1.4] tracking-[-0.15px]">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-[14px] font-medium text-white tracking-[-0.14px]">{t.name}</div>
                    <div className="text-[12px] text-[#999999] tracking-[-0.12px] mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
