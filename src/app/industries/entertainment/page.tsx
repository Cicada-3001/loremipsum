'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── Data ─── */
const services = [
  {
    title: 'Content Management & Distribution Platform Development',
    desc: 'From storage and organization to metadata management, content management and distribution platforms provide numerous services to the media and entertainment industry. Our custom platforms streamline processes like content distribution to various audiences and managing rights and licenses.',
  },
  {
    title: 'Mobile App Development for Media & Entertainment',
    desc: 'Mobile apps allow users to access entertainment on the go. We design and develop apps with features like content personalization, streaming capabilities, social media integration, e-commerce integration, and more.',
  },
  {
    title: 'Virtual & Augmented Reality Content Creation',
    desc: 'VR/AR helps you deliver interactive and immersive user experiences. We incorporate tools like Unity 3D and Blender into a variety of entertainment software solutions to create engaging virtual and enhanced environments.',
  },
  {
    title: 'Customer Relationship Management (CRM) Application Development',
    desc: 'Manage relationships with service providers, clients, and other stakeholders in the media and entertainment industry. We create custom CRM applications that allow you to manage customer data, track engagement, provide support, receive analytics, and more.',
  },
  {
    title: 'Digital Asset Management Solution Development',
    desc: 'Digital asset management software allows you to store, manage, organize, and distribute materials like videos, audio files, images, and animation. Our developers equip your DAM platforms with advanced features like version control, high-capacity storage, and metadata management.',
  },
  {
    title: 'Virtual Event & Conference Platform Development',
    desc: 'Present live streams. Conduct interactive exhibits. Host webinars and workshops. With custom virtual event and conference platforms, you can manage and showcase events in an online environment. You\'ll be able to replicate many aspects of in-person events in a digital space.',
  },
  {
    title: 'Blockchain-Based Intellectual Property Management',
    desc: 'Known for strong security and decentralization, blockchain technology provides a transparent way to handle intellectual property rights, royalties, and distribution. This is critical for the entertainment industry, where digital assets must be managed and protected. Our blockchain-based solutions safeguard your content and help you effectively handle IP rights.',
  },
];

const benefits = [
  {
    title: 'Tailored to Your Needs',
    desc: 'Custom media and entertainment software is tailored directly to your requirements. You can incorporate unique features that aren\'t available in off-the-shelf solutions and offer personalized experiences. By aligning your software with your goals, you\'ll be better equipped to stay competitive and relevant.',
  },
  {
    title: 'Improved Customer Experience',
    desc: 'Tailored entertainment software solutions provide a more consistent customer experience. They\'re built to accommodate and engage your user base so you can incorporate the features and qualities your users prefer.',
  },
  {
    title: 'Seamless Integration',
    desc: 'Because these solutions are built with your business in mind, they can fit in seamlessly with your existing infrastructure and systems. This allows you to avoid compatibility issues as you integrate your various tools and platforms.',
  },
  {
    title: 'Longevity and Adaptability',
    desc: 'Ensure your software stays relevant. Bespoke software is designed with future changes in mind and can accommodate new industry requirements and trends.',
  },
  {
    title: 'Ownership and Autonomy',
    desc: 'You\'ll retain full ownership of custom software. With this autonomy, you\'ll have control over updates, upgrades, and maintenance.',
  },
];

const accordions = [
  {
    title: 'Film and Television Studios',
    desc: 'These companies create interactive experiences related to movies or shows, such as VR experiences or mobile games that extend the universe of their content.',
  },
  {
    title: 'Gaming Companies',
    desc: 'Gaming companies demand unique and engaging apps and software to stay competitive.',
  },
  {
    title: 'Music Industry',
    desc: 'Artists and labels can use custom software for interactive music experiences.',
  },
  {
    title: 'Museums and Cultural Institutions',
    desc: 'These institutions may use custom software to create interactive exhibits or educational experiences.',
  },
  {
    title: 'Event Organizers',
    desc: 'Custom software can enhance visitor experiences through interactive guides, augmented reality experiences, or social engagement tools for a variety of events.',
  },
  {
    title: 'Education Institutions',
    desc: 'Educational organizations and institutions may use custom games or interactive learning tool to better engage learners.',
  },
];

