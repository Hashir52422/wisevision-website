import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import ProductDetail from '@/components/Products/ProductDetail';
import Banner from '@/components/Products/banner';

const productData = {
  image: '/images/P0.9COBLED.png',
  title: 'P0.9 COB LED Display',
  description:
    'The COB 0.9 LED Display is an ultra-fine pitch display. It is designed for \
        environments that demand extreme clarity and detail. With its ultra-fine pixel pitch of 0.9mm, \
        it delivers lifelike images. Broadcasting studios, corporate boardrooms, or mission-critical control centers, this display ensures unmatched sharpness.\
        Its modern COB technology also makes it highly durable, resistant to impact, and smooth to the touch. WISE VISION offers this high-end COB screen at the best pricing.',
  specs: [
    { label: 'Low heat, longer life',    value: '' },
    { label: 'Durable, smooth surface',    value: '' },
    { label: 'Deep and uniform blacks',            value: '' },
    { label: 'Vivid details, sharp clarity',           value: '' },
    { label: 'Less power, more efficiency',     value: '' },
    { label: 'Concave and 90° Splicing',       value: '' },
    { label: 'Safe choice',     value: '' },
    { label: 'Stable and high reliability',    value: '' },
  ],
};

export default function P09cobledPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner 
        bannerImage='/images/COBBanner.jpeg'
        bannerAlt="P0.9 COB LED"
        className='text-black'
        title="P0.9 COB LED Display"
        description="Explore our advanced Chip-on-Board (COB) displays, featuring micro-pitch technology, superior contrast ratios, and enhanced physical durability for elite corporate environments."
      />
      <ProductDetail {...productData} showSpecs={false}  />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
