import { useState } from 'react';

import Lightbox from './components/ui/Lightbox';
import AffirmationWidget from './components/ui/AffirmationWidget';

import HeroSection from './sections/HeroSection';
import OverviewSection from './sections/OverviewSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import PollSection from './sections/PollSection';
import ShortsSection from './sections/ShortsSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialsSection';
import PoshSection from './sections/PoshSection';
import StorySection from './sections/StorySection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';

import { AVATAR_ROTATION } from './constants';
import { useScrollReveal } from './hooks/useScrollReveal';

/**
 * Get or advance the avatar rotation index from localStorage safely.
 * Resilient against NaN, out-of-bounds, corrupted storage, or private browsing exceptions.
 */
function getAvatarIndex() {
  const total = AVATAR_ROTATION?.length || 1;
  try {
    const stored = localStorage.getItem('shaifaly_avatar_screenshot_index');
    if (stored === null) {
      localStorage.setItem('shaifaly_avatar_screenshot_index', '0');
      return 0;
    }
    const parsed = parseInt(stored, 10);
    const validCurrent = Number.isInteger(parsed) && parsed >= 0 ? parsed : -1;
    const next = (validCurrent + 1) % total;
    localStorage.setItem('shaifaly_avatar_screenshot_index', String(next));
    return next;
  } catch {
    return 0;
  }
}

/**
 * Home page — rendered at "/".
 * Navbar, Footer, dark mode, background FX, and scroll-to-top are all
 * handled by the parent <Layout /> component via React Router's <Outlet />.
 */
export default function App() {
  // Lightbox
  const [lightboxSrc, setLightboxSrc] = useState(null);

  // Avatar rotation (stable per page load, strictly guarded against undefined/out-of-range)
  const [avatarIdx] = useState(() => getAvatarIndex());
  const safeIdx =
    Number.isInteger(avatarIdx) && avatarIdx >= 0 && avatarIdx < AVATAR_ROTATION.length
      ? avatarIdx
      : 0;
  const avatarData = AVATAR_ROTATION[safeIdx] || AVATAR_ROTATION[0];

  // Activate scroll reveal on mount
  useScrollReveal();

  return (
    <>
      {/* Lightbox */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}

      {/* Main content */}
      <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 24px 100px', position: 'relative', zIndex: 10 }}>
        <HeroSection avatarSrc={avatarData?.src} cloudQuote={avatarData?.quote} />
        <OverviewSection />
        <AboutSection />
        <ServicesSection />
        <PollSection />
        <ShortsSection />
        <GallerySection onImageClick={(src) => setLightboxSrc(src)} />
        <TestimonialsSection />
        <PoshSection />
        <StorySection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Affirmation widget */}
      <AffirmationWidget currentQuote={avatarData?.quote} />
    </>
  );
}
