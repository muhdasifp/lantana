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
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Enquiry Submitted Successfully",
        description: "Our team will contact you soon.",
        className: "bg-[#1B5E5E] text-white border-none"
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="enquiry-form"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            bg-white 
            p-6 sm:p-8 md:p-10 
            rounded-2xl md:rounded-3xl 
            shadow-xl border border-gray-100
            
            lg:sticky lg:top-28
          "
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B5E5E] font-serif mb-2">
            Interested in Investing?
          </h2>

          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            Leave your details and our team will guide you through our offerings.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label>Phone Number *</Label>
              <Input
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label>Email Address *</Label>
              <Input
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label>Message</Label>
              <Textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="min-h-[90px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full 
                py-5 sm:py-6 
                text-base sm:text-lg 
                font-bold 
                bg-[#C9A961] hover:bg-[#b08f45] 
                text-white 
                shadow-lg hover:shadow-xl 
                transition-all 
                uppercase
              "
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Submit Request"
              )}
            </Button>

          </form>
        </motion.div>

        {/* RIGHT - IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {/* Image 1 */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border">
            <img
              src={uppperShot}
              alt="Resort view"
              className="w-full h-[220px] sm:h-[300px] md:h-auto object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border p-3 sm:p-4 bg-white">
            <img
              src={map}
              alt="Location map"
              className="w-full h-[200px] sm:h-[260px] md:h-auto object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}