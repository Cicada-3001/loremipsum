// components/Industries.tsx
import Link from 'next/link';

export default function Industries() {
  const industries = [
    'Agriculture', 'Automotive', 'Aviation', 'Banking', 'Construction', 'Entertainment',
    'Finance', 'Startups', 'Healthcare', 'Insurance', 'Fintech', 'Oil and Gas',
    'Real Estate', 'Retail', 'Supply Chain', 'Telecommunications', 'Transportation and Logistics', 'Travel and Hospitality'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            We&apos;ve delivered 40+ projects across 18+ sectors. Experience in your industry? We have it.
          </p>
          
          {/* Stats */}
          <div className="flex items-center space-x-8 mb-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">40+</div>
              <div className="text-gray-500">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">18+</div>
              <div className="text-gray-500">Industry Sectors</div>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-full text-white text-sm font-semibold mb-3">
                Healthcare Case Study
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">OVIA</h3>
              <p className="text-gray-600">
                We scaled a 100M+ clinical research platform with React. Black class table.
              </p>
            </div>
            <button className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              View Case Study
            </button>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => {
              let href = '#';
              if (industry === 'Real Estate') href = '/industries/real-estate';
              if (industry === 'Automotive') href = '/industries/automotive';
              if (industry === 'Startups') href = '/industries/startups';
              if (industry === 'Supply Chain') href = '/industries/supply-chain';
              if (industry === 'Insurance') href = '/industries/insurance';
              if (industry === 'Agriculture') href = '/industries/agriculture';
              if (industry === 'Healthcare') href = '/industries/healthcare';
              if (industry === 'Retail') href = '/industries/retail';
              if (industry === 'Martech') href = '/industries/martech';
              if (industry === 'Entertainment') href = '/industries/entertainment';
              if (industry === 'Transportation and Logistics') href = '/industries/transportation-logistics';
              if (industry === 'Finance') href = '/industries/finance';
              if (industry === 'Banking') href = '/industries/banking';
              if (industry === 'Aviation') href = '/industries/aviation';
              if (industry === 'Oil and Gas') href = '/industries/oil-gas';
              return (
                <Link
                  key={industry}
                  href={href}
                  className="group bg-gray-50 p-4 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 cursor-pointer block"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:scale-110 transition-transform"></div>
                    <span className="text-gray-700 group-hover:text-blue-700">{industry}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <button className="text-blue-600 font-semibold text-lg hover:text-blue-700">
            All Industries →
          </button>
        </div>
      </div>
    </section>
  );
}