import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeWhyUs() {
  return (
    <section className="py-20 md:py-28 bg-primary-50">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
              alt="Road trip travel adventure"
              className="rounded-xl aspect-[4/5] object-cover w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary-500 text-white rounded-xl p-6 max-w-[200px] hidden md:block">
              <p className="font-heading text-3xl font-bold leading-tight">8+</p>
              <p className="text-sm mt-1 text-white/80">Years crafting unforgettable journeys</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-secondary-500 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
              Why Travel With Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6">
              More Than a Trip. A Story You'll Remember.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              We don't believe in cookie-cutter vacations. Every itinerary is shaped around your curiosity,
              your pace, and the moments that matter most to you.
            </p>

            <div className="space-y-5">
              {[
                { title: 'Curated Experiences', desc: 'Every tour is crafted by travel experts who know India inside out.' },
                { title: 'Local Expertise', desc: 'Authentic insights from local guides that transform trips into cultural immersion.' },
                { title: 'Flexible Plans', desc: 'Adapted itineraries for solo travelers, couples, and families alike.' },
                { title: 'Trusted Support', desc: '24/7 assistance during your trip. We are always just a call away.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block bg-secondary-500 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-secondary-600 transition-colors duration-300"
              >
                Discover Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
