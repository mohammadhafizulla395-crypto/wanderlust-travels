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
      {/* ── Hero ── */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Journeys
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] mb-6">
                Explore Our Tours
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
                Handpicked journeys across India's most extraordinary destinations —
                curated with care, crafted for the discerning traveller.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=900&q=80"
                  alt="Luxury travel destination"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden hidden lg:block border-4 border-ivory">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&q=80"
                  alt="Travel detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Tour ── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Visual anchor above heading */}
          <div className="mb-4">
            <div className="w-16 h-12 rounded-lg overflow-hidden">
              <img
                src={featured.gallery?.[0]?.image || featured.image}
                alt="Travel atmosphere"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-2">
            Featured Journey
          </h2>
          <p className="text-stone-500 mb-10">Our most sought-after experience</p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={`/tours/${featured.slug}`}
              className="group block bg-white rounded-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={`${featured.name} - ${featured.destination}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-ivory text-primary-500 text-xs font-semibold px-3 py-1.5 rounded">
                      {featured.destination}
                    </span>
                    <span className="bg-charcoal/5 text-charcoal text-xs font-semibold px-3 py-1.5 rounded">
                      {featured.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-3 group-hover:text-primary-500 transition-colors">
                    {featured.name}
                  </h3>
                  <p className="text-stone-500 leading-relaxed mb-6">
                    {featured.shortDescription}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-6">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-primary-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium text-charcoal">{featured.rating}</span>
                      <span>({featured.reviewCount})</span>
                    </div>
                    <span className="text-stone-300">|</span>
                    <span>{featured.duration}</span>
                    <span className="text-stone-300">|</span>
                    <span>{featured.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-500 uppercase tracking-wider">From</p>
                      <p className="text-2xl font-bold text-primary-500">
                        ₹{featured.price.toLocaleString()}
                        <span className="text-sm font-normal text-stone-500 ml-1">/ person</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 bg-charcoal text-white font-medium px-6 py-3 rounded text-sm group-hover:bg-primary-600 transition-colors">
                      View Journey
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Filter & Search ── */}
      <section className="py-10 border-y border-stone-200/60">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2 rounded text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-charcoal text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
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
                className="w-full pl-10 pr-4 py-2.5 border border-stone-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
              />
            </div>
          </div>

          {(activeCategory !== 'All' || searchQuery.trim()) && (
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm text-stone-500">
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
        </div>
      </section>

      {/* ── Tour Grid ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-12 h-12 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="font-heading text-xl font-semibold mb-2 text-charcoal">No tours found</h3>
              <p className="text-stone-500 mb-6">Try adjusting your search or filters.</p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded transition-colors text-sm"
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
                    className="group block bg-white rounded-xl overflow-hidden h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={tour.image}
                        alt={`${tour.name} - ${tour.destination}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="bg-charcoal text-white text-xs font-medium px-3 py-1.5 rounded">
                          {tour.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-stone-500 font-medium">{tour.destination}</span>
                        <span className="text-stone-300">·</span>
                        <span className="text-xs text-stone-500">{tour.category}</span>
                      </div>

                      <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-primary-500 transition-colors">
                        {tour.name}
                      </h3>
                      <p className="text-stone-500 text-sm line-clamp-2 mb-4 flex-1">
                        {tour.shortDescription}
                      </p>

                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-primary-500">
                          ₹{tour.price.toLocaleString()}
                          <span className="text-xs font-normal text-stone-500 ml-1">/ person</span>
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal group-hover:text-primary-500 transition-colors">
                          Explore
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
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

      {/* ── CTA ── */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1400&q=80"
            alt="Travel photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto bg-ivory rounded-xl p-10 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Ready to Begin?
              </h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Let our travel experts craft the perfect journey for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 text-sm"
                >
                  Plan Your Trip
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
