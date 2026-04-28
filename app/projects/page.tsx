'use client'

import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogCard from '@/components/blog/blogCard';
import ContactForm from '@/components/contactus/form';
import { useState } from 'react';
import Banner from '@/components/Products/banner';
import GetQuote from '@/components/GetQuote';

const projectsData = [
  // Row 1
  { title: "Fauji Fertilizer Company", tag: "P-2.5 SMD LED Video Wall", image: "/images/FFC.jpeg", href: "#" },
  { title: "Air Weapons Complex", tag: "P-3.9 Portable SMD LED Video Wall", image: "/images/AVC.jpeg", href: "#" },
  { title: "Corporate Headquarters", tag: "P-3 Indoor LED Display", image: "/images/FFC.jpeg", href: "#" },
  
  // Row 2
  { title: "Shopping Mall Installation", tag: "P-4 Outdoor LED Display", image: "/images/AVC.jpeg", href: "#" },
  { title: "Bank Branch Display", tag: "P-2.5 Indoor Video Wall", image: "/images/FFC.jpeg", href: "#" },
  { title: "Restaurant Digital Menu", tag: "P-3 LED Screen", image: "/images/AVC.jpeg", href: "#" },
  
  // Row 3
  { title: "University Campus", tag: "P-3.9 Outdoor Display", image: "/images/FFC.jpeg", href: "#" },
  { title: "Hospital Information System", tag: "P-2 Indoor LED Wall", image: "/images/AVC.jpeg", href: "#" },
  { title: "Retail Store Display", tag: "P-4 Commercial Screen", image: "/images/FFC.jpeg", href: "#" },
];

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const handleCardClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-outfit font-medium text-[#14A4E9] mb-6">
              Commercial Digital Projects
            </h1>
            <p className="text-lg md:text-xl text-[#0F141E] max-w-4xl mx-auto leading-relaxed">
              We deploy premium visual infrastructure projects for corporate and public environments nationwide. Our portfolio includes precision-engineered indoor screens and robust outdoor SMDs, successfully delivering complex display projects for leading brands across Pakistan. 
            </p>
          </div>

          {/* Video - Same size as banner component */}
            <div className="w-[1450px] h-[340px] md:h-[600px] rounded-lg overflow-hidden mb-12 bg-black">
              <video 
                className="w-full h-full object-cover"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline
                preload="auto"
              >
                <source src="/images/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          {/* Projects Grid - 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(project)}
                className="cursor-pointer"
              >
                <BlogCard
                  image={project.image}
                  title={project.title}
                  tag={project.tag}
                  href="#"
                  titleCentered={true}
                  titleFontSize="text-3xl"
                  titleColor="text-[#0F141E]"
                  tagCentered={true}
                  tagColor="text-[#7A7F8E]"
                  tagWithBackground={false}
                  tagFontSize="text-md"
                  imageHeight="h-64"
                  hoverOverlay={true}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Popup Modal */}
  {showModal && <GetQuote onClose={closeModal} />}
      
      <Footer />
    </div>
  );
}