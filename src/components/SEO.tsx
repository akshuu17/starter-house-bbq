import React, { useEffect } from 'react';

export const SEO: React.FC = () => {
  useEffect(() => {
    // 1. Restaurant / LocalBusiness Schema
    const restaurantSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "STARTER HOUSE BBQ",
      "image": [
        "https://starterhousebbq.com/assets/best-chicken-dum-biryani-ichalkaranji.png",
        "https://starterhousebbq.com/assets/best-tandoori-chicken-ichalkaranji.png",
        "https://starterhousebbq.com/assets/chicken-kabab-near-me.png",
        "https://starterhousebbq.com/assets/bbq-chicken-ichalkaranji.png",
        "https://starterhousebbq.com/assets/chicken-starters-ichalkaranji.png"
      ],
      "@id": "https://starterhousebbq.com/#restaurant",
      "url": "https://starterhousebbq.com",
      "telephone": "+917020458294",
      "priceRange": "$$",
      "menu": "https://starterhousebbq.com/#menu",
      "servesCuisine": [
        "Biryani",
        "Chicken Dum Biryani",
        "Tandoori Chicken",
        "Chicken Tangdi",
        "Chicken Tikka",
        "Chicken Pahadi Tikka",
        "Chicken Creamy Kabab",
        "Chicken Starters",
        "Indian BBQ",
        "Flame Grilled Chicken"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Starter House, Station Road, near City in Hotel (Hotel Sity)",
        "addressLocality": "Ichalkaranji",
        "addressRegion": "Maharashtra",
        "postalCode": "416115",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 16.690865,
        "longitude": 74.459480
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "5:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/_starter.house_"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+917020458294",
        "contactType": "customer service"
      }
    };

    // 2. Supercharged 6-Node Local FAQ Schema to capture rich snippet rankings
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I get the best Chicken Dum Biryani in Ichalkaranji?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The absolute best Chicken Dum Biryani in Ichalkaranji is served at STARTER HOUSE BBQ. Located on Station Road near City in Hotel (Hotel Sity), Ichalkaranji, our trademark Biryani features fragrant Basmati rice and charcoal-dum cooked tender chicken. Half is priced at ₹90 and Full at ₹160."
          }
        },
        {
          "@type": "Question",
          "name": "Is Starter House BBQ located on Station Road near Hotel Sity in Ichalkaranji?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Starter House BBQ is situated on Station Road, near City in Hotel (Hotel Sity), Ichalkaranji, Maharashtra 416115. We offer convenient dine-in, takeaway, and collection options."
          }
        },
        {
          "@type": "Question",
          "name": "What is the contact number for placing takeaway orders at Starter House BBQ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Starter House BBQ directly at +91 7020458294 to place hot takeaway orders, book a table, or inquire about daily chicken specials."
          }
        },
        {
          "@type": "Question",
          "name": "What are the menu rates for Chicken Starters and Tandoori at Starter House BBQ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starter House BBQ offers exact pocket-friendly rates matching our flyer: Chicken Leg Piece (1 Piece) is ₹60, Chicken Tangdi (1 Piece) is ₹90, Chicken Tikka (7 Pieces) is ₹80, Chicken Pahadi Tikka and Pahadi Tangdi are ₹90 each, and Chicken Creamy Kabab is ₹100."
          }
        },
        {
          "@type": "Question",
          "name": "Does Starter House BBQ offer real fire charcoal-grilled kababs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our kababs, including the Chicken Creamy Kabab (₹100) and Chicken Tikka (₹80), are slow-marinated in house spice pastes and cooked over genuine hot charcoal grills for unmatched smokiness."
          }
        },
        {
          "@type": "Question",
          "name": "What are the timings for Starter House BBQ near City in Hotel Ichalkaranji?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open daily from Monday to Sunday from 11:00 AM to 11:00 PM. Drop by for delicious lunch, evening appetizers, or a late-night Biryani dinner."
          }
        }
      ]
    };

    // Inject Restaurant Schema
    const scriptRestaurant = document.createElement('script');
    scriptRestaurant.type = 'application/ld+json';
    scriptRestaurant.id = 'jsonld-restaurant';
    scriptRestaurant.innerHTML = JSON.stringify(restaurantSchema);
    document.head.appendChild(scriptRestaurant);

    // Inject FAQ Schema
    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'jsonld-faq';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    // Cleanup scripts on unmount
    return () => {
      const oldRestaurant = document.getElementById('jsonld-restaurant');
      if (oldRestaurant) oldRestaurant.remove();
      const oldFaq = document.getElementById('jsonld-faq');
      if (oldFaq) oldFaq.remove();
    };
  }, []);

  return null;
};
export default SEO;
