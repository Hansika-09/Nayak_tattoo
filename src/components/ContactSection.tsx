import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { STUDIO_INFO, getWhatsAppLink } from '../data/studioInfo';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6A56B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              VISIT OUR STUDIO
            </span>
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
          </div>

          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-tight">
            LOCATION & APPOINTMENTS
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A7A7A7] font-light leading-relaxed">
            Conveniently located in Electronic City, Bangalore. Connect directly with artist Mr. Sanju on WhatsApp or phone to reserve your session.
          </p>
        </div>

        {/* Contact Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Studio Address Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151515] border border-[#222222] shadow-xl">
              <h3 className="font-['Bebas_Neue'] text-2xl sm:text-3xl text-[#F5F1EB] tracking-wide uppercase mb-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A56B]" />
                <span>{STUDIO_INFO.name}</span>
              </h3>

              <div className="space-y-4 text-sm text-[#A7A7A7]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C6A56B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#F5F1EB] font-medium leading-snug">
                      {STUDIO_INFO.address.line1}
                    </p>
                    <p className="text-xs text-[#A7A7A7] mt-0.5">
                      {STUDIO_INFO.address.area}
                    </p>
                    <p className="text-xs text-[#A7A7A7]">
                      {STUDIO_INFO.address.city}, {STUDIO_INFO.address.state} - {STUDIO_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2 border-t border-[#222222]">
                  <Phone className="w-5 h-5 text-[#C6A56B] shrink-0" />
                  <div>
                    <span className="text-xs text-[#737373] block">Phone & WhatsApp</span>
                    <a
                      href={`tel:${STUDIO_INFO.phone}`}
                      className="text-[#F5F1EB] hover:text-[#C6A56B] transition-colors font-mono font-medium"
                    >
                      {STUDIO_INFO.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2 border-t border-[#222222]">
                  <InstagramIcon className="w-5 h-5 text-[#C6A56B] shrink-0" />
                  <div>
                    <span className="text-xs text-[#737373] block">Instagram</span>
                    <a
                      href={STUDIO_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5F1EB] hover:text-[#C6A56B] transition-colors font-mono font-medium"
                    >
                      {STUDIO_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-2 border-t border-[#222222]">
                  <Clock className="w-5 h-5 text-[#C6A56B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#737373] block">Studio Availability</span>
                    <p className="text-xs text-[#F5F1EB]">
                      Appointments & consultations confirmed via WhatsApp. Contact ahead to reserve dedicated artist time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Call Now */}
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#F5F1EB] bg-[#151515] hover:bg-[#222222] border border-[#2a2a2a] hover:border-[#C6A56B]/50 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#C6A56B]" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={getWhatsAppLink("Hi Nayak Tattoo Studio! I'd like to check today's appointment availability.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              {/* Instagram Button */}
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#F5F1EB] bg-[#151515] hover:bg-[#222222] border border-[#2a2a2a] hover:border-[#C6A56B]/50 transition-all shadow-md"
              >
                <InstagramIcon className="w-4 h-4 text-[#C6A56B]" />
                <span>Instagram</span>
              </a>

              {/* Google Maps Directions */}
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#F5F1EB] bg-[#151515] hover:bg-[#222222] border border-[#2a2a2a] hover:border-[#C6A56B]/50 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#C6A56B]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-xl bg-[#151515]/60 border border-[#2a2a2a] text-xs text-[#A7A7A7] leading-relaxed">
              <span className="font-semibold text-[#F5F1EB] block mb-1">
                Notice on Appointments:
              </span>
              To ensure every client receives undivided focus and personalized artistic care, please contact us on WhatsApp prior to visiting to confirm studio availability.
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden bg-[#151515] border border-[#222222] shadow-2xl h-[450px] sm:h-[500px]">
              {/* Google Maps Embed iframe with Electronic City location */}
              <iframe
                title="Nayak Tattoo Studio Location Map"
                src="https://maps.google.com/maps?q=Nayak+Tattoo+Studio+Muniswamy+Layout+Konappana+Agrahara+Electronic+City+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlay Direct Directions Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-4 z-10">
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between sm:justify-start gap-3 px-4 py-2.5 rounded-xl bg-[#0B0B0B]/90 backdrop-blur-md border border-[#C6A56B]/50 text-xs font-medium text-[#F5F1EB] hover:text-[#C6A56B] shadow-xl transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#C6A56B]" />
                    <span>Open in Google Maps</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
