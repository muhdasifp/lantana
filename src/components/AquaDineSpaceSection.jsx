import React from 'react';
import { motion } from 'framer-motion';

export default function AquaDineSpaceSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif">
              Aqua Dine Space
            </h2>
            <div className="w-20 h-1 bg-[#C9A961] mb-6"></div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Dining at Lantana is an experience that engages all the senses. The Aqua Dine Space offers a unique culinary journey set against the backdrop of shimmering waters and lush greenery. Whether you choose our open-air pavilion or a private poolside table, the ambiance is unmatched.
              </p>
              <p>
                Our chefs specialize in farm-to-table cuisine, utilizing fresh, organic produce grown right here in Wayanad. Indulge in authentic Kerala delicacies, aromatic spices, and international favorites while enjoying the cool breeze and the rhythmic sounds of nature. It is the perfect setting for romantic dinners, family gatherings, and unforgettable celebrations.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-black/20 to-transparent z-10 pointer-events-none"></div>
            <img
              src="https://images.unsplash.com/photo-1591214896508-22fc74d84a75"
              alt="Luxury outdoor dining experience"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}