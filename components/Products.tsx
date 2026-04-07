'use client';

import { content } from '@/lib/content';
import astronaut from '@/public/images/astronaut.svg';

export default function Products() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={astronaut.src}
              alt="Astronaut on SMD Screen"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-outfit font-bold text-[#003088] mb-4 sm:mb-6 leading-tight text-center lg:text-left">
              Best Indoor, Outdoor & Rental
              <br className="hidden sm:block" />
              Screens Options
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-outfit font-normal text-[#7a7f8e] mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
              At Wise Vision, we specialize in delivering premium SMD screen
              solutions that transform indoor and outdoor spaces across Pakistan.
              From high-traffic commercial displays to large-scale outdoor
              billboards, our team ensures every screen is sourced with precision,
              installed flawlessly, and built for outstanding visual performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-16">
              {/* Indoor SMD Screens */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-outfit font-semibold text-[#003088] mb-3 sm:mb-4">INDOOR SMD SCREENS</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#7a7f8e] text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Module Series
                  </li>
                  <li className="flex items-center text-[#7a7f8e] text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium Series
                  </li>
                  <li className="flex items-center text-[#7a7f8e] text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Rental Series
                  </li>
                </ul>
              </div>

              {/* Outdoor SMD Screens */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-outfit font-semibold text-[#003088] mb-3 sm:mb-4">OUTDOOR SMD SCREENS</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#7a7f8e] text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Module Series
                  </li>
                  <li className="flex items-center text-[#7a7f8e] text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium Series
                  </li>
                  <li className="flex items-center text-[#7a7f8e] text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#007bff] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Rental Series
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
