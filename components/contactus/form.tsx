import Image from "next/image"
import locationIcon from '@/public/images/location.png';
import emailIcon from '@/public/images/email.png';
import phoneIcon from '@/public/images/phone.png';
import instagramIcon from '@/public/images/Instagram.svg';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  description?: string;
  location?: string;
  email?: string;
  phone?: string;
  formTitle?: string;
  showSocialMedia?: boolean;
}

export default function ContactForm({ 
  title = "Consult With Our Sales Team",
  subtitle = "We are Just a Call Away!",
  description = "Deploy premium visual infrastructure with Wise Vision. From upgrading corporate boardrooms and integrating large-scale outdoor SMDs to supplying authorized Samsung and Philips displays, our expert team is ready to guide your project.",
  location = "DHA Phase II, GT Road, Islamabad",
  email = "wisevision@gmail.com",
  phone = "+92 328 0344789",
  formTitle = "Get In Touch",
  showSocialMedia = true
}: ContactFormProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 items-start">
      {/* Left Section: Text and Contact Info */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-outfit text-[#08425D] font-bold mb-4">{title}</h2>
        <h3 className="text-xl md:text-2xl font-outfit text-black font-semibold mb-6">{subtitle}</h3>
        <p className="text-black text-lg font-outfit mb-6">{description}</p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-2 border border-gray-200 rounded-xl">
              <Image 
                src={locationIcon} 
                alt="Location" 
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
                <p className="font-outfit text-[#08425D] font-medium">Location</p>
                <p className="font-outfit text-[#9B9B9B]">{location}</p>
                </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 border border-gray-200 rounded-xl">
              <Image 
                src={emailIcon} 
                alt="Email" 
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="font-outfit text-[#08425D] font-medium">Email</p>
              <p className="font-outfit text-[#9B9B9B]">{email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 border border-gray-200 rounded-xl">
              <Image 
                src={phoneIcon} 
                alt="Phone" 
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <p className="font-outfit text-[#08425D] font-medium">Phone Number</p>
              <p className="font-outfit text-[#9B9B9B]">{phone}</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        {showSocialMedia && (
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-[#14A4E9] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
              aria-label="LinkedIn"
            >
              <span className="text-white text-sm font-bold">in</span>
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-9 sm:h-9 bg-[#14A4E9] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
              aria-label="Facebook"
            >
              <span className="text-white text-sm font-bold">f</span>
            </a>
            
            <Image 
              src={instagramIcon} 
              alt="Instagram" 
              width={8}
              height={8}
              className="w-8 h-8 sm:w-9 sm:h-9"
            />
          </div>
        )}
      </div>

      {/* Right Section: Form */}
      <div className="w-full lg:w-1/2 flex justify-end">
        <form className="bg-white rounded-xl border-1 border-[#9B9B9B] p-6 space-y-4 w-full max-w-[600px]">
          <div>
            <label className="block text-black font-outfit font-medium mb-2">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="enter your name"
              className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-black font-outfit font-medium mb-2">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              placeholder="enter your email"
              className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-black font-outfit font-medium mb-2">Contact Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              placeholder="+92 222-4444-333"
              className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-black font-outfit font-medium mb-2">Your Requirement</label>
            <textarea
              className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4}
              placeholder="Hi, I want to know about Indoor SMD's....."
            />
          </div>

          <button
            type="submit"
            className="w-[150px] bg-[#08425D] text-white font-outfit font-semibold py-3 px-6 rounded-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}