'use client';

import { content } from '@/lib/content';
import Link from 'next/link';
import logo from '@/public/images/Logo.svg';
import Image from 'next/image';

export default function Footer() {
  const links = [
    { name: 'Home',         href: '/' },
    { name: 'Affiliations', href: '/affiliations' },
    { name: 'Products',     href: '/products' },
    { name: 'About Us',     href: '/about' },
    { name: 'Applications', href: '/applications' },
    { name: 'Contact Us',   href: '/contact' },
    { name: 'Blog',         href: '/blog' },
    { name: 'Projects',     href: '/projects' },
  ];

  return (
    <div>
      {/* ── Main Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#0a1628] relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">

            {/* ── Col 1: Logo + Description ──────────────────────────────────── */}
            <div className="lg:col-span-1">
              {/* Relative parent container */}
              <div className="relative flex items-center mb-4 sm:mb-6 py-2">
                
                {/* 1. Background Logo (Watermark) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 z-0 pointer-events-none">
                  <Image 
                    src={logo} 
                    alt="Wise Vision Background Logo" 
                    fill
                    className="object-contain"
                  />
                </div>

                {/* 2. Foreground Text */}
                <div className="relative flex flex-col leading-none pl-12 sm:pl-14 md:pl-16 ml-2">
                  <span className="text-white font-outfit font-bold text-sm sm:text-base md:text-md tracking-wide">WISE</span>
                  <span className="text-white font-outfit font-bold text-sm sm:text-base md:text-md tracking-wide">VISION</span>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-[13px] font-outfit leading-relaxed">
                {content.footer.description}
              </p>
            </div>

            {/* ── Col 2: Links ───────────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-base sm:text-lg md:text-[18px] font-outfit font-bold mb-4 sm:mb-6">
                Links
              </h4>
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 text-xs sm:text-sm md:text-[14px] font-outfit hover:text-[#00AEEF] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Col 3: Contact Us ───────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-base sm:text-lg md:text-[18px] font-outfit font-bold mb-4 sm:mb-6">
                Contact Us
              </h4>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <li>
                  <a 
                    href="tel:+923010572356"
                    className="text-gray-300 text-xs sm:text-sm md:text-[14px] font-outfit hover:text-[#00AEEF] transition-colors duration-200"
                  >
                    +92 301 0572356
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:wisevision@gmail.com"
                    className="text-gray-300 text-xs sm:text-sm md:text-[14px] font-outfit hover:text-[#00AEEF] transition-colors duration-200"
                  >
                    wisevision@gmail.com
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0077B5] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                  aria-label="LinkedIn"
                >
                  <span className="text-white text-xs font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                  aria-label="Facebook"
                >
                  <span className="text-white text-xs font-bold">f</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                  aria-label="Instagram"
                >
                  <span className="text-white text-xs font-bold">ig</span>
                </a>
              </div>
            </div>

            {/* ── Col 4: Our Addresses ────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-base sm:text-lg md:text-[18px] font-outfit font-bold mb-4 sm:mb-6">
                Our Addresses
              </h4>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <p className="text-white text-xs sm:text-sm md:text-[14px] font-outfit font-bold mb-1">
                    Head Office:
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-[14px] font-outfit leading-relaxed">
                    DHA Phase II, GT Road,<br />Islamabad
                  </p>
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm md:text-[14px] font-outfit font-bold mb-1">
                    Regional Offices:
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-[14px] font-outfit">
                    Karachi &amp; Lahore
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* ── Copyright Bar ───────────────────────────────────────────────────── */}
      <div className="bg-gray-100 py-3 sm:py-4 text-center border-t border-gray-200">
        <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] font-outfit px-4">
          ©<span className="text-[#00AEEF] font-semibold ml-1">WISE VISION</span> 2026. All rights reserved
        </p>
      </div>
    </div>
  );
}