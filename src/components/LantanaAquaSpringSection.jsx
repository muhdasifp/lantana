
import React from 'react';
import { motion } from 'framer-motion';
import aquaSpring1 from '../assets/images/aqua-spring-1.webp';
import aquaSpring2 from '../assets/images/aqua-spring-2.png';
import { 
  Footprints, 
  Activity, 
  Library, 
  CloudRain, 
  Bike, 
  Crosshair, 
  CircleDashed, 
  Waves, 
  Compass, 
  Droplets, 
  Flower2, 
  Car, 
  ShoppingBag, 
  Map, 
  Stethoscope, 
  Smartphone 
} from 'lucide-react';

const amenities = [
  { id: 1, name: "Jogging Track", icon: Footprints },
  { id: 2, name: "Zip Line", icon: Activity },
  { id: 3, name: "Library", icon: Library },
  { id: 4, name: "Rain Dance", icon: CloudRain },
  { id: 5, name: "Cycling", icon: Bike },
  { id: 6, name: "Archery", icon: Crosshair },
  { id: 7, name: "Mini Basketball Court", icon: CircleDashed },
  { id: 8, name: "Swimming pool", icon: Waves },
  { id: 9, name: "Horse Riding", icon: Compass },
  { id: 10, name: "Waterfalls", icon: Droplets },
  { id: 11, name: "Butterfly Garden", icon: Flower2 },
  { id: 12, name: "Ample Carparking", icon: Car },
  { id: 13, name: "Laundry Bag", icon: ShoppingBag },
  { id: 14, name: "Travel Desk", icon: Map },
  { id: 15, name: "Doctor on Call", icon: Stethoscope },
  { id: 16, name: "On-line Cabs", icon: Smartphone }
];

const imageData = [
  {
    url: aquaSpring1,
    alt: "Natural swimming pool with waterfall"
  },
  {
    url: aquaSpring2,
    alt: "Luxury swimming pool with resort setting"
  }
];

export default function LantanaAquaSpringSection() {
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
    <section id="aqua-spring" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-[#C9A961] tracking-[0.2em] uppercase mb-2">
              RELAXATION
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1B5E5E] mb-6">
              Lantana AQUA SPRING
            </h3>
            <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience serene relaxation in our beautifully crafted natural swimming pool, seamlessly integrated into the vibrant ecosystem. Rejuvenate your senses with cascading waterfalls, tranquil butterfly gardens, and an array of rejuvenating amenities designed for absolute tranquility.
            </p>
          </motion.div>
        </div>

        {/* Updated Images Gallery with 4 images in a grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {imageData.map((image, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/9] group"
            >
              <img 
                src={image.url} 
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Amenities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {amenities.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#1B5E5E] transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#1B5E5E] group-hover:text-[#C9A961] transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h4 className="font-medium text-gray-800 text-sm md:text-base">
                {item.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
