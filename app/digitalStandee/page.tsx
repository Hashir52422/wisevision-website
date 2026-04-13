import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Products from '@/components/Products/productsView';

export default function digitalStandee() {
  const digitalStandee = {
    bannerImage: "/images/StandeeBanner.jpeg",
    bannerAlt: "Digital Standee Banner",
    title: "Premium Digital Standees",
    description: "Supply and integrate premium indoor digital standees, featuring authorized Samsung touch and non-touch technology for high-traffic environments.",
    bannerTextColor: "text-black",
    navigationButtons: [
      { label: "All Products", targetId: "all" },
      { label: "Indoor Standee", targetId: "indoor-smd-digital-standee" },
      { label: "Samsung Touch Standee", targetId: "samsung-touch-digital-standee" },
      { label: "Samsung Non-Touch Standee", targetId: "samsung-non-touch-digital-standee" },

    ],
  
    productsS: [
      {
        image: "/images/IndoorStandee.png",
        title: "Indoor SMD Digital Standee",
        subtitle: "",
        name: "SMD Digital Standee",
        features: [
          "Standard Screen Size",
          "Backward Foldable Design",
          "Plug-and-play Design",
          "Multi-screen Seamless Splicing"
        ]
      },
          {
        image: "/images/TouchStandee.png",
        title: "Samsung Touch Digital Standee",
        subtitle: "",
        name: "Samsung Touch Standee",
        features: [
          "Interactive Touch Experience",
          "Smart Content Management",
          "Stunning Visual Clarity",
          "Customized Engagement Options"
        ]
      },
          {
        image: "/images/Non-TouchStandee.png",
        title: "Samsung Non-Touch Digital Standee",
        subtitle: "",
        name: "Samsung Non-Touch Standee",
        features: [
          "Brilliant Display Quality",
          "Effortless Remote Control",
          "Sleek Modern Design",
          "Reliable 24/7 Performance"
        ]
      }
      
    ],

  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...digitalStandee} />
      <Footer />
    </div>
  );
}