'use client';

import { useState, useEffect } from 'react';

interface Slide {
  id: number;
  featuredLogo: React.ReactNode;
  contentLogo: React.ReactNode;
  contentDescription: string;
}

export default function PressShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides: Slide[] = [
    {
      id: 0,
      featuredLogo: (
        <span className="font-sans font-black tracking-tight text-white/40 group-hover:text-white/60 transition-colors duration-200 text-lg md:text-xl select-none">
          AllRentals
        </span>
      ),
      contentLogo: (
        <div className="flex flex-col text-left select-none">
          <span className="text-4xl md:text-[46px] font-black tracking-tighter text-white leading-none">AllRentals</span>
          <span className="text-[11px] font-bold tracking-wider text-gray-300 mt-2 uppercase">Property Management Platform</span>
        </div>
      ),
      contentDescription: 'KompasIT engineered the AllRentals platform from the ground up — a full-stack property management and tenant portal system serving landlords and tenants across East Africa.',
    },
    {
      id: 1,
      featuredLogo: (
        <span className="font-sans font-extrabold tracking-tight text-white/40 group-hover:text-white/60 transition-colors duration-200 text-base md:text-lg select-none">
          KloudSales
        </span>
      ),
      contentDescription: 'KompasIT built KloudSales, a cloud-based CRM and sales management tool tailored for SMEs in Kenya, enabling faster sales cycles and real-time pipeline tracking.',
      contentLogo: (
        <div className="flex flex-col text-left select-none">
          <span className="text-4xl md:text-[46px] font-black tracking-tighter text-white leading-none">KloudSales</span>
          <span className="text-[11px] font-bold tracking-wider text-gray-300 mt-2 uppercase">CRM & Sales Platform</span>
        </div>
      ),
    },
    {
      id: 2,
      featuredLogo: (
        <span className="font-sans font-black tracking-tight text-white/40 group-hover:text-white/60 transition-colors duration-200 text-lg md:text-xl select-none">
          Wasenda
        </span>
      ),
      contentDescription: 'Working alongside the Wasenda team, KompasIT delivered a robust logistics and courier management system, dramatically reducing delivery turnaround time for businesses across Nairobi.',
      contentLogo: (
        <div className="flex flex-col text-left select-none">
          <span className="text-4xl md:text-[46px] font-black tracking-tighter text-white leading-none">Wasenda</span>
          <span className="text-[11px] font-bold tracking-wider text-gray-300 mt-2 uppercase">Logistics & Courier Tech</span>
        </div>
      ),
    },
    {
      id: 3,
      featuredLogo: (
        <span className="font-sans font-bold tracking-tight text-white/40 group-hover:text-white/60 transition-colors duration-200 text-base md:text-lg select-none">
          HealthBridge
        </span>
      ),
      contentDescription: 'KompasIT developed a telemedicine and patient records platform for HealthBridge, enabling clinics across Kenya to manage consultations, prescriptions, and records digitally.',
      contentLogo: (
        <div className="flex flex-col text-left select-none">
          <span className="text-4xl md:text-[46px] font-black tracking-tighter text-white leading-none">HealthBridge</span>
          <span className="text-[11px] font-bold tracking-wider text-gray-300 mt-2 uppercase">Telemedicine Platform</span>
        </div>
      ),
    },
    {
      id: 4,
      featuredLogo: (
        <span className="font-sans font-extrabold tracking-tight text-white/40 group-hover:text-white/60 transition-colors duration-200 text-base md:text-lg select-none">
          AgroLink
        </span>
      ),
      contentDescription: 'KompasIT partnered with AgroLink to build a farmer-to-market digital platform, connecting smallholder farmers directly to buyers and reducing post-harvest losses across rural Kenya.',
      contentLogo: (
        <div className="flex flex-col text-left select-none">
          <span className="text-4xl md:text-[46px] font-black tracking-tighter text-white leading-none">AgroLink</span>
          <span className="text-[11px] font-bold tracking-wider text-gray-300 mt-2 uppercase">AgriTech Marketplace</span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16 md:py-24 relative z-20">
      <div 
        className="max-w-6xl mx-auto px-4 md:px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Card Container */}
        <div className="bg-[#3e4a5b] rounded-[24px] shadow-2xl overflow-hidden flex flex-col text-white transition-all duration-300">
          
          {/* Top Bar Header with Featured Logos */}
          <div className="flex flex-wrap items-center justify-between px-6 py-6 md:px-12 md:py-7 gap-4">
            {/* Left side label */}
            <span className="text-gray-300 font-semibold text-[15px] select-none">
              As featured in...
            </span>

            {/* Right side logos grid */}
            <div className="flex items-center space-x-6 md:space-x-10 lg:space-x-12">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`group transition-all duration-300 focus:outline-none ${
                    activeSlide === idx ? 'scale-105 opacity-100 filter brightness-125' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {slide.id === 1 ? (
                    // CNBC colorful icon override when active
                    activeSlide === 1 ? (
                      <div className="flex items-center space-x-1 select-none">
                        <svg className="w-5 h-5" viewBox="0 0 100 100">
                          <path d="M50 35c3-10 12-15 12-15s-2 12-7 16c-3 3-5 1-5-1z" fill="#7B2CBF" />
                          <path d="M54 38c7-8 17-9 17-9s-6 10-12 12c-4 1-5-1-5-3z" fill="#E040FB" />
                          <path d="M55 43c9-4 19-2 19-2s-9 8-15 7c-4 0-4-3-4-5z" fill="#FF5722" />
                          <path d="M52 47c9 1 18 8 18 8s-11 3-16-2c-3-3-2-5-2-6z" fill="#FFC107" />
                          <path d="M47 47c-9 1-18 8-18 8s11 3 16-2c3-3 2-5 2-6z" fill="#4CAF50" />
                          <path d="M44 43c-9-4-19-2-19-2s9 8 15 7c4 0 4-3 4-5z" fill="#00B0FF" />
                        </svg>
                        <span className="font-sans font-black tracking-tight text-white text-base">CNBC</span>
                      </div>
                    ) : (
                      slide.featuredLogo
                    )
                  ) : (
                    // Render other text logos with active color highlights
                    <span 
                      className={`transition-colors duration-300 ${
                        activeSlide === idx ? 'text-white font-extrabold' : ''
                      }`}
                    >
                      {slide.featuredLogo}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-white/10"></div>

          {/* Main Content Body */}
          <div className="relative min-h-[190px] px-6 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-14 absolute left-0 right-0 px-6 md:px-12 transition-all duration-500 ease-in-out ${
                  activeSlide === idx 
                    ? 'opacity-100 translate-y-0 relative pointer-events-auto z-10' 
                    : 'opacity-0 translate-y-4 absolute pointer-events-none z-0'
                }`}
              >
                {/* Left Side: Dynamic Showcase Logo */}
                <div className="w-full md:w-1/3 flex items-center justify-start min-h-[60px]">
                  {slide.contentLogo}
                </div>

                {/* Right Side: Showcase Description Narrative */}
                <div className="w-full md:w-2/3">
                  <p className="text-[15px] md:text-[17px] text-gray-200 leading-relaxed font-medium text-left">
                    {slide.contentDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-white/10"></div>

          {/* Bottom Bar Navigation */}
          <div className="flex items-center justify-between px-6 py-5 md:px-12 md:py-5 text-sm select-none">
            {/* Previous slide button */}
            <button 
              onClick={handlePrev}
              className="flex items-center space-x-1.5 text-gray-300 hover:text-white font-semibold transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous</span>
            </button>

            {/* Slide Indicator Dots */}
            <div className="flex items-center space-x-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    activeSlide === idx ? 'bg-white scale-110' : 'bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next slide button */}
            <button 
              onClick={handleNext}
              className="flex items-center space-x-1.5 text-gray-300 hover:text-white font-semibold transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              <span>Next</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
