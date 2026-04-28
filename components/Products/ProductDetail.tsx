import Image from 'next/image';
import Banner from './banner';
import GetQuote from '@/components/GetQuote';
import { useState } from 'react';

interface Spec {
  label: string;
  value: string;
}

export interface ProductDetailProps {
  image: string;
  title: string;
  description: string;
  specs: Spec[];
  textcolor?: string;
  showSpecs?: boolean;
  inches?: string;
  // New product details props
  bannerTitle?: string;
  bannerDescription?: string;
  bannerImage?: string;
  productDescription?: string;
  productSpecification?: string;
}

export default function ProductDetail({ 
  image, 
  title, 
  description, 
  specs, 
  textcolor = "#0f141e", 
  showSpecs = true, 
  inches,
  bannerTitle,
  bannerDescription,
  bannerImage,
  productDescription,
  productSpecification 
}: ProductDetailProps) {
  // Modal state
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  // Split specs into two columns
  const half = Math.ceil(specs.length / 2);
  const leftSpecs = specs.slice(0, half);
  const rightSpecs = specs.slice(half);

  // Use product details if available, otherwise fall back to original props
  const displayTitle =title;
  const displayDescription = productDescription || description;
  const displaySpecification = productSpecification;

  return (
    <div className="w-full">
      {/* Banner Section */}
      {(bannerTitle || bannerDescription || bannerImage) && (
        <Banner
          bannerImage={bannerImage || "/images/placeholder-banner.jpg"}
          bannerAlt={bannerTitle || "Product Banner"}
          title={bannerTitle || ""}
          description={bannerDescription || ""}
          className="text-white"
        />
      )}

      <section className="bg-[#FAFAFA] py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Product Image */}
            <div className="w-full md:w-[500px] flex-shrink-0">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                <Image
                  src={image}
                  alt={displayTitle}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 pt-18 sm:pt-0">
              <h1 className="font-outfit font-bold text-3xl md:text-4xl text-[#0f141e] mb-4">
                {bannerTitle}
              </h1>
              <p className="text-[#9B9B9B] font-outfit text-[16px] md:text-[17px] mb-4">{inches}</p>
              <p className="font-outfit text-[15px] md:text-[16px] text-[#555] leading-relaxed mb-8 max-w-xl">
                {displayDescription}
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="inline-block bg-[#08425d] hover:bg-[#0a5275] text-white font-outfit font-semibold text-[15px] px-7 py-3 rounded-lg transition-colors duration-200 mb-10"
              >
                Get A Quote
              </button>

              {/* Product Specification */}
              <div>
                <h2 className="font-outfit font-semibold text-2xl md:text-3xl text-[#0f141e] mb-5">
                  Product Specification:
                </h2>
                {displaySpecification && (
                  // Parse displaySpecification and map to left/right columns
                  (() => {
                    const specLines = displaySpecification.split('\n').filter(line => line.trim());
                    const half = Math.ceil(specLines.length / 2);
                    const leftSpecLines = specLines.slice(0, half);
                    const rightSpecLines = specLines.slice(half);
                    
                    return (
                      <div className="flex flex-col md:flex-row gap-x-16 gap-y-2">
                        {/* Left column */}
                        <ul className="space-y-2 flex-1">
                          {leftSpecLines.map((line, index) => {
                            const parts = line.split(':');
                            const label = parts[0]?.trim() || '';
                            const value = parts[1]?.trim() || line;
                            return (
                              <li key={`left-${index}`} className="flex items-baseline gap-1 font-outfit text-[14px] md:text-[15px]">
                                <span className="text-[#999999] before:content-['•'] before:mr-2">{value}</span>
                              </li>
                            );
                          })}
                        </ul>
                        {/* Right column */}
                        <ul className="space-y-2 flex-1">
                          {rightSpecLines.map((line, index) => {
                            const parts = line.split(':');
                            const label = parts[0]?.trim() || '';
                            const value = parts[1]?.trim() || line;
                            return (
                              <li key={`right-${index}`} className="flex items-baseline gap-1 font-outfit text-[14px] md:text-[15px]">
                                <span className="text-[#999999] before:content-['•'] before:mr-2">{value}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })()
                )}    
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Quote Modal */}
      {showModal && <GetQuote onClose={closeModal} />}
    </div>
  );
}
