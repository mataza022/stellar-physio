import Link from "next/link";

const stages = [
  {
    num: 1,
    title: "You Get in Touch",
    text: "Book online, call, or WhatsApp your nearest branch. Tell us your name, contact details, and a brief description of what's going on — that's all we need to get started.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "We Confirm",
    text: "Our team reaches out within a few hours to lock in your appointment time and answer any questions. You'll receive a reminder before your visit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="9 12 12 15 16 11" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Your First Visit",
    text: "Plan for a 60-minute assessment. Bring your ID, insurance card (if applicable), any relevant medical reports, and comfortable clothing. We'll take a full history, examine you, explain our findings, and usually begin treatment the same day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Your Treatment Plan",
    text: "You'll leave knowing your diagnosis, how many sessions are recommended, what happens at each, and what you can do at home. We'll also give you an estimated timeline for recovery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <path d="M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: 5,
    title: "Progress Reviews",
    text: "At every session we check how you're responding and adjust the plan as needed. Milestones are reviewed regularly to make sure you're progressing toward your goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    num: 6,
    title: "Discharge or Maintenance",
    text: "When you've reached your goals, we transition you to a self-management plan — home exercises, lifestyle advice and periodic check-ins. For ongoing needs, we offer maintenance sessions and package options.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function PatientJourneyPage() {
  return (
    <>
      <section className="pt-20 pb-10 bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-green font-bold uppercase tracking-widest text-xs mb-3">
            Patient Journey
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            What to Expect When You Visit
          </h1>
          <p className="text-gray-600 text-lg">
            From your first message to your last session — here's exactly how
            the process works at Stellar Physio.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-8">
            {stages.map((stage, i) => (
              <div key={stage.num} className="relative flex gap-5 md:gap-6">
                {i < stages.length - 1 && (
                  <div className="absolute left-6 md:left-7 top-14 bottom-[-2rem] w-0.5 bg-purple-light" />
                )}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple text-white flex items-center justify-center shadow-md">
                    {stage.icon}
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-xs font-bold text-green uppercase tracking-widest mb-1">
                    Step {stage.num}
                  </p>
                  <h2 className="text-lg md:text-xl font-bold text-purple mb-3">
                    {stage.title}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {stage.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-purple-light mb-8">
            Book your first appointment today — we'll take it from there.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-green text-white px-8 py-3 rounded font-semibold hover:bg-green-dark transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
