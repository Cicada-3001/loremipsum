import React from 'react';

export default function Technologies() {
  const row1Items = [
    'Python', 'C#', 'Rails', 'Node.js', 'Java', 'React', '.NET',
    'AWS', 'Azure', 'Kubernetes', 'Docker', 'SQL', 'GraphQL'
  ];

  const row2Items = [
    'Golang', 'Vue.js', 'C++', 'JavaScript', 'Swift', 'Angular', 'PHP', 'Android', 'iOS',
    'Flutter', 'Kotlin', 'TypeScript', 'Django', 'Rust'
  ];

  // Duplicate items 4 times to ensure seamless infinite scroll on ultra-wide viewports
  const duplicatedRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const duplicatedRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <section className="py-24 bg-white overflow-hidden select-none relative">
      
      {/* Heading & Subheading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Yes, we cover the tech stack and AI coding tools you rely on<span className="text-orange-500">.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-normal leading-relaxed">
          Our team has expertise in 100+ technologies and programming languages,
          including the AI coding tools rewriting how software gets built.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="flex flex-col gap-10 md:gap-14 my-10 relative">
        
        {/* Absolute Overlays for Premium Edge Gradient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        {/* Row 1: Right to Left (scroll-left) */}
        <div className="relative w-full overflow-hidden flex">
          <div className="animate-scroll-left flex gap-16 md:gap-24 items-center whitespace-nowrap">
            {duplicatedRow1.map((tech, idx) => {
              // Highlight selected popular items like React and .NET for high-fidelity visual contrast
              const isHighlighted = tech === 'React' || tech === '.NET' || tech === 'Node.js';
              return (
                <span
                  key={`row1-${tech}-${idx}`}
                  className={`font-bold text-2xl md:text-4xl tracking-tight transition-colors duration-300 cursor-pointer ${
                    isHighlighted
                      ? 'text-orange-500 hover:text-orange-600'
                      : 'text-gray-300 hover:text-gray-400'
                  }`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left to Right (scroll-right) */}
        <div className="relative w-full overflow-hidden flex">
          <div className="animate-scroll-right flex gap-16 md:gap-24 items-center whitespace-nowrap">
            {duplicatedRow2.map((tech, idx) => {
              // Highlight selected popular items like iOS, Golang, and Swift
              const isHighlighted = tech === 'iOS' || tech === 'Golang' || tech === 'Swift';
              return (
                <span
                  key={`row2-${tech}-${idx}`}
                  className={`font-bold text-2xl md:text-4xl tracking-tight transition-colors duration-300 cursor-pointer ${
                    isHighlighted
                      ? 'text-orange-500 hover:text-orange-600'
                      : 'text-gray-300 hover:text-gray-400'
                  }`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

      </div>

      {/* Underlined Sub-link Trigger matching the design */}
      <div className="text-center mt-16">
        <a
          href="#full-repertoire"
          className="inline-flex items-center text-gray-900 font-extrabold text-lg hover:text-orange-500 transition-colors duration-200 border-b-2 border-gray-900 hover:border-orange-500 pb-1"
        >
          Our full repertoire <span className="ml-2">→</span>
        </a>
      </div>

    </section>
  );
}