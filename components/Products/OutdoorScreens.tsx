import Image from 'next/image';
import ProductCard from './card';

export default function OutdoorScreens() {
  return (
    <div className="w-full">

      {/* ── Banner ── */}
      <div className="relative w-full h-[340px] md:h-[400px]">
        {/* Background image */}
        <Image
          src="/images/Productbanner.jpeg"
          alt="Outdoor SMDs Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text — left-aligned, vertically centred */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Outdoor SMDs
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            View our full range of rugged, high-performance outdoor displays,
            including digital billboards and all-weather pole streamer technology.
          </p>
        </div>
      </div>

      {/* ── Product Cards ── */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-outfit text-center text-gray-900 mb-10">
            Module Series
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ProductCard image="/images/ModuleSeries.png" title="P-3 SMD Screen" subtitle="Outdoor" />
            <ProductCard image="/images/ModuleSeries.png" title="P-4 SMD Screen" subtitle="Outdoor" />
            <ProductCard image="/images/ModuleSeries.png" title="P-5 SMD Screen" subtitle="Outdoor" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard image="/images/ModuleSeries.png" title="P-6 SMD Screen" subtitle="Outdoor" />
            <ProductCard image="/images/ModuleSeries.png" title="P-8 SMD Screen" subtitle="Outdoor" />
            <ProductCard image="/images/ModuleSeries.png" title="P-10 SMD Screen" subtitle="Outdoor" />
          </div>
        </div>
      </div>

    </div>
  );
}