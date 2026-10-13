import { MessageCircle, Sparkles } from 'lucide-react';

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function OverviewSection() {
  const metrics = [
    { icon: <MessageCircle size={16} />, label: 'Life Coaching', value: '400+ hours', sub: 'Leaders, professionals, entrepreneurs' },
    { icon: <Sparkles size={16} />, label: 'Healing', value: '500+ people', sub: 'Health, relationships, career, money' },
  ];

  const links = [
    { href: 'https://www.youtube.com/@Shaifalyhealer', icon: <YouTubeIcon />, iconClass: 'youtube', title: 'YouTube', sub: 'Guided Healing' },
    { href: 'https://www.linkedin.com/in/shaifalysangal/', icon: <LinkedInIcon />, iconClass: 'linkedin', title: 'LinkedIn', sub: 'Leadership' },
    { href: 'https://www.instagram.com/shaifalysangal?rpxt=MTN3dWludm42c3Q4Nw==', icon: <InstagramIcon />, iconClass: 'instagram', title: 'Instagram', sub: '@shaifalysangal' },
  ];

  return (
    <section className="section stack-section reveal">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <h2 className="title" style={{ textAlign: 'center', fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
          A calm, structured way to move forward.
        </h2>
        <p style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 24px' }}>
          People come in with overlapping questions about life, health, relationships, money and workplace safety.
        </p>

        <div className="glass-panel glass-panel-hover" style={{ marginTop: 40 }}>
          {/* Status pill */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px',
            borderRadius: 999, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', background: '#dcfce7', color: '#15803d',
            border: '1px solid #bbf7d0', marginBottom: 16,
          }}>
            <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(34,197,94,0.3)' }} />
            Work with Shaifaly
          </div>

          <p style={{ fontSize: '1.05rem', marginBottom: 24 }}>
            Stuck in life or career. Emotionally exhausted. Carrying health stress, relationship pain,
            money anxiety, or wanting safer and more compliant workplaces.
          </p>

          {/* Metrics */}
          <div className="overview-metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginTop: 24 }}>
            {metrics.map((m) => (
              <div key={m.label} style={{
                background: 'rgba(255,255,255,0.5)', padding: 16, borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.6)', textAlign: 'left',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: 6 }}>
                  {m.icon} {m.label}
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit', color: 'var(--text-main)' }}>{m.value}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="overview-links-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 16 }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-card-shine glass-panel-hover"
                style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 10, borderRadius: 16, textDecoration: 'none', color: 'inherit' }}
              >
                <div className={`hero-link-icon ${link.iconClass}`} style={{
                  width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, background: '#fff', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)',
                  ...(link.iconClass === 'youtube' ? { background: '#fee2e2', color: '#ef4444' } :
                     link.iconClass === 'linkedin' ? { background: '#dbeafe', color: '#0a66c2' } :
                     link.iconClass === 'instagram' ? { background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#ffffff' } :
                     { background: '#111827', color: '#fff' }),
                }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{link.title}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-pop)' }}>{link.sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Testimonial strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 24, padding: 16, background: 'rgba(255,255,255,0.4)', borderRadius: 16 }}>
            <div style={{ display: 'flex' }}>
              {['#fecaca', '#bbf7d0', '#bfdbfe'].map((bg, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid white', marginLeft: i === 0 ? 0 : -10, background: bg }} />
              ))}
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              "Sessions create a calm, honest space - with clarity and practical next steps."
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .overview-links-grid { grid-template-columns: 1fr !important; }
            .overview-metrics-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
