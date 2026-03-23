import React from 'react';
import { Building2, Wrench, Home as HomeIcon, Sparkles, Award } from 'lucide-react';

function FeaturesBar() {
  const features = [
    {
      icon: Building2,
      text: 'Own a 4 star resort',
    },
    {
      icon: Wrench,
      text: 'At zero percentage maintenance',
    },
    {
      icon: HomeIcon,
      text: 'Free staycation',
    },
    {
      icon: Sparkles,
      text: 'Life time amenities access',
    },
    {
      icon: Award,
      text: 'Premium hospitality services',
    },
  ];

  return (
    <section className="bg-[#1B5E5E] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 flex-shrink-0"
            >
              <feature.icon className="w-10 h-10 text-[#C9A961]" />
              <p className="text-white text-sm sm:text-base font-medium max-w-[140px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesBar;