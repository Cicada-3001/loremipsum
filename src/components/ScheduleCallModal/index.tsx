'use client';

import { useState, useEffect } from 'react';

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleCallModal({ isOpen, onClose }: ScheduleCallModalProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status === 'loading') return;
    setStatus('idle');
    onClose();
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-xl bg-white rounded-3xl shadow-2xl shadow-black/30 overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Decorative top bar */}

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg viewBox="0 0 23 23" className="w-5 h-5 flex-shrink-0">
                  <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
                  <rect x="12" y="0" width="10.5" height="10.5" fill="#7fba00" />
                  <rect x="0" y="12" width="10.5" height="10.5" fill="#00a4ef" />
                </svg>
                <span className="text-xs font-black text-orange-600 uppercase tracking-widest">KompasIT</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-950 leading-tight">
                Schedule a Call
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Fill in your details and we'll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ml-4"
            >
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6 max-h-[65vh] overflow-y-auto">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-950 mb-2">You're all set!</h3>
              <p className="text-sm text-gray-500 font-medium max-w-xs leading-relaxed">
                Our team will review your request and reach out to you at <strong className="text-gray-800">{form.email || 'your email'}</strong> shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-8 px-8 py-2.5 bg-[#0078d4] text-white font-bold text-sm rounded-xl hover:bg-[#006cc0] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wider block mb-1.5">
                    Full Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wider block mb-1.5">
                    Work Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Company + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wider block mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wider block mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wider block mb-1.5">
                  Service of Interest <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="AI Development">AI Development</option>
                    <option value="Business Intelligence">Business Intelligence</option>
                    <option value="ERP Development">ERP Development</option>
                    <option value="Android App Development">Android App Development</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Cloud Applications">Cloud Applications</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Co-Development">Co-Development</option>
                    <option value="Dedicated Teams">Dedicated Teams</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[12px] font-bold text-gray-600 uppercase tracking-wider block mb-1.5">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your needs, timeline, and budget..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0078d4] focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                  <p className="text-xs text-red-600 font-semibold">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-4">
                <p className="text-[11px] text-gray-400 font-medium leading-tight max-w-[180px]">
                  🔒 Your data is safe. We never share your information.
                </p>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center gap-2 px-7 py-3 bg-[#0078d4] text-white font-extrabold text-sm rounded-xl shadow-md shadow-blue-500/20 hover:bg-[#006cc0] hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M4.5 4.5h15v15" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
