import React, { useState, useEffect } from 'react';
import { SEO } from './components/SEO';
import { CustomCursor } from './components/CustomCursor';
import { SoundToggle } from './components/SoundToggle';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Flame, Menu as MenuIcon, X, Phone, ArrowUp, ShieldCheck } from 'lucide-react';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll height to show back-to-top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "MENU", href: "#menu" },
    { name: "ABOUT", href: "#about" },
    { name: "GALLERY", href: "#gallery" },
    { name: "REVIEWS", href: "#testimonials" },
    { name: "VISIT US", href: "#location" }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      setIsMobileMenuOpen(false);
      // Smooth native scroll
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-gray-100 overflow-x-hidden font-outfit select-none">
      
      {/* 1. Injection of structured local schema data */}
      <SEO />

      {/* 2. Emitters, Custom cursors, and Web Audio control */}
      <CustomCursor />
      <SoundToggle />

      {/* 3. Global Header (Dynamic Glassmorphic Navbar) */}
      <header className="fixed top-0 inset-x-0 z-40 w-full glass-panel border-b border-white/5 py-4 px-6 md:px-12 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          
          {/* Logo Brand Title */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')} 
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-brand-orange/10 border border-brand-orange/20 group-hover:shadow-neon-orange transition-all duration-300">
              <Flame className="w-6 h-6 text-brand-orange animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-2xl md:text-3xl text-white tracking-wider leading-none">
                STARTER HOUSE
              </span>
              <span className="text-[10px] font-bold text-brand-yellow tracking-widest leading-none uppercase mt-0.5">
                BIRYANI & KABAB
              </span>
            </div>
          </a>

          {/* Desktop Navigation Link grid */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest text-gray-300 uppercase">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-brand-orange transition-colors duration-300 hover:text-glow-orange cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Hotline Badge */}
          <a
            href="tel:7020458294"
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold tracking-widest uppercase hover:bg-brand-orange hover:text-black hover:border-brand-yellow/30 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>7020458294</span>
          </a>

          {/* Mobile Menu Toggle Control */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl glass-panel border-white/10 text-white hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Slide-Out Menu Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 animate-fade-in lg:hidden">
          <nav className="flex flex-col gap-8 text-center text-2xl font-bebas tracking-widest text-white uppercase">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-brand-orange hover:text-glow-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <a
            href="tel:7020458294"
            className="mt-12 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-brand-orange text-black font-extrabold tracking-widest uppercase text-sm shadow-neon-orange"
          >
            <Phone className="w-4 h-4 fill-black text-black" />
            <span>Call 7020458294</span>
          </a>
        </div>
      )}

      {/* 4. Core Page Layout Contents */}
      <main className="w-full">
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Testimonials />
        <Location />
      </main>

      {/* 5. Luxury SEO optimized footer */}
      <footer className="relative bg-black pt-20 pb-10 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        
        {/* Footer Glow Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-glow-radial opacity-20 pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
            
            {/* Column 1: Restaurant Brief */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-brand-orange/10 border border-brand-orange/20">
                  <Flame className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="font-bebas text-3xl text-white tracking-wider">STARTER HOUSE</span>
              </div>
              
              <p className="mt-4 text-gray-400 font-outfit text-sm leading-relaxed max-w-md">
                Experience the premium luxury BBQ food universe in Ichalkaranji. Our trademark smoky tandoori chicken, fire-grilled kababs, and slow-dum biryanis are prepared daily on raw charcoal for authentic flavor.
              </p>

              {/* Local Trust Badge */}
              <div className="mt-6 flex items-center gap-2 text-brand-yellow font-bold text-xs tracking-wider uppercase font-outfit">
                <ShieldCheck className="w-5 h-5 text-brand-yellow animate-pulse" />
                <span>100% Authentic Charcoal Recipes</span>
              </div>

              {/* Instagram Follow Icon */}
              <div className="mt-6">
                <a
                  href="https://www.instagram.com/_starter.house_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-xl glass-panel border-brand-orange/20 text-[10px] font-bold text-gray-300 uppercase tracking-widest hover:border-brand-orange hover:text-brand-orange hover:shadow-neon-orange/25 transition-all duration-300"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span>Follow @_starter.house_</span>
                </a>
              </div>
            </div>

            {/* Column 2: Sitemap Links */}
            <div className="md:col-span-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-5 font-sora">
                QUICK DIRECTORY
              </h4>
              <ul className="flex flex-col gap-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href} 
                      onClick={(e) => scrollToSection(e, link.href)} 
                      className="hover:text-brand-orange transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & SEO location info */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-1 font-sora">
                LOCALITY DETAILS
              </h4>
              
              <div className="flex flex-col gap-2 text-sm text-gray-400 font-outfit font-light">
                <span>**Starter House BBQ**</span>
                <span>Starter House, Station Road,</span>
                <span>near City in Hotel (Hotel Sity), Ichalkaranji,</span>
                <span>Maharashtra - 416115, India</span>
                <span className="mt-1">Hotline: **7020458294**</span>
              </div>
            </div>

          </div>

          {/* Local business keyword map listings for rank optimizations */}
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col gap-1.5">
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                Local Search Keywords:
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-3 gap-y-1 text-[9px] text-gray-500 font-semibold italic">
                <span>Best Chicken Dum Biryani in Ichalkaranji</span> • 
                <span>Best Tandoori Chicken in Ichalkaranji</span> • 
                <span>BBQ Chicken Ichalkaranji</span> • 
                <span>Chicken Kabab near me</span> • 
                <span>Biryani near Hotel Sity Ichalkaranji</span>
              </div>
            </div>

            {/* Back to top clicker */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`p-3.5 rounded-xl glass-panel-heavy border-brand-orange/30 text-brand-orange hover:bg-brand-orange hover:text-black transition-all duration-300 shadow-neon-orange/10 ${
                showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
              }`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600 font-outfit">
            &copy; {new Date().getFullYear()} STARTER HOUSE BBQ. All Rights Reserved. Designed in Dark Luxury.
          </div>

        </div>
      </footer>

    </div>
  );
};

export default App;
