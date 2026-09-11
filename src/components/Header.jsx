import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Journal' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-neutral-200'
          : 'bg-white border-neutral-100'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-ivory" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-heading text-lg font-bold text-charcoal tracking-tight">
              Wanderlust
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-[13px] font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-forest bg-secondary-50'
                      : 'text-neutral-600 hover:text-charcoal hover:bg-neutral-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center text-[13px] font-medium text-neutral-600 hover:text-charcoal px-4 py-2.5 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Enquire
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center bg-terracotta hover:bg-terracotta-light text-white font-semibold px-5 py-2.5 rounded-lg text-[13px] transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block w-5 h-0.5 bg-charcoal origin-center"
              animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-charcoal"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-charcoal origin-center"
              animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <nav className="max-w-[1320px] mx-auto px-6 py-5 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-secondary-50 text-forest'
                        : 'text-neutral-700 hover:bg-neutral-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-3 border-t border-neutral-100 flex flex-col gap-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-center text-neutral-600 font-medium px-4 py-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors text-sm"
                >
                  Enquire
                </Link>
                <Link
                  to="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="text-center bg-terracotta hover:bg-terracotta-light text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm"
                >
                  Plan Your Trip
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
