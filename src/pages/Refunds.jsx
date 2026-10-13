/* ── Shared style objects ── */
const wrapStyle = { maxWidth: 'var(--max-width)', margin: '0 auto', padding: '40px 24px 100px', position: 'relative', zIndex: 10 };
const sectionStyle = { marginTop: 36, paddingTop: 28, borderTop: '1px solid rgba(226,232,240,0.9)' };
const h2Style = { fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.45rem)', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 14px', letterSpacing: '-0.01em' };
const pStyle = { fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 12px' };
const ulStyle = { margin: '0 0 16px 22px', padding: 0, color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.98rem' };
const liStyle = { marginBottom: 6, paddingLeft: 4 };
const linkStyle = { color: '#6366f1', textDecoration: 'underline', fontWeight: 600 };
const contactCardStyle = { background: 'var(--glass-surface)', border: '1px solid var(--glass-border)', borderRadius: 20, padding: '24px 28px', boxShadow: 'var(--glass-shadow)' };
const contactBoxStyle = { background: 'var(--glass-surface)', border: '1px solid rgba(99,102,241,0.16)', borderRadius: 16, padding: '16px 20px', marginBottom: 16 };

const Refunds = () => {
  return (
    <div style={wrapStyle}>
      <div className="glass-panel">

        {/* Eyebrow */}
        <div className="eyebrow">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <polyline points="23 20 23 14 17 14" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
          </svg>
          Legal &amp; Policy
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.85rem, 4vw, 2.7rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-main)', lineHeight: 1.18, margin: '0 0 12px' }}>
          Refund, Return &amp; Cancellation Policy
        </h1>

        {/* Last updated */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: 24, padding: '6px 14px', background: 'rgba(0,0,0,0.03)', borderRadius: 999, border: '1px solid rgba(0,0,0,0.05)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
          Last Updated: 7 October 2026
        </div>

        <p style={{ ...pStyle, fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: 500 }}>
          At Inner Reset by Yung Minds, we want you to receive your products in good condition and as ordered.
        </p>
        <p style={{ ...pStyle, margin: '0 0 28px' }}>Please read this policy before placing an order.</p>

        <section style={sectionStyle}>
          <h2 style={h2Style}>1. Change-of-Mind Returns</h2>
          <p style={pStyle}>We do not accept returns or refunds simply because a customer has changed their mind, ordered the wrong product, or no longer wishes to purchase the product.</p>
          <p style={pStyle}>Please review the product information carefully before placing your order.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>2. Damaged Products</h2>
          <p style={pStyle}>If a physical product arrives damaged, please contact us within 48 hours of delivery.</p>
          <p style={pStyle}>For damage-related claims, you are required to provide:</p>
          <ul style={ulStyle}>
            {['Order number', 'Photographs of the outer packaging', 'Photographs of the damaged product', 'A clear unboxing video, preferably showing the package from the time it is opened', 'A brief description of the issue'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>This information helps us verify the condition of the product when delivered.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>3. Defective or Incorrect Products</h2>
          <p style={pStyle}>If you receive:</p>
          <ul style={ulStyle}>
            {['A defective product', 'The wrong product', 'A product materially different from what you ordered'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
          <p style={pStyle}>please contact us within 48 hours of delivery with photographs, an unboxing video and your order details.</p>
          <p style={pStyle}>After verification, we may offer an appropriate replacement or refund.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>4. Verification</h2>
          <p style={pStyle}>All return, replacement and refund requests are subject to verification.</p>
          <p style={pStyle}>We reserve the right to reject a claim where:</p>
          <ul style={ulStyle}>
            {['The product has been used or damaged after delivery', 'The damage appears to have been caused by improper handling', 'The claim is made after the applicable reporting period', 'Required evidence is not provided', 'The issue does not qualify under this policy'].map(i => <li key={i} style={liStyle}>{i}</li>)}
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>5. Refunds</h2>
          <p style={pStyle}>Where a refund is approved, the amount will generally be refunded through the original payment method or another appropriate method available to us.</p>
          <p style={pStyle}>The time taken for the amount to reflect in your account may depend on the payment gateway, bank or financial institution.</p>
          <p style={pStyle}>Shipping charges may not be refundable unless the issue is attributable to an error, defect or damage covered under this policy.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>6. Cancellation of Physical Product Orders</h2>
          <p style={pStyle}>You may contact us as soon as possible if you wish to cancel an order.</p>
          <p style={pStyle}>Cancellation requests can be considered only if the order has not already been processed, packed or dispatched.</p>
          <p style={pStyle}>Once an order has been dispatched, it may not be possible to cancel it.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>7. Coaching and Affirmation Services</h2>
          <p style={pStyle}>For coaching, digital or affirmation services, there is no physical shipping involved.</p>
          <p style={pStyle}>Cancellation and refund eligibility may depend on whether the service has already commenced or been delivered.</p>
          <p style={pStyle}>If a session or service has already been provided, the amount paid may not be refundable except where required under applicable law or where otherwise agreed in writing.</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>8. How to Contact Us</h2>
          <p style={pStyle}>For any return, replacement, refund or cancellation request:</p>
          <div style={contactBoxStyle}>
            <p style={{ margin: '0 0 8px', fontSize: '0.98rem', color: 'var(--text-main)' }}>
              <strong>Email:</strong>{' '}<a href="mailto:shaifalyhealer@gmail.com" style={linkStyle}>shaifalyhealer@gmail.com</a>
            </p>
            <p style={{ margin: 0, fontSize: '0.98rem', color: 'var(--text-main)' }}>
              <strong>Phone/WhatsApp:</strong>{' '}<a href="tel:+918448241379" style={linkStyle}>+91 84482 41379</a>
            </p>
          </div>
          <p style={pStyle}>Please mention your order number in your communication.</p>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 10px' }}>Our Address</h3>
          <div style={contactCardStyle}>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 4px', fontFamily: "'Outfit', sans-serif" }}>Inner Reset by Yung Minds</p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 4px' }}>Inner Reset, Pan Oasis, Sector 70,</p>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>Noida – 201301, Uttar Pradesh, India</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Refunds;
