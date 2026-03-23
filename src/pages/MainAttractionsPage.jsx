import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function MainAttractionsPage() {
  return (
    <>
      <Helmet>
        <title>Main Attractions - Lantana Luxury Resort</title>
        <meta name="description" content="Explore our Aqua Spring Water Space and Aqua Dine Space." />
      </Helmet>

      <div className="bg-[#F9FAFB] min-h-screen pt-24 pb-16">
        
        {/* Attraction 1 */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#C9A961] uppercase tracking-widest font-bold mb-2">Relaxation</h2>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1B5E5E] mb-6">Aqua Spring Water Space</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Immerse yourself in our signature infinity pool that blends seamlessly with the horizon. The Aqua Spring Water Space is designed to be a tranquil retreat where you can unwind, swim laps, or simply float while gazing at the stunning Wayanad landscape.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">🔹 Temperature Controlled</li>
                <li className="flex items-center gap-2">🔹 Kid's Pool Area</li>
                <li className="flex items-center gap-2">🔹 Poolside Lounging</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl h-[400px]"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/273d3b5fb46a74c927260cd0fff1357e.png" 
                alt="Aqua Spring Pool" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Attraction 2 */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl h-[400px] order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Aqua Dine Space" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-[#C9A961] uppercase tracking-widest font-bold mb-2">Gastronomy</h2>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1B5E5E] mb-6">Aqua Dine Space</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Experience dining like never before at our Aqua Dine Space. Whether it's a romantic dinner under the stars or a cheerful family brunch, the ambiance is matched only by our exquisite culinary offerings. Enjoy panoramic views while savoring local and international delicacies.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">🔹 Rooftop Setting</li>
                <li className="flex items-center gap-2">🔹 Multi-Cuisine Menu</li>
                <li className="flex items-center gap-2">🔹 Sunset Views</li>
              </ul>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}