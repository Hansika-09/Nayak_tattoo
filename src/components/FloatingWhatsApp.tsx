import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { STUDIO_INFO, getWhatsAppLink } from '../data/studioInfo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      label: 'Book an Appointment',
      message: "Hi Nayak Tattoo Studio! I'd like to book an appointment with Mr. Sanju.",
    },
    {
      label: 'Custom Tattoo Enquiry',
      message: "Hi Nayak Tattoo Studio! I have an idea for a custom tattoo design. Can we discuss?",
    },
    {
      label: 'Tattoo Cover-Up',
      message: "Hi Nayak Tattoo Studio! I have an existing tattoo I would like to cover up or rework.",
    },
    {
      label: 'Piercing Enquiry',
      message: "Hi Nayak Tattoo Studio! I'd like to ask about body piercing services and jewelry.",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expandable Quick Options Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#151515] border border-[#C6A56B]/30 shadow-2xl p-4 sm:p-5 backdrop-blur-xl animate-fade-in text-left">
          <div className="flex items-center justify-between pb-3 border-b border-[#222222] mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#C6A56B]">
                <img
                  src="/images/logo.jpg"
                  alt="Nayak Tattoo Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#F5F1EB] leading-tight">
                  Nayak Tattoo Studio
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-[#A7A7A7]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online on WhatsApp</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#A7A7A7] hover:text-[#F5F1EB] transition-colors"
              aria-label="Close Chat Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#A7A7A7] mb-3 leading-relaxed">
            Choose what you'd like to discuss with artist Mr. Sanju:
          </p>

          <div className="space-y-2">
            {quickMessages.map((item) => (
              <a
                key={item.label}
                href={getWhatsAppLink(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0B0B0B] hover:bg-[#202020] border border-[#262626] hover:border-[#C6A56B]/50 transition-all text-xs text-[#F5F1EB] group"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#C6A56B] group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-[#222222] flex items-center justify-between text-[11px] text-[#737373]">
            <span>Phone: {STUDIO_INFO.displayPhone}</span>
            <span className="text-[#C6A56B]">Electronic City</span>
          </div>
        </div>
      )}

      {/* Floating Action Pill / Button */}
      <div className="flex items-center gap-3">
        {/* Helper tooltip badge on desktop when closed */}
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#151515]/90 border border-[#C6A56B]/30 text-xs text-[#F5F1EB] shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Chat with Mr. Sanju</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-4 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] active:scale-95 transition-all shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] focus:outline-none flex items-center justify-center cursor-pointer group"
          aria-label="Open WhatsApp Chat with Studio"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform rotate-0" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 fill-current transition-transform group-hover:scale-110" />
              {/* Online indicator ping */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0B0B0B] rounded-full" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
