// Fetch live exchange rates using free open.er-api.com (no API key required)
// All rates are anchored to USD. To convert X -> Y: rate = rates[Y] / rates[X]

const API_URL = 'https://open.er-api.com/v6/latest/USD';
const CACHE_KEY = 'ace_rates_cache_v1';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

export async function fetchLiveRates() {
  // Try cache first
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.savedAt < CACHE_TTL_MS) {
      return cached;
    }
  } catch (_) { /* ignore */ }

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch rates');
  const data = await res.json();
  if (data.result !== 'success') throw new Error('API error');

  const payload = {
    base: 'USD',
    rates: data.rates, // { EUR: 0.92, NPR: 133.45, ... }
    lastUpdated: data.time_last_update_utc,
    savedAt: Date.now(),
  };
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(payload)); } catch (_) {}
  return payload;
}

// Convert X -> Y using USD-based rate table
export function convert(amount, from, to, rates) {
  const rFrom = rates[from];
  const rTo = rates[to];
  if (!rFrom || !rTo) return 0;
  return (Number(amount) * rTo) / rFrom;
}

export function pairRate(from, to, rates) {
  const rFrom = rates[from];
  const rTo = rates[to];
  if (!rFrom || !rTo) return 0;
  return rTo / rFrom;
}
