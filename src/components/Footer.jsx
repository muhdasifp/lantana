
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#1B5E5E] pt-16 pb-8 border-t border-white/10 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Lantana Logo Gold Script"
                className="h-12 w-auto object-contain"
              />
              
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mt-2">
              Experience the perfect blend of luxury and nature at Lantana Resort. Your gateway to serenity in Wayanad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#C9A961] font-semibold text-lg mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/specialty" className="text-white/80 hover:text-[#C9A961] transition-colors text-sm">Specialty</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-[#C9A961] transition-colors text-sm">Types of Cottages</Link></li>
              <li><Link to="/income-returning" className="text-white/80 hover:text-[#C9A961] transition-colors text-sm">Income Returning</Link></li>
              <li><Link to="/enquiry" className="text-white/80 hover:text-[#C9A961] transition-colors text-sm">Enquire Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#C9A961] font-semibold text-lg mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Meenangadi, Wayanad, Kerala</li>
              <li><a href="tel:+919567430055" className="hover:text-[#C9A961] transition-colors">+91 95674 30055</a></li>
              <li><a href="mailto:info@lantanaresort.com" className="hover:text-[#C9A961] transition-colors">info@lantanaresort.com</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[#C9A961] font-semibold text-lg mb-4 uppercase tracking-wider">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A961] hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Lantana Luxury Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
