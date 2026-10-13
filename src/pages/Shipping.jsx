/* ── Shared style objects ── */
const wrapStyle = { maxWidth: 'var(--max-width)', margin: '0 auto', padding: '40px 24px 100px', position: 'relative', zIndex: 10 };
const sectionStyle = { marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(226,232,240,0.9)' };
const h2Style = { fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 14px', letterSpacing: '-0.01em' };
const pStyle = { fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 12px' };
const ulStyle = { margin: '0 0 16px 22px', padding: 0, color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.98rem' };
const liStyle = { marginBottom: 6, paddingLeft: 4 };
const linkStyle = { color: '#6366f1', textDecoration: 'underline', fontWeight: 600 };
const contactCardStyle = { background: 'var(--glass-surface)', border: '1px solid var(--glass-border)', borderRadius: 20, padding: '24px 28px', boxShadow: 'var(--glass-shadow)' };

const Shipping = () => {
  return (
    <div style={wrapStyle}>
      <div className="glass-panel">

        {/* Eyebrow */}
        <div className="eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="15" height="13" />
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
            <circle cx="5.5" cy="18.5" r="2.5" />
            <circle cx="18.5" cy="18.5" r="2.5" />
          </svg>
          Legal &amp; Policy
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4.5vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)', lineHeight: 1.15, margin: '0 0 12px' }}>
          Shipping &amp; Delivery Policy
        </h1>

        {/* Last updated */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 24, padding: '6px 14px', background: 'rgba(0,0,0,0.03)', borderRadius: 999, border: '1px solid rgba(0,0,0,0.05)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          Last Updated: 7 October 2026
        </div>

        <p style={{ ...pStyle, fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500, margin: '0 0 28px' }}>
          This Shipping &amp; Delivery Policy applies to physical products purchased from Inner Reset by Yung Minds.
        </p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Products Requiring Shipping</h2>
          <p style={pStyle}>Shipping applies only to physical products purchased through our website.</p>
          <p style={pStyle}>Examples may include:</p>
          <ul style={ulStyle}>
            {["Inner Reset Blue Glass Bottle", "Inner Reset Ho'oponopono Acrylic", "Inner Reset Money Box", "Intention Cards", "Other physical products offered on the website"].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>Coaching, digital and affirmation services do not require physical shipping and therefore do not attract shipping charges.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Shipping Charges</h2>
          <p style={pStyle}>Shipping charges for physical products are additional and applicable as per actual courier/shipping charges.</p>
          <p style={pStyle}>The applicable shipping charge will be displayed or communicated at the time of purchase, as applicable.</p>
          <p style={pStyle}>There is currently no universal free-shipping threshold.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Delivery Timeline</h2>
          <p style={pStyle}>Orders for physical products are generally delivered within:</p>
          <ul style={ulStyle}><li style={liStyle}>5–7 working days across India</li></ul>
          <p style={pStyle}>Delivery timelines may vary depending on:</p>
          <ul style={ulStyle}>
            {['Delivery location', 'Courier availability', 'Weather conditions', 'Public holidays', 'Transportation disruptions', 'Incorrect or incomplete address information', 'Circumstances beyond our reasonable control'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>The delivery timeline is an estimated timeframe and not an absolute guarantee.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Order Processing</h2>
          <p style={pStyle}>Orders are generally processed after successful payment confirmation.</p>
          <p style={pStyle}>Processing may take additional time during:</p>
          <ul style={ulStyle}>
            {['Festivals', 'Promotional periods', 'High-order-volume periods', 'Holidays', 'Unforeseen operational circumstances'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Incorrect Address or Contact Details</h2>
          <p style={pStyle}>Customers are responsible for providing accurate:</p>
          <ul style={ulStyle}>
            {['Name', 'Address', 'PIN code', 'Phone number', 'Email address'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>We will not be responsible for delivery delays or additional courier charges caused by incorrect or incomplete information provided by the customer.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Delayed or Undelivered Orders</h2>
          <p style={pStyle}>If your order is delayed or appears to be undelivered, please contact us with your order number.</p>
          <p style={pStyle}>We will coordinate with the relevant courier service where reasonably possible.</p>
          <p style={pStyle}>Delivery timelines may be affected by circumstances outside our control.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Damaged Package on Delivery</h2>
          <p style={pStyle}>If the package appears visibly damaged when delivered, we recommend:</p>
          <ul style={ulStyle}>
            {['Photographing the package before opening it.', 'Recording the unboxing process.', 'Checking the product immediately.', 'Contacting us within 48 hours if the product is damaged.'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>An unboxing video and photographs may be required for processing a damage claim.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>8. Delivery Confirmation</h2>
          <p style={pStyle}>Once the courier records the package as delivered to the address provided by the customer, the order will generally be considered delivered.</p>
          <p style={pStyle}>If you have not received the package despite a delivery confirmation, please contact us promptly so that we can investigate with the courier.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={{ ...h2Style, margin: '0 0 18px' }}>9. Contact Us</h2>
          <p style={pStyle}>For shipping-related questions:</p>
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

export default Shipping;