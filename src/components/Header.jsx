import React, { useState, useEffect } from 'react';
import { Menu, PhoneCall, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'SPECIALTY', id: 'specialty' },
    { label: 'AMENITIES', id: 'amenities' },
    { label: 'INCOME RETURNING', id: 'income-returning' },
    { label: 'TYPES OF COTTAGES', id: 'cottage-types' }
  ];

  // ✅ Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Scroll Spy (highlight active section)
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = 'home';

      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            current = link.id;
          }
        }
      });

      setActiveSection(current);

      // Optional: update URL hash
      if (window.location.hash !== `#${current}`) {
        window.history.replaceState(null, '', `#${current}`);
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // ✅ Handle click navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);


    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = targetId;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-[#1B5E5E] shadow-lg py-2'
        : 'bg-[#1B5E5E] py-4'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-3 group shrink-0"
          >
            <img
              src={logo}
              alt="Lantana Logo"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-10 md:w-[120px]' : 'h-12 md:w-[150px]'
                }`}
            />
          </Link>

          {/* Contact Number */}
          <Link
            to="tel:+919496552200"
            className='flex gap-2 bg-white px-3 py-1 rounded-md font-bold text-[16px]'
          >
            <PhoneCall />
            <span className=''>+919496552200</span>
          </Link>



          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={`/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-xs xl:text-sm font-medium tracking-wide text-white/90 hover:text-[#C9A961] transition-colors duration-300 relative group py-2 whitespace-nowrap cursor-pointer"
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#C9A961] transition-all duration-300 ease-out ${activeSection === link.id
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                        }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/#enquiry-form"
              onClick={(e) => handleNavClick(e, 'enquiry-form')}
              className="px-6 py-2.5 bg-[#C9A961] hover:bg-[#b08f45] text-white font-bold text-sm tracking-wide rounded shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              ENQUIRE NOW
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#C9A961] transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[88px] bg-[#1B5E5E] border-t border-white/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen
          ? 'opacity-100 scale-y-100 visible'
          : 'opacity-0 scale-y-95 invisible'
          }`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={`/#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-lg font-medium px-4 py-3 rounded-lg transition-all ${activeSection === link.id
                ? 'text-[#C9A961] bg-white/10'
                : 'text-white hover:text-[#C9A961] hover:bg-white/5'
                }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 mt-2 border-t border-white/10">
            <a
              href="/#enquiry-form"
              onClick={(e) => handleNavClick(e, 'enquiry-form')}
              className="block w-full text-center bg-[#C9A961] hover:bg-[#b08f45] text-white font-bold py-3 rounded shadow transition-colors cursor-pointer"
            >
              ENQUIRE NOW
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;