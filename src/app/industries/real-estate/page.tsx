'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const realEstateServices = [
  {
    id: 'pms',
    title: 'Property Management Systems (PMS)',
    desc: 'Scale your operations with automated lease lifecycles, custom tenant onboarding panels, and dynamic maintenance ticket tracking systems.',
    sub: 'We build end-to-end custom PMS panels that integrate directly with your back-end databases. Empower building operators with automated repair notifications, digital signature collection, and occupancy forecasting calculators.',
  },
  {
    id: 'mls',
    title: 'RESO-Compliant MLS Syncing',
    desc: 'Stream live property listings and synchronize database updates with zero delay using RETS and RESO Web APIs.',
    sub: 'Ensure complete property listing reliability. Our RESO-compliant synchronization engines parse complex MLS meta-fields, allowing buyers to search, filter, and inspect listings in real time with high data integrity.',
  },
  {
    id: 'smart-wizard',
    title: 'Smart Unit Generation Wizard',
    desc: 'Modernize unit creation workflows by replacing manual inputs with a programmatic, rule-based layouts generator.',
    sub: 'Design Irregular building layouts easily. Enable property managers to configure irregular multi-floor specs, bedroom matrices, and billing rules while automatically maintaining exact portfolio totals.',
  },
  {
    id: 'payments',
    title: 'Automated Billing & Rent Processing',
    desc: 'Collect rents securely, assess late fee metrics, coordinate split escrow payouts, and manage billing accounts automatically.',
    sub: 'Utilizing custom Stripe Connect or Plaid architectures, we build secure real estate transaction layers that automate monthly billing, generate deposit tracking logs, and sync bookkeeping records directly to ERP books.',
  },
  {
    id: 'iot',
    title: 'IoT & Smart Building Integration',
    desc: 'Connect smart locks, central thermal sensors, and utility grids to centralized tenant dashboards.',
    sub: 'Enhance your modern building value. We integrate hardware APIs directly to web systems, allowing remote keycode generation, active threat alerting, and energy usage observability.',
  },
  {
    id: 'avm',
    title: 'AI-Powered Valuations (AVM)',
    desc: 'Compile comprehensive comps, historical interest metrics, and regional data through machine learning valuation models.',
    sub: 'Remove guesswork from property purchases. Our automated valuation models parse local transactional histories to forecast cap rates, cash-on-cash returns, and market value fluctuations.',
  },
];

