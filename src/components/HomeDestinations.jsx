import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'
import SectionHeading from './SectionHeading'

export default function HomeDestinations() {
  const featured = destinations.slice(0, 6)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Where Will You Go Next?"
          subtitle="From serene backwaters to majestic mountains, explore India's most breathtaking destinations curated just for you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((dest, i) => {
            const isFirst = i === 0

            return (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={isFirst ? 'sm:col-span-2' : ''}
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block rounded-2xl overflow-hidden"
                >
                  <div className={`relative overflow-hidden ${isFirst ? 'h-80' : 'h-64'}`}>
                    <img
                      src={dest.image}
                      alt={`${dest.name} - ${dest.tagline}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full">
                        {dest.tourCount} tours
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
                        {dest.name}
                      </h3>
                      <p className="text-white/70 text-sm">{dest.tagline}</p>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                      {dest.state}
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {dest.shortDescription}
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors duration-300">
                      Explore
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
