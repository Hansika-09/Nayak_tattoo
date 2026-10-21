import React, { useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Sparkles,
} from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { INSTAGRAM_POSTS } from '../data/instagramData';
import type { InstagramPost } from '../data/instagramData';
import { STUDIO_INFO } from '../data/studioInfo';

export const InstagramCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Mouse Drag to Scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="instagram" className="py-24 bg-[#151515] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <InstagramIcon className="w-4 h-4 text-[#C6A56B]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                SOCIAL FEED
              </span>
            </div>
            
            <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-[#F5F1EB] tracking-wide uppercase leading-none">
              STRAIGHT FROM THE STUDIO.
            </h2>
            
            <p className="mt-3 text-sm sm:text-base text-[#A7A7A7] max-w-xl font-light">
              See our latest work, discover new designs, and hear from the people who trust us with their art.
            </p>
          </div>

          {/* Profile CTA & Carousel Navigation Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-4">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#F5F1EB] bg-[#0B0B0B] border border-[#C6A56B]/40 hover:border-[#C6A56B] hover:text-[#C6A56B] transition-all shadow-md group"
            >
              <InstagramIcon className="w-4 h-4 text-[#C6A56B] group-hover:scale-110 transition-transform" />
              <span>{STUDIO_INFO.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            {/* Carousel Arrow Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                className="p-2.5 rounded-full bg-[#0B0B0B] border border-[#262626] text-[#F5F1EB] hover:text-[#C6A56B] hover:border-[#C6A56B]/40 transition-colors shadow-sm focus:outline-none"
                aria-label="Scroll Carousel Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="p-2.5 rounded-full bg-[#0B0B0B] border border-[#262626] text-[#F5F1EB] hover:text-[#C6A56B] hover:border-[#C6A56B]/40 transition-colors shadow-sm focus:outline-none"
                aria-label="Scroll Carousel Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontally Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {INSTAGRAM_POSTS.map((post: InstagramPost) => (
            <div
              key={post.id}
              className="snap-start shrink-0 w-[300px] sm:w-[340px] md:w-[360px] rounded-2xl bg-[#0B0B0B] border border-[#222222] hover:border-[#C6A56B]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col"
            >
              {/* Instagram Card Header */}
              <div className="p-4 flex items-center justify-between border-b border-[#1f1f1f]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C6A56B]/50 p-0.5 bg-[#151515]">
                    <img
                      src="/images/logo.jpg"
                      alt="Nayak Tattoo Studio"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <a
                      href={post.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#F5F1EB] hover:text-[#C6A56B] transition-colors block leading-tight"
                    >
                      nayak_tattooz2019
                    </a>
                    <span className="text-[10px] text-[#A7A7A7] block">
                      Electronic City, Bangalore
                    </span>
                  </div>
                </div>

                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A7A7A7] hover:text-[#C6A56B] transition-colors p-1"
                  aria-label="Open on Instagram"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Post Image with Badge */}
              <div className="relative aspect-square w-full bg-[#111111] overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {post.dateLabel && (
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-[#0B0B0B]/80 text-[#C6A56B] border border-[#C6A56B]/30 backdrop-blur-md">
                    {post.dateLabel}
                  </span>
                )}
              </div>

              {/* Instagram Interactive Bar Simulation */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-[#A7A7A7]">
                    <div className="flex items-center gap-4">
                      <Heart className="w-5 h-5 hover:text-red-500 hover:fill-red-500 transition-colors cursor-pointer" />
                      <MessageCircle className="w-5 h-5 hover:text-[#F5F1EB] transition-colors cursor-pointer" />
                      <Share2 className="w-5 h-5 hover:text-[#F5F1EB] transition-colors cursor-pointer" />
                    </div>
                    <Bookmark className="w-5 h-5 hover:text-[#C6A56B] transition-colors cursor-pointer" />
                  </div>

                  {/* Likes status */}
                  <p className="text-xs font-semibold text-[#F5F1EB] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#C6A56B]" />
                    <span>{post.likesCount || 'Studio Spotlight'}</span>
                  </p>

                  {/* Caption */}
                  <p className="text-xs text-[#A7A7A7] leading-relaxed line-clamp-3">
                    <span className="font-semibold text-[#F5F1EB] mr-1.5">nayak_tattooz2019</span>
                    {post.caption}
                  </p>

                  {/* Tags */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-[#C6A56B]/80 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Link Button */}
                <div className="mt-4 pt-3 border-t border-[#1f1f1f]">
                  <a
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-[11px] font-semibold uppercase tracking-wider text-[#A7A7A7] hover:text-[#0B0B0B] bg-[#151515] hover:bg-[#C6A56B] border border-[#2a2a2a] hover:border-[#C6A56B] transition-all"
                  >
                    <span>View Post on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-4 flex sm:hidden items-center justify-center gap-1 text-[11px] text-[#737373] font-mono uppercase tracking-wider">
          <span>← Swipe horizontally to view more posts →</span>
        </div>
      </div>
    </section>
  );
};
