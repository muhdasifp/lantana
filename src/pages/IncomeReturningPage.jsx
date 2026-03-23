
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export default function IncomeReturningPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields (Name, Phone, Email).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Submitted Successfully",
        description: "Our team will get back to you shortly.",
        className: "bg-[#1B5E5E] text-white border-none"
      });
      setFormData({ name: '', phone: '', email: '' });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Income Returning - Lantana Resorts</title>
        <meta name="description" content="Discover our income returning benefits and modern hotel facilities at Lantana Resorts." />
      </Helmet>

      <main className="min-h-screen bg-gray-50 pt-32 pb-16 overflow-hidden">
        
        {/* SECTION 1 - PAGE HEADER */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-4xl mx-auto py-12 bg-white rounded-3xl shadow-sm border border-gray-100">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B5E5E] font-serif mb-6 uppercase tracking-tight">
                Income Returning
              </h1>
              <div className="w-24 h-1 bg-[#C9A961] mx-auto mb-6 rounded-full"></div>
              <h2 className="text-xl md:text-2xl text-gray-600 font-serif leading-tight max-w-2xl mx-auto">
                We offer modern (5 star) hotel facilities for your comfort.
              </h2>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 - INCOME RETURNING BENEFITS */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 mb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-[#C9A961] tracking-[0.2em] uppercase mb-2">
                We offer
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1B5E5E] mb-6">
                Lantana AQUA DINE
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lantana AQUA DINE offers a unique dine-in experience with a wide range of food choices. Nestled within natural ecosystem which cascade into the pond, the space allures a more natural ambience with secluded areas for relaxation, adding an overall tropical feel with luxuriantly grown plants, ferns and trees to reinforce natural ecosystem.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/1e898e5e50097f4a6f83c7d3e37bf78d.png" 
                alt="Return on Investment"
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 object-contain"
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - CONTACT FORM SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 sticky top-32"
            >
              <h2 className="text-3xl font-bold text-[#1B5E5E] font-serif mb-2">Interested in Investing?</h2>
              <p className="text-gray-600 mb-8">Leave your details below and our team will guide you through our exclusive investment offerings.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="Your Full Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="bg-gray-50 text-gray-900 border-gray-200 focus-visible:ring-[#1B5E5E] focus-visible:bg-white transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="Your Phone Number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="bg-gray-50 text-gray-900 border-gray-200 focus-visible:ring-[#1B5E5E] focus-visible:bg-white transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="bg-gray-50 text-gray-900 border-gray-200 focus-visible:ring-[#1B5E5E] focus-visible:bg-white transition-colors"
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-bold bg-[#C9A961] hover:bg-[#b08f45] text-white shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Right Column: Images */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                <img 
                  src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/dd202d941649c92b441301bfd1fc4511.png" 
                  alt="Aerial view of cottage with red tile roof" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-4">
                <img 
                  src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/997fe76cf3267b100b7301973f8afadf.png" 
                  alt="Location map showing distance chart and directions" 
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </section>

      </main>
    </>
  );
}
