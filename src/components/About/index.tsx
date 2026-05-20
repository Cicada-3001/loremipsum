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
                  <svg viewBox="0 0 24 24" className="h-6 w-auto fill-current text-gray-700">
                    <path d="M13.363 3.663H9.961v6.865c-.41.196-.857.368-1.341.511a7.94 7.94 0 0 1-.776.182V3.968s.06-1.041-.519-1.393v-.13h5.434c.244.297.463.697.604 1.218zm.958 9.391c2.465-1.182 3.652-3.262 3.674-5.646.015-1.622-.557-2.618-1.197-3.148a1.883 1.883 0 0 0-.117-.089 6.454 6.454 0 0 0-.612-1.618c.118.017.227.036.324.057 1.788.38 3.225 1.436 3.905 3.474.554 1.662.285 3.724-.904 5.377-.281.391-1.03 1.226-1.89 1.842-.156.112-.25.174-.414.277 1.077 1.726 1.608 2.717 2.295 4.6.6 1.644 1.055 3.83 1.117 4.344.15 1.223.515 1.32.599 1.345V24h-4.295v-.13c.132-.07 1.293-.546 1.299-2.367.006-1.337-.32-2.808-.914-4.46a22.925 22.925 0 0 0-1.277-2.829l-.014-.021a8.355 8.355 0 0 1-.872.321c-.223-.516-.45-.983-.707-1.459zm-4.36-.144v1.116c.325-.014 1.34-.096 2.254-.274.207.468.387.912.511 1.257l.017.048a26.3 26.3 0 0 1-1.23.166 33.2 33.2 0 0 1-1.552.131v7.21c0 .159.037 1.008.59 1.306V24H7.254v-.13c.538-.283.59-1.147.59-1.305v-9.27a18.96 18.96 0 0 0 2.118-.385zm.457-11.66l-.462-.007H5.662v10.575c.426-.019 2.013-.152 3.052-.46 3.465-1.025 5.12-3.447 5.146-6.293.015-1.655-.568-2.672-1.222-3.212-.407-.337-.946-.496-1.338-.554-.22-.044-.71-.05-.882-.05zM3.502 20.557V1.554S3.564.492 2.972.133V0h7.346c.613.001 1.415.063 1.907.17 1.824.387 3.291 1.464 3.985 3.544.565 1.696.291 3.8-.922 5.487-.287.4-1.05 1.25-1.93 1.88a6.998 6.998 0 0 1-.422.281c1.1 1.762 1.641 2.773 2.343 4.695.612 1.677 1.076 3.909 1.14 4.432.151 1.248.525 1.374.61 1.4v.132h-4.382l-.001-.133c.136-.072 1.32-.583 1.326-2.442.007-1.363-.326-2.865-.932-4.55a23.36 23.36 0 0 0-1.305-2.887l-.014-.022c-.582.265-1.812.624-2.61.775-.571.108-1.15.197-1.865.277-.623.07-1.227.111-1.584.134v7.384c0 .161.038 1.028.603 1.332v.132H2.9v-.132c.549-.29.603-1.17.603-1.332Z"/>
                  </svg>
                  <span className="text-xl font-bold tracking-tight text-gray-800">Rolls-Royce</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                Repeat Business is the best testament to a team's ability to perform, and I have no hesitation in hiring them again. KompasIT's pleasant collaboration style and high-level acumen rapidly catalyzed significant momentum toward our key objectives.
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
                  <span className="text-[#0078d4] font-black text-2xl tracking-widest font-sans">IQVIA</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                KompasIT provides amazing development and design resourcing, along with best in class account management support. We were able to speed up product and design and delivery while reducing our costs. KompasIT has been hands down the best vendor decision my team has made.
              </p>

            </div>

            {/* Card 3: INSTRUCTURE */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col justify-between min-h-[380px] w-[310px] md:w-[350px] flex-shrink-0 snap-start hover:shadow-md hover:border-gray-200 transition-all duration-300 relative group">
              
              {/* Card Header: Brand Logo & See Case Study */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1.5">
                  <div className="w-4 h-4 bg-orange-500 rotate-45 flex-shrink-0 rounded-sm"></div>
                  <span className="text-gray-900 font-extrabold text-base tracking-wider uppercase">INSTRUCTURE</span>
                </div>
                <a href="#case-study" className="text-xs font-bold text-orange-500 hover:text-orange-600 hover:underline flex items-center gap-0.5 transition-colors">
                  See case study
                  <span className="text-sm font-semibold">→</span>
                </a>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                KompasIT is a trustworthy, knowledgeable, and adaptable development partner. They also know how to push back and ask questions when appropriate, which is a cornerstone of our corporate culture and really adds value.
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
                  <span className="text-lg font-extrabold tracking-tight text-gray-800">NextRoll</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              {/* Quote Content */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow font-medium">
                <span className="text-orange-500 font-serif text-2xl font-bold">"</span>
                By seamlessly integrating with the internal team, KompasIT helped achieve key objectives by performing to the same expectations as full-time employees. Their strong onboarding methods, reliable deliverables, and responsiveness continue to strengthen the relationship.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}