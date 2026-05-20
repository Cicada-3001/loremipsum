'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Custom Healthcare Software Development Services',
    desc: 'Centralize patient information, streamline administrative tasks, monitor treatments remotely, and more. Various medical institutions use custom healthcare software to provide more accurate and efficient patient care. As experts in 100+ technologies, we help you build robust, legally-compliant medical software that scales as your needs evolve.',
  },
  {
    title: 'Telemedicine App Development',
    desc: 'Connect patients and providers, no matter the distance. Telemedicine apps facilitate secure, contactless, real-time consultations. Discuss symptoms, diagnose, and treat patients through video calls or live chat. Make your healthcare services accessible to more people, even in remote locations.',
  },
  {
    title: 'Healthcare Management Systems',
    desc: 'Increase productivity by organizing and automating your daily processes. Build management systems that handle everything from patient admissions to medical billing, freeing up staff for critical care tasks.',
  },
  {
    title: 'Healthcare Cloud Solutions',
    desc: 'Not only do we ensure top-tier security to protect sensitive patient data, but our cloud infrastructure is also designed to scale as your needs grow. Benefit from instant access to patient data and medical histories. Plus, with automated system backups, you won\'t need to worry about data loss.',
  },
  {
    title: 'Healthcare Integrations',
    desc: 'We bridge different healthcare platforms, allowing them to communicate and share crucial data. Whether you\'re linking a pharmacy\'s inventory system to a hospital\'s EHR or a private clinic\'s billing system, our integrations ensure seamless third-party connections.',
  },
  {
    title: 'Data & Analytics',
    desc: 'We apply statistics and ML/AI algorithms to turn vast amounts of data into actionable insights. Dive deep into predictive analytics to anticipate patient needs, understand emerging patient trends, optimize care strategies, and access comprehensive operational reports. Make more informed decisions that lead to better patient outcomes.',
  },
  {
    title: 'Modernization',
    desc: 'Upgrade, don\'t replace. We revamp legacy systems, bringing them up to date with today\'s healthcare standards. Update older EHRs. Revive outdated patient portals. Our modernization ensures your institution remains at the forefront of medical innovation.',
  },
];

const benefits = [
  {
    num: '1',
    title: 'Tailored to Your Needs',
    desc: 'Going the custom software route is advantageous for many reasons. The biggest benefit: you get a product that aligns with your specific challenges, workflows, and healthcare requirements. This ensures a more precise fit compared to off-the-shelf solutions.',
  },
  {
    num: '2',
    title: 'Enhanced Data Security',
    desc: 'Custom healthcare software offers enhanced data protection tailored to your organization\'s needs. Unlike off-the-shelf products with known vulnerabilities, custom solutions can reduce breach risks by addressing specific threats and allowing swifter security updates. It\'s a proactive approach to safeguarding your patients\' sensitive data.',
  },
  {
    num: '3',
    title: 'Seamless Integration',
    desc: 'Custom healthcare software smoothly integrates with established healthcare platforms and systems, such as EHRs or LISs. This eliminates the integration challenges that healthcare providers often face with off-the-shelf solutions.',
  },
  {
    num: '4',
    title: 'Scalability',
    desc: 'As the healthcare industry evolves, so can your custom software. Expand and adapt to the changing needs of healthcare providers and patients, free from the constraints and additional costs associated with platform-based tools.',
  },
  {
    num: '5',
    title: 'Ownership and Autonomy',
    desc: 'With custom healthcare software development, providers enjoy complete autonomy over features, updates, and data management. This reduces dependencies and ensures the software continues to align with the company\'s unique demands.',
  },
];

const accordions = [
  {
    title: 'Hospitals and Clinics',
    desc: 'Enhance patient care through streamlined electronic health record systems, leading to faster and more accurate diagnoses.',
  },
  {
    title: 'Private Practices',
    desc: 'Deliver more personalized patient experiences by integrating electronic medical records and telehealth functionalities.',
  },
  {
    title: 'Diagnostic and Imaging Centers',
    desc: 'Achieve higher precision in diagnostic processes with tailored imaging data management.',
  },
  {
    title: 'Pharmaceutical Companies',
    desc: 'Accelerate drug research and development processes through optimized data analysis and management tools.',
  },
  {
    title: 'Medical Device Manufacturers',
    desc: 'Ensure compatibility and integration with various devices, resulting in accurate real-time patient monitoring.',
  },
];

