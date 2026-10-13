/* ── Shared style objects ── */
const wrapStyle = { maxWidth: 'var(--max-width)', margin: '0 auto', padding: '40px 24px 100px', position: 'relative', zIndex: 10 };
const sectionStyle = { marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(226,232,240,0.9)' };
const h2Style = { fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 14px', letterSpacing: '-0.01em' };
const pStyle = { fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 12px' };
const ulStyle = { margin: '0 0 16px 22px', padding: 0, color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.98rem' };
const liStyle = { marginBottom: 6, paddingLeft: 4 };
const linkStyle = { color: '#6366f1', textDecoration: 'underline', fontWeight: 600 };
const contactCardStyle = { background: 'var(--glass-surface)', border: '1px solid var(--glass-border)', borderRadius: 20, padding: '24px 28px', boxShadow: 'var(--glass-shadow)' };

const Terms = () => {
  return (
    <div style={wrapStyle}>
      <div className="glass-panel">

        {/* Eyebrow */}
        <div className="eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Legal &amp; Policy
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)', lineHeight: 1.15, margin: '0 0 12px' }}>
          Terms &amp; Conditions
        </h1>

        {/* Last updated */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 24, padding: '6px 14px', background: 'rgba(0,0,0,0.03)', borderRadius: 999, border: '1px solid rgba(0,0,0,0.05)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          Last Updated: 7 October 2026
        </div>

        <p style={{ ...pStyle, fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500 }}>Welcome to Inner Reset by Yung Minds.</p>
        <p style={pStyle}>By accessing or using our website, purchasing our products or services, or otherwise engaging with our website, you agree to these Terms &amp; Conditions.</p>
        <p style={{ ...pStyle, margin: '0 0 28px' }}>Please read them carefully before placing an order.</p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. About Inner Reset</h2>
          <p style={pStyle}>Inner Reset by Yung Minds offers intention-based products and services including affirmation products, wellness-oriented products, coaching and related offerings.</p>
          <p style={pStyle}>Our products are designed as tools for intention-setting, mindfulness, affirmation, reflection and personal rituals.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Use of Our Website</h2>
          <p style={pStyle}>You agree to use our website only for lawful purposes.</p>
          <p style={pStyle}>You must not:</p>
          <ul style={ulStyle}>
            {['Misuse the website','Attempt to gain unauthorised access','Introduce malicious software','Copy or reproduce website content without permission','Use our website for fraudulent or unlawful activities','Interfere with the operation or security of the website'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Product Information</h2>
          <p style={pStyle}>We make reasonable efforts to ensure that product descriptions, photographs and information displayed on the website are accurate.</p>
          <p style={pStyle}>However:</p>
          <ul style={ulStyle}>
            {['Colours may vary slightly depending on your screen.','Handmade or individually produced products may have minor variations.','Packaging or design may occasionally change.','Product dimensions and specifications may have reasonable manufacturing variations.'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>Such minor variations do not necessarily constitute a defect.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Orders</h2>
          <p style={pStyle}>When you place an order, you are making an offer to purchase the selected product or service.</p>
          <p style={pStyle}>An order is considered accepted once we confirm the order and/or initiate fulfilment.</p>
          <p style={pStyle}>We reserve the right to cancel an order in circumstances including:</p>
          <ul style={ulStyle}>
            {['Product unavailability','Pricing or listing errors','Payment issues','Suspected fraudulent transactions','Incorrect customer information','Circumstances beyond our reasonable control'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>If an order is cancelled after payment has been received, an applicable refund will be processed.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Pricing</h2>
          <p style={pStyle}>Prices displayed on the website are subject to change without prior notice.</p>
          <p style={pStyle}>Applicable taxes, shipping charges and other charges, where relevant, will be communicated at the time of purchase.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Payment</h2>
          <p style={pStyle}>Payments may be processed through PhonePe and other payment mechanisms made available on the website.</p>
          <p style={pStyle}>By completing a payment, you confirm that the payment information provided by you is accurate and that you are authorised to use the selected payment method.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Shipping</h2>
          <p style={pStyle}>Shipping charges apply to physical products and are calculated based on applicable courier/shipping charges.</p>
          <p style={pStyle}>Coaching, digital and affirmation services do not attract physical shipping charges.</p>
          <p style={pStyle}>Please refer to our Shipping &amp; Delivery Policy for further details.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Returns and Refunds</h2>
          <p style={pStyle}>Change-of-mind returns are not accepted.</p>
          <p style={pStyle}>Returns or replacements may be considered for products that arrive:</p>
          <ul style={ulStyle}>
            {['Damaged','Defective','Incorrect','Materially different from the product ordered'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>Please refer to our Refund, Return &amp; Cancellation Policy for complete details.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>9. Coaching and Affirmation Services</h2>
          <p style={pStyle}>Coaching and affirmation services are intended to support personal reflection, awareness, intention-setting and personal development.</p>
          <p style={pStyle}>They do not constitute:</p>
          <ul style={ulStyle}>
            {['Medical treatment','Psychological or psychiatric treatment','Financial advice','Legal advice','Investment advice','Guaranteed methods of achieving a particular outcome'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>Customers are responsible for their own decisions and actions.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>10. Spiritual and Wellness Products</h2>
          <p style={pStyle}>Our products may incorporate concepts such as affirmations, intention-setting, gratitude, Ho'oponopono, mindfulness and spiritual practices.</p>
          <p style={pStyle}>These products are intended as personal wellness and intention-setting tools.</p>
          <p style={pStyle}>We do not guarantee that using any product will result in a particular health, financial, relationship, career or other outcome.</p>
          <p style={pStyle}>Our products should not be used as a substitute for professional medical, psychological, legal, financial or other qualified advice.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>11. Intellectual Property</h2>
          <p style={pStyle}>All website content, including:</p>
          <ul style={ulStyle}>
            {['Text','Images','Logos','Graphics','Product concepts','Videos','Brand elements','Written materials'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>is owned by or licensed to Inner Reset by Yung Minds, unless otherwise stated.</p>
          <p style={pStyle}>You may not reproduce, distribute, modify or commercially exploit our content without prior written permission.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>12. Third-Party Services</h2>
          <p style={pStyle}>Our website may use third-party services including payment gateways, courier companies, website providers, analytics providers and communication platforms.</p>
          <p style={pStyle}>Their services may be governed by their own terms and policies.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>13. Limitation of Liability</h2>
          <p style={pStyle}>To the extent permitted by applicable law, Inner Reset by Yung Minds shall not be responsible for indirect or consequential losses arising from the use of our website, products or services.</p>
          <p style={pStyle}>Nothing in these Terms is intended to exclude any liability that cannot legally be excluded.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>14. Force Majeure</h2>
          <p style={pStyle}>We will not be responsible for delays or failure to perform obligations caused by circumstances beyond our reasonable control, including natural disasters, extreme weather, strikes, governmental restrictions, transportation disruptions, technical failures or other unforeseen events.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>15. Changes to These Terms</h2>
          <p style={pStyle}>We may update these Terms &amp; Conditions from time to time.</p>
          <p style={pStyle}>The updated version will be published on this page with the revised date.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>16. Governing Law and Jurisdiction</h2>
          <p style={pStyle}>These Terms &amp; Conditions shall be governed by the laws of India.</p>
          <p style={pStyle}>Subject to applicable law, courts having jurisdiction in Gautam Budh Nagar, Uttar Pradesh shall have jurisdiction over matters arising from these Terms.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ ...h2Style, margin: '0 0 18px' }}>17. Contact</h2>
          <div style={contactCardStyle}>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 6px', fontFamily: "'Outfit', sans-serif" }}>Inner Reset by Yung Minds</p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 4px' }}>Inner Reset, Pan Oasis, Sector 70,</p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 16px' }}>Noida – 201301, Uttar Pradesh, India</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', margin: 0 }}><strong>Email:</strong>{' '}<a href="mailto:shaifalyhealer@gmail.com" style={linkStyle}>shaifalyhealer@gmail.com</a></p>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', margin: 0 }}><strong>Phone/WhatsApp:</strong>{' '}<a href="tel:+918448241379" style={linkStyle}>+91 84482 41379</a></p>
              <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', margin: 0 }}><strong>GSTIN:</strong> 09AZHPS2487B1Z4</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Terms;