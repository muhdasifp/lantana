
import React from 'react';
import { motion } from 'framer-motion';
import { Home, TrendingUp, CalendarDays, TreePine } from 'lucide-react';

export default function InvestmentBenefitsSection() {
  const benefits = [
    {
      icon: Home,
      title: "Full Cottage Ownership",
      description: "Your name, your title deed, your asset."
    },
    {
      icon: TrendingUp,
      title: "18-20% Assured ROI",
      description: "Earn consistent income effortlessly."
    },
    {
      icon: CalendarDays,
      title: "6 Complimentary Stays",
      description: "Enjoy exclusive vacations at your resort."
    },
    {
      icon: TreePine,
      title: "Surrounded by Native Fruit Trees",
      description: "Organic produce right at your doorstep."
    }
  ];

  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-amber-500 flex flex-col items-start group"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                <benefit.icon className="text-amber-600 group-hover:text-white w-7 h-7 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif leading-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
