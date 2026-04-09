import Image from 'next/image';
import ProductCard from './card';
import Banner from '@/components/Products/banner';

interface Product {
  image: string;
  title: string;
  subtitle: string;
  href?: string;
}

interface IndoorScreensProps {
  bannerImage: string;
  bannerAlt: string;
  title: string;
  description: string;
  sectionHeading: string;
  sectionHeadingP: string;
  sectionHeadingR: string;
  products: Product[];
  productsP: Product[];
  productsR: Product[];
}

export default function IndoorScreens({
  bannerImage,
  bannerAlt,
  title,
  description,
  sectionHeading,
  sectionHeadingP,
  sectionHeadingR,
  products,
  productsP,
  productsR
}: IndoorScreensProps) {
  return (
    <div className="w-full">
      <Banner 
        bannerImage={bannerImage}
        bannerAlt={bannerAlt}
        title={title}
        description={description}
      />

      {/* Product Cards Module Series */}
      <div id="module" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-outfit text-center text-gray-900 mb-10">
            {sectionHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                href={product.href}
              />
            ))}
          </div>
          {products.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.slice(3).map((product, index) => (
                <ProductCard
                  key={index + 3}
                  image={product.image}
                  title={product.title}
                  subtitle={product.subtitle}
                  href={product.href}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Cards Premium */}
      <div id="premium" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-outfit text-center text-gray-900 mb-10">
            {sectionHeadingP}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {productsP.slice(0, 3).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                href={product.href}
              />
            ))}
          </div>
          {productsP.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productsP.slice(3).map((product, index) => (
                <ProductCard
                  key={index + 3}
                  image={product.image}
                  title={product.title}
                  subtitle={product.subtitle}
                  href={product.href}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Cards Rental */}
      <div id="rental" className="bg-gray-50 py-16 px-4 font-outfit">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-10">
            {sectionHeadingR}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {productsR.slice(0, 3).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
          </div>
          {productsR.length > 3 && (
            <div className="flex justify-start"> 
              <div className="w-full md:w-1/3">
                {productsR.slice(3, 4).map((product, index) => (
                  <ProductCard
                    key={index + 3}
                    image={product.image}
                    title={product.title}
                    subtitle={product.subtitle}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
