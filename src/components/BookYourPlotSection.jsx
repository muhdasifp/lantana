
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function BookYourPlotSection() {
  const navigate = useNavigate();

  return (
    <section id="book-plot" className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
      {/* Background Image - Location Map */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/f3f33244417693e3b9670e518df3ee36.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-20 w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg uppercase font-serif text-left"
          >
            BOOK YOUR PLOT
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white mb-10 font-light leading-relaxed drop-shadow-md max-w-2xl text-left"
          >
            Secure your future in a location that promises tranquility and appreciation. Own a plot where nature is your neighbor and luxury is your standard of living.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex justify-start"
          >
            <Button
              onClick={() => navigate('/enquiry')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-7 text-lg rounded-none transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-x-2 tracking-wider uppercase"
            >
              BOOK YOUR PLOT
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
