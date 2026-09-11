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

  const featuredTour = filtered.length > 0 ? filtered[0] : null
  const remainingTours = filtered.length > 1 ? filtered.slice(1) : []

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
          alt="Travel tours"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-forest/50" />
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-terracotta-light font-semibold text-sm tracking-[0.2em] uppercase mb-3 font-body">
              Explore the World
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Curated Tour Packages
            </h1>
            <p className="text-stone-light text-lg leading-relaxed">
              Handpicked journeys to India's most incredible destinations. Find the perfect tour for your next adventure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Tour */}
      {featuredTour && (
        <section className="py-16 md:py-24 bg-ivory">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-terracotta font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Featured Tour
              </p>
            </motion.div>

            <Link to={`/tours/${featuredTour.slug}`} className="group block">
              <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image 55% */}
                <div className="relative lg:w-[55%] h-72 md:h-80 lg:h-auto overflow-hidden">
                  <img
                    src={featuredTour.image}
                    alt={`${featuredTour.name} - ${featuredTour.destination}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-full">
                      {featuredTour.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-terracotta text-white text-sm font-bold px-4 py-2 rounded-lg">
                      ₹{featuredTour.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Content 45% */}
                <div className="lg:w-[45%] p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-stone-dark">{featuredTour.destination}</span>
                    <span className="text-stone">·</span>
                    <span className="text-sm text-stone-dark">{featuredTour.duration}</span>
                  </div>

                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3 group-hover:text-terracotta transition-colors">
                    {featuredTour.name}
                  </h2>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-terracotta fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-charcoal">{featuredTour.rating}</span>
                      <span className="text-xs text-stone-dark">({featuredTour.reviewCount} reviews)</span>
                    </div>
                    <span className="text-stone">·</span>
                    <span className="text-xs text-stone-dark">{featuredTour.difficulty}</span>
                  </div>

                  <p className="text-stone-dark leading-relaxed mb-8">
                    {featuredTour.shortDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <span className="inline-flex items-center justify-center bg-forest hover:bg-forest-deep text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
                      View Details
                    </span>
                    <Link
                      to={`/booking?tour=${encodeURIComponent(featuredTour.name)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center border-2 border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-sm"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Filters + Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          {/* Filter strip */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full lg:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-forest text-white shadow-md'
                        : 'bg-ivory text-charcoal hover:bg-stone-light'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-72 flex-shrink-0">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-stone-light rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest transition-all bg-ivory"
                />
              </div>
            </div>
          </div>

          {/* Result count */}
          {(activeCategory !== 'All' || searchQuery.trim()) && (
            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm text-stone-dark">
                {filtered.length} {filtered.length === 1 ? 'tour' : 'tours'} found
              </span>
              <button
                onClick={resetFilters}
                className="text-sm text-terracotta hover:text-terracotta-light font-semibold"
              >
                Reset filters
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            /* Empty state */
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-stone-light mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-2">No tours found</h3>
              <p className="text-stone-dark mb-8">Try adjusting your search or filters to find what you're looking for.</p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-deep text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
              >
                View all tours
              </button>
            </div>
          ) : (
            <>
              {/* Skip first if featured was shown, otherwise show all */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {(remainingTours.length > 0 ? remainingTours : filtered).map((tour, i) => (
                  <motion.div
                    key={tour.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link
                      to={`/tours/${tour.slug}`}
                      className="group block bg-white rounded-xl overflow-hidden border border-stone-light hover:shadow-xl transition-all duration-500 h-full"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={tour.image}
                          alt={`${tour.name} - ${tour.destination}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-full">
                            {tour.category}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className="bg-terracotta text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                            ₹{tour.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-stone-dark">{tour.destination}</span>
                          <span className="text-stone">·</span>
                          <span className="text-xs text-stone-dark">{tour.duration}</span>
                        </div>

                        <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                          {tour.name}
                        </h3>
                        <p className="text-stone-dark text-sm line-clamp-2 mb-4 flex-1">
                          {tour.shortDescription}
                        </p>

                        <div className="flex items-center gap-3 mb-4 pt-3 border-t border-stone-light/60">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-terracotta fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-semibold text-charcoal">{tour.rating}</span>
                            <span className="text-xs text-stone-dark">({tour.reviewCount})</span>
                          </div>
                          <span className="text-stone">·</span>
                          <span className="text-xs text-stone-dark">{tour.difficulty}</span>
                        </div>

                        <div className="flex gap-2">
                          <span className="flex-1 text-center bg-forest text-white font-semibold text-sm py-2.5 rounded-lg group-hover:bg-forest-deep transition-colors">
                            View Details
                          </span>
                          <Link
                            to={`/booking?tour=${encodeURIComponent(tour.name)}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 text-center border-2 border-terracotta/30 text-terracotta font-semibold text-sm py-2.5 rounded-lg hover:bg-terracotta hover:text-white transition-all"
                          >
                            Enquire
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-stone-light max-w-xl mx-auto mb-8">
              Let our travel experts craft a custom itinerary tailored to your interests and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-light text-white font-semibold px-8 py-4 rounded-lg transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all text-sm"
              >
                Plan My Trip
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
