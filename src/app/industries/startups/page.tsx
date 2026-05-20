'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'MVP Development',
    desc: 'Build a new MVP or extend your existing one into a stable V1/V2. We help you define the first meaningful release, design a practical architecture, and implement the core product flows plus the supporting pieces they depend on. We refactor what\'s fragile, add tests, CI/CD, and monitoring. So you can confidently ship the essential features customers and investors are asking for.',
  },
  {
    title: 'Backend & API Development',
    desc: 'Make your backend ready for real growth. We harden the services that got you to early traction, fix the code that works for 100 users but not 10,000, and make core flows (like auth, billing, and data processing) stable under load. We clean up and extend your APIs, add the integrations you need—payments, CRM, data providers, internal systems—and handle the retries, webhooks, and failure paths so they behave in production.',
  },
  {
    title: 'Frontend Development',
    desc: 'Ship polished, fast interfaces. We work in your existing stack to improve and extend your web (and mobile, if needed) frontends. We clean up core screens, tighten performance, and build out dashboards, admin tools, and other key flows. We align the UI with your design system, organize components and state so they\'re easier to change, and connect everything to your analytics. So you end up with interfaces that look and feel solid to users, and a frontend your development team can keep iterating on without constant rewrites.',
  },
  {
    title: 'UX/UI Design',
    desc: 'Craft beautiful, high-converting product designs. We audit your existing screens, define your digital design system, and construct high-fidelity mockups and interactive prototypes. We map frictionless user journeys, polish key landing states, and run usability checks to ensure that your interface wows investors and delights early adopters.',
  },
  {
    title: 'AI Development',
    desc: 'Supercharge your product with tailored AI capabilities. We integrate state-of-the-art LLMs, build custom retrieval-augmented generation (RAG) pipelines, and construct scalable machine learning agents. Whether you need predictive product recommendation engines or intelligent natural language search, we deliver production-ready intelligence in weeks.',
  },
  {
    title: 'Data Engineering',
    desc: 'Architect stable, scalable data infrastructure. We build clean ETL pipelines, set up fast data warehouses (Snowflake, BigQuery), and deploy real-time analytics triggers. We ensure that your dashboard metrics represent the absolute ground-truth, enabling your team to make fast, data-informed product decisions.',
  },
  {
    title: 'Cloud Development',
    desc: 'Deploy highly available, self-healing cloud ecosystems. We build fully automated infrastructure-as-code (IaC) architectures on AWS or Google Cloud using Terraform. We integrate continuous CI/CD pipelines, orchestrate Kubernetes nodes, and harden serverless setups to optimize cloud spend while maintaining absolute reliability.',
  },
  {
    title: 'Quality Assurance & Testing',
    desc: 'Maintain a defect-free release pipeline. We author robust end-to-end automated testing suites using Playwright, Cypress, and Selenium, alongside targeted unit tests. We test under extreme load conditions to prevent latency spikes, ensuring that every deployment is solid, safe, and silent.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Zero Shortened Runway',
    desc: 'Get access to elite, pre-vetted engineers without high recruitment overheads, helping you maximize every dollar of your VC funding round.',
  },
  {
    num: '2',
    title: 'Launch Squads in 2-4 Weeks',
    desc: 'Scale your technical capacity up or down rapidly depending on product sprints, feature releases, or investor feedback cycles.',
  },
  {
    num: '3',
    title: 'Total Technical Ownership',
    desc: 'We build clean, documented, and fully tested codebases that you own 100%—ensuring smooth technical due diligence for future funding rounds.',
  },
  {
    num: '4',
    title: 'Senior Architectural Leadership',
    desc: 'Every startup squad is guided by elite technical architects who ensure that your database and codebase are built to scale to millions of users.',
  },
];

