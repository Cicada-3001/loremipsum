'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Policy Management Systems',
    desc: 'Policy management software helps insurance providers with policy creation, administration, and workflow tracking. We create custom solutions to help you manage various policy types. Our software solutions enable insurers to oversee the entire policy workflow—from the initial quote to renewal and termination.',
  },
  {
    title: 'Claims Management Systems',
    desc: 'Building or improving your claims management system helps streamline your claims evaluation and management processes. By integrating features such as fraud detection, secure access, mobile app support for claim settlements, and real-time status updates, we enable you to minimize processing times and reduce human errors. This enhances operational efficiency within your organization.',
  },
  {
    title: 'Custom Billing and Payment Software',
    desc: 'A tailored billing and payment system designed to match the specific business reduces burdens on your employees. Streamline invoice generation, payment processing, and financial reconciliation with our customized payment platforms. We integrate features like automated billing, secure online payment gateways, and multi-currency support.',
  },
  {
    title: 'Custom Actuarial Software',
    desc: "Designed to accurately calculate risk and determine premiums, we build software for effective financial planning and strategic decision-making in the insurance industry. You'll benefit from critical insights and forecasts essential for navigating the complex world of insurance risk management.",
  },
  {
    title: 'Customer Relationship Management (CRM) Platforms',
    desc: 'Businesses can foster stronger relationships and offer personalized services through efficient data management. We develop CRM software that gives you a 360-degree view of client interactions. With AI-powered analytics, we also help insurers anticipate user needs in advance.',
  },
  {
    title: 'Risk Assessment and Analytics Tools',
    desc: 'Being able to accurately assess and manage risks lets you stay ahead of your competitors. We leverage big data analytics, machine learning, and predictive modeling to provide deep insights into risk factors relevant to insurance processes. These insights help you optimize pricing strategies and mitigate potential losses.',
  },
  {
    title: 'Regulatory Compliance Management Software',
    desc: 'Regulatory noncompliance can cost insurance companies millions of dollars. Our InsurTech solutions ensure consistent adherence to industry standards and automate reporting. Maintain your reputation, avoid penalties, and ensure operational integrity.',
  },
  {
    title: 'Custom Mobile Applications',
    desc: 'Custom-built insurance apps can significantly enhance client satisfaction. Clients appreciate the convenience offered by comprehensive and mobile-optimized insurance software. We can help you integrate features like policy management, claims filing, support, and other services.',
  },
  {
    title: 'Document Management Software',
    desc: 'Every insurance company needs a centralized, organized, and secure insurance document management process. Our tailored insurance systems include features like automated workflows, version control, and compliance tracking.',
  },
  {
    title: 'AI & ML Fraud Detection Systems',
    desc: 'Insurance fraud is costly for carriers and can quickly reduce profits. We utilize sophisticated algorithms to safeguard insurance companies against fraudulent activities. Our solutions allow you to analyze patterns and detect anomalies with monetary interchange in real-time, flagging suspicious claims effectively.',
  },
  {
    title: 'Predictive Analytics',
    desc: 'Glean insights and project trends. We develop predictive analytics tools that can streamline your business processes with intelligent risk scoring, catastrophe modeling, data visualization, and smart trend analysis from big data.',
  },
  {
    title: 'AI-Driven Customer Interaction & Risk Assessment Platforms',
    desc: 'By employing AI for personalized customer communications and advanced analytics, we develop software that helps you optimize engagement and provide precise risk evaluations. Youll facilitate more accurate underwriting, tailored customer experiences, and improved decision-making in risk management.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Tailored to Your Needs',
    desc: 'Adapt your insurance software to fit the specific demands of your business. For instance, if property damage coverage and claims predominate your portfolio, features can be designed and implemented to address these areas. You can also tailor the solution to meet unique policy needs or comply with regulatory requirements.',
  },
  {
    num: '2',
    title: 'Enhanced Data Security',
    desc: "Protect sensitive information with advanced security protocols and encryption methods. By addressing your specific data protection needs, you'll significantly reduce the risk of data breaches compared to an off-the-shelf solution.",
  },
  {
    num: '3',
    title: 'Integration with Existing Systems',
    desc: 'Disruptions to the existing business processes and software systems are among the key factors that keep insurance businesses from implementing advanced insurance software. Custom software facilitates seamless integration with your current systems, preserving operational continuity and minimizing disruptions to business processes.',
  },
  {
    num: '4',
    title: 'Competitive Advantage',
    desc: 'Custom software development in insurance offers a competitive edge by enabling companies to implement innovative features, new technologies, and processes that set them apart. You can cater to unique market needs or offer superior customer service.',
  },
  {
    num: '5',
    title: 'Improved User Experience',
    desc: 'With features like personalized policy recommendations, streamlined processing, and intuitive self-service portals, bespoke solutions can significantly enhance consumer satisfaction and loyalty. Happier customers will result in higher retention rates and a stronger brand reputation.',
  },
];

