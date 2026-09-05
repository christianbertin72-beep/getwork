import React from 'react';

export const CompaniesStrip: React.FC = () => {
  return (
    <section className="w-full border-t border-b border-white/[0.07] bg-[#060709]/60 backdrop-blur-sm py-6 md:py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        {/* Label */}
        <span className="text-xs md:text-[13.5px] font-medium text-neutral-400 text-center lg:text-left whitespace-nowrap">
          Trusted by forward-thinking companies
        </span>

        {/* Logos Grid */}
        <div className="flex items-center justify-center flex-wrap gap-8 sm:gap-12 md:gap-14 lg:gap-16 text-neutral-300 opacity-80">
          {/* Airbnb */}
          <div className="flex items-center gap-2 hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-4.2 0-7.3 3.5-7.3 7.8 0 3.7 2.1 7.2 4.4 10.3 1.1 1.5 2.1 2.9 2.9 4.3.8-1.4 1.8-2.8 2.9-4.3 2.3-3.1 4.4-6.6 4.4-10.3 0-4.3-3.1-7.8-7.3-7.8zm0 18.5c-1.6-2.5-3.3-5-4.4-7.4-.9-1.9-1.3-3.7-1.3-5.2 0-3.1 2.3-5.7 5.7-5.7s5.7 2.6 5.7 5.7c0 1.5-.4 3.3-1.3 5.2-1.1 2.4-2.8 4.9-4.4 7.4zm0-9.8c-1.3 0-2.3-1-2.3-2.3 0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3c0 1.3-1 2.3-2.3 2.3z" />
            </svg>
            <span className="font-bold text-lg sm:text-xl tracking-tight">airbnb</span>
          </div>

          {/* Google */}
          <div className="flex items-center gap-1.5 hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
            <span className="font-semibold text-lg sm:text-xl tracking-tight font-sans">Google</span>
          </div>

          {/* Microsoft */}
          <div className="flex items-center gap-2 hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-current rounded-[0.5px]" />
              <div className="bg-current rounded-[0.5px]" />
              <div className="bg-current rounded-[0.5px]" />
              <div className="bg-current rounded-[0.5px]" />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight">Microsoft</span>
          </div>

          {/* Stripe */}
          <div className="flex items-center hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
            <span className="font-bold text-lg sm:text-xl tracking-tight lowercase">stripe</span>
          </div>

          {/* Shopify */}
          <div className="flex items-center gap-1.5 hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19.4 6.8c-.1-.3-.3-.4-.5-.4h-2.7c-.1-.7-.3-1.4-.7-2.1-.7-1.3-1.8-2.1-3.2-2.3-1.4-.2-2.7.4-3.5 1.7-.5.8-.8 1.8-.8 2.7H5.3c-.3 0-.5.2-.6.4L1.1 21.6c-.1.3 0 .6.2.8.2.2.4.3.7.3h18c.3 0 .5-.1.7-.3.2-.2.3-.5.2-.8L19.4 6.8zm-7.9-3.2c.8.1 1.4.6 1.8 1.3.3.5.4 1.1.5 1.6H9.8c0-.6.2-1.2.4-1.6.5-.8 1.2-1.3 1.3-1.3z" />
            </svg>
            <span className="font-bold text-base sm:text-lg tracking-tight">shopify</span>
          </div>

          {/* Slack */}
          <div className="flex items-center gap-2 hover:opacity-100 hover:text-white transition-opacity cursor-pointer">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
            </svg>
            <span className="font-bold text-base sm:text-lg tracking-tight">slack</span>
          </div>
        </div>
      </div>
    </section>
  );
};