export default function RealEstatePage() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', isSubmitted: false });
  const [activeTab, setActiveTab] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState('services');

  // Refs for tracking coordinates
  const servicesRef = useRef<HTMLDivElement>(null);
  const knowledgeRef = useRef<HTMLDivElement>(null);
  const caseRef = useRef<HTMLDivElement>(null);
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
      } else if (caseRef.current && scrollPos >= caseRef.current.offsetTop) {
        setActiveAnchor('case');
      } else if (knowledgeRef.current && scrollPos >= knowledgeRef.current.offsetTop) {
        setActiveAnchor('knowledge');
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
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">Industries</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-bold">Real Estate</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Hero Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                PropTech & Real Estate Engineering
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Scale your property portfolio with elite <span className="text-[#0078d4]">PropTech</span> developers.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Work with top-tier PropTech engineers. Build resilient property management portals, automated rental pipelines, RESO-compliant MLS databases, and smart dashboard systems.
              </p>

              {/* Expert badge + Credentials */}
              <div className="flex flex-col sm:flex-row items-start gap-6 border-t border-gray-200/70 pt-8">
                {/* Clutch rating */}
                <div className="flex items-center space-x-3 bg-white p-3 px-4 rounded-xl border border-gray-150 shadow-sm select-none">
                  <span className="text-gray-950 font-black text-lg">Clutch</span>
                  <div className="border-l border-gray-200 pl-3 flex flex-col">
                    <span className="text-gray-950 font-black text-[15px] leading-tight">4.9/5</span>
                    <div className="flex items-center space-x-0.5 my-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span key={s} className="text-orange-500 text-xs">★</span>
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">60 client reviews</span>
                  </div>
                </div>

                {/* Real Estate Standards */}
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-3 select-none">Standards & Syncs</span>
                  <div className="flex items-center gap-3">
                    {[
                      { bg: 'bg-[#0078d4]', name: 'RESO Web API', text: 'RESO' },
                      { bg: 'bg-emerald-600', name: 'Fair Housing Compliant', text: 'FHA' },
                      { bg: 'bg-orange-600', name: 'Smart Locks Integration', text: 'IoT' },
                      { bg: 'bg-gray-900', name: 'Secure Payments', text: 'PCI' },
                    ].map((t) => (
                      <div key={t.name} title={t.name} className={`w-11 h-11 ${t.bg} rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer`}>
                        <span className="text-white text-[10px] font-black">{t.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Consulting Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/30">
                <h3 className="text-[20px] font-extrabold text-gray-950 mb-6 text-center">
                  Request a PropTech consult.
                </h3>
                {formData.isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-center py-10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">✓</div>
                    <h4 className="text-emerald-950 font-black text-lg mb-2">Request Submitted</h4>
                    <p className="text-sm text-emerald-800 font-medium">Our real estate tech leads will reach you at <strong>{formData.email}</strong> to coordinate a safe systems analysis.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text" required placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                    <input
                      type="email" required placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] text-gray-500 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all"
                    >
                      <option value="">Select your role</option>
                      <option value="developer">Real Estate Developer / Builder</option>
                      <option value="manager">Property Management Company</option>
                      <option value="broker">Real Estate Brokerage</option>
                      <option value="proptech">PropTech Startup Founder</option>
                    </select>
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-md shadow-orange-500/10 hover:bg-orange-700 active:scale-[0.98] transition-all duration-200 cursor-pointer mt-1"
                    >
                      Request Call & Demo
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Layout Grid: Content vs Sticky Sidebar Navigator ── */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Comprehensive content blocks */}
          <div className="lg:col-span-9 space-y-24">

            {/* Block 1: Services Grid */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                PROPTECH SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Real Estate Custom Solutions We Provide
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {realEstateServices.map((svc) => (
                  <div key={svc.id} className="relative pl-7 group">
                    {/* Tick indicator */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-orange-500 flex items-center justify-center text-[10px] text-orange-600 font-bold select-none group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <h3 className="text-[17px] font-extrabold text-gray-950 mb-3 tracking-tight group-hover:text-[#0078d4] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-gray-600 font-medium mb-3">
                      {svc.desc}
                    </p>
                    <p className="text-[13px] leading-relaxed text-gray-400 font-medium">
                      {svc.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 2: Key Knowledge Tab Selector */}
            <div ref={knowledgeRef} id="knowledge" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                MARKET INTELLIGENCE
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Key Things to Know About PropTech
              </h2>

              {(() => {
                const tabs = [
                  {
                    title: 'Digitalization of Property Search',
                    text: 'Modern home buyers expect immersive property searching workflows, live updates, and exact metadata syncs.',
                    subText: 'Integrating RESO Web APIs directly inside customer search indexes guarantees up-to-the-minute status logs. By adding virtual spatial 3D walkthroughs, property brokerages reduce manual walk-through requirements by up to 45%.',
                    bullets: [
                      { title: 'RESO Web API Syncing', body: 'Establishes high-efficiency syncing pipelines delivering zero-latency updates.' },
                      { title: 'Interactive Map Filters', body: 'Enables users to search by custom regional parameters, school zones, and public transport.' },
                      { title: 'Spatial 3D Tours', body: 'Builds interactive property walk-through widgets that load smoothly on both web and mobile.' }
                    ]
                  },
                  {
                    title: 'Predictive Analytics & Valuations',
                    text: 'Automated valuation models (AVMs) remove traditional appraisal delays and improve decision precision.',
                    subText: 'By parsing historical transactional datasets, nearby local comps, and interest rate metrics, machine learning algorithms forecast exact asset returns, occupancy trajectories, and capitalization ratios automatically.',
                    bullets: [
                      { title: 'Real-Time AVM Estimates', body: 'Forecasts property valuation trends instantaneously using machine learning.' },
                      { title: 'Capitalization Rate (Cap Rate)', body: 'Calculates rental asset yields dynamically by analyzing regional maintenance ratios.' },
                      { title: 'Competitor Comps Analysis', body: 'Aggregates close listing matches automatically to evaluate competitive listing prices.' }
                    ]
                  },
                  {
                    title: 'Compliance & Fair Housing Rules',
                    text: 'Building digital real estate applications requires strict adherence to governmental standards, accessibility codes, and privacy rules.',
                    subText: 'We build secure system layers that align with Fair Housing standards, ADA compliance, and GDPR demographic storage policies, protecting your brand from heavy penalties.',
                    bullets: [
                      { title: 'ADA List Accessibility', body: 'Guarantees property search widgets meet strict WCAG accessibility rules.' },
                      { title: 'Fair Housing Audit Trails', body: 'Tracks system application histories to guarantee non-discriminatory allocations.' },
                      { title: 'GDPR Database Protection', body: 'Saves tenant PII records inside regional secure partitions.' }
                    ]
                  },
                  {
                    title: 'IoT & Smart Buildings',
                    text: 'centralized hardware APIs turn standard real estate assets into smart, energy-efficient operations.',
                    subText: 'Connecting remote smart lock managers, centralized HVAC sensors, and energy meters directly inside custom renter dashboards improves occupant satisfaction and saves up to 20% in utility waste.',
                    bullets: [
                      { title: 'Remote Access Codes', body: 'Allows managers to issue temporary keycodes for cleanings or viewings.' },
                      { title: 'Central Energy Sensors', body: 'Monitors real-time thermal usage, alerting managers to anomalies automatically.' },
                      { title: 'Predictive Repair Alerts', body: 'Flags structural alerts before major pipeline breaks occur.' }
                    ]
                  }
                ];
                const active = tabs[activeTab];
                return (
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Left pills */}
                    <div className="w-full md:w-[240px] flex-shrink-0 flex flex-col space-y-1.5">
                      {tabs.map((t, idx) => (
                        <button
                          key={t.title}
                          onClick={() => setActiveTab(idx)}
                          className={`w-full text-left px-4 py-3.5 border-b border-gray-200 last:border-b-0 text-[13.5px] font-extrabold cursor-pointer select-none transition-colors duration-150 flex items-center justify-between ${
                            activeTab === idx ? 'text-orange-600 bg-orange-50/50' : 'text-gray-400 hover:text-gray-700'
                          }`}
                        >
                          <span className="leading-snug">{t.title}</span>
                          {activeTab === idx && <span className="text-orange-500 text-sm">→</span>}
                        </button>
                      ))}
                    </div>

                    {/* Right detailed display */}
                    <div className="flex-1 bg-white border border-gray-150 rounded-3xl p-8 shadow-sm">
                      <h4 className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-4 select-none">
                        {active.title}
                      </h4>
                      <p className="text-[14px] leading-relaxed text-gray-800 font-semibold mb-4">
                        {active.text}
                      </p>
                      <p className="text-[13.5px] leading-relaxed text-gray-500 font-medium mb-6">
                        {active.subText}
                      </p>
                      <ul className="space-y-4">
                        {active.bullets.map((b) => (
                          <li key={b.title} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-2" />
                            <div className="text-[13px] leading-relaxed text-gray-500 font-medium">
                              <strong className="text-gray-800">{b.title}</strong> — {b.body}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Block 3: PropTech Case Study */}
            <div ref={caseRef} id="case" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                FEATURED SUCCESS STORY
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                PropTech Case Study
              </h2>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                {/* Left study details */}
                <div className="flex-1">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-4 select-none">
                    CASE STUDY
                  </span>
                  {/* AllRentals logo header */}
                  <div className="flex items-center space-x-2 mb-4 select-none">
                    <div className="w-5 h-5 rounded bg-orange-600 flex items-center justify-center text-[10px] text-white font-black">A</div>
                    <span className="text-lg font-black text-gray-950 tracking-tight">AllRentals</span>
                  </div>
                  <p className="text-[14.5px] leading-relaxed font-semibold text-gray-800 mb-6">
                    AllRentals partnered with KompasIT to build a smart, programmatic PropTech scaling engine. Their collaboration resulted in a rule-based property unit generator, automated rental collections, and custom spatial listing dashboards.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    {['TypeScript', 'Prisma', 'Next.js'].map((t) => (
                      <span key={t} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold select-none">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href="#" className="text-[13.5px] font-bold text-[#0078d4] hover:text-[#005a9e] flex items-center gap-1 transition-all group/link">
                    Read AllRentals Case Study
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
                {/* Right photo */}
                <div className="w-full md:w-[220px] h-[220px] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                  <div
                    className="w-full h-full hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: 'url(/real_estate_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                </div>
              </div>
            </div>

            {/* Block 4: Simple Roadmap Process */}
            <div ref={processRef} id="process" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERY ROADMAP
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Our Process. Simple, Seamless, Streamlined.
              </h2>

              <div className="relative">
                {/* Connector line */}
                <div className="absolute left-[20px] top-[40px] bottom-[40px] w-[1px] border-l-2 border-dashed border-gray-300" />

                <div className="space-y-12">
                  {[
                    { step: '01', title: 'Systems Mapping & Appraisal', body: 'We assess your active property databases, MLS feeds, booking matrices, and compliance layers to map a detailed technical scaling path.' },
                    { step: '02', title: 'PropTech Core Hardening', body: 'Our senior developers engineer secure Plaid transactional gateways, custom layout planners, and RESO Web APIs in 2–4 weeks.' },
                    { step: '03', title: 'Release & Scaled Audits', body: 'We coordinate live systems validation and compliance reviews, ensuring your portals operate with high performance as portfolios expand.' },
                  ].map((p) => (
                    <div key={p.step} className="flex items-start gap-6 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-[13px] font-extrabold text-orange-600 flex-shrink-0 shadow-sm">
                        {p.step}
                      </div>
                      <div>
                        <h4 className="text-[16px] font-extrabold text-gray-950 mb-1 leading-snug">{p.title}</h4>
                        <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[500px]">{p.body}</p>
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
                FAQs
              </h2>

              <div className="space-y-4 divide-y divide-gray-100">
                {[
                  { q: 'Can you integrate custom PMS solutions with standard accounting ERPs?', a: 'Yes. We build secure syncing layers that post rents, deposits, and invoice payouts directly to platforms like NetSuite, QuickBooks, or SAP.' },
                  { q: 'Are your property search pages fully ADA and RESO-compliant?', a: 'Absolutely. We develop listing widgets that strictly adhere to WCAG 2.1 accessibility rules and fetch live property data via RESO Web APIs.' },
                  { q: 'Can you build custom rule-based unit generators like building wizards?', a: 'Yes. We specialize in custom spatial engines allowing property managers to programmatically configure irregularity templates, bedroom specs, and rents.' },
                ].map((f) => (
                  <div key={f.q} className="pt-4 first:pt-0">
                    <h4 className="text-[14.5px] font-extrabold text-gray-950 mb-2 leading-snug">{f.q}</h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar Navigator Widget */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 self-start space-y-6">

            {/* Sidebar box */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-4 select-none">
                NAVIGATE
              </span>
              <ul className="space-y-3.5">
                {[
                  { id: 'services', label: 'Services We Provide', ref: servicesRef },
                  { id: 'knowledge', label: 'Key Knowledge Areas', ref: knowledgeRef },
                  { id: 'case', label: 'Featured Case Study', ref: caseRef },
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
                Assemble vetted PropTech and PMS development teams in 2-4 weeks. Get started today.
              </p>
              {/* Overlapping small avatar reps */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/20" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/30" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/40" />
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
