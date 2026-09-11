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

  const featured = tours[0]

  return (
    <div>
      {/* ── HERO ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Journeys
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] mb-6">
                Explore<br />Our Tours
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
                Handpicked journeys across India's most incredible destinations.
                Find the perfect tour for your next adventure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="Explore our curated tours"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED TOUR ── */}
      <section className="py-16 bg-ivory-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-primary-500 font-semibold text-sm tracking-[0.2em] uppercase mb-2">
              Featured
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
              Editor's Pick
            </h2>
          </motion.div>

          <Link
            to={`/tours/${featured.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-full overflow-hidden">
                <img
                  src={featured.image}
                  alt={`${featured.name} - ${featured.destination}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="bg-forest-50 text-forest-500 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {featured.destination}
                  </span>
                  <span className="bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {featured.category}
                  </span>
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-3 group-hover:text-primary-500 transition-colors">
                  {featured.name}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-6">
                  {featured.shortDescription}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featured.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {featured.rating} ({featured.reviewCount})
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {featured.groupSize}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-charcoal">
                    ₹{featured.price.toLocaleString()}
                  </span>
                  <span className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── FILTER + SEARCH ── */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-charcoal text-white'
                        : 'bg-white text-stone-500 hover:bg-stone-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72 flex-shrink-0">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-charcoal"
                />
              </div>
            </div>
          </div>

          {(activeCategory !== 'All' || searchQuery.trim()) && (
            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm text-stone-400">
                {filtered.length} {filtered.length === 1 ? 'tour' : 'tours'} found
              </span>
              <button
                onClick={resetFilters}
                className="text-sm text-primary-500 hover:text-primary-600 font-medium"
              >
                Reset filters
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-12 h-12 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">No tours found</h3>
              <p className="text-stone-500 mb-6">Try adjusting your search or filters.</p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm"
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
                    className="group block bg-white rounded-2xl overflow-hidden h-full"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={`${tour.name} - ${tour.destination}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg">
                          {tour.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-forest-50 text-forest-500 text-xs font-semibold px-3 py-1 rounded-lg">
                          {tour.destination}
                        </span>
                        <span className="bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-lg">
                          {tour.category}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-primary-500 transition-colors">
                        {tour.name}
                      </h3>
                      <p className="text-stone-500 text-sm line-clamp-2 mb-4 flex-1">
                        {tour.shortDescription}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                        <span className="text-xl font-bold text-charcoal">
                          ₹{tour.price.toLocaleString()}
                        </span>
                        <span className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors">
                          View Details
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

      {/* ── CTA — Photography ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-8 text-lg">
              Let our travel experts craft the perfect itinerary for your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Plan My Trip
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
