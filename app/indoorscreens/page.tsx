import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Products from '@/components/Products/productsView';

export default function IndoorScreensPage() {
  const indoorSMDData = {
    bannerImage: "/images/indoorbanner.png",
    bannerAlt: "Indoor SMDs Banner",
    title: "Indoor SMDs",
    description: "Explore our premium indoor display solutions designed for retail, corporate, and entertainment environments with superior clarity and performance.",
    sectionHeading: "Module Series",
    sectionHeadingP: "Premium Series",
    sectionHeadingR: "Rental Series",
    products: [
      {
        image: "/images/P1.2SMDScreen.png",
        title: "P-1.2 SMD Screen",
        subtitle: "Indoor",
        href: "/products/p1.2-smd-screen"
      },
      {
        image: "/images/P1.5SMDScreen.png",
        title: "P-1.5 SMD Screen",
        subtitle: "Indoor",
        href: "/products/indoorscreens/i4-smd"
      },
      {
        image: "/images/P1.8SMDScreen.png",
        title: "P-1.8 SMD Screen",
        subtitle: "Indoor",
        href: "/products/indoorscreens/i5-smd"
      },
      {
        image: "/images/P2.5SMDScreen.png",
        title: "P-2.5 SMD Screen",
        subtitle: "Indoor",
        href: "/products/indoorscreens/i6-smd"
      },
      {
        image: "/images/FlexibleScreen.png",
        title: "Flexible Screen",
        subtitle: "Indoor",
        href: "/products/indoorscreens/i8-smd"
      },
      {
        image: "/images/CreativeScreen.png",
        title: "Creative Screen",
        subtitle: "Indoor",
        href: "/products/indoorscreens/i10-smd"
      }
    ],
    productsP: [
      {
        image: "/images/MaxSeries.png",
        title: "Max Series",
        subtitle: "Indoor"
      },
      {
        image: "/images/SmartBoxSeries1.png",
        title: "Smart Box Series",
        subtitle: "Indoor"
      },
      {
        image: "/images/TransparentSeries1.png",
        title: "Transparent Series",
        subtitle: "Indoor"
      },
      {
        image: "/images/VASeries.png",
        title: "VA Series",
        subtitle: "Indoor"
      },
      {
        image: "/images/VTSeries(COB LED).png",
        title: "VT Series (COB LED)",
        subtitle: "Indoor"
      },
      {
        image: "/images/VTIISeries(COB LED).png",
        title: "VTII Series (COB LED)",
        subtitle: "Indoor"
      },
    ],
    productsR: [
      {
        image: "/images/DazzleIV.png",
        title: "Dazzel IV Series",
        subtitle: "Indoor"
      },
        {
        image: "/images/ShineProSeries.png",
        title: "Shin Pro Series",
        subtitle: "Indoor"
      },
        {
        image: "/images/PilotProSeries1.png",
        title: "Pilot Pro Series",
        subtitle: "Indoor"
      },
        {
        image: "/images/ESwanseries1.png",
        title: "E-Swan Series",
        subtitle: "Indoor"
      },
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...indoorSMDData} />
      <Footer />
    </div>
  );
}


// This code defines a React component 
// for the Indoor Screens page of a website.
//  It imports necessary components such as Header, Footer, and IndoorScreens. 
// The component uses a data object called indoorSMDData to store information
//  about the banner, title, description, and products related to indoor SMD screens. 
// The component then renders the Header, IndoorScreens with the provided data, 
// and the Footer.