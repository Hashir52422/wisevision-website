import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogArticle from '@/components/blog/BlogArticle';
import Banner from '@/components/Products/banner';

const articleData = {
  title: "Best Samsung Monitors in Pakistan 2026 – Specs, Features & Buying Guide",
  introduction: "Samsung continues to lead the monitor market in 2026 with a lineup that caters to gamers, designers, and business professionals alike. If you're looking for the best Samsung monitor in Pakistan, this guide will help you make the right choice.",
  sections: [
    {
      title: "Samsung ViewFinity S8 – For Creative Professionals",
      content:"The ViewFinity S8 is a 4K UHD IPS monitor with factory-calibrated color accuracy. It supports Thunderbolt 4 connectivity, making it ideal for designers, video editors, and architects who need precise color reproduction in their daily workflow.",
    },
    {
      title: "Samsung Odyssey G7 – For Gamers",
      content:"The Odyssey G7 features a 240Hz refresh rate, 1ms response time, and a QHD curved panel. With G-Sync and FreeSync Premium Pro support, it eliminates screen tearing completely for a buttery-smooth gaming experience.",
    },
    {
      title: "Samsung Smart Monitor M8 – For Remote Workers",
      content:"The M8 is a 32-inch 4K smart monitor with built-in streaming apps, a built-in webcam, and USB-C charging. It works without a PC, making it incredibly versatile for modern home offices. Wise Vision is an authorized Samsung distributor — contact us for the latest pricing and availability.",
    }
  ],
  previousArticleLink: "/blog/pricing-guide",
  nextArticleLink: "/blog/monitors",
  otherArticles: [
    { image: '/images/1.png', title: 'Max Series SMD Screen vs Traditional LED Screens - What\'s the Difference?', href: '#' },
    { image: '/images/1.png', title: 'Max Series SMD Screen vs Traditional LED Screens - What\'s the Difference?', href: '#' },
    { image: '/images/1.png', title: 'Max Series SMD Screen vs Traditional LED Screens - What\'s the Difference?', href: '#' },
    { image: '/images/1.png', title: 'Max Series SMD Screen vs Traditional LED Screens - What\'s the Difference?', href: '#' },
    { image: '/images/1.png', title: 'Max Series SMD Screen vs Traditional LED Screens - What\'s the Difference?', href: '#' }
  ]
};

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner
        bannerImage="/images/bannerBlog.jpeg"

        bannerAlt="Blog Banner"
        title="Best Samsung Monitors in Pakistan 2026 – Specs, Features & Buying Guide"
        description=""
        className="text-white"
      />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </div>
  );
}
