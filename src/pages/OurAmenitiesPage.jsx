import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Waves, Wifi, Utensils, Dumbbell, Gamepad2, Lightbulb, Shirt, Car } from 'lucide-react';

export default function OurAmenitiesPage() {
  const amenities = [
    { icon: Waves, label: "Swimming Pool" },
    { icon: Wifi, label: "Free Wifi" },
    { icon: Utensils, label: "Breakfast" },
    { icon: Dumbbell, label: "Gymnasium" },
    { icon: Gamepad2, label: "Game Center" },
    { icon: Lightbulb, label: "24/7 Light" },
    { icon: Shirt, label: "Laundry Service" },
    { icon: Car, label: "Parking Space" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Amenities - Lantana Luxury Resort</title>
        <meta name="description" content="World-class amenities including pool, gym, wifi, and dining." />
      </Helmet>

      <section className="min-h-screen bg-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-serif text-[#1B5E5E] mb-4"
          >
            Our Amenities
          </motion.h1>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
            Enjoy a life of convenience and luxury with our comprehensive range of world-class facilities designed for your comfort.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {amenities.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1B5E5E] rounded-xl p-8 flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-[#C9A961] transition-colors duration-300">
                  <item.icon size={32} className="text-white group-hover:text-[#1B5E5E]" />
                </div>
                <span className="text-white font-medium text-lg tracking-wide group-hover:text-[#C9A961] transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}