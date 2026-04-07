'use client';

import { content } from '@/lib/content';
import arrowDown from '@/public/images/arrow-down.svg';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
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
              <span className="text-white text-base sm:text-lg lg:text-[24px] font-outfit font-semibold leading-tight">WISE</span>
              <span className="text-white text-base sm:text-lg lg:text-[24px] font-outfit font-semibold leading-tight">VISION</span>
            </div>
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

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-9">
            {content.header.navigation.links.map((link) => (
              <div key={link.name} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className={`text-lg xl:text-[24px] font-outfit whitespace-nowrap ${
                    link.active 
                      ? 'font-semibold text-white' 
                      : 'font-normal text-white'
                  }`}
                >
                  {link.name}
                </a>
                {link.hasDropdown && (
                  <div className="flex items-center justify-center w-[14px] h-[8.031px]">
                    <img 
                      src={arrowDown.src} 
                      alt="dropdown arrow" 
                      className="w-full h-full" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#05293a] border-t border-[#14a4e9]/30">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {content.header.navigation.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-outfit py-2 ${
                    link.active 
                      ? 'font-semibold text-white' 
                      : 'font-normal text-white'
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
