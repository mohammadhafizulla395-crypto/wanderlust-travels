import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

export default function HomeDestinations() {
  const featured = destinations.slice(0, 6)

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-20">
          <p className="text-primary-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Destinations
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
            Places That
            <br />
            Stay With You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/destinations/${featured[0].slug}`} className="group block h-64 md:h-96 rounded-2xl overflow-hidden relative">
              <img
                src={featured[0].image}
                alt={featured[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">{featured[0].state}</p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{featured[0].name}</h3>
              </div>
            </Link>
          </motion.div>

          <div className="md:col-span-5 grid grid-rows-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/destinations/${featured[1].slug}`} className="group block h-36 md:h-[calc(50%-0.5rem)] rounded-2xl overflow-hidden relative">
                <img
                  src={featured[1].image}
                  alt={featured[1].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-1">{featured[1].state}</p>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{featured[1].name}</h3>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/destinations/${featured[2].slug}`} className="group block h-36 md:h-[calc(50%-0.5rem)] rounded-2xl overflow-hidden relative">
                <img
                  src={featured[2].image}
                  alt={featured[2].name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-1">{featured[2].state}</p>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{featured[2].name}</h3>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/destinations/${featured[3].slug}`} className="group block h-64 md:h-96 rounded-2xl overflow-hidden relative">
              <img
                src={featured[3].image}
                alt={featured[3].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">{featured[3].state}</p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{featured[3].name}</h3>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/destinations/${featured[4].slug}`} className="group block h-64 md:h-96 rounded-2xl overflow-hidden relative">
              <img
                src={featured[4].image}
                alt={featured[4].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">{featured[4].state}</p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{featured[4].name}</h3>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.40, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to={`/destinations/${featured[5].slug}`} className="group block h-64 md:h-96 rounded-2xl overflow-hidden relative">
              <img
                src={featured[5].image}
                alt={featured[5].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">{featured[5].state}</p>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white">{featured[5].name}</h3>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <Link
            to="/destinations"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors duration-300"
          >
            View All Destinations
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
