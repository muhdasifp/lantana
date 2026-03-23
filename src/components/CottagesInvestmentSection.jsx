import React from 'react';
import { motion } from 'framer-motion';

export default function CottagesInvestmentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cottageCategories = [
    { size: "800 Sq.Ft", land: "4 Cent Land", type: "Single Bedroom Cottage" },
    { size: "1000 Sq.Ft", land: "5 Cent Land", type: "Single Bedroom Pool Cottage" },
    { size: "1200 Sq.Ft", land: "6 Cent Land", type: "Twin Bedroom Cottage" },
    { size: "1400 Sq.Ft", land: "7 Cent Land", type: "Twin Bedroom Pool Cottage" }
  ];

  return (
    <section id="cottages-investment" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B5E5E]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold text-[#1B5E5E] font-serif mb-6"
          >
            COTTAGES and Exclusive Investment Opportunity
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#C9A961] mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
            <div className="flex items-start gap-4">
              <span className="text-4xl bg-[#1B5E5E]/10 p-4 rounded-xl group-hover:bg-[#1B5E5E] group-hover:text-white transition-colors duration-300">🏡</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif flex items-center gap-2">
                  <span className="text-[#C9A961]">01.</span> Own a Cottage. Own a Resort.
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When you invest in a cottage at Lantana, you don't just get a beautifully crafted vacation home; you gain co-ownership of an entire luxury resort. Experience the pride of owning a premium asset in Wayanad while enjoying the expansive amenities of a world-class destination.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
            <div className="flex items-start gap-4">
              <span className="text-4xl bg-[#1B5E5E]/10 p-4 rounded-xl group-hover:bg-[#1B5E5E] group-hover:text-white transition-colors duration-300">⚖️</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif flex items-center gap-2">
                  <span className="text-[#C9A961]">02.</span> Clear Legal Ownership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Security is paramount. Every investment comes with 100% clear legal documentation. The land and the cottage are registered entirely in your name, providing you with absolute peace of mind and an ironclad asset for generations to come.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Special Full Width for Categories */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 lg:col-span-2 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C9A961]/10 to-transparent rounded-bl-full z-0"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-4xl bg-[#1B5E5E]/10 p-4 rounded-xl group-hover:bg-[#1B5E5E] group-hover:text-white transition-colors duration-300">🏘️</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif flex items-center gap-2">
                    <span className="text-[#C9A961]">03.</span> Four Premium Cottage Categories
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Choose the perfect footprint for your investment. Each category is meticulously designed to maximize space, luxury, and connection with nature.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cottageCategories.map((category, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#C9A961]/50 transition-colors">
                    <div className="text-[#1B5E5E] font-bold text-xl mb-1">{category.size}</div>
                    <div className="text-[#C9A961] font-medium text-sm mb-3 uppercase tracking-wider">{category.land}</div>
                    <div className="text-gray-700 font-semibold">{category.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
            <div className="flex items-start gap-4">
              <span className="text-4xl bg-[#1B5E5E]/10 p-4 rounded-xl group-hover:bg-[#1B5E5E] group-hover:text-white transition-colors duration-300">📈</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif flex items-center gap-2">
                  <span className="text-[#C9A961]">04.</span> Assured ROI Model
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your cottage isn't just a retreat; it's a high-performing financial asset. We manage the rental operations, ensuring a steady, assured return on your investment while keeping your property in pristine condition.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
            <div className="flex items-start gap-4">
              <span className="text-4xl bg-[#1B5E5E]/10 p-4 rounded-xl group-hover:bg-[#1B5E5E] group-hover:text-white transition-colors duration-300">🌴</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif flex items-center gap-2">
                  <span className="text-[#C9A961]">05.</span> 12X Annual Stay Privilege
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enjoy the fruits of your investment personally. As an owner, you are entitled to 12 complimentary days of stay annually. Experience the luxury of Lantana Resort with your family whenever you desire a getaway.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group lg:col-span-2 md:w-2/3 mx-auto">
            <div className="flex items-start gap-4">
              <span className="text-4xl bg-[#1B5E5E]/10 p-4 rounded-xl group-hover:bg-[#1B5E5E] group-hover:text-white transition-colors duration-300">💎</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif flex items-center gap-2">
                  <span className="text-[#C9A961]">06.</span> Asset Appreciation & Value Multiplier
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Wayanad is a rapidly growing tourist destination. Your land and premium cottage are positioned for significant capital appreciation over time. It's a dual-benefit model: immediate rental yields combined with long-term wealth multiplication.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Closing Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E5E]/0 via-[#1B5E5E]/10 to-[#1B5E5E]/0 blur-md"></div>
            <h3 className="relative text-2xl md:text-3xl font-light italic text-[#1B5E5E] px-8 py-4 border-y border-[#C9A961]/30 font-serif">
              <span className="font-bold font-sans not-italic tracking-widest text-[#C9A961] text-lg block mb-2">LANTANA RESORT</span>
              "Where Ownership Builds Wealth — and Wealth Feels Like a Vacation"
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}