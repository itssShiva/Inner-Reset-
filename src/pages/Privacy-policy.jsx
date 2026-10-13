const PrivacyPolicy = () => {
  return (
    <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '40px 24px 100px', position: 'relative', zIndex: 10 }}>
      <div className="glass-panel">

        {/* Eyebrow */}
        <div className="eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Legal &amp; Policy
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)', lineHeight: 1.15, margin: '0 0 12px' }}>
          Privacy Policy
        </h1>

        {/* Last updated badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 24, padding: '6px 14px', background: 'rgba(0,0,0,0.03)', borderRadius: 999, border: '1px solid rgba(0,0,0,0.05)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Last Updated: 7 October 2026
        </div>

        {/* Intro */}
        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.8, margin: '0 0 16px', fontWeight: 500 }}>
          At Inner Reset by Yung Minds, we respect your privacy and are committed to protecting your personal information.
        </p>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 28px' }}>
          This Privacy Policy explains how we collect, use, store and protect information when you visit or use our website, purchase our products or services, or communicate with us.
        </p>

        {/* ── Sections ── */}
        {[
          {
            title: '1. Information We Collect',
            content: (
              <>
                <p style={pStyle}>Depending on how you interact with our website, we may collect:</p>
                <ul style={ulStyle}>
                  {['Name','Email address','Phone number','Billing and shipping address','Order and transaction details','Information provided while contacting us','Information relating to coaching or affirmation services where voluntarily provided','Device, browser and website usage information','IP address and technical information','Information necessary to process payments and fulfil orders'].map(i => <li key={i} style={liStyle}>{i}</li>)}
                </ul>
                <p style={pStyle}>We collect only information that is reasonably required to provide our products and services and operate our website.</p>
              </>
            ),
          },
          {
            title: '2. How We Use Your Information',
            content: (
              <>
                <p style={pStyle}>We may use your information to:</p>
                <ul style={ulStyle}>
                  {['Process and fulfil orders','Process payments','Arrange delivery of physical products','Provide coaching, affirmation and other services','Communicate with you regarding your order or enquiry','Provide customer support','Process cancellations, refunds or replacements','Improve our products, services and website','Send updates, offers or promotional communications where you have provided consent','Prevent fraud, misuse or unauthorised activity','Comply with applicable legal and regulatory requirements'].map(i => <li key={i} style={liStyle}>{i}</li>)}
                </ul>
              </>
            ),
          },
          {
            title: '3. Payment Information',
            content: (
              <>
                <p style={pStyle}>Payments made through our website may be processed through PhonePe or other authorised payment service providers.</p>
                <p style={pStyle}>We do not intentionally store your complete debit card, credit card, banking or other sensitive payment credentials on our own systems.</p>
                <p style={pStyle}>Payment information is handled by the relevant payment service provider in accordance with its applicable terms and privacy practices.</p>
              </>
            ),
          },
          {
            title: '4. Shipping and Delivery Information',
            content: <p style={pStyle}>For physical product orders, we may share relevant information such as your name, phone number and delivery address with courier and logistics partners solely for fulfilling and delivering your order.</p>,
          },
          {
            title: '5. Communications',
            content: (
              <>
                <p style={pStyle}>If you contact us through email, phone, WhatsApp or other communication channels, we may retain the information necessary to respond to your enquiry and maintain appropriate business records.</p>
                <p style={pStyle}>Where applicable, you may receive transactional messages relating to your orders, services or account.</p>
                <p style={pStyle}>Promotional communications will be sent in accordance with applicable requirements and your preferences.</p>
              </>
            ),
          },
          {
            title: '6. Cookies and Website Technologies',
            content: (
              <>
                <p style={pStyle}>Our website may use cookies and similar technologies to:</p>
                <ul style={ulStyle}>
                  {['Enable website functionality','Remember preferences','Understand website usage','Improve user experience','Analyse website performance','Support marketing activities, where applicable'].map(i => <li key={i} style={liStyle}>{i}</li>)}
                </ul>
                <p style={pStyle}>You may be able to control cookies through your browser settings.</p>
              </>
            ),
          },
          {
            title: '7. Third-Party Services',
            content: (
              <>
                <p style={pStyle}>We may use third-party service providers for purposes such as:</p>
                <ul style={ulStyle}>
                  {['Payment processing','Website hosting and technology','Shipping and logistics','Analytics','Communication','Customer support','Marketing'].map(i => <li key={i} style={liStyle}>{i}</li>)}
                </ul>
                <p style={pStyle}>Such third parties may have access to information only to the extent reasonably necessary to perform their services.</p>
                <p style={pStyle}>We encourage you to review the privacy policies of third-party services you use.</p>
              </>
            ),
          },
          {
            title: '8. Sharing of Personal Information',
            content: (
              <>
                <p style={pStyle}>We do not sell your personal information as a commercial product.</p>
                <p style={pStyle}>We may share information where reasonably necessary to:</p>
                <ul style={ulStyle}>
                  {['Process your order','Process payments','Deliver products','Provide requested services','Operate our website','Prevent fraud or misuse','Comply with applicable law','Protect our legal rights, customers or business'].map(i => <li key={i} style={liStyle}>{i}</li>)}
                </ul>
              </>
            ),
          },
          {
            title: '9. Data Security',
            content: (
              <>
                <p style={pStyle}>We take reasonable administrative, technical and organisational measures to protect personal information from unauthorised access, misuse, alteration or disclosure.</p>
                <p style={pStyle}>However, no method of transmission or electronic storage can be guaranteed to be completely secure.</p>
              </>
            ),
          },
          {
            title: '10. Data Retention',
            content: <p style={pStyle}>We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including order fulfilment, customer support, business records, legal, tax and regulatory requirements.</p>,
          },
          {
            title: '11. Your Privacy Rights',
            content: (
              <>
                <p style={pStyle}>Subject to applicable law, you may contact us to:</p>
                <ul style={ulStyle}>
                  {['Request information regarding your personal data','Request correction of inaccurate information','Request deletion of information where legally permissible','Withdraw consent for certain communications','Raise a privacy-related concern'].map(i => <li key={i} style={liStyle}>{i}</li>)}
                </ul>
                <p style={pStyle}>Requests may be sent to:</p>
                <div style={contactBoxStyle}>
                  <p style={{ margin: '0 0 8px', fontSize: '0.98rem', color: 'var(--text-main)' }}>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:shaifalyhealer@gmail.com" style={linkStyle}>shaifalyhealer@gmail.com</a>
                  </p>
                  <p style={{ margin: 0, fontSize: '0.98rem', color: 'var(--text-main)' }}>
                    <strong>Phone/WhatsApp:</strong>{' '}
                    <a href="tel:+918448241379" style={linkStyle}>+91 84482 41379</a>
                  </p>
                </div>
              </>
            ),
          },
          {
            title: '12. Third-Party Links',
            content: (
              <>
                <p style={pStyle}>Our website may contain links to third-party websites or platforms.</p>
                <p style={pStyle}>We are not responsible for the privacy practices or content of those third-party websites. We recommend reviewing their respective privacy policies.</p>
              </>
            ),
          },
          {
            title: "13. Children's Privacy",
            content: (
              <>
                <p style={pStyle}>Our website and services are not specifically directed at children.</p>
                <p style={pStyle}>We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.</p>
              </>
            ),
          },
          {
            title: '14. Changes to This Privacy Policy',
            content: (
              <>
                <p style={pStyle}>We may update this Privacy Policy from time to time to reflect changes in our business, services, technology or applicable legal requirements.</p>
                <p style={pStyle}>Any updated version will be posted on this page with the revised date.</p>
              </>
            ),
          },
        ].map(({ title, content }) => (
          <section key={title} style={sectionStyle}>
            <h2 style={h2Style}>{title}</h2>
            {content}
          </section>
        ))}

        {/* Contact */}
        <section style={sectionStyle}>
          <h2 style={h2Style}>15. Contact Us</h2>
          <div style={{ background: 'var(--glass-surface)', border: '1px solid var(--glass-border)', borderRadius: 20, padding: '24px 28px', boxShadow: 'var(--glass-shadow)' }}>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 6px', fontFamily: "'Outfit', sans-serif" }}>
              Inner Reset by Yung Minds
            </p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 4px' }}>Inner Reset, Pan Oasis, Sector 70,</p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 16px' }}>Noida – 201301, Uttar Pradesh, India</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', margin: 0 }}>
                <strong>Email:</strong>{' '}
                <a href="mailto:shaifalyhealer@gmail.com" style={linkStyle}>shaifalyhealer@gmail.com</a>
              </p>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', margin: 0 }}>
                <strong>Phone/WhatsApp:</strong>{' '}
                <a href="tel:+918448241379" style={linkStyle}>+91 84482 41379</a>
              </p>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', margin: 0 }}>
                <strong>GSTIN:</strong> 09AZHPS2487B1Z4
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

/* ── Shared style objects ── */
const sectionStyle = { marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(226,232,240,0.9)' };
const h2Style = { fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 14px', letterSpacing: '-0.01em' };
const pStyle = { fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 12px' };
const ulStyle = { margin: '0 0 16px 22px', padding: 0, color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.98rem' };
const liStyle = { marginBottom: 6, paddingLeft: 4 };
const linkStyle = { color: '#6366f1', textDecoration: 'underline', fontWeight: 600 };
const contactBoxStyle = { background: 'var(--glass-surface)', border: '1px solid rgba(99,102,241,0.16)', borderRadius: 16, padding: '16px 20px', marginTop: 10 };

export default PrivacyPolicy;