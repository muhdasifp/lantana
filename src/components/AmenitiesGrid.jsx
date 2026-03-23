
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud,
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
  BookOpen 
} from 'lucide-react';

const amenities = [
  { 
    id: 1, 
    name: "Lantana Clouds", 
    icon: Cloud,
    description: "Elevate your corporate events, destination weddings, and grand celebrations. Our state-of-the-art facilities offer the perfect blend of luxury and functionality.",
    image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/ba407ce8ed77e105094cbeaed3a88438.jpg",
    featured: true
  },
  { id: 2, name: "Entrance Plaza", icon: MapPin, description: "A grand and welcoming entrance designed to make your first impression unforgettable." },
  { id: 3, name: "300 Seater Conference Hall", icon: Users, description: "Spacious, fully-equipped hall ideal for corporate meetings, conferences, and large gatherings." },
  { id: 4, name: "Beauty Parlor", icon: Sparkles, description: "Professional beauty services to help you look and feel your best during your stay." },
  { id: 5, name: "Indoor Games", icon: Gamepad2, description: "A variety of engaging indoor games for entertainment and relaxation for all ages." },
  { id: 6, name: "Ayurveda Spa", icon: Leaf, description: "Traditional Ayurvedic treatments and therapies for holistic rejuvenation and wellness." },
  { id: 7, name: "Fitness Center", icon: Dumbbell, description: "Modern, fully-equipped gym to help you maintain your fitness routine." },
  { id: 8, name: "Drivers Accommodation", icon: Car, description: "Comfortable and convenient lodging facilities dedicated for accompanying drivers." },
  { id: 9, name: "Roof Top Party Hall", icon: Music, description: "Scenic open-air venue perfect for evening celebrations and social gatherings." },
  { id: 10, name: "Locker Facilities", icon: Lock, description: "Secure storage lockers to keep your valuables safe throughout your visit." },
  { id: 11, name: "Money Exchange", icon: DollarSign, description: "Convenient on-site currency exchange services for international guests." },
  { id: 12, name: "Library", icon: BookOpen, description: "A quiet reading sanctuary featuring a diverse collection of books and literature." }
];

export default function AmenitiesGrid() {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {amenities.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className={`bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 group flex flex-col ${item.featured ? 'md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2' : ''}`}
          >
            {item.featured && item.image && (
              <div className="w-full h-48 sm:h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{item.name}</h3>
                  </div>
                </div>
              </div>
            )}
            
            <div className={`p-6 flex flex-col flex-grow ${item.featured ? 'pt-4' : 'items-center text-center'}`}>
              {!item.featured && (
                <div className="w-16 h-16 bg-[#1B5E5E]/5 rounded-full flex items-center justify-center shrink-0 mb-4 group-hover:bg-[#1B5E5E] transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-[#1B5E5E] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
              )}
              
              {!item.featured && (
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#1B5E5E] transition-colors duration-300">
                  {item.name}
                </h3>
              )}
              
              <p className={`text-gray-600 ${item.featured ? 'text-base' : 'text-sm'}`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
