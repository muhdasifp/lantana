
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import contactImage from '../assets/images/contact-box.jpeg'
import hero from '../assets/villas/magenta.jpeg';

const heroImages = [
  hero
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroImages[currentImageIndex]}')`,
            }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Malabar Urban Development Society Logo - Moved to Bottom Right */}
      <div className="absolute bottom-24 right-4 md:bottom-32 md:right-8 lg:right-12 z-30">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={contactImage}
          alt="Malabar Urban Development Society - Build a Better World"
          className="w-20 sm:w-24 md:w-32 lg:w-40 max-w-[200px] h-auto object-contain rounded-lg shadow-2xl border-2 border-white/20"
        />
      </div>

      {/* Floating Contact Box */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:right-12 z-40"
      >
        <div className="bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(201,169,97,0.3)] transition-all duration-300 transform hover:-translate-y-1 border border-white/20 group">
          <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Contact Us</p>
          <a 
            href="tel:+919567430055" 
            className="flex items-center gap-2 text-sm md:text-lg font-bold text-[#1B5E5E] group-hover:text-[#C9A961] transition-colors"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1B5E5E]/10 flex items-center justify-center group-hover:bg-[#C9A961]/10 transition-colors">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            +91 9567430055
          </a>
        </div>
      </motion.div> */}

      <div className="relative z-20 flex flex-col justify-center items-center w-full px-6 md:px-12 text-center mt-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <h2 className="text-[#C9A961] text-lg md:text-xl font-medium tracking-[0.25em] mb-4 uppercase font-sans">
            Welcome to Lantana
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] uppercase font-yanone tracking-wider">
            BUY A COTTAGE,<br />OWN A RESORT IN WAYANAD
          </h1>
          <p className="text-white/90 text-lg md:text-2xl font-light mb-12 tracking-wide max-w-3xl mx-auto drop-shadow-md italic font-elegant">
            Where Investment Meets Indulgence
          </p>
          
          <Button 
            onClick={() => navigate('/enquiry')}
            className="bg-[#C9A961] text-black hover:bg-white hover:text-[#1B5E5E] font-bold px-12 py-8 text-lg rounded-none transition-all duration-300 shadow-xl uppercase tracking-wider"
          >
            Enquire Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
