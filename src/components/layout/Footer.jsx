import { Link } from "react-router-dom";
import { Mail, Phone, Sparkles } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="ir-site-footer" id="footer">
      <div className="ir-site-footer-inner">
        {/* Brand Micro-header */}
        <div className="ir-footer-brand">
          <div className="ir-footer-eyebrow">
            <Sparkles size={13} />
            <span>Inner Reset · Shaifaly Sangal</span>
          </div>
          <p className="ir-footer-motto">
            Simple intention-based daily rituals for powerful life shifts.
          </p>
        </div>

        {/* Contact Details Bar - Perfectly Centered & Aligned */}
        <div className="ir-footer-contact-bar">
          <a
            href="mailto:shaifalyhealer@gmail.com"
            className="ir-footer-contact-item"
            title="Email Shaifaly Sangal"
          >
            <div className="ir-footer-icon-wrap">
              <Mail size={15} />
            </div>
            <span className="ir-footer-contact-text">shaifalyhealer@gmail.com</span>
          </a>

          <span className="ir-footer-sep" aria-hidden="true">|</span>

          <a
            href="tel:+918448241379"
            className="ir-footer-contact-item"
            title="Call / WhatsApp Shaifaly Sangal"
          >
            <div className="ir-footer-icon-wrap">
              <Phone size={15} />
            </div>
            <span className="ir-footer-contact-text">+91 8448241379</span>
          </a>
        </div>

        {/* Legal & Policy Links */}
        <div className="ir-footer-links">
          <Link to="/privacy" className="ir-footer-link">Privacy Policy</Link>
          <span className="ir-footer-dot">•</span>
          <Link to="/terms" className="ir-footer-link">Terms &amp; Conditions</Link>
          <span className="ir-footer-dot">•</span>
          <Link to="/refund" className="ir-footer-link">Refund &amp; Cancellation</Link>
          <span className="ir-footer-dot">•</span>
          <Link to="/shipping" className="ir-footer-link">Shipping &amp; Delivery</Link>
        </div>

        {/* Copyright & Management */}
        <div className="ir-footer-copy">
          <span>&copy; {CURRENT_YEAR} Shaifaly Sangal · Inner Reset by Yung Minds. All rights reserved.</span>
          <span className="ir-footer-copy-sep">|</span>
          <span>The website is managed by YUNG MINDS</span>
        </div>
      </div>

      <style>{`
        .ir-site-footer {
          width: 100%;
          background: #0d212c;
          border-top: 1px solid rgba(228, 194, 141, 0.22);
          color: #F3EBDD;
          position: relative;
          z-index: 20;
          clear: both;
          overflow: hidden;
          box-sizing: border-box;
        }

        .dark .ir-site-footer,
        body.dark .ir-site-footer {
          background: #060e14;
          border-top-color: rgba(228, 194, 141, 0.28);
        }

        .ir-site-footer-inner {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 48px 24px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
          box-sizing: border-box;
        }

        .ir-footer-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .ir-footer-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e4c28d;
        }

        .ir-footer-motto {
          font-size: 0.92rem;
          color: #a7bcc8;
          max-width: 480px;
          line-height: 1.5;
        }

        .ir-footer-contact-bar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          padding: 10px 24px;
          border-radius: 99px;
          background: rgba(228, 194, 141, 0.08);
          border: 1px solid rgba(228, 194, 141, 0.28);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .ir-footer-contact-bar:hover {
          border-color: rgba(228, 194, 141, 0.5);
          background: rgba(228, 194, 141, 0.12);
        }

        .ir-footer-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #e4c28d;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }

        .ir-footer-contact-item:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }

        .ir-footer-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(228, 194, 141, 0.18);
          border: 1px solid rgba(228, 194, 141, 0.35);
          color: #e4c28d;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .ir-footer-contact-item:hover .ir-footer-icon-wrap {
          background: #e4c28d;
          color: #0b171f;
          border-color: #e4c28d;
        }

        .ir-footer-contact-text {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .ir-footer-sep {
          color: rgba(228, 194, 141, 0.3);
          user-select: none;
          font-weight: 300;
        }

        .ir-footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 14px 20px;
          font-size: 0.86rem;
          font-weight: 600;
        }

        .ir-footer-link {
          color: #c0d2dc;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ir-footer-link:hover {
          color: #e4c28d;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .ir-footer-dot {
          color: rgba(228, 194, 141, 0.35);
          user-select: none;
        }

        .ir-footer-copy {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 8px 12px;
          font-size: 0.78rem;
          color: #8da4b2;
          line-height: 1.5;
        }

        .ir-footer-copy-sep {
          color: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 640px) {
          .ir-site-footer-inner {
            padding: 36px 18px 32px;
            gap: 20px;
          }
          .ir-footer-contact-bar {
            flex-direction: column;
            gap: 12px;
            width: 100%;
            border-radius: 20px;
            padding: 16px;
          }
          .ir-footer-contact-item {
            width: 100%;
            justify-content: center;
          }
          .ir-footer-sep {
            display: none;
          }
          .ir-footer-links {
            gap: 10px 14px;
            font-size: 0.8rem;
          }
          .ir-footer-copy {
            flex-direction: column;
            gap: 4px;
          }
          .ir-footer-copy-sep {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
}
