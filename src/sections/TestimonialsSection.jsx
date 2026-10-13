import { Quote, Play } from 'lucide-react';
import { TESTIMONIALS, TRANSFORMATION_VIDEOS } from '../constants';

export default function TestimonialsSection() {
  return (
    <section className="section stack-section reveal" id="testimonials">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
          <Quote size={16} /> Testimonials
        </div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
          What people and organisations say.
        </h2>

        {/* Testimonial cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 32 }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-panel glass-card-shine"
              style={{ fontSize: '0.95rem', lineHeight: 1.8, borderRadius: 'var(--radius-xl)', padding: 32 }}
            >
              <p style={{ marginBottom: 16, fontStyle: 'italic', opacity: 0.9 }}>{t.quote}</p>
              <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent-pop)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {t.meta}
              </p>
            </div>
          ))}
        </div>

        {/* Transformation videos */}
        <h3 style={{ marginTop: 48, fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--text-main)', fontSize: '1.5rem' }}>
          People's Transformation
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 24 }}>
          {TRANSFORMATION_VIDEOS.map((v) => (
            <a
              key={v.videoId}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-card-shine"
              style={{
                aspectRatio: '16/9', borderRadius: 24, overflow: 'hidden', position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.4s var(--ease-elastic), box-shadow 0.4s',
                display: 'block', padding: 0, textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'; }}
            >
              <img
                src={`https://img.youtube.com/vi/${v.videoId}/maxresdefault.jpg`}
                loading="lazy"
                alt="People's Transformation"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`;
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', border: 'none', transition: '0.5s' }}
              />
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 48, height: 48, background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', border: '1px solid rgba(255,255,255,0.5)',
              }}>
                <Play size={24} fill="currentColor" />
              </div>
            </a>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            #testimonials .section-inner > div:first-of-type { grid-template-columns: 1fr !important; }
            #testimonials .section-inner > div:last-of-type { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 600px) {
            #testimonials .section-inner > div:last-of-type { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
