'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Flight Planning & Scheduling',
    desc: 'Optimize flight operations with custom planning and scheduling solutions. Enjoy efficient planning, scheduling, and route optimization, which can help ensure timely arrivals and departures. Ultimately, with proper planning and smart scheduling, you can enhance overall airline performance and customer satisfaction.',
  },
  {
    title: 'Aircraft Maintenance Tracking',
    desc: 'Streamline your maintenance processes with our aircraft maintenance tracking solutions. Better monitor aircraft health, schedule maintenance tasks, and ensure compliance with regulatory standards. The result: optimized workflows, reduced downtime, and enhanced safety for airline crew members and passengers.',
  },
  {
    title: 'Airport Operations Management',
    desc: 'Improve airport efficiency with operations management software solutions. Streamline everyday processes like baggage handling, security checks, and gate assignments. Our solutions make your staff\'s jobs easier and travelers\' experiences smoother with fewer delays and baggage holdups.',
  },
  {
    title: 'Air Traffic Control',
    desc: 'Elevate air traffic control. Our air traffic control software enhances communication, provides real-time data on aircraft movements, and ensures safe and efficient air traffic management.',
  },
  {
    title: 'Airline Reservation Systems',
    desc: 'Improve booking processes with airline reservation software development. Custom software facilitates seamless ticket reservations, organizes passenger data, and smooths out the seat assignment process, contributing to a more customer-centric booking experience.',
  },
  {
    title: 'In-Flight Entertainment Systems',
    desc: 'Deliver an immersive passenger experience with in-flight entertainment systems. Our software solutions provide a range of entertainment options, including movies, music, and games. The goal is to enhance the overall travel experience for passengers, improving loyalty and, ultimately, airline performance.',
  },
  {
    title: 'Electronic Flight Bag (EFB) Apps',
    desc: 'Modernize cockpit operations with electronic flight bag apps. Our software provides pilots with digital tools for flight planning, navigation, and documentation, improving cockpit operations and reducing reliance on traditional paper-based methods.',
  },
  {
    title: 'Aviation Analytics & Reporting',
    desc: 'Harness the power of data. Our aviation analytics and reporting software provides an exhaustive look into key aviation metrics. These actionable insights empower your team to make data-driven decisions, optimize operations, and boost business success.',
  },
  {
    title: 'Cargo & Logistics Management',
    desc: 'Optimize cargo and logistics operations. Streamline processes like tracking, scheduling, and inventory management. Your team will be able to more efficiently handle cargo and logistics throughout the entire supply chain.',
  },
  {
    title: 'Passenger Self-Service Apps',
    desc: 'Improve the passenger experience with self-service apps. Our solutions enable travelers to check in on the go, access their boarding passes from their smartphones, and receive real-time updates. This ups the convenience factor and makes them have a smoother journey.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Tailored to Your Needs',
    desc: 'Opting for custom aviation software development offers your team a distinct advantage. Tailored solutions can more precisely align with your business\' specific challenges, workflows, and industry-specific requirements. Compared to off-the-shelf alternatives, tailored software solutions are designed to fit your particular needs and scale as they do.',
  },
  {
    num: '2',
    title: 'Enhanced Data Security',
    desc: 'Aviation businesses deal with passengers\' personal information and sensitive aircraft and airline data, and security is paramount. Custom solutions prioritize data protection with measures like encryption and access controls to safeguard sensitive information.',
  },
  {
    num: '3',
    title: 'Seamless Integration with Existing Systems',
    desc: 'Since you already have systems in place, tailored solutions are designed to work with them, not against them. Custom aviation software seamlessly integrates with your existing ecosystem. Whether developed for flight operations, maintenance tracking, or passenger services, this software ensures cohesive integration that enhances your overall system interoperability.',
  },
  {
    num: '4',
    title: 'Scalability',
    desc: 'Scale your business with custom aviation software. Bespoke solutions are designed to grow with your evolving needs over time. The software provides flexibility and adaptability to accommodate increasing data volumes, expanding operations, and emerging technological advancements and regulatory changes in the aviation industry.',
  },
  {
    num: '5',
    title: 'Ownership and Autonomy',
    desc: 'Choose custom aviation software for complete ownership and autonomy over your operations. Unlike off-the-shelf solutions, custom software grants you total control over the features and benefits you want. This empowers your team to make the most of the software, depending on your business requirements and preferences.',
  },
];

