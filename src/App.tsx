import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TattooGallery } from './components/TattooGallery';
import { PiercingGallery } from './components/PiercingGallery';
import { Services } from './components/Services';
import { HygieneStandards } from './components/HygieneStandards';
import { InstagramCarousel } from './components/InstagramCarousel';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1EB] selection:bg-[#C6A56B] selection:text-[#0B0B0B] font-sans antialiased overflow-x-hidden">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content">
        {/* Fullscreen Hero Section */}
        <Hero />

        {/* About Studio & Lead Artist Mr. Sanju */}
        <About />

        {/* Tattoo Portfolio Gallery */}
        <TattooGallery />

        {/* Dedicated Piercing Gallery */}
        <PiercingGallery />

        {/* Services & WhatsApp Booking Inquiries */}
        <Services />

        {/* Hygiene Standards & Studio Protocols */}
        <HygieneStandards />

        {/* Instagram Feed & Carousel */}
        <InstagramCarousel />

        {/* Verified Google Reviews */}
        <CustomerReviews />

        {/* Studio Location, Embedded Map & Contact Info */}
        <ContactSection />
      </main>

      {/* Comprehensive Studio Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
