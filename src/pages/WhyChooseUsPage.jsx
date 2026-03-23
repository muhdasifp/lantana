import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsPage() {
  const features = [
    "Full Cottage Ownership",
    "18-20% Assured ROI",
    "6 Complimentary Stays Per Year",
    "Surrounded by Native Fruit Trees",
    "Eco-Friendly Carbon Neutral Zone",
    "Professional Resort Management"
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Lantana Luxury Resort</title>
        <meta name="description" content="Benefits of investing in Lantana Resort: High ROI, Ownership, and Eco-friendly living." />
      </Helmet>

      <section className="min-h-screen bg-[#F5F7F7] pt-32 pb-16 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-[#1B5E5E] mb-6 leading-tight">
              Why Choose Lantana?
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
              Invest in a lifestyle that rewards you. We offer a unique opportunity to own a piece of paradise while enjoying substantial financial returns and exclusive privileges.
            </p>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#C9A961]"
                >
                  <CheckCircle2 className="text-[#1B5E5E] h-6 w-6 flex-shrink-0" />
                  <span className="text-[#1B5E5E] font-medium text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/350f88458ae024af4813d0eb71398d57.png" 
                alt="Aerial view of dense green forest with 'CO2' text" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}