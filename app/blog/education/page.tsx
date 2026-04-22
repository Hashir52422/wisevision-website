import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogArticle from '@/components/blog/BlogArticle';
import Banner from '@/components/Products/banner';

const articleData = {
  title: "Philips Interactive Whiteboard for Schools & Offices in Pakistan",
  introduction:"Interactive whiteboards are rapidly replacing traditional chalk and marker boards in Pakistan's schools and corporate offices. The Philips Interactive Whiteboard, available through Wise Vision, is leading this transformation nationwide.",
  sections: [
    {
      title: "Benefits for Schools",
      content:"For educational institutions, the Philips Interactive Whiteboard enables teachers to display dynamic multimedia content, annotate over presentations in real-time, and engage students in a far more interactive and memorable way. Studies consistently show that students retain information better when lessons are visually dynamic and interactive."
    },
    {
      title: "Benefits for Corporate Offices",
      content:"In the corporate world, interactive whiteboards are revolutionizing meeting rooms. Teams can brainstorm digitally, share screens wirelessly, annotate over documents, and save all session content instantly — significantly improving meeting productivity and remote collaboration."
    },
    {
      title: "Wise Vision's Role",
      content:"As an authorized Philips distributor, Wise Vision offers competitive pricing, professional installation, staff training, and full warranty coverage on all interactive whiteboard products across Pakistan. Contact us to schedule a demo at your premises."
    }
  ],
  previousArticleLink: "/blog/phillips",
  nextArticleLink: "/blog/industry",
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
        title="Philips Interactive Whiteboard for Schools & Offices in Pakistan"
        description=""
        className="text-white"
      />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </div>
  );
}
