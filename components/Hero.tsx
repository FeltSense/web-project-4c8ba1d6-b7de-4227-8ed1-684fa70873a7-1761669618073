export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-700 rounded-full filter blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div className="space-y-8">
        <div className="inline-block">
          <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">Premier Real Estate Services</span>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Discover Your Dream Home in Prime USA Locations
        </h1>
        
        <p className="text-xl text-slate-300 leading-relaxed">
          Access an extensive portfolio of luxury properties across America's most desirable neighborhoods. Our certified agents provide personalized guidance from initial search through closing.
        </p>

        {/* Value Props */}
        <div className="space-y-4 pt-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-1">Extensive Property Portfolio</h3>
              <p className="text-slate-400">Prime residential and commercial properties across top USA markets</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-1">Certified Expert Agents</h3>
              <p className="text-slate-400">Experienced professionals with deep local market knowledge</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white mb-1">Personalized Service</h3>
              <p className="text-slate-400">Dedicated support throughout your entire real estate journey</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
            Browse Properties
          </button>
          <button className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg shadow-lg transition-all duration-200">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Right 3D Interactive Cards */}
      <div className="relative h-[600px] hidden lg:block">
        {/* Card 1 - Front */}
        <div className="absolute top-0 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30">
          <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300"></div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
              LUXURY ESTATE
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Modern Villa</h3>
            <p className="text-slate-600 text-sm mb-4">Beverly Hills, CA</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-900">$4.2M</span>
              <span className="text-sm text-slate-500">5 bed • 4 bath</span>
            </div>
          </div>
        </div>

        {/* Card 2 - Middle */}
        <div className="absolute top-32 right-16 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30">
          <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200"></div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-slate-700 text-white text-xs font-semibold rounded-full mb-3">
              PENTHOUSE
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Sky Residence</h3>
            <p className="text-slate-600 text-sm mb-4">Manhattan, NY</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-900">$6.8M</span>
              <span className="text-sm text-slate-500">4 bed • 3 bath</span>
            </div>
          </div>
        </div>

        {/* Card 3 - Back */}
        <div className="absolute top-64 right-8 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105 hover:z-30">
          <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300"></div>
          <div className="p-6">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
              WATERFRONT
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Coastal Estate</h3>
            <p className="text-slate-600 text-sm mb-4">Miami Beach, FL</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-slate-900">$5.5M</span>
              <span className="text-sm text-slate-500">6 bed • 5 bath</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 -left-8 w-24 h-24 bg-slate-700 rounded-full opacity-20 blur-2xl"></div>
      </div>
    </div>
  </div>
</section>
  );
}