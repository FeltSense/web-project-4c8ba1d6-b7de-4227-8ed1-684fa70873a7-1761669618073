export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-4 py-16">
    {/* App Download CTA Section */}
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 mb-16 border border-slate-700">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Find Your Dream Home On The Go
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Download the Premier Estates app to browse exclusive properties, schedule viewings, and connect with agents anywhere, anytime.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-slate-700 rounded-3xl flex items-center justify-center border border-slate-600">
              <svg className="w-32 h-32 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Links Grid */}
    <div className="grid md:grid-cols-4 gap-8 mb-12">
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Premier Estates</h3>
        <p className="text-gray-400 mb-4">
          Your trusted partner in finding exceptional properties and investment opportunities.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Properties</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Buy</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rent</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Luxury Homes</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Commercial</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New Developments</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Agents</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Press</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Insights</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Buyer's Guide</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Seller's Guide</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-slate-700 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Premier Estates. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}