'use client'

import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogCard from '@/components/blog/blogCard';
import ContactForm from '@/components/contactus/form';
import { useState } from 'react';

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
  {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.25)' }}>
    <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
      
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col lg:flex-row px-6 pb-4 pt-16 gap-8">
        <ContactForm showSocialMedia={false}
        title='Get Your Own SMD Screen'
        subtitle='We are Just a Call Away!'
        description='Looking to install a bright, digital display for your location? Wise Vision makes it simple. We provide complete services, from selling the best screens to full installation. Tell us what you need, and we will guide you step-by-step.'
        
        />
      </div>
    </div>
  </div>
)}
      
      <Footer />
    </div>
  );
}