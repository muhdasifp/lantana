
import React from 'react';
import { motion } from 'framer-motion';
import indigo from '../assets/villas/indigo.png';
import magenta from '../assets/villas/magenta.jpeg';
import olive from '../assets/villas/olive.jpeg';
import voilet from '../assets/villas/voilet.jpeg';

const cottages = [
  {
    name: "LANTANA INDIGO",
    image: indigo,
    details: "800 Sq Ft | 4 Cents",
    description: "Discover a serene escape in our thoughtfully designed 800 sq ft resort cottages. Lantana INDIGO is, uniquely crafted to immerse you in the untouched charm of Wayanad. Spread across 4 cents of lush greenery, these cottages offer a personalized experience that harmoniously blends nature with comfort."
  },
  {
    name: "LANTANA OLIVE",
    image: olive,
    details: "1200 Sq Ft | 6 Cents",
    description: "Indulge in Exquisite Luxury with our 1200 Sq Ft Cottages on 6 Cents of Pristine Landscape. Step into a world of elevated elegance with our premium twin cottages, thoughtfully built on lush terrain, where nature meets unmatched comfort. These grand spaces are designed not just to relax but to awaken your senses and ignite your spirit of adventure and romance."
  },
  {
    name: "LANTANA VIOLET",
    image: voilet,
    details: "1000 Sq Ft | 5 Cents | Private Pool",
    description: "Escape to Romance in Our Private 1000 Sq Ft Honeymoon Cottages. Nestled on 5 Cents of scenic paradise and featuring your own private pool, these enchanting retreats are designed for love-where luxury meets intimacy and every view sets the mood. Rekindle connection in a heaven made just for two."
  },
  {
    name: "LANTANA MAGENTA",
    image: magenta,
    details: "1400 Sq Ft | 7 Cents",
    description: "Discover harmony and elegance at our Magenta Lantana Cottages, with beautifully designed 1400 sq ft dual-cottage retreat nestled on 7 cents of pristine landscape. Surrounded by the immaculate beauty of rolling greenery, these cottages offer both comfort and space, making them ideal for families or couples traveling together."
  },
  // {
  //   name: "LANTANA CLOUDS",
  //   image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/ba407ce8ed77e105094cbeaed3a88438.jpg",
  //   details: "Conference & Event Hub | Spa & Rooftop Party Area",
  //   description: "Lantana Clouds is an apt platform for corporate conferences, events and destination weddings. The amphitheater, mini conference hall and the 300-seater conference hall facilities are best suitable for official gatherings and entertainments. The Club House, Restaurant, Cafeteria, Entrance Plaza, Indoor Games, Meditation - Yoga Centre, Fitness Centre, Infinity Pool and Swimming Pools are the key factors that attract the young minds. Lantana CLOUDS is a luxurious hub designed to elevate every aspect of your stay. Whether you're seeking relaxation, celebration, or productivity, this beautifully curated space offers it all. Indulge in pure bliss at the full-service spa, where expert therapists provide rejuvenating treatments, or refresh your look at the elegant beauty parlour offering a range of grooming and salon services. For events and professional gatherings, the clubhouse features a state-of-the-art 300-seater conference hall ideal for grand functions, as well as a mini conference hall perfect for more intimate meetings or private sessions. As the sun sets, head to the stunning rooftop party area, where panoramic views and a sophisticated ambiance create the perfect backdrop for romantic evenings, social gatherings, or unforgettable celebrations under the stars."
  // }
];

export default function CottageTypesSection() {
  return (
    <section id="cottage-types" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#1B5E5E] mb-4"
          >
            Types of Cottages
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
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Discover our exclusive range of meticulously designed cottages, each offering a unique blend of luxury, comfort, and breathtaking natural beauty in the heart of Wayanad.
          </motion.p>
        </div>

        <div className="space-y-20">
          {cottages.map((cottage, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={cottage.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[450px]">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={cottage.image} 
                      alt={`Exterior view of ${cottage.name} cottage`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C9A961]"></div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[#1B5E5E] mb-3 tracking-wide">
                      {cottage.name}
                    </h3>
                    <p className="text-[#C9A961] font-semibold mb-6 tracking-wide text-sm uppercase">
                      {cottage.details}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {cottage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
