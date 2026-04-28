import ContactForm from "./contactus/form";

interface GetQuoteProps {
  onClose: () => void;
}

export default function GetQuote({ onClose }: GetQuoteProps) {
  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.25)' }}>
    <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col lg:flex-row px-6 pb-4 pt-16 gap-8">
        <ContactForm 
        showSocialMedia={false}
        title='Get Your Own SMD Screen'
        subtitle='We are Just a Call Away!'
        description='Looking to install a bright, digital display for your location? Wise Vision makes it simple. We provide complete services, from selling the best screens to full installation. Tell us what you need, and we will guide you step-by-step.'
        
        />
      </div>
    </div>
  </div>
  );
}