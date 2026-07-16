'use client';
import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#0078d4] selection:text-white font-sans">
      {/* Hero */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-100 bg-gradient-to-r from-[#f0f4ff] to-[#e6f0ff]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-4">
            Get in Touch with <span className="text-orange-600">KompasIT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Have questions, partnership ideas, or just want to say hello? Fill out the form below or reach us directly.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold text-gray-950">Contact Details</h2>
              <p className="text-gray-600">
                <strong>Email:</strong> <Link href="mailto:info@allrentals.tech" className="text-[#0078d4] hover:underline">info@allrentals.tech</Link>
              </p>
              <p className="text-gray-600">
                <strong>Support:</strong> <Link href="mailto:support@allrentals.tech" className="text-[#0078d4] hover:underline">support@allrentals.tech</Link>
              </p>
              <p className="text-gray-600"><strong>Phone:</strong> +254 734 822 822</p>
              <p className="text-gray-600"><strong>Address:</strong> 123 Innovation Way, Nairobi, Kenya</p>
            </div>
            {/* Form */}
            <form className="grid grid-cols-1 gap-4" action="https://formspree.io/f/your-form-id" method="POST">
              <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0078d4]" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0078d4]" />
              <textarea name="message" placeholder="Your Message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0078d4]"></textarea>
              <button type="submit" className="w-full bg-[#0078d4] hover:bg-[#005a9e] text-white font-semibold py-2 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
