import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Sparkles, 
  Gamepad2, 
  Leaf, 
  Dumbbell, 
  Car, 
  Music, 
  Lock, 
  DollarSign, 
  BookOpen,
  Waves
} from 'lucide-react';

const amenities = [
  { id: 1, name: "Entrance Plaza", icon: MapPin },
  { id: 2, name: "300 Seater Conference Hall", icon: Users },
  { id: 3, name: "Beauty Parlor", icon: Sparkles },
  { id: 4, name: "Indoor games", icon: Gamepad2 },
  { id: 5, name: "Ayurveda Spa", icon: Leaf },
  { id: 6, name: "Fitness Center", icon: Dumbbell },
  { id: 7, name: "Drivers Accommodation", icon: Car },
  { id: 8, name: "Roof Top Party Hall", icon: Music },
  { id: 9, name: "Locker Facilities", icon: Lock },
  { id: 10, name: "Money Exchange", icon: DollarSign },
  { id: 11, name: "Library", icon: BookOpen },
  { id: 12, name: "Swimming Pool", icon: Waves }
];

const images = [
  "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/ba407ce8ed77e105094cbeaed3a88438.jpg",
  "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/4026af79ba75b02dd43fabb92409ad63.jpg",
  "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/a60b719b5336512495ffbeb44dd9abb2.jpg",
  "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/7c47f5eee1f056645c2d1d5029ae11c6.webp"
];

export default function LantanaCloudSection() {
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
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-[#C9A961] tracking-[0.2em] uppercase mb-2">
              EVENTS & CELEBRATIONS
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1B5E5E] mb-6">
              Lantana CLOUDS
            </h3>
            <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8 rounded-full"></div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Elevate your corporate events, destination weddings, and grand celebrations at Lantana Clouds. Our state-of-the-art facilities offer the perfect blend of luxury and functionality, ensuring every event is memorable.
              </p>
              <p>
                From our spacious 300-seater conference hall to the scenic rooftop party hall and rejuvenating Ayurveda Spa, every detail is meticulously designed to provide an unparalleled experience for you and your guests.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Masonry-style Image Gallery */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {/* Main Featured Image */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 rounded-lg overflow-hidden shadow-lg border-2 border-amber-500/10">
            <img 
              src={images[0]} 
              alt="Modern rooftop party area with illuminated lounge seating" 
              loading="lazy"
              decoding="async"
              className="w-full h-full min-h-[400px] object-cover hover:scale-105 transition-transform duration-700 block" 
            />
          </motion.div>
          
          {/* Secondary Images Column */}
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
              <img 
                src={images[1]} 
                alt="Rejuvenating Ayurveda Spa Setting" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 block" 
              />
            </motion.div>
            
            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
              <img 
                src={images[2]} 
                alt="Indoor games and entertainment area" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 block" 
              />
            </motion.div>
          </div>
          
          {/* Full Width Bottom Image */}
          <motion.div variants={itemVariants} className="md:col-span-3 rounded-lg overflow-hidden shadow-lg h-48 md:h-64 mt-2">
            <img 
              src={images[3]} 
              alt="Beautiful waterfall pool area" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 block" 
            />
          </motion.div>
        </motion.div>

        {/* Amenities Grid */}
        <div className="py-12 mt-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {amenities.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-[#1B5E5E]/5 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#1B5E5E] transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-[#1B5E5E] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif font-medium text-gray-800 text-lg group-hover:text-[#1B5E5E] transition-colors duration-300">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}