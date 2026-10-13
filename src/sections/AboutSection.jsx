import { UserCircle, Award, Clock, Users, Shield, CheckCircle, BookOpen } from 'lucide-react';

const credentialItems = [
  { icon: <Award size={16} />, label: 'ICF-certified Life Coach' },
  { icon: <Clock size={16} />, label: '400+ hours of coaching delivered' },
  { icon: <Users size={16} />, label: '500+ individuals supported' },
  { icon: <Shield size={16} />, label: 'External POSH Member' },
  { icon: <CheckCircle size={16} />, label: 'She-Box Registered' },
  { icon: <BookOpen size={16} />, label: 'POSH Trainer' },
];

const ListItem = ({ text }) => (
  <li style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
    <span style={{ width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%', marginTop: 10, flexShrink: 0, boxShadow: '0 0 0 4px rgba(238,187,84,0.2)' }} />
    <span>{text}</span>
  </li>
);

export default function AboutSection() {
  return (
    <section className="section stack-section reveal" id="about">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div className="glass-panel">
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
            <UserCircle size={16} /> Meet Shaifaly Sangal
          </div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
            A calm, compassionate approach.
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center', textAlign: 'left' }}>
            <img
              src="/images/1683954830807.jpeg"
              loading="lazy"
              alt="Shaifaly Sangal"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/images/WhatsApp_Image_2025-11-22_at_21.36.59-removebg-preview.png';
              }}
              style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover', border: '4px solid white', boxShadow: 'var(--glass-shadow)', background: 'var(--aurora-2)' }}
            />

            {/* Role pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 10 }}>
              {['Life Coach', 'Healer', 'POSH Consultant', 'Author'].map((role) => (
                <div key={role} style={{
                  fontSize: '0.75rem', padding: '8px 16px', borderRadius: 999,
                  background: 'var(--glass-surface)', border: '1px solid var(--glass-border)',
                  color: 'var(--text-main)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                  {role}
                </div>
              ))}
            </div>

            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr', gap: 32 }}>
              <div>
                <h4 style={{ marginBottom: 12, color: 'var(--accent-pop)', fontFamily: 'Outfit' }}>Why people come here</h4>
                <ul style={{ listStyle: 'none' }}>
                  <ListItem text="To find stress relief, emotional healing, and inner balance" />
                  <ListItem text="To gain clarity, confidence, and direction in life or work" />
                  <ListItem text="To release emotional blocks affecting health, relationships, or career" />
                  <ListItem text="To ensure POSH compliance and create a safe, respectful workplace" />
                </ul>
              </div>

              <div>
                <h4 style={{ marginBottom: 12, color: 'var(--accent-pop)', fontFamily: 'Outfit' }}>Who I work with</h4>
                <ul style={{ listStyle: 'none' }}>
                  <ListItem text="Individuals seeking clarity, healing, confidence, and emotional well-being" />
                  <ListItem text="Organisations committed to POSH compliance, gender sensitisation, and ethical workplace practices" />
                </ul>
              </div>

              <div>
                <h4 style={{ marginBottom: 12, color: 'var(--accent-pop)', fontFamily: 'Outfit' }}>What defines my work</h4>
                <ul style={{ listStyle: 'none' }}>
                  <ListItem text="25+ years of professional experience" />
                  <ListItem text="A calm, practical, human-centric approach" />
                  <ListItem text="Focus on simplicity over complexity" />
                  <ListItem text="Support that is confidential, judgement-free, and result-oriented" />
                </ul>
              </div>

              <div>
                <h4 style={{ marginBottom: 12, color: 'var(--accent-pop)', fontFamily: 'Outfit' }}>Experience &amp; credentials</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {credentialItems.map((item) => (
                    <div key={item.label} style={{
                      padding: '6px 12px', background: 'rgba(99,102,241,0.05)',
                      color: 'var(--text-muted)', borderRadius: 8, fontSize: '0.85rem',
                      border: '1px solid rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', gap: 6,
                    }}>
                      {item.icon} {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
