'use client';

import { content } from '@/lib/content';
import Image, { StaticImageData } from 'next/image';
import healthcare from '@/public/images/healthcare.jpg';
import retail from '@/public/images/retailstore.jpg';
import education from '@/public/images/education.jpg';
import shoppingMall from '@/public/images/shoppingmall.jpg';
import conference from '@/public/images/conference.jpg';
import corporate from '@/public/images/corporatesector.jpg';
import meetingRoom from '@/public/images/meetingroom.jpg';
import controlRoom from '@/public/images/controlroom.jpg';
import entertainment from '@/public/images/entertainment.jpg';
import hospitality from '@/public/images/hospitality.jpg';

interface ApplicationItem {
  name: string;
  image: StaticImageData;
  gridClass: string;
  accent: string;
  iconColor: string;
}

const applicationsData: ApplicationItem[] = [
  {
    name: 'HealthCare',
    image: healthcare,
    gridClass: 'col-start-1 row-start-1 row-end-3',
    accent: 'bg-blue-50 border-blue-200 hover:border-blue-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(55,138,221,0.4)]',
  },
  {
    name: 'Retail Stores',
    image: retail,
    gridClass: 'col-start-2 row-start-1',
    accent: 'bg-green-50 border-green-200 hover:border-green-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(59,109,17,0.3)]',
  },
  {
    name: 'Education',
    image: education,
    gridClass: 'col-start-3 row-start-1',
    accent: 'bg-violet-50 border-violet-200 hover:border-violet-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(83,74,183,0.3)]',
  },
  {
    name: 'Shopping Mall',
    image: shoppingMall,
    gridClass: 'col-start-2 row-start-2',
    accent: 'bg-amber-50 border-amber-200 hover:border-amber-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(186,117,23,0.3)]',
  },
  {
    name: 'Conference',
    image: conference,
    gridClass: 'col-start-3 row-start-2',
    accent: 'bg-teal-50 border-teal-200 hover:border-teal-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(15,110,86,0.3)]',
  },
  {
    name: 'Corporate Sector',
    image: corporate,
    gridClass: 'col-start-1 row-start-3',
    accent: 'bg-blue-50 border-blue-200 hover:border-blue-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(24,95,165,0.3)]',
  },
  {
    name: 'Meeting Room',
    image: meetingRoom,
    gridClass: 'col-start-2 row-start-3',
    accent: 'bg-violet-50 border-violet-200 hover:border-violet-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(127,119,221,0.3)]',
  },
  {
    name: 'Entertainment',
    image: entertainment,
    gridClass: 'col-start-3 row-start-3 row-end-5',
    accent: 'bg-pink-50 border-pink-200 hover:border-pink-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(212,83,126,0.3)]',
  },
  {
    name: 'Hospitality',
    image: hospitality,
    gridClass: 'col-start-1 row-start-4',
    accent: 'bg-amber-50 border-amber-200 hover:border-amber-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(239,159,39,0.3)]',
  },
  {
    name: 'Control Room',
    image: controlRoom,
    gridClass: 'col-start-2 row-start-4',
    accent: 'bg-gray-100 border-gray-200 hover:border-gray-300',
    iconColor: 'drop-shadow-[0_0_6px_rgba(136,135,128,0.3)]',
  },
];

export default function Applications() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-outfit font-semibold text-[#00AEEF] mb-2 sm:mb-3">
            {content.applications.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-outfit font-normal text-[#7a7f8e]">
            {content.applications.subtitle}
          </p>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-6xl mx-auto lg:hidden">
          {applicationsData.map((app) => (
            <div
              key={app.name}
              className={`
                group relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer
                hover:scale-[1.02] hover:shadow-xl h-[200px]
                ${app.accent}
              `}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-4">
                <span className="font-outfit font-semibold text-lg text-white drop-shadow-md">
                  {app.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Mosaic Grid — original layout with tall HealthCare & Entertainment */}
        <div
          className="hidden lg:grid grid-cols-3 gap-4 max-w-6xl mx-auto"
          style={{ gridTemplateRows: 'repeat(4, 180px)' }}
        >
          {applicationsData.map((app) => (
            <div
              key={app.name}
              className={`
                group relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer
                hover:scale-[1.02] hover:shadow-xl
                ${app.gridClass} ${app.accent}
              `}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-5">
                <span className="font-outfit font-semibold text-xl text-white drop-shadow-md">
                  {app.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}