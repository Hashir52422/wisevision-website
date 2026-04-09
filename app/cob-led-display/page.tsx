import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Products from '@/components/Products/productsView';

export default function IndoorScreensPage() {
  const cobledData = {
    bannerImage: "/images/COBBanner.jpeg",
    bannerAlt: "COB LED Banner",
    title: "COB LED Displays",
    description: "Explore our advanced Chip-on-Board (COB) displays, featuring micro-pitch technology, superior contrast ratios, and enhanced physical durability for elite corporate environments.",
    sectionHeading: "Module Series",
    products: [
      {
        image: "/images/P0.9COBLED.png",
        title: "P0.9 COB LED Display",
        subtitle: "Indoor",
        href: "/products/p0.9-cob-led"
      },
      {
        image: "/images/P1.2COBLED.png",
        title: "P1.2 COB LED Display",
        subtitle: "Indoor",
        href: "/products/indoorscreens/i4-smd"
      },
      {
        image: "/images/P1.5COBLED.png",
        title: "P1.5 COB LED Display",
        subtitle: "Indoor",
        href: "/products/indoorscreens/i5-smd"
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...cobledData} textColor='text-black' />
      <Footer />
    </div>
  );
}
