import React from 'react';
import { motion } from 'framer-motion';
import { Home, ShieldCheck, Globe } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: Home,
    title: "CARBON REMOTE VILLAGE"
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "FLOOD-FREE & SAFE LOCATION"
  },
  {
    id: 3,
    icon: Globe,
    title: "SPACIOUS & SERENE ATMOSPHERE"
  }
];

export default function LocationBenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black uppercase tracking-wide max-w-4xl mx-auto leading-tight"
          >
            PRIME LOCATION. POPULAR DESTINATIONS. PROMISING RETURNS.
          </motion.h2>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1B5E5E] transition-colors duration-300 shadow-md border border-gray-100 group-hover:border-[#1B5E5E]">
                <item.icon className="w-10 h-10 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-black uppercase tracking-wider group-hover:text-[#1B5E5E] transition-colors duration-300">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}