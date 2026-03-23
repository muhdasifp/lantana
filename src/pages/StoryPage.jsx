import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function StoryPage() {
  return (
    <>
      <Helmet>
        <title>Our Story - Lantana Luxury Resort</title>
        <meta name="description" content="Discover the story behind Lantana Resort in Meenangadi, Wayanad." />
      </Helmet>

      <section className="min-h-screen bg-white pt-24 pb-16 px-6 md:px-12 lg:px-24 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/ffea0b8639d6512476381e87f0af6d72.png" 
              alt="Lantana Resort Cottage" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1B5E5E]/10"></div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[#C9A961] font-bold tracking-widest uppercase mb-4 text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#1B5E5E] mb-4 leading-tight">
              Story About Lantana Resort
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-8 italic">
              "Where Comfort Meets Nature"
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Nestled in the pristine landscapes of Meenangadi, Wayanad, Lantana Resort was born from a vision to create a sanctuary where luxury living coexists harmoniously with nature.
              </p>
              <p>
                Our location is unique—Meenangadi is on the path to becoming India's first carbon-neutral panchayath. Inspired by this commitment to sustainability, Lantana offers an eco-friendly lifestyle without compromising on modern comforts.
              </p>
              <p>
                Every cottage is designed to offer breathtaking views of the lush greenery, ensuring that you wake up to the sound of birds and the scent of fresh earth. We invite you to be part of a community that values peace, privacy, and the preservation of our beautiful planet.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}