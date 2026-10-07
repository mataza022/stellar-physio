export type Condition = {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  introTitle: string;
  introText: string;
  introImage: string;
  understandingTitle: string;
  understandingText: string;
  understandingList?: string[];
  symptomsList?: string[];
  treatmentTitle: string;
  treatmentList: string[];
  whyChooseTitle: string;
  whyChooseList: string[];
  whyChooseImage: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
  videos?: { url: string; title?: string }[];
};

export const conditions: Condition[] = [
  {
    slug: "arthritis-joint-pains",
    title: "Arthritis & Joint Pains",
    shortDescription: "Specialized care to help manage pain, improve joint function, and restore movement.",
    heroImage: "/images/jointhero.webp",
    introTitle: "Arthritis & Joint Pains Management at Stellar Physio Health & Wellness",
    introText: "Arthritis and joint pain can be debilitating, affecting mobility and quality of life. At Stellar Physio Health & Wellness Center, we provide specialized care to help manage pain, improve joint function, and restore movement. Whether you are dealing with osteoarthritis, rheumatoid arthritis, or joint stiffness due to age, our dedicated team ensures that you receive the most effective treatment to regain comfort and mobility. Our integrative approach focuses on reducing pain, preventing further joint damage, and helping you maintain an active lifestyle.",
    introImage: "/images/jointpain.jpg",
    understandingTitle: "Understanding Arthritis & Joint Pains",
    understandingText: "Arthritis refers to inflammation of the joints, causing stiffness, pain, and swelling. The most common types include osteoarthritis, which results from wear and tear, and rheumatoid arthritis, an autoimmune disorder that affects joint tissues. Joint pain can also result from injuries, overuse, or age-related wear and tear. Symptoms often include reduced range of motion, joint stiffness, tenderness, and occasional flare-ups that lead to discomfort and immobility. Without proper management, arthritis can progressively limit movement, causing long-term disability. Our experts assess your condition using advanced diagnostic tools and create a tailored treatment plan to slow disease progression and enhance joint function. Early intervention and targeted therapy can help alleviate symptoms, improve joint stability, and prevent the condition from worsening.",
    treatmentTitle: "Comprehensive Arthritis & Joint Pain Treatment",
    treatmentList: [
      "Physiotherapy & Exercise Therapy: Strengthen muscles and support joints. This includes resistance training, aquatic therapy, and tailored stretching routines to reduce joint stress and enhance movement.",
      "Pain Relief Modalities: Like ultrasound therapy, heat therapy, and electrical stimulation to manage inflammation and provide long-lasting pain relief.",
      "Joint Mobilization & Manual Therapy: To improve flexibility and reduce stiffness. Our specialists use targeted manipulation techniques to increase circulation and restore joint function.",
      "Hydrotherapy & Low-Impact Exercises: To ease pain without stressing the joints. Water-based therapies and activities such as yoga and Pilates offer gentle yet effective ways to maintain joint mobility and reduce discomfort.",
      "Nutritional Guidance & Lifestyle Coaching: To complement physical treatments. We offer dietary advice on anti-inflammatory foods and supplements that support joint health and reduce arthritis symptoms.",
      "Assistive Devices & Bracing Support: To improve mobility and relieve joint pressure. We provide customized bracing solutions to enhance joint stability and reduce pain during movement."
    ],
    whyChooseTitle: "Why Choose Stellar Physio?",
    whyChooseList: [
      "Experienced Physiotherapists Specializing in Arthritis Care: Our team understands the complexities of arthritis and employs the latest evidence-based treatment methods.",
      "Individualized Treatment Plans for Pain Relief & Improved Mobility: We focus on long-term results, ensuring patients achieve sustainable improvements in movement and quality of life.",
      "Use of Modern Therapeutic Techniques: We incorporate cutting-edge therapies, including regenerative treatments, to slow disease progression and enhance recovery outcomes.",
      "Support Beyond Treatment Sessions: We empower patients with self-care techniques, home exercise programs, and ongoing education to maintain joint health beyond the clinic."
    ],
    whyChooseImage: "/images/joint.avif",
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Don't let Arthritis & Joint Pains hold you back. Take the first step toward recovery with Stellar Physio's expert care. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment"
  },
  {
    slug: "lower-back-pain-spine-health",
    title: "Lower Back Pain & Spine Health",
    shortDescription: "Expert physiotherapy to relieve pain, restore movement, and prevent future injuries.",
    heroImage: "/images/spinehealthhero.png",
    introTitle: "Lower Back Pain Treatment in Nairobi | Spine Health & Physiotherapy",
    introText: "Struggling with lower back pain, stiffness, or spine discomfort? You are not alone. Lower back pain is one of the most common conditions affecting adults, often caused by poor posture, muscle strain, herniated discs, or lifestyle habits. At Stellar Physio Health and Wellness Centre, we provide expert physiotherapy treatment for back pain in Nairobi, helping you relieve pain, restore movement, and prevent future injuries. Our approach focuses on identifying the root cause of your pain and delivering personalized rehabilitation programs for long-term recovery.",
    introImage: "/images/lowerpain.webp",
    understandingTitle: "Common Causes of Lower Back Pain",
    understandingText: "Lower back pain can result from:",
    understandingList: [
      "Poor posture (especially prolonged sitting)",
      "Muscle strain and overuse",
      "Herniated or slipped discs",
      "Sports injuries",
      "Sedentary lifestyle",
      "Degenerative spine conditions"
    ],
    symptomsList: [
      "Persistent lower back pain",
      "Stiffness and limited movement",
      "Pain radiating to legs (sciatica)",
      "Muscle weakness",
      "Difficulty standing or sitting for long"
    ],
    treatmentTitle: "Our Lower Back Pain Treatment Services",
    treatmentList: [
      "Manual Therapy & Physiotherapy: Hands-on techniques like deep tissue massage, joint mobilization, and myofascial release to ease muscle tightness and improve circulation.",
      "Posture Correction & Ergonomics: Expert guidance on maintaining proper posture and making ergonomic adjustments to reduce spinal strain.",
      "Therapeutic Exercises: Customized routines to strengthen core and back muscles, enhancing flexibility and endurance.",
      "Pain Management Modalities: Heat, cold, TENS, and ultrasound therapy for effective pain relief and healing.",
      "Spinal Decompression Therapy: Non-invasive relief for herniated discs, sciatica, and degenerative disc disease.",
      "Lifestyle Coaching & Pain Prevention: Education on daily habits, sleep posture, hydration, and exercise plans to support long-term spine health and prevent recurrence."
    ],
    whyChooseTitle: "Why Choose Stellar Physio for Lower Back Pain & Spine Health Management in Nairobi?",
    whyChooseList: [
      "Expert Care: Our team consists of experienced physiotherapists and spine health specialists who stay updated with the latest research and advancements in back pain management.",
      "Personalized Approach: We tailor treatment plans to meet individual health and wellness goals, ensuring that each patient receives customized care that addresses their unique condition.",
      "State-of-the-Art Facility: Advanced equipment and techniques ensure optimal care, providing cutting-edge therapies that enhance recovery speed and long-term spine health.",
      "Comprehensive Support: From pain relief to rehabilitation, we provide holistic care to improve your spine health. Our team offers continued monitoring and follow-ups to track your progress and adjust treatment plans accordingly.",
      "Patient Education: We empower patients with knowledge on posture, movement, techniques, and lifestyle changes to maintain spine health beyond our clinic."
    ],
    whyChooseImage: "/images/lowerpain2.webp",
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Lower Back Pain & Spine Complications don't have to define your life. At Stellar Physio, we're here to guide you through every step of your recovery. From initial diagnosis to comprehensive treatment and ongoing support, our goal is to help you move better, feel stronger, and live healthier.",
    ctaButtonText: "Book Appointment"
  },
  {
    slug: "sports-injuries",
    title: "Sports Injuries",
    shortDescription: "Specialized rehabilitation to help athletes recover quickly and prevent future injuries.",
    heroImage: "/images/sportshero.png",
    introTitle: "Sports Injury Rehabilitation in Ngong Road, Nairobi",
    introText: "Sports injuries can sideline athletes and active individuals, affecting performance and long-term mobility. At Stellar Physio Health & Wellness Center, we specialize in treating acute and chronic sports-related injuries, helping patients recover quickly and safely. Our team provides targeted therapies to relieve pain, restore function, and prevent future injuries, ensuring a safe return to sports and physical activities.",
    introImage: "/images/injury.webp",
    understandingTitle: "Understanding Sports Injuries",
    understandingText: "Sports injuries range from minor sprains to severe ligament tears, fractures, and overuse conditions. Common injuries include muscle strains, ligament sprains, rotator cuff injuries, tennis elbow, shin splints, and knee injuries like ACL tears. If left untreated, these conditions can lead to chronic pain and limited mobility. Our sports rehabilitation program focuses on reducing inflammation, restoring movement, and strengthening the body to prevent re-injury. Early intervention accelerates healing and ensures optimal recovery.",
    treatmentTitle: "Comprehensive Sports Injury Treatments",
    treatmentList: [
      "Injury Assessment & Biomechanical Analysis to identify the root cause and develop a customized treatment plan.",
      "Physiotherapy & Strength Training to rebuild muscle, improve stability, and enhance performance.",
      "Manual Therapy & Joint Mobilization to alleviate pain and restore range of motion.",
      "Pain Management Techniques including dry needling, ultrasound therapy, and electrotherapy.",
      "Rehabilitation Exercises & Sport-Specific Drills to ensure a safe return to activity.",
      "Preventive Training & Education to reduce the risk of future injuries."
    ],
    whyChooseTitle: "Why Choose Stellar Physio for Sports Injuries Management?",
    whyChooseList: [
      "Sports Rehabilitation Experts with experience treating athletes of all levels.",
      "Customized Recovery Plans based on the type of sport and injury.",
      "State-of-the-Art Treatment Techniques to ensure the best outcomes.",
      "Focus on Long-Term Injury Prevention through education and strength programs."
    ],
    whyChooseImage: "/images/injury2.webp",
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Don't let sports injuries hold you back. Take the first step toward recovery with Stellar Physio's expert care. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment"
  },
  {
    slug: "stroke-rehabilitation",
    title: "Stroke Rehabilitation",
    shortDescription: "Expert physiotherapy and neurorehabilitation for stroke recovery.",
    heroImage: "/images/strokehero.webp",
    introTitle: "Stroke Rehabilitation in Nairobi – Expert Physiotherapy for Stroke Recovery at Stellar Physio",
    introText: "A stroke is a serious medical condition caused by an interruption of blood flow to the brain, leading to damage in brain cells. This often results in paralysis, muscle weakness, speech difficulties, balance problems, and loss of coordination. For many patients, recovery does not end after hospital discharge—it begins a critical journey known as stroke rehabilitation. Professional care is essential to restore mobility, independence, and quality of life. At Stellar Physio Health & Wellness Centre, we provide expert stroke physiotherapy and neurorehabilitation services in Nairobi, helping patients recover faster through personalized, evidence-based treatment programs.",
    introImage: "/images/stroke1.webp",
    understandingTitle: "What is Stroke Rehabilitation and Why is it Important?",
    understandingText: "A stroke occurs when oxygen supply to the brain is disrupted, affecting vital functions such as: Movement and coordination, Speech and communication, Memory and cognitive ability. Common Stroke Symptoms include: Muscle weakness or paralysis (especially on one side of the body), Difficulty walking or balancing, Speech and swallowing difficulties, Loss of coordination and motor control. Without proper stroke rehabilitation treatment, these challenges can significantly affect daily life.",
    treatmentTitle: "Comprehensive Stroke Rehabilitation Treatments",
    treatmentList: [
      "Physiotherapy & Motor Relearning Therapy to improve movement, balance, and muscle strength.",
      "Gait Training & Mobility Assistance with assistive devices to restore walking ability and enhance stability.",
      "Neuromuscular Re-Education to retrain weakened muscles and enhance motor control.",
      "Occupational Therapy for Daily Activities such as dressing, eating, and writing, promoting independence.",
      "Speech & Swallowing Therapy to address speech difficulties and ensure safe eating and drinking.",
      "Cognitive & Memory Training to enhance problem-solving skills and mental clarity.",
      "Home Exercise & Caregiver Support to continue progress outside therapy sessions."
    ],
    whyChooseTitle: "Why Choose Stellar Physio for Stroke Rehabilitation in Nairobi?",
    whyChooseList: [
      "Specialized Stroke Rehabilitation Team with experience in neuro-recovery.",
      "Personalized Treatment Plans for maximum recovery and independence.",
      "Advanced Rehabilitation Techniques including robotic-assisted therapy and functional electrical stimulation.",
      "Comprehensive Support System with patient and caregiver education."
    ],
    whyChooseImage: "/images/stroke2.webp",
    videos: [
      {
        url: "https://www.youtube.com/watch?v=uQov2csyo8M",
        title: "Stroke Rehabilitation at Stellar Physio",
      },
    ],
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Don't let stroke related complications define your life. Take the first step toward relief and improved well-being with Stellar Physio. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment"
  },
  {
    slug: "pre-post-surgery-rehab",
    title: "Pre- & Post-Surgery Rehab",
    shortDescription: "Enhance recovery outcomes and accelerate healing before and after surgery.",
    heroImage: "/images/strokehero.webp",
    introTitle: "Pre- & Post-Surgery Rehab at Stellar Physio Health & Wellness",
    introText: "Proper rehabilitation before and after surgery significantly enhances recovery outcomes. At Stellar Physio Health & Wellness Center, we provide specialized pre- and post-surgery rehab programs to strengthen muscles, improve mobility, and accelerate healing. Our expert therapists ensure a smooth recovery process, reducing complications and enhancing overall surgical success.",
    introImage: "/images/rehab1.webp",
    understandingTitle: "Understanding Pre- & Post-Surgery Rehab",
    understandingText: "Pre-surgical rehabilitation ('prehab') prepares the body for surgery by improving strength, flexibility, and endurance. This proactive approach reduces post-surgical complications and shortens recovery time. Post-surgical rehabilitation focuses on pain management, restoring mobility, and rebuilding strength to ensure a full recovery. Whether undergoing orthopedic, neurological, or general surgery, a structured rehab plan is essential for regaining function and preventing long-term limitations.",
    treatmentTitle: "Our Comprehensive Pre- & Post-Surgery Rehab Treatments",
    treatmentList: [
      "Pre-Surgical Strengthening & Conditioning to optimize physical health before surgery.",
      "Pain Management Strategies including ice therapy, ultrasound therapy, and TENS therapy.",
      "Manual Therapy & Joint Mobilization to reduce stiffness and enhance flexibility.",
      "Post-Surgical Rehabilitation Exercises to restore strength, mobility, and balance.",
      "Scar Tissue Management & Soft Tissue Therapy to prevent adhesions and improve healing.",
      "Guidance on Assistive Devices for safe mobility and recovery."
    ],
    whyChooseTitle: "Why Choose Stellar Physio for Pre- & Post-Surgery Rehab?",
    whyChooseList: [
      "Experienced Rehabilitation Specialists ensuring optimal pre- and post-surgical care.",
      "Personalized Recovery Plans tailored to the type of surgery and patient needs.",
      "Evidence-Based Techniques to maximize recovery and prevent complications.",
      "Holistic Approach integrating physical therapy, pain management, and patient education."
    ],
    whyChooseImage: "/images/rehab2.avif",
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Take the first step toward relief and improved well-being with Stellar Physio. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment"
  },
  {
    slug: "pre-post-natal-massages",
    title: "Pre & Post-Natal Massages",
    shortDescription: "Specialized massage therapies to promote relaxation, relieve pain, and support recovery.",
    heroImage: "/images/natalhero.jpg",
    introTitle: "Pre & Post-Natal Massages at Stellar Physio Health & Wellness",
    introText: "Pregnancy and childbirth bring significant changes to a woman's body, often leading to discomfort, muscle tension, and stress. At Stellar Physio Health & Wellness Center, we offer specialized pre and post-natal massage therapies designed to promote relaxation, relieve pain, and support overall well-being during and after pregnancy. Our expert therapists use safe and effective techniques to help expectant mothers ease back pain, improve circulation, and reduce swelling, while also aiding postpartum recovery by restoring muscle tone and alleviating tension.",
    introImage: "/images/natal1.webp",
    understandingTitle: "Understanding Pre & Post-Natal Massages",
    understandingText: "Pregnancy can cause hormonal changes, postural adjustments, and increased strain on muscles and joints, leading to issues such as back pain, swollen ankles, and fatigue. Pre-natal massages focus on reducing stress, improving sleep quality, and enhancing flexibility in preparation for childbirth. After delivery, post-natal massages help new mothers recover by promoting muscle relaxation, improving blood circulation, reducing swelling, and alleviating postpartum pain. These massages also assist in hormone regulation and emotional well-being, helping mothers transition smoothly into postpartum life.",
    treatmentTitle: "Our Comprehensive Pre & Post-Natal Massage Therapies",
    treatmentList: [
      "Gentle Prenatal Massage Techniques to relieve lower back pain, reduce muscle tightness, and improve overall comfort during pregnancy.",
      "Postpartum Recovery Massage to help ease muscle soreness, support the body's natural healing process, and aid in emotional relaxation.",
      "Lymphatic Drainage Therapy to reduce swelling and improve circulation, preventing fluid retention that is common in pregnancy and postpartum recovery.",
      "Pelvic Floor & Core Strengthening Massage to support muscle recovery and restore post-birth body balance.",
      "Stress-Relief & Relaxation Therapy using soothing techniques to promote mental well-being and improve sleep quality for new mothers."
    ],
    whyChooseTitle: "Why Choose Stellar Physio?",
    whyChooseList: [
      "Certified Maternal Massage Specialists: Our team is trained in safe, evidence-based techniques tailored for pregnancy and postpartum recovery.",
      "Customized Care Plans for Each Stage of Motherhood: We assess individual needs and provide targeted treatments to promote long-term well-being.",
      "Holistic Approach to Maternal Health: Our therapies are designed to complement other wellness practices, ensuring a well-rounded recovery.",
      "Safe, Comfortable, and Relaxing Environment: We provide a soothing atmosphere where mothers can experience relief and rejuvenation with complete peace of mind."
    ],
    whyChooseImage: "/images/natal2.webp",
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Take the first step toward relief and improved well-being with Stellar Physio. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment"
  },
  {
    slug: "developmental-milestones",
    title: "Developmental Milestones for Autism & Cerebral Palsy",
    shortDescription: "Specialized therapy programs to support children in achieving essential developmental milestones.",
    heroImage: "/images/occupationaltherapyroom.png",
    introTitle: "Developmental Milestones for Autism & Cerebral Palsy",
    introText: "Early childhood development is crucial, especially for children diagnosed with Autism Spectrum Disorder (ASD) or Cerebral Palsy (CP). At Stellar Physio Health & Wellness Center, we provide specialized therapy programs to support children in achieving essential developmental milestones in motor skills, communication, coordination, and social interaction. Our goal is to enhance independence, mobility, and quality of life by offering individualized treatment plans tailored to each child's unique needs.",
    introImage: "/images/therapy1.webp",
    understandingTitle: "Understanding Developmental Milestones in Autism & Cerebral Palsy",
    understandingText: "Children with Autism and Cerebral Palsy may experience delays in movement, speech, coordination, and cognitive processing, requiring early intervention therapies to help them develop essential life skills. Autism Spectrum Disorder (ASD): Developmental challenges often include delayed speech, difficulty with social interactions, sensory processing issues, and repetitive behaviors. Physical therapy, occupational therapy, and sensory integration techniques help children improve motor skills and daily functioning. Cerebral Palsy (CP): A condition affecting muscle tone, posture, and movement. CP can cause stiffness, muscle weakness, and coordination difficulties. Therapy focuses on improving strength, balance, and mobility to enhance independence.",
    treatmentTitle: "Our Comprehensive Therapy for Developmental Milestones",
    treatmentList: [
      "Gross & Fine Motor Skill Development to help children improve movement coordination, balance, and hand-eye coordination for daily tasks.",
      "Sensory Integration Therapy to assist children with Autism in processing and responding appropriately to sensory stimuli.",
      "Postural & Gait Training for CP to enhance mobility, reduce muscle tightness, and improve walking patterns using customized exercises.",
      "Speech & Communication Therapy in collaboration with specialists to help children develop verbal and non-verbal communication skills.",
      "Play-Based & Cognitive Therapy to encourage learning through interactive and engaging activities that support brain development.",
      "Adaptive Equipment & Assistive Technology to aid movement, independence, and learning in children with mobility challenges."
    ],
    whyChooseTitle: "Why Choose Stellar Physio?",
    whyChooseList: [
      "Multidisciplinary Approach to Pediatric Therapy: We combine physiotherapy, occupational therapy, and behavioral therapy to address the diverse needs of children with Autism and CP.",
      "Tailored Intervention Plans for Every Child: Our treatment programs are designed to meet each child's unique developmental needs.",
      "Experienced Pediatric Therapists: Our team specializes in working with children with neurodevelopmental conditions, ensuring compassionate and effective care.",
      "Family-Centered Support & Guidance: We involve parents in therapy sessions and provide training on how to support their child's development at home."
    ],
    whyChooseImage: "/images/therapy2.webp",
    ctaTitle: "Take the First Step Toward Relief",
    ctaText: "Take the first step toward relief and improved well-being our your child, with Stellar Physio. Call us at 0706 101 999.",
    ctaButtonText: "Book Appointment"
  }
];