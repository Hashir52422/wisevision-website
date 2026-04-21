import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Banner from '@/components/Products/banner';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import Affiliation from '@/components/affilation/certificates';
import Reviews from '@/components/Landingpage/Reviews';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Banner Section */}
        <Banner
          bannerImage="/images/BannerAboutUs.png"
          bannerAlt="About Us Banner"
          title="About Us"
          description="Wise Vision is Pakistan’s premier integrator of indoor and outdoor digital displays. As the exclusive Lampro distributor and official partner for Samsung, Philips, and LianTronics, we deliver engineered, commercial-grade visual infrastructure nationwide."
          className="text-white text-lg"
        />

        {/* Your Project, Our Execution */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8">
              <div className="w-full md:w-5/12 pl-4 md:pl-8">
                <img
                  src="/images/AboutUs2.png"
                  alt="Wise Vision Project Execution"
                  className="rounded-2xl w-full max-w-md object-cover"
                />
              </div>
              <div className="w-full md:w-7/12 pr-4 md:pr-8 pt-2">
                <h2 className="text-4xl md:text-5xl font-outfit font-bold text-[#08425D] mb-6">
                  Your Project, Our Execution
                </h2>
                <p className="text-black text-lg md:text-xl leading-relaxed">
                  Wise Vision delivers precision-engineered SMD screen solutions backed by an expert technical support team. We focus on integrating high-end commercial displays that meet your exact specifications and operational requirements. Our official distribution network includes the world&apos;s top manufacturers—Samsung, Philips, LianTronics, and exclusive authorization for Lampro. From initial project consultation to comprehensive after-sales technical support, we ensure your indoor and outdoor digital displays operate with absolute reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Building a Better Way + Timeline */}
     <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
      {/* Left: Story */}
      <div className="w-full md:w-1/2 pl-9">
        {/* Increased heading size to text-4xl/5xl */}
        <h2 className="text-3xl md:text-4xl font-outfit font-bold text-[#08425D] mb-8 leading-tight">
          Building a Better Way to Experience Commercial SMDs
        </h2>
        {/* Increased text size to text-lg and added max-w-md to force more lines */}
        <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-md">
          For the past 9 years, Wise Vision has been redefining how enterprises deploy and experience digital display technology. We recognized the need for a more reliable, engineering-focused approach to indoor and outdoor visual infrastructure. Through strategic growth and strict technical compliance, we evolved into Pakistan&apos;s premier integration partner. Today, backed by our exclusive authorization for Lampro and official partnerships with Samsung, Philips, and LianTronics, we deliver precision-engineered SMD solutions and uncompromising technical support.
        </p>
      </div>

      {/* Right: Timeline */}
      {(() => {
        const items = [
          {
            year: '2017',
            title: 'Foundation & Initial Operations',
            desc: "Wise Vision was established to address the growing demand for professional digital displays. Our initial operations focused on building a core engineering team and executing foundational indoor and outdoor screen integrations across Pakistan's commercial sector.",
          },
          {
            year: '2019',
            title: 'Exclusive Lampro Partnership & Expansion:',
            desc: 'Achieved a critical operational milestone by officially becoming the Exclusive Authorized Distributor for Lampro (Unilumin Group) in Pakistan. This established our technical capacity to supply 100% genuine, tier-1 display hardware directly from the manufacturer.',
          },
          {
            year: '2026',
            title: 'Today',
            desc: 'After 9 years of continuous growth, Wise Vision operates as a comprehensive visual infrastructure integrator. Our current distribution portfolio includes official partnerships with Samsung, Philips, LianTronics, and Lampro, backed by nationwide engineering deployment and enterprise-grade support.',
          },
        ];
        return (
          <div className="w-full md:w-1/2 relative">
            {/* Solid line from top to ~2/3 */}
            <div className="absolute left-[9px] top-2 w-0.5 bg-[#8D919E]" style={{ height: 'calc(66.66% - 8px)' }} />
            {/* Gradient fade from last dot to bottom */}
            <div className="absolute left-[9px] w-0.5" style={{ top: 'calc(66.66% - 8px)', bottom: '0', background: 'linear-gradient(to bottom, #7A7F8E, #FAFAFA)' }} />
            <div className="flex flex-col gap-8">
              {items.map((item, i) => (
                <div key={i} className="flex gap-6 relative">
                  <div className="w-5 h-5 rounded-full bg-[#00AEEF] shrink-0 mt-1 z-10" />
                  <div className="pb-2">
                    <p className="text-[#08425D] font-outfit font-semibold text-lg mb-1">{item.year}</p>
                    <h4 className="text-[#08425D] font-outfit font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  </div>
</section>

        {/* Stats */}
<section className="py-12">
  <div className="container mx-auto px-4">
    {/* Adding max-w-5xl (or 4xl) and mx-auto shrinks the overall width 
      of the stats group and creates the large side gaps you requested.
    */}
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: '800+', label: 'Projects Completed' },
          { value: '50+', label: 'Team Members' },
          { value: '500+', label: 'Happy Clients' },
          { value: '9+', label: 'Years Experience' },
        ].map((stat, i) => (
          <div 
            key={i} 
            /* Changed border-gray-200 to border-gray-400 for a darker line */
            className="border border-gray-400 rounded-2xl p-6 text-center shadow-sm"
          >
            <p className="text-4xl font-outfit text-[#00AEEF] mb-2">
              {stat.value}
            </p>
            <p className="text-gray-600 text-sm font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      </main>
      
      <Affiliation />
      <WhyChooseUs />
      <Reviews />
      <Footer />
    </div>
  );
}