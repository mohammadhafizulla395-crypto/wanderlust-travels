import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeExperience() {
  return (
    <section className="py-20 md:py-28 bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80"
                alt="Traveler enjoying a scenic mountain view"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-primary-600 text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <div className="text-3xl font-bold mb-1">8+</div>
              <div className="text-sm text-primary-100">Years of crafting unforgettable journeys</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Travel Differently
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              More Than a Trip.<br />A Story You'll Remember.
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-6">
              At Wanderlust Travels, we believe that travel is about more than just visiting new places.
              It's about the moments that change you — the sunrise over a Himalayan peak, the laughter
              shared with locals over a traditional meal, the silence of a backwater sunset.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              We design journeys that go beyond the ordinary, weaving together culture, adventure,
              and comfort into experiences that become part of who you are.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 font-semibold px-8 py-4 rounded-full hover:bg-primary-50 transition-colors duration-300"
            >
              Discover Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
