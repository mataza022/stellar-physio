export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  heroImageMobile?: string;
  introTitle: string;
  introText: string;
  introImage: string;
  offeringsTitle: string;
  offeringsList: string[];
  offeringsImage: string;
  whyChooseTitle: string;
  whyChooseList: string[];
  pricingTitle: string;
  pricingText: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  faqs?: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "general-consultations",
    title: "General Consultations",
    shortDescription: "Comprehensive health evaluations and personalised treatment plans.",
    heroImage: "/images/hero3.jpg",
    introTitle: "General Consultations at Stellar Physio Health & Wellness",
    introText: "At Stellar Physio Health & Wellness, our general consultations serve as the foundation of your healthcare journey. Whether you are experiencing chronic pain, mobility challenges, or general health concerns, our experienced doctors will provide a thorough assessment, discuss your medical history, and create a personalised treatment plan. Our consultations ensure that we identify the root cause of your symptoms, rather than just treating the surface problem. If specialised care is needed, we will refer you to the right specialists, ensuring you receive the best possible treatment for your condition.",
    introImage: "/images/consultation2.webp",
    offeringsTitle: "What to Expect in a General Consultation",
    offeringsList: [
      "Comprehensive Health Evaluation: A deep dive into your medical history, current symptoms, and lifestyle.",
      "Physical Examination: A detailed check-up focusing on mobility, posture, and pain points.",
      "Diagnosis & Specialist Referral: If necessary, you'll be referred to a specialist such as a physiotherapist, chiropractor, or orthopedic expert.",
      "Health & Lifestyle Recommendations: Advice on nutrition, posture, and lifestyle changes that can help prevent and manage conditions.",
      "Preventive Care & Early Intervention: Early detection of issues to prevent chronic conditions and long-term complications."
    ],
    offeringsImage: "/images/clinicinterior.webp",
    whyChooseTitle: "Why Choose Stellar Physio for General Consultations?",
    whyChooseList: [
      "Expert Medical Evaluation & Personalised Treatment Plans",
      "Seamless Referral to Top Specialists",
      "Holistic & Preventive Health Approach",
      "Focused on Your Long-Term Well-being"
    ],
    pricingTitle: "Affordable Consultation Costs in Nairobi",
    pricingText: "At Stellar Physio, we believe quality healthcare should be accessible. Our competitive pricing ensures you get the best services at an affordable rate.",
    ctaTitle: "Affordable Consultation Costs in Nairobi",
    ctaText: "At Stellar Physio, we believe quality healthcare should be accessible. Our competitive pricing ensures you get the best services at an affordable rate.",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "chiropractor-services",
    title: "Chiropractor Services",
    shortDescription: "Diagnosis and treatment of mechanical disorders of the musculoskeletal system.",
    heroImage: "/images/hero1.jpeg",
    introTitle: "Chiropractor Services at Stellar Physio Health & Wellness",
    introText: "At Stellar Physio, we provide professional chiropractic care to help you achieve optimal spine health and alleviate pain. Our expert chiropractors specialize in diagnosing and treating conditions related to the musculoskeletal system, ensuring your body is aligned and functioning at its best.",
    introImage: "/images/chiropractor.webp",
    offeringsTitle: "Our Chiropractic Techniques",
    offeringsList: [
      "Spinal Adjustments: Correct misalignments to relieve pressure.",
      "Soft Tissue Therapy: Address muscle tightness and improve circulation.",
      "Postural Education: Guidance on maintaining proper posture for long-term relief.",
      "Rehabilitation Exercises: Strengthen and stabilize your body."
    ],
    offeringsImage: "/images/chirotech.webp",
    whyChooseTitle: "Why Stellar Physio for Chiropractic Services?",
    whyChooseList: [
      "Experienced Chiropractors: Certified professionals dedicated to your care",
      "Holistic Approach: We combine chiropractic care with other wellness services for comprehensive treatment",
      "Convenient Locations: Accessible clinics in Ngong Road, Karen, and Parklands",
      "Affordable Care: Premium services at competitive rates"
    ],
    pricingTitle: "Benefits of Chiropractic Care",
    pricingText: "Chiropractic care focuses on restoring balance to your spine and musculoskeletal system, promoting natural healing and overall wellness. It's an effective, non-invasive solution for managing pain, improving mobility, and enhancing your quality of life. Conditions we treat include Chronic Back Pain, Neck Pain and Stiffness, Sciatica, Headaches and Migraines related to spinal misalignment, Sports Injuries, Postural Issues, and Joint Pain and Arthritis.",
    ctaTitle: "Book Your Chiropractic Session Today!",
    ctaText: "Align your body and rediscover pain-free living with Stellar Physio's chiropractic services. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    shortDescription: "Restore movement, relieve pain, and improve physical function.",
    heroImage: "/images/hero2.JPG",
    heroImageMobile: "/images/hero2mobile.png",
    introTitle: "Physiotherapy at Stellar Physio Health & Wellness",
    introText: "Our physiotherapy services at Stellar Physio aim to restore movement, relieve pain, and improve physical function through evidence-based treatments. Whether you are recovering from an injury, managing a chronic condition, or looking to enhance mobility, our experienced physiotherapists provide personalized, hands-on therapy tailored to your unique needs.",
    introImage: "/images/physiotherapy.webp",
    offeringsTitle: "Our Physiotherapy Techniques",
    offeringsList: [
      "Manual Therapy & Joint Mobilization: Hands-on techniques to restore movement and reduce stiffness.",
      "Pain Management Modalities: Advanced methods like ultrasound therapy, heat therapy, and electrical stimulation (TENS) to reduce discomfort.",
      "Stretching & Strengthening Exercises: Customized exercises to improve flexibility and muscular endurance.",
      "Postural Correction & Ergonomic Training: Corrective strategies to reduce strain and prevent future injuries.",
      "Gait & Balance Training: Essential for stroke rehabilitation and fall prevention."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Choose Our Physiotherapy Services?",
    whyChooseList: [
      "Evidence-Based & Hands-On Treatment",
      "Customized Recovery Plans for Every Patient",
      "Experienced & Certified Physiotherapists",
      "Convenient Home-Based Therapy Available"
    ],
    pricingTitle: "Who Can Benefit from Physiotherapy?",
    pricingText: "Our physiotherapy services are ideal for Chronic Pain Patients (back pain, arthritis, knee pain, neck pain), Post-Surgery Rehabilitation Patients (joint replacement, spinal surgery, fractures), Neurological Conditions (stroke, multiple sclerosis, Parkinson's disease), Sports Injuries & Muscle Strains (sprains, ligament injuries, runner's knee), and Workplace Injury & Postural Issues (ergonomic concerns, repetitive strain injuries).",
    ctaTitle: "Affordable Physiotherapy in Nairobi",
    ctaText: "Looking for affordable physiotherapy near me or the best physiotherapy services in Nairobi? At Stellar Physio, we offer premium care at competitive rates to make quality healthcare accessible to all.",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "home-based-care",
    title: "Home-Based Care",
    shortDescription: "Expert therapy brought to your doorstep.",
    heroImage: "/images/homecare.jpeg",
    introTitle: "Home-Based Care at Stellar Physio Health & Wellness",
    introText: "At Stellar Physio, we bring expert care to your doorstep, ensuring you receive professional therapy in the comfort and familiarity of your home. Our home-based care services are designed to cater to individuals who face mobility challenges or prefer personalized care within their private space.",
    introImage: "/images/elderlycare.webp",
    offeringsTitle: "Our Home-Based Care Services Include:",
    offeringsList: [
      "Physiotherapy: Targeted treatments for pain relief, mobility restoration, and injury recovery.",
      "Massage Therapy: Relaxation and recovery in the comfort of your home.",
      "Chiropractic Care: Alignment and pain management without the need to visit a clinic.",
      "Exercise Therapy: Guided physical activity to strengthen muscles and improve function."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Stellar Physio for Home-Based Care?",
    whyChooseList: [
      "Certified Specialists: Experienced physiotherapists, chiropractors, and massage therapists.",
      "Flexible Scheduling: Appointments designed to suit your routine.",
      "Holistic Care: Comprehensive services to address both physical and emotional well-being."
    ],
    pricingTitle: "Conditions Best Suited for Home-Based Care",
    pricingText: "Our expert physiotherapists and wellness specialists provide home-based care for: Stroke Rehabilitation, Cerebral Palsy Management, Post-Operative Care (Total Knee Replacement, Total Hip Replacement), Postnatal Spine Care, and Elderly and Bedridden Patients.",
    ctaTitle: "Affordable Home-Based Care in Nairobi",
    ctaText: "Looking for affordable Home-based Care services in Nairobi? At Stellar Physio, we offer premium care at competitive rates.",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "stellar-laboratory-services",
    title: "Stellar Laboratory Services",
    shortDescription: "Accurate and timely diagnostic tests.",
    heroImage: "/images/lab.webp",
    introTitle: "Testing For a Healthier Tomorrow!",
    introText: "At Stellar Physio Health & Wellness Centre, we understand that accurate and timely diagnostic tests are a cornerstone of effective healthcare. Our state-of-the-art laboratory services are designed to provide reliable results, supporting your journey toward optimal health and well-being.",
    introImage: "/images/lab1.webp",
    offeringsTitle: "Comprehensive Testing Services",
    offeringsList: [
      "Routine Checkups: General health screenings and blood work to monitor your overall well-being.",
      "Specialized Testing: Hormonal profiles, Thyroid function tests, Diabetes screening and monitoring.",
      "Infectious Disease Testing: Malaria and typhoid tests, COVID-19 PCR and antigen tests.",
      "Pre-Employment Screening: Comprehensive medical tests for new hires.",
      "Post-Treatment Monitoring: Follow-up testing to track recovery progress."
    ],
    offeringsImage: "/images/consultation.webp",
    whyChooseTitle: "Why Choose Our Laboratory Services?",
    whyChooseList: [
      "Precision: Accurate and reliable test results.",
      "Efficiency: Timely services to minimize waiting periods.",
      "Affordability: Competitive pricing without compromising on quality.",
      "Convenience: Accessible locations in Nairobi, including Ngong Road, Karen, and Westlands."
    ],
    pricingTitle: "Convenience and Accessibility",
    pricingText: "With branches across Nairobi, including Ngong Road, Karen, and Parklands, our laboratory services are designed to be accessible to everyone. Whether you're searching for affordable lab services near me or require specialized testing, Stellar Physio is here for you.",
    ctaTitle: "Affordable Laboratory Services in Nairobi",
    ctaText: "Don't wait to get the answers you need. Stellar Physio Health & Wellness Centre is committed to delivering accurate results and exceptional care. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment Today!",
    faqs: [
      { question: "What lab tests does Stellar Physio offer?", answer: "We offer routine health screenings, hormonal and thyroid profiles, diabetes screening, infectious disease testing including malaria, typhoid and COVID-19, pre-employment screening, and post-treatment monitoring." },
      { question: "How do I book a laboratory test?", answer: "You can book online or by phone, then visit your nearest branch for sample collection." },
      { question: "How will I receive my results?", answer: "Results are delivered via email or can be picked up in person at your branch." },
      { question: "Which branches offer laboratory services?", answer: "Laboratory services are available at our Ngong Road, Karen, and Parklands branches." }
    ]
  },
  {
    slug: "pharmacy",
    title: "Pharmacy",
    shortDescription: "Trusted medications and personalized care.",
    heroImage: "/images/pharmacy1.webp",
    introTitle: "Providing Trusted Medications & Personalized Care.",
    introText: "At Stellar Physio Health & Wellness Centre, we understand the importance of accessible, reliable, and high-quality medication for your health journey. Our pharmacy is dedicated to ensuring that you receive the right medications and professional guidance to support your recovery and well-being.",
    introImage: "/images/pharmacyshelves.webp",
    offeringsTitle: "Our Pharmacy Services",
    offeringsList: [
      "Prescription Medications: Comprehensive selection of prescription drugs for various health conditions and seamless fulfillment of prescriptions from our consultation and specialist clinics.",
      "Over-the-Counter Medications: Wide range of OTC products including pain relievers, cold and flu medications, and more.",
      "Refills and Repeat Prescriptions: Convenient options to refill your regular medications without hassle.",
      "Wellness and Preventive Care Products: Nutritional supplements, vitamins, and other health-enhancing products to support your well-being.",
      "Pediatric and Specialized Care Medications: Specialized drugs for children, chronic conditions, and post-surgical care."
    ],
    offeringsImage: "/images/consultation.webp",
    whyChooseTitle: "Why Choose Stellar Physio Pharmacy?",
    whyChooseList: [
      "Wide Range of Medications: From prescription drugs to over-the-counter products, we stock all essential medicines to meet your needs.",
      "Expert Guidance: Our licensed pharmacists provide personalized advice, ensuring you understand your medication and its proper usage.",
      "Free Delivery Services: Get your medications conveniently delivered to your preferred location.",
      "Affordable Pricing: Quality medications at competitive rates to make healthcare accessible for all."
    ],
    pricingTitle: "Convenient Free Delivery Services",
    pricingText: "We bring the pharmacy to you! Whether you're at home or the office, enjoy free delivery for all prescriptions and refills. Call us to arrange a delivery at your convenience. Our pharmacies are strategically located across Nairobi to serve you better: Ngong Road, Kenital Plaza, Karen, Nairobi and Parklands and Highridge. No matter where you are, Stellar Physio Pharmacy is just a call away.",
    ctaTitle: "Affordable Pharmaceutical Products in Nairobi",
    ctaText: "Contact us at 0706 101 999 or visit your nearest branch to access affordable and reliable pharmacy services. Your health is our priority.",
    ctaButtonText: "Visit Our Online Shop",
    faqs: [
      { question: "Does Stellar Physio Pharmacy offer delivery?", answer: "Yes, we offer free delivery for prescriptions and refills to your home or office." },
      { question: "Can I get prescription refills?", answer: "Yes, our pharmacy offers convenient refill and repeat prescription options." },
      { question: "Where are your pharmacy locations?", answer: "Our pharmacies are located across Nairobi, including Ngong Road (Kenital Plaza), Karen, Parklands, and Highridge." },
      { question: "Do you stock over-the-counter medication?", answer: "Yes. Alongside prescription medications, we stock a wide range of over-the-counter products including pain relievers and cold and flu medication." }
    ]
  },
  {
    slug: "counselling-services",
    title: "Counselling Services",
    shortDescription: "Professional counselling and mental health support.",
    heroImage: "/images/hero3.jpg",
    introTitle: "Counselling services by Frankly Speaking",
    introText: "Your mental health is just as important as your physical health. At Stellar Physio, we offer professional counselling services to help individuals cope with a variety of things from stress, anxiety, depression, trauma, grief, relationship, and family issues and more. Our compassionate therapists provide a safe and supportive space for clients to explore their emotions, develop coping strategies, and enhance their overall well-being.",
    introImage: "/images/counsellingroom.png",
    offeringsTitle: "Our Services",
    offeringsList: [
      "Individual Therapy - One-on-one sessions to help you unpack, heal, and grow at your own pace.",
      "Couples Therapy - Support for partnerships that want to reconnect, communicate better, or work through challenges together.",
      "Family Therapy - A guided space to improve connection, resolve tensions, and strengthen family dynamics.",
      "Adolescent Therapy - Support tailored for teens and pre-teens navigating identity, emotions, and life transitions.",
      "Career & Life Coaching - Goal-oriented sessions to help you gain clarity and take practical steps in your career or personal life.",
      "Group Sessions & Workshops - Themed conversations and guided group experiences for community, learning, and shared growth."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Choose Frankly Speaking?",
    whyChooseList: [
      "We keep it real — you don't have to 'fix' yourself before showing up.",
      "Our therapists are warm, professional, and compassionate.",
      "We create a safe space where you can speak freely and feel heard.",
      "We honour your pace — whether you're ready to dive deep or take it slow.",
      "We're built with evidence-based approaches, so you feel both supported and empowered.",
      "We believe in you, not just in what you're going through."
    ],
    pricingTitle: "Our Packages",
    pricingText: "In partnership with Stellar Physio: Our integrated wellness packages offer both physical and emotional support — because you're more than just a body, or a mind. Here's what we can do for you that way. Restart (4 weeks): 1 psychotherapy session/week (4 total), 1 massage therapy session/weekly (4 total), 1 massage therapy via WhatsApp. Rebuild (4 weeks): 1 psychotherapy session/week (4 total), 1 massage therapy session/week (4 total), Personalised home-care plan + follow-up calls/ WhatsApp Check-Ins, Email support & symptom tracking.",
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Take the first step and improve well-being with Frankly Speaking. Call Us: 0706 101 999. WhatsApp: 0711662954.",
    ctaButtonText: "Book Appointment"
  },
  {
    slug: "sports-massage",
    title: "Sports Massage",
    shortDescription: "Reduce muscle tension, enhance flexibility, and prevent injuries.",
    heroImage: "/images/sportshero.png",
    introTitle: "Sports Massage at Stellar Physio Health & Wellness",
    introText: "Our sports massage therapy at Stellar Physio is designed for athletes, active individuals, and anyone looking to reduce muscle tension, enhance flexibility, and prevent injuries. Whether you are training for a competition or need relief from soreness, our specialized massage techniques will help you recover faster and perform at your peak.",
    introImage: "/images/sportsmassage2.webp",
    offeringsTitle: "Techniques Used",
    offeringsList: [
      "Deep Tissue Massage: Focused pressure to release knots and muscle tightness.",
      "Trigger Point Therapy: Targeting specific areas to relieve pain and improve mobility.",
      "Pre-Event & Post-Event Massage: Preparing muscles for performance and aiding recovery.",
      "Myofascial Release: Working on connective tissue to restore muscle elasticity."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Choose Our Sports Massage?",
    whyChooseList: [
      "Tailored for Athletes & Active Lifestyles",
      "Expert Therapists with Experience in Sports Recovery",
      "Relieves Tension, Reduces Stress & Improves Flexibility"
    ],
    pricingTitle: "Benefits of Sports Massage",
    pricingText: "Our sports massage techniques help to: Reduce Muscle Soreness & Improves Recovery Time, Enhance Flexibility & Reduces the Risk of Injury, Increase Blood Circulation & Removes Toxins, Boost Performance & Eases Stress on Muscles.",
    ctaTitle: "Affordable Sports Massage in Nairobi",
    ctaText: "Looking for affordable Sports Massage near you or the best Sports Massage services in Nairobi? At Stellar Physio, we offer premium care at competitive rates to make quality healthcare accessible to all.",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "reflexology",
    title: "Reflexology",
    shortDescription: "Holistic therapy that stimulates pressure points to promote natural healing.",
    heroImage: "/images/reflex1.webp",
    introTitle: "Reflexology at Stellar Physio Health & Wellness",
    introText: "Reflexology is a holistic therapy that focuses on stimulating specific pressure points on the feet, hands, and ears to promote natural healing, relaxation, and overall well-being. At Stellar Physio Health & Wellness, our trained reflexologists use this technique to help relieve pain, reduce stress, improve circulation, and restore the body's natural balance.",
    introImage: "/images/reflex2.webp",
    offeringsTitle: "Key Benefits of Reflexology Therapy",
    offeringsList: [
      "Pain Relief & Muscle Relaxation: Helps reduce tension, stiffness, and discomfort in muscles and joints.",
      "Stress & Anxiety Reduction: Encourages deep relaxation, calming the nervous system.",
      "Improved Blood Circulation: Enhances oxygen delivery and detoxification processes.",
      "Boosts Nerve Function & Energy Levels: Stimulates nerve endings to improve neurological function.",
      "Supports Digestive Health: Helps with bloating, indigestion, and gut-related issues.",
      "Enhances Sleep Quality: Induces a state of deep relaxation, aiding restful sleep."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Choose Reflexology at Stellar Physio?",
    whyChooseList: [
      "Experienced Reflexologists Trained in Advanced Techniques",
      "Holistic & Natural Approach to Health & Wellness",
      "Non-Invasive, Drug-Free, and Completely Safe Therapy",
      "A Soothing & Rejuvenating Experience for Body & Mind"
    ],
    pricingTitle: "How Does Reflexology Work?",
    pricingText: "Reflexology is based on the principle that different reflex points on the feet, hands, and ears correspond to various organs and systems in the body. By applying gentle but firm pressure to these reflex points, we can stimulate the nervous system, encourage the release of tension, and enhance the body's ability to heal itself.",
    ctaTitle: "Affordable Reflexology Services in Nairobi",
    ctaText: "Whether you need pain relief, stress management, or overall wellness support, we are here to help you feel your best!",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy",
    shortDescription: "Helping children develop skills for daily living.",
    heroImage: "/images/occupationaltherapyroom.png",
    introTitle: "Occupational Therapy at Stellar Physio Health & Wellness",
    introText: "At Stellar Physio Health & Wellness, our Occupational Therapy (OT) services focus on helping children develop the skills they need to participate in daily activities with confidence and independence. We specialize in working with children diagnosed with Autism, Cerebral Palsy, and Erb's Palsy, using evidence-based interventions to enhance their functional abilities, motor coordination, and social engagement.",
    introImage: "/images/therapy1.webp",
    offeringsTitle: "How Occupational Therapy Supports Your Child",
    offeringsList: [
      "Fine & Gross Motor Skills Development - Helping children improve their ability to grasp, hold, and manipulate objects for essential tasks like writing, dressing, and self-care.",
      "Sensory Integration Therapy - Managing sensory sensitivities and helping children process and respond to sensory input effectively.",
      "Daily Living Skills Training - Teaching essential self-care activities such as dressing, feeding, toileting, and grooming to foster independence.",
      "Postural & Movement Support - Enhancing posture, strength, and mobility for children with physical challenges related to Cerebral Palsy and Erb's Palsy.",
      "Social & Communication Skills - Encouraging engagement, play, and interaction to build confidence in social settings.",
      "Adaptive Strategies & Assistive Devices - Providing tools and techniques to help children overcome physical limitations and participate in daily life."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Choose Stellar Physio for Occupational Therapy?",
    whyChooseList: [
      "Experienced Pediatric Therapists Specializing in Neurological & Developmental Conditions",
      "Customized Therapy Plans Tailored to Each Child's Needs & Goals",
      "Family-Centered Approach: Involving Parents in the Therapy Process",
      "Holistic Techniques Combining Play-Based Learning & Functional Training",
      "Convenient Home-Based Therapy Options for Comfort & Accessibility"
    ],
    pricingTitle: "Who Can Benefit from Occupational Therapy?",
    pricingText: "Our occupational therapy services are ideal for: Children with Autism Spectrum Disorder (ASD), Children with Cerebral Palsy, Children with Erb's Palsy, and Children with Developmental Delays.",
    ctaTitle: "Affordable Occupational Therapy in Nairobi",
    ctaText: "Looking for affordable Occupational Therapy near you or the best physiotherapy services in Nairobi? At Stellar Physio, we offer premium care at competitive rates to make quality healthcare accessible to all.",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "nutritional-services",
    title: "Nutritional Services",
    shortDescription: "Personalized nutrition plans to support your health goals.",
    heroImage: "/images/hero3.jpg",
    introTitle: "Nutritional Services at Stellar Physio Health & Wellness",
    introText: "At Stellar Physio Health & Wellness, we believe that proper nutrition plays a vital role in healing, recovery, and overall well-being. Whether you're an athlete looking to optimize performance, a patient recovering from surgery, or someone managing a chronic condition, our personalized nutritional services are designed to support your health goals and promote long-term wellness.",
    introImage: "/images/diet.webp",
    offeringsTitle: "Our Nutritional Services Include",
    offeringsList: [
      "Personalized Diet Planning: Tailored meal plans based on your unique needs, dietary preferences, and medical conditions.",
      "Nutrition for Injury Recovery & Rehabilitation: Guidance on anti-inflammatory foods and essential nutrients to speed up healing.",
      "Sports & Performance Nutrition: Strategies for optimizing endurance, muscle recovery, and hydration for athletes.",
      "Weight Management & Lifestyle Coaching: Practical, achievable plans for healthy weight loss, muscle gain, and balanced nutrition.",
      "Medical Nutrition Therapy (MNT): Specialized diets for individuals with diabetes, hypertension, heart disease, and other chronic illnesses.",
      "Digestive Health & Gut Wellness: Meal plans that improve digestion, prevent bloating, and promote gut microbiome balance."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Choose Our Nutritional Services?",
    whyChooseList: [
      "Science-Based, Practical Nutrition Advice – No fad diets or quick fixes, just evidence-based strategies.",
      "Comprehensive Approach to Health & Wellness – We focus on nutrition as part of a holistic lifestyle change.",
      "Customized Plans for Every Individual – No one-size-fits-all approach—your nutrition plan is tailored just for you.",
      "Long-Term, Sustainable Results – Our approach helps you develop lasting, healthy eating habits."
    ],
    pricingTitle: "Who Can Benefit from Our Nutritional Services?",
    pricingText: "Our nutritional services are ideal for: Individuals Recovering from Injury or Surgery, Patients Managing Chronic Conditions (diabetes, hypertension, obesity, digestive disorders), Athletes and Active Individuals, Weight Management Clients, and Individuals Seeking Preventive Health Care.",
    ctaTitle: "Affordable Nutritional Services in Nairobi",
    ctaText: "Whether you want to improve your energy, recover faster, manage a health condition, or just feel your best, we're here to guide you every step of the way!",
    ctaButtonText: "Book Appointment Today!"
  },
  {
    slug: "stretch-exercise-therapy",
    title: "Stretch & Exercise Therapy",
    shortDescription: "Improve flexibility, relieve muscle tightness, and restore movement.",
    heroImage: "/images/sportshero.png",
    introTitle: "Stretch & Exercise Therapy at Stellar Physio Health & Wellness",
    introText: "Our Stretch & Exercise Therapy programs are designed to help individuals improve flexibility, relieve muscle tightness, and restore movement. Whether you have stiff joints, mobility restrictions, or simply want to enhance your range of motion, our expert therapists will guide you through personalized routines.",
    introImage: "/images/stretch2.webp",
    offeringsTitle: "What We Offer",
    offeringsList: [
      "Assisted Stretching Routines to enhance flexibility.",
      "Posture Correction & Alignment Techniques for improved movement.",
      "Strength & Stability Exercises to reinforce muscle support.",
      "Pain Relief Strategies through targeted muscle activation."
    ],
    offeringsImage: "/images/technique.webp",
    whyChooseTitle: "Why Choose Our Stretch & Exercise Therapy?",
    whyChooseList: [
      "Improves Mobility & Muscle Function",
      "Reduces Pain & Prevents Injury",
      "Customized Programs for All Ages"
    ],
    pricingTitle: "Who Needs Stretch & Exercise Therapy?",
    pricingText: "Our programs are ideal for: Individuals with Chronic Pain or Muscle Stiffness, Post-Surgery Patients Rebuilding Mobility, Athletes Looking to Prevent Injuries, and Office Workers with Poor Posture & Back Pain.",
    ctaTitle: "Affordable Stretch & Exercise Therapy in Nairobi",
    ctaText: "Looking for affordable Stretch & Exercise Therapy near you or the best Stretch & Exercise Therapy services in Nairobi? At Stellar Physio, we offer premium care at competitive rates to make quality healthcare accessible to all.",
    ctaButtonText: "Book Appointment Today!"
  }
];