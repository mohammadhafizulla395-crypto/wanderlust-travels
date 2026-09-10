import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'

const categories = ['All', 'Beach', 'Mountains', 'Culture', 'Adventure', 'Nature']

export default function Tours() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    document.title = 'Tours & Travel Packages | Wanderlust Travels'
  }, [])

  const filtered = useMemo(() => {
    let result = tours

    if (activeCategory !== 'All') {
      result = result.filter((t) => t.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.destination.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q)
      )
    }

    return result
  }, [activeCategory, searchQuery])

  const resetFilters = () => {
    setActiveCategory('All')
    setSearchQuery('')
  }

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
              Curated Experiences
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Tours & Travel Packages
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Handpicked journeys across India's most incredible destinations. Find the perfect tour for your next adventure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full sm:w-auto">
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

              <div className="relative w-full sm:w-72 flex-shrink-0">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                />
              </div>
            </div>
          </div>

          {(activeCategory !== 'All' || searchQuery.trim()) && (
            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm text-neutral-500">
                {filtered.length} {filtered.length === 1 ? 'tour' : 'tours'} found
              </span>
              <button
                onClick={resetFilters}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Reset filters
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20">
               <svg className="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
              <h3 className="font-heading text-xl font-semibold mb-2">No tours found</h3>
              <p className="text-neutral-500 mb-6">Try adjusting your search or filters.</p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
              >
                View all tours
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((tour, i) => (
                <motion.div
                  key={tour.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={`/tours/${tour.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={`${tour.name} - ${tour.destination}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-full">
                          {tour.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full">
                          ₹{tour.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-neutral-400">{tour.destination}</span>
                        <span className="text-neutral-300">·</span>
                        <span className="text-xs text-neutral-400">{tour.duration}</span>
                      </div>

                      <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                        {tour.name}
                      </h3>
                      <p className="text-neutral-500 text-sm line-clamp-2 mb-4 flex-1">
                        {tour.shortDescription}
                      </p>

                      <div className="flex items-center gap-3 mb-4 pt-3 border-t border-neutral-100">
                        <div className="flex items-center gap-1">
                           <svg className="w-4 h-4 text-primary-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium text-neutral-700">{tour.rating}</span>
                          <span className="text-xs text-neutral-400">({tour.reviewCount})</span>
                        </div>
                        <span className="text-neutral-300">·</span>
                        <span className="text-xs text-neutral-500">{tour.difficulty}</span>
                      </div>

                      <div className="flex gap-2">
                         <span className="flex-1 text-center bg-primary-600 text-white font-medium text-sm py-2.5 rounded-full group-hover:bg-primary-700 transition-colors">
                          View Details
                        </span>
                        <Link
                          to={`/booking?tour=${encodeURIComponent(tour.name)}`}
                          onClick={(e) => e.stopPropagation()}
                           className="flex-1 text-center border border-primary-200 text-primary-700 font-medium text-sm py-2.5 rounded-full hover:bg-primary-50 transition-colors"
                        >
                          Enquire
                        </Link>
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
