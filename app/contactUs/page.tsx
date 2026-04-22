import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import ContactForm from '@/components/contactus/form';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {/* Google Map */}
        <div className="w-[1520px] h-[420px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.805300156554!2d74.44179207527236!3d31.47454164940548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909b1e1decc51%3A0xe2485a6821d260fa!2sGame%20Stop!5e0!3m2!1sen!2s!4v1776682332375!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[1520px] h-[420px]"
          />
        </div>

        <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-16">
          <ContactForm />
        </div>
       </main>
      <Footer />
    </div>
  );
}