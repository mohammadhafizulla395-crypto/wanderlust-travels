import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

const categories = ['All', 'Beach', 'Mountains', 'Culture', 'Adventure', 'Nature']

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = 'Destinations | Wanderlust Travels'
  }, [])

  const filtered = activeCategory === 'All'
    ? destinations
    : destinations.filter((d) => d.category === activeCategory)

  return (
    <div>
      <section className="relative bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-neutral-300 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Explore the World
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Find Your Next Destination
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              From serene backwaters to majestic mountains, discover India's most breathtaking destinations curated just for you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
               <svg className="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
              <h3 className="font-heading text-xl font-semibold mb-2">No destinations found</h3>
              <p className="text-neutral-500 mb-6">Try selecting a different category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                View all destinations
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((dest, i) => (
                <motion.div
                  key={dest.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 h-full"
                  >
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={`${dest.name} - ${dest.tagline}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                          {dest.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-heading text-xl font-bold text-white mb-1">
                          {dest.name}
                        </h3>
                        <p className="text-white/70 text-sm">{dest.state}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                        {dest.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                          Explore
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        <span className="text-xs text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">
                          {dest.tourCount} tours
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
