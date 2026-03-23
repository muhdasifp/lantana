
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function EnquiryPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Submitted Successfully",
        description: "Thank you for reaching out. We will get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Enquire Now - Lantana Luxury Resort</title>
        <meta name="description" content="Contact Lantana Luxury Resort to enquire about our premium cottages and investment opportunities in Wayanad." />
      </Helmet>

      <main className="min-h-screen bg-gray-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-[#1B5E5E] py-8 px-8 sm:px-12 text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 uppercase tracking-wide">
                Enquire Now
              </h1>
              <p className="text-white/80 text-lg font-light">
                Discover your dream cottage in Wayanad
              </p>
            </div>

            <div className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full text-gray-900 border-gray-300 focus:ring-[#C9A961] focus:border-[#C9A961]" 
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full text-gray-900 border-gray-300 focus:ring-[#C9A961] focus:border-[#C9A961]" 
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="w-full text-gray-900 border-gray-300 focus:ring-[#C9A961] focus:border-[#C9A961]" 
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Message / Inquiry Details</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full min-h-[150px] text-gray-900 border-gray-300 focus:ring-[#C9A961] focus:border-[#C9A961] resize-y" 
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A961] hover:bg-[#b08f45] text-white font-bold py-4 text-lg rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  {isSubmitting ? "Submitting..." : "Send Enquiry"}
                </Button>

              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
