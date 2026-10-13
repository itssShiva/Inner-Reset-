import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { LINKS } from '../../constants';

const AFFIRMATION_PAGE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Affirmation Initiative - Companion Engine</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .glass-card { background: rgba(255, 255, 255, 0.45); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.6); }
        .inner-glass { background: rgba(255, 255, 255, 0.75); border: 1px solid rgba(255, 255, 255, 0.4); }
        .chat-grid-bg {
            background-image: linear-gradient(to right, rgba(45, 38, 59, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 38, 59, 0.04) 1px, transparent 1px);
            background-size: 20px 20px;
        }
        .scroll-bubble { opacity: 0; transform: translateY(15px) scale(0.97); transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .scroll-bubble.bubble-visible { opacity: 1; transform: translateY(0) scale(1); }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-tr from-[#FBC4B6] via-[#E2D2ED] to-[#CCD2FA] text-[#2D263B] antialiased overflow-x-hidden">
    <header class="max-w-7xl mx-auto px-4 pt-4 sticky top-0 z-50">
        <div class="w-full bg-white/80 backdrop-blur-xl rounded-full px-6 py-3.5 flex justify-between items-center shadow-lg border border-white/40">
            <div class="flex items-center space-x-3">
                <div class="w-9 h-9 rounded-full bg-gradient-to-r from-[#FBC4B6] to-[#CCD2FA] flex items-center justify-center font-bold text-white text-xs border border-white/50">🌸</div>
                <div>
                    <h2 class="text-sm font-extrabold tracking-tight uppercase leading-none text-[#2D263B]">Shaifaly Sangal</h2>
                    <span class="text-[10px] opacity-70 font-medium">Life Coach • Healer • POSH</span>
                </div>
            </div>
            <button onclick="document.getElementById('registrationModal').classList.remove('hidden'); document.body.style.overflow='hidden';" class="bg-[#2D263B] text-white text-xs px-5 py-2.5 rounded-full font-bold tracking-wider uppercase hover:scale-[1.02] transition shadow-md">🚀 Start Free Trial</button>
        </div>
    </header>
    <main class="max-w-7xl mx-auto px-4 pt-16 pb-12 text-center lg:text-left">
        <div class="max-w-3xl space-y-6">
            <div class="inline-flex items-center space-x-2 bg-white/60 px-4 py-1.5 rounded-full border border-white/60 shadow-sm text-xs font-semibold tracking-wide text-[#2D263B]"><span>✨ Mindset Companion Portal</span></div>
            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#2D263B]">Where personal <br class="hidden sm:inline"><span class="bg-gradient-to-r from-[#e3856d] to-[#7f5fa3] bg-clip-text text-transparent">transformation</span> begins.</h1>
            <p class="text-base sm:text-lg text-[#2D263B]/80 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">Meet your personal safety portal. Get customized therapeutic responses, targeted emotional state metrics, and daily mindfulness tracking deployed instantly to your WhatsApp.</p>
            <div class="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto lg:mx-0">
                <div class="relative w-full"><span class="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold opacity-60">+91</span><input id="heroPhoneInput" type="tel" placeholder="Enter WhatsApp Number" class="w-full pl-12 pr-4 py-3.5 rounded-full text-sm bg-white border border-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#E2D2ED] font-semibold text-[#2D263B]" /></div>
                <button onclick="handleHeroVerify()" class="bg-[#2D263B] text-white text-xs px-6 py-3.5 rounded-full font-bold tracking-wider uppercase shadow-lg hover:bg-opacity-90 transition whitespace-nowrap">Verify &amp; Start</button>
            </div>
        </div>
    </main>
    <div id="registrationModal" class="fixed inset-0 z-50 overflow-y-auto hidden bg-[#2D263B]/30 backdrop-blur-md flex items-center justify-center p-4">
        <div class="w-full max-w-xl bg-gradient-to-tr from-[#FBC4B6] via-[#E2D2ED] to-[#CCD2FA] rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-white/60 relative">
            <div class="flex justify-between items-center border-b border-[#2D263B]/10 pb-4 mb-6">
                <span class="text-sm font-extrabold uppercase tracking-wider text-[#2D263B]">Early Bird Access Portal</span>
                <button onclick="document.getElementById('registrationModal').classList.add('hidden'); document.body.style.overflow='auto';" class="w-8 h-8 rounded-full bg-white/60 text-[#2D263B] flex items-center justify-center font-bold text-lg">&times;</button>
            </div>
            <p class="text-center text-sm font-semibold text-[#2D263B]/80 py-8">Registration form powered by the companion backend service.</p>
        </div>
    </div>
    <script>
        const BACKEND_URL = (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') ? 'https://inner-reset-20-production.up.railway.app' : 'http://localhost:5000';
        async function handleHeroVerify() {
            const phone = document.getElementById('heroPhoneInput').value.trim();
            if (!phone || phone.length < 10) { alert('Please enter a valid 10-digit number!'); return; }
            document.getElementById('registrationModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    </script>
</body>
</html>`;

export default function AffirmationWidget({ currentQuote }) {
  const [isOpen, setIsOpen] = useState(false);

  function openAffirmationPage() {
    const newWin = window.open();
    if (!newWin) {
      alert('Please allow popups to open the Affirmation page.');
      return;
    }
    newWin.document.write(AFFIRMATION_PAGE_HTML);
    newWin.document.close();
  }

  return (
    <div id="affirmation-widget-container">
      {isOpen && (
        <div
          id="affirmation-window"
          className="glass-panel mb-4"
          style={{
            width: 320,
            borderRadius: 'var(--radius-lg)',
            padding: 0,
            overflow: 'hidden',
            transformOrigin: 'bottom left',
          }}
        >
          {/* Header */}
          <div
            className="flex justify-between items-center px-[18px] py-3.5"
            style={{
              background: 'rgba(99,102,241,0.1)',
              borderBottom: '1px solid var(--glass-border)',
            }}
          >
            <h4
              className="flex items-center gap-1.5 text-[0.95rem] font-semibold m-0"
              style={{ color: 'var(--text-main)' }}
            >
              <Sparkles size={14} style={{ color: 'var(--accent-pop)' }} />
              Affirmation Pocket
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[22px] leading-none cursor-pointer transition-colors duration-200"
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)' }}
              aria-label="Close panel"
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div className="px-[22px] py-[22px] text-center">
            <p
              className="italic font-medium text-[0.9rem] leading-relaxed mb-3.5"
              style={{ color: 'var(--text-main)' }}
            >
              {currentQuote || '"Your energy introduces you before you even speak. Make it vibrant this morning."'}
            </p>
            <p className="text-[0.75rem] mb-[18px]" style={{ color: 'var(--text-muted)' }}>
              Automated premium focus tuning directly to your phone slot daily.
            </p>

            <button
              onClick={openAffirmationPage}
              className="flex items-center justify-center gap-2 w-full no-underline rounded-[var(--radius-lg)] text-[0.85rem] font-bold text-white py-3 px-[18px] transition-transform duration-200 hover:scale-[1.02] mb-3"
              style={{
                background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                boxShadow: '0 4px 15px rgba(79,172,254,0.3)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Sparkles size={16} />
              Try our latest AI
            </button>

            <div
              className="flex items-center text-center font-bold my-3"
              style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}
            >
              <span className="flex-1 h-px" style={{ background: 'var(--glass-border)' }} />
              <span className="mx-2">OR</span>
              <span className="flex-1 h-px" style={{ background: 'var(--glass-border)' }} />
            </div>

            <a
              href={LINKS.whatsappHealing}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full no-underline rounded-[var(--radius-lg)] text-[0.85rem] font-bold text-white py-[11px] px-[18px] transition-all duration-200 hover:scale-[1.02]"
              style={{
                background: 'var(--whatsapp)',
                boxShadow: '0 4px 12px rgba(34,197,94,0.2)',
              }}
            >
              Subscribe via WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        id="affirmation-trigger-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Affirmation Widget"
      >
        <Sparkles size={16} />
        <span>Subscribe for Affirmations</span>
      </button>
    </div>
  );
}
