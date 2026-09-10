import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1920&q=80"
          alt="Scenic mountain landscape with golden sunlight"
          className="w-full h-full object-cover origin-center"
          loading="eager"
          style={{ animation: 'kenBurns 20s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.05); }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-400 text-xs tracking-[0.4em] uppercase mb-6 font-medium"
          >
            EST. 2015 &middot; KERALA, INDIA
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance"
            >
              Where Every<br />Journey Becomes<br />a Story
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/70 text-lg md:text-xl max-w-md mb-12 leading-relaxed"
          >
            Boutique travel experiences crafted across India's most extraordinary destinations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/tours"
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300"
            >
              Explore Destinations
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 hover:bg-white/5 text-white rounded-lg px-8 py-4 text-sm font-medium transition-all duration-300"
            >
              Plan Your Trip
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="hidden md:flex absolute bottom-12 right-8 lg:right-16 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-xs text-white/50 mt-1">Happy Travelers</div>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-xs text-white/50 mt-1">Destinations</div>
          </div>
          <div className="w-px bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9</div>
            <div className="text-xs text-white/50 mt-1">Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
