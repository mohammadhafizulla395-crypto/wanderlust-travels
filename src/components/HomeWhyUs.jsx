import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeWhyUs() {
  const benefits = [
    { title: 'Thoughtfully Planned', desc: 'Every itinerary is crafted by experts who know India intimately.' },
    { title: 'Local Experiences', desc: 'Authentic cultural immersion through local guides and hidden gems.' },
    { title: 'Flexible Planning', desc: 'Adapted to your pace, interests, and travel style.' },
    { title: 'Personal Support', desc: '24/7 assistance from inquiry to your return home.' },
  ]

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80"
              alt="Travel adventure road trip"
              className="rounded-xl aspect-[4/5] object-cover w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-forest text-white rounded-xl p-5 max-w-[180px] hidden md:block">
              <p className="font-heading text-3xl font-bold leading-tight">8+</p>
              <p className="text-sm mt-1 text-white/80">Years of travel expertise</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2">Why Wanderlust</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
              We Make Travel<br />Effortless & Meaningful
            </h2>
            <p className="text-neutral-500 text-[15px] leading-relaxed mb-8 max-w-md">
              We don't believe in cookie-cutter vacations. Every journey is shaped around your curiosity, your pace, and the moments that matter most.
            </p>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                  className="flex gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-forest text-white flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-[15px] mb-0.5">{b.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center bg-forest hover:bg-forest-deep text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
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
