import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy Covered by Insurance Kenya | SHA & AAR | Stellar Physio",
  description: "Learn how to use your insurance or SHA for physiotherapy at Stellar Physio. We accept AAR, APA, Britam, CIC, Old Mutual, Minet, and more. View the claiming process.",
};

// 👇 Added image paths from your PartnersCarousel
const medicalInsurers = [
  { name: "AAR Insurance", src: "/images/aarlogo.png" },
  { name: "APA Insurance", src: "/images/apalogo.png" },
  { name: "Britam", src: "/images/britamlogo.png" },
  { name: "CIC Insurance", src: "/images/ciclogo.png" },
  { name: "Equity", src: "/images/equitylogo.png" },
  { name: "Fidelity Insurance", src: "/images/fidelitylogo.png" },
  { name: "Lucent Insurance", src: "/images/lucentlogo.png" },
  { name: "Minet", src: "/images/minetlogo.png" },
  { name: "Mtiba", src: "/images/mtibalogo.png" },
  { name: "MTN", src: "/images/mtnlogo.png" },
  { name: "Old Mutual", src: "/images/oldmutuallogo.png" },
  { name: "Sedgwick", src: "/images/sedgwicklogo.png" },
  { name: "SHA (Social Health Authority)", src: "/images/shalogo.png" },
  { name: "Unisure", src: "/images/unisurelogo.png" },
  { name: "Fast Assurance", src: "/images/fastassurancelogo.png" },
];

const corporatePartners = [
  { name: "Brookhouse", src: "/images/brookhouselogo.png" },
  { name: "Eagle Africa", src: "/images/eagleafricalogo.png" },
  { name: "Karen Country Club", src: "/images/karencountryclublogo.jpg" },
  { name: "KEBS", src: "/images/kebslogo.png" },
  { name: "Liaison Group", src: "/images/liasonlogo.png" },
  { name: "Parklands Sports Club", src: "/images/parklandssportsclublogo.jpg" },
  { name: "Parliamentary Service", src: "/images/parliamentaryservicelogo.png" },
  { name: "Star Discovery", src: "/images/stardiscoverylogo.png" },
  { name: "Tusker FC", src: "/images/tuskerfclogo.jpg" },
];

export default function InsuranceSHAPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      <section className="bg-purple py-16 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Physiotherapy Covered by Insurance & SHA
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We make accessing physiotherapy easy. Stellar Physio is a registered provider with major insurance companies, corporate partners, and the Social Health Authority (SHA) in Kenya.
          </p>
        </div>
      </section>

      <div className="container-custom mt-12 max-w-5xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* SHA Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4 border-b pb-4">
              <img 
                src="/images/shalogo.png" 
                alt="SHA - Social Health Authority Kenya Logo" 
                className="w-14 h-14 object-contain" 
              />
              <h2 className="text-2xl font-bold text-gray-900">How SHA Works</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you are registered with the Social Health Authority (SHA), your physiotherapy sessions can be covered. Here is how the process works at Stellar Physio:
            </p>
            <ul className="space-y-3 text-gray-600 mb-6 list-disc pl-5">
              <li><strong>Step 1:</strong> Bring your SHA card and a valid ID to your appointment.</li>
              <li><strong>Step 2:</strong> Our reception team will verify your coverage status in the SHA portal.</li>
              <li><strong>Step 3:</strong> We will process the pre-authorization (if required by SHA).</li>
              <li><strong>Step 4:</strong> You only pay the co-payment amount, if applicable.</li>
            </ul>
            <Link href="/contact" className="inline-block bg-green text-white px-6 py-3 rounded font-semibold hover:bg-green-dark transition w-full text-center">
              Contact Us to Verify SHA
            </Link>
          </div>

          {/* Private Insurance Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center gap-3 mb-4 border-b pb-4">
              <div className="w-12 h-12 bg-purple/10 text-purple rounded-full flex items-center justify-center font-bold text-xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Private Insurance</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We work directly with leading insurance providers to ensure a smooth claiming process. To use your private cover:
            </p>
            <ul className="space-y-3 text-gray-600 mb-6 list-disc pl-5">
              <li>You must obtain a referral letter from your doctor (if required by your insurer).</li>
              <li>Bring your insurance card and a valid ID.</li>
              <li>We will submit the invoice directly to your insurer.</li>
              <li>Any excess or co-payment will be settled at the clinic.</li>
            </ul>
            <Link href="/book-appointment" className="inline-block bg-purple text-white px-6 py-3 rounded font-semibold hover:bg-purple-dark transition w-full text-center">
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* Medical Insurers (Logos + Text) */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Medical Insurance Providers</h2>
          <p className="text-gray-600 mb-8">We are proud to partner with Kenya's leading medical insurers. If your provider is not listed here, please contact us to confirm.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {medicalInsurers.map((ins) => (
              <div key={ins.name} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg bg-gray-50 hover:shadow-md transition-shadow">
                <div className="h-16 w-full flex items-center justify-center mb-3">
                  {/* 👇 LOGO WITH DESCRIPTIVE ALT TEXT FOR SEO 👇 */}
                  <img 
                    src={ins.src} 
                    alt={`${ins.name} - Stellar Physio Physiotherapy Partner`} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center">{ins.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Partners (Logos + Text) */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Corporate & Institutional Partners</h2>
          <p className="text-gray-600 mb-8">We provide dedicated physiotherapy and wellness services to employees and members of the following organizations and clubs.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {corporatePartners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center justify-center p-4 border border-purple/10 rounded-lg bg-purple-light/30 hover:shadow-md transition-shadow">
                <div className="h-16 w-full flex items-center justify-center mb-3">
                  {/* 👇 LOGO WITH DESCRIPTIVE ALT TEXT FOR SEO 👇 */}
                  <img 
                    src={partner.src} 
                    alt={`${partner.name} - Corporate Wellness Partner of Stellar Physio`} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <span className="text-xs font-semibold text-purple-900 text-center">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Required (Clean SVG Icons) */}
        <div className="bg-purple-light p-8 rounded-xl border border-purple/20">
          <h2 className="text-2xl font-bold text-purple mb-6">Documents Required for Claiming</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-purple/10 text-purple flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. ID or Passport</h3>
              <p className="text-sm text-gray-600">Required for identity verification at the reception.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-purple/10 text-purple flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. Insurance/SHA Card</h3>
              <p className="text-sm text-gray-600">A valid, active medical card for you or your dependents.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col items-start">
              <div className="w-10 h-10 rounded-full bg-purple/10 text-purple flex items-center justify-center mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. Doctor's Referral</h3>
              <p className="text-sm text-gray-600">Required by certain insurance providers before physiotherapy.</p>
            </div>
            
          </div>
        </div>

      </div>
    </main>
  );
}
