import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogArticle from '@/components/blog/BlogArticle';
import Banner from '@/components/Products/banner';

const articleData = {
  title: "Philips Interactive Board – Complete Overview",
  introduction:"The Philips Interactive Board is transforming how businesses and educational institutions conduct meetings, training sessions, and collaborative work. Here is everything the Philips interactive lineup has to offer.",
  sections: [
    {
      title: "What Makes It 'Interactive'?",
      content:"Unlike a traditional display, the Philips Interactive Board responds to touch input — allowing multiple users to draw, write, annotate, and manipulate content simultaneously. Most models support 20+ simultaneous touch points, enabling genuinely collaborative sessions."
    },
    {
      title: "Key Features",
      content:"The board comes with a built-in Android operating system, built-in speakers, a front-facing camera for video conferencing, and compatibility with Microsoft Teams, Zoom, and Google Meet. The 4K UHD display ensures crystal-clear visuals even in large meeting rooms."
    },
    {
      title: "Ideal Applications",
      content:"These boards are perfect for corporate boardrooms, university lecture halls, school classrooms, training centers, and design studios. Wise Vision supplies and installs Philips Interactive Boards across Pakistan with full after-sales support."
    }
  ],
  previousArticleLink: "/blog/monitors",
  nextArticleLink: "/blog/education",
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
        title="Philips Interactive Board – Complete Overview"
        description=""
        className="text-white"
      />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </div>
  );
}
