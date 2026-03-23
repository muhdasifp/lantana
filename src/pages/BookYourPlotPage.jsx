
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ResortGallery from '@/components/ResortGallery';

export default function BookYourPlotPage() {
  return (
    <>
      <Helmet>
        <title>Book Your Plot - Lantana Luxury Resort</title>
        <meta name="description" content="Secure your plot at Lantana Resort Wayanad." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-black flex items-center pt-20">
        {/* Updated Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/ca4911b6444d2da498c9ae0e44271cae.jpg')",
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-serif uppercase drop-shadow-lg"
            >
              LANTANA – THE LUXURY RESORT AT OXYRICH FUTURE, WAYANAD
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md"
            >
              Secure your future in a location that promises tranquility and appreciation. Own a plot where nature is your neighbor and luxury is your standard of living.
            </motion.p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-6 text-lg rounded-lg transition-all duration-300 uppercase tracking-widest shadow-xl"
              >
                BOOK YOUR PLOT NOW
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Lantana Resort Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-[#1B5E5E] mb-4"
            >
              Explore Lantana Resort
            </motion.h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Take a glimpse into the luxurious lifestyle and breathtaking surroundings that await you at our resort. Experience modern amenities blending seamlessly with natural beauty.
            </p>
          </div>

          <ResortGallery />
        </div>
      </section>
    </>
  );
}
