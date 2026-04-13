import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Products from '@/components/Products/productsView';

export default function phillips() {
  const phillipsData = {
    bannerImage: "/images/PhilipsBanner.jpeg",
    bannerAlt: "Philips Banner",
    title: "Philips Visual Infrastructure",
    description: "Your trusted partner for Philips professional display technology. Delivering industry-leading interactive screens, specialized hospitality displays, and commercial digital signage for high-performance environments.",
    sectionHeading: "Interactive Touch Display",
    bannerTextColor: "text-white",
    logo: '/images/PhilipsLogo.png',
    navigationButtons: [
      { label: "All Products", targetId: "all" },
      { label: "Interactive Touch Display", targetId: "module" },
      { label: "Hospitality TV", targetId: "premium" },

    ],
    products: [
      {
        image: "/images/PhilipsInteractiveScreen.png",
        title: "Philips E-Line Interactive Screen",
        subtitle: "65’’ 75’’ 86’’",
        href: "/products/philipsE-line"
      },
      {
        image: "/images/1.png",
        title: "Philips T-Line Touch Sc",
        subtitle: "24’’",
        href: "/products/outdoorscreens/p4-smd"
      },
      {
        image: "/images/2.png",
        title: "Philips T-Line Touch Display",
        subtitle: "32’’ 55’’"
      },
    ],
    productsS: [
      {
        image: "/images/PhilipsHotelTV.png",
        title: "Hospitality TV",
        subtitle: "",
        name: "Philips Hotel TV",
        sizes: ["HFL5214U/97"],
        features: [
          "Quick and easy to use",
          "Clear picture and sound",
          "Save energy and costs",
          "Easy to connect devices like phones and USB "
        ]
      }
      
    ],

  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...phillipsData} />
      <Footer />
    </div>
  );
}