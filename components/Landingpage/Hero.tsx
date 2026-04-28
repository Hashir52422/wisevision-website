'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import GetQuote from '@/components/GetQuote';

const heroContent = {
  title: "High-Resolution SMD Video Walls",
  subtitle: "Deliver vivid, high-resolution visuals in any environment — from large-scale outdoor billboards to premium indoor displays. Built for businesses that refuse to be ignored.",
  cta: "Get A Quote",
  backgroundImage: "/images/hero section.svg",
};

interface Slide {
  title: string;
  subtitle: string;
  cta?: string;
  image?: string;
  bgImage?: string;
  titleColor?: string;
  subtitleColor?: string;
  textAlign?: 'left' | 'center';
  showCta?: boolean;
  paddingBottom?: string;
}

const slides: Slide[] = [
  {
    title: heroContent.title,
    subtitle: heroContent.subtitle,
    cta: heroContent.cta,
    image: heroContent.backgroundImage,
    bgImage: "",
    titleColor: "text-[#007bff]",
    subtitleColor: "text-gray-700",
    textAlign: "left",
    showCta: true,
  },
  {
    title: "Powering Business With Samsung Display",
    subtitle: "Explore premium Samsung interactive screens and high-resolution video wall systems, authorized and integrated throughout Pakistan exclusively by WISE VISION.",
    cta: heroContent.cta,
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

// Track = [...slides, slides[0]] — clone of first slide at the end for seamless loop
const total = slides.length + 1;

function SlidePanel({ slide, index, onGetQuoteClick }: { slide: Slide; index: number; onGetQuoteClick: () => void }) {
  const isCenter = slide.textAlign === 'center';
  
  // Determine button color based on slide index
  const getButtonColor = (idx: number) => {
    if (idx === 0) return '#08425D'; // First slide
    if (idx === 1) return '#14A4E9'; // Second slide
    return '#007bff'; // Default for other slides
  };
  
  const buttonColor = getButtonColor(index);
  const hoverColor = index === 0 ? '#063040' : index === 1 ? '#1188cc' : '#0056b3';
  
  return (
    <div
      className="h-full relative flex-shrink-0"
      style={{
        width: `${100 / total}%`,
        ...(slide.bgImage
          ? { backgroundImage: `url(${slide.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : { backgroundColor: '#fff' }),
      }}
    >
      <div className="h-full container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center">
        <div
          className={`z-10 flex flex-col justify-center h-full
            ${isCenter
              ? 'w-full items-center text-center ' + (slide.paddingBottom ?? '')
              : 'w-full lg:w-1/2 lg:pr-12 items-start text-center lg:text-left'}
          `}
        >
          <h1 className={`${slide.titleColor ?? 'text-[#007bff]'} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold leading-tight mb-3 sm:mb-4`}>
            {slide.title}
          </h1>
          <p className={`${slide.subtitleColor ?? 'text-gray-700'} text-xs sm:text-sm md:text-base font-outfit font-normal leading-relaxed mb-4 sm:mb-6 ${isCenter ? 'max-w-xl' : 'max-w-sm'}`}>
            {slide.subtitle}
          </p>
          {slide.showCta && (
            <button 
              className="text-white font-outfit font-semibold py-2 px-5 sm:py-3 sm:px-7 rounded-lg shadow-lg transition duration-300 text-sm"
              style={{ backgroundColor: buttonColor }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonColor}
              onClick={onGetQuoteClick}
            >
              {slide.cta}
            </button>
          )}
        </div>
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
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimated(true);
      setCurrent((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // When we land on the clone (index 3), silently jump back to index 0
  useEffect(() => {
    if (current === slides.length) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
      }, 700); // wait for transition to finish
      return () => clearTimeout(timer);
    }
  }, [current]);

  const dotIndex = current % slides.length;

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px]">
        <div
          className={`flex h-full ${animated ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${current * (100 / total)}%)`,
            width: `${total * 100}%`,
          }}
        >
          {slides.map((slide, i) => <SlidePanel key={i} slide={slide} index={i} onGetQuoteClick={() => setShowModal(true)} />)}
          {/* Clone of first slide */}
          <SlidePanel key="clone" slide={slides[0]} index={0} onGetQuoteClick={() => setShowModal(true)} />
        </div>
      </div>
      {/* Get Quote Modal */}
      {showModal && <GetQuote onClose={closeModal} />}
    </section>
  );
}
