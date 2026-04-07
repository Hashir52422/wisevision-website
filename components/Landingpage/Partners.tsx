'use client';

import { useState, useEffect, useCallback } from 'react';
import samsung from '@/public/images/samsung.jpg';
import logos from '@/public/images/partnerlogoslider.jpg';

// ─── Partner data ────────────────────────────────────────────────────────────
const partners = [
  {
    id: 1,
    name: 'Samsung',
    logo: samsung,
    tagline: 'IMMERSIVE 4K\nVIEWING EXPERIENCE',
    badge: 'SAMSUNG UHD TV',
    description:
      'Looking to make a big impact? Our Samsung LED Displays are the perfect solution. Whether you need an eye-catching Indoor LED display board, digital standee/TV, or a massive outdoor advertising LED display, our Samsung A/V solutions cover you. Engage your audience with our Samsung interactive displays for retail and education.',
    heroImage: samsung, // swap with your actual hero image
  },
  // ↓ add more partner objects here when ready
];

// ─── Ticker logos (duplicated for infinite loop) ──────────────────────────────
const tickerLogos = [
  { name: 'SAMSUNG', logo: samsung, type: 'text' },
  { name: 'LianTronics', logo: null, type: 'text' },
  { name: 'NOVASTAR', logo: null, type: 'text' },
  { name: 'LG', logo: null, type: 'text' },
  { name: 'Absen', logo: null, type: 'text' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  }, []);

  // Auto-advance only if there's more than one partner
  useEffect(() => {
    if (partners.length <= 1) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const current = partners[currentIndex];

  return (
    <section className="w-full">
      {/* ── Top header ─────────────────────────────────────────────────────── */}
      <div className="py-8 sm:py-12 md:py-16 bg-white text-center mx-4 sm:mx-6 md:mx-8 my-4 sm:my-6 rounded">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-outfit font-semibold text-[#00AEEF] mb-3 sm:mb-4 px-4">
          Authorized Global Partners
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-outfit text-[#7a7f8e] leading-relaxed px-4">
          We are the official distribution and integration partners for the world's
          <br className="hidden sm:block" />
          leading commercial display manufacturers
        </p>
      </div>

        {/* ── Dark showcase slider ────────────────────────────────────────────── */}
        <div className="relative bg-[#0a1628] overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-stretch">
  {/* Subtle radial glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#00AEEF]/5 blur-[120px]" />
  </div>

  <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch relative z-10">
    
    {/* Left Column — Text Content */}
    <div className="flex flex-col justify-center px-4 sm:px-6 md:pl-8 lg:pl-24 py-8 sm:py-12 md:py-16">
      <h3 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[52px] font-outfit font-bold text-white leading-tight mb-4 sm:mb-6">
        {current.name.toUpperCase()}
      </h3>
      <p className="text-base sm:text-lg md:text-xl lg:text-[22px] font-outfit text-gray-300 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-lg">
        {current.description}
      </p>

      {/* Slide counter + arrows */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={prevSlide}
          className="text-white hover:text-[#00AEEF] transition-colors duration-200 text-lg sm:text-xl"
          aria-label="Previous slide"
        >
          ←
        </button>
        <span className="text-white font-outfit text-base sm:text-[18px] tabular-nums">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <button
          onClick={nextSlide}
          className="text-white hover:text-[#00AEEF] transition-colors duration-200 text-lg sm:text-xl"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>

    {/* Right Column — Full Height & No Gap Image */}
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[600px]">
      <img
        src={typeof current.heroImage === 'object' ? current.heroImage.src : current.heroImage}
        alt={current.name}
        className="w-full h-full object-cover md:object-center drop-shadow-2xl"
      />
    </div>
  </div>
</div>

      {/* ── Infinite ticker ─────────────────────────────────────────────────── */}
      <div className="bg-[#b3e5fc] py-4 sm:py-6 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-[#b3e5fc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-[#b3e5fc] to-transparent z-10 pointer-events-none" />

        {/* Ticker track — image duplicated for seamless loop */}
        <div className="flex animate-ticker whitespace-nowrap">
          <img src={logos.src} alt="Partner logos" className="h-8 sm:h-10 md:h-12 object-contain flex-shrink-0" />
          <img src={logos.src} alt="Partner logos" className="h-8 sm:h-10 md:h-12 object-contain flex-shrink-0" />
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 18s linear infinite;
        }
     
      `}</style>
    </section>
  );
}