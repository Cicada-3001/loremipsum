'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Custom Martech Software Development',
    desc: 'With custom marketing technology solutions, you can streamline your marketing campaigns and create targeted and data-driven strategies. Businesses in e-commerce, healthcare, real estate, and many other sectors benefit from martech software.',
  },
  {
    title: 'Marketing Automation Platforms',
    desc: 'Automate marketing tasks like email marketing, social media posting, and advertising campaigns. A marketing automation platform allows you to increase efficiency, manage leads, and evaluate the success of your marketing efforts.',
  },
  {
    title: 'Data & Analytics',
    desc: 'Transform vast volumes of data into actionable insights. Make informed decisions about your strategies and business. Customer data platforms, web analytics tools, and predictive analytics allow you to collect, analyze, and interpret customer and marketing data.',
  },
  {
    title: 'Martech Integrations',
    desc: 'Streamline your workflows by connecting platforms in a single, cohesive marketing ecosystem. Integrate software systems like customer relationship management (CRM), content management systems (CMS), social media, and analytics to enjoy a unified view of your activities and interactions.',
  },
  {
    title: 'Content Management Systems',
    desc: 'Create, manage, and optimize digital content for diverse channels. A CMS for martech integrates seamlessly with your other platforms to personalize content delivery, improve the user experience and engagement, and evaluate content performance.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Tailored to Your Needs',
    desc: 'Custom martech software solutions are designed with your organization\'s requirements in mind. Each feature and functionality corresponds to your challenges, goals, and workflows. In contrast to off-the-shelf solutions, the software adapts to your particular concerns.',
  },
  {
    num: '2',
    title: 'Seamless Integration with Existing Systems',
    desc: 'Custom martech software integrates seamlessly with your active operational databases, CRM platforms, and legacy inventory systems, ensuring smooth operations without data friction.',
  },
  {
    num: '3',
    title: 'Scalability',
    desc: 'As your marketing outreach expands, our custom software architecture scales dynamically with high-volume digital campaigns and database growth.',
  },
  {
    num: '4',
    title: 'Enhanced Security',
    desc: 'Tailored martech solutions can offer advanced security features that protect your business against risks and vulnerabilities specific to your field and organization. This reduces the risk of data breaches and helps you protect sensitive information.',
  },
  {
    num: '5',
    title: 'Better User Experience',
    desc: 'Because a custom martech platform is built to focus on your specific workflows, it provides your marketing teams with a smooth, intuitive dashboard interface.',
  },
];

const accordions = [
  {
    title: 'Marketing Agencies',
    desc: 'Marketing agencies leverage a variety of martech platforms to enhance and automate campaigns, streamline operations, and evaluate the effectiveness of their strategies.',
  },
  {
    title: 'E-commerce Businesses',
    desc: 'Tailored martech solutions allow e-commerce businesses to personalize shopping experiences, analyze customer behavior, and automate customer engagement.',
  },
  {
    title: 'Financial Services',
    desc: 'Financial institutions such as banks, fintech startups, and insurance companies leverage martech solutions to personalize financial offerings, automate customer service interactions, and facilitate greater client engagement through secure channels.',
  },
  {
    title: 'B2B Companies',
    desc: 'These companies use custom martech platforms to manage lead generation, align marketing and sales efforts, enhance campaigns, and more.',
  },
  {
    title: 'Healthcare Organizations',
    desc: 'Many healthcare organizations, including hospitals, clinics, and other providers, use bespoke martech solutions for health information campaigns, patient feedback analysis, and patient relationship management.',
  },
  {
    title: 'Real Estate Agencies',
    desc: 'Real estate businesses leverage martech tools to automate property listings, engage with prospective buyers through personalized content, and evaluate market trends.',
  },
  {
    title: 'Media and Entertainment',
    desc: 'Entertainment and media companies, such as streaming services and publishers, leverage martech to manage subscriptions, analyze view preferences, and personalize content recommendations.',
  },
  {
    title: 'Educational Institutions',
    desc: 'Schools, colleges, universities, and other academic institutions may use custom platforms to attract new students, enhance student engagement, and manage alumni relations through personalized and targeted digital strategies.',
  },
  {
    title: 'Technology Startups',
    desc: 'Startups may need martech platforms to automate and scale their marketing efforts, assess and understand market trends and fit through data analytics, and communicate with early adopters.',
  },
  {
    title: 'Hospitality Industry',
    desc: 'Hotels, travel agencies, and resorts often use martech tools to personalize experiences, streamline booking, and evaluate data to improve their operations and services.',
  },
  {
    title: 'Retail and Consumer Goods',
    desc: 'Brick-and-mortar retailers may leverage custom martech software to bridge the gap between their online and offline services and employ strategies to enhance customer loyalty and engagement.',
  },
  {
    title: 'Non-Profit Organizations',
    desc: 'NGOs and nonprofit organizations utilize custom software for various purposes, such as enhancing donor engagement, leveraging social media and analytics to increase impact, and automating fundraising campaigns.',
  },
];

