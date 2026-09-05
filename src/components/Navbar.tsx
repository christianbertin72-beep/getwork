import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

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
        { title: 'UI/UX & Product Design', desc: 'Figma systems, mobile apps, and branding' },
        { title: 'AI & Machine Learning', desc: 'Prompt engineering, LLMs, and fine-tuning' },
      ],
    },
    { id: 'features', label: 'Features', hasDropdown: false, href: '#features' },
    { id: 'pricing', label: 'Pricing', hasDropdown: false, href: '#pricing' },
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
    <header className="relative z-50 w-full px-6 md:px-12 lg:px-16 pt-5 pb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-0.5 text-2xl font-black tracking-wider text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d77f] rounded-md px-1 -ml-1 transition-opacity hover:opacity-90"
        >
          <span>MINDS</span>
          <span className="text-[#34d77f] text-2xl leading-none">.</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-neutral-300" aria-label="Main Navigation">
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
                  className="flex items-center gap-1.5 py-1.5 hover:text-white cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d77f] rounded-md"
                  onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                  aria-expanded={activeDropdown === item.id}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                      activeDropdown === item.id ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="py-1.5 hover:text-white cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d77f] rounded-md"
                >
                  {item.label}
                </a>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.id && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#121417] border border-white/10 rounded-xl p-2.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="space-y-1">
                    {item.items?.map((sub, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setActiveDropdown(null);
                          if (item.id === 'talent') onOpenHire?.();
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                      >
                        <div className="text-xs font-semibold text-white group-hover:text-[#34d77f] flex items-center justify-between">
                          <span>{sub.title}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{sub.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => onOpenAuth?.('login')}
            className="text-[13.5px] font-medium text-neutral-200 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d77f] rounded-md px-2 py-1"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth?.('signup')}
            className="bg-[#7ae89d] hover:bg-[#6bd68e] active:scale-95 text-[#082213] font-semibold text-[13.5px] px-4 py-1.5 rounded-lg transition-all shadow-md shadow-[#7ae89d]/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34d77f]"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenAuth?.('signup')}
            className="bg-[#7ae89d] text-[#082213] text-xs font-semibold px-3 py-1.5 rounded-lg"
          >
            Sign up
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 bg-[#111316] border border-white/10 rounded-2xl space-y-4 animate-in fade-in slide-in-from-top-2">
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-white/5 pb-2">
                <div className="font-semibold text-sm text-white py-1">{item.label}</div>
                {item.items && (
                  <div className="pl-3 space-y-1.5 mt-1">
                    {item.items.map((sub, i) => (
                      <div key={i} className="text-xs text-neutral-400 hover:text-[#34d77f] py-1 cursor-pointer">
                        {sub.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth?.('login');
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-white border border-white/15 rounded-xl"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth?.('signup');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold bg-[#7ae89d] text-[#082213] rounded-xl"
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
