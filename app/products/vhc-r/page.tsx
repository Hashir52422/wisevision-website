import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import ProductDetail from '@/components/Products/ProductDetail';
import Banner from '@/components/Products/banner';

const productData = {
  image: '/images/VHC.png',
  title: 'VHC-R Razor-Thin Bezels',
  description:
    'With an ultra-thin 0.44 mm bezel and a bezel-to-bezel just 0.88 mm, the VHC-R series creates the illusion of a single, continuous display. This design eliminates distractions from visible borders, ensuring that content flows smoothly without any visual interruptions. The nearly invisible bezels enhance audience engagement by delivering a unified, immersive experience.',
  specs: [
    { label: 'High Brightness',value: '' },
    { label: 'Non-Glare',value: '' },
    { label: '24/7 Operation',value: '' },
    { label: 'Wide View Angles',value: '' },
    { label: 'Reliable Performance',value: '' },
  ],

};

export default function VhcR() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner 
        bannerImage='/images/SamsungBanner.png'
        bannerAlt="VHC-R Razor-Thin Bezels"
        title="VHC-R Razor-Thin Bezels"
        logo='/images/SamsungLogo.png'
        description="The Samsung VHC-R series video wall offers a state-of-the-art display experience with a compact sleek design."
      />
      <ProductDetail {...productData} showSpecs={false} inches='55’’' />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
