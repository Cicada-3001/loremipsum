'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Inventory Management Software Development',
    desc: 'Efficiently track and manage your inventory. Regardless of your industry, our tailored software delivers comprehensive solutions that monitor inventory and reduce errors. Enjoy stress-free integration, automate your administrative tasks, prevent overstocking or stockouts, and gain real-time insights for strategic decision-making.',
  },
  {
    title: 'Supply Chain Analytics & Reporting Tools',
    desc: 'Centralize your supply chain insights into one unified platform. We help you gain in-depth insight into inventory levels, demand forecasting, supplier performance, and logistics. The result? Real-time data and detailed reports. Make informed and strategic decisions that directly improve your day-to-day operations and increase profitability.',
  },
  {
    title: 'Warehouse Management System Development',
    desc: 'Warehouse Management Systems (WMS) are pivotal for ensuring that your warehouse runs smoothly. Streamline inventory management, improve storage efficiency, and simplify order fulfillment with our custom WMS. Reduce costs and gain higher productivity. Experience centralized supply chain operations for real-time insights into stock levels, order statuses, and your overall logistics performance.',
  },
  {
    title: 'Transportation Management Software Solutions Development',
    desc: "Whether you're shipping packages to local customers or exporting goods across the globe, ensure visibility, reduced costs, and secure communication between your logistics providers. Streamline route planning, optimize freight management, and increase the overall effectiveness of your transportation.",
  },
  {
    title: 'Order Management & Fulfillment Systems',
    desc: "Efficiently manage and deliver orders. Keep customers happy with streamlined order processing, from placement to fulfillment. Our tailored solutions mean advanced order tracking and inventory management. We'll help you boost accuracy and efficiency.",
  },
  {
    title: 'Demand Planning & Forecasting Tools',
    desc: 'Avoid hiccups caused by overstocking or stockouts. Align your forecasting with real market demand for precise, sustainable, and automated predictions. With our custom planning and forecasting solutions, you can improve visibility, increase accuracy, and reduce holding costs.',
  },
  {
    title: 'Supplier Relationship Management Software',
    desc: 'Build strong supplier relationships. Foster transparency and continually improve communication with your supplier. We help you streamline supplier interactions and centralize operations, implementing robust security measures to safeguard sensitive data and bolster your supply chain security.',
  },
  {
    title: 'Logistics & Freight Management Systems',
    desc: 'When it comes to freight management, slow procedures and mistakes can be extremely costly. Elevate your logistics and freight management procedures with software that ensures accurate and timely deliveries while reducing costs. Automate shipment tracking, route optimization, and real-time freight management for advanced performance.',
  },
  {
    title: 'Supply Chain Visibility & Tracking Solutions',
    desc: 'Stay on top of your supply chain management. You should know with 100% confidence what is happening across your entire operation. From procurement to the last step of fulfillment, our visibility and tracking solutions offer detailed and accurate reporting.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Integration with Existing Systems',
    desc: 'Supply chain management is complex and unique for every business. By tailoring solutions to your needs, you can ensure seamless integration with your existing systems. Eliminate any compatibility issues, streamlining workflows and enhancing your processes.',
  },
  {
    num: '2',
    title: 'Scalability and flexibility',
    desc: "Logistics and supply chain requirements are always changing, so flexibility is crucial. Custom software allows for quick and easy adjustments, whether you're scaling your operations or responding to industry changes. This ensures long-term value, adaptability, and responsiveness.",
  },
  {
    num: '3',
    title: 'Efficiency and productivity',
    desc: 'Custom supply chain solutions are designed to fit your processes and goals. From reducing administrative work to improving relationships with suppliers, automated tasks and streamlined workflows increase productivity and reduce errors within your supply chain.',
  },
  {
    num: '4',
    title: 'Competitive Advantage',
    desc: 'Create unique features that make you stand out. Using innovative technologies and strategic improvements, custom solutions aim to give you a competitive edge, ensuring your success and leadership in the market.',
  },
  {
    num: '5',
    title: 'Enhanced Data Insights',
    desc: 'One wrong move in your supply chain can greatly impact your business. Custom solutions can be equipped with advanced analytics and reporting tools, giving you valuable insights. Empower your decision-making and plan strategically for a successful future.',
  },
];