export default function HealthcarePage() {
  const [formData, setFormData] = useState({ name: '', email: '', isSubmitted: false });
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeAnchor, setActiveAnchor] = useState('services');

  // Refs for tracking coordinates
  const servicesRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);
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
      } else if (caseStudyRef.current && scrollPos >= caseStudyRef.current.offsetTop) {
        setActiveAnchor('case-study');
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
            <span className="text-gray-800 font-bold">Healthcare</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#0078d4] uppercase tracking-widest block mb-3.5 select-none">
                HEALTHCARE SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Build secure healthcare software that scales with you.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Create HIPAA-compliant healthcare software that improves operational efficiency and patient care outcomes.
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

            {/* Right Column clinical corridor view */}
            <div className="lg:col-span-5 h-[320px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div
                className="w-full h-full hover:scale-102 transition-transform duration-500"
                style={{ backgroundImage: 'url(/bi_healthcare.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
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

            {/* Block 1: Services Grid (7 Columns) */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Healthcare software development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                Our tailored healthcare solutions elevate patient care and streamline internal operations. We cater to a diverse clientele, including hospitals, clinics, pharmacies, health insurance companies, government agencies, research institutions, pharmaceutical companies, and more. Here are some of the ways we help our healthcare clients.
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
                  onClick={() => handleAnchorClick('case-study', caseStudyRef)}
                  className="text-gray-900 hover:text-orange-600 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1 select-none cursor-pointer"
                >
                  See all solutions
                  <span>↓</span>
                </button>
              </div>
            </div>

            {/* Gennev Case Study Card */}
            <div ref={caseStudyRef} id="case-study" className="bg-[#fcfdfd] border border-gray-150 rounded-3xl p-8 shadow-sm scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-4 select-none">
                CASE STUDY
              </span>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <span className="text-3xl font-black text-[#0078d4] block mb-4 select-none">gennev</span>
                  <p className="text-[13px] leading-relaxed text-gray-600 font-medium mb-6">
                    BairesDev has become an integral development partner for Gennev. We provide highly skilled engineers in the areas of front-end interface design, site reliability, scalability, and maintenance. As in all projects related to the healthcare industry, security measures are prioritized as they are critical due to confidentiality issues and because of the need to comply with industry data standards such as HIPAA. Read the full case study.
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {['React', 'MongoDB', 'React Native'].map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 text-[11px] font-bold px-3 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <Link href="#" className="text-orange-600 hover:text-orange-700 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 select-none">
                    More Case Studies <span>→</span>
                  </Link>
                </div>
                <div className="md:col-span-5 h-[200px] rounded-2xl overflow-hidden border border-gray-150">
                  <div className="w-full h-full" style={{ backgroundImage: 'url(/allrentals_case.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>
              </div>
            </div>

            {/* Block 2: Bespoke Benefits Grid (5 Columns) */}
            <div ref={benefitsRef} id="benefits" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                ADVANTAGES & OUTCOMES
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-12">
                Benefits of building bespoke solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

              {/* Bottom clinicians office workspace */}
              <div className="h-[240px] rounded-3xl overflow-hidden border border-gray-150 shadow-sm">
                <div className="w-full h-full" style={{ backgroundImage: 'url(/bi_healthcare.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
            </div>

            {/* Block 3: Expandable Institutions Accordion */}
            <div ref={institutionsRef} id="institutions" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                INDUSTRY REACH
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Which institutions benefit from custom healthcare software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Various healthcare organizations, ranging from hospitals, and pharmacies to diagnostic labs and rehabilitation centers, greatly benefit from custom healthcare software development. Tailored solutions address their unique challenges, ensuring optimized workflows, improved patient care, and streamlined administrative tasks. This personalized approach to software ensures that healthcare providers can meet their operational and clinical needs.
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
                    { step: '01', title: 'HIPAA & Compliance Audit', body: 'We assess active medical records tracking frameworks, encrypted VPN tunnels, and audit logs to guarantee absolute medical database compliance.' },
                    { step: '02', title: 'Agile Custom EHR Release', body: 'Our senior developer pods construct real-time telemetry dashboards, HL7 integration hooks, and secure database frameworks in 3–4 weeks.' },
                    { step: '03', title: 'Ongoing diagnostic stress tests', body: 'We perform automated stress audits and API scans, checking telemedicine portal reliability as your clinic grows.' },
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
                  { q: 'Are all systems and APIs fully HIPAA-compliant?', a: 'Yes. We enforce robust end-to-end encryption protocols, data backup pipelines, and secure user permissions ensuring absolute HIPAA compliance.' },
                  { q: 'Can you integrate third-party LIS or EHR tools?', a: 'Absolutely. We specialize in building HL7 and FHIR interface integrations, guaranteeing clean data sharing across hospital systems.' },
                  { q: 'Do you support cloud-native healthcare databases?', a: 'Yes. We design and host secure cloud environments on AWS or Azure with built-in disaster recovery and continuous security monitoring.' },
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
                  { id: 'case-study', label: 'Bespoke Client Case Studies', ref: caseStudyRef },
                  { id: 'benefits', label: 'Benefits of Bespoke Solutions', ref: benefitsRef },
                  { id: 'institutions', label: 'Who Benefits', ref: institutionsRef },
                  { id: 'process', label: 'Our Process Roadmap', ref: processRef },
                  { id: 'faq', label: 'FAQs', ref: faqRef },
                ].map((item) => {
                  const isActive = activeAnchor === item.id || (item.id === 'case-study' && activeAnchor === 'case-study');
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
                Assemble vetted Healthcare and HIPAA engineering teams in 2-4 weeks. Get started today.
              </p>
              {/* Overlapping small avatar reps */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/20" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/30" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/40" />
              </div>
            </div>

            {/* Healthcare Insight cards from reference */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0078d4] transition-colors cursor-pointer select-none">
              <div className="h-[110px]" style={{ backgroundImage: 'url(/allrentals_case.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h5 className="text-[12.5px] font-extrabold text-gray-900 leading-snug mb-1">Bringing Humanity into Healthcare — with Technology</h5>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Read Insight</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-[#0078d4] transition-colors cursor-pointer select-none">
              <div className="h-[110px]" style={{ backgroundImage: 'url(/allrentals_case.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <h5 className="text-[12.5px] font-extrabold text-gray-900 leading-snug mb-1">Healthcare and the Cloud: A Natural Fit</h5>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Read Insight</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
