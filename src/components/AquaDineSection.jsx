import React from 'react';
import aquaDine1 from '../assets/images/aqua-dine-1.jpeg';
import aquaDine2 from '../assets/images/aqua-dine-2.webp';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  Coffee, 
  Waves, 
  Mic, 
  Smile, 
  Activity, 
  Target, 
  Crosshair, 
  CircleDashed, 
  Footprints, 
  Compass, 
  Flower2 
} from 'lucide-react';

const amenities = [
  { id: 1, name: "Multi Cuisine Restaurant", icon: Utensils },
  { id: 2, name: "Cafeteria", icon: Coffee },
  { id: 3, name: "Natural Pool Fishing Deck", icon: Waves },
  { id: 4, name: "Amphitheater", icon: Mic },
  { id: 5, name: "Kids Play Ground", icon: Smile },
  { id: 6, name: "Trampoline", icon: Activity },
  { id: 7, name: "Cricket Bowling Yard", icon: Target },
  { id: 8, name: "Archery", icon: Crosshair },
  { id: 9, name: "Mini Basketball Court", icon: CircleDashed },
  { id: 10, name: "Walking Yard", icon: Footprints },
  { id: 11, name: "Horse Riding", icon: Compass },
  { id: 12, name: "Butterfly Garden", icon: Flower2 }
];

const images = [
  {
    src: aquaDine1,
    alt: "Elegant pavilion dining setup at Lantana Aqua Dine"
  },
  {
    src: aquaDine2,
    alt: "Intimate outdoor dining experience at Lantana Aqua Dine"
  }
];

export default function AquaDineSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B5E5E]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#1B5E5E] mb-4 tracking-tight"
          >
            Lantana AQUA DINE
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#C9A961] mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Immerse yourself in a remarkable dine-in experience set perfectly within a vibrant natural ecosystem. Lantana AQUA DINE combines exceptional culinary delights with thrilling outdoor activities to create unforgettable moments for families, couples, and adventurers alike.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {images.map((img, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="relative overflow-hidden rounded-xl shadow-lg group aspect-[4/3] md:aspect-[3/2]"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 group-hover:ring-black/20 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Amenities Grid */}
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
              className="bg-[#F5F7F7] p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-[#1B5E5E] transition-colors duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transform"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-[#C9A961]" strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-[#1B5E5E] group-hover:text-white transition-colors duration-300">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}