const accordions = [
  {
    title: 'Manufacturing Companies',
    desc: 'Optimize production planning, track the usage of raw materials, and streamline supply chain processes throughout the entire life cycle.',
  },
  {
    title: 'Logistics and Transportation Companies',
    desc: 'Custom software development leads to advanced solutions for fleet management, route planning, cargo tracking, and deliveries.',
  },
  {
    title: 'Retail Businesses',
    desc: 'Supply chain management software helps businesses streamline inventory management, improve inventory management, and enhance customer service.',
  },
  {
    title: 'Healthcare Providers and Pharmaceutical Companies',
    desc: 'Healthcare and pharmaceutical organizations demand precise tracking and management of medical supplies and medications. Custom solutions help ensure optimal supply chain performance and regulatory compliance.',
  },
  {
    title: 'Technology and Electronics Industries',
    desc: 'Technology fields are rapidly innovating and evolving. Tailored supply chain software helps businesses in the industry sector manage complex supply chains with many moving parts.',
  },
];

export default function SupplyChainPage() {
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
            <span className="text-gray-800 font-bold">Supply Chain</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#0078d4] uppercase tracking-widest block mb-3.5 select-none">
                SUPPLY CHAIN SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Scale and optimize supply chain management.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Build software to streamline the entire supply chain. Optimize freight, minimize storage waste, and coordinate real-time tracking with senior developers.
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

            {/* Right Column warehouse image */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div
                className="w-full h-full hover:scale-102 transition-transform duration-500"
                style={{ backgroundImage: 'url(/real_estate_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>

          </div>

          {/* Trust Banner Panel */}
          <div className="mt-16 bg-gray-900 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-gray-900/10 select-none">
            <div className="text-white text-sm font-bold tracking-tight">
              500+ companies rely on our <span className="text-orange-500 underline decoration-2 decoration-orange-500 underline-offset-4">top 1% tech talent</span>.
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

            {/* Block 1: Services Grid (9 Columns) */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Supply Chain development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                We develop tailored supply chain solutions to optimize efficiency and enhance your logistics management. The industries we serve range from manufacturing and distribution to retail and e-commerce. No matter what your business model, we ensure your supply chain has the latest advancements, leveraging advanced technologies such as AI and robotics. Here are just some of the ways we help our clients.
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
                Which institutions benefit from custom supply chain software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Many different industries benefit from custom supply chain implementation, particularly those directly involved in areas like logistics, retail, and manufacturing. Some examples include:
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
                    { step: '01', title: 'Operational Inventory Audit', body: 'We assess active warehouse software configurations, tracking systems, and log matrices to blueprint optimization pipelines.' },
                    { step: '02', title: 'Hardening & Custom WMS Release', body: 'Our senior PropTech developers deploy automated routing trackers, custom dashboards, and WMS sync gateways in 3–4 weeks.' },
                    { step: '03', title: 'Ongoing Validation Tests', body: 'We conduct full system stress-tests and audits, ensuring secure logistics tracking as shipping demands expand.' },
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
                  { q: 'Can custom WMS integrate with older ERP logistics engines?', a: 'Yes. We construct custom mapping channels that exchange shipping coordinates, inventory manifests, and shipping data directly with legacy ERP configurations.' },
                  { q: 'How does automated demand planning manage stock fluctuations?', a: 'By analyzing historical consumer demands and regional transactions, machine learning algorithms forecast exact stock requirements to minimize overstock.' },
                  { q: 'Can you integrate third-party courier APIs into transportation portals?', a: 'Absolutely. We configure real-time tracking pipelines with major global freight carriers to streamline route calculations.' },
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
                Assemble vetted Supply Chain and Logistics development teams in 2-4 weeks. Get started today.
              </p>
              {/* Overlapping small avatar reps */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/20" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/30" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/40" />
              </div>
            </div>

            {/* Supply Chain Insight cards from reference */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0078d4] transition-colors cursor-pointer select-none">
              <div className="h-[110px]" style={{ backgroundImage: 'url(/allrentals_case.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h5 className="text-[12.5px] font-extrabold text-gray-900 leading-snug mb-1">The Strategic Stakes of Supply Chain Optimization</h5>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Read Insight</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0078d4] transition-colors cursor-pointer select-none">
              <div className="h-[110px]" style={{ backgroundImage: 'url(/real_estate_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h5 className="text-[12.5px] font-extrabold text-gray-900 leading-snug mb-1">Supply Chain Fragility: How to Adapt</h5>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Read Insight</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
