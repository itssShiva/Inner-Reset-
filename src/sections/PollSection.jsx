import { useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import { POLL_QUESTIONS } from '../constants';

export default function PollSection() {
  // Pick a random question on mount (stable via useState initializer)
  const [question] = useState(() => {
    const idx = Math.floor(Math.random() * POLL_QUESTIONS.length);
    return POLL_QUESTIONS[idx];
  });

  // Simulated baseline votes
  const [votes, setVotes] = useState(() => [
    Math.floor(Math.random() * 120) + 80,
    Math.floor(Math.random() * 80) + 40,
    Math.floor(Math.random() * 90) + 50,
    Math.floor(Math.random() * 60) + 30,
  ]);
  const [voted, setVoted] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);

  function handleVote(idx) {
    if (voted) return;
    const newVotes = [...votes];
    newVotes[idx] += 1;
    setVotes(newVotes);
    setSelectedIdx(idx);
    setVoted(true);
  }

  const total = votes.reduce((a, b) => a + b, 0);

  return (
    <section className="section stack-section reveal" id="poll-pulse">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid', gridTemplateColumns: '1fr 450px', gap: 48, alignItems: 'center', marginTop: 40,
          }}
        >
          {/* Info side */}
          <div>
            <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
              Interactive Poll
            </div>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
              Take a Mental Pulse Check
            </h2>
            <p>Our internal architecture shapes our choices and environment. Take a fast, anonymous moment to query yourself. Cast your choice and view where others align right now.</p>
            <div className="poll-anonymous-badge">
              <ShieldAlert size={16} /> Completely Anonymous &amp; Secure.
            </div>
          </div>

          {/* Poll card */}
          <div
            className={`glass-panel ${voted ? 'voted' : ''}`}
            style={{ borderRadius: 'var(--radius-xl)', padding: 32 }}
          >
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: 24, fontWeight: 700, lineHeight: 1.4, fontFamily: 'Outfit' }}>
              {question.q}
            </h3>

            {question.opt.map((opt, idx) => {
              const pct = voted ? Math.round((votes[idx] / total) * 100) : 0;
              const isSelected = selectedIdx === idx;
              return (
                <div
                  key={idx}
                  className={`poll-option ${isSelected ? 'selected-choice' : ''}`}
                  onClick={() => handleVote(idx)}
                  role={voted ? 'presentation' : 'button'}
                  tabIndex={voted ? -1 : 0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleVote(idx); }}
                  aria-label={`Vote for: ${opt}`}
                >
                  <div
                    className="poll-progress-bar"
                    style={{ width: voted ? `${pct}%` : '0%' }}
                  />
                  <span style={{ position: 'relative', zIndex: 2, fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    {opt}
                  </span>
                  {voted && (
                    <span style={{ position: 'relative', zIndex: 2, fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {pct}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Responsive style */}
        <style>{`
          @media (max-width: 900px) {
            #poll-pulse .section-inner > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
