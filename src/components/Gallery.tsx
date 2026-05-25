import React, { useState } from 'react';
import { Camera, X, ZoomIn } from 'lucide-react';
import biryaniImg from '../assets/best-chicken-dum-biryani-ichalkaranji.png';
import tandooriImg from '../assets/best-tandoori-chicken-ichalkaranji.png';
import kababImg from '../assets/chicken-kabab-near-me.png';
import bbqImg from '../assets/bbq-chicken-ichalkaranji.png';
import startersImg from '../assets/chicken-starters-ichalkaranji.png';
import platterImg from '../assets/premium-bbq-platter-ichalkaranji.png';

interface GalleryItem {
  title: string;
  seoTitle: string;
  category: string;
  image: string;
  description: string;
}

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      title: "Signature Dum Biryani",
      seoTitle: "Authentic Chicken Dum Biryani near Hotel Sity Ichalkaranji",
      category: "Dum Biryani",
      image: biryaniImg,
      description: "Fragrant, hand-pulled aromatic rice layers cooked under heavy seal clay pots with hand-ground spices and tender chicken cuts."
    },
    {
      title: "Smoky Tandoori Chicken",
      seoTitle: "Smoky Tandoori Chicken cooked with real fire in Ichalkaranji",
      category: "Tandoori Specials",
      image: tandooriImg,
      description: "Beautifully charred whole chicken marinated in yogurt, ginger, garlic, and fresh local spices, roasted over live tandoori fire."
    },
    {
      title: "Charcoal Chicken Kabab",
      seoTitle: "Gourmet Chicken Kabab near me cooked on hot embers",
      category: "Kabab skewering",
      image: kababImg,
      description: "Finely ground chicken skewers, hand-kneaded with fresh herbs and skewered onto metal bars to grill slowly on natural wood embers."
    },
    {
      title: "Glazed BBQ Chicken",
      seoTitle: "Best Flame Grilled BBQ Chicken in Ichalkaranji",
      category: "BBQ Grilled",
      image: bbqImg,
      description: "Thick chicken cuts grilled to a golden char, lavishly brushed with caramelized specialty barbecue sauce."
    },
    {
      title: "Gourmet Starters Slate",
      seoTitle: "Spicy Crispy Chicken Starters Ichalkaranji restaurant menu",
      category: "Appetizers",
      image: startersImg,
      description: "Golden batter-fried chicken bites loaded with microgreens, fresh-sliced chilies, and tangy house glazes."
    },
    {
      title: "Imperial BBQ Platter",
      seoTitle: "Grand BBQ Platter featuring biryani and grilled meats in Ichalkaranji",
      category: "Signature Platters",
      image: platterImg,
      description: "Our king-sized selection containing hot Biryani layers, tandoori leg pieces, seekh kababs, and golden chicken starters."
    }
  ];

  return (
    <section id="gallery" className="relative bg-brand-dark py-24 px-4 md:px-12 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-glow-radial opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs font-bold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>CINEMATIC SHOWCASE</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wider uppercase">
            VISUAL BBQ UNIVERSE
          </h2>
          <p className="mt-4 text-gray-400 font-sora text-sm md:text-base leading-relaxed">
            Feast your eyes on the luxury art of open-fire roasting. True-to-life AI food photography captures the mouth-watering reality of Starter House BBQ.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden glass-panel border-white/5 hover:border-brand-orange/40 transition-all duration-500 hover:scale-[1.02] shadow-lg shadow-black"
            >
              {/* Photo Image Wrapper */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-black">
                <img
                  src={item.image}
                  alt={item.seoTitle}
                  title={item.seoTitle}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.8] group-hover:brightness-95"
                  loading="lazy"
                />
                
                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange scale-75 group-hover:scale-100 transition-all duration-300 shadow-neon-orange">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                {/* Corner Category Tag */}
                <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-brand-yellow font-bold text-[10px] tracking-wider uppercase font-outfit">
                  {item.category}
                </span>
              </div>

              {/* Title & Description footer */}
              <div className="p-5">
                <h3 className="font-bebas text-2xl text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1 text-gray-400 text-xs font-outfit font-light line-clamp-2">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX POPUP COMPONENT */}
      {activePhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in transition-all duration-300">
          {/* Close Backdrop Click */}
          <div className="absolute inset-0" onClick={() => setActivePhoto(null)} />
          
          <div className="relative max-w-4xl w-full rounded-3xl overflow-hidden glass-panel border-white/15 bg-brand-black shadow-2xl z-10 flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:text-brand-orange hover:border-brand-orange transition-all duration-300"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column: Massive High-End Image */}
            <div className="md:w-3/5 aspect-[4/3] md:aspect-auto md:h-[480px] bg-black">
              <img
                src={activePhoto.image}
                alt={activePhoto.seoTitle}
                title={activePhoto.seoTitle}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Descriptions & Details */}
            <div className="p-8 md:w-2/5 flex flex-col justify-center bg-brand-card">
              <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
                {activePhoto.category}
              </span>
              <h3 className="font-bebas text-4xl text-white tracking-wider uppercase mt-2">
                {activePhoto.title}
              </h3>
              <p className="mt-4 text-gray-300 font-sora text-sm leading-relaxed">
                {activePhoto.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-2">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  Target Search Focus:
                </span>
                <span className="text-xs text-brand-yellow font-medium italic">
                  "{activePhoto.seoTitle}"
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
