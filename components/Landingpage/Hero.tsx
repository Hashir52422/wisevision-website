'use client';

import { useState, useEffect } from 'react';
import { content } from '@/lib/content';

interface Slide {
  title: string;
  subtitle: string;
  cta?: string;
  image?: string;
  bgImage?: string;
  titleColor?: string;       // e.g. "text-[#007bff]" or "text-white"
  subtitleColor?: string;    // e.g. "text-gray-700" or "text-white/90"
  textAlign?: 'left' | 'center';
  showCta?: boolean;
  paddingBottom?: string;    // e.g. "pb-20"
}

const slides: Slide[] = [
  {
    title: content.hero.title,
    subtitle: content.hero.subtitle,
    cta: content.hero.cta,
    image: content.hero.backgroundImage,
    bgImage: "",
    titleColor: "text-[#007bff]",
    subtitleColor: "text-gray-700",
    textAlign: "left",
    showCta: true,
  },
  {
    title: "Powering Business With Samsung Display",
    subtitle: "Explore premium Samsung interactive screens and high-resolution video wall systems, authorized and integrated throughout Pakistan exclusively by WISE VISION.",
    cta: content.hero.cta,
    image: "",
    bgImage: "/images/HeroBanner2.jpeg",
    titleColor: "text-white",
    subtitleColor: "text-white/90",
    textAlign: "left",
    showCta: true,
  },
  {
    title: "Pakistan's Trusted Display Network",
    subtitle: "Delivering comprehensive visual hardware nationwide. We supply and integrate rugged outdoor SMDs, seamless indoor video walls, and interactive digital standees.",
    image: "",
    bgImage: "/images/herobanner3.jpg.jpeg",
    titleColor: "text-white",
    subtitleColor: "text-white/80",
    textAlign: "center",
    showCta: false,
    paddingBottom: "pb-70",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];
  const isCenter = slide.textAlign === 'center';

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Fixed-height container so all slides are the same size */}
      <div className="h-[420px] sm:h-[500px] md:h-[560px] lg:h-[640px]">
        <div
          className="h-full relative transition-opacity duration-500"
          style={{
            opacity: visible ? 1 : 0,
            ...(slide.bgImage
              ? { backgroundImage: `url(${slide.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : {}),
          }}
        >
        <div className="h-full container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div
            className={`z-10 flex flex-col justify-center h-full
              ${isCenter ? 'w-full items-center text-center ' + (slide.paddingBottom ?? '') : 'w-full lg:w-1/2 lg:pr-12 items-start text-center lg:text-left'}
            `}
          >
            <h1 className={`${slide.titleColor ?? 'text-[#007bff]'} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight mb-4 sm:mb-6`}>
              {slide.title}
            </h1>
            <p className={`${slide.subtitleColor ?? 'text-gray-700'} text-sm sm:text-base md:text-md font-outfit font-normal leading-relaxed mb-6 sm:mb-8 ${isCenter ? 'max-w-2xl' : 'max-w-md'}`}>
              {slide.subtitle}
            </p>
            {slide.showCta && (
              <button className="bg-[#007bff] text-white font-outfit font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
                {slide.cta}
              </button>
            )}
          </div>

          {/* Right Image (only for slides with a side image) */}
          {!isCenter && slide.image && (
            <div className="hidden lg:flex w-1/2 h-full items-center justify-end">
              <img
                src={slide.image}
                alt="SMD Video Wall Display"
                className="w-[110%] h-full object-contain object-right -mr-[10%]"
              />
            </div>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
