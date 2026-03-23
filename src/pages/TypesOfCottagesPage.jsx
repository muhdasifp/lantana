
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const cottages = [
  {
    name: "LANTANA INDIGO",
    image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/603263610a666b6d3fd532d70221a575.jpg",
    description: "Discover a serene escape in our thoughtfully designed 800 sq ft resort cottages. Lantana INDIGO is, uniquely crafted to immerse you in the untouched charm of Wayanad. Spread across 4 cents of lush greenery, these cottages offer a personalized experience that harmoniously blends nature with comfort."
  },
  {
    name: "LANTANA OLIVE",
    image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/cb384325bfc133c3093ceddaf11fd140.jpg",
    description: "Indulge in Exquisite Luxury with our 1200 Sq Ft Cottages on 6 Cents of Pristine Landscape. Step into a world of elevated elegance with our premium twin cottages, thoughtfully built on lush terrain, where nature meets unmatched comfort. These grand spaces are designed not just to relax but to awaken your senses and ignite your spirit of adventure and romance."
  },
  {
    name: "LANTANA VIOLET",
    image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/05c7985f712ba6379e86caa841ba3327.jpg",
    description: "Escape to Romance in Our Private 1000 Sq Ft Honeymoon Cottages. Nestled on 5 Cents of scenic paradise and featuring your own private pool, these enchanting retreats are designed for love-where luxury meets intimacy and every view sets the mood. Rekindle connection in a heaven made just for two."
  },
  {
    name: "LANTANA MAGENTA",
    image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/0f2b912cbb7497d226af69674b810302.jpg",
    description: "Discover harmony and elegance at our Magenta Lantana Cottages, with beautifully designed 1400 sq ft dual-cottage retreat nestled on 7 cents of pristine landscape. Surrounded by the immaculate beauty of rolling greenery, these cottages offer both comfort and space, making them ideal for families or couples traveling together."
  },
  {
    name: "LANTANA CLOUDS",
    image: "https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/ba407ce8ed77e105094cbeaed3a88438.jpg",
    description: "Lantana Clouds is an apt platform for corporate conferences, events and destination weddings. The amphitheater, mini conference hall and the 300-seater conference hall facilities are best suitable for official gatherings and entertainments. The Club House, Restaurant, Cafeteria, Entrance Plaza, Indoor Games, Meditation - Yoga Centre, Fitness Centre, Infinity Pool and Swimming Pools are the key factors that attract the young minds. Lantana CLOUDS is a luxurious hub designed to elevate every aspect of your stay. Whether you're seeking relaxation, celebration, or productivity, this beautifully curated space offers it all. Indulge in pure bliss at the full-service spa, where expert therapists provide rejuvenating treatments, or refresh your look at the elegant beauty parlour offering a range of grooming and salon services. For events and professional gatherings, the clubhouse features a state-of-the-art 300-seater conference hall ideal for grand functions, as well as a mini conference hall perfect for more intimate meetings or private sessions. As the sun sets, head to the stunning rooftop party area, where panoramic views and a sophisticated ambiance create the perfect backdrop for romantic evenings, social gatherings, or unforgettable celebrations under the stars."
  }
];

export default function TypesOfCottagesPage() {
  return (
    <>
      <Helmet>
        <title>Types of Cottages | Lantana Luxury Resort</title>
        <meta name="description" content="Explore our luxurious cottage options at Lantana Resort in Wayanad. From the serene Indigo to the opulent Clouds, find your perfect retreat." />
      </Helmet>

      <main className="min-h-screen bg-gray-50 pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-[#1B5E5E] text-white py-20 px-4 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/270276b5a7a7fae3e2adfcb4cc792e24.png')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-[#C9A961]"
            >
              Types of Cottages
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
            >
              Discover our exclusive range of meticulously designed cottages, each offering a unique blend of luxury, comfort, and breathtaking natural beauty in the heart of Wayanad.
            </motion.p>
          </div>
        </section>

        {/* Cottages List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cottages.map((cottage, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={cottage.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={cottage.image} 
                      alt={`Exterior view of ${cottage.name} cottage`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A961]"></div>
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1B5E5E] mb-6 tracking-wide">
                      {cottage.name}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed text-justify">
                      {cottage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </>
  );
}
