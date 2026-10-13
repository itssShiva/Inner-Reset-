// Site metadata
export const SITE_NAME = 'Shaifaly Sangal';
export const SITE_TAGLINE = 'Life Coach · Healer · POSH';
export const SITE_URL = 'https://shaifalysangal.com';

// External links
export const LINKS = {
  youtube: 'https://www.youtube.com/@Shaifalyhealer',
  linkedin: 'https://www.linkedin.com/in/shaifalysangal/',
  instagram: 'https://www.instagram.com/shaifalysangal?rpxt=MTN3dWludm42c3Q4Nw==',
  whatsappCoaching: 'https://wa.link/6q82lg',
  whatsappHealing: 'https://wa.link/00wzvz',
  whatsappPosh: 'https://wa.link/ql65no',
  sheBox: 'https://shebox.wcd.gov.in/empanelmentReport',
  amazon: 'https://www.amazon.in/dp/8197188378/ref=sr_1_1?crid=1OZKWRUCC1PRA',
  flipkart: 'https://dl.flipkart.com/s/gf2vkKuuuN',
};

// YouTube API config (public key, not a secret)
export const YOUTUBE_API_KEY = 'AIzaSyCGTXdx6DsDk4QGf6MDkFMEpU6ktg3q9wE';
export const YOUTUBE_CHANNEL_HANDLE = 'Shaifalyhealer';

// Booking API
export const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzdFu84aQK_IP4B-ZlUGFG3nJ72RHTpnCnEgSgs1RR1R6tfeqUVkSEQhgV6iZJIvKXN/exec';

// Nav links
export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: 'products' },
  { label: 'Shorts', href: '#shorts' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Stories', href: '#testimonials' },
];

