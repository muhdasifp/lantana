
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

export default function AquaSpringContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

    // Simulate API call
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="bg-[#F9FAFB] p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-[#1B5E5E] font-serif mb-2">Interested in Aqua Spring?</h2>
            <p className="text-gray-600 mb-8">Leave your details below and our team will guide you through our exclusive amenities and offerings.</p>

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
                  className="bg-white text-gray-900 border-gray-300 focus-visible:ring-[#1B5E5E]"
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
                  className="bg-white text-gray-900 border-gray-300 focus-visible:ring-[#1B5E5E]"
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
                  className="bg-white text-gray-900 border-gray-300 focus-visible:ring-[#1B5E5E]"
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-6 text-lg font-bold bg-[#C9A961] hover:bg-[#b08f45] text-white shadow-lg transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Request Information"
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right Column: Images */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] w-full">
              <img 
                src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/dd202d941649c92b441301bfd1fc4511.png" 
                alt="Aerial view of cottage with red tile roof and tropical plants" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3] w-full bg-white p-2">
              <img 
                src="https://horizons-cdn.hostinger.com/6f312b02-03a3-47d9-a11a-dd09edc977b7/997fe76cf3267b100b7301973f8afadf.png" 
                alt="Location map showing distance chart and directions to Lantana" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
