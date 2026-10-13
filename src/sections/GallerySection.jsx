import { ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

export default function GallerySection({ onImageClick }) {
  return (
    <section className="section stack-section reveal" id="gallery">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
          <ImageIcon size={16} /> Our Gallery
        </div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
          Workshops, sessions &amp; reflection.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            marginTop: 32,
          }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              style={{
                height: 240, borderRadius: 24, overflow: 'hidden', position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
              onClick={() => onImageClick(img.src)}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onImageClick(img.src); }}
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                loading="lazy"
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s', display: 'block' }}
                onError={(e) => {
                  if (!e.currentTarget.dataset.triedFallback) {
                    e.currentTarget.dataset.triedFallback = 'true';
                    e.currentTarget.src = '/images/1683954830807.jpeg';
                  }
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              />
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) { #gallery .section-inner > div[style] { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}
