import { Link } from 'react-router-dom'

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Journal' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const popularDestinations = [
  { to: '/destinations/kerala', label: 'Kerala' },
  { to: '/destinations/rajasthan', label: 'Rajasthan' },
  { to: '/destinations/himachal-pradesh', label: 'Himachal Pradesh' },
  { to: '/destinations/goa', label: 'Goa' },
  { to: '/destinations/kashmir', label: 'Kashmir' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="font-heading text-xl font-bold text-white tracking-tight">
              Wanderlust
              <span className="inline-block w-1 h-1 rounded-full bg-primary-500 ml-0.5 mb-3" />
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mt-4 max-w-xs">
              Crafting unforgettable travel experiences across India. From backwaters to mountains, we make every journey exceptional.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Instagram', path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="text-stone-600 hover:text-white transition-colors"
                  aria-label={s.label}
                >
                  <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-600 mb-5">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {footerNav.map((n) => (
                <Link key={n.to} to={n.to} className="text-[13px] text-stone-500 hover:text-white transition-colors">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-600 mb-5">Popular Destinations</h4>
            <div className="flex flex-col gap-2">
              {popularDestinations.map((d) => (
                <Link key={d.to} to={d.to} className="text-[13px] text-stone-500 hover:text-white transition-colors">
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-stone-600 mb-5">Contact</h4>
            <div className="flex flex-col gap-2.5 text-[13px] text-stone-500">
              <div className="flex items-start gap-2.5">
                <svg className="w-3.5 h-3.5 text-stone-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Kochi, Kerala, India</span>
              </div>
              <a href="tel:+919100527275" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-stone-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+91 91005 27275</span>
              </a>
              <a href="mailto:info@wanderlusttravels.in" className="flex items-center gap-2.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5 text-stone-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@wanderlusttravels.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-stone-600">
            &copy; {new Date().getFullYear()} Wanderlust Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/faq" className="text-[11px] text-stone-600 hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="text-[11px] text-stone-600 hover:text-stone-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
