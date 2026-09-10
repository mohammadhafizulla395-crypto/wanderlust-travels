import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeHero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1920&q=80"
          alt="Scenic mountain landscape with golden sunlight"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-400 font-semibold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Explore &bull; Experience &bull; Remember
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            Discover Your<br />Next Great Escape
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            We craft unforgettable journeys across India's most breathtaking destinations.
            Your adventure starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/tours"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30"
            >
              Explore Tours
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
            >
              Plan Your Trip
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="hidden md:flex absolute bottom-12 right-8 lg:right-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 gap-6"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-white/60 mt-0.5">Happy Travelers</div>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-xs text-white/60 mt-0.5">Destinations</div>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4.9</div>
            <div className="text-xs text-white/60 mt-0.5">Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
