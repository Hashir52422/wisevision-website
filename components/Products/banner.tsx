import Image from "next/image";

export default function Banner({
    bannerImage,
    bannerAlt,
    title,
    description,
    className = "",
    logo
}: {
    bannerImage: string;
    bannerAlt: string;
    title: string;
    description: string;
    className?: string;
    logo?: string;
}) {
    return (
        <div>
   {/* Banner */}
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] lg:h-[400px] overflow-hidden">
        {/* Background image */}
        <Image
          src={bannerImage}
          alt={bannerAlt}
          fill
          className="object-cover"
          priority
        />
      

        {/* Text - left-aligned, vertically centred */}
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-3xl">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium ${className} mb-3 leading-tight`}>
            {title}
          </h1>
          <p className={`text-sm sm:text-base md:text-lg ${className} leading-relaxed`}>
            {description}
          </p>
        </div>

        {/* Logo - bottom left */}
        {logo && (
          <div className="absolute bottom-4 left-4 sm:left-8 md:left-16 z-10">
            <Image
              src={logo}
              alt="Brand Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        )}

      </div>
        </div>
    );
}