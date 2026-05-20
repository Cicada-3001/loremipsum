'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Core Banking Systems (CBS)',
    desc: 'Banks face the challenge of managing financial operations with speed, accuracy, and scalability. Our Core Banking Systems centralize account management, transaction processing, and customer data. This solution simplifies operations, reduces errors, and delivers faster, more reliable services. We design systems using cloud computing, microservices, and APIs. These technologies allow for on-the-spot processing, advanced analytics, and secure access. Our platforms support omnichannel banking, fraud detection, and seamless integrations to keep your institution competitive.',
  },
  {
    title: 'Digital Banking Platform Development',
    desc: 'Customers demand fast, seamless, and secure digital experiences. Our digital banking platforms transform financial transactions, allowing your institution to deliver intuitive online account management, dynamic financial insights, and robust integrations. Whether you\'re a traditional bank or a fintech start-up, these platforms streamline operations and elevate customer satisfaction. We build user-centric systems with advanced cybersecurity, responsive designs, and API-driven integrations. These platforms support real-time financial updates, secure transactions, and personalized customer features, helping you stay ahead in a competitive, tech-driven market.',
  },
  {
    title: 'Mobile Banking Application Development',
    desc: 'Your clients expect their financial services to be at their fingertips. We develop secure, user-friendly mobile apps that enable on-the-go account management, seamless fund transfers, and real-time transaction tracking. These apps provide the convenience and speed your clients expect, enhancing engagement and loyalty. Our mobile banking solutions feature intuitive interfaces, advanced security protocols, and integration with core banking systems. With capabilities like personalized financial insights, push notifications, and multi-device compatibility, your institution can deliver an exceptional banking experience wherever your customers are.',
  },
  {
    title: 'Online Payment Gateway & Transaction Systems',
    desc: 'Clunky payment systems and security risks can cost you customers and revenue. Our custom online payment gateways and transaction systems enable smooth transactions with instant authorizations and robust security. These solutions provide customers with diverse payment options and easy access to transaction tracking, enhancing trust and satisfaction. We build scalable platforms with user-friendly interfaces, advanced fraud protection, and integration with global payment networks. With features like multi-currency support and real-time analytics, your institution can handle high transaction volumes while delivering a flawless payment experience.',
  },
  {
    title: 'Customer Relationship Management (CRM) Systems',
    desc: 'Fragmented customer data and inconsistent engagement strategies can hinder growth and weaken client relationships. Our custom CRM systems use advanced analytics and insights to help you better understand and meet client needs. These solutions optimize cross-selling opportunities, improve retention rates, and create more personalized customer experiences. With streamlined onboarding, automated engagement workflows, and real-time data access, our CRM systems enhance efficiency at every stage of the customer journey. Empower your team to deliver exceptional service and turn every interaction into a growth opportunity.',
  },
  {
    title: 'Loan Origination and Management Systems',
    desc: 'Managing loans efficiently is critical to staying competitive in a fast-paced financial market. Our Loan Origination and Management Systems streamline the lending process, from application and credit scoring to approval and servicing. This solution accelerates loan processing, reduces errors, and delivers a seamless experience for your team and customers. We create end-to-end lending platforms using advanced automation, AI-driven decision-making, and intuitive dashboards. These systems enhance risk assessment, improve compliance, and provide responsive insights into your lending portfolio, helping you make faster, smarter decisions and scale your credit operations.',
  },
  {
    title: 'Fraud Detection and Prevention Systems',
    desc: 'Evolving fraud tactics can undermine trust and put your institution at serious risk. Our Fraud Detection and Prevention Systems use advanced machine learning and behavioral analytics to identify anomalies without delay. This solution stops unauthorized transactions, detects identity theft, and protects your financial ecosystem with precision and speed. We design systems that analyze vast datasets, leveraging AI-powered algorithms to uncover patterns and flag risks. With instant alerts, predictive insights, and adaptive defenses, your institution stays one step ahead of fraud, safeguarding operations and building customer trust.',
  },
  {
    title: 'AI & Machine Learning Integration for Customer Service',
    desc: 'Scaling personalized customer service while managing high volumes of interactions often leads to inefficiencies and missed opportunities. Our AI and Machine Learning solutions transform customer service by enabling predictive issue resolution, personalized banking experiences, and dynamic fraud detection. These tools improve customer satisfaction while streamlining operations. With intelligent chatbots, real-time data processing, and adaptive AI algorithms, you can reduce operational costs, resolve queries faster, and strengthen security. Whether serving local clients or a global customer base, our solutions deliver efficiency without compromising the personal touch.',
  },
  {
    title: 'Risk Management & Compliance Software',
    desc: 'Navigating complex regulations and mitigating financial risks can overwhelm even the most robust institutions. Our Risk Management & Compliance Software identifies risks, delivers instant insights, and simplifies compliance processes with automation. These solutions strengthen regulatory adherence, minimize exposure, and safeguard financial integrity. With advanced analytics and a robust compliance framework, our software streamlines risk assessments and tracks evolving regulations in real time. Equip your institution to make proactive decisions, reduce liabilities, and maintain trust with both customers and regulators.',
  },
  {
    title: 'Wealth Management & Investment Platforms',
    desc: 'Disorganized portfolio management and limited client communication can lead to missed opportunities and inefficiencies. Our Wealth Management & Investment Platforms simplify portfolio management, provide real-time investment tracking, and support strategic decision-making through user-friendly digital interfaces. These solutions enhance collaboration and streamline financial asset management. With advanced security protocols, our platforms protect sensitive financial data and align with industry standards. Equip your team to deliver personalized investment strategies and elevate the client experience with seamless and efficient wealth management tools.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Enhanced Data Security',
    desc: 'Protect your business from any potential cyber threats with custom solutions like robust encryption protocols, multi-factor authentication, and advanced security measures.',
  },
  {
    num: '2',
    title: 'Improved Customer Experience',
    desc: 'Offer personalized and user-friendly interfaces for a streamlined banking experience. From seamless account management to intuitive transaction processes, custom solutions align with your brand identity and customer expectations, fostering trust and loyalty among your client base.',
  },
  {
    num: '3',
    title: 'Exclusive Features',
    desc: 'Whether it\'s implementing innovative financial tools, personalized reporting features, or advanced analytics, we work closely with you to develop exclusive features and custom solutions, enabling your bank to stand out in the crowd of competitors.',
  },
  {
    num: '4',
    title: 'Innovation',
    desc: 'By leveraging the most recent advancements in AI, machine learning, and other emerging technologies, your business will stay ahead of the curve by continuing to innovate. We help you adapt to the ever-evolving trends and customer expectations in the financial industry.',
  },
  {
    num: '5',
    title: 'Ownership and Autonomy',
    desc: 'Unlike off-the-shelf solutions, custom banking software services give you complete ownership and autonomy over your system. Gain the flexibility to modify, update, or scale your software according to your evolving business needs without worrying about the restrictions of third-party licenses.',
  },
];

