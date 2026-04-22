import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogArticle from '@/components/blog/BlogArticle';
import Banner from '@/components/Products/banner';

const articleData = {
  title: "Everything You Need to Know About Monitors",
  introduction:"Whether you're buying your first monitor or upgrading an existing setup, understanding the key specifications will help you get the most value for your investment.",
  sections: [
    {
      title: "Resolution: The Foundation of Image Quality",
      content:"Resolution determines how many pixels are on the screen. Full HD (1920×1080) is the standard for general use, QHD (2560×1440) is great for professional work, and 4K (3840×2160) delivers exceptional detail for content creation and high-end entertainment.",
    },
    {
      title: "Panel Types: IPS, VA, or TN?",
      content:"IPS panels offer the best color accuracy and viewing angles, making them ideal for designers. VA panels have excellent contrast ratios, perfect for watching movies in dark rooms. TN panels are the fastest, typically used in competitive gaming setups where response time is critical.",
    },
    {
      title: "Refresh Rate and Response Time",
      content:"For general office use, 60Hz is perfectly sufficient. For gaming, you want at least 144Hz, and competitive gamers often prefer 240Hz or higher. Response time should be 1–5ms for gaming to avoid ghosting during fast motion. Wise Vision's experts can help you select the perfect monitor for your needs and budget.",
    }
  ],
  previousArticleLink: "/blog/samsung-1",
  nextArticleLink: "/blog/phillips",
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
        title="Everything You Need to Know About Monitors"
        description=""
        className="text-white"
      />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </div>
  );
}
