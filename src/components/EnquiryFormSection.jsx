
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import map from '../assets/images/map.png';
import uppperShot from '../assets/images/upper-shot.png';

export default function EnquiryFormSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
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
        description: "Please fill in all required fields (Name, Phone, Email).",
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
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="enquiry-form" className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
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
              <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
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
              <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
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
              <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
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

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700">Message (Optional)</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="How can we help you?" 
                value={formData.message} 
                onChange={handleChange} 
                className="bg-gray-50 text-gray-900 border-gray-200 focus-visible:ring-[#1B5E5E] focus-visible:bg-white transition-colors min-h-[100px]"
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
              src={uppperShot} 
              alt="Aerial view of cottage with red tile roof" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white p-4">
            <img 
              src={map}
              alt="Location map showing distance chart and directions" 
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
