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
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
    } else {
      setAnimateIn(false);
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
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        animateIn ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal - Folded Paper Style */}
      <div
        className={`relative w-full max-w-lg mx-auto shadow-2xl transition-all duration-500 ${
          animateIn ? 'scale-100 translate-y-0 rotate-0' : 'scale-95 translate-y-8 rotate-2'
        }`}
        style={{
          background: 'linear-gradient(-135deg, transparent 40px, #fdfbf7 0)',
          borderRadius: '2px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Folded Corner */}
        <div 
          className="absolute top-0 right-0 w-[57px] h-[57px] pointer-events-none"
          style={{
            background: 'linear-gradient(-135deg, transparent 50%, #e8e4db 50%)',
            boxShadow: '-4px 4px 10px rgba(0,0,0,0.1)',
            borderBottomLeftRadius: '2px'
          }}
        />

        {/* Paper texture lines (optional, but adds to the feel) */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #00a4ef 31px, #00a4ef 32px)', backgroundPositionY: '90px' }} />

        {/* Header */}
        <div className="relative px-8 pt-10 pb-6 z-10">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black text-[#f25022] uppercase tracking-widest">KompasIT</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 font-serif italic tracking-tight">
                Schedule a Call
              </h2>
              <p className="text-base text-gray-600 font-medium mt-2 max-w-md">
                Please fill in your details below, and our team will get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 z-20"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="relative px-8 py-6 max-h-[70vh] overflow-y-auto z-10 custom-scrollbar">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-20 h-20 rounded-full border-4 border-emerald-500 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 font-serif italic">Message Received</h3>
              <p className="text-base text-gray-600 font-medium max-w-sm leading-relaxed">
                Thank you! We will review your request and reach out to you at <strong className="text-gray-900">{form.email || 'your email'}</strong> shortly.
              </p>
              <button
                onClick={handleClose}
                className="mt-10 px-10 py-3 bg-gray-900 text-white font-bold text-base rounded hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 pb-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="block w-full px-0 py-2 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00a4ef] peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00a4ef] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Full Name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="block w-full px-0 py-2 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00a4ef] peer placeholder-transparent"
                    placeholder="Work Email"
                  />
                  <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00a4ef] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Work Email *
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Company */}
                <div className="relative group">
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="block w-full px-0 py-2 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00a4ef] peer placeholder-transparent"
                    placeholder="Company Name"
                  />
                  <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00a4ef] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Company Name
                  </label>
                </div>

                {/* Phone */}
                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="block w-full px-0 py-2 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00a4ef] peer placeholder-transparent"
                    placeholder="Phone Number"
                  />
                  <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00a4ef] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone Number
                  </label>
                </div>
              </div>

              {/* Service */}
              <div className="relative group mt-8">
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={`block w-full px-0 py-2 text-lg bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#00a4ef] peer ${form.service ? 'text-gray-900 border-gray-300' : 'text-transparent border-gray-300'}`}
                >
                  <option value="" disabled hidden></option>
                  <option value="AI Development" className="text-gray-900">AI Development</option>
                  <option value="Business Intelligence" className="text-gray-900">Business Intelligence</option>
                  <option value="ERP Development" className="text-gray-900">ERP Development</option>
                  <option value="Android App Development" className="text-gray-900">Android App Development</option>
                  <option value="Cybersecurity" className="text-gray-900">Cybersecurity</option>
                  <option value="Cloud Applications" className="text-gray-900">Cloud Applications</option>
                  <option value="DevOps" className="text-gray-900">DevOps</option>
                  <option value="Digital Transformation" className="text-gray-900">Digital Transformation</option>
                  <option value="Other" className="text-gray-900">Other</option>
                </select>
                <label className={`absolute text-base text-gray-500 duration-300 transform origin-[0] top-2 -z-10 ${form.service ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100'} peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#00a4ef]`}>
                  Service of Interest *
                </label>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <div className="relative group mt-8">
                <textarea
                  name="message"
                  rows={2}
                  value={form.message}
                  onChange={handleChange}
                  className="block w-full px-0 py-2 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#00a4ef] peer placeholder-transparent resize-none leading-relaxed"
                  placeholder="Tell us about your project"
                />
                <label className="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00a4ef] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Tell us about your project
                </label>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-50/50 border-l-4 border-red-500 text-red-700 text-sm font-medium">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-4 gap-6">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto px-10 py-3 bg-[#f25022] text-white font-bold text-base rounded hover:bg-[#d8461c] active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
      `}} />
    </div>
  );
}
