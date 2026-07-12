import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <a href="#home" className="flex items-center gap-2 sm:gap-3 group min-w-0">
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#F59E0B] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900">
        <path d="M6 20V10"/>
        <path d="M6 10c0-3 2-6 6-6s6 3 6 6"/>
        <path d="M18 10v10"/>
        <path d="M2 20h20"/>
        <path d="M9 14h6"/>
      </svg>
    </div>
    <div className="flex flex-col leading-tight min-w-0">
      <span className="font-extrabold tracking-tight text-[12px] sm:text-[15px] text-white whitespace-nowrap">ACE MONEY EXCHANGE</span>
      <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#F59E0B] font-semibold whitespace-nowrap">MONEY EXCHANGE</span>
    </div>
  </a>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const goTo = (id) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1220]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-3">
        <Logo />
        <nav className="hidden md:flex items-center gap-9">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => goTo(l.id)}
              className={`text-[15px] font-medium transition-colors relative ${active === l.id ? 'text-[#F59E0B]' : 'text-white/85 hover:text-white'}`}
            >
              {l.label}
              {active === l.id && <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#F59E0B] rounded-full" />}
            </button>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button onClick={() => goTo('rates')} className="bg-[#0F1B2E] hover:bg-[#182640] text-white border border-white/10 h-11 px-5 rounded-md text-sm font-semibold">
            Get Live Rates
          </Button>
        </div>
        <button className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1220] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4 sm:px-6">
            {links.map(l => (
              <button key={l.id} onClick={() => goTo(l.id)} className="text-left text-white/85 hover:text-[#F59E0B] font-medium">
                {l.label}
              </button>
            ))}
            <Button onClick={() => goTo('rates')} className="bg-[#F59E0B] hover:bg-[#E08D0A] text-slate-900 h-11 rounded-md font-semibold">
              Get Live Rates
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
