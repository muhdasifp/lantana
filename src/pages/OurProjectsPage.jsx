
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

export default function OurProjectsPage() {
  const projects = [
    { title: "Lantana VIOLET", img: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/05c7985f712ba6379e86caa841ba3327.jpg" },
    { title: "Lantana MAGENTA", img: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/0f2b912cbb7497d226af69674b810302.jpg" }, 
    { title: "Lantana INDIGO", img: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/603263610a666b6d3fd532d70221a575.jpg" },
    { title: "Lantana OLIVE", img: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/cb384325bfc133c3093ceddaf11fd140.jpg" },
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects - Lantana Luxury Resort</title>
        <meta name="description" content="Explore our varied cottage projects: Violet, Magenta, Indigo, and Olive." />
      </Helmet>

      <section className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-[#1B5E5E] text-center mb-16"
          >
            Our Projects
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Project Cards Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <img 
                    src={project.img} 
                    alt={`Exterior view of ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-6">
                    <h3 className="text-white text-xl font-bold uppercase tracking-wide">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Description */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#C9A961]"
            >
              <h2 className="text-2xl font-serif text-[#1B5E5E] mb-6">Experience Premium Living</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Each Lantana project is a masterpiece of architectural design, blending contemporary aesthetics with traditional warmth. Our cottages are built with sustainable materials and designed to maximize natural light and ventilation.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Choose from a range of layouts tailored to your lifestyle needs, whether you desire a cozy retreat or a spacious family haven. Every unit comes with premium fittings and finishes.
              </p>
              <button className="text-[#C9A961] font-bold uppercase tracking-widest text-sm hover:text-[#1B5E5E] transition-colors">
                Download Brochure &rarr;
              </button>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