export default function MartechPage() {
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
            <span className="text-gray-800 font-bold">Martech</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#0078d4] uppercase tracking-widest block mb-3.5 select-none">
                MARTECH SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Build secure and scalable martech software solutions.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Enhance marketing efforts through automation, data-driven insights, and targeted campaigns. Assemble custom martech software systems built by senior engineers.
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

            {/* Right Column analytical backdrop view */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div
                className="w-full h-full hover:scale-102 transition-transform duration-500"
                style={{ backgroundImage: 'url(/case_media.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
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

            {/* Block 1: Services Grid (5 Columns) */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Martech software development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                Enhance efficiency and effectiveness, manage customer operations, and gain robust data analytics. Marketing departments, sales teams, business executives, and small business owners all benefit from marketing technology (martech). We help diverse companies streamline, automate, and analyze their marketing operations through custom martech software solutions.
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

            {/* Premium Green Schedule Call Mid-Banner */}
            <div className="bg-[#0f9f68] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-emerald-500/10">
              <h3 className="text-white text-xl font-extrabold leading-snug tracking-tight max-w-[460px]">
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
                ADVANTAGES & OUTCOMES
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

            {/* Block 3: Expandable Institutions Accordion (12 Items) */}
            <div ref={institutionsRef} id="institutions" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                INDUSTRY REACH
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Which institutions benefit from custom martech software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Many institutions benefit from custom martech development services. These solutions cater to various business needs across industries, enhancing their marketing activities. Some examples of types of companies that take advantage of custom software development are:
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
                    { step: '01', title: 'Marketing Stack Audit', body: 'We assess active CRMs, social channels, and transactional logs to coordinate marketing data flows.' },
                    { step: '02', title: 'Custom Automation Platform Launch', body: 'Our senior developer pods construct lead triggers, data analysis frameworks, and CMS modules in 3–4 weeks.' },
                    { step: '03', title: 'Ongoing diagnostic stress tests', body: 'We perform continuous automated test scripts checking portal speeds as your customer base expands.' },
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
                  { q: 'Can custom martech platforms connect to active CRMs?', a: 'Yes. We build native integration tunnels linking custom dashboards cleanly to HubSpot, Salesforce, and other active CRM layouts.' },
                  { q: 'Do you design customer data platforms?', a: 'Absolutely. We specialize in building secure customer data platforms that compile, organize, and encrypt cross-channel transactional customer logs.' },
                  { q: 'Are all systems designed with GDPR and PCI compliance?', a: 'Yes. We enforce robust compliance audits, safe cloud backups, and data encryption, ensuring absolute regulatory compliance.' },
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
                Assemble vetted Martech automation engineering teams in 2-4 weeks. Get started today.
              </p>
              {/* Overlapping small avatar reps */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/20" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/30" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/40" />
              </div>
            </div>

            {/* BairesDev achieve achievements sidebar cards */}
            <div className="bg-[#1f2937] text-white border border-gray-800 rounded-2xl p-5 space-y-6 shadow-sm">
              <div>
                <span className="text-[16px] text-orange-500 font-bold block mb-1">“</span>
                <p className="text-[11.5px] font-extrabold leading-snug mb-3">How Businesses Can Overcome the Software Development Shortage</p>
                <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Inc. 5000</div>
              </div>
              <div className="border-t border-gray-700/60 pt-4">
                <span className="text-[16px] text-orange-500 font-bold block mb-1">“</span>
                <p className="text-[11.5px] font-extrabold leading-snug mb-3">BairesDev Ranked as one of the Fastest-Growing Companies in the US by Inc. 5000</p>
                <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Nasdaq</div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
