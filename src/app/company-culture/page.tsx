'use client';

import Link from 'next/link';

export default function CompanyCulturePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#0078d4] selection:text-white font-sans">
      
      {/* ── Hero Section ── */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-50/50 to-transparent -z-10" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 mb-10 select-none">
            <Link href="/" className="hover:text-[#0078d4] transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              Home
            </Link>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-800 font-bold">Company Culture</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4 select-none">
                COMPANY CULTURE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-[1.1] tracking-tight mb-6">
                Built on culture,<br />
                <span className="text-orange-600">Driven by talent.</span>
              </h1>
              <p className="text-lg md:text-[20px] leading-relaxed text-gray-600 font-medium">
                At KompasIT, how we work is just as important as what we build.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 group">
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                style={{ backgroundImage: 'url(/bi-developers.png)' }}
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* ── What we believe in ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Title & Subtitle */}
            <div className="lg:col-span-4 flex flex-col justify-start pt-4">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-950 tracking-tight mb-6 flex items-baseline gap-1">
                What we believe in<span className="text-orange-600">.</span>
              </h2>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium max-w-[320px]">
                These principles shape our decisions, spark our ambition, and connect us across every role and region.
              </p>
            </div>

            {/* Right Column: 2x2 Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Card 1: Remote Work */}
                <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 className="text-[19px] font-extrabold text-gray-950 mb-4 leading-snug tracking-tight">
                    Remote work is not just how we work—it&apos;s why we thrive.
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-500 font-medium mb-8 flex-grow">
                    Our remote-first culture was designed to bring together the most talented people in each field, regardless of location. A mix of cultures, backgrounds, and experiences makes us stronger and gives people from capital cities and small towns equal access to global impact roles. At KompasIT, you collaborate asynchronously to excel across time zones and are encouraged to move, explore, and work from wherever you&apos;re at your best.
                  </p>
                  <div className="absolute bottom-6 right-6 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                </div>

                {/* Card 2: Set no limits */}
                <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                  </div>
                  <h3 className="text-[19px] font-extrabold text-gray-950 mb-4 leading-snug tracking-tight">
                    To reach further,<br/>we set no limits.
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-500 font-medium mb-8 flex-grow">
                    We don&apos;t settle—aiming higher is what sets us apart. You&apos;re trusted to take ownership, encouraged to push boundaries, and equipped with the tools and feedback to sharpen our expertise. That&apos;s how you become the experts others turn to and the kind of professional you aspire to be.
                  </p>
                  <div className="absolute bottom-6 right-6 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                </div>

                {/* Card 3: Grow and win together */}
                <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg>
                  </div>
                  <h3 className="text-[19px] font-extrabold text-gray-950 mb-4 leading-snug tracking-tight">
                    We grow and<br/>win together.
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-500 font-medium mb-8 flex-grow">
                    Collaboration is at the heart of how we work, and it&apos;s a big part of why people thrive here. Teams work across roles, and time zones always aligned around shared goals. Everyone&apos;s willing to dive in and solve problems together. Here you won&apos;t find silos or egos, just real teamwork and shared wins.
                  </p>
                  <div className="absolute bottom-6 right-6 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                </div>

                {/* Card 4: Thinking ahead */}
                <div className="bg-white rounded-2xl p-8 border border-yellow-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h3 className="text-[19px] font-extrabold text-gray-950 mb-4 leading-snug tracking-tight">
                    Thinking ahead<br/>drives our success.
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-500 font-medium mb-8 flex-grow">
                    Every challenge is an opportunity to create something better. We move quickly, anticipate challenges, and find a way forward. This is how we make a difference and earn our clients&apos; trust. You&apos;re not limited to delivering; you get to question and influence what comes next. Your ideas influence what we build and how people experience it.
                  </p>
                  <div className="absolute bottom-6 right-6 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── What we value ── */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-950 tracking-tight mb-6 flex items-baseline gap-1">
                What we value<span className="text-orange-600">.</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium max-w-[340px]">
                Our values don&apos;t describe who we hope to be—they reflect who we already are. They bring our beliefs into motion and show up in how we get things done. They&apos;re what makes our team world-class and what brings success for our clients and ourselves.
              </p>
            </div>

            {/* Right Column: Values Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                {/* Value Card 1 */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/bi-developers.png)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </div>
                  <h3 className="absolute bottom-5 left-5 text-white font-extrabold text-[17px] tracking-tight pr-4">
                    One Team,<br />One Mission
                  </h3>
                </div>

                {/* Value Card 2 */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/case_logistics.png)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/90 via-[#1e1b4b]/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </div>
                  <h3 className="absolute bottom-5 left-5 text-white font-extrabold text-[17px] tracking-tight">
                    Speed is King
                  </h3>
                </div>

                {/* Value Card 3 */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/kenyan-devs.png)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </div>
                  <h3 className="absolute bottom-5 left-5 text-white font-extrabold text-[17px] tracking-tight">
                    Find a Way
                  </h3>
                </div>

                {/* Value Card 4 */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/ai-developers.png)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </div>
                  <h3 className="absolute bottom-5 left-5 text-white font-extrabold text-[17px] tracking-tight">
                    Own it &<br/>Learn it
                  </h3>
                </div>

                {/* Value Card 5 */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/case_media.png)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </div>
                  <h3 className="absolute bottom-5 left-5 text-white font-extrabold text-[17px] tracking-tight">
                    No Surprises,<br/>No Silos
                  </h3>
                </div>

                {/* Value Card 6 */}
                <div className="relative h-[240px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/real_estate_hero.png)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                  </div>
                  <h3 className="absolute bottom-5 left-5 text-white font-extrabold text-[17px] tracking-tight">
                    Raise the Bar
                  </h3>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-24 bg-[#232b33]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center md:text-right flex flex-col md:items-end">
              <div className="flex -space-x-3 mb-6 justify-center md:justify-end">
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-[#232b33] overflow-hidden"><img src="/kenyan-devs.png" className="w-full h-full object-cover"/></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-[#232b33] overflow-hidden"><img src="/ai-developers.png" className="w-full h-full object-cover"/></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-[#232b33] overflow-hidden"><img src="/bi-developers.png" className="w-full h-full object-cover"/></div>
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-[#232b33] overflow-hidden"><img src="/bi_healthcare.png" className="w-full h-full object-cover"/></div>
              </div>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-white leading-tight tracking-tight mb-4 max-w-[300px]">
                It all comes together in what we do
              </h2>
              <p className="text-[13px] text-gray-300 font-medium leading-relaxed max-w-[340px]">
                Our beliefs are our compass. Our values are our action plan. Together, they create a workplace where we&apos;re challenged, supported, and inspired to do our best work.
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl p-10 shadow-xl max-w-[380px] mx-auto md:mx-0">
              <h3 className="text-[22px] font-extrabold text-gray-950 mb-3 tracking-tight text-center">
                See yourself here?
              </h3>
              <p className="text-[13.5px] text-gray-600 font-medium leading-relaxed mb-8 text-center px-4">
                If this feels like a fit, don&apos;t wait. Let&apos;s find you your next career opportunity today!
              </p>
              <button className="w-full bg-[#0078d4] hover:bg-[#005a9e] text-white font-bold text-[14px] py-4 rounded-xl transition-colors shadow-md shadow-blue-500/20 active:scale-[0.98]">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
