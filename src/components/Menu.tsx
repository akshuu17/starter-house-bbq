import React from 'react';
import { Flame, Star, Zap } from 'lucide-react';
import biryaniImg from '../assets/best-chicken-dum-biryani-ichalkaranji.png';
import tandooriImg from '../assets/best-tandoori-chicken-ichalkaranji.png';
import kababImg from '../assets/chicken-kabab-near-me.png';
import bbqImg from '../assets/bbq-chicken-ichalkaranji.png';
import startersImg from '../assets/chicken-starters-ichalkaranji.png';

interface MenuItem {
  name: string;
  marathiName: string;
  seoName: string;
  description: string;
  price: string;
  image: string;
  spice: number;
  popular: boolean;
}

export const Menu: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Chicken Dum Biryani",
      marathiName: "चिकन दम बिर्याणी",
      seoName: "Best Chicken Dum Biryani in Ichalkaranji",
      description: "Fragrant long-grain Basmati rice and spice-infused marinated chicken layered in clay handis and slow-steamed under real charcoal Dum. Authentic local masterpiece.",
      price: "₹100",
      image: biryaniImg,
      spice: 3,
      popular: true
    },
    {
      name: "Chicken Leg Piece (1 Piece)",
      marathiName: "चिकन लेग पिस (१ पिस)",
      seoName: "Crispy Chicken Leg Piece near Hotel Sity Ichalkaranji",
      description: "Succulent chicken leg piece marinated in signature hot spices and roasted over a genuine charcoal flame grate for rich deep smokiness.",
      price: "₹60",
      image: startersImg,
      spice: 2,
      popular: true
    },
    {
      name: "Chicken Tangdi (1 Piece)",
      marathiName: "चिकन तंगडी (१ पिस)",
      seoName: "Smoky Chicken Tangdi in Station Road Ichalkaranji",
      description: "Traditional juicy chicken drumsticks heavily coated in a thick yogurt-chili marinade, slow-roasted inside high-heat tandoori clay ovens.",
      price: "₹90",
      image: tandooriImg,
      spice: 2,
      popular: false
    },
    {
      name: "Chicken Tikka (7 Pieces)",
      marathiName: "चिकन टिक्का (७ पिस)",
      seoName: "Best Chicken Tikka near me Ichalkaranji Station Road",
      description: "Seven pieces of boneless tender chicken cubes marinated in hand-pound stone masalas, grilled to perfection with smoky charred edges.",
      price: "₹80",
      image: kababImg,
      spice: 3,
      popular: true
    },
    {
      name: "Chicken Pahadi Tikka",
      marathiName: "चिकन पहाडी टिक्का",
      seoName: "Green Herbs Chicken Pahadi Tikka in Ichalkaranji",
      description: "Flame-grilled boneless chicken chunks coated in a fragrant green paste of fresh mint leaves, cilantro, and stone-ground spices.",
      price: "₹90",
      image: bbqImg,
      spice: 2,
      popular: false
    },
    {
      name: "Chicken Pahadi Tangdi",
      marathiName: "चिकन पहाडी तंगडी",
      seoName: "Charcoal Grilled Chicken Pahadi Tangdi near Hotel Sity",
      description: "Succulent chicken drumsticks glazed with our specialty green coriander-mint herb paste marinade, grilled slowly over live embers.",
      price: "₹90",
      image: tandooriImg,
      spice: 2,
      popular: false
    },
    {
      name: "Chicken Creamy Kabab",
      marathiName: "चिकन क्रिमी कबाब",
      seoName: "Creamy Chicken Kabab near me Ichalkaranji Station Road",
      description: "Juicy minced-chicken seekh kabab skewers layered in rich cream, cheese, green chilies, and aromatic cardamom hints.",
      price: "₹100",
      image: kababImg,
      spice: 1,
      popular: true
    }
  ];

  return (
    <section id="menu" className="relative bg-brand-dark py-24 px-4 md:px-12 overflow-hidden border-t border-white/5">
      {/* Dynamic Background elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-glow-radial opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-glow-radial opacity-35 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>SIGNATURE CREATIONS</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wider uppercase">
            THE LUXURY BBQ MENU
          </h2>
          <p className="mt-4 text-gray-400 font-sora text-sm md:text-base leading-relaxed">
            Experience our fire-kissed culinary masterworks. Locally sourced, cooked on genuine hot charcoal, and crafted for maximum smoky flavor in Ichalkaranji.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col rounded-2xl glass-panel border-white/5 hover:border-brand-orange/40 transition-all duration-500 overflow-hidden hover:shadow-neon-orange/20"
            >
              {/* Popular Tag */}
              {item.popular && (
                <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-orange text-black font-extrabold text-xs tracking-wider uppercase shadow-md border border-brand-yellow/30">
                  <Star className="w-3 h-3 fill-black text-black" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Product Visual Image Container */}
              <div className="relative w-full h-[220px] overflow-hidden bg-brand-black">
                <img
                  src={item.image}
                  alt={item.seoName}
                  title={item.seoName}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                {/* Visual Glass Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card/90 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="text-xs text-brand-orange font-bold uppercase tracking-wider block mb-0.5">
                    {item.marathiName}
                  </span>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bebas text-3xl text-white tracking-wide group-hover:text-brand-orange transition-colors duration-300">
                      {item.name}
                    </h3>
                    <span className="font-bebas text-xl md:text-2xl text-brand-yellow tracking-wider shrink-0 text-right">
                      {item.price}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-gray-400 font-outfit text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Spice Level & Keywords Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-500 font-extrabold tracking-widest uppercase font-sora">SPICE:</span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <Flame
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < item.spice ? 'text-brand-orange fill-brand-orange' : 'text-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Subtle Local tag for Google Rankings */}
                  <span className="text-[9px] font-bold text-brand-orange/40 uppercase tracking-widest">
                    ICHALKARANJI SPECIAL
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Menu;
