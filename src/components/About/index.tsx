import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden select-none" id="testimonials">
      <div className="max-w-8xl mx-auto">
        
        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Kenyan Software Engineers Image (Zoomed to hide board, no border) */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[1.4]">
              <img
                src="/kenyan-devs.png"
                alt="Kenyan Software Engineers Collaborating at KompasIT"
                className="w-full h-full object-cover scale-[1.05] origin-bottom-left transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              We've stopped counting. <br/> Over <span className="text-orange-500 bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">500+ firms</span> count on us<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
              1,200+ projects executed successfully and an average relationship of over 3 years.
            </p>
            <div>
              <a
                href="#greatest-hits"
                className="inline-flex items-center text-gray-900 font-extrabold text-lg hover:text-orange-500 transition-colors duration-200 border-b-2 border-gray-900 hover:border-orange-500 pb-1"
              >
                Our greatest hits <span className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Testimonial Cards: Horizontal Responsive Slider */}
        <div className="relative mt-12 max-w-7xl mx-auto">
          
          <div className="flex overflow-x-auto gap-6 pb-12 pt-2 scrollbar-thin snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
            
            {/* Card 1: Rolls-Royce */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between min-h-[380px] w-[310px] md:w-[350px] flex-shrink-0 snap-start hover:shadow-md hover:border-gray-200 transition-all duration-300 relative group">
              
              {/* Card Header: Brand Logo & Arrow */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1.5 text-gray-800">
                  <img src="/allrentals_logo.jpg" alt="AllRentals" className="h-6 w-auto object-contain" />
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                KompasIT built our entire property management system from scratch. Their team's technical acumen and understanding of the local real estate market allowed us to launch months ahead of schedule.
              </p>

              {/* Floating AI Helper summary bubble matching screenshot */}
              <div className="absolute -bottom-4 left-6 bg-[#0f172a] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-all select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Ask AI for a summary of KompasIT
              </div>

            </div>

            {/* Card 2: IQVIA */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between min-h-[380px] w-[310px] md:w-[350px] flex-shrink-0 snap-start hover:shadow-md hover:border-gray-200 transition-all duration-300 relative group">
              
              {/* Card Header: Brand Logo & Arrow */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  <img src="/kloudsales_logo.jpg" alt="KloudSales" className="h-6 w-auto object-contain" />
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                KompasIT provides amazing engineering and design resourcing for our CRM platform. We were able to speed up product delivery while significantly reducing our operational costs. KompasIT has been hands down the best vendor decision my team has made.
              </p>

            </div>

            {/* Card 3: INSTRUCTURE */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between min-h-[380px] w-[310px] md:w-[350px] flex-shrink-0 snap-start hover:shadow-md hover:border-gray-200 transition-all duration-300 relative group">
              
              {/* Card Header: Brand Logo & See Case Study */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1.5">
                  <div className="w-4 h-4 bg-orange-500 rotate-45 flex-shrink-0 rounded-sm"></div>
                  <span className="text-gray-900 font-extrabold text-base tracking-wider uppercase">Wasenda</span>
                </div>
                <a href="#case-study" className="text-xs font-bold text-orange-500 hover:text-orange-600 hover:underline flex items-center gap-0.5 transition-colors">
                  See case study
                  <span className="text-sm font-semibold">→</span>
                </a>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                KompasIT is a trustworthy, knowledgeable, and adaptable development partner for our logistics tech. They built a highly scalable routing system that transformed our delivery turnaround times and continues to add value.
              </p>

            </div>

            {/* Card 4: NextRoll */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between min-h-[380px] w-[310px] md:w-[350px] flex-shrink-0 snap-start hover:shadow-md hover:border-gray-200 transition-all duration-300 relative group">
              
              {/* Card Header: Brand Logo & Arrow */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1.5 text-gray-800">
                  <svg viewBox="0 0 24 24" className="h-5 w-auto fill-none stroke-current text-gray-700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2l-7 1M22 2l-1 7M2 22a10 10 0 0115-15" />
                  </svg>
                  <span className="text-lg font-extrabold tracking-tight text-gray-800">HealthBridge</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                By seamlessly integrating with our internal healthcare experts, KompasIT delivered a secure telemedicine platform that exceeded expectations. Their reliable deliverables and responsiveness continue to strengthen our relationship.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}