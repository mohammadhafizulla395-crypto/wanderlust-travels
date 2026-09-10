import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Curated',
    description: 'Every tour handcrafted by experts',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Local Knowledge',
    description: 'Authentic insights from locals',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible',
    description: 'Adapted to your pace',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Trusted',
    description: '24/7 support throughout',
  },
]

export default function HomeWhyUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
          {/* Left — large atmospheric photograph */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80"
                alt="Serene lake and mountain landscape"
                className="w-full h-full object-cover"
              />
              {/* Soft blur overlay on edges for depth */}
              <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-white/20 mix-blend-overlay" />
              <span className="absolute inset-0 pointer-events-none backdrop-blur-sm opacity-0" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Right — content with floating ivory panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-neutral-900/5 border border-neutral-100/50">
              {/* Eyebrow */}
              <p className="text-secondary-600 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Why Us
              </p>

              {/* Heading */}
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-6 leading-tight">
                Travel With
                <br />
                Confidence
              </h2>

              {/* Description */}
              <p className="text-neutral-500 leading-relaxed mb-8">
                Every journey is backed by local expertise, genuine care, and an unwavering
                commitment to excellence.
              </p>

              {/* 2×2 benefits grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {benefits.map((b) => (
                  <div key={b.title}>
                    <div className="text-secondary-600 mb-2">{b.icon}</div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-0.5">{b.title}</h4>
                    <p className="text-xs text-neutral-500 leading-snug">{b.description}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
              >
                Discover Our Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
