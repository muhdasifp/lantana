import React from 'react';
import { motion } from 'framer-motion';

function StorySection() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/4e8e4dccbb3acb6e91f45c010f51beb1.png"
              alt="Lantana Resort Cottages with Landscaping"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1B5E5E]/10"></div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-[#C9A961] font-bold tracking-widest uppercase mb-4 text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif mb-6 leading-tight">
              Story About Lantana Resort
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-600 font-light mb-8 italic">
              "Where Comfort Meets Nature"
            </h3>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
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
      </div>
    </section>
  );
}

export default StorySection;