import { APPS_SCRIPT_URL } from '../constants';

/**
 * Fetch available booking slots for a given date string (YYYY-MM-DD).
 * Returns an array of slot objects: { displayTime, start, end }
 */
export async function fetchSlots(date) {
  if (!date) throw new Error('Date is required');
  const res = await fetch(`${APPS_SCRIPT_URL}?date=${date}`);
  if (!res.ok) throw new Error(`Failed to load slots: ${res.status}`);
  const data = await res.json();
  return data.slots ?? [];
}

/**
 * Submit a booking.
 * Returns { success: boolean, error?: string }
 */
export async function submitBooking(payload) {
  const res = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Booking submission failed: ${res.status}`);
  return res.json();
}
