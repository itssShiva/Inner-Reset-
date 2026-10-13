import { Building2, BadgeCheck, Users, Briefcase } from 'lucide-react';
import { LINKS } from '../constants';

const ListItem = ({ text }) => (
  <li style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
    <span style={{ width: 8, height: 8, background: 'var(--accent-gold)', borderRadius: '50%', marginTop: 10, flexShrink: 0, boxShadow: '0 0 0 4px rgba(238,187,84,0.2)' }} />
    <span>{text}</span>
  </li>
);

export default function PoshSection() {
  const pills = [
    { href: LINKS.sheBox, icon: <BadgeCheck size={16} />, label: 'She-Box Registered', isLink: true },
    { icon: <Users size={16} />, label: 'External Member', isLink: false },
    { icon: <Briefcase size={16} />, label: '25+ Years Exp', isLink: false },
  ];

  return (
    <section className="section stack-section reveal" id="posh">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
          <Building2 size={16} /> For Organisations
        </div>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
          POSH compliance that is human, respectful and lawful.
        </h2>
        <p>Organisations usually reach out when they want their POSH work to be more than a policy file - when they want structures that are compliant, consistent, and genuinely safer.</p>

        <ul style={{ listStyle: 'none', marginTop: 24 }}>
          <ListItem text="External Member services under the POSH Act, 2013." />
          <ListItem text="POSH awareness programs that move beyond slides into real conversations." />
          <ListItem text="ICC training and capacity-building with practical scenarios and clarity on roles." />
          <ListItem text="Policy review, compliance support, and assistance with annual reporting." />
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24, marginTop: 16 }}>
          {pills.map((p) =>
            p.isLink ? (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.75rem', padding: '8px 16px', borderRadius: 999,
                  background: 'var(--glass-surface)', border: '1px solid var(--glass-border)',
                  color: 'var(--text-main)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em',
                  display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.03)', transition: '0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--text-main)'; e.currentTarget.style.color = 'var(--bg-light)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--glass-surface)'; e.currentTarget.style.color = 'var(--text-main)'; }}
              >
                {p.icon} {p.label}
              </a>
            ) : (
              <div
                key={p.label}
                style={{
                  fontSize: '0.75rem', padding: '8px 16px', borderRadius: 999,
                  background: 'var(--glass-surface)', border: '1px solid var(--glass-border)',
                  color: 'var(--text-main)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em',
                  display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                }}
              >
                {p.icon} {p.label}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