export default function StartupsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', needs: '', isSubmitted: false });
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeAnchor, setActiveAnchor] = useState('services');

  // Refs for tracking coordinates
  const servicesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
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
            <span className="text-gray-800 font-bold">Startups</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#666666] uppercase tracking-widest block mb-3.5 select-none">
                SOFTWARE DEVELOPMENT FOR STARTUPS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Build software at startup speed. Without shortening your runway.
              </h1>
              <p className="text-[15px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Collaborate with elite in-house engineering squads to accelerate delivery without blowing up your burn rate. We typically launch custom delivery teams in 2-4 weeks. So you can hit the milestones that matter to your next stage of growth.
              </p>

              {/* Clutch Review panel */}
              <div className="flex items-center gap-4 select-none">
                <div className="font-extrabold text-xl tracking-tight text-gray-900">Clutch</div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-extrabold text-gray-900">4.9/5</span>
                    <div className="flex text-orange-500 text-xs">★★★★★</div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-semibold">60 client reviews</span>
                </div>
              </div>

            </div>

            {/* Right Column consultation form widget */}
            <div className="lg:col-span-5 bg-white border border-gray-150 rounded-3xl p-8 shadow-md">
              <h3 className="text-gray-900 font-bold text-lg mb-6 leading-tight">
                Let&apos;s see how we can help you hit your next milestone:
              </h3>
              
              {formData.isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 font-extrabold text-lg mx-auto">✓</div>
                  <h4 className="text-gray-950 font-extrabold text-base">Project Request Received!</h4>
                  <p className="text-gray-500 text-[13px] leading-relaxed font-medium">Our technology directors will review your needs and reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11.5px] font-bold text-gray-500 block mb-1.5">Your name</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-800 focus:outline-none focus:border-orange-500 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11.5px] font-bold text-gray-500 block mb-1.5">Your email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-800 focus:outline-none focus:border-orange-500 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-[11.5px] font-bold text-gray-500 block mb-1.5">What we can do for you?</label>
                    <textarea
                      placeholder="Tell us about your needs..."
                      value={formData.needs}
                      onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-800 focus:outline-none focus:border-orange-500 placeholder-gray-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-[13px] tracking-wider py-4 rounded-lg shadow-md shadow-orange-500/10 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Jump-start My Project
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Trust tagline */}
          <div className="mt-12 text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase select-none">
            ENDORSED BY ENGINEERS. TRUSTED BY CTOS.
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Services Left Description Block */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block select-none">
                    STARTUP SOFTWARE DEVELOPMENT SERVICES
                  </span>
                  <h2 className="text-3xl font-extrabold text-gray-950 leading-tight tracking-tight">
                    Accelerate product development with full lifecycle support.
                  </h2>
                  <p className="text-[13.5px] leading-relaxed text-gray-500 font-medium">
                    From early-stage MVPs to platforms serving millions of users, KompasIT has shipped software across industries for startups at every stage of growth. Whatever you&apos;re building, we can help.
                  </p>

                  {/* Partner Badges */}
                  <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-150 select-none">
                    <div className="text-center p-3 bg-white border border-gray-150 rounded-xl">
                      <div className="text-[10px] font-black text-blue-600">Google Cloud</div>
                      <span className="text-[8px] text-gray-400 font-extrabold">Partner</span>
                    </div>
                    <div className="text-center p-3 bg-white border border-gray-150 rounded-xl">
                      <div className="text-[10px] font-black text-amber-600">AWS</div>
                      <span className="text-[8px] text-gray-400 font-extrabold">Partner</span>
                    </div>
                    <div className="text-center p-3 bg-white border border-gray-150 rounded-xl">
                      <div className="text-[10px] font-black text-slate-800">ISO 27001</div>
                      <span className="text-[8px] text-gray-400 font-extrabold">Certified</span>
                    </div>
                  </div>
                </div>

                {/* Services Accordion List (Right Column) */}
                <div className="lg:col-span-7 space-y-3">
                  {services.map((svc, idx) => {
                    const isOpen = openAccordion === idx;
                    return (
                      <div key={svc.title} className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm">
                        <button
                          onClick={() => setOpenAccordion(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-[14.5px] text-gray-800 select-none cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-orange-600 text-xs">✓</span>
                            <span>{svc.title}</span>
                          </div>
                          <span className="text-orange-600 font-bold text-lg select-none">
                            {isOpen ? '×' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-0 border-t border-gray-100 text-[13px] text-gray-500 leading-relaxed font-medium">
                            {svc.desc}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* Block 2: Bespoke Benefits Grid */}
            <div ref={benefitsRef} id="benefits" className="scroll-mt-24">
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-12">
                Benefits of building bespoke solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:border-orange-600 transition-colors duration-200">
                    <h4 className="text-[15px] font-medium text-gray-800 mb-3 leading-snug">{b.num}. {b.title}</h4>
                    <p className="text-[12.5px] leading-relaxed text-gray-500 font-medium">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Process Delivery Steps */}
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
                    { step: '01', title: 'Product Blueprinting', body: 'We map out your MVP features, prioritize the product roadmap, and align on the optimal technical architecture.' },
                    { step: '02', title: 'Rapid Sprints & Demos', body: 'We operate in tight two-week agile sprints, providing interactive product demos at the end of each cycle.' },
                    { step: '03', title: 'Continuous CI/CD Delivery', body: 'We integrate automated deployment pipelines so you can test features in staging and push code to production seamlessly.' },
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

            {/* Block 4: FAQs */}
            <div ref={faqRef} id="faq" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-4 divide-y divide-gray-100">
                {[
                  { q: 'Can your engineers work directly within our startup\'s existing codebase?', a: 'Absolutely. Our senior in-house developers integrate directly into your daily Slack/Teams, Jira boards, and GitHub repositories as a seamless extension of your core team.' },
                  { q: 'How do you handle technical due diligence for future funding rounds?', a: 'We write robust, well-documented, clean code adhering to strict architectural best practices, complete with comprehensive automated test coverage, making technical audits by investors smooth and stress-free.' },
                  { q: 'What happens as our startup scales and we want to transition to an internal team?', a: 'We design our collaborations to be fully collaborative. We build complete, documented systems and facilitate a highly structured, seamless knowledge transfer whenever you are ready to expand your internal team.' },
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
                  { id: 'services', label: 'Startup development services', ref: servicesRef },
                  { id: 'benefits', label: 'Benefits of bespoke solutions', ref: benefitsRef },
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
