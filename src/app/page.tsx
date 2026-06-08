import { HomePage, type SiteContent } from "@/components/home-page";
import { client } from "@/sanity/lib/client";
import { siteContentQuery } from "@/sanity/lib/queries";

const fallbackContent: SiteContent = {
  brandName: "Dr. Mahaboob Shaik | Educational & Career Counselling",
  tagline: "Navigating Your Future with Precision and Wisdom.",
  shortAbout:
    "Built on a legacy of over 45 years of clinical and academic leadership, this counselling practice bridges the gap between raw potential and structured career success.",
  heroTitle: "Precise career guidance from a life spent shaping medical and academic excellence.",
  heroSubtitle:
    "Students, medical aspirants, and professionals get seasoned mentorship with structure, clarity, and momentum.",
  heroDescription:
    "Personalised guidance for students, medical aspirants, and professionals seeking clarity in education and career decisions.",
  heroPrimaryCta: "Explore Services",
  heroSecondaryCta: "Contact Us",
  founder: {
    name: "Dr. Mahaboob Shaik",
    credentials: "MBBS, MS (General Surgery), DNB (General Surgery)",
    roleLine:
      "Educational and career counsellor, general surgeon, laparoscopic surgeon, and professor of surgery.",
    summary:
      "Dr. Mahaboob Shaik is a distinguished senior surgeon, published author, and elite medical educator with decades of clinical and academic excellence.",
    highlights: [
      "Former Professor, Head of Department of Surgery, and Medical Superintendent.",
      "Medical advisor to the UPSC Board and assessor for the National Medical Council.",
      "Mentor to thousands of doctors across India and the Middle East.",
      "Mentoria Gold Programme certified counsellor.",
    ],
  },
  services: [
    {
      _key: "student",
      title: "Student Career Discovery",
      description:
        "A comprehensive, data-backed 4-step assessment that identifies core interests, personality, and abilities for stream and college clarity.",
      audience:
        "School and college students seeking clarity on their ideal educational streams and future career paths.",
      mode: "Hybrid",
    },
    {
      _key: "medical",
      title: "Elite Medical Career Mentorship",
      description:
        "Strategic coaching for MBBS progression, competitive pathways, specialization decisions, and long-term clinical success.",
      audience:
        "Aspiring doctors, NEET UG/PG aspirants, MBBS students, and junior medical professionals.",
      mode: "Hybrid",
    },
    {
      _key: "professional",
      title: "Professional Growth Coaching",
      description:
        "Tailored mentorship for professionals looking to transition into high-growth sectors or move into stronger leadership roles.",
      audience:
        "Corporate professionals, educators, and healthcare administrators.",
      mode: "Online",
    },
  ],
  packageSection: {
    eyebrow: "Mentoria Packages",
    title: "Mentoria Packages",
    description:
      "Choose the right Mentoria plan for your career growth",
    categories: [
      "8–9 Students",
      "10–12 Students",
      "College Graduates",
      "Working Professionals",
    ],
    packages: [
      {
        _key: "s1",
        name: "Discover",
        category: "8–9 Students",
        subtitle: "Mentoria",
        priceLabel: "₹5,500",
        duration: "A foundational session to discover your potential.",
        features: [
          "Psychometric assessment to measure your interests",
          "1 career counselling session with Mentoria’s expert career coaches",
          "Lifetime access to Knowledge Gateway",
          "Invites to live webinars by industry experts",
        ],
      },
      {
        _key: "s2",
        name: "Discover Plus+",
        category: "8–9 Students",
        subtitle: "Mentoria",
        priceLabel: "₹15,000",
        duration: "",
        isPopular: true,
        features: [
          "Psychometric assessments to measure your interests, personality and abilities",
          "8 career counselling sessions (1 every year) with Mentoria’s expert career coaches until graduation",
          "Lifetime access to Knowledge Gateway",
          "Invites to live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV building during internships/graduation",
        ],
      },
      {
        _key: "s3",
        name: "Achieve Online",
        category: "10–12 Students",
        subtitle: "Mentoria",
        priceLabel: "₹5,999",
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts",
        ],
      },
      {
        _key: "s4",
        name: "Achieve Plus+",
        category: "10–12 Students",
        subtitle: "Mentoria",
        priceLabel: "₹10,599",
        duration: "",
        isPopular: true,
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "4 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with education pathways",
          "Guidance on studying abroad",
          "CV reviews during internships/graduation",
        ],
      },
      {
        _key: "s5",
        name: "Ascend Online",
        category: "College Graduates",
        subtitle: "Mentoria",
        priceLabel: "₹6,499",
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts",
        ],
      },
      {
        _key: "s6",
        name: "Ascend Plus+",
        category: "College Graduates",
        subtitle: "Mentoria",
        priceLabel: "₹10,599",
        duration: "",
        isPopular: true,
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application",
        ],
      },
      {
        _key: "s7",
        name: "Ascend Online",
        category: "Working Professionals",
        subtitle: "Mentoria",
        priceLabel: "₹6,499",
        duration: "",
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "1 career counselling session",
          "Lifetime access to Knowledge Gateway",
          "Pre-recorded webinars by industry experts",
        ],
      },
      {
        _key: "s8",
        name: "Ascend Plus+",
        category: "Working Professionals",
        subtitle: "Mentoria",
        priceLabel: "₹10,599",
        duration: "",
        isPopular: true,
        features: [
          "Psychometric assessment to measure your interests, personality and abilities",
          "3 career counselling sessions",
          "Lifetime access to Knowledge Gateway",
          "Attend live webinars by industry experts",
          "Customised reports after each session with information on certificate/online courses",
          "Guidance on studying abroad",
          "CV reviews for job application",
        ],
      },
    ],
    addOnTitle: "Want To Customise Your Mentorship Plan?",
    addOnDescription:
      "If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:",
    addOns: [
      {
        _key: "addon-1",
        name: "Career Report",
        priceLabel: "₹1,500",
        description:
          "Get a detailed report of your psychometric assessment for a scientific analysis of your interests. Find out where your interests lie and which future paths you can potentially consider.",
      },
      {
        _key: "addon-2",
        name: "Career Report + Career Counselling",
        priceLabel: "₹3,000",
        description:
          "Connect with India’s top career coaches to analyse your psychometric report and shortlist the top three career paths you’re most likely to enjoy and excel at.",
      },
      {
        _key: "addon-3",
        name: "Knowledge Gateway + Career Helpline Access",
        priceLabel: "₹1,000",
        description:
          "Unlock holistic information on your career paths and get direct access to Mentoria’s experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from here until you land a job you love.",
      },
      {
        _key: "addon-4",
        name: "One-To-One Session with a Career Expert",
        priceLabel: "₹3,500",
        description:
          "Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field.",
      },
      {
        _key: "addon-5",
        name: "College Admission Planning",
        priceLabel: "₹3,000",
        description:
          "Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner.",
      },
      {
        _key: "addon-6",
        name: "Exam Stress Management",
        priceLabel: "₹1,000",
        description:
          "Get expert guidance on tackling exam stress, planning your study schedule, revision tips and more from India’s top educators. Increase your chances of acing exams with a calm and clear mind.",
      },
      {
        _key: "addon-7",
        name: "College Admissions Planner - 100 (CAP-100)",
        priceLabel: "₹199",
        description:
          "₹199 for a ranked list of the top 100 colleges in your course. Get an expert-curated list of colleges based on verified cut-offs. CAP-100 ranks the top 100 colleges into four tiers to help you plan smarter.",
      },
    ],
  },
  testimonials: [
    {
      _key: "t1",
      title: "Academic Transformation",
      quote:
        "At Gandhi Medical College, Dr. Shaik introduced innovative, structured training systems that helped the department retain top academic standing in the state.",
      source: "Gandhi Medical College",
    },
    {
      _key: "t2",
      title: "International Standards",
      quote:
        "During his tenure in Oman, his students were officially recognised by external examiners as outperforming peers from top regional universities.",
      source: "Oman Medical College",
    },
    {
      _key: "t3",
      title: "Training Excellence",
      quote:
        "He designed and executed a CPD programme in Telangana that united senior professors to upskill post-graduate surgical students.",
      source: "Telangana Surgical Education",
    },
  ],
  contact: {
    title: "Begin the conversation with clarity.",
    intro:
      "Reach out for student counselling, medical mentorship, or professional growth guidance. Sessions are available by appointment from Hyderabad and through remote consultations.",
    phone: "+91 9440553924",
    email: "drsmahaboob1955@gmail.com",
    location: "Hyderabad, Telangana, India",
    appointmentNote: "By appointment only",
    instagram: "https://www.instagram.com/dr.s.mahaboob/?hl=en",
    linkedin: "https://www.linkedin.com/in/mahaboob-shaik-65a30257",
  },
  gallery: [
    { _key: "g1", title: "Founder portrait" },
    { _key: "g2", title: "Post Operative Management book" },
    { _key: "g3", title: "TG ASICON 2024 lecture" },
  ],
};

export default async function Home() {
  const content = await client.fetch<SiteContent | null>(siteContentQuery);

  return <HomePage content={content ?? fallbackContent} />;
}
