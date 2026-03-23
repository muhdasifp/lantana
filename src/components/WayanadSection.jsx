
import React from 'react';
import { motion } from 'framer-motion';

export default function WayanadSection() {
  const image = "https://images.unsplash.com/photo-1619773331010-f0ca2e5e340b";

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B5E5E] font-serif mb-4 uppercase tracking-tight">
              WAYANAD
            </h2>
            <div className="w-24 h-1 bg-[#C9A961] mb-6"></div>
            
            <h3 className="text-2xl md:text-3xl text-gray-800 font-serif mb-6 leading-tight">
              an Oxyrich future
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Wayanad is an angelic mountainous region in the Western Ghats that is located in the Southern region of Deccan Plateau. Wayanad known for its spices, diverse Wildlife, caves and vibrant culture, is one of the eight hotspots of Biodiversity with unique flora and fauna. Snuggled amidst the Green paradise with majestic hills, we bring you the very doorstep of Nature.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Set amidst the breathtaking hills and scenic beauty of Wayanad, Lantana creates an astonishing experience for sustainable luxury with professional experience to give a mesmerizing and captivating stay, offering rejuvenation and relaxation in the middle of Nature.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5">
              <img 
                src={image} 
                alt="Wayanad Oxyrich Nature"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
