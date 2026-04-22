import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Banner from '@/components/Products/banner';
import BlogCard from '@/components/blog/blogCard';

const blogs = [
  { image: '/images/Blog1.png', title: 'Max Series SMD Screen vs Traditional LED Screens – Whats the Difference?', tag: 'SMD SCREENS', href: '/blog/smd-screens' },
  { image: '/images/Blog2.png', title: 'How Much Does an SMD Advertising Screen Cost in 2026?', tag: 'Pricing Guide', href: '/blog/pricing-guide' },
  { image: '/images/Blog3.png', title: 'Best Samsung Monitors in Pakistan 2026 – Specs, Features & Buying Guide', tag: 'Samsung', href: '/blog/samsung-1' },
  { image: '/images/Blog4.png', title: 'Everything You Need to Know About Monitors', tag: 'Monitors', href: '/blog/monitors' },
  { image: '/images/Blog5.png', title: 'Philips Interactive Board – Complete Overview', tag: 'Phillips', href: '/blog/phillips' },
  { image: '/images/Blog6.png', title: 'Philips Interactive Whiteboard for Schools & Offices in Pakistan', tag: 'Education', href: '/blog/education' },
  { image: '/images/Blog7.png', title: 'Top Industries Using SMD Screens in Pakistan', tag: 'Industry', href: '/blog/industry' },
  { image: '/images/Blog8.png', title: 'COB vs SMD LED Screens: Which Display Technology is Right for You?', tag: 'Technology', href: '/blog/technology' },
  { image: '/images/Blog9.png', title: 'Samsung Odyssey Gaming Monitor G40B – Full Review', tag: 'Samsung', href: '/blog/samsung-2' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Banner
        bannerImage="/images/bannerBlog.jpeg"
        bannerAlt="Blog Banner"
        title="Our Blogs"
        description="Stay updated with Wise Vision's latest insights on digital signage trends, industry innovations, and project case studies."
        className="text-white"
      />

      <main className="py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-9xl">
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-[#00AEEF] mb-4">
              Engineering the Future of Digital Signage with Wise Vision
            </h2>
            <p className="text-gray-600 text-base max-w-5xl mx-auto leading-relaxed">
              Access the latest technical insights, hardware innovations, and enterprise case studies from Wise Vision. Explore how our engineered display solutions and integration best practices are optimizing commercial visual communication nationwide.
            </p>
          </div>

          {/* Cards grid — 3 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, i) => (
              <BlogCard
                key={i}
                image={blog.image}
                title={blog.title}
                tag={blog.tag}
                href={blog.href}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
