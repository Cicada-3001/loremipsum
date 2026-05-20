import React from 'react';
import Link from 'next/link';

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#0078d4] selection:text-white font-sans">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100 relative overflow-hidden bg-gradient-to-r from-[#f0f4ff] to-[#e6f0ff]">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-[1.1] tracking-tight mb-6">
                Join the <span className="text-orange-600">KompasIT</span> family
              </h1>
              <p className="text-lg md:text-[20px] leading-relaxed text-gray-600 font-medium mb-8">
                Be part of a vibrant, innovative team shaping the future of technology. Bring your talent, grow your career, and make an impact.
              </p>
              <Link
                href="/join-us#apply"
                className="inline-block bg-[#0078d4] hover:bg-[#005a9e] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Apply Now
              </Link>
            </div>
            {/* Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: 'url(/join_us_hero.jpg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-12 text-center">
            Why work with us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Growth & Learning</h3>
              <p className="text-gray-600">Continuous mentoring, training budgets, and a culture that encourages curiosity.</p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Flexible Remote‑First</h3>
              <p className="text-gray-600">Work from anywhere, flexible hours, and a collaborative async culture.</p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-2">Cutting‑Edge Projects</h3>
              <p className="text-gray-600">Work with AI, blockchain, cloud, and other leading technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Snapshot */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-12 text-center">
            Our Culture at a Glance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl group">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: 'url(/join_us_culture.jpg)' }}
              />
            </div>
            {/* Text */}
            <div className="max-w-xl">
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                At KompasIT, we celebrate diversity, encourage open dialogue, and foster a supportive environment where every voice matters.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Weekly knowledge‑share sessions</li>
                <li>Quarterly team retreats</li>
                <li>Mentorship circles</li>
                <li>Health & wellness benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="apply" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-8 text-center">
            Ready to Join?
          </h2>
          <form className="grid grid-cols-1 gap-6" action="https://formspree.io/f/your-form-id" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0078d4]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0078d4]"
            />
            <textarea
              name="message"
              placeholder="Why do you want to work with us?"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0078d4]"
            />
            <button
              type="submit"
              className="w-full bg-[#0078d4] hover:bg-[#005a9e] text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
