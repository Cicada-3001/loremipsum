'use client';
import Link from 'next/link';
import { useState } from 'react';

const discoverLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Methodologies', href: '#' },
  { label: 'Technologies', href: '#' },
  { label: 'Certifications', href: '#' },
  { label: 'Software Development Services', href: '#' },
  { label: 'Software Development Solutions', href: '#' },
  { label: 'Dedicated Engineering Units', href: '#', highlight: true },
  { label: 'Co-Development Partnerships', href: '#', highlight: true },
  { label: 'End-to-End Product Engineering', href: '#' },
  { label: 'Diversity', href: '#' },
  { label: 'Social Responsibility', href: '#' },
  { label: 'Senior Advisor Program', href: '#' },
];

const resourceLinks = [
  { label: 'Case Studies', href: '#' },
  { label: 'AI Learning Hub', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Industries Insights', href: '/industries/real-estate', highlight: true },
  { label: 'Technology Resource Center', href: '#' },
  { label: 'Client Referral Program', href: '#' },
  { label: 'Fellows Program', href: '#' },
];

const careerLinks = [
  { label: 'Job Opportunities', href: '#' },
  { label: 'Partner Programs', href: '#' },
  { label: 'Associate Program', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="font-sans">

      {/* ── Top Dark CTA Banner ── */}
      <div className="bg-gray-900 px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h2 className="text-white text-[26px] md:text-[30px] font-extrabold leading-tight max-w-lg tracking-tight">
          See why the biggest names in tech trust us with AI development.
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[14px] px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap select-none"
        >
          Let&apos;s Discuss Your AI Project
          <span className="text-lg">→</span>
        </a>
      </div>

      {/* ── Main Footer Body ── */}
      <div className="flex flex-col lg:flex-row min-h-[420px]">

        {/* Left: White panel — Logo + link columns */}
        <div className="flex-1 bg-white px-8 md:px-12 py-12 border-r border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Logo — same as Header */}
            <div className="md:col-span-1 flex flex-col items-start">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 23 23" className="w-5 h-5">
                    <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
                    <rect x="12" y="0" width="10.5" height="10.5" fill="#7fba00" />
                    <rect x="0" y="12" width="10.5" height="10.5" fill="#00a4ef" />
                    <rect x="12" y="12" width="10.5" height="10.5" fill="#ffb900" />
                  </svg>
                </div>
                <span className="text-[17px] font-semibold text-gray-900 tracking-tight select-none">
                  KOMPAS IT
                </span>
              </Link>
            </div>

            {/* Discover KompasIT */}
            <div>
              <h4 className="text-[14px] font-extrabold text-gray-950 mb-4">
                Discover KompasIT<span className="text-gray-400">.</span>
              </h4>
              <ul className="space-y-2.5">
                {discoverLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`text-[13px] leading-snug transition-colors duration-150 ${
                        l.highlight
                          ? 'text-orange-500 hover:text-orange-600 font-medium'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[14px] font-extrabold text-gray-950 mb-4">
                Resources<span className="text-gray-400">.</span>
              </h4>
              <ul className="space-y-2.5">
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`text-[13px] leading-snug transition-colors duration-150 ${
                        l.highlight
                          ? 'text-orange-500 hover:text-orange-600 font-medium'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h4 className="text-[14px] font-extrabold text-gray-950 mb-4">
                Careers<span className="text-gray-400">.</span>
              </h4>
              <ul className="space-y-2.5">
                {careerLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-gray-500 hover:text-gray-900 leading-snug transition-colors duration-150"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom legal links */}
          <div className="mt-14 pt-5 border-t border-gray-200 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-gray-400">
            <Link href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-gray-700 transition-colors">Terms of Service</Link>
            <span className="text-gray-300">|</span>
            <Link href="#" className="hover:text-gray-700 transition-colors">Do Not Sell My Personal Information</Link>
          </div>
        </div>

        {/* Right: Grey panel — Contact + Newsletter + Social */}
        <div className="w-full lg:w-[340px] xl:w-[380px] bg-[#f3f4f6] px-8 py-12 flex flex-col gap-8">

          {/* Get in touch */}
          <div>
            <h4 className="text-[15px] font-extrabold text-gray-950 mb-4">
              Get in touch<span className="text-gray-400">.</span>
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <button className="flex-1 py-2.5 px-4 border border-gray-300 bg-white rounded-lg text-[13px] font-bold text-gray-800 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
                Contact Us
              </button>
              <button className="flex-1 py-2.5 px-4 bg-orange-500 text-white rounded-lg text-[13px] font-bold hover:bg-orange-600 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5">
                Schedule a Call <span>→</span>
              </button>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.59A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              +1 (408) 478-2739
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-[13px] font-semibold text-gray-700 leading-snug mb-3">
              Get insights from the experts on building and scaling technology teams.
            </p>
            <div className="flex gap-2 mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="flex-1 min-w-0 px-3 py-2.5 text-[13px] border border-gray-300 rounded-lg bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
              />
              <button className="px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-[13px] font-bold text-gray-800 hover:bg-gray-50 transition-colors duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap">
                Subscribe
                <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </button>
            </div>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-gray-300 accent-blue-600"
              />
              <span className="text-[11.5px] text-gray-400">
                By subscribing I accept the{' '}
                <Link href="#" className="underline hover:text-gray-600 transition-colors">Privacy Policy</Link>
              </span>
            </label>
          </div>

          {/* Follow us */}
          <div>
            <h4 className="text-[14px] font-extrabold text-gray-950 mb-4">
              Follow us<span className="text-gray-400">.</span>
            </h4>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}