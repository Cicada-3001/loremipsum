'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'General-0': true, // Open the first item by default as shown in the screenshot
  });

  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categories[categoryIndex].title}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const categories: FAQCategory[] = [
    {
      title: 'General',
      items: [
        {
          question: 'What does KompasIT do?',
          answer: 'KompasIT is a premier software engineering and solutions delivery firm. We design, build, ship, and optimize high-complexity software products for leading global enterprises. Utilizing advanced AI-augmented development tools, our in-house senior engineers cover the full product lifecycle: from initial discovery, strategy, and UX/UI design to custom software engineering, AI/ML systems integration, cloud infrastructure, DevOps, and continuous product evolution across 130+ industries.'
        },
        {
          question: 'How does KompasIT deliver software solutions?',
          answer: 'We deliver digital products through highly aligned, expert-led engineering models. Unlike talent brokers or recruitment networks, our engineers are full-time KompasIT employees who operate under our strict quality assurance guidelines and engineering culture. We can launch dedicated co-development pods or full project squads tailored to your system architecture in as little as 2 to 4 weeks.'
        },
        {
          question: 'Why do companies partner with KompasIT rather than standard outsourcing agencies?',
          answer: "KompasIT takes complete technical ownership and guarantees the caliber of the final product. We don't just supply staffing; we do the actual engineering. By keeping our developers working in timezone-aligned schedules, we maintain high-velocity real-time collaboration. Furthermore, our teams are fully trained in modern AI-assisted workflows to double development speed while maintaining elite security and code standards."
        },
        {
          question: 'What custom engineering services does KompasIT provide?',
          answer: 'We provide comprehensive, end-to-end product development. This includes custom web and mobile applications, high-throughput backend APIs, enterprise ERP and CRM systems, AI/ML integrations, cloud solutions, and complete cybersecurity strategies.'
        }
      ]
    },
    {
      title: 'Industries',
      items: [
        {
          question: 'What industries does KompasIT work with?',
          answer: 'We have delivered software solutions across 130+ industries, including fintech, retail, ecommerce, logistics, education, media, insurance, healthcare, aviation, and manufacturing. We’ve also completed hundreds of projects in highly regulated sectors like banking and energy. Each project is staffed with in-house engineers experienced in the technologies and compliance standards required for that industry, so teams ramp up faster and execute with less risk.'
        }
      ]
    },
    {
      title: 'Engagement Models',
      items: [
        {
          question: 'What are your partnership models (Co-Development vs. Dedicated Units vs. End-to-End Delivery)?',
          answer: 'Co-Development Partnerships embed a specialized pod of our senior engineers into your existing system workflows, collaborating in real-time under a shared codebase. Dedicated Engineering Units assemble a self-contained, cross-functional engineering team (comprising architects, developers, QA specialists, and PMs) to take full operational ownership of a specific product stream or subsystem. End-to-End Product Engineering takes complete responsibility for your product from the ground up—managing discovery, systems design, core development, automated QA, and launch under rigorous milestones and delivery guarantees.'
        }
      ]
    },
    {
      title: 'Technologies / Solutions',
      items: [
        {
          question: 'What engineering roles do you have in-house?',
          answer: 'Our full-time engineering rosters cover all key software disciplines: Frontend, Backend, and Full-Stack Developers, Mobile Engineers, DevOps and Cloud Architects, Data Engineers, AI/ML Experts, QA Automation Specialists, Solution Architects, UI/UX Designers, and Product Delivery Managers.'
        },
        {
          question: 'How do your engineering teams integrate with our workflows?',
          answer: 'We align seamlessly with your internal development standards. Our teams adapt to your preferred environment (Git, Jira, Slack, CI/CD pipelines) and practice Agile/Scrum methodologies to ensure complete transparency, daily velocity reports, and no friction in daily collaborations.'
        },
        {
          question: 'How do you ensure elite code and engineering quality?',
          answer: 'We maintain a rigorous in-house engineering standard. Every project undergoes regular peer architecture reviews, automated test coverage pipelines, and strict performance and security checks. Furthermore, we continuously upskill our developers in advanced AI coding tools to optimize productivity, deliver cleaner refactored code, and maintain robust systems.'
        },
        {
          question: 'What are the financial advantages of partnering with KompasIT?',
          answer: 'Partnering with KompasIT reduces capital risk and overhead. Instead of carrying the costs of recruitment, office space, hardware, training, and employee benefits, you gain an elite, high-performing product team on a flexible model. You pay a transparent, all-inclusive rate for real product progress.'
        }
      ]
    }
  ];

  // Filtering based on search query
  const filteredCategories = categories.map(category => {
    const matchedItems = category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      items: matchedItems
    };
  }).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-500 selection:text-white font-sans">
      
      {/* ── Hero / Header Section ── */}
      <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-[#f8f9fa] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 mb-8 select-none">
            <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              Home
            </Link>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-800 font-bold">FAQ</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading */}
            <div className="lg:col-span-7 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-950 leading-[1.1] tracking-tight mb-8">
                Frequently Asked<br />Questions
              </h1>
              
              {/* Interactive Search Bar */}
              <div className="relative max-w-lg shadow-sm">
                <input
                  type="text"
                  placeholder="Search questions or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-250 rounded-xl px-5 py-4 pl-12 text-[15px] font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Right Column: Hero Graphic matching the BairesDev screenshot structure */}
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative h-[340px] w-full rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50">
                {/* Visual crop cut layout with BairesDev collaborative style */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: 'url(/bi-developers.png)',
                    clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
                  }}
                />
                {/* Backplate background styling to fill the clip path */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 to-transparent -z-10 rounded-2xl" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── FAQ Interactive Content ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 font-medium">No questions found matching your search. Please try another query.</p>
            </div>
          ) : (
            filteredCategories.map((category, catIdx) => {
              // Find the original index from the main categories list to maintain correct keys
              const originalCatIdx = categories.findIndex(c => c.title === category.title);

              return (
                <div key={category.title} className="mb-16 last:mb-0">
                  {/* Category Title */}
                  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mb-8 tracking-tight">
                    {category.title}
                  </h2>

                  {/* Accordion Questions List */}
                  <div className="border-t border-gray-150">
                    {category.items.map((item, itemIdx) => {
                      const itemKey = `${category.title}-${itemIdx}`;
                      const isOpen = !!openItems[itemKey];

                      return (
                        <div key={item.question} className="border-b border-gray-150 py-6 transition-all duration-200">
                          
                          {/* Accordion Header */}
                          <button
                            onClick={() => toggleItem(originalCatIdx, itemIdx)}
                            className="w-full flex items-center justify-between text-left group select-none cursor-pointer"
                          >
                            <span className="text-[17px] md:text-[19px] font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug pr-4">
                              {item.question}
                            </span>
                            
                            {/* Orange circle with chevron icon matching exactly BairesDev theme */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                              isOpen ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-600 group-hover:bg-orange-100'
                            }`}>
                              <svg
                                className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                              </svg>
                            </div>
                          </button>

                          {/* Accordion Content */}
                          <div className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0'
                          }`}>
                            <div className="overflow-hidden">
                              <p className="text-[14.5px] md:text-[15.5px] leading-relaxed text-gray-600 font-medium">
                                {item.answer}
                              </p>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-20 bg-[#f8f9fa] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Still have questions?
          </h2>
          <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-8 max-w-xl mx-auto">
            Our technology consultants are ready to assist you with tailored insights, solution architectures, and team-building strategies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold text-[14px] px-8 py-4 rounded-xl transition-all shadow-md shadow-orange-500/10 active:scale-[0.98]"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/join-us"
              className="w-full sm:w-auto bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-bold text-[14px] px-8 py-4 rounded-xl transition-all active:scale-[0.98]"
            >
              Careers FAQ
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
