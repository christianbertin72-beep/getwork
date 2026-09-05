import React from 'react';

export const CompaniesStrip: React.FC = () => {
  return (
    <section className="w-full border-t border-b border-white/[0.04] bg-[#080808] py-8 px-5 sm:px-8">
      <div className="max-w-[1199px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        {/* Label */}
        <span className="text-[13px] font-normal text-[#999999] tracking-[-0.13px] text-center md:text-left whitespace-nowrap">
          Trusted by high-growth startups and global teams
        </span>

        {/* Monochrome Logos Grid */}
        <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-12 text-[#999999]">
          {/* Airbnb */}
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-4.2 0-7.3 3.5-7.3 7.8 0 3.7 2.1 7.2 4.4 10.3 1.1 1.5 2.1 2.9 2.9 4.3.8-1.4 1.8-2.8 2.9-4.3 2.3-3.1 4.4-6.6 4.4-10.3 0-4.3-3.1-7.8-7.3-7.8zm0 18.5c-1.6-2.5-3.3-5-4.4-7.4-.9-1.9-1.3-3.7-1.3-5.2 0-3.1 2.3-5.7 5.7-5.7s5.7 2.6 5.7 5.7c0 1.5-.4 3.3-1.3 5.2-1.1 2.4-2.8 4.9-4.4 7.4zm0-9.8c-1.3 0-2.3-1-2.3-2.3 0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3c0 1.3-1 2.3-2.3 2.3z" />
            </svg>
            <span className="font-medium text-[16px] tracking-[-0.4px]">airbnb</span>
          </div>

          {/* Google */}
          <div className="flex items-center hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
            <span className="font-medium text-[16px] tracking-[-0.3px]">Google</span>
          </div>

          {/* Microsoft */}
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
              <div className="bg-current rounded-[0.5px]" />
              <div className="bg-current rounded-[0.5px]" />
              <div className="bg-current rounded-[0.5px]" />
              <div className="bg-current rounded-[0.5px]" />
            </div>
            <span className="font-medium text-[15px] tracking-[-0.3px]">Microsoft</span>
          </div>

          {/* Stripe */}
          <div className="flex items-center hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
            <span className="font-semibold text-[17px] tracking-[-0.4px] lowercase">stripe</span>
          </div>

          {/* Shopify */}
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
            <span className="font-medium text-[16px] tracking-[-0.4px]">shopify</span>
          </div>

          {/* Slack */}
          <div className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer opacity-70 hover:opacity-100">
            <span className="font-medium text-[16px] tracking-[-0.4px]">slack</span>
          </div>
        </div>
      </div>
    </section>
  );
};
