# Shaifaly Sangal - React + Tailwind CSS Web Application

A modern, responsive, component-driven React application converted from the single-file HTML/CSS/JS website. Built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide React**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Linting
```bash
npm run lint
```

---

## 📁 Project Structure

```
frontend/
├── index.html                   # HTML entry point with complete SEO metadata & Google Fonts
├── vite.config.js               # Vite config with React & Tailwind CSS plugins
├── package.json                 # Dependencies and scripts
└── src/
    ├── main.jsx                 # React root mounting
    ├── App.jsx                  # Main application orchestrator & theme state
    ├── index.css                # Tailwind CSS, custom design tokens, glassmorphism & animations
    ├── App.css                  # Extra custom utility styles
    ├── constants/
    │   └── index.js             # Shared data: navigation, testimonials, FAQs, services, quotes
    ├── hooks/
    │   └── useScrollReveal.js   # IntersectionObserver hook for scroll-triggered reveal animations
    ├── services/
    │   ├── booking.js           # API service for appointment slots and booking submission
    │   └── youtube.js           # YouTube Data API v3 service for video shorts
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx       # Floating glassmorphism navbar with mobile menu & dark toggle
    │   │   └── Footer.jsx       # Semantic footer with dynamic copyright
    │   └── ui/
    │       ├── Lightbox.jsx     # Fullscreen image lightbox modal
    │       └── AffirmationWidget.jsx # Interactive companion popup & popup page launcher
    └── sections/
        ├── HeroSection.jsx      # Hero banner with avatar card & rotating quote
        ├── OverviewSection.jsx  # Pillars & coaching philosophy
        ├── AboutSection.jsx     # Tabbed about interface (Coaching, Healing, POSH)
        ├── ServicesSection.jsx  # Core offerings & session formats
        ├── PollSection.jsx      # Interactive workplace well-being poll with live percentage calculation
        ├── ShortsSection.jsx    # YouTube Shorts dynamic gallery with pagination
        ├── GallerySection.jsx   # Moments gallery with lightbox trigger
        ├── TestimonialsSection.jsx # Client stories & reviews
        ├── PoshSection.jsx      # POSH for organisations, compliance & training
        ├── StorySection.jsx     # Philosophy & books by the author
        ├── FaqSection.jsx       # Expandable FAQ accordion
        └── ContactSection.jsx   # 3-step interactive calendar booking flow
```

---

## ✨ Features Converted & Preserved

1. **Complete UI Fidelity & Visual Aesthetics**:
   - Aurora animated gradients in background
   - Glassmorphism panels and cards
   - Subtle grain overlay and smooth micro-animations
   - Responsive layout for mobile, tablet, and desktop

2. **Full Interactivity & State Management**:
   - **Dark Mode**: Persisted in `localStorage`, toggling `.dark` theme tokens.
   - **Interactive Avatar**: Rotates on each visit using `localStorage`.
   - **Tabbed Navigation**: Instant tab switching in the About section.
   - **Interactive Live Poll**: Vote simulation with instant percentage breakdown.
   - **YouTube Shorts Integration**: Live pagination and loading states.
   - **Booking Flow**: Multi-step calendar, live slot verification, Sunday detection, and booking submission.
   - **Image Lightbox**: Smooth opening and closing of media items.
   - **Scroll-to-Top**: Dynamic floating button triggered by scroll depth.
   - **Scroll Reveal**: Native `IntersectionObserver` triggering entrance animations.
