import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  imageAlt?: string;
  title: string;
  tag: string;
  href?: string;
}

export default function BlogCard({ image, imageAlt = '', title, tag, href = '#' }: BlogCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-4xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full h-64">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover rounded-t-2xl"
          />
        </div>
        <div className="p-4">
          <h3 className="text-[#08425D] font-outfit font-semibold text-base mb-3 leading-snug group-hover:text-[#00AEEF] transition-colors">
            {title}
          </h3>
          <span className="inline-block bg-[#00AEEF] text-white text-md font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
      </div>
    </Link>
  );
}
