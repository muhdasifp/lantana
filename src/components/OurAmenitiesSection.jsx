
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Sparkles, 
  Gamepad2, 
  Droplet, 
  Dumbbell, 
  Car, 
  Music, 
  Lock, 
  DollarSign, 
  Scale 
} from 'lucide-react';

const amenities = [
  { id: 1, name: "Entrance Plaza", icon: MapPin },
  { id: 2, name: "300 Seater Conference Hall", icon: Users },
  { id: 3, name: "Beauty Parlor", icon: Sparkles },
  { id: 4, name: "Indoor games", icon: Gamepad2 },
  { id: 5, name: "Ayurveda Spa", icon: Droplet },
  { id: 6, name: "Fitness Center", icon: Dumbbell },
  { id: 7, name: "Drivers Accommodation", icon: Car },
  { id: 8, name: "Roof Top Party Hall", icon: Music },
  { id: 9, name: "Locker Facilities", icon: Lock },
  { id: 10, name: "Money Exchange", icon: DollarSign },
  { id: 11, name: "Library", icon: Scale }
];

export default function OurAmenitiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-12 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Amenities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {amenities.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-[#1B5E5E]/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#1B5E5E] transition-colors duration-300">
                <item.icon className="w-8 h-8 text-[#1B5E5E] group-hover:text-[#C9A961] transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-medium text-gray-800 text-lg group-hover:text-[#1B5E5E] transition-colors duration-300">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
