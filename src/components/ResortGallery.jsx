import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/9ad373a4def5e967a10d7018e7f3cb06.jpg",
    alt: "Aerial View of Lantana Resort",
    title: "Aerial View"
  },
  {
    src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/6102cbac4d5fa61202891847c608fccd.jpg",
    alt: "Swimming Pool and Recreation Area",
    title: "Recreation Area"
  },
  {
    src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/cd42b5390e685bfc8747f6961a8b9296.jpg",
    alt: "Modern Villa Architecture",
    title: "Modern Villas"
  },
  {
    src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/cf456544fa8e729725237d659dc9ca79.jpg",
    alt: "Luxury Dining Hall",
    title: "Luxury Dining"
  },
  {
    src: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/a3151f982cfa4584218d0b1b145451a9.jpg",
    alt: "Modern Restaurant Setup",
    title: "Premium Restaurant"
  }
];

export default function ResortGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative group overflow-hidden rounded-xl border-4 border-amber-500 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white ${
            index === 3 || index === 4 ? 'lg:col-span-1' : ''
          } ${index === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''} ${
            index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-3' : ''
          }`}
        >
          <div className="aspect-[4/3] w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
          {/* Caption Overlay */}
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
  );
}