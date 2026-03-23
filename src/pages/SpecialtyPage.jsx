import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import LantanaAquaSpringSection from '@/components/LantanaAquaSpringSection';

export default function SpecialtyPage() {
  const circularImage = "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/460607d0fafd1813ac427e172342aaff.png";

  useEffect(() => {
    console.log("SpecialtyPage mounted and rendering successfully.");
  }, []);

  return (
    <>
      <Helmet>
        <title>Specialty - Lantana Luxury Resort</title>
        <meta name="description" content="Discover Wayanad and Meenangadi, India's first Carbon neutral Panchayath in Wayanad, offering stunning views and relaxing retreats at Lantana." />
      </Helmet>

      <main className="min-h-screen bg-white pt-32 overflow-hidden">
        
        {/* WAYANAD SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B5E5E] font-serif mb-6 uppercase tracking-tight">
                WAYANAD
              </h1>
              <div className="w-24 h-1 bg-[#C9A961] mb-8"></div>
              
              <h2 className="text-2xl md:text-3xl text-gray-800 font-serif mb-6 leading-tight">
                an Oxyrich future
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Wayanad is an angelic mountainous region in the Western Ghats that is located in the Southern region of Deccan Plateau. Wayanad known for its spices, diverse Wildlife, caves and vibrant culture, is one of the eight hotspots of Biodiversity with unique flora and fauna. Snuggled amidst the Green paradise with majestic hills, we bring you the very doorstep of Nature.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Set amidst the breathtaking hills and scenic beauty of Wayanad, Lantana creates an astonishing experience for sustainable luxury with professional experience to give a mesmerizing and captivating stay, offering rejuvenation and relaxation in the middle of Nature.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={circularImage} 
                  alt="Wayanad Oxyrich Nature"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* MEENANGADI SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 lg:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B5E5E] font-serif mb-6 uppercase tracking-tight">
                MEENANGADI
              </h1>
              <div className="w-24 h-1 bg-[#C9A961] mb-8"></div>
              
              <h2 className="text-2xl md:text-3xl text-gray-800 font-serif mb-6 leading-tight">
                The first Carbon neutral Panchayath in India
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Meenangadi is an old town situated on the highway NH 766 between Kalpetta and Sulthan Bathery in Wayanad. Meenangadi is India's first Carbon Neutral panchayat. It is a groundbreaking initiative aimed to achieve low emission development and climate resilience through decentralized and integrated action plans.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Meenangadi is also a bottom-up model for integrating climate action into development planning. Nestled in Meenangadi, an extension of Western Ghats, Lantana offers stunning resorts that overlook the enchanting greenery offering relaxing retreat that can enthuse elegant Luxury with its magnificent ultra modern architectural excellence.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative w-full flex justify-center lg:justify-start lg:order-2"
            >
              <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={circularImage} 
                  alt="Meenangadi Carbon Neutral"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* OUR AMENITIES HEADING */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E5E] mb-6 uppercase tracking-widest">
              OUR AMENITIES
            </h2>
            <div className="w-24 h-1 bg-[#C9A961] mx-auto rounded-full"></div>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
              Experience unparalleled luxury and convenience with our comprehensive range of world-class facilities designed for your comfort and grand celebrations.
            </p>
          </motion.div>
        </div>

        {/* AMENITIES GRID COMPONENT */}
        <AmenitiesGrid />

        {/* LANTANA AQUA SPRING SECTION */}
        <LantanaAquaSpringSection />

      </main>
    </>
  );
}