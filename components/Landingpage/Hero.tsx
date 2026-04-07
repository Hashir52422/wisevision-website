'use client';

import { content } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative bg-white pt-6 sm:pt-8 pb-12 sm:pb-16 md:pb-20 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 z-10 pb-8 lg:pb-40 text-center lg:text-left">
            <h1 className="text-[#007bff] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight mb-4 sm:mb-6">
              {content.hero.title}
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-md max-w-md mx-auto lg:mx-0 font-outfit font-normal leading-relaxed mb-6 sm:mb-8">
              {content.hero.subtitle}
            </p>
            <button className="bg-[#007bff] text-white font-outfit font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
              {content.hero.cta}
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative w-full lg:w-[110%] lg:-mr-[40%]">
              <img 
                src={content.hero.backgroundImage}
                alt="SMD Video Wall Display"
                className="w-full h-auto object-contain object-center lg:object-right"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}