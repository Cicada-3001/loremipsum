'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Connected Vehicle Software Development',
    desc: 'Our connected vehicle software allows real-time communication between vehicles and infrastructure for data collection, remote diagnostics, and improved driver safety. Features like vehicle-to-everything (V2X) connectivity are the foundation for safer, more intelligent driving and meet high safety standards in automotive software engineering.',
  },
  {
    title: 'Fleet Management System Development',
    desc: 'Optimize your fleet with custom software to track vehicle health, schedule maintenance, and lower operational costs. Our fleet management systems include predictive maintenance, fuel tracking, route optimization, and real-time monitoring for efficiency gains for automotive companies of all sizes.',
  },
  {
    title: 'Automotive IoT and Telematics',
    desc: 'Our IoT and telematics solutions provide precise data on vehicle performance, driver behavior, and environmental factors through custom dashboards and real-time alerts. These tools support the software development process, enabling automotive companies to make informed decisions about safety, maintenance, and operational improvements.',
  },
  {
    title: 'ADAS (Advanced Driver Assistance Systems) Development',
    desc: 'Our ADAS development services create safer driving environments by processing real-time sensor data for lane-keeping, collision warnings, and automated braking. These ADAS solutions are engineered to increase driver awareness and reduce accident risks, meeting strict standards in automotive software engineering.',
  },
  {
    title: 'Automotive ERP and Supply Chain Solutions',
    desc: 'Improve your supply chain with our automotive ERP software, designed to manage procurement, inventory, production, and logistics in one platform. By centralizing all processes, these ERP solutions give automotive companies a complete view of their operations for better efficiency, cost savings, and industry compliance.',
  },
  {
    title: 'Infotainment System Development',
    desc: 'Our custom infotainment systems create amazing in-vehicle experiences. According to the latest automotive software development trends, our solutions include media, navigation, voice control, and connectivity options to increase driver satisfaction and brand differentiation.',
  },
  {
    title: 'Telematics and Fleet Management Solutions',
    desc: 'Our telematics software provides insights into driver behavior, fuel consumption, and vehicle location to help fleet managers plan and guarantee safety. Fleet managers also get tools to track, schedule maintenance, and manage costs to optimize fleet operations across the automotive industry.',
  },
  {
    title: 'Predictive Maintenance Software',
    desc: 'Our predictive maintenance software uses real-time vehicle data to forecast service needs for continuous operation. Monitoring conditions like engine health and tire wear helps automotive businesses avoid breakdowns, improve maintenance schedules, and reduce downtime.',
  },
  {
    title: 'Automotive E-commerce and Dealership Platforms',
    desc: 'We develop e-commerce platforms for dealerships and parts suppliers to manage inventory, process orders, and improve customer experience. These platforms optimize vehicle and parts sales, enhancing engagement and operational efficiency in automotive software development.',
  },
  {
    title: 'Remote Vehicle Monitoring Systems',
    desc: 'Our remote monitoring software provides real-time vehicle status, performance, and security data for consumer and commercial use. These solutions give drivers and managers the information they need to operate vehicles securely and efficiently.',
  },
  {
    title: 'ADAS Simulation and Testing Software',
    desc: 'Our ADAS simulation tools allow developers to test features like collision warnings, lane-keeping, and adaptive cruise control in a controlled virtual environment. This software helps automotive companies to validate safety features for functional reliability.',
  },
  {
    title: 'Supply Chain and Inventory Management Solutions',
    desc: 'Our custom inventory and supply chain software lets automotive manufacturers track components, manage logistics, and monitor inventory in real time. These solutions reduce delays, improve visibility, and address complex supply chain needs within the software development process.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Tailored to Your Needs',
    desc: 'Choosing a customized automotive software solution ensures an aligned fit for your industry-specific challenges and workflows. These solutions are carefully crafted to address the individual requirements of the automotive sector, providing the most precise solution for your business.',
  },
  {
    num: '2',
    title: 'Seamless Integration',
    desc: "Why fix what's not broken? Custom automotive software seamlessly integrates with your existing systems, optimizing the workflows you already have in place and ensuring a smooth transition for your team. This enhances operational efficiency by connecting various processes, facilitating data flow, and streamlining communication.",
  },
  {
    num: '3',
    title: 'Scalability',
    desc: 'Embrace growth with scalable automotive software solutions. Customized systems are designed to adapt to the evolving needs of your business and the automotive sector. As your operations expand, our software scales effortlessly, too. It can accommodate increased data, users, and functionalities.',
  },
  {
    num: '4',
    title: 'Enhanced Data Insights',
    desc: 'Unlock the power of data—insights into your operations, engine telemetry, supply chain performance, and more. Customized solutions provide comprehensive analytics tools, empowering the decision-makers to optimize processes and make more strategic business decisions.',
  },
  {
    num: '5',
    title: 'Alignment with Business Goals',
    desc: 'Ensure your software aligns seamlessly with your bigger-picture business objectives. Customized automotive solutions are crafted with a keen focus on meeting your specific short- and long-term goals, whatever they are.',
  },
];

