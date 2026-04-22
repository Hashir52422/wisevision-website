import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogArticle from '@/components/blog/BlogArticle';
import Banner from '@/components/Products/banner';

const articleData = {
  title: "COB vs SMD LED Screens: Which Display Technology is Right for You?",
  introduction:"Two technologies dominate the indoor fine-pitch LED display market right now: COB (Chip on Board) and SMD (Surface-Mounted Device). Both have their strengths, and choosing the right one depends entirely on your use case, environment, and budget.",
  sections: [
    {
      title: "Understanding SMD Technology",
      content:"SMD has been the industry standard for over a decade. It packages individual RGB LEDs into small surface-mounted components, offering proven reliability, wide availability, and excellent color performance. Pixel pitches as fine as P0.9 are now available in the SMD format."
    },
    {
      title: "Understanding COB Technology",
      content:"COB technology directly bonds LED chips to the PCB without individual packaging. This results in a more robust, seamless display surface that is highly resistant to physical damage, dust, and moisture — ideal for environments where people might touch the screen or where durability is paramount."
    },
    {
      title: "Which Should You Choose?",
      content:"If you need a proven, cost-effective fine-pitch display for a corporate or retail environment, SMD is the right choice. If you need maximum durability and a completely seamless surface for public-facing installations, COB is worth the premium investment. Wise Vision offers both technologies."
    }
  ],
  previousArticleLink: "/blog/industry",
  nextArticleLink: "/blog/samsung-2",
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
        title="COB vs SMD LED Screens: Which Display Technology is Right for You?"
        description=""
        className="text-white"
      />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </div>
  );
}
