import { useState } from 'react';
import { LayoutDashboard, Compass, HeartHandshake, ShieldCheck, Check, Map } from 'lucide-react';
import { SERVICES } from '../constants';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const TAB_ICONS = { Compass: <Compass size={18} />, HeartHandshake: <HeartHandshake size={18} />, ShieldCheck: <ShieldCheck size={18} /> };

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('coaching');

  const activeService = SERVICES.find((s) => s.id === activeTab);

  return (
    <section className="section stack-section reveal" id="services">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
          <LayoutDashboard size={16} /> Signature Work
        </div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
          Three ways we can work together.
        </h2>
        <p style={{ marginBottom: 24 }}>Most people arrive with overlapping questions about life, health, relationships, money, and workplace safety.</p>

        {/* Tabs */}
        <div style={{ marginTop: 40 }}>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex', background: 'rgba(0,0,0,0.05)', padding: 6,
                borderRadius: 999, position: 'relative', marginBottom: 30,
              }}
            >
              {SERVICES.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setActiveTab(svc.id)}
                  className="transition-all duration-300"
                  style={{
                    padding: '12px 30px', borderRadius: 999, border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontFamily: 'inherit', fontSize: '0.9rem',
                    background: activeTab === svc.id ? 'var(--glass-surface)' : 'transparent',
                    color: activeTab === svc.id ? 'var(--text-main)' : 'var(--text-muted)',
                    boxShadow: activeTab === svc.id ? '0 4px 15px rgba(0,0,0,0.05)' : 'none',
                  }}
                >
                  {TAB_ICONS[svc.icon]} {svc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Panel */}
          {activeService && (
            <div className="tab-panel active">
              <div
                className="glass-panel services-tab-grid"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'start' }}
              >
                <div>
                  <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-pop)', marginBottom: 8, fontWeight: 700 }}>
                    {activeService.heading}
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'Outfit', marginBottom: 16 }}>
                    {activeService.title}
                  </div>
                  <p>{activeService.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                    {activeService.tags.map((tag) => (
                      <div key={tag} style={{ padding: '6px 12px', background: 'rgba(99,102,241,0.05)', color: 'var(--text-muted)', borderRadius: 8, fontSize: '0.85rem', border: '1px solid rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Check size={14} /> {tag}
                      </div>
                    ))}
                  </div>
                  <a
                    href={activeService.whatsappLink}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 24, textDecoration: 'none', background: 'rgba(34,197,94,0.1)', color: '#166534', border: '1px solid rgba(34,197,94,0.3)' }}
                  >
                    <WhatsAppIcon /> <span>Chat on WhatsApp</span>
                  </a>
                </div>
                <img
                  src={activeService.image}
                  loading="lazy"
                  style={{ width: '100%', borderRadius: 20 }}
                  alt={activeService.label}
                />
              </div>
            </div>
          )}
        </div>

        {/* Engagement flow */}
        <div className="glass-panel" style={{ marginTop: 32 }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
            <Map size={16} /> How a typical engagement flows
          </div>
          <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <p><strong>1. A first conversation.</strong> A short call or message-based exchange to understand your current challenge.</p>
            <p><strong>2. Choosing the path.</strong> Together, we clarify which stream serves you best right now - with clear boundaries.</p>
            <p><strong>3. Working session by session.</strong> Sessions are paced mindfully. The focus stays on awareness and sustainable change.</p>
          </div>
        </div>

        {/* Responsive style */}
        <style>{`
          @media (max-width: 768px) {
            .services-tab-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
