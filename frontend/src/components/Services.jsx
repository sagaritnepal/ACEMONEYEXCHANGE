import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { services } from '../mock/mockData';

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
            Professional <span className="text-[#F59E0B]">financial solutions</span> for every traveler
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {services.map((s, idx) => {
            const isOpen = openIdx.has(idx);
            return (
              <div key={s.title} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                {s.badges ? (
                  <div className="flex items-stretch gap-3 w-full">
                    <div className="flex-1 h-24 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors">
                      <img src="/visa-logo.webp" alt="Visa" className="h-10 w-auto object-contain" />
                    </div>
                    <div className="flex-1 h-24 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors">
                      <img src="/mastercard-logo.webp" alt="MasterCard" className="h-14 w-auto object-contain" />
                    </div>
                  </div>
                ) : s.flags ? (
                  <div className="flex items-stretch gap-3 w-full">
                    {s.flags.map((code) => (
                      <div key={code} className="flex-1 h-24 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors">
                        <img
                          src={`https://flagcdn.com/w160/${code}.png`}
                          alt={code.toUpperCase()}
                          className="h-14 w-auto object-cover rounded-md shadow-sm ring-1 ring-black/5"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-stretch gap-3 w-full">
                    {s.photos.map((src) => (
                      <div key={src} className={`flex-1 h-24 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors ${src === '/bus.png' ? 'p-1.5' : 'p-4'}`}>
                        <img src={src} alt="" className="max-h-full max-w-full object-contain" />
                      </div>
                    ))}
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
