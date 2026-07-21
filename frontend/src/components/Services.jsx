import React, { useState } from 'react';
import { Wallet, Plane, ChevronDown } from 'lucide-react';
import { services } from '../mock/mockData';

const iconMap = { Wallet, Plane };

const Services = () => {
  const [openIdx, setOpenIdx] = useState(() => new Set());

  const toggle = (idx) => {
    setOpenIdx((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <section id="services" className="bg-[#F7F8FA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 text-[#F59E0B]">
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.25em]">OUR SERVICES</span>
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
          </div>
          <h2 className="mt-4 text-[#0B1220] font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Professional financial solutions for every traveler
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon];
            const isOpen = openIdx.has(idx);
            return (
              <div key={s.title} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                {s.badges ? (
                  <div className="w-24 h-14 rounded-xl bg-[#F59E0B]/10 flex flex-col items-center justify-center gap-1.5 py-1.5 group-hover:bg-[#F59E0B]/20 transition-colors">
                    <img src="/visa-logo.webp" alt="Visa" className="h-4 w-auto object-contain rounded-sm shadow-sm" />
                    <img src="/mastercard-logo.webp" alt="MasterCard" className="h-5 w-auto object-contain" />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#F59E0B]" />
                  </div>
                )}
                <h3 className="mt-6 text-xl font-bold text-[#0B1220]">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.description}</p>

                {isOpen && (
                  <p className="mt-3 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {s.detail}
                  </p>
                )}

                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="mt-5 inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:gap-3 transition-all"
                >
                  {isOpen ? 'Show Less' : 'Learn More'}
                  <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
