import { useState } from 'react';
import { MessageSquare, CheckCircle } from 'lucide-react';
import { fetchSlots, submitBooking } from '../services/booking';

const INITIAL_STATE = {
  step: 1,           // 1=date+slots, 2=form, 3=confirmed
  date: '',
  slots: [],
  slotsStatus: 'idle', // 'idle'|'loading'|'error'
  slotsError: '',
  selectedSlot: null,
  formError: '',
  submitting: false,
};

export default function ContactSection() {
  const [state, setState] = useState(INITIAL_STATE);

  const [today] = useState(() => new Date().toISOString().split('T')[0]);

  async function handleDateChange(e) {
    const date = e.target.value;
    if (!date) return;

    const selectedDate = new Date(date);
    if (selectedDate.getDay() === 0) {
      setState((s) => ({ ...s, date, slots: [], slotsStatus: 'error', slotsError: 'Sundays are off. Please select a different day.' }));
      return;
    }

    setState((s) => ({ ...s, date, slotsStatus: 'loading', slots: [], slotsError: '' }));
    try {
      const slots = await fetchSlots(date);
      setState((s) => ({ ...s, slots, slotsStatus: 'success', slotsError: slots.length === 0 ? 'No available slots on this date. Please select another day.' : '' }));
    } catch (err) {
      console.error(err);
      setState((s) => ({ ...s, slotsStatus: 'error', slotsError: 'Failed to load slots. Please try again.' }));
    }
  }

  function handleSelectSlot(slot) {
    setState((s) => ({ ...s, selectedSlot: slot, step: 2 }));
  }

  function handleBack() {
    setState((s) => ({ ...s, step: 1 }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setState((s) => ({ ...s, submitting: true, formError: '' }));

    const payload = {
      date: state.date,
      startTime: state.selectedSlot.start,
      endTime: state.selectedSlot.end,
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('countryCode') + ' ' + data.get('phone'),
      service: data.get('service'),
    };

    try {
      const result = await submitBooking(payload);
      if (result.success) {
        setState((s) => ({ ...s, step: 3, submitting: false }));
      } else {
        setState((s) => ({ ...s, formError: result.error ?? 'Booking failed. Please try again.', submitting: false }));
      }
    } catch (err) {
      console.error(err);
      setState((s) => ({ ...s, formError: 'Something went wrong. Please check your connection and try again.', submitting: false }));
    }
  }


  const labelStyle = { display: 'block', marginBottom: 8, fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-muted)' };

  return (
    <section className="section stack-section reveal" id="contact">
      <div className="section-inner" style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
        <div
          className="glass-panel glass-card-shine"
          style={{ borderRadius: 'var(--radius-xl)', padding: 32 }}
        >
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, color: 'var(--accent-pop)', marginBottom: 16, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(99,102,241,0.08)', padding: '6px 14px', borderRadius: 99 }}>
            <MessageSquare size={16} /> Contact
          </div>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.5rem', lineHeight: 1.2, marginBottom: 16 }}>
            We can begin with one calm conversation.
          </h2>
          <p>Whether you are navigating a personal challenge, a transition in life or career, or building safer workplaces - we can explore what kind of support feels right.</p>

          {/* Booking widget */}
          <div
            className="booking-widget-card"
            style={{
              marginTop: 32, borderRadius: 24, padding: 32,
              textAlign: 'left',
            }}
          >
            {/* Step 1: Date & Slots */}
            {state.step === 1 && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 24, color: 'var(--text-main)', fontFamily: 'Outfit' }}>
                  Select a Date &amp; Time
                </h3>
                <input
                  type="date"
                  value={state.date}
                  min={today}
                  onChange={handleDateChange}
                  className="booking-input"
                  required
                  aria-label="Select booking date"
                />

                {/* Slots */}
                <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12, maxHeight: 300, overflowY: 'auto' }}>
                  {!state.date && (
                    <p style={{ gridColumn: '1/-1', color: 'var(--text-muted)' }}>Please select a date to see available times.</p>
                  )}
                  {state.slotsStatus === 'loading' && (
                    <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 20 }}>
                      <div className="spinner" />
                      <p style={{ marginTop: 10, color: 'var(--text-muted)' }}>Finding available times...</p>
                    </div>
                  )}
                  {state.slotsStatus === 'error' && (
                    <p style={{ gridColumn: '1/-1', color: '#ef4444', fontWeight: 500 }}>{state.slotsError}</p>
                  )}
                  {state.slotsStatus === 'success' && state.slots.length === 0 && !state.slotsError && (
                    <p style={{ gridColumn: '1/-1', color: 'var(--text-muted)' }}>No available slots on this date. Please select another day.</p>
                  )}
                  {state.slotsStatus === 'success' && state.slots.map((slot) => (
                    <button
                      key={slot.displayTime}
                      onClick={() => handleSelectSlot(slot)}
                      className="slot-btn"
                    >
                      {slot.displayTime}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Form */}
            {state.step === 2 && (
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 24, color: 'var(--text-main)', fontFamily: 'Outfit' }}>
                  Enter Details
                </h3>

                {/* Summary */}
                <div className="booking-summary-pill" style={{ padding: 16, borderRadius: 12, marginBottom: 24, fontWeight: 500 }}>
                  Booking for: {state.date} at {state.selectedSlot?.displayTime}
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle} htmlFor="firstName">First Name *</label>
                      <input id="firstName" name="firstName" type="text" required className="booking-input" />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label style={labelStyle} htmlFor="lastName">Last Name *</label>
                      <input id="lastName" name="lastName" type="text" required className="booking-input" />
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle} htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required className="booking-input" />
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle} htmlFor="phone">Your Phone Number *</label>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <select name="countryCode" id="countryCode" className="booking-select" style={{ width: 100 }}>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                      </select>
                      <input id="phone" name="phone" type="tel" required className="booking-input" />
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle} htmlFor="service">Preferred service? *</label>
                    <select id="service" name="service" required defaultValue="" className="booking-select">
                      <option value="" disabled>Select...</option>
                      <option value="Life Coaching">Life Coaching</option>
                      <option value="Healing & Inner Work">Healing &amp; Inner Work</option>
                      <option value="POSH Consulting">POSH Consulting</option>
                    </select>
                  </div>

                  {state.formError && (
                    <p style={{ color: '#ef4444', marginBottom: 16, fontWeight: 500 }}>{state.formError}</p>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32 }}>
                    <button
                      type="button"
                      onClick={handleBack}
                      className="booking-back-btn"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="btn"
                      style={{
                        background: 'var(--accent-pop)', color: '#ffffff', border: 'none',
                        borderRadius: 100, padding: '12px 24px', cursor: state.submitting ? 'not-allowed' : 'pointer',
                        fontWeight: 600, boxShadow: '0 10px 20px rgba(99,102,241,0.2)',
                        opacity: state.submitting ? 0.7 : 1,
                      }}
                    >
                      {state.submitting ? (
                        <><div className="spinner" style={{ width: 14, height: 14, borderWidth: 2, borderTopColor: 'white' }} /> Processing...</>
                      ) : 'Book Call'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {state.step === 3 && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={64} style={{ color: '#10b981', marginBottom: 24 }} />
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'Outfit', marginBottom: 8 }}>Booking Confirmed!</h3>
                <p>An email invitation has been sent to you and your calendar has been updated.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
