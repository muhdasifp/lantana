
import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export default function BenefitsOfClientsSection() {
  return (
    <section id="benefits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif mb-4"
          >
            INCOME & RETURNING
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            className="text-lg sm:text-xl text-gray-700 font-light max-w-2xl mx-auto"
          >
            Invest in peace of mind and profitable returns.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#1B5E5E] mb-6 flex items-center gap-3">
                <BadgeCheck className="w-8 h-8 text-[#C9A961]" />
                We offer
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  As a privileged client, you unlock a world of exclusive advantages. Beyond owning a piece of paradise, you gain access to our premium AQUA DINE experience, where culinary mastery meets serene waterscapes.
                </p>
                <p>
                  Enjoy high returns on your investment (ROI) coupled with the luxury of personal usage. We handle all maintenance and operational aspects, ensuring your property remains pristine while you reap the rewards.
                </p>
                <ul className="space-y-2 font-medium text-[#1B5E5E]">
                   <li className="flex items-center gap-2">✔ High Appreciation Potential</li>
                   <li className="flex items-center gap-2">✔ Hassle-Free Management</li>
                   <li className="flex items-center gap-2">✔ VIP Access to Wellness Centers</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
               <img 
                 src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/ik2-9woQy.png" 
                 alt="Lantana ROI and Benefits" 
                 className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
