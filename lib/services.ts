export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  heroImageMobile?: string;
  introTitle: string;
  introText: string;
  introImage: string;
  techniquesTitle: string;
  techniquesList: { title: string; text: string }[];
  techniquesImage: string;
  benefitsTitle: string;
  benefitsList: string[];
  benefitsImage: string;
  ctaTitle: string;
  ctaText: string;
};

export const services: Service[] = [
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    shortDescription: "Restore movement, relieve pain, and improve physical function.",
    heroImage: "/images/hero2.JPG",
    heroImageMobile: "/images/hero2mobile.png",
    introTitle: "Physiotherapy at Stellar Physio Health & Wellness",
    introText: "Our physiotherapy services at Stellar Physio aim to restore movement, relieve pain, and improve physical function through evidence-based treatments. Whether you are recovering from an injury, managing a chronic condition, or looking to enhance mobility, our experienced physiotherapists provide personalized, hands-on therapy tailored to your unique needs.",
    introImage: "/images/physiotherapy.webp",
    techniquesTitle: "Our Physiotherapy Techniques",
    techniquesList: [
      { title: "Manual Therapy & Joint Mobilization:", text: "Hands-on techniques to restore movement and reduce stiffness." },
      { title: "Pain Management Modalities:", text: "Advanced methods like ultrasound therapy, heat therapy, and electrical stimulation (TENS) to reduce discomfort." },
      { title: "Stretching & Strengthening Exercises:", text: "Customized exercises to improve flexibility and muscular endurance." },
      { title: "Postural Correction & Ergonomic Training:", text: "Corrective strategies to reduce strain and prevent future injuries." },
      { title: "Gait & Balance Training:", text: "Essential for stroke rehabilitation and fall prevention." }
    ],
    techniquesImage: "/images/technique.webp",
    benefitsTitle: "Why Choose Our Physiotherapy Services?",
    benefitsList: [
      "Evidence-Based & Hands-On Treatment",
      "Customized Recovery Plans for Every Patient",
      "Experienced & Certified Physiotherapists",
      "Convenient Home-Based Therapy Available"
    ],
    benefitsImage: "/images/choose.webp",
    ctaTitle: "Affordable Physiotherapy in Nairobi",
    ctaText: "Looking for affordable physiotherapy near me or the best physiotherapy services in Nairobi? At Stellar Physio, we offer premium care at competitive rates to make quality healthcare accessible to all."
  },
  {
    slug: "chiropractor-services",
    title: "Chiropractor Services",
    shortDescription: "Diagnosis and treatment of mechanical disorders of the musculoskeletal system.",
    heroImage: "/images/hero1.jpeg",
    introTitle: "Chiropractor Services at Stellar Physio Health & Wellness",
    introText: "At Stellar Physio, we provide professional chiropractic care to help you achieve optimal spine health and alleviate pain. Our expert chiropractors specialize in diagnosing and treating conditions related to the musculoskeletal system, ensuring your body is aligned and functioning at its best.",
    introImage: "/images/chiropractor.webp",
    techniquesTitle: "Our Chiropractic Techniques",
    techniquesList: [
      { title: "Spinal Adjustments:", text: "Correct misalignments to relieve pressure." },
      { title: "Soft Tissue Therapy:", text: "Address muscle tightness and improve circulation." },
      { title: "Postural Education:", text: "Guidance on maintaining proper posture for long-term relief." },
      { title: "Rehabilitation Exercises:", text: "Strengthen and stabilize your body." }
    ],
    techniquesImage: "/images/chirotech.webp",
    benefitsTitle: "Why Stellar Physio for Chiropractic Services?",
    benefitsList: [
      "Experienced Chiropractors: Certified professionals dedicated to your care",
      "Holistic Approach: We combine chiropractic care with other wellness services",
      "Convenient Locations: Accessible clinics in Ngong Road, Karen, and Parklands",
      "Affordable Care: Premium services at competitive rates"
    ],
    benefitsImage: "/images/benefit1.webp",
    ctaTitle: "Book Your Chiropractic Session Today!",
    ctaText: "Align your body and rediscover pain-free living with Stellar Physio's chiropractic services. Call us at 0706 101 999."
  },
  {
    slug: "general-consultations",
    title: "General Consultations",
    shortDescription: "Comprehensive health evaluations and personalised treatment plans.",
    heroImage: "/images/hero3.jpg",
    introTitle: "General Consultations at Stellar Physio Health & Wellness",
    introText: "At Stellar Physio Health & Wellness, our general consultations serve as the foundation of your healthcare journey. Whether you are experiencing chronic pain, mobility challenges, or general health concerns, our experienced doctors will provide a thorough assessment, discuss your medical history, and create a personalised treatment plan. Our consultations ensure that we identify the root cause of your symptoms, rather than just treating the surface problem. If specialised care is needed, we will refer you to the right specialists, ensuring you receive the best possible treatment for your condition.",
    introImage: "/images/consultation2.webp",
    techniquesTitle: "What to Expect in a General Consultation",
    techniquesList: [
      { title: "Comprehensive Health Evaluation:", text: "A deep dive into your medical history, current symptoms, and lifestyle." },
      { title: "Physical Examination:", text: "A detailed check-up focusing on mobility, posture, and pain points." },
      { title: "Diagnosis & Specialist Referral:", text: "If necessary, you'll be referred to a specialist such as a physiotherapist, chiropractor, or orthopedic expert." },
      { title: "Health & Lifestyle Recommendations:", text: "Advice on nutrition, posture, and lifestyle changes that can help prevent and manage conditions." },
      { title: "Preventive Care & Early Intervention:", text: "Early detection of issues to prevent chronic conditions and long-term complications." }
    ],
    techniquesImage: "/images/clinicinterior.webp",
    benefitsTitle: "Why Choose Stellar Physio for General Consultations?",
    benefitsList: [
      "Expert Medical Evaluation & Personalised Treatment Plans",
      "Seamless Referral to Top Specialists",
      "Holistic & Preventive Health Approach",
      "Focused on Your Long-Term Well-being"
    ],
    benefitsImage: "/images/clinicinterior.webp",
    ctaTitle: "Affordable Consultation Costs in Nairobi",
    ctaText: "At Stellar Physio, we believe quality healthcare should be accessible. Our competitive pricing ensures you get the best services at an affordable rate."
  },
  // ---- Add the rest of your services below by copying the template ----
  // {
  //   slug: "home-based-care",
  //   title: "Home-Based Care",
  //   shortDescription: "...",
  //   heroImage: "/images/...",
  //   ...
  // },
  // Repeat for: counselling-services, nutritional-services, occupational-therapy, pharmacy, reflexology, sports-massage, stellar-laboratory-services, stretch-exercise-therapy
];