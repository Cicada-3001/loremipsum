'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Custom Farm Management Software Solutions',
    desc: 'We deliver custom farm management systems that streamline operations. Our developers employ an agile approach, leveraging GIS tools, cloud computing, and IoT solutions. These platforms help us optimize crop planning, inventory management, equipment tracking, and yield analysis. With features like predictive analytics and mobile accessibility, you can make informed decisions, allocate resources effectively, and enhance efficiency.',
  },
  {
    title: 'Precision Agriculture & IoT Solutions',
    desc: 'Streamline management of agricultural processes with data analytics and machine learning techniques. Enhance crop yields, reduce resource waste, and improve sustainable farming practices. Deploying sensors, drones, and IoT devices throughout farm fields enables real-time data collection on soil health, moisture levels, crop growth, and environmental conditions. This data empowers farmers to optimize irrigation schedules, manage crop inputs, and detect early signs of pests or diseases.',
  },
  {
    title: 'Drone & Satellite Imagery Analysis for Agriculture',
    desc: 'From monitoring crop growth to identifying irrigation issues, our solutions enable data-driven decisions by providing a comprehensive view of field dynamics. Our drone and satellite analysis services offer farmers crucial insights into their fields health and performance. Through high-resolution image capture and advanced processing algorithms—including GIS software—you can assess vegetation, detect crop stress, and pinpoint areas requiring attention.',
  },
  {
    title: 'Agricultural Supply Chain & Logistics Solutions',
    desc: 'An efficient supply chain ensures that your products are delivered from farm to market on time. Our solutions enable real-time monitoring, streamlined inventory control, and seamless coordination throughout the supply chain. Integrated with blockchain technology, they ensure traceability from farm to market. This reduces costs, minimizes waste, and enhances operational efficiency.',
  },
  {
    title: 'Weather Forecasting & Risk Management Tools',
    desc: 'Unpredictable weather can hinder your productivity and profitability. Access reliable weather forecasts through forecasting and risk management tools. Our solutions merge meteorological models with data from weather stations, satellites, and radar systems to provide precise climate data and risk assessments. By incorporating historical weather data and machine learning algorithms, our solutions deliver accurate forecasts with predictive analytics to help you anticipate and mitigate weather-related risks.',
  },
  {
    title: 'Agricultural ERP & Financial Management Solutions',
    desc: 'Managing the financial aspects of agricultural operations demands enterprise resource planning (ERP) and financial management solutions. Our solutions include tools to streamline accounting, budgeting, and financial reporting processes. From expense and revenue tracking to payroll management and tax compliance, our modules cater to your unique needs in the agricultural industry. We also include features such as crop costing analysis, inventory valuation, and supply chain finance.',
  },
  {
    title: 'Mobile Apps for Farmers & Agribusinesses',
    desc: 'Our mobile apps offer diverse functionalities including crop management, market analysis, weather updates, and supply chain tracking. With intuitive user interfaces and real-time data synchronization, they enable farmers to make informed decisions, boost productivity, and foster collaboration with suppliers and buyers.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Integration with Existing Systems',
    desc: 'We design our custom agricultural software solutions to integrate seamlessly with your existing systems and processes using industry-standard protocols. We ensure smooth communication and data sharing between different platforms and devices. Our solutions help streamline your workflows and enhance operational efficiency across your entire agricultural ecosystem. They also future-proof your infrastructure for scalability and innovation.',
  },
  {
    num: '2',
    title: 'Competitive Advantage',
    desc: 'Implement advanced machine learning algorithms for predictive analytics in crop forecasting. Utilize cloud-based platforms like AWS or Microsoft Azure for scalability and real-time data processing. Incorporate edge computing technology to enhance the performance of IoT sensors for precision farming. We will craft solutions set you apart from your competitors. With custom features and strategic improvements, our software solutions position you as a leader in the agricultural industry, driving growth and profitability.',
  },
  {
    num: '3',
    title: 'Efficiency and Productivity',
    desc: 'Efficiency and productivity are paramount in agriculture—and in the agriculture software development process. Margins are often tight, and external factors such as weather and market prices can impact profitability. Our custom agricultural software solutions are designed to streamline your workflows, automate repetitive tasks, and optimize resource allocation. From field mapping to harvest forecasting, we equip farmers with the tools they need to make data-driven decisions.',
  },
  {
    num: '4',
    title: 'Tailored to Your Needs',
    desc: 'Agriculture is a diverse industry with unique challenges and requirements varying from farm to farm. By developing custom agricultural software solutions, we tailor our solutions to your needs and operations. Whether you are a small family farm or a large-scale agribusiness, our customized software addresses your unique workflows, crop management practices, and regulatory compliance requirements. This ensures that you have the tools and processes necessary to optimize your particular agricultural operations.',
  },
  {
    num: '5',
    title: 'Innovation',
    desc: 'Our custom agricultural software solutions leverage the latest technologies, such as artificial intelligence frameworks, machine learning algorithms, and remote sensing technologies. These include autonomous farm machinery equipped with computer vision systems, drone-based crop monitoring systems using image recognition algorithms, and mobile apps for remote farm management. Our software solutions empower farmers to improve efficiency, reduce resource wastage, and increase yields sustainably.',
  },
];

