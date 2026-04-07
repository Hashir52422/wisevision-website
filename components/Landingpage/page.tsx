import Header from '@/components/Landingpage/Header';
import Hero from '@/components/Landingpage/Hero';
import Products from '@/components/Landingpage/Products';
import Applications from '@/components/Landingpage/Applications';
import OurClients from '@/components/Landingpage/OurClients';
import Projects from '@/components/Landingpage/Projects';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import Footer from '@/components/Landingpage/Footer';
import Partners from '@/components/Landingpage/Partners';
import Reviews from '@/components/Landingpage/Reviews';

export default function Landingpage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Applications />
      <Partners />
      <Projects />
      <OurClients />

      
      <WhyChooseUs />
      <Reviews />
      <Footer />
    </div>
  );
}
