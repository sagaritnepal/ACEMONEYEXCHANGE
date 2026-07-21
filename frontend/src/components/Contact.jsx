import React from 'react';
import { MapPin, PhoneCall, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0B1220] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 text-[#F59E0B]">
            <span className="h-[2px] w-8 bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.25em]">CONTACT US</span>
          </div>
          <h2 className="mt-5 text-white font-extrabold tracking-tight leading-[1.05]" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.5rem)' }}>
            Visit our ACE MONEY EXCHANGE branch today
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <div className="font-bold text-white">Our Address</div>
                <div className="mt-1 text-slate-400">Thamel Marg (Opposite of Karmachari Sanchayakosh Building), Kathmandu</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <div className="font-bold text-white">Phone &amp; Email</div>
                <div className="mt-1 text-slate-400">+977 1-4412345 / info@acemoneyexchange.com.np</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <div className="font-bold text-white">Opening Hours</div>
                <div className="mt-1 text-slate-400">Everyday: 8:00 AM - 8:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
          <iframe
            title="Ace Money Exchange Location"
            src="https://www.google.com/maps?q=Karmachari+Sanchaya+Kosh+Building%2C+Tridevi+Marg%2C+Thamel%2C+Kathmandu+44600%2C+Nepal&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://share.google/FMEXHu06HK3l8Kmlk"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#E08D0A] text-slate-900 font-semibold text-sm px-4 py-2 rounded-full shadow-lg transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
