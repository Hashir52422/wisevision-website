'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { content } from '@/lib/content';

export default function Projects() {
  const PROJECTS_PER_PAGE = 2;
  const TOTAL_PAGES = 5;
  const SLIDE_INTERVAL = 4000;

  // Create the full array of 10 projects (5 pages * 2 projects)
  const allProjects = useMemo(() => {
    const base = content.projects.featured;
    return Array(5).fill(base).flat();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const withJpeg = (src: string) => src.replace(/\.(png|jpg|webp)$/i, '.jpeg');

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-outfit font-semibold text-[#00AEEF] mb-2 sm:mb-4">
            {content.projects.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[26px] font-outfit font-normal text-[#7a7f8e]">
            {content.projects.subtitle}
          </p>
        </div>

        {/* Main Slider Window */}
        <div className="relative max-w-7xl mx-auto mb-8 sm:mb-12">
          {/* The "Train" of slides */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {/* Map through pages */}
            {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => (
              <div key={pageIndex} className="flex-shrink-0 w-full flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-10 lg:px-32">
                {/* Each page contains 2 projects */}
                {allProjects.slice(pageIndex * 2, pageIndex * 2 + 2).map((project, i) => (
                  <div key={`${pageIndex}-${i}`} className="w-full sm:w-1/2 group">
                    <div className="relative overflow-hidden rounded-lg mb-4 sm:mb-6 shadow-sm">
                      <img
                        src={withJpeg(project.image)}
                        alt={project.title}
                        loading="eager"
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-outfit font-medium text-[#0f141e] mb-1 sm:mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-outfit font-normal text-[#7a7f8e]">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 sm:gap-4">
          {Array.from({ length: TOTAL_PAGES }).map((_, dot) => (
            <button
              key={dot}
              onClick={() => setCurrentPage(dot)}
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-300 ${
                dot === currentPage
                  ? 'bg-[#14a4e9] border-[#14a4e9]'
                  : 'bg-white border-gray-300'
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}