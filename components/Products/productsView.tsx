import Image from 'next/image';
import ProductCard from './card';
import Banner from '@/components/Products/banner';

interface Product {
  image: string;
  title: string;
  subtitle: string;
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
  textColor?: string; // New prop for font color
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
  textColor = "text-white" // Default to white
}: ProductsProps) {
  
  const renderProductGrid = (items: Product[] = []) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          subtitle={product.subtitle}
          href={product.href}
        />
      ))}
    </div>
  );

  return (
    <div className={`w-full ${textColor}`}>
      {/* Hero Banner Section */}
      {(bannerImage || title) && (
        <Banner 
          bannerImage={bannerImage}
          bannerAlt={bannerAlt}
          title={title}
          description={description}
          // Assuming your Banner component can accept a custom text color class
          className={textColor} 
        />
      )}

      {/* Standard Module Series */}
      {products && products.length > 0 && (
        <div id="module" className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {sectionHeading && (
              <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${textColor}`}>
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
              <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${textColor}`}>
                {sectionHeadingP}
              </h2>
            )}
            {renderProductGrid(productsP)}
          </div>
        </div>
      )}

      {/* Rental Series */}
      {productsR && productsR.length > 0 && (
        <div id="rental" className="bg-gray-50 py-16 px-4 font-outfit border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {sectionHeadingR && (
              <h2 className={`text-3xl md:text-4xl text-center mb-10 ${textColor}`}>
                {sectionHeadingR}
              </h2>
            )}
            {renderProductGrid(productsR)}
          </div>
        </div>
      )}
    </div>
  );
}