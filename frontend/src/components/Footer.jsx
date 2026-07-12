import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050B15] text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-[#F59E0B] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-900">
                  <path d="M6 20V10"/>
                  <path d="M6 10c0-3 2-6 6-6s6 3 6 6"/>
                  <path d="M18 10v10"/>
                  <path d="M2 20h20"/>
                  <path d="M9 14h6"/>
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold tracking-tight text-[15px] text-white">ACE MONEY EXCHANGE</span>
                <span className="text-[10px] tracking-[0.22em] text-[#F59E0B] font-semibold">MONEY EXCHANGE</span>
              </div>
            </div>
            <p className="mt-6 text-slate-400 max-w-xs leading-relaxed">
              Your trusted partner for currency exchange in Kathmandu. Licensed by Nepal Rastra Bank and serving the Thamel community for over a decade.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((I, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#F59E0B] flex items-center justify-center text-slate-300 hover:text-slate-900 transition-colors">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:pl-8">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-slate-400">
              {['Exchange Rates', 'Our Services', 'About Us', 'Compliance'].map(l => (
                <li key={l}><a href="#" className="hover:text-[#F59E0B] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Resources</h4>
            <ul className="mt-5 space-y-3 text-slate-400">
              {['Travel Guides', 'Nepal Rastra Bank', 'Support', 'Sitemap'].map(l => (
                <li key={l}><a href="#" className="hover:text-[#F59E0B] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-slate-500 text-sm">© 2024 Ace Money Exchange Pvt. Ltd. All Rights Reserved.</div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-[#F59E0B]">Privacy Policy</a>
            <a href="#" className="hover:text-[#F59E0B]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
