'use client';

import { content } from '@/lib/content';
import logoslider from '@/public/images/clientsslider.jpg';

export default function OurClients() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-outfit font-semibold text-[#00AEEF] mb-2 sm:mb-4">
            {content.ourClients.title}
          </h2>
        </div>
      </div>

      <div className="relative w-full h-[100px] sm:h-[120px] md:h-[150px] overflow-hidden bg-white py-3 sm:py-4">
        <div
          className="animate-marquee mt-3 sm:mt-4 md:mt-5"
          style={{
            backgroundImage: `url(${logoslider.src})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 50px',
            height: '50px',
            width: '200%',
          }}
        />
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}