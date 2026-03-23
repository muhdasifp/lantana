
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Sparkles, 
  Gamepad2, 
  Flower2, 
  Dumbbell, 
  Car, 
  PartyPopper,
  Lock,
  Banknote,
  Library
} from 'lucide-react';

const amenities = [
  { id: 1, name: "Entrance Plaza", icon: Building },
  { id: 2, name: "300 Seater Conference Hall", icon: Users },
  { id: 3, name: "Beauty Parlor", icon: Sparkles },
  { id: 4, name: "Indoor games", icon: Gamepad2 },
  { id: 5, name: "Ayurveda Spa", icon: Flower2 },
  { id: 6, name: "Fitness Center", icon: Dumbbell },
  { id: 7, name: "Drivers Accommodation", icon: Car },
  { id: 8, name: "Roof Top Party Hall", icon: PartyPopper },
  { id: 9, name: "Locker Facilities", icon: Lock },
  { id: 10, name: "Money Exchange", icon: Banknote },
  { id: 11, name: "Library", icon: Library },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-[#F5F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif mb-4 uppercase tracking-tight">
            Our Amenities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Experience world-class facilities designed for your ultimate comfort and luxury.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#C9A961]/30 text-center"
            >
              <div className="p-4 rounded-full bg-[#1B5E5E]/10 group-hover:bg-[#1B5E5E] transition-colors duration-300 mb-4">
                <item.icon 
                  size={32} 
                  className="text-[#1B5E5E] group-hover:text-[#C9A961] transition-colors duration-300"
                  strokeWidth={2}
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[#1B5E5E]">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
