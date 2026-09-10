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
          {featured.map((dest, i) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/destinations/${dest.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={`${dest.name} - ${dest.tagline}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                        {dest.tourCount} tours
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      {dest.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-primary-600 font-medium mb-1">{dest.state}</p>
                  <p className="text-neutral-500 text-sm line-clamp-2 mb-4">{dest.shortDescription}</p>
                  <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                    Explore
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
