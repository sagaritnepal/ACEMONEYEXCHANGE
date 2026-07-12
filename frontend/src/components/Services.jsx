import React from 'react';
import { Wallet, Send, Plane, ArrowRight } from 'lucide-react';
import { services } from '../mock/mockData';

const iconMap = { Wallet, Send, Plane };

const Services = () => {
  return (
    <section id="services" className="bg-[#F7F8FA] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 text-[#F59E0B]">
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.25em]">OUR SERVICES</span>
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
          </div>
          <h2 className="mt-4 text-[#0B1220] font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Complete Currency Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B1220]">{s.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.description}</p>
                <button className="mt-5 inline-flex items-center gap-2 text-[#F59E0B] font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
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