const accordions = [
  {
    title: 'Insurance Companies',
    desc: 'Traditional insurers leverage custom software to streamline their operations, enhance user experiences, manage risk more effectively, and adapt to changing market dynamics.',
  },
  {
    title: 'Healthcare Providers',
    desc: 'Hospitals and healthcare systems often need specialized health insurance solutions to manage patient data and handle complex healthcare regulations.',
  },
  {
    title: 'Brokers and Agents',
    desc: 'Custom software can help brokers and agents manage relationships, automate routine tasks, and provide tailored insurance solutions to their customers.',
  },
  {
    title: 'InsurTech Startups',
    desc: 'Startups specializing in InsurTech can leverage custom digital solutions to introduce innovative insurance products and services.',
  },
  {
    title: 'Corporate Clients',
    desc: 'Large corporations often require bespoke business insurance solutions to cover unique risks specific to their industry or business operations.',
  },
];

export default function InsurancePage() {
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
            <span className="text-gray-800 font-bold">Insurance</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#0078d4] uppercase tracking-widest block mb-3.5 select-none">
                INSURANCE SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Tailored insurance software that streamlines your efforts and improves efficiency.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                From underwriting to fraud detection software, create efficient and secure solutions to boost your insurance business. Assemble senior developer pods in 2-4 weeks.
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

            {/* Right Column office layout */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div
                className="w-full h-full hover:scale-102 transition-transform duration-500"
                style={{ backgroundImage: 'url(/case_compliance.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
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

            {/* Block 1: Services Grid (12 Columns) */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Insurance development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                To stay competitive in the insurance industry, businesses must adopt sophisticated digital solutions. We build custom software that caters to insurance carriers and businesses looking to gain efficiency, improve their processes, and offer better services to their customers and clients. Here are some of the services we provide.
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
                Which institutions benefit from custom insurance software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Custom insurance software solutions benefit a wide range of businesses and industries, from insurance carriers to healthcare institutions. Examples include:
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
                    { step: '01', title: 'Operational Security Audit', body: 'We assess active claims databases, security profiles, and compliance registries to map security pipelines.' },
                    { step: '02', title: 'Hardening & Custom WMS Release', body: 'Our senior developer pods construct encrypted billing channels, custom policy panels, and GRC dashboards in 3–4 weeks.' },
                    { step: '03', title: 'Ongoing Penetration checks', body: 'We perform automated stress audits and API scans, checking multi-currency gates as transactions scale.' },
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
                  { q: 'Can custom actuarial tools integrate with legacy core systems?', a: 'Yes. We construct custom endpoints and data streams that connect actuarial calculation libraries directly to existing CRM dashboards.' },
                  { q: 'How do automated fraud detection systems analyze anomalies in real-time?', a: 'Using sophisticated machine learning modeling, algorithms compare claim characteristics against verified indices to flag high-risk transactions.' },
                  { q: 'Do custom mobile insurance apps comply with HIPAA or SOC2?', a: 'Absolutely. We apply end-to-end data encryption and strict MFA verification layers, fulfilling standard global compliance requirements.' },
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
                Assemble vetted Insurance and InsurTech development teams in 2-4 weeks. Get started today.
              </p>
              {/* Overlapping small avatar reps */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/20" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/30" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/40" />
              </div>
            </div>

            {/* Insurance Insight cards from reference */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0078d4] transition-colors cursor-pointer select-none">
              <div className="h-[110px]" style={{ backgroundImage: 'url(/allrentals_case.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h5 className="text-[12.5px] font-extrabold text-gray-900 leading-snug mb-1">Should Your Business Adopt Smart Contracts?</h5>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Read Insight</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
