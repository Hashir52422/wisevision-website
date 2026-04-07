'use client';

const reviews = [
  {
    name: 'Salman Ahmed',
    role: 'Head of IT Infrastructure',
    company: 'engro corp',
    companyStyle: 'text-[22px] font-light tracking-wide text-gray-700',
    comment:
      '"Arista Vision provided an exceptional indoor SMD solution for our executive spaces. The pixel density and color accuracy of the displays meet our strict corporate standards. Their engineering team executed the installation with precision and minimal disruption to our operations."',
    rating: 5,
    // ADD: avatar: salmanImg, (import your image)
  },
  {
    name: 'Kamran Bukhari',
    role: 'Director of Operations',
    company: 'GIGA MALL',
    companyStyle: 'text-[22px] font-black tracking-tight text-gray-900',
    comment:
      '"Operating a high-traffic retail environment requires digital infrastructure that runs 24/7 without failure. Arista Vision delivered massive, high-refresh-rate LED walls that have performed flawlessly. Their post-installation support and SLA fulfillment have been highly reliable."',
    rating: 5,
    // ADD: avatar: kamranImg,
  },
  {
    name: 'Usman Tariq',
    role: 'Project Director',
    company: 'BAHRIA TOWN',
    companyStyle: 'text-[14px] font-semibold tracking-widest text-gray-700 uppercase',
    comment:
      '"We required rugged, weatherproof LED infrastructure for our outdoor advertising network. Arista Vision integrated IP65-rated outdoor cabinets that withstand severe weather while maintaining peak brightness. Their structural engineering approach is solid and dependable."',
    rating: 5,
    // ADD: avatar: usmanImg,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

// Multicolor Google "G" logo in SVG
function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Header ──────────────────────────────────────────────────────────── */}
        <div className="text-center mb-10">
          <h2 className="text-[44px] font-outfit font-bold text-[#1a2e5a] mb-4">
            Hear From Our Partners
          </h2>
          <p className="text-[16px] text-gray-500 font-outfit leading-relaxed max-w-lg mx-auto">
            We believe in delivering uncompromised hardware quality and ensuring
            complete client satisfaction above all else.
          </p>
        </div>

        {/* ── Google trust badge ───────────────────────────────────────────────── */}
        <div className="flex flex-col items-center mb-16">
          <p className="text-[17px] font-outfit mb-2">
            <span className="font-black text-gray-900">EXCELLENT</span>{' '}
            <span className="text-gray-500">Based on </span>
            <span className="font-bold text-gray-900">50+ Reviews</span>
          </p>
          <StarRating count={5} />
          {/* Google wordmark */}
          <div className="mt-2 flex items-center gap-1">
            <GoogleG size={22} />
            <span className="text-[22px] font-normal" style={{ fontFamily: 'Product Sans, Arial, sans-serif' }}>
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
          </div>
        </div>

        {/* ── Review cards ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col justify-between">

              {/* Quote text */}
              <p className="text-[15px] font-outfit text-gray-700 leading-relaxed mb-8">
                {review.comment}
              </p>

              {/* Reviewer info row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Avatar circle — ADD your image here */}
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                    {/* ADD: <Image src={review.avatar} alt={review.name} width={48} height={48} className="object-cover" /> */}
                  </div>
                  <div>
                    <p className="text-[15px] font-outfit font-bold text-gray-900 leading-tight">
                      {review.name}
                    </p>
                    <p className="text-[13px] font-outfit text-gray-500">
                      {review.role}
                    </p>
                  </div>
                </div>
                {/* Google G badge */}
                <GoogleG size={26} />
              </div>

              {/* Stars + verified tick */}
              <div className="flex items-center gap-2 mb-4">
                <StarRating count={review.rating} />
                {/* Blue verified checkmark */}
                <svg className="w-5 h-5 text-[#1a73e8]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z"/>
                </svg>
              </div>

              {/* Company name */}
              <p className={review.companyStyle}>
                {review.company}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}