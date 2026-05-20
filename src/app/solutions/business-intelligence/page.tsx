'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const biServices = [
  {
    title: 'Custom BI Dashboard Development',
    p1: 'Generic out-of-the-box reporting leaves teams drowning in raw data but starving for insights. We build custom Business Intelligence dashboards in Power BI, Tableau, or custom React code tailored to your exact KPIs, operational goals, and reporting cadences.',
    p2: 'Our teams design interactive charts, multi-level drilldowns, and responsive layouts that match how your executives, managers, and operational teams consume data. Your reports highlight crucial trends, operational bottlenecks, and expansion opportunities, helping you make proactive decisions instead of reacting to historical outcomes.',
  },
  {
    title: 'Data Warehousing & Lakehouse Engineering',
    p1: 'Scattered databases and legacy data silos slow down reporting speeds and lead to conflicting version-of-truth problems. We construct modern, highly optimized enterprise data lakes and cloud warehouses (Snowflake, BigQuery, Redshift) that centralize data cleanly.',
    p2: 'Our engineers design robust dimensional models (star/snowflake schemas), establish data catalogs, and structure storage tiers to balance performance and storage costs. With a centralized data repository, your teams query vast historical datasets with sub-second response times, confident in the accuracy of the underlying data.',
  },
  {
    title: 'ETL/ELT Data Pipeline Integration',
    p1: 'Fragile data ingestion and manual updates result in broken dashboards and stale, unreliable reporting. We build automated, resilient ETL/ELT pipelines using dbt, Apache Airflow, Fivetran, and custom microservices to sync data in real time.',
    p2: 'We implement rigorous data cleansing, deduplication, schema validation, and error recovery logic inside our pipelines. This ensures that raw operational data is transformed, validated, and loaded into your warehouse smoothly, alerting you immediately if an ingestion anomaly occurs before it affects your live dashboards.',
  },
  {
    title: 'Real-Time Analytics & Stream Processing',
    p1: 'Analyzing yesterday\'s performance prevents teams from responding to live security anomalies, immediate customer behavior shifts, or operational issues. We develop event-driven stream processing architectures (Apache Kafka, Spark Streaming) for live intelligence.',
    p2: 'Our systems process and enrich millions of transactional events per second, feeding real-time dashboards and triggering automated alerts. Whether tracking supply chain delays or live retail stock depletion, you get sub-second visibility into your active operations.',
  },
  {
    title: 'Predictive Business Analytics & Forecasting',
    p1: 'Relying purely on retrospective reports keeps your operations in a reactive state. We integrate state-of-the-art predictive algorithms and time-series ML models directly into your BI suites to forecast market demand, customer behavior, and risk factors.',
    p2: 'We build regression systems, anomaly detection networks, and resource planning forecasts that analyze historical patterns. This lets your business anticipate seasonal supply chain peaks, identify customer churn patterns, and optimize staff scheduling weeks in advance.',
  },
  {
    title: 'Enterprise Reporting Modernization',
    p1: 'Outdated, sluggish legacy reports create security hazards, high licensing overhead, and slow rendering times. We modernize legacy reports to modern cloud-based ecosystems, eliminating licensing debt and slow queries.',
    p2: 'We audit your existing report catalog, refactor heavy database queries, and migrate legacy platforms (like SSRS or heavy Excel files) into interactive cloud reports. The result is a secure, performant reporting ecosystem that boosts load speeds and supports concurrent enterprise users.',
  },
  {
    title: 'Self-Service Semantic BI Setup',
    p1: 'Forcing non-technical departments to rely on developers for every minor ad-hoc query slows down operations and overwhelms engineers. We build secure, semantic query layers and automated reporting templates for non-technical users.',
    p2: 'We configure logical business layers that translate raw database fields into friendly terms like \'Net Margin\' or \'Active Subscribers\'. Your marketing, sales, and operations teams construct custom views and charts using natural language or drag-and-drop actions without writing a single line of SQL.',
  },
  {
    title: 'BI Support & Performance Tuning',
    p1: 'Slow query response times and system downtime frustrate users and cause decision delays. We provide ongoing, SLA-based monitoring, performance tuning, and database optimization for your entire BI stack.',
    p2: 'Our support teams establish robust performance benchmarks, optimize complex database indexes, manage partitioning keys, and troubleshoot pipeline failures. We keep your systems operational, secure, and ready to handle growing data volume without scaling budgets.',
  },
];

