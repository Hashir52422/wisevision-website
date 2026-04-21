     
     export default function Affiliation()
     {
        return (
     <>
     
     {/* Hero Section */}
      <div className="py-16 md:py-24 pb-0">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit text-[#14A4E9] mb-6">
            Our Affiliations
          </h1>
          <p className="text-lg md:text-xl text-black font-semibold max-w-3xl mx-auto leading-relaxed">
        Authorized Integration Partner for Global Display Brands
          </p> <br />
          <p className="text-lg md:text-xl text-[#7A7F8E] max-w-5xl mx-auto leading-relaxed ">
    Wise Vision is a certified distributor for the world's leading commercial display manufacturers. As the Exclusive Authorized Distributor for Lampro (Unilumin Group) in Pakistan since 2019, we supply 100% genuine products and are fully authorized to conduct project consultation, technical support, and after-sales services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-8">
        <div className="container mx-auto px-4 space-y-20">
          
          {/* Certifications Section */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-8">
              {/* Lampro Certificate */}
              <div className="flex flex-col items-center">
                <div className="w-90 h-90 md:w-150 md:h-150 p-4 flex items-center justify-center">
                  <img
                    src="/images/lamproo.jpg"
                    alt="Lampro Certificate"
                    className="max-w-full max-h-full object-contain border-2 border-black"
                  />
                </div>
                <p className="text-[30px] font-outfit font-semibold text-gray-900 mt-1">
                  Lampro (Unilumin Group)
                </p>
              </div>

              {/* CA Certificate */}
              <div className="flex flex-col items-center">
                <div className="w-90 h-90 md:w-150 md:h-150 p-4 flex items-center justify-center">
                  <img
                    src="/images/CA.jpg"
                    alt="CA Certificate"
                    className="max-w-full max-h-full object-contain border-2 border-black"
                  />
                </div>
                <p className="text-[30px] font-outfit font-semibold text-gray-900 mt-1">
                  Certificate of Authorization
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
</>
        );
    }
