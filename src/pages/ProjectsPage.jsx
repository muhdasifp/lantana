
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import EnquireModal from '@/components/EnquireModal';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/603263610a666b6d3fd532d70221a575.jpg",
      alt: "Lantana Indigo cottage exterior with modern architecture, red-tiled roofs, white walls, stone features, and tropical landscaping",
      title: "Lantana Indigo"
    },
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/05c7985f712ba6379e86caa841ba3327.jpg",
      alt: "Lantana Violet - Pink-red roofs, white walls, stone archway, and green landscaping",
      title: "Lantana Violet"
    },
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/cb384325bfc133c3093ceddaf11fd140.jpg",
      alt: "Lantana Olive - Pink-red roofs, white walls, stone features, green shutters, and tropical plants",
      title: "Lantana Olive"
    },
    {
      src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/0f2b912cbb7497d226af69674b810302.jpg",
      alt: "Lantana Magenta - Pink-red roofs, white walls, stone features, wooden doors, and landscaping",
      title: "Lantana Magenta"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects - Lantana Luxury Cottages Wayanad</title>
        <meta
          name="description"
          content="Discover our exquisite cottage projects: Lantana VIOLET, Lantana MAGENTA, Lantana INDIGO, and Lantana OLIVE. Experience comfort meeting nature in our thoughtfully designed luxury cottages."
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        {/* Intro Section */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-bold text-[#1B5E5E] font-serif mb-4"
              >
                Our Projects
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl text-gray-800 font-light italic mb-8"
              >
                Where Comfort Meets Nature
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                Discover the epitome of luxury living with our exclusive cottage projects. Each project is a testament to architectural brilliance, seamlessly blending modern aesthetics with the raw beauty of Wayanad's landscape. Explore our premium options including Lantana Indigo, Violet, Olive, and Magenta.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#C9A961] hover:bg-[#B89851] text-white font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider"
                >
                  Enquire Now
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B5E5E] mb-4">
                Project Gallery
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl border-4 border-amber-500 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-xl font-serif font-bold border-l-4 border-amber-500 pl-3">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
