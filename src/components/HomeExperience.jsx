import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeExperience() {
  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2">Travel Experiences</p>
            <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-5 leading-tight">
              More Than a Trip.<br />A Story You'll Remember.
            </h2>
            <p className="text-neutral-300 text-[15px] leading-relaxed mb-4">
              From hidden alleyway cafés to sun-drenched coastlines you won't find on a postcard — we craft experiences that stay with you long after you return home.
            </p>
            <p className="text-neutral-400 text-[15px] leading-relaxed mb-8">
              Over eight years of handpicked experiences and local partnerships across India's most incredible destinations.
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center bg-white text-charcoal font-semibold px-6 py-3 rounded-lg text-sm hover:bg-ivory transition-colors"
            >
              View Our Gallery
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80"
              alt="Travel adventure"
              className="rounded-xl aspect-[4/5] object-cover w-full"
            />
            <div className="absolute -bottom-5 -left-5 w-32 h-32 rounded-xl overflow-hidden border-4 border-charcoal hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&q=80"
                alt="Taj Mahal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
