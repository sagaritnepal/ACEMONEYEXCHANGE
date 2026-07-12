import React, { useState, useEffect, useMemo } from 'react';
import { Clock, TrendingUp, TrendingDown, Search, Loader2, RefreshCw } from 'lucide-react';
import { exchangeRates as fallbackRates } from '../mock/mockData';
import { Input } from './ui/input';
import { fetchLiveRates, pairRate } from '../services/ratesService';

// Static currency meta (flag + display info) for the currencies we support
const CURRENCY_META = [
  { code: 'USD', currency: 'US Dollar', flag: 'https://flagcdn.com/w40/us.png', unit: 1 },
  { code: 'EUR', currency: 'Euro', flag: 'https://flagcdn.com/w40/eu.png', unit: 1 },
  { code: 'GBP', currency: 'British Pound', flag: 'https://flagcdn.com/w40/gb.png', unit: 1 },
  { code: 'AUD', currency: 'Australian Dollar', flag: 'https://flagcdn.com/w40/au.png', unit: 1 },
  { code: 'CAD', currency: 'Canadian Dollar', flag: 'https://flagcdn.com/w40/ca.png', unit: 1 },
  { code: 'CHF', currency: 'Swiss Franc', flag: 'https://flagcdn.com/w40/ch.png', unit: 1 },
  { code: 'JPY', currency: 'Japanese Yen', flag: 'https://flagcdn.com/w40/jp.png', unit: 10 },
  { code: 'CNY', currency: 'Chinese Yuan', flag: 'https://flagcdn.com/w40/cn.png', unit: 1 },
  { code: 'INR', currency: 'Indian Rupee', flag: 'https://flagcdn.com/w40/in.png', unit: 100 },
  { code: 'AED', currency: 'UAE Dirham', flag: 'https://flagcdn.com/w40/ae.png', unit: 1 },
  { code: 'SAR', currency: 'Saudi Riyal', flag: 'https://flagcdn.com/w40/sa.png', unit: 1 },
  { code: 'QAR', currency: 'Qatari Riyal', flag: 'https://flagcdn.com/w40/qa.png', unit: 1 },
  { code: 'MYR', currency: 'Malaysian Ringgit', flag: 'https://flagcdn.com/w40/my.png', unit: 1 },
  { code: 'KRW', currency: 'South Korean Won', flag: 'https://flagcdn.com/w40/kr.png', unit: 100 },
  { code: 'SGD', currency: 'Singapore Dollar', flag: 'https://flagcdn.com/w40/sg.png', unit: 1 },
  { code: 'THB', currency: 'Thai Baht', flag: 'https://flagcdn.com/w40/th.png', unit: 1 },
];

const RatesTable = () => {
  const [q, setQ] = useState('');
  const [liveRates, setLiveRates] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadRates = async (force = false) => {
    if (force) {
      try { localStorage.removeItem('ace_rates_cache_v1'); } catch (_) {}
      setRefreshing(true);
    }
    try {
      const data = await fetchLiveRates();
      setLiveRates(data.rates);
      setLastUpdated(data.lastUpdated ? new Date(data.lastUpdated) : new Date());
    } catch (_) {
      setLiveRates(null);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => { loadRates(); }, []);

  const rows = useMemo(() => {
    if (liveRates) {
      return CURRENCY_META.map((m) => {
        const rate = pairRate(m.code, 'NPR', liveRates) * m.unit;
        // Simulate buy/sell spread (~0.5% typical)
        const buying = rate * 0.998;
        const selling = rate * 1.005;
        // Deterministic change from code
        const seed = m.code.charCodeAt(0) + m.code.charCodeAt(1);
        const change = ((seed % 30) + 2) / 100;
        const up = (seed % 3) !== 0;
        return { ...m, buying, selling, change, up };
      });
    }
    return fallbackRates;
  }, [liveRates]);

  const filtered = rows.filter(r =>
    r.currency.toLowerCase().includes(q.toLowerCase()) ||
    r.code.toLowerCase().includes(q.toLowerCase())
  );

  const formatUpdated = (d) => {
    if (!d) return '—';
    return d.toLocaleString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true
    }) + ' NPT';
  };

  return (
    <section id="rates" className="bg-[#0B1220] pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="pb-10">
          <div className="flex items-center gap-3 text-[#F59E0B]">
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.25em]">REAL-TIME MARKET DATA</span>
            {liveRates && (
              <span className="ml-2 inline-flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
              </span>
            )}
          </div>
          <h2 className="mt-4 text-white font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Today&apos;s Exchange Rates
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="text-slate-400 text-sm">Updated every 15 minutes · Nepal Rastra Bank Licensed</span>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              <span>Last Updated: {loading ? 'Loading…' : formatUpdated(lastUpdated)}</span>
            </div>
            <button
              onClick={() => loadRates(true)}
              disabled={refreshing}
              className="inline-flex items-center gap-2 text-[#F59E0B] hover:text-[#FBBF24] text-sm font-semibold transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="flex justify-end mb-4">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search currency..."
                className="pl-9 h-10 border-slate-200"
              />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0F1B2E] text-[#F59E0B] text-[11px] font-bold tracking-wider">
              <div className="grid grid-cols-[70px_1fr_100px_80px_140px_140px_120px] px-6 py-4">
                <div>FLAG</div>
                <div>CURRENCY</div>
                <div>CODE</div>
                <div>UNIT</div>
                <div className="text-right">BUYING (NPR)</div>
                <div className="text-right">SELLING (NPR)</div>
                <div className="text-right">CHANGE</div>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {loading && (
                <div className="px-6 py-10 flex items-center justify-center text-slate-500 gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" /> Loading live rates…
                </div>
              )}
              {!loading && filtered.map((r) => (
                <div key={r.code} className="grid grid-cols-[70px_1fr_100px_80px_140px_140px_120px] px-6 py-4 items-center hover:bg-slate-50 transition-colors">
                  <div>
                    <img src={r.flag} alt={r.code} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                  </div>
                  <div className="text-slate-800 font-medium">{r.currency}</div>
                  <div className="text-slate-500 text-sm">{r.code}</div>
                  <div className="text-slate-600 text-sm">{r.unit}</div>
                  <div className="text-right font-semibold text-slate-900">{r.buying.toFixed(2)}</div>
                  <div className="text-right font-semibold text-slate-900">{r.selling.toFixed(2)}</div>
                  <div className="text-right">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${r.up ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                      {r.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {r.change.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
              {!loading && filtered.length === 0 && (
                <div className="px-6 py-8 text-center text-slate-500">No currencies found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatesTable;
