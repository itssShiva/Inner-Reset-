import { useState } from 'react';
import { HelpCircle, Monitor, HeartPulse, Stethoscope, MapPin, Lock } from 'lucide-react';
import { FAQS } from '../constants';

const ICON_MAP = {
  Monitor: <Monitor size={18} />,
  HeartPulse: <HeartPulse size={18} />,
  Stethoscope: <Stethoscope size={18} />,
  MapPin: <MapPin size={18} />,
  Lock: <Lock size={18} />,
};

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  function toggle(idx) {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  }

  return (
    <section className="section stack-section reveal" id="faqs">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
          <HelpCircle size={16} /> Clarity before you begin
        </div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
          Frequently asked questions.
        </h2>

        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                style={{
                  marginBottom: 16, border: '1px solid var(--glass-border)',
                  overflow: 'hidden', borderRadius: 'var(--radius-xl)',
                  background: 'var(--glass-surface)', backdropFilter: 'blur(24px)', position: 'relative',
                }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => { if (e.key === 'Enter') toggle(idx); }}
                  style={{
                    padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.2)',
                  }}
                  aria-expanded={isOpen}
                >
                  <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.05rem' }}>
                    {ICON_MAP[faq.icon]} {faq.question}
                  </div>
                  <div
                    style={{
                      width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1rem', flexShrink: 0,
                      border: isOpen ? 'none' : '1px solid var(--text-muted)',
                      background: isOpen ? 'var(--text-main)' : 'transparent',
                      color: isOpen ? 'white' : 'var(--text-muted)',
                      transition: 'all 0.2s',
                    }}
                  >
                    {isOpen ? '–' : '+'}
                  </div>
                </div>
                <div className="faq-body">
                  <div style={{ padding: 24, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, background: 'rgba(255,255,255,0.05)' }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
