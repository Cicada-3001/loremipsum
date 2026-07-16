'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const erpServices = [
  {
    title: 'Custom ERP Software Development',
    p1: 'Off-the-shelf ERP packages force businesses to adapt workflows around inflexible modules and unnecessary features. We build custom ERP solutions tailored to your specific business processes, industry requirements, and operational constraints.',
    p2: 'Our teams design database schemas, build role-based interfaces for different departments, and implement workflow automation that matches how your business actually operates. We integrate modules for accounting, HR, and project management into a unified system. You get an ERP solution built around your processes, not someone else\'s assumptions.',
  },
  {
    title: 'ERP Implementation & Configuration',
    p1: 'Implementing ERP systems without proper planning can lead to cost overruns and slow adoption. We manage ERP implementation projects that deliver on time, on budget, and encourage user adoption through structured change management.',
    p2: 'Implementation begins with mapping your current processes to define what the system needs to support. We configure modules around those requirements, migrate historical data, and validate accuracy before go-live. Phased rollouts let us test functionality with pilot groups, adjust based on feedback, and expand systematically across departments. You get an ERP system that launches on schedule without disrupting daily operations.',
  },
  {
    title: 'ERP Migration & Modernization',
    p1: 'Legacy ERP systems running on outdated platforms create security risks, integration challenges, and maintenance burdens. We migrate ERP applications to modern stacks, refactor monolithic architectures, and eliminate technical debt accumulated over years or decades.',
    p2: 'Our engineers assess existing systems to plan incremental migration paths, preserve business logic while updating technology, and validate functionality throughout the transition. We handle data migration and API modernization. The result is a modern ERP system that maintains business continuity while improving security and performance.',
  },
  {
    title: 'Cloud-Based ERP Development',
    p1: 'On-premises ERP infrastructure limits accessibility and requires ongoing hardware maintenance. We build cloud-based ERP solutions using AWS, Azure, or Google Cloud that provide global access, automatic scaling, and managed infrastructure.',
    p2: 'Our teams architect multi-tenant ERP systems, implement secure authentication and authorization, configure auto-scaling for seasonal demand, and set up backup and disaster recovery. We optimize cloud costs, establish monitoring, and maintain compliance with data residency requirements. This allows us to deliver ERP systems that scale elastically and support distributed workforces.',
  },
  {
    title: 'ERP Integration Services',
    p1: 'Disconnected business systems create data silos, manual re-entry errors, and reporting inconsistencies. We integrate your ERP with CRM, e-commerce, payment gateways, logistics platforms, and third-party APIs to create a unified operational backbone.',
    p2: 'Our integration engineers map data flows between systems, implement bi-directional sync logic, and build middleware layers that handle transformation and validation. We use REST and SOAP APIs, webhooks, and message queues to keep data consistent in real time. Integrations are monitored and include error handling to prevent silent failures.',
  },
  {
    title: 'ERP Module Customization',
    p1: 'Standard ERP modules rarely fit every department\'s exact workflow. We customize existing modules and build new ones to match your operational requirements without compromising system integrity or upgrade paths.',
    p2: 'We extend platforms like SAP, Oracle, Microsoft Dynamics, and Odoo with custom fields, screens, workflows, and business logic. Each customization is documented and version-controlled so future upgrades don\'t break existing functionality. You get the specific features your teams need without the limitations of off-the-shelf configurations.',
  },
  {
    title: 'ERP Mobile Application Development',
    p1: 'Field teams and remote employees need access to ERP data outside the office. We build mobile applications connected to your ERP that support inventory management, approvals, time tracking, and reporting from any device.',
    p2: 'Our mobile ERP apps support iOS and Android and sync in real time with the core system. We implement role-based access, offline functionality for low-connectivity environments, and push notifications for approvals and alerts. The result is ERP access that fits how your teams actually work.',
  },
  {
    title: 'ERP Support & Maintenance',
    p1: 'ERP systems require continuous monitoring, updates, and optimization to perform reliably. We provide ongoing support that covers bug fixes, performance tuning, security patches, and feature enhancements after deployment.',
    p2: 'Our support teams establish SLA-based response commitments, monitor system health, and handle incidents before they affect operations. We conduct regular performance reviews, apply vendor patches, and plan incremental improvements. You get a long-term engineering partner focused on keeping your ERP stable, secure, and aligned with evolving business needs.',
  },
];

const clientLogos = [
  'NextRoll', 'A-LIGN', 'KEYSTONE', 'Google', 'Pinterest', 'Microsoft',
];

