'use client';

import astronaut from '@/public/images/astro.png';

export default function Products() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={astronaut.src}
              alt="Astronaut on SMD Screen"
              className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[460px] h-auto"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-bold text-[#003088] mb-3 sm:mb-4 leading-tight text-center lg:text-left">
              Best Indoor, Outdoor & Rental
              <br className="hidden sm:block" />
              Screens Options
            </h2>
            <p className="text-xs sm:text-sm lg:text-base font-outfit font-normal text-[#7a7f8e] mb-4 sm:mb-6 leading-relaxed text-center lg:text-left">
              At Wise Vision, we specialize in delivering premium SMD screen
              solutions that transform indoor and outdoor spaces across Pakistan.
              From high-traffic commercial displays to large-scale outdoor
              billboards, our team ensures every screen is sourced with precision,
              installed flawlessly, and built for outstanding visual performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12">
              {/* Indoor SMD Screens */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-outfit font-semibold text-[#003088] mb-2 sm:mb-3">INDOOR SMD SCREENS</h3>
                <ul className="space-y-1.5">
                  {['Module Series', 'Premium Series', 'Rental Series'].map((item) => (
                    <li key={item} className="flex items-center text-[#7a7f8e] text-xs sm:text-sm">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outdoor SMD Screens */}
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-outfit font-semibold text-[#003088] mb-2 sm:mb-3">OUTDOOR SMD SCREENS</h3>
                <ul className="space-y-1.5">
                  {['Module Series', 'Premium Series', 'Rental Series'].map((item) => (
                    <li key={item} className="flex items-center text-[#7a7f8e] text-xs sm:text-sm">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