export default function EntertainmentPage() {
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
    <div className="bg-[#f8f9fa] min-h-screen text-gray-900 selection:bg-[#0078d4] selection:text-white">

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
            <span className="text-gray-800 font-bold">Entertainment</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-[11px] font-black text-[#0078d4] uppercase tracking-widest block mb-3.5 select-none">
                ENTERTAINMENT SOFTWARE DEVELOPMENT
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[46px] font-extrabold text-gray-950 leading-[1.12] tracking-tight mb-6">
                Delight consumers with engaging media and entertainment software.
              </h1>
              <p className="text-[15.5px] leading-relaxed text-gray-600 font-medium mb-10 max-w-[620px]">
                Create entertainment software solutions with a strong UX. Assemble custom teams of highly skilled senior engineers to drive innovation.
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

            {/* Block 1: Services Grid */}
            <div ref={servicesRef} id="services" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                DELIVERED SOLUTIONS
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6">
                Entertainment software development services we provide
              </h2>
              <p className="text-[14.5px] leading-relaxed text-gray-600 font-medium mb-12">
                Our custom media and entertainment software boosts user engagement, streamlines complex processes, and equips businesses in are variety of industry sectors with critical analytics and data insights. From streaming services to AR/VR-enhanced platforms, our solutions benefit diverse clients. Our services include:
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
              <div className="flex items-center space-x-6">
                <div className="hidden md:block w-20 h-20 rounded-full bg-white/20 overflow-hidden flex-shrink-0 border-2 border-white/30">
                  <img src="/kenyan-devs.png" alt="Consultant" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white text-xl font-extrabold leading-snug tracking-tight max-w-[460px]">
                  From concept to completion. 100s of custom software solutions built since 2009.
                </h3>
              </div>
              <button
                onClick={() => handleAnchorClick('faq', faqRef)}
                className="bg-gray-950 hover:bg-gray-900 text-white font-extrabold text-[12px] uppercase tracking-wider px-6 py-3.5 rounded-lg active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule a Call →
              </button>
            </div>

            {/* Block 2: Bespoke Benefits Grid */}
            <div ref={benefitsRef} id="benefits" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                ADVANTAGES & OUTCOMES
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-12">
                Benefits of building bespoke solutions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-transparent group">
                    <h4 className="text-[15px] font-extrabold text-gray-950 mb-3 leading-snug group-hover:text-orange-600 transition-colors">{b.title}</h4>
                    <p className="text-[13px] leading-relaxed text-gray-500 font-medium">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Block 3: Expandable Institutions Accordion */}
            <div ref={institutionsRef} id="institutions" className="scroll-mt-24">
              <span className="text-[11px] font-black text-orange-600 uppercase tracking-widest block mb-3.5 select-none">
                INDUSTRY REACH
              </span>
              <h2 className="text-3xl md:text-[36px] font-extrabold text-gray-950 tracking-tight mb-6 max-w-[600px]">
                Which institutions benefit from custom entertainment software development?
              </h2>
              <p className="text-[14px] leading-relaxed text-gray-500 font-medium mb-10">
                Custom solutions can benefit businesses across different media and entertainment industries. Here are some examples:
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
                    { step: '01', title: 'Content Systems Audit', body: 'We assess active broadcasting pipelines, asset management logic, and streaming architectures.' },
                    { step: '02', title: 'Immersive Software Prototyping', body: 'Our UI/UX team delivers robust wireframes tailored for gaming or media consumption platforms.' },
                    { step: '03', title: 'High-Volume Scalability Testing', body: 'We conduct performance benchmarking to ensure smooth playback and low latency for global audiences.' },
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
                Assemble vetted entertainment software engineering teams in 2-4 weeks. Get started today.
              </p>
              {/* Overlapping small avatar reps */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/20" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/30" />
                <div className="w-8 h-8 rounded-full border-2 border-orange-600 bg-white/40" />
              </div>
            </div>

            {/* Insight cards */}
            <div className="bg-[#e9ecef] text-gray-900 border border-gray-300/50 rounded-2xl overflow-hidden shadow-sm hover:border-gray-400/50 transition-colors cursor-pointer group">
              <div className="h-32 w-full bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/bi_saas.png)' }} />
              </div>
              <div className="p-4">
                <p className="text-[13px] font-bold leading-snug tracking-tight text-gray-800">
                  Blockchain Might Be the Future of the Media and Entertainment Industry
                </p>
              </div>
            </div>

            <div className="bg-[#e9ecef] text-gray-900 border border-gray-300/50 rounded-2xl overflow-hidden shadow-sm hover:border-gray-400/50 transition-colors cursor-pointer group">
              <div className="h-32 w-full bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url(/ai-developers.png)' }} />
              </div>
              <div className="p-4">
                <p className="text-[13px] font-bold leading-snug tracking-tight text-gray-800">
                  4 Major Ways in Which AI is Changing Entertainment
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
