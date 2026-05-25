import React, { useEffect, useRef } from 'react';
import { Canvas3D } from './Canvas3D';
import { ArrowRight, Flame, MapPin } from 'lucide-react';
import { gsap } from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Entrance Animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
    
    tl.fromTo(titleRef.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, delay: 0.5 }
    )
    .fromTo(subtitleRef.current, 
      { y: 40, opacity: 0 }, 
      { y: 0, opacity: 1 }, 
      '-=1.0'
    )
    .fromTo(ctaRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1 }, 
      '-=0.8'
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20 px-4 md:px-12 select-none"
    >
      {/* 1. Volumetric Fiery Background Glows */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-glow-radial opacity-60 pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-glow-radial opacity-40 pointer-events-none z-0" />

      {/* 2. Three.js / R3F Canvas Container */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <Canvas3D />
      </div>

      {/* 3. HTML Ambient Ember Rain Fallback for all viewports */}
      <div className="ember-container">
        {Array.from({ length: 18 }).map((_, i) => (
          <div 
            key={i} 
            className="ember" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 6}s`,
              '--drift': `${(Math.random() - 0.5) * 150}px`
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* 4. Hero Content Layer */}
      <div className="relative z-20 container mx-auto flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-full max-w-5xl">
        
        {/* Culinary Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-brand-orange/30 text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-6 animate-pulse shadow-neon-orange/10">
          <Flame className="w-4 h-4 text-brand-orange animate-bounce" />
          <span>FUTURISTIC BBQ UNIVERSE</span>
        </div>

        {/* Cinematic Main H1 SEO Title */}
        <h1 
          ref={titleRef}
          className="font-bebas text-6xl md:text-8xl lg:text-[105px] leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-yellow to-brand-orange text-glow-orange select-none uppercase"
        >
          STARTER HOUSE BBQ
        </h1>

        {/* Dynamic Subtitle incorporating Local Keywords */}
        <p 
          ref={subtitleRef}
          className="mt-6 text-lg md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl font-sora leading-relaxed"
        >
          Home of the <span className="text-brand-orange font-semibold">Best Chicken Dum Biryani in Ichalkaranji</span>. Discover flame-kissed Smoky Tandoori Chicken and fire-grilled perfection near City in Hotel (Hotel Sity) on Station Road.
        </p>

        {/* CTA Actions */}
        <div 
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow text-black font-extrabold tracking-wider uppercase text-sm hover:scale-105 hover:shadow-neon-gold transition-all duration-300 shadow-lg border border-brand-yellow/30"
          >
            <span>Explore The Menu</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[3]" />
          </a>

          <a
            href="#location"
            className="btn-magnetic w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full glass-panel text-white font-bold tracking-wider uppercase text-sm border-white/10 hover:border-brand-orange hover:text-brand-orange transition-all duration-300 hover:shadow-neon-orange"
          >
            <MapPin className="w-4 h-4 text-brand-orange" />
            <span>Visit Restaurant</span>
          </a>
        </div>

        {/* Quick Local SEO Discovery Keywords Footer inside Hero */}
        <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold tracking-wider text-gray-400 font-outfit uppercase">
          <span className="text-brand-orange/70">🔥 ICHALKARANJI SPECIALS:</span>
          <span className="px-3 py-1 rounded bg-white/5 border border-white/5">AUTHENTIC DUM BIRYANI</span>
          <span className="px-3 py-1 rounded bg-white/5 border border-white/5">SMOKY TANDOORI</span>
          <span className="px-3 py-1 rounded bg-white/5 border border-white/5">FIRE GRILLED KABAB</span>
        </div>

      </div>

      {/* Decorative Diagonal Bottom Mesh Shader Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-20" />
    </section>
  );
};
