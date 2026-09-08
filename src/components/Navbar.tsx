import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck, Briefcase, Lock, LogOut } from 'lucide-react';
import { AuthUser } from '../types/job';

interface NavbarProps {
  onOpenAuth?: (mode: 'login' | 'signup') => void;
  onOpenHire?: () => void;
  onOpenPostJob?: () => void;
  onOpenTopTalent?: () => void;
  onOpenDedicatedTeamsTerms?: () => void;
  onOpenAdmin?: () => void;
  currentUser?: AuthUser | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onOpenHire,
  onOpenPostJob,
  onOpenTopTalent,
  onOpenDedicatedTeamsTerms,
  onOpenAdmin,
  currentUser,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      id: 'talent',
      label: 'Find Talent',
      hasDropdown: true,
      items: [
        { title: 'Post a Job', desc: 'Receive vetted proposals within 24 hours' },
        {
          title: 'Top 1% Vetted Talent',
          badge: '1.4% Pass',
          desc: 'Rigorous 5-stage screening, live architecture challenges & 1.4% acceptance rate',
        },
        { title: 'Dedicated Teams & Terms', desc: 'Squad scaling, SLAs, 14-day trial & engagement terms' },
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
                  <div className="w-80 sm:w-[330px] bg-[#141414] border border-white/[0.08] rounded-[15px] p-2 shadow-2xl backdrop-blur-xl">
                    <div className="space-y-1">
                      {item.items?.map((sub, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setActiveDropdown(null);
                            if (sub.title === 'Post a Job') {
                              onOpenPostJob ? onOpenPostJob() : onOpenHire?.();
                            } else if (sub.title.includes('Top 1%')) {
                              onOpenTopTalent ? onOpenTopTalent() : onOpenHire?.();
                            } else if (sub.title.includes('Dedicated Teams')) {
                              onOpenDedicatedTeamsTerms ? onOpenDedicatedTeamsTerms() : onOpenHire?.();
                            } else if (item.id === 'talent') {
                              onOpenHire?.();
                            }
                          }}
                          className="w-full text-left p-2.5 rounded-[10px] hover:bg-white/[0.04] transition-colors group cursor-pointer"
                        >
                          <div className="text-[13.5px] font-medium text-white tracking-[-0.14px] flex items-center justify-between">
                            <span className="flex items-center gap-2">
                              <span>{sub.title}</span>
                              {'badge' in sub && (sub as any).badge && (
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#0099ff]/15 text-[#0099ff] border border-[#0099ff]/30 font-medium">
                                  {(sub as any).badge}
                                </span>
                              )}
                            </span>
                            <ArrowUpRight className="w-3 h-3 text-[#999999] group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <p className="text-[12px] text-[#999999] mt-0.5 leading-[1.35] tracking-[-0.12px]">{sub.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Admin Jobs Portal Link (Guarded) */}
          {currentUser?.isAdmin ? (
            <div className="flex items-center gap-1.5 pl-2.5 pr-1.5 py-1 rounded-full bg-[#0099ff]/10 border border-[#0099ff]/30 text-[12.5px] font-medium text-white">
              <button
                type="button"
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 hover:text-[#0099ff] transition-colors cursor-pointer"
                title="Open Admin Jobs Portal"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-[13px]">Admin Portal</span>
              </button>
              <button
                type="button"
                onClick={onLogout}
                className="p-1 rounded-full hover:bg-white/15 text-[#999999] hover:text-rose-400 transition-colors ml-1 cursor-pointer"
                title="Sign out of Admin"
              >
                <LogOut className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#0099ff]/15 text-[#999999] hover:text-[#0099ff] border border-white/[0.08] hover:border-[#0099ff]/40 text-[13px] font-medium transition-all cursor-pointer group"
              title="Admin Portal (Sign in required)"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400/80 group-hover:text-[#0099ff] transition-colors" />
              <span>Admin</span>
            </button>
          )}

          {/* Post a Job Button */}
          <button
            type="button"
            onClick={onOpenPostJob}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0099ff]/15 hover:bg-[#0099ff]/25 text-[#0099ff] hover:text-white border border-[#0099ff]/35 text-[13px] font-medium transition-all cursor-pointer shadow-[0_0_12px_rgba(0,153,255,0.2)]"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Post a Job</span>
          </button>

          {!currentUser && (
            <>
              <button
                type="button"
                onClick={() => onOpenAuth?.('login')}
                className="button-secondary text-[14px] py-[7px] px-[13px] cursor-pointer"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => onOpenAuth?.('signup')}
                className="button-primary text-[14px] py-[7px] px-[14px] cursor-pointer"
              >
                Get started
              </button>
            </>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenPostJob}
            className="px-2.5 py-1 rounded-full bg-[#0099ff]/15 text-[#0099ff] border border-[#0099ff]/30 text-[12px] font-medium"
          >
            Post Job
          </button>
          <button
            type="button"
            onClick={onOpenAdmin}
            className="p-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#999999]"
            title={currentUser?.isAdmin ? 'Admin Portal (Logged In)' : 'Admin Portal (Login Required)'}
          >
            {currentUser?.isAdmin ? (
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            ) : (
              <Lock className="w-4 h-4 text-amber-400/80" />
            )}
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
                          if (sub.title === 'Post a Job') {
                            onOpenPostJob ? onOpenPostJob() : onOpenHire?.();
                          } else if (sub.title.includes('Top 1%')) {
                            onOpenTopTalent ? onOpenTopTalent() : onOpenHire?.();
                          } else if (sub.title.includes('Dedicated Teams')) {
                            onOpenDedicatedTeamsTerms ? onOpenDedicatedTeamsTerms() : onOpenHire?.();
                          } else if (item.id === 'talent') {
                            onOpenHire?.();
                          }
                        }}
                        className="text-[13px] text-[#999999] hover:text-white py-1 cursor-pointer flex items-center justify-between"
                      >
                        <span>{sub.title}</span>
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
