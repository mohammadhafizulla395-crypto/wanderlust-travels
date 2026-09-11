import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
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

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-secondary-500' : 'text-neutral-600 hover:text-secondary-500'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-50/95 backdrop-blur-md shadow-sm' : 'bg-primary-50'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-secondary-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-heading text-lg font-bold text-neutral-900 tracking-tight">
              Wanderlust
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/booking"
              className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors duration-200"
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
              className="block w-6 h-0.5 bg-neutral-900 origin-center"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-neutral-900"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-neutral-900 origin-center"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
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
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-primary-50 border-t border-neutral-200/50"
          >
            <nav className="max-w-[1320px] mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-secondary-500/10 text-secondary-500'
                        : 'text-neutral-700 hover:bg-neutral-200/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-2 border-t border-neutral-200/50">
                <Link
                  to="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
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
