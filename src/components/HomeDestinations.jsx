import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

export default function HomeDestinations() {
  const featured = destinations[0]
  const supporting = destinations.slice(1, 4)
  const bottom = destinations.slice(4, 6)

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <p className="text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2">Destinations</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Explore India's Most Beautiful Places</h2>
          </div>
          <Link
            to="/destinations"
            className="text-forest hover:text-forest-deep font-semibold text-sm inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <Link
              to={`/destinations/${featured.slug}`}
              className="group block relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={featured.image}
                alt={`${featured.name} - ${featured.tagline}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg">
                  {featured.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">{featured.state}</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">{featured.name}</h3>
                <p className="text-white/70 text-sm">{featured.tagline}</p>
                <span className="inline-flex items-center text-white/90 font-medium text-sm mt-3 group-hover:text-white transition-colors">
                  Explore {featured.name}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </Link>
          </motion.div>

          <div className="md:col-span-5 grid grid-rows-3 gap-4">
            {supporting.map((dest, i) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block relative rounded-xl overflow-hidden h-full min-h-[140px]"
                >
                  <img
                    src={dest.image}
                    alt={`${dest.name} - ${dest.tagline}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-white/80 text-xs font-medium bg-charcoal/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      {dest.tourCount} tours
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-0.5">{dest.state}</p>
                    <h3 className="font-heading text-lg font-bold text-white">{dest.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {bottom.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {bottom.map((dest, i) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block relative rounded-xl overflow-hidden aspect-[16/9]"
                >
                  <img
                    src={dest.image}
                    alt={`${dest.name} - ${dest.tagline}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-0.5">{dest.state}</p>
                    <h3 className="font-heading text-xl font-bold text-white">{dest.name}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
