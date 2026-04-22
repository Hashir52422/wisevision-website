import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  imageAlt?: string;
  title: string;
  tag: string;
  href?: string;
  imageHeight?: string;
  titleCentered?: boolean;
  tagCentered?: boolean;
  tagWithBackground?: boolean;
  titleColor?: string;
  tagColor?: string;
  titleFontSize?: string;
  tagFontSize?: string;
  enableHover?: boolean;
  hoverOverlay?: boolean;
}

export default function BlogCard({ 
  image, 
  imageAlt = '', 
  title, 
  tag, 
  href = '#',
  imageHeight = 'h-64',
  titleCentered = false,
  tagCentered = false,
  tagWithBackground = true,
  titleColor = 'text-[#08425D]',
  tagColor = 'text-white',
  titleFontSize = 'text-base',
  tagFontSize = 'text-md',
  hoverOverlay = false
}: BlogCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-4xl shadow-sm border border-gray-100 overflow-hidden relative transition-shadow duration-300 group-hover:shadow-lg">       
        <div className={`relative w-full ${imageHeight}`}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-fill rounded-t-2xl"
          />
        </div>
        <div className="p-4">
          <h3 className={`font-outfit font-semibold ${titleFontSize} mb-3 leading-snug ${
            titleCentered ? 'text-center' : ''
          } ${titleColor}`}>
            {title}
          </h3>
          <span className={`font-medium px-3 py-1 rounded-full ${
            tagWithBackground ? 'bg-[#00AEEF]' : 'bg-transparent'
          } ${tagColor} ${tagFontSize} ${
            tagCentered ? 'block text-center w-full' : 'inline-block'
          }`}>
            {tag}
          </span>
        </div>

        {/* Gradient bottom border on hover */}
        {hoverOverlay && (
          <div
            className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-4xl"
            style={{ background: 'linear-gradient(to right, #1414E9, #14A4E9)' }}
          />
        )}
      </div>
    </Link>
  );
}
