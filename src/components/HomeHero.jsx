import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
          alt="Taj Mahal at sunrise with golden light"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-transparent" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 relative z-10 pb-20 md:pb-24 pt-32 w-full">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-terracotta font-semibold text-xs tracking-[0.25em] uppercase mb-4"
        >
          Explore India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-heading text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.08] max-w-[700px]"
        >
          Find Your Next<br />Great Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white/75 text-base md:text-lg max-w-lg mb-8 leading-relaxed"
        >
          Handcrafted journeys across India's most breathtaking destinations.
          From the backwaters of Kerala to the peaks of Ladakh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link
            to="/destinations"
            className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-light text-white font-semibold px-7 py-3.5 rounded-lg transition-all text-sm"
          >
            Explore Destinations
          </Link>
          <Link
            to="/tours"
            className="inline-flex items-center justify-center border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-lg transition-all text-sm"
          >
            Discover Tours
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute bottom-6 left-6 right-6 md:left-auto md:right-8 lg:right-16 z-10"
      >
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-xl max-w-md md:ml-auto">
          <p className="text-xs font-bold text-charcoal uppercase tracking-wider mb-3">Plan Your Trip</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-ivory rounded-lg p-3 text-center">
              <p className="text-[11px] text-neutral-500 mb-1">Where</p>
              <p className="text-sm font-semibold text-charcoal truncate">India</p>
            </div>
            <div className="bg-ivory rounded-lg p-3 text-center">
              <p className="text-[11px] text-neutral-500 mb-1">Duration</p>
              <p className="text-sm font-semibold text-charcoal">5-8 Days</p>
            </div>
            <div className="bg-ivory rounded-lg p-3 text-center">
              <p className="text-[11px] text-neutral-500 mb-1">Style</p>
              <p className="text-sm font-semibold text-charcoal">Premium</p>
            </div>
          </div>
          <Link
            to="/tours"
            className="mt-3 w-full inline-flex items-center justify-center bg-forest hover:bg-forest-deep text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
          >
            Search Tours
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
