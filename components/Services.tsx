export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Comprehensive Real Estate Services
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        From property search to closing, we provide expert guidance and personalized service throughout your real estate journey
      </p>
    </div>

    {/* Tab Navigation */}
    <div className="flex flex-wrap justify-center gap-3 mb-12 border-b border-gray-200 pb-6">
      <button className="px-6 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg shadow-sm transition-all hover:bg-slate-800">
        Property Portfolio
      </button>
      <button className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
        Expert Agents
      </button>
      <button className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
        Personalized Service
      </button>
      <button className="px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-gray-200 rounded-lg shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
        Market Expertise
      </button>
    </div>

    {/* Tab Content - Property Portfolio */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
          Extensive Portfolio
        </div>
        <h3 className="text-3xl font-bold text-slate-900">
          Prime Properties Across America
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Access an extensive collection of premium properties strategically located in the most desirable neighborhoods across the United States. From coastal estates to urban penthouses, our portfolio represents the finest in American real estate.
        </p>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
            <div className="text-sm text-gray-600">Active Listings</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
            <div className="text-sm text-gray-600">Prime Locations</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900 mb-1">$2.5B+</div>
            <div className="text-sm text-gray-600">Portfolio Value</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Luxury Residences</h4>
              <p className="text-sm text-gray-600">Exclusive single-family homes, estates, and waterfront properties in prestigious communities</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Urban Properties</h4>
              <p className="text-sm text-gray-600">Premium condominiums, penthouses, and lofts in major metropolitan areas and city centers</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Investment Opportunities</h4>
              <p className="text-sm text-gray-600">Commercial properties, multi-family units, and high-yield investment real estate</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Vacation & Resort Properties</h4>
              <p className="text-sm text-gray-600">Beachfront villas, mountain retreats, and luxury vacation homes in premier destinations</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center bg-slate-900 rounded-2xl p-12">
      <h3 className="text-2xl font-bold text-white mb-4">
        Ready to Find Your Dream Property?
      </h3>
      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
        Browse our exclusive portfolio or schedule a consultation with one of our expert agents today
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
          View Properties
        </button>
        <button className="px-8 py-3 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
          Contact an Agent
        </button>
      </div>
    </div>
  </div>
</section>
  );
}