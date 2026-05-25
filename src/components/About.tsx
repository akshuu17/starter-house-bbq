import { Flame, Heart, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-black py-24 px-4 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background Volumetric Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-radial-strong opacity-20 pointer-events-none" />

      {/* Decorative Ember Rain container */}
      <div className="ember-container opacity-40">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="ember"
            style={{
              left: `${15 + Math.random() * 70}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 5}s`,
              '--drift': `${(Math.random() - 0.5) * 100}px`
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cinematic Visual Branding Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden glass-panel border-brand-orange/20 shadow-neon-orange/20 group">
              
              {/* Dark Silhouette Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/25 via-brand-black to-black opacity-80 z-0" />
              
              {/* Glowing Ambient Fire Effect inside card */}
              <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-orange/40 to-transparent pointer-events-none z-10" />

              {/* Graphic Text Core Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <Flame className="w-12 h-12 text-brand-orange animate-pulse mb-4" />
                <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase mb-1">
                  ESTD. 2024
                </span>
                <h3 className="font-bebas text-4xl text-white tracking-wide uppercase leading-none mb-3">
                  COOKED WITH FIRE
                </h3>
                <p className="text-gray-300 font-outfit text-xs leading-relaxed">
                  Every slice of tandoori and bowl of biryani is slow-braised over charcoal to lock in genuine, unadulterated smokiness.
                </p>
              </div>

              {/* Floating Spice Sparks Animation inside Card */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-brand-yellow rounded-full animate-ping opacity-60" />
                <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-brand-orange rounded-full animate-bounce opacity-40" />
              </div>

            </div>
          </div>

          {/* Right Column: Premium Text Storytelling */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center">
            
            <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-yellow text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>LOCAL LEGEND IN ICHALKARANJI</span>
            </div>

            <h2 className="font-bebas text-4xl md:text-6xl text-white tracking-wider uppercase leading-tight">
              COOKED WITH FIRE.<br/>
              <span className="text-brand-orange">SERVED WITH PASSION.</span>
            </h2>

            <p className="mt-6 text-gray-300 font-sora text-sm md:text-base leading-relaxed">
              At **Starter House BBQ**, we believe true culinary luxury starts with raw fire. We reject chemical smokes and modern electric oven shortcuts. We return to the ancient, premium art of flame-cooking: importing selected long-grain basmati, marinating chicken in stone-pressed spices, and seal-roasting over genuine charcoal pits.
            </p>

            <p className="mt-4 text-gray-400 font-outfit text-sm leading-relaxed">
              We stand proud as the <span className="text-white font-semibold">Best BBQ Restaurant in Ichalkaranji</span>. Conveniently situated on the Main Road near Hotel Sity, we bring a cinematic luxury food dining and takeaway experience to life.
            </p>

            {/* Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl glass-panel border-white/5 hover:border-brand-orange/20 transition-all duration-300">
                <div className="p-2 rounded-lg bg-brand-orange/10">
                  <Flame className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Genuine Charcoal Grill</h4>
                  <p className="text-xs text-gray-400 mt-1 font-outfit">100% genuine firewood & charcoal slow roasting.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl glass-panel border-white/5 hover:border-brand-orange/20 transition-all duration-300">
                <div className="p-2 rounded-lg bg-brand-yellow/10">
                  <Heart className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Fresh Spice Secret</h4>
                  <p className="text-xs text-gray-400 mt-1 font-outfit">Made with pure hand-pound, local masala marinations.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
