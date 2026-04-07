import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Applications from '@/components/Applications';
import OurClients from '@/components/OurClients';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import Reviews from '@/components/Reviews';

export default function Home() {
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
