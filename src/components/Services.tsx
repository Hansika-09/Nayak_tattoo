import React from 'react';
import {
  Sparkles,
  Feather,
  Eye,
  UserCheck,
  RefreshCw,
  Palette,
  Compass,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';
import { STUDIO_SERVICES } from '../data/servicesData';
import type { ServiceItem } from '../data/servicesData';
import { getWhatsAppLink } from '../data/studioInfo';

const iconMap = {
  Sparkles,
  Feather,
  Eye,
  UserCheck,
  RefreshCw,
  Palette,
  Compass,
  ShieldCheck,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A56B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              OUR EXPERTISE
            </span>
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
          </div>
          
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-tight">
            STUDIO SERVICES & SPECIALIZATIONS
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#A7A7A7] font-light leading-relaxed">
            From initial sketch and stencil fitting to medical-grade execution, every service is tailored to deliver timeless body art.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_SERVICES.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#151515] border border-[#222222] hover:border-[#C6A56B]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Service Icon with Glow */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B0B0B] border border-[#2a2a2a] group-hover:border-[#C6A56B]/50 group-hover:bg-[#C6A56B]/10 flex items-center justify-center text-[#C6A56B] transition-colors mb-5 shadow-sm">
                    <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-['Oswald'] text-xl uppercase tracking-wide text-[#F5F1EB] group-hover:text-[#C6A56B] transition-colors mb-2.5">
                    {service.name}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs text-[#A7A7A7] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-[11px] text-[#888888]">
                        <span className="w-1 h-1 rounded-full bg-[#C6A56B]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* WhatsApp Enquiry Button */}
                <div className="pt-4 border-t border-[#222222]">
                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#C6A56B] hover:text-[#0B0B0B] bg-[#0B0B0B] hover:bg-[#C6A56B] border border-[#C6A56B]/30 hover:border-[#C6A56B] transition-all duration-200"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Enquire</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#737373] max-w-xl mx-auto">
            All prices and session durations are discussed during personalized consultation based on placement, size, and complexity. No hidden costs.
          </p>
        </div>
      </div>
    </section>
  );
};
