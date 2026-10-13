import { Infinity as InfinityIcon, ShoppingCart } from 'lucide-react';
import { LINKS } from '../constants';

export default function StorySection() {
  return (
    <section className="section stack-section reveal" id="story">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
          <InfinityIcon size={16} /> A Connected Lens
        </div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 24 }}>
          Why one person for coaching, healing &amp; POSH
        </h2>

        {/* Main message */}
        <div className="glass-panel">
          <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)', textAlign: 'center' }}>
            <p style={{ marginBottom: 16 }}>
              People don't leave emotions at home when they come to work.<br />
              And organisations are ultimately made of people.
            </p>
            <p style={{ marginBottom: 16 }}>
              My work brings together clarity, calm, and structure - whether the need is personal healing or professional responsibility.
            </p>
            <p style={{ fontWeight: 700, color: 'var(--text-main)' }}>
              The intention is always the same: to create awareness, safety, balance, trust, and sustainable outcomes.
            </p>
          </div>
        </div>

        {/* Two panels */}
        <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 }}>
          {/* Confidentiality panel */}
          <div className="glass-panel">
            <div style={{ fontWeight: 700, fontFamily: 'Outfit', marginBottom: 8, fontSize: '1.1rem' }}>Confidentiality &amp; Ethics</div>
            <p style={{ fontSize: '0.9rem' }}>
              Individual coaching and healing sessions are confidential. POSH work is carried out with neutrality, independence, and legal adherence. Healing remains non-medical.
            </p>
          </div>

          {/* Book panel */}
          <div
            className="glass-panel"
            style={{ background: 'linear-gradient(135deg, var(--text-main), #000)', color: 'white' }}
          >
            <div style={{ fontWeight: 700, fontFamily: 'Outfit', marginBottom: 8, fontSize: '1.1rem' }}>Author: Expect Miracles</div>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              "Expect Miracles from Ho'oponopono" explores inner healing and responsibility. Available online.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
              <a
                href={LINKS.amazon}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 14px', borderRadius: 99, fontSize: '0.8rem', textDecoration: 'none',
                  color: 'white', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600,
                  background: '#232f3e', transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                <ShoppingCart size={16} /> Shop on Amazon
              </a>
              <a
                href={LINKS.flipkart}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 14px', borderRadius: 99, fontSize: '0.8rem', textDecoration: 'none',
                  color: 'white', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600,
                  background: '#2874f0', transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                <ShoppingCart size={16} /> Shop on Flipkart
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            .story-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
