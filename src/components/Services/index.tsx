// src/components/Services/index.tsx
export default function Services() {
  const cards = [
    {
      title: "Front-End Development",
      description: "Build modern frontends designed for performance, accessibility, and scale.",
      pills: ["Front-End", "Web Development", "React", "Angular"],
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#d94f34] flex items-center justify-center text-white mb-6 shadow-sm">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <rect x="2" y="4" width="20" height="13" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 20h8M12 17v3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-2 2 2 2m8-4l2 2-2 2" />
          </svg>
        </div>
      ),
    },
    {
      title: "Back-End Development",
      description: "Develop secure, scalable backends that perform reliably under load.",
      pills: ["Back-End", "Database", "Go", ".NET", "Java", "Node.js"],
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#222c3c] flex items-center justify-center text-white mb-6 shadow-sm">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4a1 1 0 011-1h14a1 1 0 011 1v3M4 7h16M4 7c0 1.2 3.6 2 8 2s8-.8 8-2M4 13v-3M20 13v-3M4 13c0 1.2 3.6 2 8 2s8-.8 8-2M4 19v-3M20 19v-3M4 19c0 1.2 3.6 2 8 2s8-.8 8-2" />
            <circle cx="12" cy="13" r="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      title: "AI and Machine Learning",
      description: "Deploy trustworthy AI solutions that create real business value.",
      pills: ["AI", "Machine Learning", "Data Science", "LLMs", "Generative AI", "Python"],
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#144ebb] flex items-center justify-center text-white mb-6 shadow-sm">
          <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5zM19 15l1 3.5 3.5 1-3.5 1-1 3.5-1-3.5-3.5-1 3.5-1zM6 14l.75 2.75L9.5 17.5l-2.75.75L6 21l-.75-2.75L2.5 17.5l2.75-.75z" />
          </svg>
        </div>
      ),
    },
    {
      title: "Mobile Development",
      description: "Launch iOS and Android apps with smooth performance, stable sessions, and secure data handling.",
      pills: ["Mobile Applications", "iOS", "Android"],
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#1d63d8] flex items-center justify-center text-white mb-6 shadow-sm">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <rect x="6" y="2" width="12" height="20" rx="2" />
            <circle cx="12" cy="18" r="1" fill="currentColor" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7l-1.5 1.5L9 10m6-3l1.5 1.5L15 10" />
          </svg>
        </div>
      ),
    },
    {
      title: "UX/UI Design",
      description: "Deliver product designs with clear user flows, reusable components, and accessible layouts.",
      pills: ["UX Design", "UI Design"],
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#309193] flex items-center justify-center text-white mb-6 shadow-sm">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18M3 9h18M3 15h6" />
          </svg>
        </div>
      ),
    },
    {
      title: "QA and Testing",
      description: "Ship release-ready software with manual and automated testing that validate core flows end to end.",
      pills: ["Quality Assurance"],
      icon: (
        <div className="w-11 h-11 rounded-lg bg-[#1f8d55] flex items-center justify-center text-white mb-6 shadow-sm">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7M5 19l4 4L22 9" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-1 select-none">
              Get full-stack coverage.
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-gray-900 leading-[1.1] tracking-tight select-none">
              Unblock execution across the SDLC<span className="text-rose-500 font-black">.</span>
            </h2>
          </div>
          <div className="text-right">
            <a href="#" className="inline-flex items-center space-x-2 text-gray-900 font-bold group border-b-2 border-gray-900 pb-1.5 transition-all duration-200 hover:text-blue-600 hover:border-blue-600 select-none">
              <span className="text-[15px] tracking-tight">Everything we do</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#f8fafc] p-8 md:p-9 rounded-[20px] flex flex-col justify-between items-start transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:scale-[1.01] min-h-[360px]"
            >
              <div className="w-full text-left">
                {card.icon}
                <h3 className="text-xl md:text-[22px] font-bold text-gray-900 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[14.5px] text-gray-500 leading-relaxed font-normal mb-8 max-w-sm">
                  {card.description}
                </p>
              </div>
              
              {/* Tech Pills Container */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.pills.map((pill, pIdx) => (
                  <span 
                    key={pIdx} 
                    className="rounded-lg border border-[#0078d4]/30 text-[#0078d4] bg-white px-3 py-1.5 text-xs font-semibold hover:border-[#0078d4] transition-colors duration-200 cursor-default select-none"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}