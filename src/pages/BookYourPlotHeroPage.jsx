import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import EnquireModal from '@/components/EnquireModal';
import Footer from '@/components/Footer';

export default function BookYourPlotHeroPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/635bdbb1b3dccd7466a5edfb6f4be92f.jpg",
      alt: "Aerial View of Lantana Resort",
      title: "Aerial View"
    },
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/030b24401b238246802b9b728f600356.jpg",
      alt: "Swimming Pool and Play Area",
      title: "Recreation Area"
    },
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/2775804e116acb59f3e360b6d2634386.jpg",
      alt: "Lantana Villa Architecture",
      title: "Modern Villas"
    },
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/7b4dd5089dc459a1e3e5a2d57bc9dc0e.jpg",
      alt: "Luxury Dining Hall",
      title: "Fine Dining"
    },
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/805c3f8c4c1b03ff6d61e7eea052f3f5.jpg",
      alt: "Beautiful Resort Gardens",
      title: "Natural Gardens"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Book Your Plot - Lantana Luxury Resort Wayanad</title>
        <meta
          name="description"
          content="Secure your piece of paradise at Lantana Resort. Book your plot in Wayanad's first carbon-neutral panchayath."
        />
      </Helmet>

      {/* Hero Section with Aerial Forest Road Background */}
      <div 
        className="min-h-screen relative flex flex-col font-sans"
        style={{
          backgroundImage: "url('https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/0778477347164bc9920fbaaf0a8716b7.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 flex-grow flex items-center px-8 md:px-16 lg:px-24 py-20">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-wide drop-shadow-lg uppercase font-serif text-left"
            >
              LANTANA – THE LUXURY RESORT AT OXYRICH FUTURE, WAYANAD
            </motion.h1>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-white mb-10 font-light leading-relaxed drop-shadow-md max-w-2xl text-left"
            >
              Immerse yourself in nature's embrace. Own a plot in a pristine landscape where luxury meets sustainability, offering you a retreat that pays for itself. Secure your future in Wayanad today.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex justify-start"
            >
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-7 text-lg rounded-none transition-all duration-300 shadow-xl hover:shadow-2xl tracking-wider uppercase"
              >
                BOOK YOUR PLOT
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Experience Lantana Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold text-[#1B5E5E] mb-4"
            >
              Experience Lantana
            </motion.h2>
            <div className="w-24 h-1 bg-[#C9A961] mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Take a glimpse into the luxurious lifestyle and breathtaking surroundings that await you at our resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-xl border-2 border-[#C9A961]/30 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gray-100 ${
                  index === 3 || index === 4 ? 'lg:col-span-1' : ''
                } ${index === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-3' : ''}`}
              >
                <div className="aspect-[4/3] w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-serif font-bold border-l-4 border-[#C9A961] pl-3">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}