const accordions = [
  {
    title: 'Airlines',
    desc: 'Commercial airlines may leverage custom software such as booking and reservation systems, flight scheduling tools, maintenance tracking systems, and more to enhance customer service, operational efficiency, and safety.',
  },
  {
    title: 'Airports',
    desc: 'Tailored solutions assist airports with processes and operations like terminal operations, baggage handling, air traffic control, security management, and passenger information systems, helping improve security and the overall passenger experience.',
  },
  {
    title: 'Air Traffic Control (ATC) Organizations',
    desc: 'ATC organizations can use advanced, custom solutions for air traffic management, such as real-time tracking, predictive analytics for traffic flow management, and communication systems. These systems enhance safety and improve efficiency in airspace management.',
  },
  {
    title: 'Aircraft Manufacturers',
    desc: 'Manufacturers may use custom software for design, manufacturing, and testing purposes. It can assist them with simulation and modeling, quality control, production management, and maintenance scheduling.',
  },
  {
    title: 'Maintenance, Repair, and Overhaul (MRO) Providers',
    desc: 'MRO software can help streamline operations, track maintenance schedules, manage inventory, and ensure compliance with aviation standards.',
  },
];

export default function AviationPage() {
  const [formData, setFormData] = useState({ name: '', email: '', isSubmitted: false });
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeAnchor, setActiveAnchor] = useState('services');

  // Refs for tracking coordinates
  const servicesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const institutionsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormData({ ...formData, isSubmitted: true });
    }
  };

  const handleAnchorClick = (id: string, ref: React.RefObject<HTMLDivElement | null>) => {
    setActiveAnchor(id);
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Track active anchor based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      if (faqRef.current && scrollPos >= faqRef.current.offsetTop) {
        setActiveAnchor('faq');
      } else if (processRef.current && scrollPos >= processRef.current.offsetTop) {
        setActiveAnchor('process');
      } else if (institutionsRef.current && scrollPos >= institutionsRef.current.offsetTop) {
        setActiveAnchor('institutions');
      } else if (benefitsRef.current && scrollPos >= benefitsRef.current.offsetTop) {
        setActiveAnchor('benefits');
      } else if (servicesRef.current && scrollPos >= servicesRef.current.offsetTop) {
        setActiveAnchor('services');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 font-sans selection:bg-[#f25022] selection:text-white">

      {/* ── Hero & Breadcrumb ── */}
      <section className="pt-28 pb-16 border-b border-gray-200/60 bg-gradient-to-b from-[#f3f4f6] to-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 mb-8 select-none">
            <Link href="/" className="hover:text-[#f25022] transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              Home
            </Link>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-400">Industries</span>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-800 font-bold">Aviation</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#666666] uppercase tracking-widest block mb-3.5 select-none">
                AVIATION SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Solve complex challenges with custom aviation software development.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Meet Federal Aviation Administration requirements. Streamline operational workflows. Effectively manage crew members. Better assist passengers.
              </p>

              {/* Consultation trigger CTA */}
              <div className="flex items-center space-x-4 mb-10">
                <button
                  onClick={() => handleAnchorClick('services', servicesRef)}
                  className="bg-[#f25022] hover:bg-[#e0451a] text-white font-extrabold text-[13px] tracking-wider px-8 py-4 rounded-lg shadow-md shadow-orange-500/10 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Accelerate Your Roadmap
                </button>
              </div>

            </div>

            {/* Right Column visual */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div
                className="w-full h-full hover:scale-102 transition-transform duration-500"
                style={{ backgroundImage: 'url(/aviation.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>

          </div>

          {/* Trust Banner Panel */}
          <div className="mt-16 bg-[#515c66] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-gray-900/10 select-none">
            <div className="text-white text-sm font-bold tracking-tight">
              500+ companies rely on our <span className="text-white underline decoration-2 decoration-white underline-offset-4">top 1% tech talent</span>.
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { name: 'Google', text: 'Google' },
                { name: 'NextRoll', text: 'NextRoll' },
                { name: 'Pinterest', text: 'Pinterest' },
                { name: 'Adobe', text: 'Adobe' },
                { name: 'Square', text: 'Square' },
              ].map((logo) => (
                <div key={logo.name} className="flex items-center space-x-1 hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-[12px] font-black text-white/80 hover:text-white transition-colors">{logo.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Main Layout Grid: Content vs Sticky Sidebar Navigator ── */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Content Blocks */}
          <div className="lg:col-span-9 space-y-24">

            {/* Block 1: Services Grid (12 Columns) */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Aviation development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                Our software solutions enhance operational efficiency and optimize internal processes for the aviation industry. We serve many types of clients, from airlines and airports to aviation authorities, aircraft manufacturers, and more. Explore how our custom aviation software can elevate your team's performance and meet the diverse needs of your business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-b border-gray-150 pb-16">
                {services.map((svc) => (
                  <div key={svc.title} className="relative pl-7 group">
                    {/* Tick indicator */}
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-[#f25022] flex items-center justify-center text-[10px] text-[#f25022] font-bold select-none group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <h3 className="text-[16px] font-medium text-gray-800 mb-3 tracking-tight group-hover:text-[#f25022] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-gray-500 font-medium">
                      {svc.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Toggle center see all solutions link */}
              <div className="text-center pt-8">
                <button
                  onClick={() => handleAnchorClick('benefits', benefitsRef)}
                  className="text-gray-900 hover:text-[#f25022] text-xs font-black uppercase tracking-wider inline-flex items-center gap-1 select-none cursor-pointer"
                >
                  See all solutions
                  <span>↓</span>
                </button>
              </div>
            </div>

            {/* Case Study Banner */}
            <div className="bg-[#f9f9f9] border border-gray-150 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="md:w-1/4 flex-shrink-0 flex flex-col items-center justify-center border-r border-gray-200 pr-6">
                <span className="text-[10px] font-black text-[#f25022] tracking-widest uppercase mb-4 self-start">CASE STUDY</span>
                <div className="w-24 h-24 bg-gray-200 rounded-md mb-2 flex items-center justify-center">
                    {/* Rolls Royce Logo Placeholder */}
                    <span className="font-bold text-gray-500 text-sm text-center leading-tight">ROLLS<br/>R<br/>ROYCE</span>
                </div>
              </div>
              <div className="md:w-1/2 flex-grow">
                <p className="text-[13px] text-gray-600 leading-relaxed font-medium mb-4">
                  Rolls Royce turned to BairesDev to develop an efficient, user-friendly mobile app. A two-week discovery process with the Rolls Royce product owner identified a comprehensive list of functionalities, data streams, and displays required to meet their clients' expectations for a mobile SDS. Read the entire <Link href="#" className="underline decoration-gray-400">Rolls Royce case study</Link>.
                </p>
                <div className="flex gap-2 mb-4">
                    <span className="bg-[#515c66] text-white text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide">React</span>
                    <span className="bg-[#515c66] text-white text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide">Xamarin</span>
                </div>
                <Link href="#" className="text-[12px] font-bold text-gray-900 hover:text-[#f25022] inline-flex items-center gap-1">
                    More Case Studies →
                </Link>
              </div>
              <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-full h-32 rounded-xl overflow-hidden bg-gray-200" style={{ backgroundImage: 'url(/rollsroyce_office.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              </div>
            </div>

            {/* Block 2: Bespoke Benefits Grid */}
            <div ref={benefitsRef} id="benefits" className="scroll-mt-24">
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-12">
                Benefits of building bespoke solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:border-[#f25022] transition-colors duration-200">
                    <h4 className="text-[15px] font-medium text-gray-800 mb-3 leading-snug">{b.num}. {b.title}</h4>
                    <p className="text-[12.5px] leading-relaxed text-gray-500 font-medium">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Expandable Institutions Accordion */}
            <div ref={institutionsRef} id="institutions" className="scroll-mt-24">
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6 max-w-2xl">
                Which institutions benefit from custom aviation software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Any aviation business can benefit from custom software development. Tailored software solutions can automate business operations, improve passenger satisfaction, and cater to crew needs. Here are some examples:
              </p>

              <div className="space-y-3.5 max-w-[720px]">
                {accordions.map((acc, idx) => {
                  const isOpen = openAccordion === idx;
                  return (
                    <div key={acc.title} className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenAccordion(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-medium text-[15px] text-gray-800 select-none cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <span>{acc.title}</span>
                        <div className={`w-7 h-7 rounded-full border-2 border-[#f25022] flex items-center justify-center text-[10px] text-[#f25022] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-50' : ''}`}>
                          ▲
                        </div>
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-gray-100 text-[13.5px] text-gray-500 leading-relaxed font-medium animate-fadeIn">
                          {acc.desc}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Block 4: Process Delivery Steps */}
            <div ref={processRef} id="process" className="scroll-mt-24">
              <span className="text-[11px] font-black text-[#f25022] uppercase tracking-widest block mb-3.5 select-none">
                OUR METHODOLOGY
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Our process. Simple, seamless, streamlined.
              </h2>

              <div className="relative pl-8">
                {/* Connector line */}
                <div className="absolute left-[18px] top-[40px] bottom-[40px] w-[1px] border-l-2 border-dashed border-gray-300" />

                <div className="space-y-12">
                  {[
                    { step: '01', title: 'Operational Audit & Blueprinting', body: 'We assess your current aviation systems, flight operations, and regulatory constraints to map out a tailored architecture.' },
                    { step: '02', title: 'Agile Software Development', body: 'Our senior developer pods construct encrypted data channels, custom EFB modules, and real-time ATC dashboards using rapid agile sprints.' },
                    { step: '03', title: 'Testing & Continuous Deployment', body: 'We perform automated stress audits and rigorous QA checks to ensure FAA compliance and platform resilience under high data volumes.' },
                  ].map((p) => (
                    <div key={p.step} className="flex items-start gap-6 relative z-10">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-[#f25022] flex items-center justify-center text-[12px] font-black text-[#f25022] flex-shrink-0 shadow-sm">
                        {p.step}
                      </div>
                      <div>
                        <h4 className="text-[15.5px] font-extrabold text-gray-950 mb-1 leading-snug">{p.title}</h4>
                        <p className="text-[13px] text-gray-500 font-medium leading-relaxed max-w-[480px]">{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Block 5: FAQs */}
            <div ref={faqRef} id="faq" className="scroll-mt-24">
              <span className="text-[11px] font-black text-[#f25022] uppercase tracking-widest block mb-3.5 select-none">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-4 divide-y divide-gray-100">
                {[
                  { q: 'Can custom aviation tools integrate with legacy airline reservation systems?', a: 'Yes. We construct robust APIs and middleware that securely connect modern mobile applications and digital platforms to legacy reservation systems without operational downtime.' },
                  { q: 'How does your software ensure compliance with FAA and international aviation standards?', a: 'Our development processes are deeply aligned with global aviation regulations. We implement rigorous automated checks, strict audit trails, and data encryption to ensure continuous compliance.' },
                  { q: 'Do you provide ongoing support for mission-critical ATC systems?', a: 'Absolutely. We offer 24/7 continuous monitoring, automated backups, and dedicated maintenance teams to ensure zero-downtime performance for air traffic control networks.' },
                ].map((f) => (
                  <div key={f.q} className="pt-4 first:pt-0">
                    <h4 className="text-[14px] font-extrabold text-gray-950 mb-2 leading-snug">{f.q}</h4>
                    <p className="text-[12.5px] text-gray-500 font-medium leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar Navigator Widget */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 self-start space-y-6">

            {/* Navigation links */}
            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-5 shadow-sm text-white">
              <span className="text-[11px] font-black text-white/50 uppercase tracking-widest block mb-4 select-none flex justify-between items-center">
                NAVIGATE
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
              <ul className="space-y-3.5">
                {[
                  { id: 'services', label: 'Aviation development services we provide', ref: servicesRef },
                  { id: 'benefits', label: 'Benefits of building bespoke solutions', ref: benefitsRef },
                  { id: 'institutions', label: 'Which institutions benefit from custom aviation software development?', ref: institutionsRef },
                  { id: 'process', label: 'Our process. Simple, seamless, streamlined.', ref: processRef },
                  { id: 'faq', label: 'Frequently Asked Questions (FAQ)', ref: faqRef },
                ].map((item) => {
                  const isActive = activeAnchor === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleAnchorClick(item.id, item.ref)}
                        className={`text-[12px] font-medium text-left select-none cursor-pointer hover:text-white transition-colors leading-snug ${
                          isActive ? 'text-[#f25022] font-bold border-l-[3px] border-l-[#f25022] pl-2' : 'text-gray-400 pl-[11px] border-l-[3px] border-l-transparent'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Sticky Orange Card */}
            <div
              onClick={() => handleAnchorClick('services', servicesRef)}
              className="bg-[#f25022] rounded-2xl p-6 text-white cursor-pointer shadow-lg shadow-orange-500/10 hover:bg-[#e0451a] transition-all duration-300 group flex items-center justify-between"
            >
              <h4 className="text-[15px] font-bold leading-snug tracking-tight max-w-[140px]">
                Accelerate Your Software Development
              </h4>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>

            {/* Inc 5000 Badges */}
            <div className="bg-[#3b434a] rounded-2xl p-6 text-center text-white space-y-6">
                <div>
                    <div className="text-[#f25022] text-3xl font-serif leading-none">"</div>
                    <p className="text-[12px] font-medium leading-relaxed mb-4">How Businesses Can Overcome the Software Development Shortage</p>
                    <div className="font-extrabold text-xl">Inc.<br/>5000</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                    <div className="text-[#f25022] text-3xl font-serif leading-none">"</div>
                    <p className="text-[12px] font-medium leading-relaxed mb-4">BairesDev Ranked as one of the Fastest-Growing Companies in the US by Inc. 5000</p>
                    <div className="font-bold text-lg italic tracking-widest">Nasdaq</div>
                </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
