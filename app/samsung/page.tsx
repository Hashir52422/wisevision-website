import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Products from '@/components/Products/productsView';

export default function samsung() {
  const SamsungData = {
    bannerImage: "/images/SamsungBanner.png",
    bannerAlt: "Samsung Banner",
    title: "Samsung Visual Infrastructure",
    description: "Your trusted partner for Samsung commercial visual technology. Delivering industry-leading video walls, interactive collaborative screens, and corporate monitors for high-performance workspaces.",
    sectionHeading: "Video Walls",
    sectionHeadingP: "Digital Signage",
    sectionHeadingR: "Monitors",
    // Color control props
    bannerTextColor: "text-white",
    // Brand logo (empty as requested - user will add image)
    logo: '/images/SamsungLogo.png',
    // Navigation buttons
    navigationButtons: [
      { label: "All Products", targetId: "all" },
      { label: "Video Walls", targetId: "module" },
      { label: "Digital Signage", targetId: "premium" },
      { label: "Interactive Screens", targetId: "interactive-screen" },
      { label: "Touch Screen", targetId: "touch-screen" },
      { label: "Hospitality TV", targetId: "hospitality-tv" },
      { label: "Monitors", targetId: "rental" }
    ],
    products: [
      {
        image: "/images/VHC.png",
        title: "VHC-R Razor-Thin Bezels",
        subtitle: "55’’",
        href: "/products/vhc-r"
      },
      {
        image: "/images/VHR.png",
        title: "VHR-R Razor-Narrow Bezels",
        subtitle: "55’’",
        href: "/products/outdoorscreens/p4-smd"
      },
      {
        image: "/images/VMB.png",
        title: "VMB-E-Extreme Series",
        subtitle: "55’’"
      },
      {
        image: "/images/VMBU.png",
        title: "VMB-U-Ultra Bezel Series",
        subtitle: "46’’   55’’"
      }
    ],
    productsP: [
      {
        image: "/images/QHFX.png",
        title: "QHFX UHD",
        subtitle: "155’’"
      },
      {
        image: "/images/QPDX.png",
        title: "QPDX UHD",
        subtitle: "105’’"
      },
      {
        image: "/images/SH.png",
        title: "SH37C Stretched",
        subtitle: "37’’"
      },
      {
        image: "/images/QHC.png",
        title: "QHC High Brightness UHD",
        subtitle: "43’’ 50’’ 55’’ 65’’ 75’’ 98’’"
      },
      {
        image: "/images/QMC.png",
        title: "QMC Crystal UHD",
        subtitle: "32’’ 42’’ 50’’ 55’’ 65’’ 75’’ 85’’ 98’’"
      },
      {
        image: "/images/QBC.png",
        title: "QBC Crystal UHD",
        subtitle: "13’’ 24’’ 43’’ 50’’ 55’’ 65’’ 75’’ 85’’ 98’’"
      },
      {
        image: "/images/OHA.png",
        title: "OHA Outdoor",
        subtitle: "55’’ 75’’"
      }
    ],
    productsS: [
      {
        image: "/images/SamsungInteractive.png",
        title: "Interactive Screen",
        subtitle: "",
        name: "Samsung Interactive Screen Flip Pro WMB",
        sizes: ["55\" ", "65\" ", "75\" ", "85\" "],
        features: [
          "Fast & multi-touch",
          "3-in-1 USB-C port",
          "Video call applications"
        ],
      },
      {
        image: "/images/QMB.png",
        title: "Touch Screen",
        subtitle: "",
        name: "QMB-T UHD 4K Touch Display",
        sizes: ["43'' ", "55'' "],
        features: [
          "Powerful touch with Tizen",
          "3,840 x 2,160 UHD resolution",
          "non-glare glass"
        ]
      },
      {
        image: "/images/hospitality.png",
        title: "Hospitality TV",
        subtitle: "",
        name: "HU8000F UHD 4K Samsung Hotel TV",
        sizes: ["43'' ", "55'' ", "65'' ", "75'' "],
        features: [
          "4K UHD (3840 x 2160)",
          "Crystal Processor 4K",
          "3 Bezel-less, Black, Flat Lift Stand"
        ]
      }
      
    ],
    productsR: [
      {
        image: "/images/UWC.png",
        title: "Ultra Wide Curved Monitors",
        subtitle: "32’’ 34’’ 49’’"
      },
      {
        image: "/images/gamingMonitor.png",
        title: "Gaming Monitors",
        subtitle: "24’’ 27’’ 32’’ 43’’ 49’’"
      },
      {
        image: "/images/HRM.png",
        title: "High Resolution Monitors",
        subtitle: "22’’ 24’’ 27’’ 32’’"
      },
      {
        image: "/images/SmartMonitors.png",
        title: "Smart Monitors",
        subtitle: "32’’ 43’’"
      },
      {
        image: "/images/MSM.png",
        title: "Main Stream Monitors",
        subtitle: "19’’ 22’’ 24’’ 27’’"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...SamsungData} />
      <Footer />
    </div>
  );
}