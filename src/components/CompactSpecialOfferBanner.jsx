import React from 'react';
import { motion } from 'framer-motion';

export default function CompactSpecialOfferBanner() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[800px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1578305034822-5dab0fea5ded" 
              alt="Night view of luxury cottage" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E5E]/95 to-[#1B5E5E]/70"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
            
            {/* Text Content */}
            <div className="flex-1">
              <span className="inline-block bg-[#FF9500] text-white font-bold px-4 py-1.5 rounded-full mb-4 shadow-md uppercase tracking-wide text-xs">
                Special offer!
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                Own Your Dream Cottage for Less
              </h3>
              <p className="text-gray-200 text-base sm:text-lg font-light">
                Investment Plots Now at a Special Discount! Secure your future today.
              </p>
            </div>

            {/* Discount Badge */}
            <div className="flex-shrink-0">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-32 h-32 rounded-full bg-[#FF9500] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white/20"
              >
                <span className="text-4xl font-bold leading-none">30%</span>
                <span className="text-xs uppercase tracking-wider font-medium mt-1">OFF</span>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}