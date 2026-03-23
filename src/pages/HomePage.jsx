
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import MeenangadiSection from '@/components/MeenangadiSection';
import CottageTypesSection from '@/components/CottageTypesSection';
import AquaDineSection from '@/components/AquaDineSection';
import IncomeReturningSection from '@/components/IncomeReturningSection';
import EnquiryFormSection from '@/components/EnquiryFormSection';
import LantanaClouds from '@/components/LantanaClouds';
import LantanaAquaSpringSection from '@/components/LantanaAquaSpringSection';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure components are rendered
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Lantana Luxury Resort - Own a Cottage in Wayanad</title>
        <meta
          name="description"
          content="Buy a cottage, own a resort in Wayanad. Experience luxury living with lifetime amenities access at Lantana Resort in Meenangadi."
        />
      </Helmet>

      <main className="min-h-screen bg-white scroll-smooth">
        {/* Home Anchor */}
        <div id="home">
          <Hero />
        </div>

        {/* Specialty / Meenangadi Section */}
        <div id="specialty">
          <MeenangadiSection />
        </div>

        {/* Cottage Types Section */}
        <div id="cottage-types">
          <CottageTypesSection />
        </div>



        {/* Amenities Section - Aqua Spring */}
        <div id="amenities" className="pt-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B5E5E] font-serif uppercase tracking-widest">
              OUR AMENITIES
            </h2>
            <div className="w-24 h-1 bg-[#C9A961] mx-auto mt-6"></div>
          </div>

          {/* <LantanaCloudSection/> */}
          <LantanaClouds />

          {/* Aqua Dine Section */}
          <AquaDineSection />

          <LantanaAquaSpringSection />

        </div>


        {/* Income Returning Section */}
        <IncomeReturningSection />

        {/* Enquiry Form Section */}
        <EnquiryFormSection />
      </main>
    </>
  );
}

export default HomePage;
