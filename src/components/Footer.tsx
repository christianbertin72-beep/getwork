import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#080808] border-t border-white/[0.04] pt-16 pb-14 px-5 sm:px-8 text-left">
      <div className="max-w-[1199px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/[0.04]">
          {/* Brand Col */}
          <div className="col-span-2">
            <a
              href="/"
              className="text-[17px] font-medium tracking-[-0.6px] text-white inline-block mb-4"
            >
              MINDS
            </a>
            <p className="text-[13.5px] text-[#999999] leading-[1.45] tracking-[-0.13px] max-w-sm">
              The premier marketplace connecting vetted global talent with forward-thinking businesses. Escrow milestones, real-time tracking, seamless delivery.
            </p>

            {/* System Status Pill with Accent Blue Beacon */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-white/[0.08] text-[12px] text-[#999999]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0099ff] shadow-[0_0_6px_#0099ff]" />
              <span className="text-white">All systems normal</span>
              <span className="text-white/20">/</span>
              <span>v2.4.0</span>
            </div>
          </div>

          {/* Col 1: For Clients */}
          <div>
            <h4 className="text-[14px] font-medium text-white tracking-[-0.14px] mb-4">Clients</h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#999999]">
              <li><a href="#talent" className="hover:text-white transition-colors">Find Talent</a></li>
              <li><a href="#talent" className="hover:text-white transition-colors">Post a Project</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Enterprise Squads</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Escrow Security</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Col 2: For Freelancers */}
          <div>
            <h4 className="text-[14px] font-medium text-white tracking-[-0.14px] mb-4">Talent</h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#999999]">
              <li><a href="#work" className="hover:text-white transition-colors">Browse Contracts</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Global Payouts</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Vetting Standards</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Skill Assessments</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-[14px] font-medium text-white tracking-[-0.14px] mb-4">Company</h4>
            <ul className="space-y-2.5 text-[13.5px] text-[#999999]">
              <li><a href="/" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#999999]">
          <p>© {new Date().getFullYear()} MINDS Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="/" className="hover:text-white transition-colors">GitHub</a>
            <a href="/" className="hover:text-white transition-colors">Discord</a>
            <a href="/" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
