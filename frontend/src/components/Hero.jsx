import React, { useState, useMemo, useEffect } from 'react';
import { Button } from './ui/button';
import { Play, ArrowUpDown, ChevronDown, ShieldCheck, TrendingUp, TrendingDown, Eye, Loader2 } from 'lucide-react';
import { currencyOptions, rateMap } from '../mock/mockData';
import { fetchLiveRates, convert, pairRate } from '../services/ratesService';

const Hero = () => {
  const [fromCode, setFromCode] = useState('USD');
  const [toCode, setToCode] = useState('NPR');
  const [amount, setAmount] = useState(1000);
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [liveRates, setLiveRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLiveRates()
      .then((data) => setLiveRates(data.rates))
      .catch(() => setLiveRates(null))
      .finally(() => setLoading(false));
  }, []);

  const activeRates = liveRates || rateMap;

  const receive = useMemo(() => {
    const value = liveRates
      ? convert(amount, fromCode, toCode, liveRates)
      : (Number(amount) * (rateMap[fromCode] || 1)) / (rateMap[toCode] || 1);
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }, [amount, fromCode, toCode, liveRates]);

  const marketRate = useMemo(() => {
    const r = liveRates
      ? pairRate(fromCode, toCode, liveRates)
      : (rateMap[fromCode] || 1) / (rateMap[toCode] || 1);
    return `1 ${fromCode} = ${r.toFixed(2)} ${toCode}`;
  }, [fromCode, toCode, liveRates]);

  // Live ticker (pairs vs NPR)
  const tickerPairs = ['USD', 'EUR', 'GBP', 'AUD', 'INR'];
  const tickerData = tickerPairs.map((c) => {
    const rate = liveRates ? pairRate(c, 'NPR', liveRates) : (rateMap[c] || 0) / (rateMap['NPR'] || 1);
    return {
      pair: `${c}/NPR`,
      buy: rate * 0.998,
      sell: rate * 1.005,
      up: Math.random() > 0.35,
    };
  });

  const swap = () => { setFromCode(toCode); setToCode(fromCode); };

  const CurrencyPicker = ({ value, onChange, open, setOpen }) => {
    const opt = currencyOptions.find(o => o.code === value) || currencyOptions[0];
    return (
      <div className="relative">
        <button type="button" onClick={() => setOpen(!open)} className="flex items-center gap-2 pl-2 pr-1 h-10 rounded-md hover:bg-slate-100 transition-colors">
          <img src={opt.flag} alt={opt.code} className="w-5 h-4 object-cover rounded-sm" />
          <span className="font-semibold text-slate-900">{opt.code}</span>
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </button>
        {open && (
          <div className="absolute right-0 top-11 z-20 bg-white border border-slate-200 rounded-md shadow-lg py-1 min-w-[130px]">
            {currencyOptions.map(o => (
              <button key={o.code} onClick={() => { onChange(o.code); setOpen(false); }} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-50 text-left">
                <img src={o.flag} alt={o.code} className="w-5 h-4 object-cover rounded-sm" />
                <span className="font-medium text-slate-800 text-sm">{o.code}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="home" className="relative pt-28 pb-24 sm:pt-32 sm:pb-40 overflow-hidden bg-[#0B1220]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="Himalayan mountains"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/95 to-[#0B1220]/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 border border-[#F59E0B]/40 bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            NRB LICENSED EXCHANGE
          </div>
          <h1 className="mt-6 text-white font-extrabold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.25rem)' }}>
            Best Exchange Rates in Thamel, Kathmandu
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-lg leading-relaxed">
            Trusted by 50,000+ travelers. Secure, fast, and transparent currency exchange for individuals and businesses in the heart of Nepal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <Button
              onClick={() => document.getElementById('rates')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F59E0B] hover:bg-[#E08D0A] text-slate-900 h-12 px-6 rounded-md font-semibold text-[15px] shadow-lg shadow-[#F59E0B]/20"
            >
              Get Current Rates
            </Button>
            <button className="flex items-center gap-3 text-white group">
              <span className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B]/10 transition-all">
                <Play className="w-4 h-4 fill-white text-white group-hover:fill-[#F59E0B] group-hover:text-[#F59E0B]" />
              </span>
              <span className="text-[15px] font-medium">See how we work</span>
            </button>
          </div>
        </div>

        {/* Right: Currency Converter Card */}
        <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900">Currency Converter</h3>
              {loading ? (
                <div className="flex items-center gap-1.5 text-xs text-slate-500"><Loader2 className="w-3 h-3 animate-spin" />Loading</div>
              ) : liveRates ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
                </div>
              ) : null}
            </div>

            <label className="text-[11px] font-bold text-slate-500 tracking-wider">AMOUNT TO SEND</label>
            <div className="mt-2 flex items-center justify-between border border-slate-200 rounded-lg px-4 h-14 focus-within:border-[#F59E0B] transition-colors">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent outline-none text-xl sm:text-2xl font-semibold text-slate-900 w-full max-w-[9rem]"
              />
              <CurrencyPicker value={fromCode} onChange={setFromCode} open={fromOpen} setOpen={setFromOpen} />
            </div>

            <div className="flex justify-center my-3">
              <button onClick={swap} className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#F59E0B]/15 flex items-center justify-center transition-colors group">
                <ArrowUpDown className="w-4 h-4 text-slate-600 group-hover:text-[#F59E0B]" />
              </button>
            </div>

            <label className="text-[11px] font-bold text-slate-500 tracking-wider">AMOUNT YOU RECEIVE</label>
            <div className="mt-2 flex items-center justify-between border border-slate-200 rounded-lg px-4 h-14">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-xl sm:text-2xl font-semibold text-slate-900 truncate">{receive}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-slate-400" />
                <CurrencyPicker value={toCode} onChange={setToCode} open={toOpen} setOpen={setToOpen} />
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Market Rate:</span>
                <span className="font-mono text-slate-800">{marketRate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Processing Fee:</span>
                <span className="font-mono text-emerald-600 font-semibold">Free / 0.00 NPR</span>
              </div>
            </div>

            <Button className="mt-5 w-full h-12 bg-[#0F1B2E] hover:bg-[#182640] text-white rounded-lg font-semibold text-[15px]">
              Convert Now
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom rate ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#050B15]/90 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center gap-4 sm:gap-8 lg:gap-12 overflow-x-auto">
          {tickerData.map(t => (
            <div key={t.pair} className="flex items-center gap-3 text-sm whitespace-nowrap">
              <span className="font-bold text-white">{t.pair}</span>
              <span className="text-slate-400 font-mono text-xs">B: <span className="text-slate-200">{t.buy.toFixed(2)}</span></span>
              <span className="text-slate-400 font-mono text-xs">S: <span className="text-slate-200">{t.sell.toFixed(2)}</span></span>
              {t.up
                ? <TrendingUp className="w-4 h-4 text-emerald-400" />
                : <TrendingDown className="w-4 h-4 text-rose-400" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
