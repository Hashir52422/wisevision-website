'use client';

import Link from 'next/link';
import logo from '@/public/images/Logo.svg';
import instagramIcon from '@/public/images/Instagram.svg';
import Image from 'next/image';

const footerDescription = "WISE VISION is Pakistan's premier digital signage solutions provider & an authorized distributor of Samsung, Philips, & LianTronics. We empower businesses with premium indoor/outdoor SMD screens, digital billboards, pole streamers, & Samsung products including LED video walls, interactive screens, Hospitality TVs, & monitors in Pakistan.";

export default function Footer() {
  const links = [
    { name: 'Home',         href: '/' },
    { name: 'Affiliations', href: '/affilations' },
    { name: 'Products',     href: '/indoorscreens' },
    { name: 'About Us',     href: '/aboutUs' },
    { name: 'Contact Us',   href: '/contactUs' },
    { name: 'Blog',         href: '/blog' },
    { name: 'Projects',     href: '/projects' },
  ];

  return (
    <div>
      {/* ── Main Footer ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#021017] relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

            {/* ── Col 1: Logo + Description ──────────────────────────────────── */}
            <div className="lg:col-span-1">
              {/* Relative parent container */}
              <div className="relative flex items-center mb-4 sm:mb-6 py-2">
                
                {/* 1. Background Logo (Watermark) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 z-0 pointer-events-none ">
                  <Image 
                    src={logo} 
                    alt="Wise Vision Background Logo" 
                    fill
                    className="object-contain pb-9"
                  />
                </div>

                {/* 2. Foreground Text */}
                <div className="relative flex flex-col leading-none pl-12 sm:pl-14 md:pl-16 ml-2 mb-9">
                  <span className="text-white font-outfit font-bold text-sm sm:text-base md:text-md tracking-wide">WISE</span>
                  <span className="text-white font-outfit font-bold text-sm sm:text-base md:text-md tracking-wide">VISION</span>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm font-outfit leading-snug mt-[-40]">
                {footerDescription}
              </p>
            </div>

            {/* ── Col 2: Links ───────────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-sm sm:text-base font-outfit font-bold mb-3 sm:mb-4">
                Links
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 text-xs sm:text-sm font-outfit hover:text-[#00AEEF] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Col 3: Contact Us ───────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-sm sm:text-base font-outfit font-bold mb-3 sm:mb-4">
                Contact Us
              </h4>
              <ul className="space-y-2 mb-3 sm:mb-4">
                <li>
                  <a href="tel:03280344789" className="text-gray-300 text-xs sm:text-sm font-outfit hover:text-[#00AEEF] transition-colors duration-200">
                    03280344789
                  </a>
                </li>
                <li>
                  <a href="mailto:support@wisevision.pk" className="text-gray-300 text-xs sm:text-sm font-outfit hover:text-[#00AEEF] transition-colors duration-200">
                    support@wisevision.pk
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="http://linkedin.com/company/wise-vision-official/" target='_blank'
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#14A4E9] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                  aria-label="LinkedIn"
                >
                  <span className="text-white text-sm font-bold">in</span>
                </a>
                <a
                  href="https://www.facebook.com/Wisevisionofficial" target='_blank'
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#14A4E9] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                  aria-label="Facebook"
                >
                  <span className="text-white text-sm font-bold">f</span>
                </a>
                   
                   <a href='https://www.instagram.com/wisevision_official?utm_source=qr&igsh=MWkyZ3R1cWN0ZjRhYQ==' target='_blank'>
                  <Image 
                    src={instagramIcon} 
                    alt="Instagram" 
                    width={8}
                    height={8}
                    className="w-8 h-8 sm:w-9 sm:h-9"
                  />
                  </a>
              
              </div>
            </div>

            {/* ── Col 4: Our Addresses ────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <h4 className="text-white text-sm sm:text-base font-outfit font-bold mb-3 sm:mb-4">
                Our Addresses
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-white text-xs sm:text-sm font-outfit font-bold mb-1">Head Office:</p>
                  <p className="text-gray-300 text-xs sm:text-sm font-outfit leading-relaxed">
                    Plaza 43 MB Sector B DHA phase 6<br />Lahore
                  </p>
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm font-outfit font-bold mb-1">Regional Offices:</p>
                  <p className="text-gray-300 text-xs sm:text-sm font-outfit">Karachi &amp; Lahore</p>
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