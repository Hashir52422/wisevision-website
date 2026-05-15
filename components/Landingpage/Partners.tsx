'use client';

import { useState, useEffect } from 'react';
import samsung from '@/public/images/samsung.jpg';
import logos from '@/public/images/partnerlogoslider.png';

const partners = [
  {
    id: 1,
    name: 'Samsung',
    description:
      'Looking to make a big impact? Our Samsung LED Displays are the perfect solution. Whether you need an eye-catching Indoor LED display board, digital standee/TV, or a massive outdoor advertising LED display, our Samsung A/V solutions cover you. Engage your audience with our Samsung interactive displays for retail and education.',
    heroImage: samsung,
  },
  {
    id: 2,
    name: 'PHILIPS',
    description:
      'Explore our comprehensive range of Philips professional displays, engineered to elevate corporate and guest environments. From cutting-edge interactive touch screens that drive seamless collaboration in boardrooms to premium hospitality displays that redefine the guest experience, WISE VISION supplies and integrates authorized Philips visual infrastructure nationwide.',
    heroImage: '/images/PhilipsPartner.jpeg',
  },
  {
    id: 3,
    name: 'LianTronics',
    description:
      'Explore our advanced range of LianTronics professional LED displays, engineered to transform corporate and high-end retail environments. From seamless, micro-pitch indoor screens that drive impactful visual branding in modern lobbies to highly durable outdoor SMD cabinets designed for maximum visibility, WISE VISION supplies and integrates authorized LianTronics digital infrastructure nationwide.',
    heroImage: '/images/LianTronicsPartner.jpeg',
  },
  {
    id: 4,
    name: 'NOVASTAR',
    description:
      'Explore our advanced range of NovaStar professional LED control systems, engineered to power corporate and high-end retail visual environments. From high-capacity video processors that drive seamless, pixel-perfect resolution on indoor screens to advanced synchronous controllers designed for ultimate operational stability, WISE VISION supplies and integrates authorized NovaStar control infrastructure nationwide.',
    heroImage: '/images/Novastar.jpeg',
  },
];

const total = partners.length + 1;

export default function Partners() {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [displayedIndex, setDisplayedIndex] = useState(0); // delayed counter

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimated(true);
      setCurrent((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Seamless loop reset
  useEffect(() => {
    if (current === partners.length) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [current]);

  const dotIndex = current % partners.length;

  // Delayed counter update
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedIndex(dotIndex);
    }, 300);
    return () => clearTimeout(timeout);
  }, [dotIndex]);

  const goTo = (i: number) => { setAnimated(true); setCurrent(i); };
  const prev = () => goTo(dotIndex === 0 ? partners.length - 1 : dotIndex - 1);
  const next = () => { setAnimated(true); setCurrent((prev) => prev + 1); };

  return (
    <section className="w-full max-w-[1920px] mx-auto">
      {/* Header */}
      <div className="py-6 sm:py-8 bg-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold text-[#00AEEF] mb-2 px-4">
          Authorized Global Partners
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-outfit text-[#7a7f8e] leading-relaxed px-4">
          We are the official distribution and integration partners for the world's leading commercial display manufacturers
        </p>
      </div>

      {/* Slider */}
      <div className="relative bg-[#0a1628] overflow-hidden h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px]">
        {/* Track */}
        <div
          className={`flex h-full ${animated ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${current * (100 / total)}%)`,
            width: `${total * 100}%`,
          }}
        >
          {[...partners, partners[0]].map((partner, i) => {
            const imgSrc = typeof partner.heroImage === 'object' ? partner.heroImage.src : partner.heroImage;
            return (
              <div
                key={i}
                className="h-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 items-stretch relative z-10"
                style={{ width: `${100 / total}%` }}
              >
                {/* Left - Text */}
                <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-bold text-white leading-tight mb-3">
                    {partner.name.toUpperCase()}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base font-outfit text-gray-300 leading-relaxed mb-4 line-clamp-6">
                    {partner.description}
                  </p>
                  {/* Arrows + counter */}
                  <div className="flex items-center gap-3">
                    <button onClick={prev} className="text-white hover:text-[#00AEEF] transition-colors text-2xl" aria-label="Previous">←</button>
                    <span className="text-white font-outfit text-md">
                      {displayedIndex + 1}
                    </span>
                    <button onClick={next} className="text-white hover:text-[#00AEEF] transition-colors text-2xl" aria-label="Next">→</button>
                  </div>
                </div>

                {/* Right - Image */}
                <div className="hidden md:block relative h-full">
                  <img
                    src={imgSrc}
                    alt={partner.name}
                    className="absolute inset-0 w-full h-full object-fill"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ticker */}
      <div className="bg-[#b3e5fc] py-3 sm:py-4 overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#b3e5fc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#b3e5fc] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          <img src={logos.src} alt="Partner logos" className="h-7 sm:h-9 md:h-10 object-contain flex-shrink-0" />
          <img src={logos.src} alt="Partner logos" className="h-7 sm:h-9 md:h-10 object-contain flex-shrink-0" />
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 18s linear infinite; }
      `}</style>
    </section>
  );
}