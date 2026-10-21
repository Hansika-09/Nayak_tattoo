import React from 'react';
import { Quote, Star, ExternalLink, CheckCircle2, MapPin } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/reviewsData';
import type { CustomerReview } from '../data/reviewsData';
import { STUDIO_INFO } from '../data/studioInfo';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C6A56B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#222222] pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[1px] w-8 bg-[#C6A56B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                CLIENT FEEDBACK
              </span>
            </div>
            
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-none">
              TRUSTED BY OUR CLIENTS.
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-[#A7A7A7] max-w-xl font-light">
              Genuine customer experiences and Google reviews from clients who visited Nayak Tattoo Studio in Electronic City.
            </p>
          </div>

          {/* Google Reviews Verification Link */}
          <div className="mt-6 md:mt-0">
            <a
              href={STUDIO_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F1EB] bg-[#151515] border border-[#C6A56B]/40 hover:border-[#C6A56B] hover:text-[#C6A56B] transition-all shadow-md group"
            >
              <div className="flex items-center text-[#C6A56B]">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>Verify on Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* 3 Genuine Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CUSTOMER_REVIEWS.map((review: CustomerReview) => (
            <div
              key={review.id}
              className="relative rounded-2xl bg-[#151515] border border-[#222222] hover:border-[#C6A56B]/50 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              {/* Subtle card background watermark quote */}
              <div className="absolute top-4 right-5 opacity-10 text-[#C6A56B] pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#0B0B0B] text-[#C6A56B] border border-[#C6A56B]/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A56B]" />
                    <span>Verified Review</span>
                  </div>

                  <span className="text-[11px] font-mono text-[#737373]">
                    Google Maps
                  </span>
                </div>

                {/* Review Quote Text */}
                <p className="text-base sm:text-lg text-[#F5F1EB] font-light italic leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Review Card Footer */}
              <div className="pt-5 border-t border-[#222222] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A7A7A7]">
                    {review.tag}
                  </p>
                  <p className="text-[11px] text-[#737373] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#C6A56B]" /> Electronic City, Bangalore
                  </p>
                </div>

                <div className="flex text-[#C6A56B] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Transparency Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#737373] max-w-xl mx-auto">
            These statements represent authentic client reviews submitted directly on Google for Nayak Tattoo Studio.
          </p>
        </div>

      </div>
    </section>
  );
};
