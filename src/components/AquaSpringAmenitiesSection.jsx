
import React from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Library,
  CloudRain,
  Bike,
  Target,
  Dribbble,
  Waves,
  Droplets,
  Flower,
  Car,
  Shirt,
  Map,
  Stethoscope,
  CarTaxiFront,
  Utensils,
  Coffee,
  Mic,
  Gamepad2,
  Footprints,
  Compass
} from 'lucide-react';

const waterSpaceAmenities = [
  { id: 1, name: "Jogging Track", icon: Footprints },
  { id: 2, name: "Zip Line", icon: Activity },
  { id: 3, name: "Library", icon: Library },
  { id: 4, name: "Rain Dance", icon: CloudRain },
  { id: 5, name: "Cycling", icon: Bike },
  { id: 6, name: "Archery", icon: Target },
  { id: 7, name: "Mini Basketball Court", icon: Dribbble },
  { id: 8, name: "Swimming pool", icon: Waves },
  { id: 9, name: "Horse Riding", icon: Compass },
  { id: 10, name: "Waterfalls", icon: Droplets },
  { id: 11, name: "Butterfly Garden", icon: Flower },
  { id: 12, name: "Ample Carparking", icon: Car },
  { id: 13, name: "Laundry Bag", icon: Shirt },
  { id: 14, name: "Travel Desk", icon: Map },
  { id: 15, name: "Doctor on Call", icon: Stethoscope },
  { id: 16, name: "On-line Cabs", icon: CarTaxiFront },
];

const dineSpaceAmenities = [
  { id: 1, name: "Multi Cuisine Restaurant", icon: Utensils },
  { id: 2, name: "Cafeteria", icon: Coffee },
  { id: 3, name: "Natural Pool Fishing deck", icon: Waves },
  { id: 4, name: "Amphitheater", icon: Mic },
  { id: 5, name: "Kids Play Ground", icon: Gamepad2 },
  { id: 6, name: "Trampoline", icon: Activity },
  { id: 7, name: "Cricket Bowling Yard", icon: Target },
  { id: 8, name: "Archery", icon: Target },
  { id: 9, name: "Mini Basketball Court", icon: Dribbble },
  { id: 10, name: "Walking yard", icon: Footprints },
  { id: 11, name: "Horse Riding", icon: Compass },
  { id: 12, name: "Butterfly Garden", icon: Flower },
];

const AmenityCard = ({ item, index }) => (
  <motion.div
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
);

export default function AquaSpringAmenitiesSection() {
  return (
    <section id="aqua-spring-amenities" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif mb-4 uppercase tracking-tight">
            Aqua Spring Amenities
          </h2>
          <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Discover a world of extraordinary experiences carefully curated for our esteemed guests.
          </p>
        </div>

        {/* Water Space Subsection */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1B5E5E] font-serif mb-3">
              Water Space
            </h3>
            <p className="text-gray-600">Rejuvenate and immerse in aquatic tranquility.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {waterSpaceAmenities.map((item, index) => (
              <AmenityCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Dine Space Subsection */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1B5E5E] font-serif mb-3">
              Dine Space
            </h3>
            <p className="text-gray-600">Savor culinary delights in breathtaking settings.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {dineSpaceAmenities.map((item, index) => (
              <AmenityCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