const clientLogos = [
  'NextRoll', 'A-LIGN', 'KEYSTONE', 'Google', 'Pinterest', 'Microsoft',
];

export default function BusinessIntelligencePage() {
  const [formData, setFormData] = useState({ name: '', email: '', needs: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeWorkTab, setActiveWorkTab] = useState(0);

  // Progressive Show More state
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) setIsSubmitted(true);
  };

  const handleShowMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
      setShowAllCaseStudies(true);
    }, 600);
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Autoplay accordion vertical timeline line indicator
  useEffect(() => {
    if (activeAccordion === null || activeAccordion === -1) return;

    setProgress(0);
    const duration = 6500; // 6.5s for complete drawing
    const intervalTime = 30; // ~33 FPS
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min((currentStep / totalSteps) * 100, 100);
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
        // Transition to next accordion
        setActiveAccordion((prev) => (prev + 1) % biServices.length);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeAccordion]);

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
            <span className="text-gray-800 font-bold">Business Intelligence</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Hero copy */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                Enterprise Business Intelligence Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Turn complex data into decisive action with vetted <span className="text-[#0078d4]">BI</span> experts.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Work with elite Business Intelligence architects and data engineers trusted by 1500+ companies. Ship custom{' '}
                <span className="text-[#0078d4]">dashboard suites</span>, optimized{' '}
                <span className="text-[#0078d4]">warehouse architectures</span>, and automated reporting systems.
              </p>

              {/* Expert card + BI tools */}
              <div className="flex flex-col sm:flex-row items-start gap-6 border-t border-gray-200/70 pt-8">
                {/* Clutch Card */}
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

                {/* BI showcase tools logos */}
                <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-3 select-none">BI Platforms We Support</span>
                  <div className="flex items-center gap-3">
                    {[
                      { bg: 'bg-[#0078d4]', name: 'Power BI', icon: (
                        <span className="text-white text-[10px] font-black">PBI</span>
                      )},
                      { bg: 'bg-indigo-600', name: 'Tableau', icon: (
                        <span className="text-white text-[10px] font-black">TBL</span>
                      )},
                      { bg: 'bg-[#29b5e8]', name: 'Snowflake', icon: (
                        <span className="text-white text-[10px] font-black">SNOW</span>
                      )},
                      { bg: 'bg-emerald-600', name: 'dbt', icon: (
                        <span className="text-white text-[10px] font-black">DBT</span>
                      )},
                    ].map((t) => (
                      <div key={t.name} title={t.name} className={`w-11 h-11 ${t.bg} rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer`}>
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
                  Get expert help for your BI project.
                </h3>
                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl text-center py-10">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl">✓</div>
                    <h4 className="text-emerald-950 font-black text-lg mb-2">Thank you!</h4>
                    <p className="text-sm text-emerald-800 font-medium">Our BI analytics specialists will contact you at <strong>{formData.email}</strong> shortly.</p>
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
                      required rows={4} placeholder="Tell us about your analytics and data needs."
                      value={formData.needs}
                      onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#fdfdfd] placeholder-gray-400 text-sm focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-md shadow-orange-500/10 hover:bg-orange-700 active:scale-[0.98] transition-all duration-200 cursor-pointer mt-1"
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
            TRUSTED BY CTOS AT 1500+ COMPANIES:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">
            {clientLogos.map((name) => (
              <span key={name} className="text-[17px] font-extrabold text-gray-500 tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BI Services Accordion ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left sticky panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                Business Intelligence Services
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight mb-5 tracking-tight">
                No matter your operational scale, we can help.
              </h2>
              <p className="text-[14.5px] leading-relaxed font-medium mb-10" style={{color:'#555'}}>
                Our Business Intelligence services cover custom dashboard development,{' '}
                <span className="text-[#0078d4]">data warehousing</span>,{' '}
                <span className="text-[#0078d4]">automated pipelines</span>,{' '}
                <span className="text-[#0078d4]">real-time streaming analytics</span>, and{' '}
                <span className="text-[#0078d4]">predictive intelligence</span>. We support teams from{' '}
                <span className="text-[#0078d4]">data engineering cataloging</span> and{' '}
                <span className="text-[#0078d4]">schema design</span> through final executive reporting and platform tuning.
              </p>

              {/* Certification badges */}
              <div className="flex items-center gap-5 flex-wrap">
                {/* Google Cloud */}
                <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-3 w-[90px] select-none bg-white">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7">
                      <path d="M12 5.5A6.5 6.5 0 0 0 5.5 12 6.5 6.5 0 0 0 12 18.5 6.5 6.5 0 0 0 18.5 12 6.5 6.5 0 0 0 12 5.5z" fill="#4285F4"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="text-[8.5px] font-bold text-gray-500 text-center leading-tight">Google Cloud Partner</span>
                </div>
                {/* AWS */}
                <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-3 w-[90px] select-none bg-white">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.072.056.144.056.208 0 .096-.056.192-.176.288l-.583.39a.44.44 0 0 1-.24.08c-.096 0-.192-.048-.288-.136a2.96 2.96 0 0 1-.344-.448 7.38 7.38 0 0 1-.296-.56c-.744.879-1.68 1.319-2.808 1.319-.8 0-1.44-.229-1.912-.687-.472-.456-.712-1.064-.712-1.824 0-.808.284-1.464.856-1.96.572-.496 1.332-.744 2.296-.744.32 0 .648.024.992.08.344.056.696.136 1.064.232v-.672c0-.7-.148-1.192-.436-1.48-.296-.296-.8-.44-1.52-.44-.328 0-.664.04-1.008.128a7.427 7.427 0 0 0-1.008.336 2.675 2.675 0 0 1-.328.128.57.57 0 0 1-.144.024c-.128 0-.192-.096-.192-.296v-.464c0-.152.024-.264.08-.328a.828.828 0 0 1 .32-.192c.328-.168.72-.312 1.176-.424A5.98 5.98 0 0 1 4.6 5.16c1.064 0 1.84.24 2.336.72.488.48.736 1.208.736 2.184v2.872l.091-.9zM3.297 11.66c.312 0 .632-.056.968-.168.336-.112.636-.32.888-.608.152-.176.264-.376.32-.6.056-.224.088-.496.088-.816v-.392a7.95 7.95 0 0 0-.864-.16 7.03 7.03 0 0 0-.88-.056c-.624 0-1.08.12-1.384.368-.304.248-.456.592-.456 1.04 0 .424.104.744.32.96.208.224.512.432.1.432zM9.3 12.148c-.168 0-.28-.028-.352-.092-.072-.056-.136-.184-.192-.36L7.2 6.128a1.616 1.616 0 0 1-.08-.368c0-.144.072-.224.216-.224h.88c.176 0 .296.028.36.092.072.056.128.184.184.36L9.9 10.3l.992-4.312c.048-.184.104-.304.176-.36.072-.056.2-.092.368-.092h.72c.176 0 .296.028.376.092.072.056.136.184.176.36l1.008 4.36 1.168-4.36c.056-.184.12-.304.192-.36.072-.056.192-.092.36-.092h.832c.144 0 .224.072.224.224 0 .04-.008.088-.016.136a1.275 1.275 0 0 1-.064.24L14.2 11.696c-.056.184-.12.304-.192.36-.072.056-.2.092-.36.092h-.776c-.176 0-.296-.028-.376-.092-.072-.064-.136-.184-.176-.368l-.992-4.232-1.2 4.224c-.04.184-.104.304-.176.368-.072.064-.2.1-.376.1H9.3zM17.516 12.28c-.472 0-.952-.056-1.424-.168-.472-.112-.84-.232-1.088-.368-.152-.088-.256-.184-.288-.272a.68.68 0 0 1-.048-.256v-.48c0-.2.072-.296.208-.296a.51.51 0 0 1 .16.024c.048.016.12.048.2.08.272.12.568.216.888.28.328.064.648.096.976.096.52 0 .92-.088 1.2-.264a.865.865 0 0 0 .424-.768.78.78 0 0 0-.216-.56c-.144-.152-.416-.288-.808-.416l-1.16-.36c-.584-.184-1.016-.456-1.288-.816a1.938 1.938 0 0 1-.408-1.2c0-.344.072-.648.216-.912.144-.264.336-.496.584-.688.24-.2.52-.344.848-.448.328-.104.68-.152 1.048-.152.184 0 .376.008.56.032.192.024.368.056.536.096.16.04.312.08.456.128.144.048.256.096.336.144a.693.693 0 0 1 .24.208.484.484 0 0 1 .064.264v.448c0 .2-.072.304-.208.304a.936.936 0 0 1-.344-.112 4.148 4.148 0 0 0-1.736-.36c-.472 0-.84.072-1.096.224a.74.74 0 0 0-.384.672c0 .216.08.4.24.552.16.152.456.304.88.44l1.136.36c.576.184.992.44 1.24.776.248.336.368.72.368 1.144 0 .352-.072.672-.208.952a2.205 2.205 0 0 1-.592.728c-.256.2-.56.352-.92.456a3.9 3.9 0 0 1-1.192.16z" fill="#FF9900"/>
                    </svg>
                  </div>
                  <span className="text-[8.5px] font-bold text-gray-500 text-center leading-tight">AWS Partner</span>
                </div>
                {/* ISO */}
                <div className="flex flex-col items-center gap-1 border border-gray-200 rounded-xl p-3 w-[90px] select-none bg-white">
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
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {biServices.map((svc, idx) => {
                const isActive = activeAccordion === idx;
                return (
                  <div
                    key={svc.title}
                    className="relative pl-6 border-b border-gray-150/70 pb-5 transition-all duration-300"
                  >
                    {/* Absolute Left Indicator Background Track */}
                    <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-gray-200/40 rounded-full" />

                    {/* Active Progressive Indicator Line drawing from top to bottom */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-3 bottom-3 w-[3px] bg-emerald-500 rounded-full origin-top transition-transform duration-75 ease-linear"
                        style={{
                          transform: `scaleY(${progress / 100})`,
                        }}
                      />
                    )}

                    <button
                      onClick={() => setActiveAccordion(idx)}
                      className="w-full flex items-center text-left py-1 cursor-pointer select-none group"
                    >
                      <span
                        className={`text-[17px] font-extrabold transition-colors duration-200 ${
                          isActive ? 'text-gray-950' : 'text-gray-500 hover:text-gray-800'
                        }`}
                      >
                        {svc.title}
                      </span>
                    </button>

                    {/* Collapsible Accordion Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-[14.5px] leading-relaxed text-gray-800 font-semibold mb-3">
                        {svc.p1}
                      </p>
                      <p className="text-[14px] leading-relaxed text-gray-500 font-medium">
                        {svc.p2}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── BI Capabilities Selector ── */}
      <section className="py-24 bg-[#f8f9fa] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div className="mb-12">
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3 select-none">BI Tech Stack</span>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              We cover the full BI and Data stack.
            </h2>
            <p className="text-[14.5px] font-medium max-w-xl" style={{color:'#555'}}>
              As a premier data engineering and visualization company, we use a modern tech stack built for{' '}
              <span className="text-[#0078d4]">low-latency analytics</span> and high reliability. Our expertise spans{' '}
              <span className="text-[#0078d4]">100+ technologies</span>, so we&apos;re ready to construct your data pipeline from end to end.
            </p>
          </div>

          {/* Two-column capability panel */}
          {(() => {
            const capabilities = [
              {
                name: 'BI & Visualization Platforms',
                desc: 'We configure commercial and custom BI platforms tailored to your business rules, licensing budgets, and distribution channels. Our dashboards offer real-time syncing, cross-platform embedding, and responsive layouts.',
                techs: ['Power BI', 'Tableau Desktop/Server', 'Google Looker', 'Qlik Sense', 'Metabase', 'Custom React D3', 'Power BI Embedded', 'Apache Superset'],
              },
              {
                name: 'Cloud Data Warehousing',
                desc: 'We architect secure cloud data warehouses designed to store petabytes of transactional records. We design dimensional star and snowflake schemas that minimize computing resource costs while accelerating heavy query response times.',
                techs: ['Snowflake', 'Google BigQuery', 'Amazon Redshift', 'Azure Synapse', 'Databricks', 'PostgreSQL', 'SAP HANA'],
              },
              {
                name: 'Data Integration & ETL/ELT',
                desc: 'We build robust integration layers that extract raw data from commercial SaaS tools, production databases, and customer logs, transforming it automatically before loading it into your central database tier.',
                techs: ['dbt (data build tool)', 'Apache Airflow', 'Fivetran', 'Talend', 'Azure Data Factory', 'AWS Glue', 'Stitch Data'],
              },
              {
                name: 'Stream Processing & Live BI',
                desc: 'For operations requiring sub-second insights, we build real-time stream ingestion pipelines that enrich IoT coordinates, transaction events, and security logs instantly as they generate.',
                techs: ['Apache Kafka', 'Apache Spark', 'Apache Flink', 'Confluent Cloud', 'AWS Kinesis', 'Azure Event Hubs'],
              },
              {
                name: 'Database Query Optimization',
                desc: 'Raw speed ensures adoption. We optimize sluggish query plans, structure column partitions, schedule index rebuilding, and implement memory-based caching layers to guarantee fast dashboards.',
                techs: ['Query Indexing', 'Data Partitioning', 'Materialized Views', 'Caching Tiers', 'Columnar Storage', 'Execution Plan Analysis'],
              },
              {
                name: 'Governance, Security & RLS',
                desc: 'Data security is non-negotiable. We implement robust row-level security (RLS) constraints that guarantee users only view logs allowed by their active roles, complying fully with ISO, HIPAA, and GDPR.',
                techs: ['Row-Level Security (RLS)', 'Column-Level Masking', 'Data Lineage Tracking', 'SOC 2 Type II Compliance', 'GDPR/HIPAA Controls', 'Okta SSO Integration'],
              },
              {
                name: 'DataOps & Automation',
                desc: 'Controlled release pipelines prevent broken metrics. We treat data pipelines as code, using version controls, automated test triggers, and environment config files to streamline deployment.',
                techs: ['GitHub Actions', 'dbt Cloud', 'Terraform (IaC)', 'Docker & Kubernetes', 'Great Expectations', 'Monte Carlo Observability'],
              },
              {
                name: 'Reconciliation & QA Testing',
                desc: 'Dashboard users must trust dashboard numbers. We construct rigorous reconciliation tests that constantly match raw transactional logs against final warehouse sums, flagging schema drift instantly.',
                techs: ['Data Reconciliation Testing', 'Schema Drift Detection', 'Automated Metric Validation', 'Performance Load Testing', 'JMeter Pipeline Testing'],
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
                          className={`w-4 h-4 flex-shrink-0 transition-colors duration-150 ${ isActive ? 'text-[#0078d4]' : 'text-gray-300' }`}
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
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3 select-none">Industry Solutions</span>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              Build with data architects who have<br />experience in your industry.
            </h2>
            <p className="text-[14.5px] font-medium max-w-xl" style={{color:'#555'}}>
              We have delivered BI dashboards across multiple industry sectors. Our engineers bring detailed understanding of your key operational metrics,{' '}
              <span className="text-orange-500">regulatory standards</span>, and distinct transactional structures.
            </p>
          </div>

          {/* Selector card */}
          {(() => {
            const industries = [
              {
                name: 'Retail & E-commerce',
                subtitle: 'Unify storefront checkouts, online warehouse logistics, and advertising costs into cohesive reports.',
                bg: 'from-gray-900 to-gray-800',
                solutions: [
                  'Sales Velocity and Product Affinity (Market Basket)',
                  'Inventory Turnover and Automated Reorder Points',
                  'Customer Acquisition Cost (CAC) vs. LTV Analysis',
                  'Promotional Impact and Markdown Optimization',
                  'Omnichannel Sales and Margin Consolidation',
                  'Real-Time Stock Depletion and Shrinkage Tracking'
                ],
              },
              {
                name: 'Financial Services',
                subtitle: 'Assemble secure, audit-ready financial reporting systems tracking risk margins and transactional volumes.',
                bg: 'from-gray-900 to-slate-800',
                solutions: [
                  'Automated Regulatory and Audit Compliance Reporting',
                  'Credit and Transactional Risk Modeling',
                  'Portfolio Valuation and Yield Tracking',
                  'Real-Time Fraud and Anomaly Detection',
                  'Profitability Analytics by Branch and Product',
                  'Expense Forecasting and Budget Reconciliation'
                ],
              },
              {
                name: 'Manufacturing & Logistics',
                subtitle: 'Monitor Overall Equipment Effectiveness (OEE) and track supply route transits.',
                bg: 'from-gray-900 to-zinc-800',
                solutions: [
                  'Overall Equipment Effectiveness (OEE) Monitoring',
                  'Predictive Maintenance and Part Stress Forecasts',
                  'Warehouse Inventory Turns and Space Utilization',
                  'Route Optimization and Transit Time Analysis',
                  'Supplier Performance and Lead-Time Benchmarks',
                  'Direct vs. Indirect Cost Allocation Charts'
                ],
              },
              {
                name: 'Healthcare & Life Sciences',
                subtitle: 'Construct HIPAA-compliant operational panels that track emergency waits and staff scheduling.',
                bg: 'from-gray-900 to-neutral-800',
                solutions: [
                  'Patient Throughput and Wait-Time Analysis',
                  'Staff Allocation and Resource Capacity Planning',
                  'Medical Billing Audits and Claims Denial Tracking',
                  'HIPAA-Compliant Patient Care Analytics',
                  'Clinical Trial Operational Metric Visualizations',
                  'Medical Supply Chain and Expiration Dashboards'
                ],
              },
              {
                name: 'SaaS & Technology',
                subtitle: 'Track granular SaaS operational and growth metrics with automated MRR and retention views.',
                bg: 'from-gray-900 to-blue-950',
                solutions: [
                  'ARR / MRR Monthly Growth Dashboards',
                  'SaaS Cohort Retention and Churn Analysis',
                  'LTV-to-CAC Ratio and Payback Period Tracking',
                  'Product Usage and Feature Adoption Analytics',
                  'Customer Support Ticket Volume and SLA Trends',
                  'Infrastructure Resource Usage and Cloud Cost Attribution'
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
                      <span className="text-[9.5px] font-black text-gray-400 uppercase tracking-widest block mb-4 select-none">Build Analytics For:</span>
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

      {/* ── BI Case Studies ── */}
      <section className="py-24 bg-[#f3f4f6]">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div className="mb-12">
            <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3 select-none">
              BI Case Studies
            </span>
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              Hundreds of analytics projects delivered.
            </h2>
            <p className="text-[15px] leading-relaxed font-medium max-w-2xl" style={{color:'#555'}}>
              From data pipeline automation to executive visualization suites, we have the experience to build systems that{' '}
              <span className="text-orange-500">unlock real strategic value</span>.
            </p>
          </div>

          {/* 3 Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tag: 'Retail & E-commerce',
                title: 'Unified Sales Dashboard for 500+ Supermarkets with Row-Level Security',
                img: 'url(/bi_retail.png)',
              },
              {
                tag: 'Fintech & Insurance',
                title: 'Real-Time Risk Analytics and Automated Regulatory Reporting Platform',
                img: 'url(/bi_saas.png)',
              },
              {
                tag: 'Healthcare Operations',
                title: 'Operations Intelligence Platform Optimizing Multi-site Patient Flow',
                img: 'url(/bi_healthcare.png)',
              },
            ].map((c) => (
              <div
                key={c.tag}
                className="group relative rounded-2xl overflow-hidden min-h-[320px] cursor-pointer flex flex-col justify-end transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
                style={{ backgroundImage: c.img, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-0" />
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

        {/* ── Featured Case Study — Agriculture Lakehouse ── */}
        <div className="container mx-auto px-6 max-w-7xl">
          <div
            className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-stretch"
            style={{ backgroundImage: 'url(/bi_logistics.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Left dark overlay panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-transparent z-0" />

            {/* Left content */}
            <div className="relative z-10 flex flex-col justify-center p-10 md:p-14 max-w-[600px]">
              <span className="inline-block text-[9px] font-black text-white/70 uppercase tracking-widest bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 mb-5 w-fit select-none">
                Agriculture & Logistics
              </span>
              <h2 className="text-white text-2xl md:text-[28px] font-extrabold leading-tight tracking-tight mb-5">
                Agricultural cooperative replaced sluggish legacy reports with real-time analytics lakehouse.
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
                An international agricultural cooperative serving 8,000+ members needed to replace a slow, brittle legacy reporting engine that took 12+ hours to process transactional warehouse shipments, leading to delayed routing decisions. We designed a robust Databricks Lakehouse architecture on AWS, replacing legacy queries with optimized PySpark jobs that update metrics in under 3 seconds.
              </p>
              <ul className="space-y-3">
                {[
                  'Reduced pipeline latency from 12 hours to under 3 seconds',
                  'Built interactive Tableau dashboards with sub-second query speeds',
                  'Constructed automated data reconciliation pipelines protecting transactional integrity',
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
                  Get expert help for your BI project.
                </h4>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Your name</label>
                    <input
                      type="text" placeholder="Full name"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Your email</label>
                    <input
                      type="email" placeholder="name@company.com"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">What can we do for you?</label>
                    <textarea
                      rows={3} placeholder="Tell us more about your needs."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-[13px] placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
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
              From code quality to governance, we&apos;ve optimized every part of how we work to support high-performing engineering teams. For you, that means clearer communication and smoother delivery. Plus, get peace of mind from having a data partner you can depend on.
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
                body: 'We can ramp up additional engineers in days and scale down just as quickly. If your BI project expands scope mid-way, we add specialists without disrupting your existing team. If a phase completes, we transition engineers off cleanly. You control headcount without the overhead of full-time hiring.',
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
                body: 'Our teams follow secure development practices, including code reviews with security checklists, dependency scanning, and penetration test integration. We are ISO 27001 certified and maintain SOC 2 Type II compliance. Your sensitive business intelligence data and logic is protected throughout the engagement.',
              },
            ];
            const tab = workTabs[activeWorkTab];
            return (
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left side pills */}
                <div className="lg:w-[280px] flex-shrink-0 flex flex-col space-y-1.5 bg-[#f8f9fa] border border-gray-200/80 rounded-2xl p-4 shadow-sm">
                  {workTabs.map((item, idx) => (
                    <button
                      key={item.label}
                      onClick={() => setActiveWorkTab(idx)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-[13.5px] font-extrabold cursor-pointer select-none transition-all duration-200 ${
                        activeWorkTab === idx
                          ? 'bg-[#0078d4] text-white shadow-md'
                          : 'hover:bg-gray-100 text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                {/* Right side contents */}
                <div className="flex-1 bg-white border border-gray-200/80 rounded-3xl p-8 md:p-10 shadow-sm min-h-[320px] flex flex-col justify-center">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest block mb-4 select-none">{tab.subtitle}</span>
                  <h3 className="text-gray-950 font-extrabold text-[22px] leading-tight tracking-tight mb-5">{tab.heading}</h3>
                  <p className="text-[14.5px] leading-relaxed text-gray-500 font-medium">{tab.body}</p>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ── Flexible Engagement Models ── */}
      <section className="pt-24 pb-64 bg-[#f3f4f6] border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-4 select-none">
              Flexible Engagement Models
            </span>
            <h2 className="text-4xl md:text-[42px] font-extrabold text-gray-950 leading-tight tracking-tight mb-4">
              Need specialized BI expertise?<br />
              Partner with our product engineering units.
            </h2>
            <p className="text-[14.5px] text-gray-500 font-medium max-w-md mx-auto">
              We customize every engagement to fit your workflow, priorities, and data delivery needs.
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — Co-Development */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-[320px] hover:border-gray-800 cursor-pointer">
              {/* Animated dark background overlay */}
              <div className="absolute inset-0 bg-gray-950 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-2xl z-0" />

              {/* Content */}
              <div className="relative z-10 p-7 flex flex-col flex-1">
                <span className="text-[9.5px] font-black text-teal-500 uppercase tracking-[0.18em] block mb-4 select-none transition-colors duration-300">
                  Co-Development
                </span>
                <h3 className="text-[20px] font-extrabold text-gray-950 group-hover:text-white leading-snug tracking-tight mb-4 max-w-[240px] transition-colors duration-300">
                  Want to embed elite BI engineering experts into your active cycles?
                </h3>
                {/* Description — hidden by default, fades in on hover */}
                <p className="text-[13.5px] leading-relaxed text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 delay-100">
                  Partner with senior, in-house KompasIT BI engineers who integrate directly into your daily workflows. They align with your timezone, join your standups, and write high-velocity code under your repository.
                </p>
              </div>

              {/* Illustration area ── slides out on hover */}
              <div className="relative z-10 h-[130px] bg-gray-50/80 border-t border-gray-100 group-hover:h-0 group-hover:opacity-0 overflow-hidden flex items-end justify-between px-6 pb-5 transition-all duration-400 ease-out">
                <svg className="w-14 h-14 text-gray-200 opacity-80" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <button className="absolute bottom-5 right-6 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 — Dedicated Units */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-[320px] hover:border-gray-800 cursor-pointer">
              <div className="absolute inset-0 bg-gray-950 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-2xl z-0" />

              <div className="relative z-10 p-7 flex flex-col flex-1">
                <span className="text-[9.5px] font-black text-teal-500 uppercase tracking-[0.18em] block mb-4 select-none transition-colors duration-300">
                  Dedicated Units
                </span>
                <h3 className="text-[20px] font-extrabold text-gray-950 group-hover:text-white leading-snug tracking-tight mb-4 max-w-[240px] transition-colors duration-300">
                  Need fully independent BI engineering units to scale data streams?
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 delay-100">
                  We build self-contained, cross-functional BI squads tailored to your analytics infrastructure. Operating with full in-house operational ownership, these pods deliver on time.
                </p>
              </div>

              <div className="relative z-10 h-[130px] bg-gray-50/80 border-t border-gray-100 group-hover:h-0 group-hover:opacity-0 overflow-hidden flex items-end justify-between px-6 pb-5 transition-all duration-400 ease-out">
                <svg className="w-14 h-14 text-gray-200 opacity-80" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="10" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="38" cy="36" r="5" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M24 20v6M24 26l-9 5M24 26l9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <button className="absolute bottom-5 right-6 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3 — Product Engineering */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-[320px] hover:border-gray-800 cursor-pointer">
              <div className="absolute inset-0 bg-gray-950 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out rounded-2xl z-0" />

              <div className="relative z-10 p-7 flex flex-col flex-1">
                <span className="text-[9.5px] font-black text-teal-500 uppercase tracking-[0.18em] block mb-4 select-none transition-colors duration-300">
                  Product Engineering
                </span>
                <h3 className="text-[20px] font-extrabold text-gray-950 group-hover:text-white leading-snug tracking-tight mb-4 max-w-[240px] transition-colors duration-300">
                  Want to deliver a complete BI lifecycle from discovery to launch?
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-300 font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 delay-100">
                  We take complete architectural and engineering responsibility for your BI system—from discovery and lakehouse design to robust pipeline deployment, reconciliation, and maintenance.
                </p>
              </div>

              <div className="relative z-10 h-[130px] bg-gray-50/80 border-t border-gray-100 group-hover:h-0 group-hover:opacity-0 overflow-hidden flex items-end justify-between px-6 pb-5 transition-all duration-400 ease-out">
                <svg className="w-14 h-14 text-gray-200 opacity-80" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <button className="absolute bottom-5 right-6 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Kick Off Section ── */}
      <section className="relative -mt-48 pb-24 bg-[#f3f4f6]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-2xl shadow-gray-400/20 px-10 py-16">

            {/* Heading */}
            <h2 className="text-3xl md:text-[38px] font-extrabold text-gray-950 text-center leading-tight tracking-tight mb-14">
              Kick off BI projects in 2–4 weeks.
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* Left — Team Rep block */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                {/* Overlapping avatars */}
                <div className="flex -space-x-4 mb-5">
                  <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-orange-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-teal-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                </div>
                <p className="text-[15px] font-extrabold text-gray-950 mb-2 leading-snug">
                  We have reps<br />across the US.
                </p>
                <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                  Speak with a client engagement{' '}
                  <span className="text-[#0078d4] font-semibold">specialist</span>{' '}
                  near you.
                </p>
              </div>

              {/* Right — 3 Steps with dashed timeline */}
              <div className="lg:col-span-8 relative">
                {/* Dashed vertical connector */}
                <div className="absolute left-[22px] top-[44px] bottom-[44px] w-[1px] border-l-2 border-dashed border-gray-300 z-0" />

                <div className="flex flex-col space-y-10">

                  {/* Step 1 */}
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-11 h-11 rounded-full border-2 border-orange-400 bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.59A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16.5px] font-extrabold text-gray-950 mb-1 leading-snug">
                        Discuss solutions and decide database/dashboard structure.
                      </h4>
                      <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[480px]">
                        Tell us more about your needs. We&apos;ll discuss best-fit pipelines and database structure based on your storage volumes, budget, and reporting requirements.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-11 h-11 rounded-full border-2 border-orange-400 bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16.5px] font-extrabold text-gray-950 mb-1 leading-snug">
                        Onboard your analytics team and build integrations.
                      </h4>
                      <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[480px]">
                        With pipeline specifications defined, we select your team. We are able to onboard data engineers and dashboard architects in 2–4 weeks.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-6 relative z-10">
                    <div className="w-11 h-11 rounded-full border-2 border-orange-400 bg-white flex-shrink-0 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16.5px] font-extrabold text-gray-950 mb-1 leading-snug">
                        We continually optimize queries and trace reconciliation.
                      </h4>
                      <p className="text-[13.5px] text-gray-500 font-medium leading-relaxed max-w-[480px]">
                        We monitor data loads and dashboards constantly to make sure they remain highly secure, performant, and accurate.
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="relative z-10 pt-2">
                    <button onClick={scrollToContact} className="py-3.5 px-8 bg-orange-500 text-white font-extrabold text-[14px] rounded-xl hover:bg-orange-600 active:scale-[0.98] transition-all duration-200 shadow-md shadow-orange-500/20 cursor-pointer select-none">
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
