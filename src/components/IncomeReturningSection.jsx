import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, IndianRupee, Rocket } from 'lucide-react';
import returnInvest from '../assets/images/invest-return.png';

export default function IncomeReturningSection() {
  const benefits = [{
    title: "Investment Returns",
    description: "Consistent high-yield returns on your property investment.",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50"
  }, {
    title: "Passive Income",
    description: "Generate regular income through our resort management program.",
    icon: IndianRupee,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }, {
    title: "Growth Potential",
    description: "Capitalize on Wayanad's booming tourism and real estate market.",
    icon: Rocket,
    color: "text-amber-600",
    bgColor: "bg-amber-50"
  }];
  return <section id="income-returning" className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <motion.div initial={{
        opacity: 0,
        y: -20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B5E5E] font-serif mb-6 uppercase tracking-tight">
          Income Returning
        </h2>
        <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-6 rounded-full"></div>
        <p className="text-xl text-gray-600 font-serif leading-tight max-w-2xl mx-auto">
          We offer modern (5 star) hotel facilities for your comfort.
        </p>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 mb-16">
      <motion.div initial={{
        opacity: 0,
        x: -30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
        <h2 className="text-sm font-bold text-[#C9A961] tracking-[0.2em] uppercase mb-2">
          We offer
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1B5E5E] mb-6">
          Lantana Resorts
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          LANTANA RESORT presents an Exclusive Investment Opportunity! Become a proud owner of a premium cottage inside a professionally managed luxury resort. Not just a unit, but a share in a destination. With clear legal ownership, you'll receive a property title registered in your name, including a defined portion of land, an ultra-modern luxury cottage, and access to world-class resort amenities - making it a tangible and legally secured investment.
        </p>
      </motion.div>

      <motion.div initial={{
        opacity: 0,
        x: 30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="flex justify-center">
        <img src={returnInvest} alt="Return on Investment" className="w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 object-contain" />
      </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => <motion.div key={index} initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: index * 0.1
      }} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
        <div className={`w-14 h-14 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-6`}>
          <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
        </div>
        <h3 className="text-xl font-bold text-[#1B5E5E] mb-3">{benefit.title}</h3>
        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
      </motion.div>)}
    </div>
  </section>;
}