'use client';

import { content } from '@/lib/content';
import arrowDown from '@/public/images/arrow-down.svg';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// ── Products dropdown data ────────────────────────────────────────────────────
const productCategories = {
  left: [
    {
      label: 'SMD SCREENS INDOOR',
      hasDropdown: true,
      items: ['Module Series', 'Premium Series', 'Rental Series'],
    },
    {
      label: 'SMD SCREENS OUTDOOR',
      hasDropdown: true,
      items: ['Module Series', 'Premium Series', 'Rental Series'],
    },
    {
      label: 'COB LED DISPLAY',
      hasDropdown: false,
      items: [],
    },
    {
      label: 'DIGITAL STANDEE',
      hasDropdown: true,
      items: ['SMD Digital Standee', 'Samsung Touch Digital Standee', 'Samsung Non-Touch Digital Standee'],
    },
  ],
  right: [
    { label: 'Digital Podium', href: '#' },
    { label: 'SAMSUNG DISPLAYS', href: '#' },
    { label: 'PHILIPS DISPLAYS', href: '#' },
  ],
};

// ── Sub-section with hoverable items ───────────────────────────────────────
function ProductSection({ label, hasDropdown, items, router }: { label: string; hasDropdown: boolean; items: string[]; router?: any }) {
  // Changed to false so they are hidden initially
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (label === 'SMD SCREENS OUTDOOR') {
      router?.push('/outdoorscreens');
    }
  };

  return (
    <div 
      className="group/section"
      onMouseEnter={() => hasDropdown && setIsHovered(true)}
      onMouseLeave={() => hasDropdown && setIsHovered(false)}
    >
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 w-full text-left mb-2 transition-colors duration-150 ${
          hasDropdown ? 'cursor-pointer' : 'cursor-default'
        } ${isHovered ? 'text-[#007bff]' : 'text-[#1a1a1a]'}`}
      >
        <span className="font-outfit font-bold text-[15px] tracking-wide uppercase">
          {label}
        </span>
        {hasDropdown && (
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${isHovered ? 'rotate-180 text-[#007bff]' : 'text-[#1a1a1a]'}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
      
      <div className={`border-b border-gray-200 mb-3 transition-colors ${isHovered ? 'border-[#007bff]/30' : ''}`} />
      
      {/* Animated Dropdown Logic for Sub-items */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isHovered && items.length > 0 ? 'max-h-40 opacity-100 mb-2' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-2 pl-1">
          {items.map((item) => (
            <li key={item}>
              <a href="#" className="font-outfit text-[14px] text-[#888] hover:text-[#007bff] transition-colors duration-150 block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Main Header ───────────────────────────────────────────────────────────────
export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-[#14a4e9] h-12 sm:h-14 md:h-16 overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-[22px] font-outfit font-normal text-center px-2">
            {content.header.topBar}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#05293a] min-h-[70px] md:min-h-[90px] lg:h-[116px]">
        <div className="container mx-auto px-4 h-full flex items-center justify-between py-4 lg:py-0">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative h-[40px] w-[72px] sm:h-[50px] sm:w-[90px] lg:h-[59.896px] lg:w-[107.813px]">
              <img
                src={content.header.logo.src}
                alt={content.header.logo.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white text-base sm:text-lg lg:text-[24px] font-outfit font-semibold leading-tight uppercase">Wise</span>
              <span className="text-white text-base sm:text-lg lg:text-[24px] font-outfit font-semibold leading-tight uppercase">Vision</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-9 h-full">
            {content.header.navigation.links.map((link) => {
              const isProducts = link.hasDropdown && link.name === 'Products';
              
              return (
                <div 
                  key={link.name} 
                  className="relative h-full flex items-center"
                  ref={isProducts ? dropdownRef : undefined}
                  onMouseEnter={() => isProducts && setProductsOpen(true)}
                  onMouseLeave={() => isProducts && setProductsOpen(false)}
                >
                  <button
                    className={`flex items-center gap-2 text-lg xl:text-[24px] font-outfit whitespace-nowrap transition-all duration-200 ${
                      link.active || (isProducts && productsOpen) ? 'font-semibold text-white' : 'font-normal text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <div className={`flex items-center justify-center w-[14px] h-[8.031px] transition-transform duration-300 ${isProducts && productsOpen ? 'rotate-180' : ''}`}>
                        <img src={arrowDown.src} alt="dropdown arrow" className="w-full h-full" />
                      </div>
                    )}
                  </button>

                  {/* Main Dropdown Panel */}
                  {isProducts && (
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-[650px] transition-all duration-300 ease-out ${
                        productsOpen 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-4'
                      }`}
                    >
                      {/* Invisible bridge */}
                      <div className="h-4 w-full" />
                      
                      <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-8 z-50 relative">
                        <div className="absolute top-0 left-0 right-0 h-1  rounded-t-xl" />

                        <div className="grid grid-cols-2 gap-x-12 pt-2">
                          {/* Left Column (Categories with Hover Sub-menus) */}
                          <div className="flex flex-col gap-6">
                            {productCategories.left.map((cat) => (
                              <ProductSection key={cat.label} {...cat} router={router} />
                            ))}
                          </div>

                          {/* Right Column (Single Links) */}
                          <div className="flex flex-col gap-0">
                            {productCategories.right.map((item) => (
                              <div key={item.label}>
                                <a
                                  href={item.href}
                                  className="flex items-center justify-between py-4 font-outfit font-bold text-[15px] text-[#1a1a1a] hover:text-[#007bff] transition-colors duration-150 group"
                                >
                                  <span className="uppercase">{item.label}</span>
                                  <svg className="w-4 h-4 text-[#1a1a1a] group-hover:text-[#007bff] transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                  </svg>
                                </a>
                                <div className="border-b border-gray-200" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Sidebar/Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#05293a] border-t border-[#14a4e9]/30">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {content.header.navigation.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-outfit py-2 ${
                    link.active ? 'font-semibold text-white' : 'font-normal text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}