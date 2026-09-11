import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { generateWhatsAppUrl } from '../utils/whatsapp'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const headerBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'

  const textColor = isHome && !scrolled ? 'text-white' : 'text-charcoal'

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerBg}`}>
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="flex items-center justify-between h-[72px] md:h-[80px]">
            <Link to="/" className="flex items-center gap-0.5">
              <span className={`font-heading text-[22px] font-bold tracking-tight ${textColor} transition-colors duration-500`}>
                Wanderlust
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3.5 py-2 text-[13px] font-medium tracking-[0.04em] uppercase transition-colors duration-300 ${
                    pathname === n.to
                      ? 'text-primary-500'
                      : `${textColor} hover:text-primary-500`
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-lg transition-all duration-300 ${
                  isHome && !scrolled
                    ? 'border border-white/25 text-white hover:bg-white/10'
                    : 'border border-stone-200 text-charcoal hover:border-stone-400'
                }`}
              >
                Plan Trip
              </a>
              <Link
                to="/booking"
                className="hidden md:inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded-lg transition-colors duration-300"
              >
                Enquire
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] ${textColor} transition-colors`}
                aria-label="Menu"
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className={`block w-5 h-[1.5px] ${isHome && !scrolled ? 'bg-white' : 'bg-charcoal'} origin-center`}
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className={`block w-5 h-[1.5px] ${isHome && !scrolled ? 'bg-white' : 'bg-charcoal'}`}
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className={`block w-5 h-[1.5px] ${isHome && !scrolled ? 'bg-white' : 'bg-charcoal'} origin-center`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-ivory lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col py-6 px-6">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={n.to}
                    className={`block py-3.5 text-[15px] font-medium border-b border-stone-100 ${
                      pathname === n.to ? 'text-primary-500' : 'text-charcoal'
                    }`}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pt-4 flex flex-col gap-3">
              <a
                href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3.5 border border-stone-200 rounded-lg text-sm font-semibold text-charcoal"
              >
                Plan Trip
              </a>
              <Link
                to="/booking"
                className="text-center py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
