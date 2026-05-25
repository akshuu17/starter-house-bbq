import React from 'react';
import { MapPin, Phone, Clock, Navigation, Map } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="relative bg-brand-dark py-24 px-4 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-glow-radial opacity-25 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
            <Map className="w-3.5 h-3.5" />
            <span>FIND STARTER HOUSE</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wider uppercase">
            VISIT THE BBQ GRILL
          </h2>
          <p className="mt-4 text-gray-400 font-sora text-sm md:text-base leading-relaxed">
            Ready to experience legendary, charcoal-cooked dum biryani and smoky grilled tandoori? Find our premium location on Main Road in Ichalkaranji and drop by!
          </p>
        </div>

        {/* Info Cards and Google Maps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Business & SEO Location Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* 1. Address Card */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-orange/10 text-brand-orange">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bebas text-2xl text-white tracking-wide uppercase">RESTAURANT ADDRESS</h3>
                <p className="mt-2 text-gray-300 font-outfit text-sm leading-relaxed">
                  Starter House, Station Road,<br/>
                  near City in Hotel (Hotel Sity), Ichalkaranji,<br/>
                  Maharashtra 416115
                </p>
                <span className="inline-block mt-3 text-[10px] font-bold text-brand-yellow tracking-widest uppercase bg-brand-yellow/10 px-2 py-0.5 rounded border border-brand-yellow/20">
                  Near City in Hotel / Hotel Sity, Station Road
                </span>
              </div>
            </div>

            {/* 2. Phone Call Direct Card */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <Phone className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bebas text-2xl text-white tracking-wide uppercase">PHONE & RESERVATIONS</h3>
                <p className="mt-2 text-gray-300 font-outfit text-sm">
                  Direct Line: <a href="tel:+91 7020458294" className="text-white hover:text-brand-orange font-bold underline transition-colors">+917020458294</a>
                </p>
                <p className="text-xs text-gray-500 mt-1">Call for hot takeaways and table booking.</p>
              </div>
            </div>

            {/* 3. Timings Card */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 hover:border-brand-orange/20 transition-all duration-300 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-orange/10 text-brand-orange">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bebas text-2xl text-white tracking-wide uppercase">OPERATIONAL HOURS</h3>
                <p className="mt-2 text-gray-300 font-outfit text-sm">
                  Monday – Sunday: <span className="text-white font-semibold">5:00 PM – 11:00 PM</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">Open daily for lunch, evening snacks, and late dinner.</p>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="tel:+91 7020458294"
                className="btn-magnetic flex-1 py-4 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-black font-extrabold text-center tracking-wider uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-brand-yellow/30 shadow-lg"
              >
                <Phone className="w-4 h-4 fill-black text-black" />
                <span>Call +91 7020458294</span>
              </a>

              <a
                href="https://maps.google.com/?q=16.690865,74.459480"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic flex-1 py-4 px-6 rounded-xl glass-panel text-white font-bold text-center tracking-wider uppercase text-sm border-white/10 hover:border-brand-orange hover:text-brand-orange transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-neon-orange"
              >
                <Navigation className="w-4 h-4 text-brand-orange" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Glowing Iframe Container */}
          <div className="lg:col-span-7 flex">
            <div className="w-full min-h-[380px] rounded-3xl overflow-hidden glass-panel-heavy p-2.5 border-brand-orange/30 shadow-neon-orange/20 relative flex">
              
              {/* Gold Ambient Corner Sparkle */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-yellow rounded-full animate-ping pointer-events-none" />

              {/* The Provided Iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1779339587030!6m8!1m7!1shOfNRLJzuPJtHLALHqvGAw!2m2!1d16.69086518449165!2d74.45948059631357!3f277.8078368987863!4f-10.00316586561668!5f0.7820865974627469" 
                className="w-full h-full rounded-2xl flex-grow border-0 min-h-[380px]"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Starter House BBQ location Google Street View near Hotel Sity Ichalkaranji"
              />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
