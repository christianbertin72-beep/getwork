import React, { useState } from 'react';
import { Twitter, Linkedin, Facebook, Instagram, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenHire?: () => void;
  onOpenWork?: () => void;
  onOpenAuth?: (mode: 'login' | 'signup') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHire, onOpenWork, onOpenAuth }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const clientLinks = [
    { label: 'Find Freelancers', action: onOpenHire },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Post a Project', action: onOpenHire },
  ];

  const freelancerLinks = [
    { label: 'Find Work', action: onOpenWork },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Create Profile', action: () => onOpenAuth?.('signup') },
    { label: 'Freelancer Resources', href: '#resources' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Safety Center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Trust & Security', href: '#' },
  ];

  return (
    <footer className="w-full bg-[#050608] border-t border-white/[0.08] pt-16 pb-12 px-6 md:px-12 lg:px-16 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Col 1: Brand & Bio (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-0.5 text-2xl font-black tracking-wider text-white">
                <span>MINDS</span>
                <span className="text-[#34d77f] text-2xl leading-none">.</span>
              </div>
              <p className="mt-4 text-xs sm:text-[13px] text-neutral-400 leading-relaxed max-w-xs">
                The all-in-one platform for hiring freelancers and getting work done efficiently.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-4 text-neutral-400">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 text-xs text-neutral-500">
              © 2024 MINDS. All rights reserved.
            </div>
          </div>

          {/* Col 2: For Clients (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              For Clients
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {clientLinks.map((item, idx) => (
                <li key={idx}>
                  {item.action ? (
                    <button
                      type="button"
                      onClick={item.action}
                      className="hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: For Freelancers (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              For Freelancers
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {freelancerLinks.map((item, idx) => (
                <li key={idx}>
                  {item.action ? (
                    <button
                      type="button"
                      onClick={item.action}
                      className="hover:text-white transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company (1.5 cols) */}
          <div className="lg:col-span-1.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Support (1.5 cols) */}
          <div className="lg:col-span-1.5">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              {supportLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Stay in the loop / Newsletter (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Stay in the loop
            </h4>
            <p className="text-xs text-neutral-400 mb-3.5 leading-relaxed">
              Subscribe to get tips, updates, and exclusive offers.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0c2214] border border-[#34d77f]/40 text-[#34d77f] text-xs font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#111418] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#34d77f]"
                  />
                  <button
                    type="submit"
                    className="bg-[#34d77f] hover:bg-[#2bc471] text-[#051c0f] font-bold text-xs px-3.5 py-2 rounded-lg transition-colors cursor-pointer flex-none whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal Links Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-6 text-xs text-neutral-500">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
