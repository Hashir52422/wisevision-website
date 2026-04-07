'use client';

import { content } from '@/lib/content';

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-outfit font-medium text-[#14a4e9]">
            {content.whyChooseUs.title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-2 sm:px-4 md:px-12 lg:px-0 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {content.whyChooseUs.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border-4 sm:border-[6px] border-[#08425d] rounded-2xl sm:rounded-[32px] p-5 sm:p-6 md:p-[34px] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-5 mb-4 sm:mb-5">
                  <div className="bg-[#08425d] rounded-lg p-3 sm:p-4 md:p-5 flex-shrink-0">
                    <img 
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-outfit font-medium text-[#0f141e] mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-[22px] font-outfit font-normal text-[#0f141e] leading-relaxed sm:leading-[28px] md:leading-[32px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
