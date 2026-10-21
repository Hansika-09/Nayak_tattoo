import React from 'react';
import { PenTool, CheckCircle, Shield, User, Sparkles } from 'lucide-react';
import { STUDIO_INFO, getWhatsAppLink } from '../data/studioInfo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#151515] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A56B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C6A56B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Studio Logo & Artist Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#C6A56B]/20 via-transparent to-[#C6A56B]/30 blur-sm pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#0B0B0B] border border-[#C6A56B]/30 shadow-2xl p-6 sm:p-8">
                {/* Studio Logo presentation */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#C6A56B] shadow-[0_0_25px_rgba(198,165,107,0.3)] mb-6 p-1 bg-[#151515]">
                    <img
                      src="/images/logo.jpg"
                      alt="Nayak Tattoo Studio Official Emblem"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <h3 className="font-['Bebas_Neue'] text-3xl sm:text-4xl text-[#F5F1EB] tracking-wider mb-1">
                    NAYAK TATTOO STUDIO
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6A56B] mb-4">
                    <User className="w-3.5 h-3.5" />
                    <span>Lead Artist: {STUDIO_INFO.artistName}</span>
                  </div>

                  <p className="text-xs text-[#A7A7A7] leading-relaxed mb-6 italic max-w-xs">
                    "Tattooing is more than ink in skin; it is a permanent expression of identity, memory, and personal triumph."
                  </p>

                  <div className="w-full pt-4 border-t border-[#222222] flex items-center justify-between text-xs text-[#A7A7A7]">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" /> Electronic City
                    </span>
                    <span className="text-[#C6A56B] font-medium font-mono">
                      {STUDIO_INFO.instagramHandle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Accent Tag */}
              <div className="absolute -bottom-4 right-6 bg-[#0B0B0B] border border-[#C6A56B] px-4 py-1.5 rounded-full shadow-lg">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C6A56B]">
                  Bespoke Body Art
                </span>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-8 bg-[#C6A56B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                ABOUT THE STUDIO
              </span>
            </div>

            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-tight mb-6">
              ART THAT STAYS WITH YOU.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#A7A7A7] font-light leading-relaxed">
              <p>
                Every tattoo tells a story. At <strong className="text-[#F5F1EB] font-medium">Nayak Tattoo Studio</strong>, we work with you to create designs that reflect your personality, your experiences, and your vision.
              </p>
              <p>
                From delicate fine-line pieces to detailed custom artwork and professional piercings, our focus is on craftsmanship, personalization, and a comfortable studio experience. Under the steady hand of artist <strong className="text-[#C6A56B] font-medium">{STUDIO_INFO.artistName}</strong>, each concept is treated with patience and technical precision.
              </p>
            </div>

            {/* Three Required Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Feature 1 */}
              <div className="p-5 rounded-xl bg-[#0B0B0B]/80 border border-[#222222] hover:border-[#C6A56B]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#C6A56B]/10 flex items-center justify-center text-[#C6A56B] mb-3">
                  <PenTool className="w-5 h-5" />
                </div>
                <h4 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-1.5">
                  Custom Designs
                </h4>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  Personalized concepts tailored to your anatomy, personal narrative, and distinct artistic taste.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-xl bg-[#0B0B0B]/80 border border-[#222222] hover:border-[#C6A56B]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#C6A56B]/10 flex items-center justify-center text-[#C6A56B] mb-3">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-1.5">
                  Attention to Detail
                </h4>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  Micro-fine lines, smooth gradient shading, and deliberate placement that ages gracefully with time.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-xl bg-[#0B0B0B]/80 border border-[#222222] hover:border-[#C6A56B]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#C6A56B]/10 flex items-center justify-center text-[#C6A56B] mb-3">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-1.5">
                  Hygiene-Focused
                </h4>
                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  Rigorous hospital-grade sterilization, single-use packaged needles, and clean medical practices.
                </p>
              </div>
            </div>

            {/* Studio Action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppLink("Hi Nayak Tattoo Studio! I'd like to discuss a custom tattoo design idea.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase text-[#0B0B0B] bg-[#C6A56B] hover:bg-[#DFC89B] active:scale-95 transition-all shadow-md"
              >
                <span>Discuss Your Idea</span>
              </a>
              <span className="text-xs text-[#A7A7A7]">
                Located at Konappana Agrahara, Electronic City
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
