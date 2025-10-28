export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Discerning Clients
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Hear from those who've experienced our commitment to excellence in luxury real estate
      </p>
    </div>

    <div className="relative h-[600px] perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Card 1 - Front Center */}
        <div className="absolute w-full max-w-md transform transition-all duration-700 hover:scale-105 z-30">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
                JM
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">Jennifer Morrison</h3>
                <p className="text-sm text-slate-600">CEO, Morrison Capital Group</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "Premier Estates found us a waterfront property that exceeded every expectation. Their market knowledge and negotiation skills saved us over $200,000. The attention to detail throughout the entire process was remarkable."
            </p>
          </div>
        </div>

        {/* Card 2 - Left Back */}
        <div className="absolute w-full max-w-md transform -translate-x-[450px] -translate-y-8 rotate-[-8deg] scale-90 opacity-60 transition-all duration-700 hover:opacity-100 hover:scale-95 z-20">
          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
                RC
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">Robert Chen</h3>
                <p className="text-sm text-slate-600">Managing Partner, Chen & Associates</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "After working with three other agencies, Premier Estates sold our estate in just 28 days at 98% of asking price. Their marketing strategy and professional photography made all the difference."
            </p>
          </div>
        </div>

        {/* Card 3 - Right Back */}
        <div className="absolute w-full max-w-md transform translate-x-[450px] -translate-y-8 rotate-[8deg] scale-90 opacity-60 transition-all duration-700 hover:opacity-100 hover:scale-95 z-20">
          <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
                SK
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">Sarah Kensington</h3>
                <p className="text-sm text-slate-600">Founder, Kensington Ventures</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "The team's discretion and professionalism during our high-profile acquisition was impeccable. They handled every detail with care and secured us a property in an exclusive neighborhood we thought was impossible."
            </p>
          </div>
        </div>

        {/* Card 4 - Far Back Center */}
        <div className="absolute w-full max-w-md transform translate-y-[280px] scale-75 opacity-40 transition-all duration-700 hover:opacity-70 hover:scale-80 z-10">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
                DW
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-slate-900">David Wellington</h3>
                <p className="text-sm text-slate-600">Executive Director, Wellington Trust</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed">
              "Premier Estates managed our international property portfolio transition seamlessly. Their global network and local expertise made relocating our family effortless. Truly world-class service."
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-16">
      <div className="inline-flex items-center space-x-8 text-slate-600">
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">500+</div>
          <div className="text-sm">Properties Sold</div>
        </div>
        <div className="h-12 w-px bg-slate-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">98%</div>
          <div className="text-sm">Client Satisfaction</div>
        </div>
        <div className="h-12 w-px bg-slate-300"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">$2.5B+</div>
          <div className="text-sm">Total Sales Volume</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}