const accordions = [
  {
    title: 'Retail Banks',
    desc: 'Develop tailored solutions for account management, online and mobile banking, customer service enhancements, and personalized product offerings.',
  },
  {
    title: 'Commercial Banks',
    desc: 'These institutions can benefit from custom software for managing corporate accounts, facilitating bulk transactions, and automating treasury services.',
  },
  {
    title: 'Credit Unions',
    desc: 'Custom software can help credit unions provide a more personalized service experience to their members, improve operational efficiency, and offer competitive products tailored to the specific needs of their member base.',
  },
  {
    title: 'Investment Banks',
    desc: 'Investment banks often need custom software for complex financial analyses, trading systems, risk management, and regulatory compliance.',
  },
  {
    title: 'Wealth Management Firms',
    desc: 'Custom software can provide tools for portfolio management, financial planning, customer relationship management (CRM), and compliance tracking.',
  },
];

export default function BankingPage() {
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
            <span className="text-gray-800 font-bold">Banking</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#0078d4] uppercase tracking-widest block mb-3.5 select-none">
                BANKING SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Build and scale custom banking software solutions
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Develop and enhance core banking systems. The financial industry is constantly under pressure to meet rising customer expectations, navigate complex regulations, and combat sophisticated cyber threats.
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

            {/* Right Column visual */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div
                className="w-full h-full hover:scale-102 transition-transform duration-500"
                style={{ backgroundImage: 'url(/banking.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </div>

          </div>

          {/* Trust Banner Panel */}
          <div className="mt-16 bg-gray-600 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-gray-900/10 select-none">
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
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Banking development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                The financial industry is constantly under pressure to meet rising customer expectations, navigate complex regulations, and combat sophisticated cyber threats—all while staying ahead of the competition. That's where we come in. Our software solutions turn these challenges into opportunities, delivering secure digital platforms, AI-powered analytics, and instant fraud detection systems. Backed by years of experience, our banking software development streamlines operations, strengthens compliance, and improves the customer experience.
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

            {/* Block 2: Bespoke Benefits Grid */}
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
                Which institutions benefit from custom banking software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Custom banking software solutions benefit a wide range of organizations, from retail banks to high-growth fintech startups. Examples include:
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
                    { step: '01', title: 'Operational Security & Compliance Audit', body: 'We assess your data workflows, security profiles, and regulatory requirements (PCI-DSS, GDPR, PSD2) to map secure pipelines.' },
                    { step: '02', title: 'Hardening & Custom Banking Release', body: 'Our senior developer pods construct encrypted payment channels, custom core modules, and robust APIs in 3–4 weeks.' },
                    { step: '03', title: 'Ongoing Penetration Checks', body: 'We perform automated stress audits and API scans, checking multi-currency gates and ensuring platform resilience as transaction volumes scale.' },
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
                  { q: 'Can custom banking tools integrate with legacy core systems?', a: 'Yes. We construct custom middleware and endpoints that securely connect new digital platforms directly to existing legacy mainframes and CRM dashboards without causing operational downtime.' },
                  { q: 'How do automated fraud detection systems analyze anomalies in real-time?', a: 'Using sophisticated AI and machine learning models, our algorithms compare transaction characteristics against verified indices and historical patterns to flag high-risk activities in milliseconds.' },
                  { q: 'Are your bespoke banking solutions fully PCI-DSS and GDPR compliant?', a: 'Absolutely. We apply end-to-end data encryption, strict MFA verification layers, and rigorous access controls, ensuring all development meets standard global financial compliance requirements.' },
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
                  { id: 'services', label: 'Banking development services we provide', ref: servicesRef },
                  { id: 'benefits', label: 'Benefits of building bespoke solutions', ref: benefitsRef },
                  { id: 'institutions', label: 'Which institutions benefit from custom banking software development?', ref: institutionsRef },
                  { id: 'process', label: 'Our process. Simple, seamless, streamlined.', ref: processRef },
                  { id: 'faq', label: 'Frequently Asked Questions (FAQ)', ref: faqRef },
                ].map((item) => {
                  const isActive = activeAnchor === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleAnchorClick(item.id, item.ref)}
                        className={`text-[12px] font-medium text-left select-none cursor-pointer hover:text-white transition-colors leading-snug ${
                          isActive ? 'text-white border-l-[3px] border-l-white pl-2' : 'text-gray-400 pl-[11px] border-l-[3px] border-l-transparent'
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

            {/* Industry Insight cards */}
            <div className="bg-gray-200 rounded-2xl p-5 shadow-sm text-center">
              <h5 className="text-[14px] font-extrabold text-gray-900 leading-snug mb-1">Transforming the Financial Landscape</h5>
            </div>

            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="h-[120px]" style={{ backgroundImage: 'url(/banking.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h5 className="text-[13px] font-semibold text-gray-800 leading-snug">Web3 Banking Defined: Advantages, Risks & Examples</h5>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
