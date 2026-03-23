import React from 'react';
import { motion } from 'framer-motion';

export default function AquaSpringWaterSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 pointer-events-none"></div>
            <img
              src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/3f6030ac2a69892b48c3d9abc7c0ee75.png"
              alt="Natural spring water feature at Lantana Resort"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif">
              Aqua Spring Water
            </h2>
            <div className="w-20 h-1 bg-[#C9A961] mb-6"></div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Reconnect with nature's purest element. Our Aqua Spring Water feature is a centerpiece of tranquility at Lantana Resort. Sourced from natural underground springs, the water is naturally filtered and mineral-rich, providing a refreshing and revitalizing experience.
              </p>
              <p>
                Unlike chemically treated pools, our spring water space maintains a harmonious balance with the environment. Surrounded by native ferns and smooth river stones, it offers a cool retreat on warm afternoons and a serene backdrop for morning meditation. The gentle sound of flowing water creates a therapeutic atmosphere that calms the mind and soothes the soul.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}