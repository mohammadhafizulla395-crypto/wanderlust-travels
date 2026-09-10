import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
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
  const { pathname } = useLocation()

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

  const isHome = pathname === '/'

  const headerBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-neutral-900/5'
    : isHome
      ? 'bg-transparent'
      : 'bg-white'

  const desktopLinkClass = ({ isActive }) =>
    `text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
      isActive ? 'text-primary-500' : 'text-neutral-500 hover:text-neutral-900'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block px-5 py-4 text-[15px] font-medium transition-colors ${
      isActive ? 'text-primary-500 bg-primary-50' : 'text-neutral-700 hover:bg-neutral-50'
    }`

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-0.5">
            <span className="font-heading text-xl font-bold text-neutral-900">Wanderlust</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-0.5" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/booking"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-5 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200"
            >
              Plan Your Trip
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-6 h-[2px] bg-neutral-800 transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[2px] bg-neutral-800 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-neutral-800 transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <nav className="container mx-auto px-4 pt-4 pb-6 flex flex-col">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-2 border-t border-neutral-100 px-5">
                <Link
                  to="/booking"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-5 py-3 text-[13px] font-semibold tracking-wide transition-colors duration-200"
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
