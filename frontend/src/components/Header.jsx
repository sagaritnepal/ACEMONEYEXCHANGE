import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <a href="#home" className="flex items-center group min-w-0">
    <img src="/ace-logo-v2.svg" alt="Ace Money Exchange" className="h-16 sm:h-20 w-auto flex-shrink-0" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 sm:h-24 flex items-center justify-between gap-3">
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
