import React from 'react';
import { motion } from 'framer-motion';

export default function LantanaPlotOutlineSection() {
  return (
    <section id="plot-outline" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif mb-6 leading-tight">
              Lantana Plot Outline
            </h2>
            <h3 className="text-xl sm:text-2xl text-gray-600 mb-6 font-light">
              Spaces crafted for your comfort
            </h3>
            
            <div className="prose text-gray-600 leading-relaxed space-y-4 text-lg">
              <p>
                Discover a thoughtfully designed layout where luxury meets nature. The Lantana Plot Outline is more than just land; it's a blueprint for a serene lifestyle. Each plot is strategically positioned to maximize privacy while ensuring easy access to our world-class amenities.
              </p>
              <p>
                From the moment you step in, you are greeted by lush landscapes, calming water features, and the architectural brilliance of our resort facilities. Whether it's the rooftop dining experience or the tranquil pathways, every element is curated to enhance your living experience in Wayanad.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 font-medium">
                <li>Premium plot positioning for optimal views</li>
                <li>Seamless connectivity to resort amenities</li>
                <li>Integrated landscaping with native flora</li>
                <li>Designed for sustainable and luxury living</li>
              </ul>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-[#1B5E5E]/10">
              <img 
                src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/fd46206de1a71f6146698c25731b580e.png" 
                alt="Lantana Resort Plot Outline Plan" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}