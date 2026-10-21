import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { STUDIO_INFO, getWhatsAppLink } from '../data/studioInfo';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tattoos', href: '#tattoos' },
    { name: 'Piercings', href: '#piercings' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#instagram' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#C6A56B]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Nayak Tattoo Studio Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C6A56B]/40 group-hover:border-[#C6A56B] transition-colors shadow-md bg-black">
              <img
                src="/images/logo.jpg"
                alt="Nayak Tattoo Studio Logo"
                className="w-full h-full object-cover object-center scale-[1.03] group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Bebas_Neue'] tracking-wider text-xl sm:text-2xl text-[#F5F1EB] group-hover:text-[#C6A56B] transition-colors leading-tight">
                NAYAK TATTOO STUDIO
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#A7A7A7] tracking-widest uppercase font-mono">
                Electronic City • Bangalore
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#A7A7A7] hover:text-[#C6A56B] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6A56B] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppLink("Hi Nayak Tattoo Studio! I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-[0_0_20px_rgba(198,165,107,0.25)] hover:shadow-[0_0_25px_rgba(198,165,107,0.45)]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#F5F1EB] hover:text-[#C6A56B] hover:bg-[#151515] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-[#0B0B0B]/98 backdrop-blur-xl border-b border-[#C6A56B]/20 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[85vh] py-6 opacity-100 shadow-2xl' : 'max-h-0 py-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2 border-b border-[#222222] pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base uppercase tracking-widest font-['Oswald'] text-[#F5F1EB] hover:text-[#C6A56B] py-2 px-3 rounded-md hover:bg-[#151515] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Studio Quick Info & CTA in Mobile Menu */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#A7A7A7]">
              <MapPin className="w-4 h-4 text-[#C6A56B]" />
              <span>Konappana Agrahara, Electronic City</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#A7A7A7]">
              <Phone className="w-4 h-4 text-[#C6A56B]" />
              <span>{STUDIO_INFO.displayPhone}</span>
            </div>

            <a
              href={getWhatsAppLink("Hi Nayak Tattoo Studio! I'd like to book an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Your Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
