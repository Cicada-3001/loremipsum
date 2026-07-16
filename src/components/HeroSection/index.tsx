'use client';

import { useState, useEffect } from 'react';
import ScheduleCallModal from '@/components/ScheduleCallModal';

export default function HeroSection() {
  const phrases = [
    "custom software products.",
    "enterprise cloud platforms.",
    "next-gen AI solutions."
  ];

  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    '/hero-bg.png',
    '/kenyan-devs.png',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600'
  ];
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
        setFade(true); // start fade-in
      }, 300); // matches transition time
    }, 4500); // phrase display duration
    return () => clearInterval(interval);
  }, [phrases.length]);

  // Image rotation loop
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <>
      {/* Hero Content Section with Tech-Workspace Backdrop */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48 flex items-center justify-center min-h-[70vh] lg:min-h-[75vh]">
        {/* Fading Background Carousel */}
        {images.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-no-repeat bg-[position:right_center] ${
              idx === currentImgIdx ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 35%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.3) 100%), url('${img}')`,
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 relative z-10 text-left">
          <div className="max-w-3xl">
            
            {/* Main heading with dynamic, non-shifting text rotator */}
            <h1 className="text-4xl md:text-5xl lg:text-[62px] font-extrabold text-gray-900 mb-6 leading-tight tracking-tight min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex flex-col justify-start">
              <span className="block mb-2 select-none">We engineer</span>
              <span 
                className={`inline-block transition-all duration-300 transform text-[#ea580c] bg-gradient-to-r from-[#ea580c] to-[#ff7825] bg-clip-text text-transparent ${
                  fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                {phrases[currentPhraseIdx]}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              We build custom applications, high-performance web systems, and robust enterprise platforms designed to accelerate your growth and scale operations.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#0078d4] text-white px-5 py-2 text-[15px] rounded-lg hover:bg-[#005a9e] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold cursor-pointer text-center">
                Schedule a Call
              </button>
              <button className="bg-white text-[#0078d4] border border-[#0078d4] px-5 py-2 text-[15px] rounded-lg hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold cursor-pointer text-center">
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Upward curved white SVG wave mask dome */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[130px] text-white fill-current">
            <path d="M0,220 C480,80 960,80 1440,220 L1440,220 L0,220 Z"></path>
          </svg>
        </div>
      </section>

      {/* Trust Section sitting on perfect solid white background below the curve */}
      <section className="bg-white pt-6 pb-20 md:pb-28 relative z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight">
            Endorsed by engineers. Trusted by CTOs<span className="text-rose-500 font-black">.</span>
          </h2>
          
          {/* 5 Local Client Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-12 md:gap-x-16 lg:gap-x-20 max-w-5xl mx-auto">
            
            {/* 1. AllRentals */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="AllRentals">
              <img src="/allrentals_logo.jpg" alt="AllRentals" className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 rounded" />
            </div>
            
            {/* 2. KloudSales */}
            <div className="flex flex-col items-center justify-center h-16 min-w-[120px]" title="KloudSales">
              <img src="/kloudsales_logo.jpg" alt="KloudSales" className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 rounded" />
            </div>

            {/* 3. Wasenda */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="Wasenda">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 select-none">
                <svg viewBox="0 0 24 24" className="h-6 w-auto fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <span className="text-xl font-black italic tracking-tight text-gray-600">WASENDA</span>
              </div>
            </div>
            
            {/* 4. Frappe */}
            <div className="flex flex-col items-center justify-center h-16 min-w-[120px]" title="Frappe">
              <img src="/frappe.png" alt="Frappe" className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 rounded" />
            </div>
            
            {/* 5. AgroLink */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="AgroLink">
              <div className="flex items-center space-x-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 select-none">
                <svg viewBox="0 0 24 24" className="h-6 w-auto fill-none stroke-current text-emerald-500 hover:text-emerald-600 transition-colors" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span className="text-xl font-bold tracking-tight text-gray-600 font-sans">AgroLink</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}