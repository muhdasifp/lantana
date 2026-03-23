
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Square, 
  Maximize, 
  Home, 
  Trees, 
  Info,
  ChevronRight
} from 'lucide-react';
import EnquireModal from '@/components/EnquireModal';
import Footer from '@/components/Footer';

export default function LantanaIndigoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Exact requested image URL
  const cottageImage = "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/603263610a666b6d3fd532d70221a575.jpg";

  const features = [
    "Luxury Studio Cottage",
    "Private Balcony with Garden View",
    "Modern Architecture & Design",
    "Premium Wooden Flooring",
    "Energy Efficient Climate Control",
    "Smart Home Integration Ready"
  ];

  return (
    <>
      <Helmet>
        <title>Lantana Indigo - Luxury Studio Cottage in Wayanad</title>
        <meta
          name="description"
          content="Explore Lantana Indigo, a premium luxury studio cottage offering modern architecture and serene views in the heart of Wayanad."
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex text-sm text-gray-500 items-center gap-2">
              <a href="/" className="hover:text-[#1B5E5E]">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/projects" className="hover:text-[#1B5E5E]">Projects</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#1B5E5E] font-medium">Lantana Indigo</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-500/20 group aspect-[4/3] bg-gray-100 block">
                  <img
                    key={cottageImage} // Forces React to re-render the image element if URL changes
                    src={cottageImage}
                    alt="Lantana Indigo - Modern cottages with red-tiled roofs, white walls, stone features, and tropical landscaping"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 block"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#1B5E5E] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
                      Premium Choice
                    </span>
                  </div>
                </div>
                
                {/* Floating Specs */}
                <div className="absolute -bottom-6 -right-6 hidden md:block bg-white p-6 rounded-xl shadow-xl border border-gray-100 z-10">
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-xs text-gray-500 uppercase font-bold mb-1">Area</p>
                      <div className="flex items-center gap-1 text-[#1B5E5E] font-bold">
                        <Maximize className="w-4 h-4" />
                        <span>450 Sq.Ft</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500 uppercase font-bold mb-1">Type</p>
                      <div className="flex items-center gap-1 text-[#1B5E5E] font-bold">
                        <Home className="w-4 h-4" />
                        <span>Studio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1B5E5E] mb-4">
                  Lantana INDIGO
                </h1>
                <p className="text-[#C9A961] text-xl font-medium mb-6 italic">
                  Where Modern Luxury Meets Tropical Serenity
                </p>
                <div className="w-20 h-1 bg-amber-500 mb-8"></div>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Lantana Indigo is designed for those who appreciate the finer things in life. This premium studio cottage blends traditional red-tiled aesthetics with contemporary clean lines and stone textures. Surrounded by meticulously landscaped tropical gardens, it offers a private sanctuary that captures the essence of Wayanad's natural beauty.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#C9A961] hover:bg-[#B89851] text-white font-bold px-10 py-7 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider"
                  >
                    Check Availability
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setIsModalOpen(true)}
                    className="border-2 border-[#1B5E5E] text-[#1B5E5E] hover:bg-[#1B5E5E] hover:text-white font-bold px-10 py-7 text-lg rounded-xl transition-all duration-300 uppercase tracking-wider bg-transparent"
                  >
                    Download Brochure
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Detailed Description Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <Info className="w-8 h-8 text-[#1B5E5E]" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Project Highlights</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#1B5E5E] mb-4 flex items-center gap-2">
                    <Trees className="w-5 h-5" /> Eco-Integration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Designed to minimize environmental impact while maximizing the views of the lush greenery. Every Indigo cottage is positioned to capture natural light and cross-ventilation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B5E5E] mb-4 flex items-center gap-2">
                    <Square className="w-5 h-5" /> Smart Space
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The open-plan studio layout provides a sense of spaciousness, featuring a dedicated sleeping area, a lounge, and a modern kitchenette for your convenience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B5E5E] mb-4 flex items-center gap-2">
                    <Home className="w-5 h-5" /> Quality Materials
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use high-grade sustainable timber, locally sourced stone, and premium ceramics to ensure longevity and timeless appeal for your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <EnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