// Services tabs
export const SERVICES = [
  {
    id: 'coaching',
    label: 'Coaching',
    icon: 'Compass',
    heading: 'Life Coaching',
    title: 'Clarity, confidence & direction',
    description:
      'Structured, outcome-focused conversations that help you see clearly, decide calmly, and move towards work and life that feel aligned - without burning out.',
    tags: ['Self-Discovery', 'Personal Growth', 'Goal Clarity', 'Confidence Boost'],
    whatsappLink: 'https://wa.link/6q82lg',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'healing',
    label: 'Healing',
    icon: 'HeartHandshake',
    heading: 'Healing & Inner Work',
    title: 'Mind, body & emotional balance',
    description:
      'Short, sustainable practices that help release emotional overload and stress stored in the body, supporting health, relationships, career, and money from the inside out.',
    tags: ['Emotional Release', 'Stress Management', 'Mind-Body Connection', 'Guided Meditation'],
    whatsappLink: 'https://wa.link/00wzvz',
    image: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'posh',
    label: 'POSH',
    icon: 'ShieldCheck',
    heading: 'POSH Consulting',
    title: 'Compliance, governance & safety',
    description:
      'POSH support that combines legal understanding with human sensitivity - helping organisations create safer, respectful workplaces that go beyond checklists.',
    tags: ['Legal Compliance', 'Workplace Safety', 'Governance Framework', 'Organizational Development'],
    whatsappLink: 'https://wa.link/ql65no',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

// Gallery images
export const GALLERY_IMAGES = [
  { src: '/images/WhatsApp Image 2026-01-02 at 12.02.52.jpeg', alt: 'Shaifaly Sangal POSH awareness training session' },
  { src: '/images/WhatsApp Image 2026-01-02 at 12.02.52 (1).jpeg', alt: 'Shaifaly Sangal speaking at a corporate workshop' },
  { src: '/images/WhatsApp Image 2026-01-02 at 12.02.53 (1).jpeg', alt: 'Audience engagement during life coaching seminar' },
  { src: '/images/WhatsApp Image 2026-01-02 at 12.02.53 (2).jpeg', alt: 'Corporate training and team building session' },
  { src: '/images/WhatsApp Image 2026-01-02 at 12.02.53.jpeg', alt: 'Shaifaly Sangal facilitating group healing workshop' },
  { src: '/images/WhatsApp Image 2026-01-02 at 12.02.54 (1).jpeg', alt: 'Interactive leadership coaching and mentoring' },
  { src: '/images/WhatsApp Image 2026-01-02 at 12.02.54.jpeg', alt: 'POSH compliance and workplace safety seminar' },
  { src: '/images/WhatsApp Image 2026-01-02 at 12.05.33.jpeg', alt: 'Shaifaly Sangal awarding a certificate at a corporate event' },
  { src: '/images/WhatsApp Image 2026-01-07 at 15.22.58.jpeg', alt: 'Group discussion at Shaifaly Sangal\'s empowerment workshop' },
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: '"She listens without judgement and asks the kind of questions that gently move you out of confusion. I felt lighter, clearer, and more responsible for my next steps."',
    meta: 'Senior Professional · Life Coaching',
  },
  {
    quote: '"The healing sessions helped me release years of emotional heaviness. My health, relationships, and money conversations started to feel more balanced and hopeful."',
    meta: 'Individual Client · Healing',
  },
  {
    quote: '"Our POSH trainings became real conversations instead of checkbox sessions. The Internal Committee now feels confident, sensitive, and clear about its role."',
    meta: 'HR Leader · POSH Consulting',
  },
];

// Transformation videos
export const TRANSFORMATION_VIDEOS = [
  { videoId: 'If08cz-jgFU', href: 'https://www.youtube.com/live/If08cz-jgFU' },
  { videoId: 'YKeEIq45C0s', href: 'https://www.youtube.com/live/YKeEIq45C0s' },
];

// FAQ
export const FAQS = [
  {
    icon: 'Monitor',
    question: 'Are sessions conducted online or offline?',
    answer: 'Life Coaching and Healing sessions are conducted online. POSH consulting can be online or offline depending on organisational requirements.',
  },
  {
    icon: 'HeartPulse',
    question: 'Who can benefit from healing sessions?',
    answer: 'Individuals dealing with stress, emotional overwhelm, relationship challenges, health-related stress, career pressure, or money anxiety.',
  },
  {
    icon: 'Stethoscope',
    question: 'Is healing a medical treatment?',
    answer: 'No. Healing sessions are non-medical and do not replace professional medical or psychological care. They work alongside personal awareness and responsibility.',
  },
  {
    icon: 'MapPin',
    question: 'Is POSH consulting offered across India?',
    answer: 'Yes. POSH consulting services - including External Member support, training, and awareness sessions - are available across India.',
  },
  {
    icon: 'Lock',
    question: 'How is confidentiality maintained?',
    answer: 'Individual sessions are private and confidential. POSH engagements follow statutory confidentiality, neutrality, and process requirements.',
  },
];

// Poll questions
export const POLL_QUESTIONS = [
  { q: "What is your mind's biggest energy drainer right now?", opt: ["Overthinking & anxiety", "Career path uncertainty", "Past emotional blocks", "Work-life imbalance"] },
  { q: "When stress hits, what is your immediate default reaction?", opt: ["Pushing through to burnout", "Shutting down & isolating", "Distracting to avoid it", "Seeking healthy release"] },
  { q: "What area of life is calling for your attention most today?", opt: ["Emotional healing & peace", "Career growth & focus", "Fixing relationship loops", "Financial stability"] },
  { q: "What is the primary roadblock to your personal growth?", opt: ["Fear of failure / judgment", "Lack of clear direction", "Procrastination & low focus", "Unresolved past emotional baggage"] },
  { q: "How often do you prioritize quiet self-reflection?", opt: ["Daily, it keeps me grounded", "Occasionally when overwhelmed", "Rarely, I don't find time", "Never, my mind stays busy"] },
  { q: "What describes your current workplace culture best?", opt: ["Highly respectful & safe", "Stressed & high pressure", "Indifferent / lacks engagement", "Needs better POSH awareness"] },
  { q: "What is the hardest part of maintaining corporate POSH compliance?", opt: ["Keeping training engaging", "True gender sensitization", "Handling complaints neutrally", "Breaking subtle internal biases"] },
  { q: "How confident do you feel setting healthy personal boundaries?", opt: ["Completely confident", "I try but feel guilty", "I struggle to say no", "I rarely set boundaries"] },
  { q: "Where does emotional exhaustion hit you the hardest?", opt: ["Physical fatigue & low energy", "Disruptive sleep patterns", "Irritability & low patience", "Loss of career motivation"] },
  { q: "What is your main goal for your professional path this year?", opt: ["Transitioning into leadership", "Finding a meaningful pivot", "Managing work stress better", "Upskilling & building confidence"] },
];

// Avatar rotation config
export const AVATAR_ROTATION = [
  { src: '/images/gemini_generated_video_5eabc4a9(1).gif', quote: '"Take one slow, deep breath. Your nervous system thanks you every time you pause." ☁️' },
  { src: '/images/VID-20260629-WA0013(1).gif', quote: '"Inhale calm. Exhale everything you no longer need." 🧘‍♀️' },
  { src: '/images/VID-20260630-WA0012(1).gif', quote: '"Before reacting, take three conscious breaths. Clarity follows calm." 🌅' },
  { src: '/images/VID-20260630-WA0016(1).gif', quote: 'Place your hand on your heart and say, "Thank you for carrying me through today." ❤️' },
  { src: '/images/VID-20260629-WA0012(1).gif', quote: '"Your body listens to every word you speak. Choose kindness." ✨' },
  { src: '/images/VID-20260629-WA0015(1).gif', quote: '"Relax your shoulders. You\'re carrying less than your mind believes." 🌿' },
  { src: '/images/VID-20260630-WA0011(1)(1).gif', quote: '"Notice one beautiful thing around you. Gratitude begins with awareness." 🍁' },
  { src: '/images/VID-20260630-WA0015(1).gif', quote: '"One grateful thought can transform an entire day." 🦋' },
  { src: '/images/gemini_generated_video_5080d565(1).gif', quote: '"Pause. Appreciate this moment before rushing to the next." ☕' },
  { src: '/images/VID-20260629-WA0014(1).gif', quote: '"Speak to yourself with the same kindness you offer others." 🪞' },
  { src: '/images/VID-20260629-WA0016(1).gif', quote: '"You deserve your own compassion today." 🌸' },
  { src: '/images/VID-20260629-WA0017(1).gif', quote: '"Progress matters more than perfection." 🚶‍♀️' },
  { src: '/images/VID-20260630-WA0017(1).gif', quote: '"Every emotion has something to teach. Listen before you judge." 🌳' },
  { src: '/images/VID-20260630-WA0013(1).gif', quote: '"Not every thought deserves your attention." 🌧️' },
  { src: '/images/VID-20260630-WA0009(1).gif', quote: '"Difficult moments don\'t last forever. Neither do difficult emotions." 🌙' },
  { src: '/images/VID-20260630-WA0014(1).gif', quote: 'Repeat gently: "I\'m Sorry. Please Forgive Me. Thank You. I Love You." 🕯️' },
  { src: '/images/VID-20260630-WA0010(1).gif', quote: '"Forgiveness is one of the gentlest forms of healing." ❄️' },
];