const accordions = [
  {
    title: 'Automotive Manufacturers',
    desc: 'Custom software supports automotive manufacturers by optimizing production processes, improving the supply chain, and implementing strict quality control systems. From engine control software to advanced automation, these solutions help manufacturers achieve high operational efficiency and meet industry standards.',
  },
  {
    title: 'Fleet Management Companies',
    desc: 'Custom car software provides fleet managers with tools to monitor vehicle health, track driver behavior, and schedule timely maintenance. These features improve vehicle uptime, reduce operational costs, and confirm fleet efficiency, which is critical in a competitive market.',
  },
  {
    title: 'Autonomous Vehicle Developers',
    desc: 'Autonomous vehicle developers rely on specialized software for processing sensor data, real-time navigation, and safe vehicle operations. Custom software systems provide the framework for handling vast amounts of data so that autonomous cars can operate smoothly and safely and meet strict functional safety requirements.',
  },
  {
    title: 'Automotive Suppliers',
    desc: 'Suppliers benefit from custom software that manages inventory, schedules production, and optimizes logistics. These systems help suppliers meet the demanding timelines of automotive manufacturers, integrate with their customers\' production processes, and deliver parts on time and in full.',
  },
  {
    title: 'Car Dealerships and Retailers',
    desc: 'Dealerships leverage custom CRM and dealer management platforms to manage vehicle inventories, streamline sales workflows, coordinate parts orders, and deliver a frictionless digital buyer experience.',
  },
  {
    title: 'Regulatory and Insurance Providers',
    desc: 'Bespoke data analytics and compliance systems enable insurance companies and regulators to analyze telematics telemetry, audit vehicle crash data, and enforce emission standards efficiently.',
  },
];