const accordions = [
  {
    title: 'Farms and Agricultural Producers',
    desc: 'Producers use custom solutions for farm management, precision agriculture, and livestock tracking.',
  },
  {
    title: 'Agricultural Cooperatives',
    desc: 'Cooperatives leverage this software for member management, shared resource planning, and collaborative marketing efforts. Tailored solutions allow them to operate more efficiently.',
  },
  {
    title: 'Agribusiness Companies',
    desc: 'Suppliers and other agribusinesses use these solutions to streamline operations and improve service delivery.',
  },
  {
    title: 'Agricultural Research Institutions',
    desc: 'These institutions use custom software for data collection, analysis, and simulation to advance research.',
  },
  {
    title: 'Government Agricultural Departments',
    desc: 'Governmental departments require custom software for policy analysis, subsidy management, and regulatory compliance.',
  },
  {
    title: 'Agricultural Extension Services',
    desc: 'These services leverage tailored solutions to disseminate information, manage outreach programs, and track the effectiveness of their efforts.',
  },
];

export default function AgriculturePage() {
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
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 font-sans selection:bg-[#0078d4] selection:text-white">

      {/* ── Hero & Breadcrumb ── */}
      <section className="pt-28 pb-16 border-b border-gray-200/60 bg-gradient-to-b from-[#f3f4f6] to-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 mb-8 select-none">
            <Link href="/" className="hover:text-[#0078d4] transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              Home
            </Link>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-400">Industries</span>
            <span className="text-gray-300">&gt;</span>
            <span className="text-gray-800 font-bold">Agriculture</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#0078d4] uppercase tracking-widest block mb-3.5 select-none">
                AGRICULTURE SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Streamline operations with custom agriculture software solutions.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Gain specialized expertise and increase efficiency. Build custom agricultural software solutions with top 1% tech talent.
              </p>

              {/* Consultation trigger CTA */}
              <div className="flex items-center space-x-4 mb-10">
                <button
                  onClick={() => handleAnchorClick('services', servicesRef)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-[13px] uppercase tracking-wider px-8 py-4 rounded-lg shadow-md shadow-orange-500/10 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Accelerate Your Roadmap
                </button>
              </div>

            </div>

            {/* Right Column farm drone layout */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div
                className="w-full h-full hover:scale-102 transition-transform duration-500"
                style={{ backgroundImage: 'url(/erp_agriculture.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>

          </div>

          {/* Trust Banner Panel */}
          <div className="mt-16 bg-gray-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-gray-900/10 select-none">
            <div className="text-white text-sm font-bold tracking-tight">
              Endorsed by engineers. <span className="text-orange-500 underline decoration-2 decoration-orange-500 underline-offset-4">Trusted by CTOs</span>.
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
                  <span className="text-[12px] font-black text-white/40 hover:text-white transition-colors">{logo.text}</span>
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

            {/* Block 1: Services Grid (7 Columns) */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Agriculture development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                We develop tailored solutions for the agriculture industry to optimize farming operations. Implement precision farming techniques, streamline data collection and analysis, and leverage sustainable practices. Our services include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-b border-gray-150 pb-16">
                {services.map((svc) => (
                  <div key={svc.title} className="relative pl-7 group">
                    {/* Tick indicator */}
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full border border-orange-500 flex items-center justify-center text-[10px] text-orange-600 font-bold select-none group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <h3 className="text-[16px] font-extrabold text-gray-950 mb-3 tracking-tight group-hover:text-[#0078d4] transition-colors">
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

            {/* Green Mid-Page CTA Banner */}
            <div className="bg-emerald-600 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-emerald-500/10">
              <h3 className="text-white text-xl font-extrabold leading-snug tracking-tight max-w-[420px]">
                From concept to completion. 100s of custom software solutions built since 2009.
              </h3>
              <button
                onClick={() => handleAnchorClick('faq', faqRef)}
                className="bg-gray-950 hover:bg-gray-900 text-white font-extrabold text-[12px] uppercase tracking-wider px-6 py-3.5 rounded-lg active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule a Call →
              </button>
            </div>

            {/* Block 2: Bespoke Benefits Grid (5 Columns) */}
            <div ref={benefitsRef} id="benefits" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                ADVANTAGES & YIELDS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-12">
                Benefits of building bespoke solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:border-[#0078d4] transition-colors duration-200">
                    <span className="text-3xl font-black text-gray-200 block mb-4">
                      {b.num}.
                    </span>
                    <h4 className="text-[15px] font-extrabold text-gray-950 mb-3 leading-snug">{b.title}</h4>
                    <p className="text-[12.5px] leading-relaxed text-gray-500 font-medium">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Expandable Institutions Accordion */}
            <div ref={institutionsRef} id="institutions" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                INDUSTRY REACH
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Which institutions benefit from custom agriculture software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Custom agriculture software development services benefit numerous institutions across the industry. Examples include:
              </p>

              <div className="space-y-3.5 max-w-[720px]">
                {accordions.map((acc, idx) => {
                  const isOpen = openAccordion === idx;
                  return (
                    <div key={acc.title} className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenAccordion(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-extrabold text-[15px] text-gray-950 select-none cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <span>{acc.title}</span>
                        <div className={`w-7 h-7 rounded-full border-2 border-orange-500 flex items-center justify-center text-[10px] text-orange-600 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-50' : ''}`}>
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
                    { step: '01', title: 'Operational GIS Audit', body: 'We assess active crop tracking frameworks, telemetry gateways, and sensor matrices to map precision pipelines.' },
                    { step: '02', title: 'Hardening & Custom WMS Release', body: 'Our senior developer pods construct real-time telemetry dashboards, custom farm maps, and IoT databases in 3–4 weeks.' },
                    { step: '03', title: 'Ongoing Drone telemetry checks', body: 'We perform automated stress audits and API scans, checking weather forecasting portals as farms expand.' },
                  ].map((p) => (
                    <div key={p.step} className="flex items-start gap-6 relative z-10">
                      <div className="w-9 h-9 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-[12px] font-black text-orange-600 flex-shrink-0 shadow-sm">
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
                  { q: 'Can custom ERP tools integrate with older tractors or sensors?', a: 'Yes. We construct custom endpoints and data streams that connect telemetry calculation libraries directly to existing CRM dashboards.' },
                  { q: 'How do automated yield models analyze anomalies in real-time?', a: 'Using sophisticated machine learning modeling, algorithms compare crop health indices against verified databases to flag high-risk fluctuations.' },
                  { q: 'Do custom mobile farm apps support offline mode?', a: 'Absolutely. We apply robust offline caching and database synchronization, ensuring that you can log crop parameters even in remote fields without network connectivity.' },
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
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-4 select-none">
                NAVIGATE
              </span>
              <ul className="space-y-3.5">
                {[
                  { id: 'services', label: 'Services We Provide', ref: servicesRef },
                  { id: 'benefits', label: 'Benefits of Bespoke Solutions', ref: benefitsRef },
                  { id: 'institutions', label: 'Who Benefits', ref: institutionsRef },
                  { id: 'process', label: 'Our Process Roadmap', ref: processRef },
                  { id: 'faq', label: 'FAQs', ref: faqRef },
                ].map((item) => {
                  const isActive = activeAnchor === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleAnchorClick(item.id, item.ref)}
                        className={`text-[12.5px] font-semibold text-left select-none cursor-pointer hover:text-[#0078d4] transition-colors leading-snug ${
                          isActive ? 'text-[#0078d4] font-bold border-l-2 border-l-[#0078d4] pl-2' : 'text-gray-500 pl-2 border-l-2 border-l-transparent'
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
              className="bg-orange-600 rounded-2xl p-6 text-white cursor-pointer shadow-lg shadow-orange-500/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 group"
            >
              <h4 className="text-[17px] font-black leading-snug tracking-tight mb-4 max-w-[200px]">
                Accelerate Your Software Development →
              </h4>
              <p className="text-[11.5px] text-white/80 font-medium leading-relaxed mb-6">
                Assemble vetted Agriculture and AgTech engineering teams in 2-4 weeks. Get started today.
              </p>
              {/* Overlapping small avatar reps */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/20" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/30" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/40" />
              </div>
            </div>

            {/* Agriculture Insight cards from reference */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0078d4] transition-colors cursor-pointer select-none">
              <div className="h-[110px]" style={{ backgroundImage: 'url(/allrentals_case.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h5 className="text-[12.5px] font-extrabold text-gray-900 leading-snug mb-1">Leading Edge Technologies Are Helping Indoor Farmers Feed the World</h5>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Read Insight</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
