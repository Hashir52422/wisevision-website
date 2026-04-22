import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogArticle from '@/components/blog/BlogArticle';
import Banner from '@/components/Products/banner';

const articleData = {
  title: "Samsung Odyssey Gaming Monitor G40B – Full Review",
  introduction:"The Samsung Odyssey G40B is one of the most talked-about gaming monitors of 2026. With a blazing-fast refresh rate, vibrant IPS panel, and a sleek design, it is aimed squarely at competitive gamers who refuse to compromise.",
  sections: [
    {
      title: "Display Specifications",
      content:"The G40B features a 27-inch Full HD IPS panel with a 240Hz refresh rate and an ultra-fast 1ms (GTG) response time. The IPS technology ensures wide viewing angles and accurate colors — a rarity at this refresh rate, which is traditionally dominated by TN panels."
    },
    {
      title: "Gaming Performance",
      content:"In fast-paced titles, the 240Hz panel delivers an incredibly smooth experience with virtually no ghosting. The monitor supports both AMD FreeSync Premium and NVIDIA G-Sync compatibility, ensuring tear-free gaming regardless of your GPU brand."
    },
    {
      title: "Design & Connectivity",
      content:"The minimalist stand allows tilt, height, and pivot adjustment. Connectivity includes two HDMI 2.0 ports and one DisplayPort 1.2. At its price point it represents exceptional value for competitive gamers in Pakistan. Wise Vision is an authorized Samsung distributor — reach out for latest pricing and availability."
    }
  ],
  previousArticleLink: "/blog/technology",
  nextArticleLink: "/blog/smd-screens",
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
        title="Samsung Odyssey Gaming Monitor G40B – Full Review"
        description=""
        className="text-white"
      />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </div>
  );
}
