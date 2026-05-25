import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

interface Review {
  name: string;
  location: string;
  text: string;
  rating: number;
  featuredDish: string;
}

export const Testimonials: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Rahul Patil",
      location: "Ichalkaranji, Maharashtra",
      text: "I have searched all over Kolhapur district, and I can confidently say Starter House has the absolute best Chicken Dum Biryani in Ichalkaranji! The chicken is incredibly juicy, the rice is wonderfully aromatic, and that genuine charcoal clay pot smokiness is unforgettable.",
      rating: 5,
      featuredDish: "Best Chicken Dum Biryani"
    },
    {
      name: "Priyanka Naik",
      location: "Ichalkaranji Local Guide",
      text: "Their Smoky Tandoori Chicken is purely majestic! It has the perfect charred, flame-grilled crust on the outside while staying completely tender inside. Love the premium branding and fast service near Hotel Sity.",
      rating: 5,
      featuredDish: "Smoky Tandoori Chicken"
    },
    {
      name: "Amit Deshmukh",
      location: "Ichalkaranji Food Explorer",
      text: "We ordered their Chicken Kabab skewers and Crispy Chicken Starters for a family party. Every single guest was wowed! The quality is premium, the pricing is highly reasonable, and the smoky flavors are unmatched.",
      rating: 5,
      featuredDish: "Fire Grilled Kabab"
    }
  ];

  return (
    <section id="testimonials" className="relative bg-black py-24 px-4 md:px-12 overflow-hidden border-t border-white/5">
      {/* Background ambient red glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glow-radial opacity-20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-yellow text-xs font-bold tracking-widest uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-orange" />
            <span>PATRON VOICE</span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-white tracking-wider uppercase">
            REVIEWS & FOOD STORIES
          </h2>
          <p className="mt-4 text-gray-400 font-sora text-sm md:text-base leading-relaxed">
            Don't just take our word for it. Read honest feedback from local food enthusiasts and discover why we rank as the premium charcoal BBQ destination in Ichalkaranji.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-8 rounded-2xl glass-panel border-white/5 hover:border-brand-orange/30 transition-all duration-300 hover:scale-[1.02] relative"
            >
              <div>
                {/* Glowing Stars */}
                <div className="flex items-center gap-1 text-brand-yellow mb-6">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 font-outfit text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-1">
                <span className="text-white font-bold text-base font-sora">
                  {rev.name}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {rev.location}
                </span>
                <span className="mt-2 text-[10px] font-extrabold text-brand-orange tracking-widest uppercase bg-brand-orange/10 px-2.5 py-1 rounded-full self-start border border-brand-orange/20">
                  Dish: {rev.featuredDish}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
