'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const cyberServices = [
  {
    id: 'risk-assessment',
    title: 'Cybersecurity Risk Assessment',
    desc: 'Pinpoint potential vulnerabilities in your digital defenses with a cybersecurity risk assessment. Evaluate threats, identify weaknesses, and outline preventative measures to keep your business safe.',
    sub: 'Using Qualys, Nessus, and OpenVAS, we conduct end-to-end cybersecurity assessments. We facilitate exhaustive risk detection to prepare your company for many different possibilities. With actionable insights into your current security defenses, you can mitigate threats and eliminate weaknesses within your networks, systems, and applications.',
  },
  {
    id: 'intrusion-detection',
    title: 'Intrusion Detection and Response',
    desc: 'Monitor your systems for malicious activities and outline plans to respond to threats before they arise. Intrusion detection and response planning will help mitigate security incidents and protect your company data.',
    sub: 'We assess network traffic, search for anomalies, and create systems to monitor potential threats. Leveraging tools like Wireshark, Snort, and Suricata, we minimize the impact of intrusions, detect malicious intent, and protect your business from cybersecurity incidents.',
  },
  {
    id: 'endpoint-detection',
    title: 'Endpoint Detection and Response',
    desc: 'Enhance your company\'s security posture across all endpoints to keep your organization safe. Access real-time endpoint monitoring to analyze user behavior and rapidly respond to threats as they arise.',
    sub: 'We provide comprehensive endpoint monitoring. Once we detect a threat, we leverage AI-driven threat response tools like Carbon Black to identify, assess, and neutralize it.',
  },
  {
    id: 'governance-risk',
    title: 'IT Governance, Risk, and Compliance',
    desc: 'Align with important compliance initiatives to decrease risk and adhere to governmental and industry regulations. Streamline compliance across all of your deployments and develop a clear strategy for future regulatory changes.',
    sub: 'We customize and leverage tools like RSA Archer and Service Now GRC to optimize business compliance and minimize risk.',
  },
  {
    id: 'vulnerability-scanning',
    title: 'Vulnerability Scanning',
    desc: 'Scan every connected application, network, and system to your business to identify weaknesses and build a stronger cybersecurity ecosystem.',
    sub: 'We use OpenVAS and Nessus to scan corporate networks to find potential vulnerabilities. This helps mitigate security risks while providing the foundation for an advanced intrusion detection system.',
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    desc: 'Penetration testing involves simulating real-world cyberattacks, allowing your business to better prepare its systems and mitigate future risks. Neutralize cyber threats and protect against data breaches with regular ethical hacking endeavors.',
    sub: 'Our penetration testing cybersecurity experts use threat intelligence to launch pre-planned cyber attacks on your existing security solutions. With tools like NMap, Wireshark, and Metasploit, we develop, test, and simulate cyberattacks to pinpoint vulnerabilities and craft solutions.',
  },
];

