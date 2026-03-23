
import React from 'react';
import { motion } from 'framer-motion';
import co2Image from '../assets/images/co2.png';

export default function MeenangadiSection() {
  

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif uppercase tracking-tight inline-block relative pb-4">
            SPECIALTY
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#C9A961] rounded-full"></span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:order-1"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#1B5E5E] font-serif mb-4 uppercase tracking-tight">
              MEENANGADI
            </h3>
            <div className="w-16 h-1 bg-[#C9A961] mb-6"></div>
            
            <h4 className="text-xl md:text-2xl text-gray-800 font-serif mb-6 leading-tight">
              The first Carbon neutral Panchayath in India
            </h4>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Meenangadi is an old town situated on the highway NH 766 between Kalpetta and Sulthan Bathery in Wayanad. Meenangadi is India's first Carbon Neutral panchayat. It is a groundbreaking initiative aimed to achieve low emission development and climate resilience through decentralized and integrated action plans.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meenangadi is also a bottom-up model for integrating climate action into development planning. Nestled in Meenangadi, an extension of Western Ghats, Lantana offers stunning resorts that overlook the enchanting greenery offering relaxing retreat that can enthuse elegant Luxury with its magnificent ultra modern architectural excellence.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative w-full flex justify-center lg:justify-end lg:order-2"
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[450px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5">
              <img 
                src={co2Image} 
                alt="Meenangadi Carbon Neutral Aerial View"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
