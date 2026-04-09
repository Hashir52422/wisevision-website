import Image from 'next/image';

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
}

export default function ProductDetail({ image, title, description, specs, textcolor = "#0f141e", showSpecs = true }: ProductDetailProps) {
  // Split specs into two columns
  const half = Math.ceil(specs.length / 2);
  const leftSpecs = specs.slice(0, half);
  const rightSpecs = specs.slice(half);

  return (
    <section className="bg-[#FAFAFA] py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* Product Image */}
          <div className="w-full md:w-[500px] flex-shrink-0">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden ">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 pt-12 sm:pt-0 ">
            <h1 className="font-outfit font-bold text-3xl md:text-4xl text-[#0f141e] mb-4">
              {title}
            </h1>
            <p className="font-outfit text-[15px] md:text-[16px] text-[#555] leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <a
              href="/contact"
              className="inline-block bg-[#08425d] hover:bg-[#0a5275] text-white font-outfit font-semibold text-[15px] px-7 py-3 rounded-lg transition-colors duration-200 mb-10"
            >
              Get A Quote
            </a>

            {/* Specs */}
              <div>
                <h2 className="font-outfit font-semibold text-2xl md:text-3xl text-[#0f141e] mb-5">
                  Product Specification:
                </h2>
                <div className="flex flex-col sm:flex-row gap-x-16 gap-y-2">
                  {/* Left column */}
                  <ul className="space-y-2">
                    {leftSpecs.map((spec) => (
                      <li key={spec.label} className="flex items-baseline gap-1 font-outfit text-[14px] md:text-[15px]">
                        <span className="text-[#555] before:content-['•'] before:mr-2">{spec.label}{showSpecs ? ':' : ''}</span>
                        <span className="font-semibold text-[#0f141e]">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Right column */}
                  <ul className="space-y-2">
                    {rightSpecs.map((spec) => (
                      <li key={spec.label} className="flex items-baseline gap-1 font-outfit text-[14px] md:text-[15px]">
                        <span className="text-[#555] before:content-['•'] before:mr-2">{spec.label}{showSpecs ? ':' : ''}</span>
                        <span className="font-semibold text-[#0f141e]">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
}