export default function ERPDevelopmentPage() {
  const [formData, setFormData] = useState({ name: '', email: '', needs: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeWorkTab, setActiveWorkTab] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) setIsSubmitted(true);
  };

  const toggle = (idx: number) =>
    setActiveAccordion(activeAccordion === idx ? null : idx);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 font-sans">

      {/* ── Hero ── */}
      <section className="pt-28 pb-16 border-b border-gray-200/60 bg-gradient-to-b from-[#f3f4f6] to-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-[13px] font-semibold text-gray-500 mb-8 select-none">
            <Link href="/" className="hover:text-orange-500 transition-colors flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">Solutions</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-bold">ERP</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Hero copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                ERP Software Development Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.1] tracking-tight mb-6">
                Build custom ERP solutions with experts trusted by 40+ companies.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Looking for a partner who can deliver enterprise-grade ERP systems?{' '}
                <span className="text-orange-500">Our solutions</span> power some of the world&apos;s top brands. Work with vetted senior{' '}
                <span className="text-orange-500">engineers</span> who&apos;ve shipped complex ERP solutions across industries.
              </p>

              {/* Expert card + AI tools */}
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {/* Expert card */}
                <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm select-none">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-black text-gray-900 leading-tight">Sr. ERP Solutions Architect</p>
                    <p className="text-[12px] text-gray-500 font-medium">Diego R.</p>
                    <p className="text-[11px] text-gray-400 font-medium">15 years of experience</p>
                  </div>
                  <div className="border-l border-gray-200 pl-4 ml-2">
                    <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-wider mb-1">Previous Client</p>
                    <p className="text-[13px] font-black text-gray-900 uppercase tracking-tight leading-tight">Urban<br/>Outfitters</p>
                  </div>
                </div>

                {/* AI tools showcase */}
                <div>
                  <p className="text-[9.5px] font-black text-gray-400 uppercase tracking-widest mb-3 select-none">AI Coding Tools We Use</p>
                  <div className="flex items-center gap-3">
                    {[
                      { bg: 'bg-gray-900', icon: (
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                      )},
                      { bg: 'bg-orange-500', icon: (
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                      )},
                      { bg: 'bg-indigo-600', icon: (
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                      )},
                      { bg: 'bg-gray-700', icon: (
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
                      )},
                    ].map((t, i) => (
                      <div key={i} className={`w-11 h-11 ${t.bg} rounded-xl flex items-center justify-center shadow-sm`}>
                        {t.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-5">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg shadow-gray-200/30">
                <h3 className="text-[20px] font-extrabold text-gray-950 mb-6 text-center">
                  Get expert help for your ERP project.
                </h3>
                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-center py-10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">✓</div>
                    <h4 className="text-emerald-950 font-black text-lg mb-2">Thank you!</h4>
                    <p className="text-sm text-emerald-800 font-medium">Our ERP specialists will contact you at <strong>{formData.email}</strong> shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text" required placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                    <input
                      type="email" required placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                    <textarea
                      required rows={4} placeholder="Tell us about your needs."
                      value={formData.needs}
                      onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                    />
                    <button onClick={() => fetch('/api/send-email', { method: 'POST' }).then(() => alert('Request sent!'))} 
                      type="submit"
                      className="w-full py-4 px-5 bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md shadow-orange-500/10 hover:bg-orange-700 active:scale-[0.98] transition-all duration-200 cursor-pointer mt-1"
                    >
                      Jump-start Your Project
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trusted logos ── */}
      <section className="bg-white border-b border-gray-200/50 py-10 overflow-hidden select-none">
        <div className="container mx-auto px-6 max-w-7xl">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block text-center mb-6">
            TRUSTED BY CTOS AT 40+ COMPANIES:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">
            {clientLogos.map((name) => (
              <span key={name} className="text-[17px] font-extrabold text-gray-500 tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ERP Services Accordion ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left sticky panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                ERP Software Development Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight mb-5 tracking-tight">
                No matter what you&apos;re building, we can help.
              </h2>
              <p className="text-[14.5px] leading-relaxed font-medium mb-10" style={{color:'#555'}}>
                Our ERP software development services cover custom development,{' '}
                <span className="text-orange-500">implementation</span>,{' '}
                <span className="text-orange-500">migration</span>,{' '}
                <span className="text-orange-500">cloud deployment</span>, and{' '}
                <span className="text-orange-500">ongoing support</span>. We support teams from{' '}
                <span className="text-orange-500">requirements analysis</span> and{' '}
                <span className="text-orange-500">architecture design</span>{' '}
                through production deployment and continuous optimization.
              </p>

              {/* Certification badges */}
              <div className="flex items-center gap-5 flex-wrap">
                {/* Google Cloud */}
                <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-3 w-[90px] select-none">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path d="M12 5.5A6.5 6.5 0 0 0 5.5 12 6.5 6.5 0 0 0 12 18.5 6.5 6.5 0 0 0 18.5 12 6.5 6.5 0 0 0 12 5.5z" fill="#4285F4"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="text-[8.5px] font-bold text-gray-500 text-center leading-tight">Google Cloud Partner</span>
                </div>
                {/* AWS */}
                <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-3 w-[90px] select-none">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.072.056.144.056.208 0 .096-.056.192-.176.288l-.583.39a.44.44 0 0 1-.24.08c-.096 0-.192-.048-.288-.136a2.96 2.96 0 0 1-.344-.448 7.38 7.38 0 0 1-.296-.56c-.744.879-1.68 1.319-2.808 1.319-.8 0-1.44-.229-1.912-.687-.472-.456-.712-1.064-.712-1.824 0-.808.284-1.464.856-1.96.572-.496 1.332-.744 2.296-.744.32 0 .648.024.992.08.344.056.696.136 1.064.232v-.672c0-.7-.148-1.192-.436-1.48-.296-.296-.8-.44-1.52-.44-.328 0-.664.04-1.008.128a7.427 7.427 0 0 0-1.008.336 2.675 2.675 0 0 1-.328.128.57.57 0 0 1-.144.024c-.128 0-.192-.096-.192-.296v-.464c0-.152.024-.264.08-.328a.828.828 0 0 1 .32-.192c.328-.168.72-.312 1.176-.424A5.98 5.98 0 0 1 4.6 5.16c1.064 0 1.84.24 2.336.72.488.48.736 1.208.736 2.184v2.872l.091-.9zM3.297 11.66c.312 0 .632-.056.968-.168.336-.112.636-.32.888-.608.152-.176.264-.376.32-.6.056-.224.088-.496.088-.816v-.392a7.95 7.95 0 0 0-.864-.16 7.03 7.03 0 0 0-.88-.056c-.624 0-1.08.12-1.384.368-.304.248-.456.592-.456 1.04 0 .424.104.744.32.96.208.224.512.432.1.432zM9.3 12.148c-.168 0-.28-.028-.352-.092-.072-.056-.136-.184-.192-.36L7.2 6.128a1.616 1.616 0 0 1-.08-.368c0-.144.072-.224.216-.224h.88c.176 0 .296.028.36.092.072.056.128.184.184.36L9.9 10.3l.992-4.312c.048-.184.104-.304.176-.36.072-.056.2-.092.368-.092h.72c.176 0 .296.028.376.092.072.056.136.184.176.36l1.008 4.36 1.168-4.36c.056-.184.12-.304.192-.36.072-.056.192-.092.36-.092h.832c.144 0 .224.072.224.224 0 .04-.008.088-.016.136a1.275 1.275 0 0 1-.064.24L14.2 11.696c-.056.184-.12.304-.192.36-.072.056-.2.092-.36.092h-.776c-.176 0-.296-.028-.376-.092-.072-.064-.136-.184-.176-.368l-.992-4.232-1.2 4.224c-.04.184-.104.304-.176.368-.072.064-.2.1-.376.1H9.3zM17.516 12.28c-.472 0-.952-.056-1.424-.168-.472-.112-.84-.232-1.088-.368-.152-.088-.256-.184-.288-.272a.68.68 0 0 1-.048-.256v-.48c0-.2.072-.296.208-.296a.51.51 0 0 1 .16.024c.048.016.12.048.2.08.272.12.568.216.888.28.328.064.648.096.976.096.52 0 .92-.088 1.2-.264a.865.865 0 0 0 .424-.768.78.78 0 0 0-.216-.56c-.144-.152-.416-.288-.808-.416l-1.16-.36c-.584-.184-1.016-.456-1.288-.816a1.938 1.938 0 0 1-.408-1.2c0-.344.072-.648.216-.912.144-.264.336-.496.584-.688.24-.2.52-.344.848-.448.328-.104.68-.152 1.048-.152.184 0 .376.008.56.032.192.024.368.056.536.096.16.04.312.08.456.128.144.048.256.096.336.144a.693.693 0 0 1 .24.208.484.484 0 0 1 .064.264v.448c0 .2-.072.304-.208.304a.936.936 0 0 1-.344-.112 4.148 4.148 0 0 0-1.736-.36c-.472 0-.84.072-1.096.224a.74.74 0 0 0-.384.672c0 .216.08.4.24.552.16.152.456.304.88.44l1.136.36c.576.184.992.44 1.24.776.248.336.368.72.368 1.144 0 .352-.072.672-.208.952a2.205 2.205 0 0 1-.592.728c-.256.2-.56.352-.92.456a3.9 3.9 0 0 1-1.192.16z" fill="#FF9900"/>
                    </svg>
                  </div>
                  <span className="text-[8.5px] font-bold text-gray-500 text-center leading-tight">AWS Partner</span>
                </div>
                {/* ISO */}
                <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-3 w-[90px] select-none">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full border-2 border-blue-600 flex items-center justify-center">
                      <span className="text-[7px] font-black text-blue-700">ISO</span>
                    </div>
                  </div>
                  <span className="text-[8.5px] font-bold text-gray-500 text-center leading-tight">ISO 27001 Certified</span>
                </div>
              </div>
            </div>

            {/* Right accordion */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-gray-200">
              {erpServices.map((svc, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <div key={svc.title} className="py-5">
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group select-none"
                    >
                      <div className="flex items-center gap-3">
                        {/* Checkmark */}
                        <svg className={`w-4 h-4 flex-shrink-0 transition-colors duration-200 ${isOpen ? 'text-orange-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span className={`text-[16px] font-extrabold transition-colors duration-200 leading-snug ${isOpen ? 'text-gray-950' : 'text-gray-600 group-hover:text-gray-900'}`}>
                          {svc.title}
                        </span>
                      </div>
                      {/* +/× icon */}
                      <div className={`w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full border transition-all duration-200 ${isOpen ? 'border-orange-400 text-orange-500 rotate-45' : 'border-gray-300 text-gray-400 group-hover:border-gray-400'}`}>
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14"/>
                        </svg>
                      </div>
                    </button>

                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-350 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-7 pr-2 space-y-4">
                        <p className="text-[14px] leading-relaxed text-gray-800 font-medium">{svc.p1}</p>
                        <p className="text-[13.5px] leading-relaxed text-gray-500 font-medium">{svc.p2}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── ERP Capabilities ── */}
      <section className="py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div className="mb-12">
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3 select-none">ERP Capabilities</span>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              We cover the ERP stack (and everything<br />around it).
            </h2>
            <p className="text-[14.5px] font-medium max-w-xl" style={{color:'#555'}}>
              As a top ERP development company, we use a modern tech stack built for{' '}
              <span className="text-orange-500">performance and scale</span>, with a focus on proven tools. Our expertise spans{' '}
              <span className="text-orange-500">100+ technologies</span>, so we&apos;re equipped to support your full roadmap: ERP and beyond.
            </p>
          </div>

          {/* Two-column capability panel */}
          {(() => {
            const capabilities = [
              {
                name: 'ERP Platforms & Configuration',
                desc: 'We implement and customize commercial ERP platforms based on business requirements, industry fit, and total cost of ownership. Our teams configure modules, build custom extensions, and maintain upgrade compatibility so your platform evolves with the business.',
                techs: ['SAP S/4HANA','Oracle NetSuite','Microsoft Dynamics 365','Odoo','Infor CloudSuite','Epicor ERP','Sage Intacct','Acumatica'],
              },
              {
                name: 'Custom ERP Development',
                desc: "When commercial platforms don't fit, we build custom ERP systems using frameworks designed for transactional integrity and high-volume processing. Our architectures support multi-tenant deployment, complex business rules, and integration with existing systems.",
                techs: ['.NET Core','Java Spring Boot','Node.js','Python','Go','React','Angular','Vue.js'],
              },
              {
                name: 'Database & Data Architecture',
                desc: 'ERP systems live or die by data integrity. We design database architectures that enforce referential integrity across modules, optimize for mixed transactional and reporting workloads, and scale with transaction volume growth.',
                techs: ['Microsoft SQL Server','Oracle Database','PostgreSQL','SAP HANA','Amazon Aurora','Azure SQL Database'],
              },
              {
                name: 'Data Migration & ETL',
                desc: 'Legacy migrations require more than moving records. We build ETL pipelines that cleanse, transform, and validate data before cutover, with reconciliation processes that catch discrepancies before they reach production.',
                techs: ['Informatica','Talend','Azure Data Factory','AWS Glue','SSIS','Apache Spark'],
              },
              {
                name: 'Integration & Middleware',
                desc: 'ERP systems must communicate with CRM, e-commerce, logistics, and payment platforms without creating bottlenecks. We build integration layers that handle authentication, data mapping, error logging, and retry logic across heterogeneous systems.',
                techs: ['MuleSoft','Azure Service Bus','AWS SQS','Boomi','Apache Kafka','REST APIs','GraphQL','SOAP'],
              },
              {
                name: 'Cloud Infrastructure',
                desc: 'Modern ERP deployments require cloud infrastructure that scales with transaction volume, maintains high availability, and supports global distribution. We architect ERP cloud environments that minimize downtime and optimize cost per transaction.',
                techs: ['AWS','Microsoft Azure','Google Cloud','Kubernetes','Terraform','Docker'],
              },
              {
                name: 'Business Intelligence & Reporting',
                desc: 'Raw ERP data becomes strategic insight with the right analytics layer. We build reporting systems that deliver operational dashboards, financial reports, and ad-hoc query capabilities without impacting transactional performance.',
                techs: ['Power BI','Tableau','SAP Analytics Cloud','SQL Server Reporting Services','Looker','Metabase'],
              },
              {
                name: 'Security & Access Control',
                desc: 'ERP systems contain an organization\'s most sensitive data. We implement role-based access control, field-level security, audit logging, and identity management integrations that enforce least-privilege access across all modules.',
                techs: ['Azure AD','Okta','OAuth 2.0','SAML','AWS IAM','ISO 27001'],
              },
              {
                name: 'DevOps & Release Management',
                desc: 'ERP environments require controlled release processes that prevent configuration drift, automate regression testing, and maintain audit trails for compliance. We build CI/CD pipelines tailored to ERP deployment cycles and change management requirements.',
                techs: ['Azure DevOps','GitHub Actions','Jenkins','Terraform','Ansible','ArgoCD'],
              },
              {
                name: 'Testing & Quality Assurance',
                desc: 'ERP changes carry significant business risk. We implement end-to-end test coverage that includes data validation, workflow testing, integration testing, and performance load testing before any release reaches production.',
                techs: ['Selenium','Playwright','Postman','JMeter','Azure Test Plans','Robot Framework'],
              },
            ];
            const cap = capabilities[activeCapability];
            return (
              <div className="flex flex-col lg:flex-row gap-6 items-start">

                {/* Left list */}
                <div className="lg:w-[420px] flex-shrink-0 flex flex-col divide-y divide-gray-100 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                  {capabilities.map((c, i) => {
                    const isActive = activeCapability === i;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setActiveCapability(i)}
                        className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-150 cursor-pointer select-none ${
                          isActive
                            ? 'bg-orange-50 border-l-4 border-l-orange-400'
                            : 'bg-white border-l-4 border-l-transparent hover:bg-gray-50'
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 flex-shrink-0 transition-colors duration-150 ${ isActive ? 'text-orange-500' : 'text-gray-300' }`}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="9 12 11 14 15 10"/>
                        </svg>
                        <span className={`text-[13.5px] font-semibold leading-snug transition-colors duration-150 ${ isActive ? 'text-gray-950' : 'text-gray-400' }`}>
                          {c.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Right detail panel */}
                <div className="flex-1 bg-white border border-orange-200 rounded-2xl p-8 shadow-sm flex flex-col gap-7 lg:sticky lg:top-28 self-start">
                  <p className="text-[14px] leading-relaxed font-medium" style={{color:'#444'}}>
                    {cap.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {cap.techs.map((tech) => (
                      <div
                        key={tech}
                        className="border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-center min-w-[100px] bg-white hover:border-gray-300 transition-colors duration-150 cursor-default"
                      >
                        <span className="text-[12.5px] font-bold text-gray-700 text-center leading-tight">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Industry Selector ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div className="mb-12">
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3 select-none">ERP Solutions</span>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              Build with ERP engineers who have<br />experience in your industry.
            </h2>
            <p className="text-[14.5px] font-medium max-w-xl" style={{color:'#555'}}>
              We&apos;ve delivered projects across{' '}
              <span className="text-orange-500">18+ industry sectors</span>. You won&apos;t have to spend weeks getting us up to speed.{' '}
              <span className="text-orange-500">Our engineers</span> come in with a clear understanding of your industry&apos;s operational complexity,{' '}
              <span className="text-orange-500">compliance requirements</span>, and unique business processes.
            </p>
          </div>

          {/* Selector card */}
          {(() => {
            const industries = [
              {
                name: 'Manufacturing',
                subtitle: 'Streamline production planning, inventory control, and quality management with ERP systems designed for manufacturing operations.',
                bg: 'from-gray-900 to-gray-800',
                solutions: [
                  'Production planning and scheduling','Bill of materials (BOM) management','Work order tracking and execution','Quality control and inspection workflows','Shop floor data collection','Manufacturing resource planning (MRP II)',
                  'Product lifecycle management integration','Cost accounting and variance analysis','Supply chain coordination with suppliers','Production cost and work-in-progress tracking',
                ],
              },
              {
                name: 'Wholesale Distribution',
                subtitle: 'Manage multi-location inventory, order fulfillment, and supplier relationships with distribution-focused ERP platforms.',
                bg: 'from-gray-900 to-slate-800',
                solutions: [
                  'Multi-warehouse inventory management','Purchase order automation','Demand forecasting and replenishment','Cross-docking and transfer orders','Vendor management and procurement','Sales order processing and fulfillment',
                  'Drop-shipping coordination','Lot and serial number tracking','Landed cost calculation and tracking','Customer pricing and contract management',
                ],
              },
              {
                name: 'Retail',
                subtitle: 'Unify point-of-sale, inventory, and financial data across multiple locations with retail ERP solutions.',
                bg: 'from-gray-900 to-zinc-800',
                solutions: [
                  'Multi-store inventory synchronization','Point-of-sale (POS) integration','Merchandise planning and allocation','Supplier and purchase order management','Omnichannel order management','Financial consolidation across locations',
                  'Inventory valuation and shrinkage tracking','Seasonal inventory planning','Franchise and multi-entity financial management','Vendor rebate and allowance tracking',
                ],
              },
              {
                name: 'Financial Services',
                subtitle: 'Build compliant, audit-ready ERP systems that manage complex financial operations and regulatory reporting.',
                bg: 'from-gray-900 to-neutral-800',
                solutions: [
                  'Accounts payable and receivable automation','Multi-currency and multi-entity accounting','Fixed asset management and depreciation','Budget planning and forecasting','Cash flow management and treasury','Regulatory compliance reporting (SOX, IFRS)',
                  'Audit trail and documentation management','Revenue recognition automation','Intercompany transaction processing',
                ],
              },
              {
                name: 'Healthcare & Life Sciences',
                subtitle: 'Develop HIPAA-compliant ERP solutions that manage healthcare operations, supply chains, and regulatory requirements.',
                bg: 'from-gray-900 to-blue-950',
                solutions: [
                  'Medical supply inventory management','Medical device inventory and consignment tracking','Pharmaceutical lot tracking and expiration','Clinical trial materials management','Healthcare procurement and vendor management','Medical device regulatory compliance',
                  'Grant and research funding tracking','Healthcare financial management','Patient care supply chain optimization',
                ],
              },
              {
                name: 'Construction & Engineering',
                subtitle: 'Manage project costs, subcontractors, equipment, and compliance with ERP systems built for construction operations.',
                bg: 'from-gray-900 to-stone-800',
                solutions: [
                  'Project cost tracking and budget management','Subcontractor management and payments','Equipment tracking and maintenance','Job costing and profitability analysis','Change order and RFI management','Document control and compliance tracking',
                  'Resource and crew scheduling','Progress billing and retainage','Material procurement and job site delivery','Safety and incident reporting integration',
                ],
              },
              {
                name: 'Food & Beverage',
                subtitle: 'Build food-grade ERP systems with lot traceability, recipe management, and regulatory compliance for food and beverage operations.',
                bg: 'from-gray-900 to-orange-950',
                solutions: [
                  'Recipe and formula management','Lot traceability and recall management','Catch weight and variable unit handling','Quality control and shelf-life tracking','Regulatory and food safety compliance (FDA, HACCP)','Supplier certification and auditing',
                  'Demand-driven production scheduling','Co-packing and contract manufacturing','Allergen and ingredient tracking','Cold chain and temperature monitoring integration',
                ],
              },
            ];
            const ind = industries[activeIndustry];
            const half = Math.ceil(ind.solutions.length / 2);
            return (
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex flex-col lg:flex-row">

                  {/* Left tab list */}
                  <div className="lg:w-[280px] flex-shrink-0 border-r border-gray-100">
                    {industries.map((ind2, i) => (
                      <button
                        key={ind2.name}
                        onClick={() => setActiveIndustry(i)}
                        className={`w-full flex items-center justify-between px-6 py-4 text-left border-b border-gray-100 last:border-b-0 transition-colors duration-150 cursor-pointer select-none group ${
                          activeIndustry === i ? 'bg-gray-50' : 'hover:bg-gray-50/70'
                        }`}
                      >
                        <span className={`text-[14px] font-semibold leading-snug transition-colors duration-150 ${
                          activeIndustry === i ? 'text-gray-950' : 'text-gray-400 group-hover:text-gray-700'
                        }`}>{ind2.name}</span>
                        {activeIndustry === i && (
                          <svg className="w-4 h-4 text-orange-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Right panel */}
                  <div className="flex-1 flex flex-col">
                    {/* Dark banner */}
                    <div className={`relative bg-gradient-to-r ${ind.bg} px-8 py-7 flex items-end min-h-[130px]`}>
                      <div className="z-10">
                        <h3 className="text-white text-[24px] font-extrabold leading-tight mb-1.5">{ind.name}</h3>
                        <p className="text-white/70 text-[13.5px] font-medium leading-snug max-w-[520px]">{ind.subtitle}</p>
                      </div>
                      {/* Decorative mesh overlay */}
                      <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle at 70% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)'}} />
                    </div>

                    {/* Solutions list */}
                    <div className="bg-white px-8 pt-6 pb-8">
                      <span className="text-[9.5px] font-black text-gray-400 uppercase tracking-widest block mb-4 select-none">Build Solutions For:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5">
                        {[ind.solutions.slice(0, half), ind.solutions.slice(half)].map((col, ci) => (
                          <ul key={ci} className="space-y-2.5">
                            {col.map((s) => (
                              <li key={s} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-[7px]" />
                                <span className="text-[13.5px] text-orange-500 font-medium leading-snug">{s}</span>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── ERP Case Studies ── */}
      <section className="py-24 bg-[#f3f4f6]">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div className="mb-12">
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3 select-none">
              ERP Case Studies
            </span>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              Hundreds of ERP projects delivered.
            </h2>
            <p className="text-[15px] leading-relaxed font-medium max-w-2xl" style={{color:'#555'}}>
              From <span className="text-orange-500">implementation</span> to optimization, we have the experience to build ERP systems that{' '}
              <span className="text-orange-500">deliver real value</span>. It&apos;s why 500+ clients choose us as their ERP development company.
            </p>
          </div>

          {/* 3 Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tag: 'Healthcare',
                title: 'Automated SAP Order Entry and Streamlined ERP Processes for Surgical Vision Division',
                img: '/erp_healthcare.png',
              },
              {
                tag: 'Staffing & HR',
                title: 'Migrated ERP Modules and Consolidated 5,000 Acquired Websites into Unified Platform',
                img: '/erp_staffing.png',
              },
              {
                tag: 'Education',
                title: 'Migrated Data Management to Microsoft Dynamics 365 and Built Serverless Payment Processor',
                img: '/erp_education.png',
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="group relative rounded-2xl overflow-hidden min-h-[320px] cursor-pointer flex flex-col justify-end"
                style={{ backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-0" />
                <div className="relative z-10 p-6">
                  <span className="inline-block text-[9px] font-black text-white/90 uppercase tracking-widest bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3 select-none">
                    {c.tag}
                  </span>
                  <h3 className="text-white font-extrabold text-[16px] leading-snug">{c.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Featured Case Study — Agriculture ── */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div
            className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-stretch"
            style={{ backgroundImage: 'url(/erp_agriculture.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Left dark overlay panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-transparent z-0" />

            {/* Left content */}
            <div className="relative z-10 flex flex-col justify-center p-10 md:p-14 max-w-[600px]">
              <span className="inline-block text-[9px] font-black text-white/70 uppercase tracking-widest bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 mb-5 w-fit select-none">
                Agriculture
              </span>
              <h2 className="text-white text-2xl md:text-[28px] font-extrabold leading-tight tracking-tight mb-5">
                Agricultural cooperative replaced 40-year-old system with our custom ERP.
              </h2>
              {/* Stat badges */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-[12px] font-bold select-none">
                  <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  2-Year Engagement
                </span>
                <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-[12px] font-bold select-none">
                  <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
                  10 Senior Engineers
                </span>
              </div>
              <p className="text-white/70 text-[13px] leading-relaxed font-medium mb-6 max-w-[520px]">
                An agricultural cooperative serving 6,000+ members needed to replace a 40-year-old legacy system that could no longer support their operations. The new custom ERP needed to streamline sales, inventory, purchasing, contracts, warehouse, and vendor processes across grain, energy, agronomic services, and food products. They also required a specialized "Minimum Cost Fertilizer Blend" algorithm using optimization to generate ingredient lists with exact blending quantities that meet nutrient requirements at optimal cost.
              </p>
              <ul className="space-y-3">
                {[
                  'Migrated API server, frontend application, and database to cloud-based AWS',
                  'Built fertilizer quantity calculator with cost optimization algorithms',
                  'Made system faster and more secure through cloud migration',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                    <span className="text-white/80 text-[13px] font-medium leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: floating contact form */}
            <div className="relative z-10 ml-auto self-center mr-10 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-7 w-[300px]">
                <h4 className="text-[16px] font-extrabold text-gray-950 mb-5 text-center leading-snug">
                  Get expert help for your ERP project.
                </h4>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Your name</label>
                    <input
                      type="text" placeholder="Full name"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Your email</label>
                    <input
                      type="email" placeholder="name@company.com"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">What can we do for you?</label>
                    <textarea
                      rows={3} placeholder="Tell us more about your needs."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-600 text-white font-extrabold text-[13px] rounded-lg hover:bg-orange-700 active:scale-[0.98] transition-all duration-200 cursor-pointer mt-1"
                  >
                    Jump-start Your Project
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-4 select-none">How We Work</span>
            <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-950 leading-tight tracking-tight mb-5">
              Here&apos;s what makes us easy to work<br />with and hard to replace:
            </h2>
            <p className="text-[14.5px] text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
              From code quality to compliance, we&apos;ve optimized every part of how we work to support high-performing engineering teams. For you, that means clearer communication and smoother delivery. Plus, get peace of mind from having a development partner you can depend on.
            </p>
          </div>

          {/* Tab Selector Pills */}
          {(() => {
            const workTabs = [
              {
                label: 'Vetted Senior Talent',
                subtitle: 'VETTED SENIOR TALENT',
                heading: 'We hire the top 1% of over two million applicants, so you only work with the best.',
                body: 'We give you engineers who\'ve already proven they can deliver. Our rigorous evaluation process includes technical tests, English assessments, soft skill screening, problem-solving simulations, and more. Out of over 2 million applicants who apply yearly, fewer than 1% get the chance to join our team. This is how we ensure you get highly qualified developers who are experts in their fields.',
              },
              {
                label: 'Timezone Aligned',
                subtitle: 'TIMEZONE ALIGNED',
                heading: 'We work in your timezone so collaboration never slows you down.',
                body: 'Our engineers adjust their working hours to overlap significantly with your business day. Whether you\'re in New York, London, or Nairobi, you get real-time collaboration without the friction of async-only workflows. Daily standups, live code reviews, and immediate Slack responses are the norm.',
              },
              {
                label: 'Proficient in English',
                subtitle: 'PROFICIENT IN ENGLISH',
                heading: 'Clear communication is non-negotiable for every engineer on our team.',
                body: 'All of our engineers pass rigorous English proficiency assessments before collaborating with client teams. You get developers who can articulate technical decisions clearly, write readable documentation, and collaborate effectively with your product managers and stakeholders without translation friction.',
              },
              {
                label: 'Full-stack Capabilities',
                subtitle: 'FULL-STACK CAPABILITIES',
                heading: 'One partner for frontend, backend, infrastructure, and everything in between.',
                body: 'Our teams cover the full software stack. Front-end engineers work across React, Angular, and Vue. Back-end engineers specialize in Node.js, Python, Java, and Go. DevOps engineers manage cloud infrastructure, CI/CD, and monitoring. You get a cohesive team without the overhead of managing multiple vendors.',
              },
              {
                label: 'Scalable Teams',
                subtitle: 'SCALABLE TEAMS',
                heading: 'Grow or reduce your team as projects evolve without hiring risk.',
                body: 'We can ramp up additional engineers in days and scale down just as quickly. If your ERP project expands scope mid-way, we add specialists without disrupting your existing team. If a phase completes, we transition engineers off cleanly. You control headcount without the overhead of full-time hiring.',
              },
              {
                label: 'Standard MSAs & SOWS',
                subtitle: 'STANDARD MSAs & SOWS',
                heading: 'Predictable contracts that protect your business and clarify expectations.',
                body: 'Every engagement starts with clear Master Service Agreements and Statements of Work that define scope, deliverables, timelines, and payment terms. We don\'t do vague handshake agreements. Legal clarity upfront means fewer disputes later and a working relationship built on mutual accountability.',
              },
              {
                label: 'NDAs & IP Protection',
                subtitle: 'NDAs & IP PROTECTION',
                heading: 'Your intellectual property stays yours. Always.',
                body: 'Every engineer signs NDAs before accessing your codebase. All work product is assigned to you. We don\'t retain rights to your code, architecture, or data. Our contracts are structured specifically to ensure that everything built on your project belongs to your organization, not to us.',
              },
              {
                label: 'Enterprise-grade Security',
                subtitle: 'ENTERPRISE-GRADE SECURITY',
                heading: 'Security controls embedded into every layer of our delivery process.',
                body: 'Our teams follow secure development practices, including code reviews with security checklists, dependency scanning, and penetration test integration. We are ISO 27001 certified and maintain SOC 2 Type II compliance. Your sensitive ERP data and business logic is protected throughout the engagement.',
              },
              {
                label: 'Managed Delivery',
                subtitle: 'MANAGED DELIVERY',
                heading: 'Dedicated delivery managers keep your project on track, proactively.',
                body: 'Every engagement is supported by a dedicated delivery manager who monitors velocity, surfaces risks early, and keeps communication flowing between your stakeholders and our engineering team. You get weekly status updates, sprint reviews, and escalation paths—without having to chase for information.',
              },
            ];
            return (
              <>
                {/* Pill tabs */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-8">
                  {workTabs.map((t, i) => (
                    <button
                      key={t.label}
                      onClick={() => setActiveWorkTab(i)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-[12.5px] font-bold transition-all duration-200 cursor-pointer select-none ${
                        activeWorkTab === i
                          ? 'border-teal-500 text-teal-700 bg-teal-50'
                          : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700 bg-white'
                      }`}
                    >
                      {activeWorkTab === i && (
                        <svg className="w-3 h-3 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      )}
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Detail card */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-10 border-r border-gray-100">
                      <span className="text-[9.5px] font-black text-teal-600 uppercase tracking-widest block mb-3 select-none">
                        {workTabs[activeWorkTab].subtitle}
                      </span>
                      <h3 className="text-[22px] font-extrabold text-gray-950 leading-snug tracking-tight">
                        {workTabs[activeWorkTab].heading}
                      </h3>
                    </div>
                    <div className="p-10">
                      <p className="text-[14px] leading-relaxed text-gray-600 font-medium">
                        {workTabs[activeWorkTab].body}
                      </p>
                    </div>
                  </div>

                  {/* Bottom CTA bar */}
                  <div className="border-t border-gray-100 px-10 py-5 bg-[#f8f9fa] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {['bg-orange-200','bg-blue-200','bg-teal-200','bg-indigo-200','bg-pink-200'].map((c,i) => (
                          <div key={i} className={`w-9 h-9 ${c} rounded-full border-2 border-white flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                          </div>
                        ))}
                      </div>
                      <span className="text-[13.5px] font-semibold text-gray-700">Work with our ERP experts.</span>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-[13px] rounded-xl transition-colors duration-200 cursor-pointer select-none whitespace-nowrap">
                      Talk to an expert <span className="text-base">→</span>
                    </button>
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* ── Flexible Engagement Models ── */}
      <section className="pt-24 pb-64 bg-[#f3f4f6] border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-4 select-none">Flexible Engagement Models</span>
            <h2 className="text-4xl md:text-[42px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              Need ERP expertise?<br />Plug us in where you need us most.
            </h2>
            <p className="text-[14.5px] text-gray-500 font-medium max-w-md mx-auto">
              We customize every engagement to fit your workflow, priorities, and delivery needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Co-Development', heading: 'Want to embed elite ERP engineering experts into your active cycles?',
                desc: 'Partner with senior, in-house KompasIT ERP engineers who integrate directly into your daily workflows. They align with your timezone, join your standups, and write high-velocity code under your repository.',
              },
              {
                tag: 'Dedicated Units', heading: 'Need fully independent ERP engineering units to scale product streams?',
                desc: 'We build self-contained, cross-functional ERP squads tailored to your system architecture. Operating with full in-house operational ownership, these pods deliver your product roadmaps on time.',
              },
              {
                tag: 'Product Engineering', heading: 'Want to deliver a complete ERP lifecycle from discovery to launch?',
                desc: 'We take complete architectural and engineering responsibility for your ERP system—from discovery and database design to robust deployment, migration, and continuous maintenance.',
              },
            ].map((card) => (
              <div key={card.tag} className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-[320px] hover:border-gray-800 cursor-pointer">
                <div className="absolute inset-0 bg-gray-950 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-2xl z-0" />
                <div className="relative z-10 p-7 flex flex-col flex-1">
                  <span className="text-[9.5px] font-black text-teal-500 uppercase tracking-[0.18em] block mb-4 select-none">{card.tag}</span>
                  <h3 className="text-[20px] font-extrabold text-gray-950 group-hover:text-white leading-snug tracking-tight mb-4 max-w-[240px] transition-colors duration-300">{card.heading}</h3>
                  <p className="text-[13.5px] leading-relaxed text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 delay-100">{card.desc}</p>
                </div>
                <div className="relative z-10 h-[130px] bg-gray-50/80 border-t border-gray-100 group-hover:h-0 group-hover:opacity-0 overflow-hidden flex items-end justify-between px-6 pb-5 transition-all duration-400 ease-out">
                  <svg className="w-14 h-14 text-gray-200 opacity-80" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <button className="absolute bottom-5 right-6 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md cursor-pointer">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kick Off Section ── */}
      <section className="relative -mt-48 pb-24 bg-[#f3f4f6]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xl shadow-gray-400/20 px-10 py-16">
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 text-center leading-tight tracking-tight mb-14">
              Kick off ERP projects in 2–4 weeks.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left avatars */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="flex -space-x-4 mb-5">
                  {['bg-orange-100 text-orange-400','bg-blue-100 text-blue-400','bg-teal-100 text-teal-400'].map((c,i) => (
                    <div key={i} className={`w-14 h-14 rounded-full border-4 border-white shadow-md ${c} flex items-center justify-center`}>
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                    </div>
                  ))}
                </div>
                <p className="text-[15px] font-extrabold text-gray-950 mb-2 leading-snug">We have reps<br />across the US.</p>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                  Speak with a client engagement{' '}<span className="text-orange-500 font-semibold">specialist</span>{' '}near you.
                </p>
              </div>

              {/* Right steps */}
              <div className="lg:col-span-8 relative">
                <div className="absolute left-[22px] top-[44px] bottom-[44px] w-[1px] border-l-2 border-dashed border-gray-300 z-0" />
                <div className="flex flex-col space-y-10">
                  {[
                    { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.59A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>, title: 'Discuss solutions and decide team structure.', body: "Tell us more about your needs. We'll discuss the best-fit solutions and team structure based on your success metrics, timeline, budget, and required skill sets." },
                    { icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, title: 'Onboard your team and get to work.', body: "With project specifications finalized, we select your team. We're able to onboard developers and assemble dedicated teams in 2–4 weeks after signature." },
                    { icon: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>, title: 'We track performance on an ongoing basis.', body: "We continually monitor our teams' work to make sure they're meeting your quantity and quality of work standards at all times." },
                  ].map((step) => (
                    <div key={step.title} className="flex items-start gap-6 relative z-10">
                      <div className="w-11 h-11 rounded-full border-2 border-orange-400 bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{step.icon}</svg>
                      </div>
                      <div>
                        <h4 className="text-[16.5px] font-extrabold text-gray-950 mb-1 leading-snug">{step.title}</h4>
                        <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[480px]">{step.body}</p>
                      </div>
                    </div>
                  ))}
                  <div className="relative z-10 pt-2">
                    <button className="py-3.5 px-8 bg-orange-500 text-white font-extrabold text-[14px] rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 shadow-md shadow-orange-500/20 cursor-pointer select-none">
                      Schedule a Call with Our Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
