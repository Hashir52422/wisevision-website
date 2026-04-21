import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Reviews from '@/components/Landingpage/Reviews';
import Affiliation from '@/components/affilation/certificates';

export default function AffiliationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
     <Affiliation />
      <Reviews />

      <Footer />
    </div>
  );
}