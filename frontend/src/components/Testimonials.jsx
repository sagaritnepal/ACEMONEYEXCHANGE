import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../mock/mockData';

const avatarColors = ['bg-[#F59E0B]/20 text-[#B45309]', 'bg-blue-100 text-blue-700'];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 text-[#F59E0B]">
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.25em]">TOP 10 GOOGLE REVIEWS</span>
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
          </div>
          <h2 className="mt-4 text-[#0B1220] font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What travelers say about our currency exchange &amp; travel money services
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-sm">5.0</span>
            <span className="text-slate-500 text-sm">· {testimonials.length} Reviews</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${avatarColors[idx % 2]}`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.date}</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
