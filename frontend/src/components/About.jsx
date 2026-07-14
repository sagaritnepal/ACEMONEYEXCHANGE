import React from 'react';
import { Building2, Landmark, Star } from 'lucide-react';
import { stats } from '../mock/mockData';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 text-[#F59E0B]">
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.25em]">ABOUT ACE MONEY EXCHANGE</span>
          </div>
          <h2 className="mt-5 text-[#0B1220] font-extrabold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.75rem)' }}>
            The Gold Standard for Currency Exchange in Nepal
          </h2>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
            Located in the vibrant heart of Thamel, we have been the primary choice for tourists and locals since 2014. As an NRB licensed institution and active member of the Foreign Exchange Association of Nepal, we uphold the highest standards of financial integrity.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-md">
            {stats.map(s => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-extrabold text-[#0B1220]">{s.value}</div>
                <div className="mt-2 text-[10px] font-bold text-slate-500 tracking-[0.15em]">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <span className="font-semibold text-slate-800">NRB Licensed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center">
                <Landmark className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <span className="font-semibold text-slate-800">FEN Member</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto w-full">
            <img
              src="/storefront-photo.png"
              alt="Ace Money Exchange storefront in Thamel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto bg-white rounded-xl shadow-xl p-4 sm:p-5 w-auto max-w-[16rem] sm:w-64">
            <div className="font-bold text-slate-900">Google Reviews</div>
            <div className="mt-1 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <div className="mt-2 text-sm text-slate-500">4.9/5 Based on 800+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
