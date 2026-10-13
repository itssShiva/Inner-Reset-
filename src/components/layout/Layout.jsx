import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Root layout — shared across every route.
 * Manages dark mode & scroll-to-top; renders Navbar, the matched child
 * route via <Outlet />, and Footer.
 */
export default function Layout() {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem('shaifaly_dark_mode') === 'true';
    } catch {
      return false;
    }
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Scroll restoration and anchor hash handling across route navigations
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        const timer = setTimeout(scrollToHash, 120);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // Sync dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('shaifaly_dark_mode', String(isDark));
    } catch {
      // private browsing – ignore
    }
  }, [isDark]);

  // Show/hide scroll-to-top button
  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 300);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Activate scroll reveal on every page
  useScrollReveal();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {/* Background effects */}
      <div className="grain-overlay" />
      <div className="aurora-container">
        <div className="aurora-blob blob-1" />
        <div className="aurora-blob blob-2" />
        <div className="aurora-blob blob-3" />
        <div className="aurora-blob blob-4" />
      </div>

      {/* Navbar */}
      <Navbar isDark={isDark} onToggleDark={() => setIsDark((d) => !d)} />

      {/* Page content injected here by the router */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Scroll to top */}
      <button
        className={`scroll-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
