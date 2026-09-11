import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

export default function HomeDestinations() {
  const featured = destinations.slice(0, 3)
  const rest = destinations.slice(3, 6)

  return (
    <section className="py-20 md:py-28 bg-primary-50">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16 gap-4">
          <div className="max-w-lg">
            <p className="text-secondary-500 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
              Destinations
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
              Where Will You Go Next?
            </h2>
          </div>
          <Link
            to="/destinations"
            className="text-secondary-500 hover:text-secondary-600 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
          >
            View All
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Link
              to={`/destinations/${featured[0].slug}`}
              className="group block relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={featured[0].image}
                alt={`${featured[0].name} - ${featured[0].tagline}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                  {featured[0].tourCount} tours
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-primary-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  {featured[0].state}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                  {featured[0].name}
                </h3>
                <p className="text-white/70 text-sm">{featured[0].tagline}</p>
              </div>
            </Link>
          </motion.div>

          <div className="lg:col-span-5 grid grid-rows-2 gap-5">
            {featured.slice(1).map((dest, i) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block relative rounded-xl overflow-hidden aspect-[16/10]"
                >
                  <img
                    src={dest.image}
                    alt={`${dest.name} - ${dest.tagline}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                      {dest.tourCount} tours
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-primary-300 text-xs font-semibold uppercase tracking-wider mb-1">
                      {dest.state}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {dest.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {rest.map((dest, i) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block relative rounded-xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={dest.image}
                    alt={`${dest.name} - ${dest.tagline}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-primary-300 text-xs font-semibold uppercase tracking-wider mb-1">
                      {dest.state}
                    </p>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {dest.name}
                    </h3>
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
