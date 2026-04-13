import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import ProductDetail from '@/components/Products/ProductDetail';
import Banner from '@/components/Products/banner';

const productData = {
  image: '/images/PhilipsInteractiveScreen.png',
  title: 'Philips E-Line Interactive Screen',
  description:
    'The Philips Interactive Display is designed to inspire interaction, creativity, and teamwork in collaborative environments. The interactive display is powered by Android 14 and has more than 50 touch points for presentations, demos, and interactive sessions.  It maintains bright, uniform visuals even during long hours of continuous use.',
  specs: [
    { label: '50-point multi-touch technology​',value: '' },
    { label: 'Wireless presentation',value: '' },
    { label: 'Android 14 OS built-in',value: '' },
    { label: 'Up to 50 Simultaneous Touch Points',value: '' },
    { label: 'PPDS Wave ready',value: '' },
    { label: 'OPS Integration',value: '' },
    { label: 'Plug and Play Wifi module',value: '' },
    { label: 'Easy to Mount Brackets',value: '' },
    { label: 'Wireless presentations',value: '' },
    { label: 'NFC Technology',value: '' },
  ],

};

export default function VhcR() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner 
        bannerImage='/images/Philipsbanner.jpeg'
        bannerAlt="Philips banner"
        title="Philips E-Line Interactive Screen"
        logo='/images/PhilipsLogo.png'
        description="The Philips Interactive Display is designed to inspire interaction, creativity, and teamwork in collaborative environments."
      />
      <ProductDetail {...productData} showSpecs={false} inches="65’’ 75’’ 86’’"/>
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
