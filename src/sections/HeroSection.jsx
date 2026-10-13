import { useState } from 'react';
import { Sparkles, Calendar, LayoutGrid } from 'lucide-react';

const DEFAULT_AVATAR = '/images/1683954830807.jpeg';
const DEFAULT_QUOTE = '"Take one slow, deep breath. Your nervous system thanks you every time you pause." ☁️';

export default function HeroSection({ avatarSrc, cloudQuote }) {
  const resolvedSrc = avatarSrc || DEFAULT_AVATAR;
  const [fallbackSrc, setFallbackSrc] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const currentSrc = fallbackSrc || resolvedSrc;

  return (
    <section
      className="hero-section hero-reveal"
      id="hero"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '48px',
        alignItems: 'center',
        minHeight: '85vh',
        paddingTop: '60px',
        paddingBottom: '40px',
      }}
    >
      {/* Left */}
      <div style={{ textAlign: 'left' }}>
        <div
          className="eyebrow"
          style={{
            fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700,
            color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99,
          }}
        >
          <Sparkles size={14} />
          Helping individuals &amp; workplaces heal and grow
        </div>

        <h1
          className="title-xl"
          style={{
            fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            lineHeight: 1.1, marginBottom: 24, fontWeight: 700, letterSpacing: '-0.02em',
          }}
        >
          Where <span className="highlight text-gradient">personal transformation</span> meets professional responsibility.
        </h1>

        <p style={{ fontSize: '1.25rem', maxWidth: 740, marginBottom: 32 }}>
          Life Coaching, Healing, and POSH Consulting woven together to create awareness, safety,
          balance, and empowered decisions - for individuals and for organisations.
        </p>

        <div className="hero-buttons" style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
          <a href="#contact" className="btn" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)', color: 'white', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}>
            <Calendar size={18} /> Book a Conversation
          </a>
          <a href="#services" className="btn" style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }}>
            <LayoutGrid size={18} /> Explore Services
          </a>
        </div>
      </div>

      {/* Right: Avatar Card */}
      <div>
        <div className="avatar-card glass-card-shine">
          {/* Cloud quote */}
          <div className="cloud-quote">{cloudQuote || DEFAULT_QUOTE}</div>

          {/* Avatar window */}
          <div
            style={{
              width: '100%', height: 360, borderRadius: 20, overflow: 'hidden',
              background: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Subtle loading spinner while high-res/gif avatar downloads */}
            {!imgLoaded && (
              <div
                style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', background: 'rgba(255,255,255,0.15)',
                }}
              >
                <div className="spinner" />
              </div>
            )}
            <img
              key={resolvedSrc}
              src={currentSrc}
              alt="Shaifaly Sangal - Interactive Avatar"
              onLoad={() => setImgLoaded(true)}
              onError={() => {
                if (currentSrc !== DEFAULT_AVATAR) {
                  setFallbackSrc(DEFAULT_AVATAR);
                  setImgLoaded(true);
                }
              }}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.4s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* Responsive override for mobile */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-reveal {
          animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (max-width: 900px) {
          #hero { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center !important; }
          #hero > div:first-child { text-align: center !important; }
          #hero .hero-buttons, #hero > div:first-child > div:last-child { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
