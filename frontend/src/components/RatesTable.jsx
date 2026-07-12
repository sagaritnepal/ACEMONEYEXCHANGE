import React, { useState } from 'react';
import { Clock, TrendingUp, TrendingDown, Search } from 'lucide-react';
import { exchangeRates } from '../mock/mockData';
import { Input } from './ui/input';

const RatesTable = () => {
  const [q, setQ] = useState('');
  const filtered = exchangeRates.filter(r =>
    r.currency.toLowerCase().includes(q.toLowerCase()) ||
    r.code.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section id="rates" className="bg-[#0B1220] pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="pb-10">
          <div className="flex items-center gap-3 text-[#F59E0B]">
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.25em]">REAL-TIME MARKET DATA</span>
          </div>
          <h2 className="mt-4 text-white font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Today&apos;s Exchange Rates
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="text-slate-400 text-sm">Updated every 15 minutes · Nepal Rastra Bank Licensed</span>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4 text-[#F59E0B]" />
              <span>Last Updated: July 12, 2025, 10:30 AM NPT</span>
            </div>
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
              {filtered.map((r) => (
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
              {filtered.length === 0 && (
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
