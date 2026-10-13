import { useEffect } from 'react';

/**
 * Triggers scroll-reveal animations using IntersectionObserver.
 * Elements with class "reveal" animate in when scrolled into view.
 */
export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => {
      // If already in viewport on mount, activate immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('active');
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
