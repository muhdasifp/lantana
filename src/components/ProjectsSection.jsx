
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function ProjectsSection() {
  const navigate = useNavigate();
  
  const projects = [
    { 
      title: "Lantana VIOLET", 
      image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/05c7985f712ba6379e86caa841ba3327.jpg",
      description: "1000 SQFT 5 CENT honeymoon cottage"
    },
    { 
      title: "Lantana MAGENTA", 
      image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/0f2b912cbb7497d226af69674b810302.jpg",
      description: "1400 SQFT 7 CENT cottage"
    },
    { 
      title: "Lantana INDIGO", 
      image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/603263610a666b6d3fd532d70221a575.jpg",
      description: "Modern cottages with red-tiled roofs"
    },
    { 
      title: "Lantana OLIVE", 
      image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/cb384325bfc133c3093ceddaf11fd140.jpg",
      description: "6 CENT twin cottage 1200 sqft"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1B5E5E] font-serif mb-4"
          >
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-light italic"
          >
            Where Comfort Meets Nature
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-200"
            >
              <img 
                src={project.image} 
                alt={`Beautiful view of ${project.title} project`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold uppercase tracking-wide group-hover:text-[#C9A961] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm mt-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
              Lantana Resort offers a diverse range of accommodations designed to cater to every need. From cozy single-bedroom retreats to spacious family villas, each unit blends seamlessly with the surrounding wilderness.
           </p>
           <Button
              onClick={() => navigate('/enquiry')}
              className="bg-[#1B5E5E] hover:bg-[#154a4a] text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg"
            >
              View Project Details
            </Button>
        </div>
      </div>
    </section>
  );
}
