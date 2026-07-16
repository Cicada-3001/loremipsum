'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import ScheduleCallModal from '@/components/ScheduleCallModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutIndustriesRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutAboutRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutProductsRef = useRef<NodeJS.Timeout | null>(null);
  // Product links for dropdown
  const productLinks = [
    { name: 'AllRentals', href: 'https://allrentals.app', logo: '/allrentals_logo.jpg' },
    { name: 'KloudSales', href: 'https://KloudSales.com', logo: '/kloudsales_logo.jpg' },
    { name: 'Wasenda', href: 'https://Wasenda.com' },
    { name: 'Frappe', href: 'https://frappe.io/products', logo: '/frappe.png' },
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Industries', href: '#' },
    { label: 'About', href: '#' },
    /*{ label: 'Our Work', href: '#' }, // no page yet
    { label: 'Blog', href: '#' }, // no page yet*/
  ];

  const aboutCol1 = [
    /*{ name: 'Our Leadership Team', href: '#' },*/
    { name: 'Engineering Careers', href: '/join-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'FAQs', href: '/faq', highlighted: true },
  ];

  const aboutCol2 = [
    /*{ name: 'Awards', href: '#' },
    { name: 'Certifications', href: '#' },*/
  ];

  const aboutCol3 = [
    { name: 'Working at KompasIT', href: '/join-us' },
    /*{ name: 'Job Opportunities', href: '#' },
    { name: 'Partner Programs', href: '#' },
    { name: 'Our Circles Program', href: '#' },*/
    { name: 'Company Culture', href: '/company-culture', highlighted: true },
  ];

  const topServices = [
    { name: 'AI Development', href: '/technologies/ai', highlighted: true },
    /*{ name: 'Back-end Development', href: '#', highlighted: true },
    { name: 'CMS Development', href: '#', highlighted: true },
    { name: 'Cryptocurrency & Blockchain', href: '#' },
    { name: 'Front-end Development', href: '#' },
    { name: 'Machine Learning', href: '#', highlighted: true },
    { name: 'QA Testing & Automation', href: '#', highlighted: true },
    { name: 'UX/UI Design', href: '#', highlighted: true },*/
  ];

  const softwareServices = [
    { name: 'Android App Development', href: '/solutions/android', highlighted: true },
    { name: 'Business Intelligence', href: '/solutions/business-intelligence', highlighted: true },
    /*{ name: 'Data Engineering', href: '#' },
    { name: 'eCommerce Development', href: '#', highlighted: true },
    { name: 'iOS App Development', href: '#' },
    { name: 'Mobile App Development', href: '#', highlighted: true },
    { name: 'SaaS Development', href: '#' },
    { name: 'Web Development', href: '#' },*/
  ];

  const enterpriseServices = [
    /*{ name: 'Backup Solutions', href: '#', highlighted: true },
    { name: 'Big Data', href: '#' },
    { name: 'Cloud Applications', href: '#', highlighted: true },
    { name: 'CRM Systems', href: '#' },*/
    { name: 'Cybersecurity', href: '/solutions/cybersecurity', highlighted: true },
    /*{ name: 'DevOps', href: '#', highlighted: true },
    { name: 'Digital Transformation', href: '#', highlighted: true },*/
    { name: 'ERP Development', href: '/solutions/erp', highlighted: true },
  ];

  /* BairesDev-aligned industries list */
  const industriesCol1 = [
    { name: 'Agriculture', href: '/industries/agriculture', highlighted: true },
    { name: 'Banking', href: '/industries/banking', highlighted: true },
    { name: 'Finance', href: '/industries/finance', highlighted: true },
    { name: 'Insurance', href: '/industries/insurance', highlighted: true },
    { name: 'Real Estate', href: '/industries/real-estate', highlighted: true },
    /*{ name: 'Telecommunications', href: '#' },*/
  ];

  const industriesCol2 = [
    { name: 'Automotive', href: '/industries/automotive', highlighted: true },
    /*{ name: 'Construction', href: '#' },*/
    { name: 'Startups', href: '/industries/startups', highlighted: true },
    { name: 'Martech', href: '/industries/martech', highlighted: true },
    { name: 'Retail', href: '/industries/retail', highlighted: true },
    { name: 'Transportation and Logistics', href: '/industries/transportation-logistics', highlighted: true },
  ];

  const industriesCol3 = [
    { name: 'Aviation', href: '/industries/aviation', highlighted: true },
    { name: 'Entertainment', href: '/industries/entertainment', highlighted: true },
    { name: 'Healthcare', href: '/industries/healthcare', highlighted: true },
    { name: 'Oil and Gas', href: '/industries/oil-gas', highlighted: true },
    { name: 'Supply Chain', href: '/industries/supply-chain', highlighted: true },
    /*{ name: 'Travel and Hospitality', href: '#' },*/
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const handleIndustriesMouseEnter = () => {
    // existing code unchanged
    if (timeoutIndustriesRef.current) clearTimeout(timeoutIndustriesRef.current);
    setIsIndustriesOpen(true);
  };

  const handleProductsMouseEnter = () => {
    if (timeoutProductsRef.current) clearTimeout(timeoutProductsRef.current);
    setIsProductsOpen(true);
  };
  const handleProductsMouseLeave = () => {
    timeoutProductsRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  const handleIndustriesMouseLeave = () => {
    timeoutIndustriesRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 200);
  };

  const handleAboutMouseEnter = () => {
    if (timeoutAboutRef.current) clearTimeout(timeoutAboutRef.current);
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    timeoutAboutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 200);
  };

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/97 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          
          {/* Microsoft 4-Color Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <div id="nav-logo" className="w-10 h-10 bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 23 23" className="w-5.5 h-5.5">
                <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
                <rect x="12" y="0" width="10.5" height="10.5" fill="#7fba00" />
                <rect x="0" y="12" width="10.5" height="10.5" fill="#00a4ef" />
              </svg>
            </div>
            <span className="text-[17.5px] font-semibold text-gray-900 tracking-tight select-none">
              KOMPAS IT
            </span>
          </Link>

          {/* Desktop Navigation with Accent */}
          <nav className="hidden md:flex items-center space-x-6 h-full">
            {navItems.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div
                    key={item.label}
                    className="relative group h-full flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 h-full cursor-pointer ${
                        isServicesOpen ? 'text-[#0078d4]' : 'text-gray-600 hover:text-[#0078d4]'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-255 ${isServicesOpen ? 'rotate-180 text-[#0078d4]' : 'text-gray-400'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {/* Microsoft active style bottom border when Services Mega Menu is open */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0078d4] transition-all duration-200 ${isServicesOpen ? 'w-full' : 'w-0'}`}></span>
                  </div>
                );
              }

              if (item.label === 'Industries') {
                return (
                  <div
                    key={item.label}
                    className="relative group h-full flex items-center"
                    onMouseEnter={handleIndustriesMouseEnter}
                    onMouseLeave={handleIndustriesMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 h-full cursor-pointer ${
                        isIndustriesOpen ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-255 ${isIndustriesOpen ? 'rotate-180 text-gray-700' : 'text-gray-400'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {/* Orange style bottom border when Industries Mega Menu is open */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-800 transition-all duration-200 ${isIndustriesOpen ? 'w-full' : 'w-0'}`}></span>
                  </div>
                );
              }

              if (item.label === 'Products') {
                return (
                  <div
                    key={item.label}
                    className="relative group h-full flex items-center"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 h-full cursor-pointer ${
                        isProductsOpen ? 'text-[#0078d4]' : 'text-gray-600 hover:text-[#0078d4]'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-255 ${isProductsOpen ? 'rotate-180 text-[#0078d4]' : 'text-gray-400'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0078d4] transition-all duration-200 ${isProductsOpen ? 'w-full' : 'w-0'}`}></span>
                  </div>
                );
              }

              if (item.label === 'About') {
                return (
                  <div
                    key={item.label}
                    className="relative group h-full flex items-center"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 h-full cursor-pointer ${
                        isAboutOpen ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-255 ${isAboutOpen ? 'rotate-180 text-gray-700' : 'text-gray-400'}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {/* Orange style bottom border when About Mega Menu is open */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-800 transition-all duration-200 ${isAboutOpen ? 'w-full' : 'w-0'}`}></span>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-gray-600 hover:text-[#0078d4] font-medium transition-colors h-full flex items-center text-sm group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0078d4] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0078d4] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#005a9e] transition-all duration-200 font-semibold active:scale-[0.98] cursor-pointer">
              Schedule a Call
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-600 hover:text-[#0078d4] p-2 rounded-lg hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6 transform rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Services Mega Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full w-full bg-white border-b border-gray-150 shadow-xl transition-all duration-200 ease-out z-40 ${
          isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Column */}
            <div className="col-span-3 border-r border-gray-100 pr-8">
              <h3 className="text-xl font-bold text-gray-950 mb-2">Services</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Get software development services built around your needs:
              </p>
              
              <div className="flex flex-col space-y-3.5 mb-8">
                {['Co-Development', 'Dedicated Teams', 'Product Engineering'].map((model) => (
                  <Link
                    key={model}
                    href="#"
                    className="text-[15px] font-bold text-gray-800 hover:text-[#0078d4] transition-colors"
                  >
                    {model}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column Area: 3 Sub-columns */}
            <div className="col-span-9 flex flex-col justify-between pl-4">
              <div className="grid grid-cols-3 gap-6">
                
                {/* Column 1: TOP SERVICES */}
                <div>
                  <h4 className="text-[11px] font-extrabold text-gray-500 tracking-wider uppercase mb-5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                    Top Services
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {topServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`text-[13px] transition-all duration-200 flex items-center gap-2 group/item select-none cursor-pointer ${
                          service.highlighted
                            ? 'text-gray-500 font-semibold hover:text-gray-900'
                            : 'text-gray-500 hover:text-gray-900 font-medium'
                        }`}
                      >
                        {service.highlighted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 animate-pulse"></span>
                        )}
                        <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: SOFTWARE ENGINEERING */}
                <div>
                  <h4 className="text-[11px] font-extrabold text-gray-400 tracking-wider uppercase mb-5">
                    Software Engineering
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {softwareServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`text-[13px] transition-all duration-200 flex items-center gap-2 group/item select-none cursor-pointer ${
                          service.highlighted
                            ? 'text-gray-500 font-semibold hover:text-gray-900'
                            : 'text-gray-500 hover:text-gray-900 font-medium'
                        }`}
                      >
                        {service.highlighted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 animate-pulse"></span>
                        )}
                        <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: ENTERPRISE FOCUSED */}
                <div>
                  <h4 className="text-[11px] font-extrabold text-gray-500 tracking-wider uppercase mb-5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                    Enterprise Focused
                  </h4>
                  <div className="flex flex-col space-y-3">
                    {enterpriseServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`text-[13px] transition-all duration-200 flex items-center gap-2 group/item select-none cursor-pointer ${
                          service.highlighted
                            ? 'text-gray-500 font-semibold hover:text-gray-900'
                            : 'text-gray-500 hover:text-gray-900 font-medium'
                        }`}
                      >
                        {service.highlighted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 animate-pulse"></span>
                        )}
                        <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Row All Services Link */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center">
                <Link
                  href="#"
                  className="text-[13px] font-black text-gray-900 hover:text-[#0078d4] inline-flex items-center gap-1.5 group/all"
                >
                  All Services
                  <span className="group-hover/all:translate-x-0.5 transition-transform duration-200">→</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Industries Mega Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full w-full bg-white border-b border-gray-150 shadow-xl transition-all duration-205 ease-out z-40 ${
          isIndustriesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={handleIndustriesMouseEnter}
        onMouseLeave={handleIndustriesMouseLeave}
      >
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Column: Industries info & IQVIA logo */}
            <div className="col-span-3 border-r border-gray-100 pr-8">
              <h3 className="text-xl font-bold text-gray-950 mb-2">Industries</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                We&apos;ve delivered 40+ projects across 18+ sectors. Experience in your industry? We have it.
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                {/* IQVIA style client brand panel */}
                <div className="flex items-center space-x-2 mb-3 select-none">
                  {/* Custom IQVIA logo graphics */}
                  <svg viewBox="0 0 100 25" className="h-5 text-gray-700 fill-current">
                    <path d="M5 2h4v15H5zm8 0h3l4 10 4-10h3v15h-4V7l-3.5 10h-2L13 7v10h-4z" />
                  </svg>
                  <span className="text-[12px] font-black text-gray-900 tracking-wider uppercase">IQVIA</span>
                </div>
                <p className="text-[12.5px] text-gray-500 leading-normal mb-2.5">
                  We scaled IQVIA&apos;s clinical research platforms with React.
                </p>
                <Link href="#" className="text-gray-800 font-extrabold text-[12.5px] hover:underline inline-flex items-center gap-0.5">
                  Read case study <span className="text-sm">→</span>
                </Link>
              </div>
            </div>

            {/* Right Area: 3 Columns of Industries matching BairesDev */}
            <div className="col-span-9 flex flex-col justify-between pl-4">
              <div className="grid grid-cols-3 gap-6">
                
                {/* Column 1 */}
                <div className="flex flex-col space-y-3.5">
                  {industriesCol1.map((ind) => (
                    <Link
                      key={ind.name}
                      href={ind.href}
                      className={`text-[13.5px] transition-all duration-150 flex items-center gap-2 group/item select-none cursor-pointer ${
                        ind.highlighted
                          ? 'text-gray-500 font-semibold hover:text-gray-900'
                          : 'text-gray-500 hover:text-gray-900 font-medium'
                      }`}
                    >
                      {ind.highlighted && (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 animate-pulse"></span>
                      )}
                      <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">{ind.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-3.5">
                  {industriesCol2.map((ind) => (
                    <Link
                      key={ind.name}
                      href={ind.href}
                      className={`text-[13.5px] transition-all duration-150 flex items-center gap-2 group/item select-none cursor-pointer ${
                        ind.highlighted
                          ? 'text-gray-500 font-semibold hover:text-gray-900'
                          : 'text-gray-500 hover:text-gray-900 font-medium'
                      }`}
                    >
                      {ind.highlighted && (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 animate-pulse"></span>
                      )}
                      <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">{ind.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-3.5">
                  {industriesCol3.map((ind) => (
                    <Link
                      key={ind.name}
                      href={ind.href}
                      className={`text-[13.5px] transition-all duration-150 flex items-center gap-2 group/item select-none cursor-pointer ${
                        ind.highlighted
                          ? 'text-gray-500 font-semibold hover:text-gray-900'
                          : 'text-gray-500 hover:text-gray-900 font-medium'
                      }`}
                    >
                      {ind.highlighted && (
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 animate-pulse"></span>
                      )}
                      <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">{ind.name}</span>
                    </Link>
                  ))}
                </div>

              </div>

              {/* Bottom Row All Industries Link */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center">
                <Link
                  href="/"
                  className="text-[13px] font-black text-gray-900 hover:text-gray-700 inline-flex items-center gap-1.5 group/all"
                >
                  All Industries
                  <span className="group-hover/all:translate-x-0.5 transition-transform duration-200">→</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Products Mega Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full w-full bg-white border-b border-gray-150 shadow-xl transition-all duration-200 ease-out z-40 ${
          isProductsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={handleProductsMouseEnter}
        onMouseLeave={handleProductsMouseLeave}
      >
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <div className="grid grid-cols-12 gap-8">

            {/* Left Column */}
            <div className="col-span-3 border-r border-gray-100 pr-8">
              <h3 className="text-xl font-bold text-gray-950 mb-2">Our Products</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Explore our suite of purpose-built software products powering businesses across Africa and beyond.
              </p>
            </div>

            {/* Right Column: Product Links */}
            <div className="col-span-9 pl-4 flex items-start">
              <div className="grid grid-cols-2 gap-6 w-full">
                {productLinks.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-gray-100 hover:border-[#0078d4] hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#0078d4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0078d4]/20 transition-colors overflow-hidden">
                      {p.logo ? (
                        <img src={p.logo} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-4 h-4 text-[#0078d4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <span className="text-[15px] text-gray-800 group-hover:text-[#0078d4] transition-colors block">
                        {p.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* About Mega Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full w-full bg-white border-b border-gray-150 shadow-xl transition-all duration-205 ease-out z-40 ${
          isAboutOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={handleAboutMouseEnter}
        onMouseLeave={handleAboutMouseLeave}
      >
        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Column: About info */}
            <div className="col-span-3 border-r border-gray-100 pr-8">
              <h3 className="text-[17px] font-bold text-gray-950 mb-4 tracking-tight">About<span className="text-gray-400">.</span></h3>
              <p className="text-[13px] text-gray-500 mb-6 leading-relaxed font-medium">
                Since 2009, we&apos;ve built software for companies of all types, from startups to Fortune 500 giants.
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start space-x-3 select-none">
                  <div className="w-12 h-12 rounded bg-gray-200 overflow-hidden flex-shrink-0">
                    <img src="/hero-bg.png" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[12px] text-gray-500 leading-tight mb-1.5 font-medium">
                      Our CEO, speaking at the World Economic Forum at Davos 2025. <Link href="#" className="text-gray-900 underline decoration-gray-400 underline-offset-2">Read more</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Area: 3 Columns matching BairesDev */}
            <div className="col-span-9 flex flex-col justify-between pl-4">
              <div className="grid grid-cols-3 gap-6">
                
                {/* Column 1 */}
                <div>
                  <h4 className="text-[11px] font-extrabold text-gray-400 tracking-wider uppercase mb-5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-orange-500"></span>
                    INSIDE KOMPASIT
                  </h4>
                  <div className="flex flex-col space-y-3.5">
                    {aboutCol1.map((ind) => (
                      <Link
                        key={ind.name}
                        href={ind.href}
                        className="text-[13.5px] text-gray-600 hover:text-gray-900 font-medium transition-all duration-150 flex items-center gap-2 group/item select-none cursor-pointer"
                      >
                        <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">{ind.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="#" className="text-[13.5px] text-gray-900 font-bold hover:text-gray-700 inline-flex items-center gap-1.5 group/all">
                      Our Story <span className="group-hover/all:translate-x-0.5 transition-transform duration-200 text-gray-400">→</span>
                    </Link>
                  </div>
                </div>

                {/* Column 2 */}
                {/* <div>
                  <h4 className="text-[11px] font-extrabold text-gray-400 tracking-wider uppercase mb-5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-orange-500"></span>
                    RECOGNITIONS
                  </h4>
                  <div className="flex flex-col space-y-3.5">
                    {aboutCol2.map((ind) => (
                      <Link
                        key={ind.name}
                        href={ind.href}
                        className="text-[13.5px] text-gray-600 hover:text-gray-900 font-medium transition-all duration-150 flex items-center gap-2 group/item select-none cursor-pointer"
                      >
                        <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">{ind.name}</span>
                      </Link>
                    ))}
                  </div>
                </div> */}

                {/* Column 3 */}
                <div>
                  <h4 className="text-[11px] font-extrabold text-gray-400 tracking-wider uppercase mb-5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-orange-500"></span>
                    CAREERS
                  </h4>
                  <div className="flex flex-col space-y-3.5">
                    {aboutCol3.map((ind) => (
                      <Link
                        key={ind.name}
                        href={ind.href}
                        className="text-[13.5px] text-gray-600 hover:text-gray-900 font-medium transition-all duration-150 flex items-center gap-2 group/item select-none cursor-pointer"
                      >
                        <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">{ind.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isOpen ? 'max-h-[85vh] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">
          {navItems.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.label} className="w-full">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex items-center justify-between text-gray-600 hover:text-[#0078d4] font-semibold transition-colors py-2 text-lg cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180 text-[#0078d4]' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  
                  {/* Mobile Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col space-y-4 ${
                      isMobileServicesOpen ? 'max-h-[1200px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    <div>
                      <span className="text-[11px] font-extrabold text-gray-500 tracking-wider uppercase block mb-2">Engagement Models</span>
                      <div className="flex flex-col space-y-2.5 pl-2">
                        {['Co-Development', 'Dedicated Teams', 'Product Engineering'].map((m) => (
                          <Link key={m} href="#" onClick={() => setIsOpen(false)} className="text-sm font-bold text-gray-800 hover:text-[#0078d4]">
                            {m}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold text-gray-500 tracking-wider uppercase block mb-2">Top Services</span>
                      <div className="flex flex-col space-y-2.5 pl-2">
                        {topServices.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm flex items-center gap-1.5 ${s.highlighted ? 'text-gray-500 font-semibold' : 'text-gray-500 font-medium'}`}
                          >
                            {s.highlighted && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>}
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold text-gray-400 tracking-wider uppercase block mb-2">Software Engineering</span>
                      <div className="flex flex-col space-y-2.5 pl-2">
                        {softwareServices.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm flex items-center gap-1.5 ${s.highlighted ? 'text-gray-500 font-semibold' : 'text-gray-500 font-medium'}`}
                          >
                            {s.highlighted && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>}
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold text-gray-500 tracking-wider uppercase block mb-2">Enterprise Focused</span>
                      <div className="flex flex-col space-y-2.5 pl-2">
                        {enterpriseServices.map((s) => (
                          <Link
                            key={s.name}
                            href={s.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-sm flex items-center gap-1.5 ${s.highlighted ? 'text-gray-500 font-semibold' : 'text-gray-500 font-medium'}`}
                          >
                            {s.highlighted && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>}
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link href="#" onClick={() => setIsOpen(false)} className="text-xs font-black text-gray-900 pt-2 block border-t border-gray-100">
                      All Services →
                    </Link>
                  </div>
                </div>
              );
            }

            if (item.label === 'Industries') {
              return (
                <div key={item.label} className="w-full">
                  <button
                    onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                    className="w-full flex items-center justify-between text-gray-600 hover:text-gray-900 font-semibold transition-colors py-2 text-lg cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileIndustriesOpen ? 'rotate-180 text-gray-700' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  
                  {/* Mobile Industries Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col space-y-4 ${
                      isMobileIndustriesOpen ? 'max-h-[1200px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    <div className="flex flex-col space-y-2.5 pl-2">
                      {[...industriesCol1, ...industriesCol2, ...industriesCol3].map((ind) => (
                        <Link
                          key={ind.name}
                          href={ind.href}
                          onClick={() => {
                            setIsMobileIndustriesOpen(false);
                            setIsOpen(false);
                          }}
                          className={`text-sm flex items-center gap-1.5 ${ind.highlighted ? 'text-gray-900 font-semibold' : 'text-gray-500 font-medium'}`}
                        >
                          {ind.highlighted && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>}
                          {ind.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (item.label === 'Products') {
              return (
                <div key={item.label} className="w-full">
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className="w-full flex items-center justify-between text-gray-600 hover:text-[#0078d4] font-semibold transition-colors py-2 text-lg cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180 text-[#0078d4]' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  {/* Mobile Products Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col space-y-4 ${
                      isMobileProductsOpen ? 'max-h-[1200px] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    {productLinks.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={() => {
                          setIsMobileProductsOpen(false);
                          setIsOpen(false);
                        }}
                        className="text-sm flex items-center gap-1.5"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-[#0078d4] font-semibold transition-colors py-2 text-lg hover:pl-2 duration-200 block"
              >
                {item.label}
              </Link>
            );
          })}
          <button 
            onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
            className="w-full bg-[#0078d4] text-white py-2 text-sm rounded-lg hover:bg-[#005a9e] transition-all duration-200 font-semibold shadow-md shadow-blue-500/10 active:scale-[0.98] cursor-pointer">
            Schedule a Call
          </button>
        </div>
      </div>
    </header>
    <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}