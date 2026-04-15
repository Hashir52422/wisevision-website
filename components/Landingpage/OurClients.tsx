'use client';

import logoslider from '@/public/images/clientsslider.jpg';

const clientsTitle = "Our Clients";

export default function OurClients() {
  return (
    <section className="py-8 sm:py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold text-[#00AEEF] mb-2 sm:mb-3">
            {clientsTitle}
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-7 md:gap-8">
          {/* First Row - 5 cards */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div 
              key={`row1-${item}`}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-5 flex items-center justify-center overflow-hidden group"
            >
              {/* Hover effect element */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#DEDFE3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#1414E9] to-[#14A4E9] 
                  transform origin-right scale-x-0 transition-transform 
                  duration-300 ease-out group-hover:scale-x-100">
                </div>
              </div>
              <div className="w-full h-12 sm:h-14 md:h-22 flex items-center justify-center">
                <img 
                  src={`/images/OC${item}.png`}
                  alt={`Client ${item}`}
                  className="w-full h-full object-none"
                />
              </div>
            </div>
          ))}
          
          {/* Second Row - 5 cards */}
          {[6, 7, 8, 9, 10].map((item) => (
            <div 
              key={`row2-${item}`}
              className="relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-5 flex items-center justify-center overflow-hidden group"
            >
              {/* Hover effect element */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#DEDFE3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#1414E9] to-[#14A4E9] 
                  transform origin-right scale-x-0 transition-transform 
                  duration-300 ease-out group-hover:scale-x-100">
                </div>
              </div>
              <div className="w-full h-14 sm:h-14 md:h-22 flex items-center justify-center">
                <img 
                  src={`/images/OC${item}.png`}
                  alt={`Client ${item}`}
                  className="w-full h-full object-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}