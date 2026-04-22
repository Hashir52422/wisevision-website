import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import BlogArticle from '@/components/blog/BlogArticle';
import Banner from '@/components/Products/banner';

const articleData = {
  title: "Top Industries Using SMD Screens in Pakistan",
  introduction:"SMD LED screens have become indispensable across many industries in Pakistan. From high-traffic retail environments to corporate headquarters, these displays are delivering outstanding results across multiple sectors.",
  sections: [
    {
      title: "Retail & Shopping Malls",
      content:"Retail brands use SMD screens to display dynamic advertisements, promotions, and brand content. High-brightness outdoor screens attract foot traffic, while indoor video walls create immersive in-store experiences that convert browsers into buyers."
    },
    {
      title: "Corporate Sector",
      content:"Modern offices use fine-pitch SMD screens in lobbies, boardrooms, and open-plan areas for communications, KPI dashboards, and video conferencing. These screens project a professional image and significantly improve internal communications."
    },
    {
      title: "Healthcare & Education",
      content:"Hospitals and clinics use digital signage for wayfinding, queue management, and health awareness content. Universities and schools use large-format SMD displays for auditoriums, lecture halls, and public information boards. Wise Vision has installed screens across all of these sectors nationwide."
    }
  ],
  previousArticleLink: "/blog/education",
  nextArticleLink: "/blog/technology",
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
        title="Top Industries Using SMD Screens in Pakistan"
        description=""
        className="text-white"
      />
      
      <BlogArticle {...articleData} />
      
      <Footer />
    </div>
  );
}
