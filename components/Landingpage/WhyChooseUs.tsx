'use client';

const whyChooseUs = {
  title: "Why Choose Us?",
  features: [
    {
      title: "Customized Solutions",
      description: "Wise Vision's custom SMD screen solutions are manufactured to your exact specifications, guaranteeing a perfect fit for any project or setting. We give preference to your specific needs and educate you about best options for digital advertising of your Brand. Display your vision clearly with our excellent SMD screens, LED Display, and Samsung video walls!",
      icon: "/images/CSS.png"
    },
    {
      title: "Competitive Pricing",
      description: "Do you need quality with affordability? Wise Vision is your ultimate hub for high-definition SMD Screens in Pakistan. With a commitment to delivering exceptional value, we offer competitive SMD screen prices in Pakistan without compromising on quality. You won't regret getting a quote from us. Call us to get your desired SMD screen solution today!",
      icon: "/images/CPP.png"
    },
    {
      title: "Superior Quality",
      description: "We guarantee the best quality for all of your display needs with its superior SMD screens and sound integration. We always cater to enhance your brand's visibility with grace. Our top-notch LED Video Walls & SMD Screens help your brand shine on top. Experience elegance with our high-quality SMD screens and expert SMD screen installation services.",
      icon: "/images/SQQ.png"
    },
    {
      title: "Technical Assistance",
      description: "The exceptional technical support staff at Wise Vision is always available to help you. Our team is committed to providing smooth installation and upkeep for optimum performance. We never mind getting back to you if you have any technical issues regarding SMD screens. Just buzz our customer support team, and we will be there for you!",
      icon: "/images/TAA.png"
    }
  ]
};

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-medium text-[#14a4e9]">
            {whyChooseUs.title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-0 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseUs.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3">
                    <img 
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-outfit font-semibold text-gray-900 mb-3 text-left">
                  {feature.title}
                </h3>
                <p className="text-sm font-outfit font-normal text-gray-600 leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