export default function AutomotivePage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeAnchor, setActiveAnchor] = useState('services');

  // Refs for tracking coordinates
  const servicesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const institutionsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 font-sans selection:bg-orange-600 selection:text-white">

      {/* ── Hero & Breadcrumb ── */}
      <section className="pt-28 pb-16 border-b border-gray-200/60 bg-gradient-to-b from-[#f3f4f6] to-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 mb-8 select-none">
            <Link href="/" className="hover:text-orange-600 transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              Home
            </Link>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-400">Industries</span>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-800 font-bold">Automotive</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#666666] uppercase tracking-widest block mb-3.5 select-none">
                AUTOMOTIVE SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Create customized and scalable Automotive software.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Build scalable, future-proof automotive software. We develop solutions for the automotive industry—from smart vehicle integrations to advanced logistics—so your team can focus on driving mobility forward.
              </p>

              {/* Consultation trigger CTA */}
              <div className="flex items-center space-x-4 mb-10">
                <button
                  onClick={() => handleAnchorClick('services', servicesRef)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-[13px] tracking-wider px-8 py-4 rounded-lg shadow-md shadow-orange-500/10 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Accelerate Your Roadmap
                </button>
              </div>

            </div>

            {/* Right Column visual with dark red metallic factory visual to match screenshots */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative bg-slate-900 flex flex-col justify-end p-8">
              {/* Complex red neon factory overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-650/40 via-slate-900 to-slate-950 opacity-90 z-0" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ea580c,transparent_45%)] opacity-20 z-0" />
              {/* Visual geometric grids representing robotics blueprints */}
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '15px 15px'}} />
              
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3.5 py-1 text-white text-[11px] font-bold border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  Robotic Integration Active
                </div>
                <h3 className="text-white text-xl font-black leading-tight tracking-tight">
                  Automated Assembly & Safety
                </h3>
                <p className="text-white/60 text-[11.5px] leading-relaxed max-w-[280px]">
                  Custom CAN bus monitoring, high-efficiency ERP, and ISO-standard ADAS loop simulation.
                </p>
              </div>
            </div>

          </div>

          {/* Trust Banner Panel */}
          <div className="mt-16 bg-[#515c66] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-gray-900/10 select-none">
            <div className="text-white text-sm font-bold tracking-tight">
              Endorsed by engineers. <span className="text-white underline decoration-2 decoration-white underline-offset-4">Trusted by CTOs</span>.
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {['Google', 'NextRoll', 'Pinterest', 'Adobe', 'Square'].map((logo) => (
                <div key={logo} className="flex items-center space-x-1 hover:scale-105 transition-transform cursor-pointer">
                  <span className="text-[12px] font-black text-white/80 hover:text-white transition-colors">{logo}</span>
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

            {/* Block 1: Services Grid */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Automotive development services we offer
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                From in-vehicle infotainment systems to fleet management tools, we design and develop custom automotive software for the unique needs of automotive companies. Our services tackle key challenges to improve safety, efficiency, and technical capabilities. Here&apos;s how we support success in automotive software development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-b border-gray-150 pb-16">
                {services.map((svc) => (
                  <div key={svc.title} className="relative pl-7 group">
                    {/* Tick indicator */}
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-orange-600 flex items-center justify-center text-[10px] text-orange-600 font-bold select-none group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <h3 className="text-[16px] font-medium text-gray-800 mb-3 tracking-tight group-hover:text-orange-600 transition-colors">
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
                  className="text-gray-900 hover:text-orange-600 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1 select-none cursor-pointer"
                >
                  See all solutions
                  <span>↓</span>
                </button>
              </div>
            </div>

            {/* Case Study Banner */}
            <div className="bg-[#f9f9f9] border border-gray-150 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
              <div className="md:w-1/4 flex-shrink-0 flex flex-col items-center justify-center border-r border-gray-200 pr-6">
                <span className="text-[10px] font-black text-orange-600 tracking-widest uppercase mb-4 self-start">CASE STUDY</span>
                <div className="w-24 h-24 bg-gray-200 rounded-md mb-2 flex items-center justify-center">
                    <span className="font-bold text-gray-500 text-sm text-center leading-tight">ROLLS<br/>R<br/>ROYCE</span>
                </div>
              </div>
              <div className="md:w-1/2 flex-grow">
                <p className="text-[13px] text-gray-600 leading-relaxed font-medium mb-4">
                  Rolls Royce turned to KompasIT to develop an efficient, user-friendly mobile app. A two-week discovery process with the Rolls Royce product owner identified a comprehensive list of functionalities, data streams, and displays required to meet their clients&apos; expectations for a mobile SDS. Read the entire <Link href="#" className="underline decoration-gray-400">Rolls Royce case study</Link>.
                </p>
                <div className="flex gap-2 mb-4">
                    <span className="bg-[#515c66] text-white text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide">React</span>
                    <span className="bg-[#515c66] text-white text-[11px] px-3 py-1 rounded-full font-semibold tracking-wide">Xamarin</span>
                </div>
                <Link href="#" className="text-[12px] font-bold text-gray-900 hover:text-orange-600 inline-flex items-center gap-1">
                    More Case Studies →
                </Link>
              </div>
              <div className="md:w-1/4 flex-shrink-0 relative bg-slate-950 rounded-xl overflow-hidden h-32 flex flex-col justify-end p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 to-red-900/60 opacity-80" />
                <div className="relative z-10 text-white font-extrabold text-[11px] uppercase tracking-wider text-center">Diagnostics Interface</div>
              </div>
            </div>

            {/* Block 2: Bespoke Benefits Grid */}
            <div ref={benefitsRef} id="benefits" className="scroll-mt-24">
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-12">
                Benefits of building bespoke solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:border-orange-600 transition-colors duration-200">
                    <h4 className="text-[15px] font-medium text-gray-800 mb-3 leading-snug">{b.num}. {b.title}</h4>
                    <p className="text-[12.5px] leading-relaxed text-gray-500 font-medium">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Expandable Institutions Accordion */}
            <div ref={institutionsRef} id="institutions" className="scroll-mt-24">
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6 max-w-2xl">
                Which institutions benefit from custom Automotive software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Custom automotive software drives efficiency, innovation, and safety across the automotive software industry. The following organizations benefit most from custom software systems:
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
                        <div className={`w-7 h-7 rounded-full border-2 border-orange-600 flex items-center justify-center text-[10px] text-orange-600 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-50' : ''}`}>
                          ▲
                        </div>
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-0 border-t border-gray-100 text-[13.5px] text-gray-500 leading-relaxed font-medium">
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
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
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
                    { step: '01', title: 'CAN Bus & Telemetry Audit', body: 'We evaluate your vehicle networks, sensor payloads, and data security vectors to outline a highly secure, functional blueprint.' },
                    { step: '02', title: 'Embedded & Cloud Co-Development', body: 'Our senior developer squads engineer real-time ADAS algorithms, secure V2X channels, and optimized cloud telemetry dashboards.' },
                    { step: '03', title: 'HIL Testing & Continuous Integration', body: 'We run automated loop-simulations and compliance audits to certify ISO-standard functional safety and secure over-the-air deployment.' },
                  ].map((p) => (
                    <div key={p.step} className="flex items-start gap-6 relative z-10">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-orange-600 flex items-center justify-center text-[12px] font-black text-orange-600 flex-shrink-0 shadow-sm">
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
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-4 divide-y divide-gray-100">
                {[
                  { q: 'Can custom automotive systems integrate with legacy in-vehicle CAN bus protocols?', a: 'Yes. We develop robust gateway interfaces and real-time middleware that securely translate standard CAN bus telemetry into high-level dashboard metrics without latency.' },
                  { q: 'How does your software guarantee compliance with automotive safety standards like ISO 26262?', a: 'Our engineering processes strictly follow the Automotive SPICE and ISO 26262 functional safety guidelines. We run complete unit test suites and HIL simulations to validate safety-critical functions.' },
                  { q: 'Do you support modern vehicle-to-everything (V2X) communication features?', a: 'Absolutely. We construct optimized low-latency telemetry protocols that securely connect vehicles to surrounding infrastructure, roadside units, and cloud networks.' },
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
                  { id: 'services', label: 'Automotive services we offer', ref: servicesRef },
                  { id: 'benefits', label: 'Benefits of bespoke solutions', ref: benefitsRef },
                  { id: 'institutions', label: 'Which institutions benefit', ref: institutionsRef },
                  { id: 'process', label: 'Our process. Simple, seamless.', ref: processRef },
                  { id: 'faq', label: 'Frequently Asked Questions (FAQ)', ref: faqRef },
                ].map((item) => {
                  const isActive = activeAnchor === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleAnchorClick(item.id, item.ref)}
                        className={`text-[12px] font-medium text-left select-none cursor-pointer hover:text-white transition-colors leading-snug ${
                          isActive ? 'text-orange-600 font-bold border-l-[3px] border-l-orange-600 pl-2' : 'text-gray-400 pl-[11px] border-l-[3px] border-l-transparent'
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
              className="bg-orange-600 rounded-2xl p-6 text-white cursor-pointer shadow-lg shadow-orange-500/10 hover:bg-orange-700 transition-all duration-300 group flex items-center justify-between"
            >
              <h4 className="text-[15px] font-bold leading-snug tracking-tight max-w-[140px]">
                Accelerate Your Software Development
              </h4>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>

            {/* Inc 5000 Badges */}
            <div className="bg-[#3b434a] rounded-2xl p-6 text-center text-white space-y-6">
                <div>
                    <div className="text-orange-600 text-3xl font-serif leading-none">&ldquo;</div>
                    <p className="text-[12px] font-medium leading-relaxed mb-4">How Businesses Can Overcome the Software Development Shortage</p>
                    <div className="font-extrabold text-xl">Inc.<br/>5000</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                    <div className="text-orange-600 text-3xl font-serif leading-none">&ldquo;</div>
                    <p className="text-[12px] font-medium leading-relaxed mb-4">KompasIT Ranked as one of the Fastest-Growing Companies in the US by Inc. 5000</p>
                    <div className="font-bold text-lg italic tracking-widest">Nasdaq</div>
                </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
