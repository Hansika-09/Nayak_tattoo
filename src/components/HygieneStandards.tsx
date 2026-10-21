import React from 'react';
import { ShieldCheck, Sparkles, Droplets, Eye } from 'lucide-react';

export const HygieneStandards: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Concept',
      description: 'We sit down with you or discuss over WhatsApp to refine your reference, determine ideal anatomical placement, and review sizing.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: 'Hospital-Grade Prep',
      description: 'Sterilization of all work surfaces, opening of brand-new disposable single-use needles in front of you, and medical-grade barrier film application.',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Precision Craftsmanship',
      description: 'Using high-definition rotary tattoo machines and premium cosmetic inks, Mr. Sanju meticulously applies the linework and shading.',
      icon: Eye,
    },
    {
      step: '04',
      title: 'Protected Healing & Care',
      description: 'Your fresh tattoo or piercing is carefully dressed with protective tattoo film, accompanied by step-by-step aftercare instructions.',
      icon: Droplets,
    },
  ];

  return (
    <section className="py-20 bg-[#151515] border-y border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              OUR PROTOCOL
            </span>
            <span className="h-[1px] w-6 bg-[#C6A56B]" />
          </div>

          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl text-[#F5F1EB] tracking-wide uppercase">
            CLEAN PRACTICE. ZERO COMPROMISE.
          </h2>

          <p className="mt-2 text-sm text-[#A7A7A7] font-light">
            Every session at Nayak Tattoo Studio adheres to strict hygiene standards for your safety and comfort.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-2xl bg-[#0B0B0B] border border-[#222222] hover:border-[#C6A56B]/40 transition-colors relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#2a2a2a] text-[#C6A56B] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-['Bebas_Neue'] text-[#C6A56B]/50 tracking-wider">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-['Oswald'] text-lg text-[#F5F1EB] uppercase tracking-wide mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#A7A7A7] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
