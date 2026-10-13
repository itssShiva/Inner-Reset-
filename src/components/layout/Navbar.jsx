import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

export default function Navbar({ isDark, onToggleDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  function closeMobile() {
    setMobileOpen(false);
  }

  function handleNavClick(e, href) {
    closeMobile();

    if (isHome) {
      if (href === '#hero' || href === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.location.hash) {
          window.history.pushState(null, '', '/');
        }
      } else if (href.startsWith('#')) {
        e.preventDefault();
        const id = href.replace('#', '');
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        }
      } else {
        e.preventDefault();
        navigate(href.startsWith('/') ? href : `/${href}`);
      }
    } else {
      e.preventDefault();
      if (href === '#hero' || href === '/') {
        navigate('/');
      } else if (href.startsWith('#')) {
        navigate('/' + href);
      } else {
        navigate(href.startsWith('/') ? href : `/${href}`);
      }
    }
  }

  return (
    <div className="nav-shell">
      <nav className="nav" id="navBar">
        {/* Brand */}
        <a
          href={isHome ? '#hero' : '/'}
          className="brand"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <div className="brand-logo">
            <img
              src="/images/WhatsApp_Image_2025-11-22_at_21.36.59-removebg-preview.png"
              alt="Shaifaly Sangal"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/favicon.png';
              }}
            />
          </div>
          <div className="brand-text">
            <span className="brand-title">Inner Reset by Yung Minds</span>
            <span className="brand-sub">An initiative by Shaifaly Sangal</span>
          </div>
        </a>


        {/* Nav Links */}
        <div className={`nav-links ${mobileOpen ? 'mobile open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="nav-link primary"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Book a Call
          </a>
        </div>

        {/* Controls */}
        <div className="nav-controls">
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="nav-toggle"
            id="navToggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </div>
  );
}