export default function CybersecurityPage() {
  const [formData, setFormData] = useState({ name: '', email: '', needs: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeAnchor, setActiveAnchor] = useState('services');

  // Refs for tracking scroll coordinates
  const servicesRef = useRef<HTMLDivElement>(null);
  const knowledgeRef = useRef<HTMLDivElement>(null);
  const practicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) setIsSubmitted(true);
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
      } else if (practicesRef.current && scrollPos >= practicesRef.current.offsetTop) {
        setActiveAnchor('practices');
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
            <span className="text-gray-400">Solutions</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-bold">Cybersecurity</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Hero Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                Enterprise Cybersecurity Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Protect your operations with elite <span className="text-[#0078d4]">cybersecurity</span> architects.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Work with top-tier cybersecurity developers and certified threat intelligence engineers. Hardon your software stacks, build resilient intrusion response pipelines, and guarantee regulatory compliance.
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

                {/* Security tools */}
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-3 select-none">Credentials & Tools</span>
                  <div className="flex items-center gap-3">
                    {[
                      { bg: 'bg-[#0078d4]', name: 'SOC 2', text: 'SOC2' },
                      { bg: 'bg-emerald-600', name: 'ISO 27001', text: 'ISO' },
                      { bg: 'bg-orange-600', name: 'Penetration Tested', text: 'PENT' },
                      { bg: 'bg-gray-900', name: 'CISSP Certified', text: 'CISS' },
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
                  Get a comprehensive security audit.
                </h3>
                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-center py-10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">✓</div>
                    <h4 className="text-emerald-950 font-black text-lg mb-2">Audit Requested</h4>
                    <p className="text-sm text-emerald-800 font-medium">Our cybersecurity threat leads will contact you at <strong>{formData.email}</strong> to coordinate a safe audit schedule.</p>
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
                    <textarea
                      required rows={4} placeholder="Describe your compliance objectives or system security vulnerabilities."
                      value={formData.needs}
                      onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-orange-600 text-white font-extrabold text-sm  tracking-wider rounded-lg shadow-md shadow-orange-500/10 hover:bg-orange-700 active:scale-[0.98] transition-all duration-200 cursor-pointer mt-1"
                    >
                      Request Secure Callback
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
                OUR SERVICES
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Cybersecurity Development Services We Provide
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {cyberServices.map((svc) => (
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

              {/* Case Study Card integrated below services grid */}
              <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                {/* Left study information */}
                <div className="flex-1">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-4 select-none">
                    CASE STUDY
                  </span>
                  {/* Forcepoint logo header */}
                  <div className="flex items-center space-x-2 mb-4 select-none">
                    <div className="w-5 h-5 rounded bg-gray-900 flex items-center justify-center text-[10px] text-white font-black">F</div>
                    <span className="text-lg font-black text-gray-950 tracking-tight">Forcepoint</span>
                  </div>
                  <p className="text-[14.5px] leading-relaxed font-semibold text-gray-800 mb-6">
                    Forcepoint partnered with BairesDev to gain access to a team of skilled engineers. Their collaboration resulted in enhanced cybersecurity products, delivering an unparalleled web experience.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    {['Java', 'PHP'].map((t) => (
                      <span key={t} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold select-none">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href="#" className="text-[13.5px] font-bold text-[#0078d4] hover:text-[#005a9e] flex items-center gap-1 transition-all group/link">
                    Read Case Study
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
                {/* Right photo */}
                <div className="w-full md:w-[220px] h-[220px] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                  <div
                    className="w-full h-full hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: 'url(/cyber_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                </div>
              </div>
            </div>

            {/* Block 2: Key Knowledge Tab Selector */}
            <div ref={knowledgeRef} id="knowledge" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                THREAT INTELLIGENCE
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Key Things to Know About Cybersecurity
              </h2>

              {(() => {
                const tabs = [
                  {
                    title: 'Why Cybersecurity Is Essential',
                    text: 'Year after year, businesses across the globe experience more cybercrime than ever before. In fact, in 2023, it was predicted that cybercrime would cost businesses over $11.50 trillion dollars. This figure will continuously rise over the coming years, reaching an anticipated $23.82 trillion by 2027.',
                    subText: 'As the mounting cyber threat continues to leech more capital from businesses, it\'s never been more important to rely on comprehensive cybersecurity services to keep your business safe. Continual threat intelligence, risk monitoring, and vulnerability testing will help to detect and neutralize cyber threats before they create any major issues for your organization.',
                    bullets: [
                      { title: 'Avoid Exploits', body: 'Managed security services help to monitor active threats, detect emerging dangers, and respond to cyber events with enough speed and precision to neutralize them.' },
                      { title: 'Reduce the Chance of Data Loss', body: 'Data is your company\'s most valuable resource. Cybersecurity services help to protect your data from vulnerabilities, reduce the chance of breaches, and keep your information safe from malicious actors.' },
                      { title: 'Access the Latest Security Intelligence', body: 'Identifying a cybersecurity risk requires a critical understanding of evolving threats and changes.' }
                    ]
                  },
                  {
                    title: 'Cybersecurity in Different Industries',
                    text: 'Every industry has a unique map of threats that commonly plague their businesses. In response to changing requirements, different sectors have numerous initiatives, regulations, and minimum standards to adhere to.',
                    subText: 'For example, cyber security services in healthcare have strict privacy laws to keep patient records safe. Due to this, the minimum requirement for patient privacy and security monitoring is much higher in healthcare and other related industries than in logistics.',
                    bullets: [
                      { title: 'Manufacturing', body: 'Holds the highest threat burden accounting for 24.8% of global enterprise security attacks.' },
                      { title: 'Finance and Insurance', body: 'High-value transaction systems face 18.9% of targeting efforts.' },
                      { title: 'Professional & Business Services', body: 'Represents 14.6% of cyber incidents targeting employee portals.' },
                      { title: 'Energy & Infrastructure', body: 'Crucial grid networks face 10.7% of persistent nation-state threats.' },
                      { title: 'Retail & Wholesale', body: 'Customer payment database leaks cover 8.7% of all targeting metrics.' }
                    ]
                  },
                  {
                    title: 'Legal and Regulatory Aspects',
                    text: 'Maintaining regulatory alignment safeguards client confidence and protects your enterprise from heavy financial penalties. Modern frameworks dictate strict access matrices, rest-data encryption, and immutable access auditing logs.',
                    subText: 'Compliance auditing shouldn\'t slow you down. We configure tools like GRC catalogs to establish reliable security trails automatically, streamlining audits.',
                    bullets: [
                      { title: 'SOC 2 Type II Validation', body: 'Strict certification testing your internal systems for operational security, process integrity, and data access protection.' },
                      { title: 'GDPR / CCPA Data Sovereignty', body: 'Detailed controls ensuring users maintain ownership, right-to-purge, and masking of private demographic details.' },
                      { title: 'HIPAA Health Security Rules', body: 'Rigorous storage constraints guaranteeing healthcare records are protected from unverified lookups.' }
                    ]
                  },
                  {
                    title: 'Role of Human Behavior',
                    text: 'Software is only as secure as the human operator. Over 85% of corporate cyber breaches involve some degree of human vulnerability, including credentials sharing, insecure configs, or direct phishing tricks.',
                    subText: 'We help harden your organizational defenses by implementing continuous simulated phishing runs, secure authentication schemes, and role-restricted filesystems.',
                    bullets: [
                      { title: 'Phishing Training Runs', body: 'Simulated campaigns training employees to spot and report deceitful emails instantly.' },
                      { title: 'Zero Trust Authentication (MFA)', body: 'Continuous device and identity authorization rules eliminating simple passwords.' },
                      { title: 'Role-Based File Authorization', body: 'Configuring exact database matrices restricting accessibility to only required worker operations.' }
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

            {/* Block 3: Best Practices Grid */}
            <div ref={practicesRef} id="practices" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                COMPLIANCE & STANDARDS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-10">
                Best Practices for Cybersecurity
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Zero Trust Access Controls', desc: 'Assume all incoming connections are compromised. Re-authenticate every API call and local database request continuously.' },
                  { title: 'Continuous Audits & Observability', desc: 'Scan infrastructure logs, server networks, and codebase vulnerabilities hourly to flag anomalies instantly.' },
                  { title: 'Secure Life Cycle (SSDLC)', desc: 'Integrate automated static testing (SAST) and software dependency analysis directly inside client release builds.' },
                ].map((b) => (
                  <div key={b.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:border-gray-800 transition-colors duration-300">
                    <h3 className="text-[15.5px] font-extrabold text-gray-950 mb-3 tracking-tight leading-snug">{b.title}</h3>
                    <p className="text-[13px] leading-relaxed text-gray-500 font-medium">{b.desc}</p>
                  </div>
                ))}
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
                    { step: '01', title: 'Security Architecture Audit', body: 'We conduct a comprehensive, zero-footprint analysis of your active software layers, data flows, compliance gaps, and current network posture.' },
                    { step: '02', title: 'Hardening & Deployment', body: 'Our security engineers deploy intrusion firewalls, re-configure role access matrices, and set up secure automated pipeline alerts in 2–4 weeks.' },
                    { step: '03', title: 'Continuous Observability', body: 'We continually watch system activity and run regular pen tests, ensuring your defenses stay fully optimized as configurations scale.' },
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
                  { q: 'How long does a risk assessment take?', a: 'A standard initial security audit takes between 10 to 14 days, culminating in a detailed vulnerability roadmap.' },
                  { q: 'Do you support HIPAA and SOC2 compliance setup?', a: 'Yes. Our compliance teams specialize in implementing Row-Level Security, audit trail trackers, and encryption parameters matching exact GRC rules.' },
                  { q: 'Can your engineers collaborate directly with our software development team?', a: 'Absolutely. We can embed specialized in-house security engineers directly into your daily development workflows, or assemble self-contained engineering squads to take full operational ownership of your product security.' },
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
                  { id: 'practices', label: 'Best Practices', ref: practicesRef },
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
                Launch custom security and engineering squads in 2-4 weeks. Get started today.
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
