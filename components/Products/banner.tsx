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
      <div className="relative w-full h-[340px] md:h-[400px]">
        {/* Background image */}
        <Image
          src={bannerImage}
          alt={bannerAlt}
          fill
          className="object-cover"
          priority
        />
      

        {/* Text - left-aligned, vertically centred */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium ${className} mb-4 leading-tight`}>
            {title}
          </h1>
          <p className={`text-base md:text-lg ${className} leading-relaxed`}>
            {description}
          </p>
        </div>

        {/* Logo - bottom right */}
        {logo && (
          <div className="absolute bottom-4 left-4 z-10 ">
            <Image
              src={logo}
              alt="Brand Logo"
              width={120}
              height={60}
              className="object-contain ml-12 mb-5"
            />
          </div>
        )}

      </div>
        </div>
    );
}