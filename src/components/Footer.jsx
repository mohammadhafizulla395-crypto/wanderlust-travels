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

const destinations = [
  { to: '/destinations/kerala', label: 'Kerala' },
  { to: '/destinations/rajasthan', label: 'Rajasthan' },
  { to: '/destinations/himachal-pradesh', label: 'Himachal Pradesh' },
  { to: '/destinations/goa', label: 'Goa' },
  { to: '/destinations/kashmir', label: 'Kashmir' },
  { to: '/destinations/ladakh', label: 'Ladakh' },
]

const services = [
  { to: '/tours', label: 'Tour Packages' },
  { to: '/booking', label: 'Custom Trips' },
  { to: '/tours?category=Adventure', label: 'Adventure Tours' },
  { to: '/tours?category=Culture', label: 'Cultural Experiences' },
  { to: '/contact', label: 'Group Travel' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-neutral-400">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center">
                <svg className="w-4 h-4 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">Wanderlust</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Crafting unforgettable travel experiences across incredible India since 2015. Your journey, our passion.
            </p>
            <div className="flex gap-2.5">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href={`https://${s.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-forest flex items-center justify-center text-neutral-500 hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-white mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-white mb-4 text-sm">Destinations</h3>
            <ul className="space-y-2.5">
              {destinations.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading font-semibold text-white mb-4 text-sm">Services</h3>
            <ul className="space-y-2.5 mb-6">
              {services.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-semibold text-white mb-3 text-sm">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>MG Road, Kochi, Kerala 682011</li>
              <li><a href="tel:+919100527275" className="hover:text-white transition-colors">+91 91005 27275</a></li>
              <li><a href="mailto:hello@wanderlusttravels.in" className="hover:text-white transition-colors">hello@wanderlusttravels.in</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Wanderlust Travels. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
