import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeExperience() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-7 lg:pr-8"
          >
            <span className="text-secondary-600 text-xs tracking-[0.3em] uppercase font-medium">
              Our Story
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.15]">
              More Than
              <br />
              a Trip
            </h2>

            <div className="flex flex-col gap-5">
              <p className="text-neutral-500 leading-relaxed">
                We don't believe in cookie-cutter vacations. Every itinerary we
                craft is shaped around your curiosity, your pace, and the moments
                that matter most to you — from hidden alleyway cafés to
                sun-drenched coastlines you won't find on a postcard.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                With over eight years of handpicked experiences and local
                partnerships across six continents, we turn the ordinary into
                something you'll still be talking about decades from now.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors duration-300"
              >
                Read Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
              alt="Road trip travel adventure"
              className="w-full rounded-2xl object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary-700 text-white rounded-2xl p-5 max-w-[180px]">
              <p className="text-2xl font-bold leading-tight">8+</p>
              <p className="text-secondary-200 text-xs mt-1 leading-snug">
                Years of crafting journeys
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
