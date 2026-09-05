import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAuth?: (mode: 'login' | 'signup') => void;
  onOpenHire?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onOpenHire }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      id: 'talent',
      label: 'Find Talent',
      hasDropdown: true,
      items: [
        { title: 'Post a Job', desc: 'Receive vetted proposals within 24 hours' },
        { title: 'Top 1% Vetted Talent', desc: 'Pre-screened senior engineers & designers' },
        { title: 'Dedicated Teams', desc: 'Scale entire engineering and creative squads' },
      ],
    },
    {
      id: 'work',
      label: 'Find Work',
      hasDropdown: true,
      items: [
        { title: 'Browse All Jobs', desc: 'Explore 10,000+ freelance contracts worldwide' },
        { title: 'Full-Stack Development', desc: 'React, Node, Next.js, and cloud positions' },
        { title: 'UI/UX & Product Design', desc: 'Design systems, mobile apps, and branding' },
        { title: 'AI & Machine Learning', desc: 'Prompt engineering, LLMs, and fine-tuning' },
      ],
    },
    { id: 'features', label: 'Features', hasDropdown: false, href: '#features' },
    { id: 'how-it-works', label: 'How it Works', hasDropdown: false, href: '#how-it-works' },
    {
      id: 'resources',
      label: 'Resources',
      hasDropdown: true,
      items: [
        { title: 'Freelancer Guides', desc: 'Contracts, invoicing, and tax benchmarks' },
        { title: 'Client Playbooks', desc: 'How to manage remote asynchronous squads' },
        { title: 'Salary & Rate Index', desc: 'Global hourly & project compensation standards' },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.04]">
      <div className="max-w-[1199px] mx-auto h-14 px-5 sm:px-8 flex items-center justify-between">
        {/* Wordmark (Pure White Ink) */}
        <a
          href="/"
          className="flex items-center text-[17px] font-medium tracking-[-0.6px] text-white hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0099ff]/50 rounded-md"
        >
          <span>MINDS</span>
        </a>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-normal tracking-[-0.15px]" aria-label="Main Navigation">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <button
                  type="button"
                  className="flex items-center gap-1.5 py-1 text-[#999999] hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0099ff]/50 rounded-md"
                  onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                  aria-expanded={activeDropdown === item.id}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#999999] transition-transform duration-150 ${
                      activeDropdown === item.id ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="py-1 text-[#999999] hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0099ff]/50 rounded-md"
                >
                  {item.label}
                </a>
              )}

              {/* Dropdown Menu (Surface-1 lifted card) */}
              {item.hasDropdown && activeDropdown === item.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="w-72 bg-[#141414] border border-white/[0.08] rounded-[15px] p-2 shadow-2xl backdrop-blur-xl">
                    <div className="space-y-1">
                      {item.items?.map((sub, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setActiveDropdown(null);
                            if (item.id === 'talent') onOpenHire?.();
                          }}
                          className="w-full text-left p-2.5 rounded-[10px] hover:bg-white/[0.04] transition-colors group cursor-pointer"
                        >
                          <div className="text-[13.5px] font-medium text-white tracking-[-0.14px] flex items-center justify-between">
                            <span>{sub.title}</span>
                            <ArrowUpRight className="w-3 h-3 text-[#999999] group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[12px] text-[#999999] mt-0.5 leading-[1.3] tracking-[-0.12px]">{sub.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions: Secondary Charcoal Pill + Primary White Pill */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenAuth?.('login')}
            className="button-secondary text-[14px] py-[8px] px-[15px] cursor-pointer"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth?.('signup')}
            className="button-primary text-[14px] py-[8px] px-[15px] cursor-pointer"
          >
            Get started
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => onOpenAuth?.('signup')}
            className="button-primary text-[13px] py-[6px] px-[12px]"
          >
            Get started
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full bg-[#141414] border border-white/[0.08] text-[#999999] hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden p-5 bg-[#141414] border-b border-white/[0.08] space-y-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-white/[0.04] pb-2">
                <div className="font-medium text-[14px] text-white py-1">{item.label}</div>
                {item.items && (
                  <div className="pl-3 space-y-1 mt-1">
                    {item.items.map((sub, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (item.id === 'talent') onOpenHire?.();
                        }}
                        className="text-[13px] text-[#999999] hover:text-white py-1 cursor-pointer"
                      >
                        {sub.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth?.('login');
              }}
              className="button-secondary w-full"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth?.('signup');
              }}
              className="button-primary w-full"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
