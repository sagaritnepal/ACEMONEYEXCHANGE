import React from 'react';
import { MapPin, PhoneCall, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0B1220] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
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
                <div className="mt-1 text-slate-400">Thamel Marg, Kathmandu 44600, Nepal</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <div className="font-bold text-white">Phone &amp; Email</div>
                <div className="mt-1 text-slate-400">+977 1-4412345 / info@thamelmoney.com.np</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-lg bg-[#F59E0B]/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div>
                <div className="font-bold text-white">Opening Hours</div>
                <div className="mt-1 text-slate-400">Sun - Fri: 8:00 AM - 8:00 PM</div>
                <div className="text-slate-400">Sat: 9:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
          <iframe
            title="Ace Money Exchange Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0324833!2d85.3095!3d27.7154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e5c%3A0x0!2sThamel!5e0!3m2!1sen!2snp!4v1"
            className="w-full h-1/2 border-0"
            loading="lazy"
          />
          <div className="relative h-1/2">
            <img
              src="https://images.unsplash.com/photo-1651326777778-e5a3bf9aa717"
              alt="Thamel Street"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <div className="w-12 h-12 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-lg ring-4 ring-white/30">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
