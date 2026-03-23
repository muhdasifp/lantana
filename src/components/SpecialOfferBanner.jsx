import React from 'react';
import { motion } from 'framer-motion';

export default function SpecialOfferBanner() {
  return (
    <section id="special-offer" className="relative w-full py-24 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/83c8c3a9791a0809513f3f4f80096120.png" 
          alt="Luxury cottage at Lantana Resort" 
          className="w-full h-full object-cover"
        />
        {/* Dark Teal Overlay */}
        <div className="absolute inset-0 bg-[#1B5E5E]/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/3 text-left"
        >
          <span className="inline-block bg-[#C9A961] text-gray-900 font-bold px-6 py-2 rounded-full mb-8 shadow-md uppercase tracking-widest text-sm">
            Special offer!
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-[800px] font-serif">
            Own Your Dream Cottage for Less – Investment Plots Now at a Special Discount!
          </h2>
        </motion.div>

        {/* Right Content - Discount Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-full md:w-auto flex justify-center md:justify-end"
        >
          <div className="relative w-[220px] h-[220px] rounded-full bg-white border-8 border-[#C9A961] shadow-2xl flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
            <span className="text-[#1B5E5E] text-6xl font-bold leading-none mb-1">
              30%
            </span>
            <span className="text-gray-500 text-lg uppercase tracking-widest font-bold">
              discount
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}