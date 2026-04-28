'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './card';
import Banner from '@/components/Products/banner';
import GetQuote from '@/components/GetQuote';

interface Product {
  image: string;
  title: string;
  subtitle: string;
  href?: string;
  id?: string;
  name?: string;
  features?: string[] | undefined;
  sizes?: string[] | undefined;
}

interface NavigationButton {
  label: string;
  targetId: string;
  href?: string;
}

interface ProductsProps {
  bannerImage?: string;
  bannerAlt?: string;
  title?: string;
  description?: string;
  sectionHeading?: string;
  sectionHeadingP?: string;
  sectionHeadingR?: string;
  products?: Product[];
  productsP?: Product[];
  productsR?: Product[];
  productsS?: Product[];
  productsT?: Product[];
  productsH?: Product[];
  navigationButtons?: NavigationButton[];
  textColor?: string; // Legacy prop for backward compatibility
  bannerTextColor?: string; // Specific color for banner text
  sectionTextColor?: string; // Specific color for section headings
  logo?: string; // Brand logo for banner
}

export default function Products({
  bannerImage = "",
  bannerAlt = "",
  title = "",
  description = "",
  sectionHeading,
  sectionHeadingP,
  sectionHeadingR,
  products,
  productsP,
  productsR,
  productsS,
  navigationButtons,
  textColor = "text-white", // Legacy prop for backward compatibility
  bannerTextColor,
  sectionTextColor = "text-[#08425D]",
  logo
}: ProductsProps) {
  
  // Active button state
  const [activeButton, setActiveButton] = useState(navigationButtons?.[0]?.targetId || '');
  
  // Modal state
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  // Use specific colors if provided, otherwise fall back to legacy textColor
  const bannerColor = bannerTextColor;
  const sectionColor = sectionTextColor;

  // Smooth scroll function with active state update
  const scrollToSection = (targetId: string) => {
    setActiveButton(targetId);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderProductGrid = (items: Product[] = []) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          subtitle={product.subtitle}
          href={product.href}
          productId={product.id}
        />
      ))}
    </div>
  );

  return (
    <div className={`w-full ${textColor}`} id="all">
      {/* Hero Banner Section */}
      {(bannerImage || title) && (
        <Banner 
          bannerImage={bannerImage}
          bannerAlt={bannerAlt}
          title={title}
          description={description}
          className={bannerColor}
          logo={logo}
        />
      )}

      {/* Navigation Buttons */}
      {navigationButtons && navigationButtons.length > 0 && (
        <div className="bg-[#FAFAFA] py-8 px-4 border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {navigationButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(button.targetId)}
                  className={`px-6 py-3 font-outfit font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md ${
                    activeButton === button.targetId 
                      ? 'bg-[#05293A] text-white border-2 border-[#05293A]' 
                      : 'bg-white text-[#05293A] border border-gray-300 hover:bg-gray-50 hover:border-[#05293A]'
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Standard Module Series */}
      {products && products.length > 0 && (
        <div id="module" className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {sectionHeading && (
              <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${sectionColor}`}>
                {sectionHeading}
              </h2>
            )}
            {renderProductGrid(products)}
          </div>
        </div>
      )}

      {/* Premium Series */}
      {productsP && productsP.length > 0 && (
        <div id="premium" className="bg-gray-50 py-16 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {sectionHeadingP && (
              <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${sectionColor}`}>
                {sectionHeadingP}
              </h2>
            )}
            {renderProductGrid(productsP)}
          </div>
        </div>
      )}

      {/* Touch Screen Section */}
      {productsS && productsS.length > 0 && (
        <div className="bg-[#FAFAFA] py-16 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {productsS.map((product, index) => {
                // Generate unique section ID based on product title
                const sectionId = product.title.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={index} id={sectionId}>
                    <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${sectionColor}`}>
                      {product.title}
                    </h2>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row items-center gap-10">
                      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                        {product.id ? (
                          <Link href={`/products/${product.id}`} className="block w-full">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full max-h-90 pr-15 object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity duration-200"
                            />
                          </Link>
                        ) : product.href ? (
                          <a href={product.href} className="block w-full">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full max-h-90 pr-15 object-contain rounded-xl cursor-pointer hover:opacity-90 transition-opacity duration-200"
                            />
                          </a>
                        ) : (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-h-90 pr-15 object-contain rounded-xl"
                          />
                        )}
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 max-w-[500px]">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {product.name}
                        </h3>
                        {product.subtitle && (
                          <p className="text-gray-400 text-base text-center">
                            {product.subtitle}
                          </p>
                        )}
                        {product.sizes && (
                          <p className="text-gray-400 text-base text-center">
                            {product.sizes}
                          </p>
                        )}
                        <ul className="space-y-2 mt-2">
                          {product.features?.map((feature: string, index: number) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700 text-base">
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex justify-center w-full"> 
                          <button 
                            onClick={() => setShowModal(true)}
                            className="bg-[#08425D] hover:bg-[#1a4068] text-[#FFFFFF] px-8 py-3 rounded-md transition-colors duration-200"
                          >
                            Get A Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
     
      {/* Rental Series */}
      {productsR && productsR.length > 0 && (
        <div id="rental" className="bg-gray-50 py-16 px-4 font-outfit border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {sectionHeadingR && (
              <h2 className={`text-3xl md:text-4xl text-center mb-10 ${sectionColor}`}>
                {sectionHeadingR}
              </h2>
            )}
            {renderProductGrid(productsR)}
          </div>
        </div>
      )}
      
      {/* Get Quote Modal */}
      {showModal && <GetQuote onClose={closeModal} />}
    </div>
  );
}