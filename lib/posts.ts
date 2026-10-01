export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // format: "2026-09-21"
  author: string;
  readTime: string;
  image: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "kinesiology-taping-in-nairobi",
    title: "Kinesiology Taping in Nairobi: What That Colourful Tape Really Does",
    excerpt:
      "Blue kinesiology tape applied to a patient's hip and gluteal muscles during a physiotherapy session at Stellar Physio in Nairobi.",
    category: "Health & Wellness",
    date: "2026-09-21",
    author: "Stellar Physio",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60",
    body: `
Kinesiology tape is becoming increasingly popular in Nairobi, and you've probably seen athletes and gym-goers walking around with bright strips of tape on their shoulders, knees, or backs.

## What is Kinesiology Taping?

Kinesiology taping is a therapeutic technique that uses a thin, elastic cotton tape to support muscles and joints without restricting movement. Unlike traditional athletic tape, kinesiology tape stretches with your body.

## What Does It Do?

- **Supports muscles and joints** during activity
- **Reduces pain** by altering pain signals to the brain
- **Improves circulation** by lifting the skin slightly
- **Reduces swelling** by improving lymphatic drainage

## When Is It Used?

At Stellar Physio, we commonly apply kinesiology tape for:

- Sports injuries (sprains, strains)
- Lower back pain
- Shoulder impingement
- Post-surgical recovery
- Knee injuries
- Postural support

## Does It Really Work?

Yes, when applied correctly by a trained professional. The tape is a support tool—it works best alongside physiotherapy, exercise, and proper rehabilitation.
    `,
  },
  {
    slug: "sports-massage-parklands-nairobi",
    title: "Sports Massage in Parklands, Nairobi: How to Recover Faster",
    excerpt:
      "Stellar Physio therapist preparing a warm towel during a sports massage session at the Parklands clinic in Nairobi.",
    category: "Health",
    date: "2026-09-17",
    author: "Stellar Physio",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=60",
    body: `
If you're an athlete or fitness enthusiast in Nairobi, sports massage should be part of your regular training routine—not just a luxury.

## Why Sports Massage?

Sports massage targets the muscles you use most, helping them recover faster and perform better. Whether you're a runner, footballer, golfer, or gym-goer, it makes a real difference.

## The Benefits

- Reduces muscle soreness after training
- Improves flexibility and range of motion
- Prevents injuries
- Speeds up recovery between sessions
- Reduces stress and promotes relaxation

## When to Get One

- **Before competition**: 1–2 days before an event
- **After competition**: 24–48 hours after
- **During training**: weekly or bi-weekly

## Visit Us in Parklands

Our Parklands Sports Club clinic offers professional sports massage from certified therapists. Book an appointment today.
    `,
  },
  {
    slug: "stretch-exercise-therapy-nairobi",
    title: "Stretch & Exercise Therapy in Nairobi: Move Freely",
    excerpt:
      "Physiotherapist guiding a patient through an assisted hamstring stretch at Stellar Physio in Nairobi.",
    category: "Health & Wellness",
    date: "2026-09-15",
    author: "Stellar Physio",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=60",
    body: `
Sitting in Nairobi traffic, working long hours at a desk, training for the weekend match—all of it slowly tightens your muscles and limits how well you move.

## What is Stretch & Exercise Therapy?

It's a structured, physiotherapist-led programme that combines assisted stretching, mobility work, and targeted strengthening exercises.

## Who Is It For?

- Office workers with tight hips and shoulders
- Athletes wanting to prevent injuries
- People recovering from surgery
- Older adults wanting to stay mobile
- Anyone with chronic stiffness or joint pain

## What Happens During a Session?

1. **Assessment**: We check your posture, flexibility, and strength
2. **Assisted Stretching**: Gentle movement of muscles through controlled stretches
3. **Posture & Alignment**: Simple corrections to fix imbalances
4. **Strength Exercises**: Support the gains from stretching

## Benefits You Can Expect

- More flexibility and range of motion
- Less muscle tightness and pain
- Better posture
- Fewer injuries
- Improved performance

## Book Your Session

Take the first step. Call Dial-A-Physio on 0719 881 291 or book your appointment online.
    `,
  },
  {
    slug: "physiotherapy-week-2026",
    title: "Physiotherapy Week 2026 at Stellar Physio: Free Stroke Screenings",
    excerpt:
      "Professional physiotherapist at StellarPhysio ready to give clients a free consultation.",
    category: "Health & Wellness",
    date: "2026-09-07",
    author: "Stellar Physio",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=60",
    body: `
Join us for Physiotherapy Week 2026 at Stellar Physio, where we're offering free stroke and cardiovascular consultations from September 8–14.

## What's Included

- Free stroke risk assessment
- Cardiovascular health screening
- Blood pressure check
- Personalised advice from our physiotherapy team

## Why It Matters

Stroke is one of the leading causes of long-term disability in Kenya. Early detection and lifestyle changes can dramatically reduce your risk.

## Book Your Free Slot

Call us at 0706 101 999 or WhatsApp 0711 662 954 to reserve your spot.
    `,
  },
  {
    slug: "prenatal-postnatal-massage-nairobi",
    title: "Prenatal and Postnatal Massage in Nairobi: Safe Support for Every Stage",
    excerpt:
      "Safe and effective massage therapy for expectant and new mothers at Stellar Physio.",
    category: "Health & Wellness",
    date: "2026-08-28",
    author: "Stellar Physio",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=60",
    body: `
Pregnancy and childbirth bring significant changes to a woman's body. At Stellar Physio, we provide safe, professional massage therapy to support you through every stage.

## Prenatal Massage

Our prenatal sessions focus on:
- Relieving lower back pain
- Reducing muscle tightness
- Improving circulation
- Reducing swelling in ankles and feet
- Promoting relaxation and better sleep

## Postnatal Massage

After delivery, our postnatal sessions help:
- Ease muscle soreness
- Support your body's natural healing
- Reduce swelling
- Promote emotional well-being
- Restore muscle tone

## Book Your Session

Reserve your appointment at any of our Nairobi branches. Call 0706 101 999 or book online.
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 5): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}