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
      <section className="relative overflow-hidden pt-36 pb-28 md:pt-48 md:pb-40 flex items-center justify-center min-h-[85vh] lg:min-h-[90vh]">
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
                className="bg-[#0078d4] text-white px-6 py-2.5 text-base rounded-lg hover:bg-[#005a9e] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 cursor-pointer text-center">
                Schedule a Call
              </button>
              <button className="bg-white text-[#0078d4] border border-[#0078d4] px-6 py-2.5 text-base rounded-lg hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold shadow-sm cursor-pointer text-center">
                View Our Work
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
          
          {/* 9 Corporate Logos Row */}
          <div className="flex flex-wrap items-end justify-center gap-x-8 gap-y-12 md:gap-x-12 lg:gap-x-14 xl:gap-x-16 max-w-6xl mx-auto">
            
            {/* 1. Salesforce */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="Salesforce">
              <svg viewBox="0 0 128 128" className="h-7 w-auto text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <path fill="currentColor" d="M53.01 31.44c3.98-4.14 9.51-6.71 15.64-6.71 8.14 0 15.24 4.54 19.02 11.28a26.26 26.26 0 0110.75-2.29c14.68 0 26.58 12.01 26.58 26.81 0 14.81-11.9 26.82-26.58 26.82-1.79 0-3.54-.18-5.24-.52-3.33 5.94-9.68 9.95-16.96 9.95-3.05 0-5.93-.7-8.5-1.96-3.38 7.94-11.24 13.51-20.41 13.51-9.55 0-17.68-6.04-20.8-14.51-1.36.29-2.78.44-4.23.44-11.37 0-20.58-9.31-20.58-20.79 0-7.7 4.14-14.42 10.29-18.01a23.727 23.727 0 01-1.97-9.51c0-13.21 10.72-23.92 23.95-23.92 7.76-.01 14.67 3.69 19.04 9.41"/>
              </svg>
            </div>
            
            {/* 2. Adobe */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="Adobe">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 select-none">
                <svg viewBox="0 0 24 24" className="h-6 w-auto fill-current">
                  <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"/>
                </svg>
                <span className="text-xl font-bold tracking-tight text-gray-600">Adobe</span>
              </div>
            </div>
            
            {/* 3. Johnson & Johnson */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="Johnson &amp; Johnson">
              <div className="flex flex-col text-left leading-[1.0] text-gray-400 hover:text-gray-600 transition-colors duration-200 font-serif italic select-none">
                <span className="text-[17px] font-bold tracking-tight">Johnson</span>
                <span className="text-[17px] font-bold tracking-tight">&amp; Johnson</span>
              </div>
            </div>
            
            {/* 4. Microsoft with Case Study link */}
            <div className="flex flex-col items-center justify-center h-16 min-w-[120px]" title="Microsoft">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 transition-colors duration-200 select-none">
                <svg viewBox="0 0 23 23" className="h-5.5 w-auto">
                  <path fill="#f25022" d="M0 0h10.5v10.5H0z" />
                  <path fill="#7fba00" d="M12 0h10.5v10.5H12z" />
                  <path fill="#00a4ef" d="M0 12h10.5v10.5H0z" />
                </svg>
                <span className="text-xl font-bold tracking-tight text-gray-600 font-sans">Microsoft</span>
              </div>
              <a href="#" className="text-[10px] font-bold text-rose-500 hover:text-rose-600 hover:underline mt-1.5 transition-colors">Read case study</a>
            </div>
            
            {/* 5. NextRoll with Watch Testimonial */}
            <div className="flex flex-col items-center justify-center h-16 min-w-[120px]" title="NextRoll">
              <div className="flex items-center space-x-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <svg viewBox="0 0 24 24" className="h-5 w-auto fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13M22 2l-7 1M22 2l-1 7M2 22a10 10 0 0115-15" />
                </svg>
                <span className="text-lg font-extrabold tracking-tight text-gray-600">NextRoll</span>
              </div>
              <a href="#" className="text-[10px] font-bold text-rose-500 hover:text-rose-600 hover:underline mt-1.5 flex items-center gap-0.5 transition-colors">
                Watch testimonial 
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
            
            {/* 6. Pinterest with Case Study link */}
            <div className="flex flex-col items-center justify-center h-16 min-w-[120px]" title="Pinterest">
              <div className="flex items-center space-x-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <svg viewBox="0 0 24 24" className="h-5 w-auto fill-current text-rose-500 hover:text-rose-600 transition-colors duration-200">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
                <span className="text-lg font-bold tracking-tight text-gray-600">Pinterest</span>
              </div>
              <a href="#" className="text-[10px] font-bold text-rose-500 hover:text-rose-600 hover:underline mt-1.5 transition-colors">Read case study</a>
            </div>
            
            {/* 7. Rolls-Royce */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="Rolls-Royce">
              <div className="flex items-center space-x-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 select-none">
                <svg viewBox="0 0 24 24" className="h-6 w-auto fill-current">
                  <path d="M13.363 3.663H9.961v6.865c-.41.196-.857.368-1.341.511a7.94 7.94 0 0 1-.776.182V3.968s.06-1.041-.519-1.393v-.13h5.434c.244.297.463.697.604 1.218zm.958 9.391c2.465-1.182 3.652-3.262 3.674-5.646.015-1.622-.557-2.618-1.197-3.148a1.883 1.883 0 0 0-.117-.089 6.454 6.454 0 0 0-.612-1.618c.118.017.227.036.324.057 1.788.38 3.225 1.436 3.905 3.474.554 1.662.285 3.724-.904 5.377-.281.391-1.03 1.226-1.89 1.842-.156.112-.25.174-.414.277 1.077 1.726 1.608 2.717 2.295 4.6.6 1.644 1.055 3.83 1.117 4.344.15 1.223.515 1.32.599 1.345V24h-4.295v-.13c.132-.07 1.293-.546 1.299-2.367.006-1.337-.32-2.808-.914-4.46a22.925 22.925 0 0 0-1.277-2.829l-.014-.021a8.355 8.355 0 0 1-.872.321c-.223-.516-.45-.983-.707-1.459zm-4.36-.144v1.116c.325-.014 1.34-.096 2.254-.274.207.468.387.912.511 1.257l.017.048a26.3 26.3 0 0 1-1.23.166 33.2 33.2 0 0 1-1.552.131v7.21c0 .159.037 1.008.59 1.306V24H7.254v-.13c.538-.283.59-1.147.59-1.305v-9.27a18.96 18.96 0 0 0 2.118-.385zm.457-11.66l-.462-.007H5.662v10.575c.426-.019 2.013-.152 3.052-.46 3.465-1.025 5.12-3.447 5.146-6.293.015-1.655-.568-2.672-1.222-3.212-.407-.337-.946-.496-1.338-.554-.22-.044-.71-.05-.882-.05zM3.502 20.557V1.554S3.564.492 2.972.133V0h7.346c.613.001 1.415.063 1.907.17 1.824.387 3.291 1.464 3.985 3.544.565 1.696.291 3.8-.922 5.487-.287.4-1.05 1.25-1.93 1.88a6.998 6.998 0 0 1-.422.281c1.1 1.762 1.641 2.773 2.343 4.695.612 1.677 1.076 3.909 1.14 4.432.151 1.248.525 1.374.61 1.4v.132h-4.382l-.001-.133c.136-.072 1.32-.583 1.326-2.442.007-1.363-.326-2.865-.932-4.55a23.36 23.36 0 0 0-1.305-2.887l-.014-.022c-.582.265-1.812.624-2.61.775-.571.108-1.15.197-1.865.277-.623.07-1.227.111-1.584.134v7.384c0 .161.038 1.028.603 1.332v.132H2.9v-.132c.549-.29.603-1.17.603-1.332Z"/>
              </svg>
              <span className="text-[17px] font-bold tracking-tight text-gray-600">Rolls-Royce</span>
              </div>
            </div>
            
            {/* 8. Motorola */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="Motorola">
              <div className="flex items-center space-x-1.5 text-gray-400 hover:text-gray-600 transition-colors duration-200 select-none">
                <svg viewBox="0 0 24 24" className="h-6 w-auto fill-current">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C24.002 5.375 18.632.002 12.007 0H12zm7.327 18.065s-.581-2.627-1.528-4.197c-.514-.857-1.308-1.553-2.368-1.532-.745 0-1.399.423-2.2 1.553-.469.77-.882 1.573-1.235 2.403 0 0-.29-.675-.63-1.343a8.038 8.038 0 0 0-.605-1.049c-.804-1.13-1.455-1.539-2.2-1.553-1.049-.021-1.854.675-2.364 1.528-.948 1.574-1.528 4.197-1.528 4.197h-.864l4.606-15.12 3.56 11.804.024.021.024-.021 3.56-11.804 4.61 15.113h-.862z"/>
                </svg>
                <span className="text-[17px] font-medium lowercase tracking-tight text-gray-600">motorola</span>
              </div>
            </div>
            
            {/* 9. HP */}
            <div className="flex items-center justify-center h-16 min-w-[120px]" title="HP">
              <svg viewBox="0 0 24 24" className="h-8 w-auto text-gray-400 hover:text-gray-600 fill-current transition-colors duration-200">
                <path d="M12.0069 24h-.3572l2.459-6.7453h3.3796c.5907 0 1.2364-.4533 1.4424-1.0166l2.6652-7.3085c.4396-1.1952-.2473-2.1706-1.525-2.1706h-4.6983l-3.929 10.798-2.2255 6.127C3.929 22.434 0 17.6806 0 12.007 0 6.498 3.7092 1.8546 8.7647.4396L6.4705 6.759 2.6514 17.2547h2.5415L8.4488 8.339h1.9095l-3.2558 8.9158H9.644l3.0223-8.3251c.4396-1.1952-.2473-2.1706-1.525-2.1706h-2.143l2.459-6.7453C11.636 0 11.8145 0 11.9931 0 18.6285 0 24 5.3715 24 12.007c.0137 6.6216-5.3578 11.993-11.9931 11.993zM19.2742 8.325h-1.9096l-2.6789 7.336h1.9096l2.6789-7.336z"/>
              </svg>
            </div>
            
          </div>
        </div>
      </section>
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}