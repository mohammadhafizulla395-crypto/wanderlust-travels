import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'
import Breadcrumbs from '../components/Breadcrumbs'

const categories = ['All', 'Beach', 'Mountains', 'Culture', 'Adventure', 'Nature']

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    document.title = 'Destinations | Wanderlust Travels'
  }, [])

  const filtered = activeCategory === 'All'
    ? destinations
    : destinations.filter((d) => d.category === activeCategory)

  const featured = filtered.length > 0 ? filtered[0] : null
  const rest = filtered.length > 1 ? filtered.slice(1) : []

  return (
    <div>
      {/* Photo Hero */}
      <section className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={destinations[0].image}
            alt="Explore India's destinations"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/20" />
        </div>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 relative z-10 pb-12 md:pb-16 pt-28 w-full">
          <Breadcrumbs items={[{ label: 'Destinations' }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-terracotta font-semibold text-xs tracking-[0.25em] uppercase mb-3">
              Explore India
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Explore India's Destinations
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
              From serene backwaters to majestic mountains, discover India's most breathtaking destinations curated just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter + Destinations */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-forest text-white shadow-md shadow-forest/20'
                      : 'bg-white text-charcoal hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20">
              <svg className="w-12 h-12 text-neutral-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="font-heading text-xl font-semibold mb-2">No destinations found</h3>
              <p className="text-neutral-500 mb-6">Try selecting a different category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="text-terracotta font-medium hover:text-terracotta-light"
              >
                View all destinations
              </button>
            </div>
          ) : (
            <>
              {/* Featured Destination */}
              {featured && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <Link
                    to={`/destinations/${featured.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden">
                        <img
                          src={featured.image}
                          alt={`${featured.name} - ${featured.tagline}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-terracotta text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <span className="text-forest text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                          {featured.category}
                        </span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 group-hover:text-terracotta transition-colors">
                          {featured.name}
                        </h2>
                        <p className="text-terracotta font-medium text-sm mb-3">{featured.state}</p>
                        <p className="text-neutral-600 leading-relaxed mb-6">{featured.shortDescription}</p>
                        <div className="flex items-center gap-4">
                          <span className="inline-flex items-center text-terracotta font-semibold text-sm group-hover:translate-x-1 transition-transform">
                            Explore
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                          <span className="text-xs text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full">
                            {featured.tourCount} tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Destination Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {rest.map((dest, i) => (
                    <motion.div
                      key={dest.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <Link
                        to={`/destinations/${dest.slug}`}
                        className="group block bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 h-full"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={dest.image}
                            alt={`${dest.name} - ${dest.tagline}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg">
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
                            <span className="inline-flex items-center text-terracotta font-medium text-sm group-hover:text-terracotta-light transition-colors">
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
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-charcoal text-white">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore?
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Let us craft the perfect journey for you. Get in touch and we'll create a personalized itinerary tailored to your interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center bg-terracotta hover:bg-terracotta-light text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-sm"
              >
                Browse Tours
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-sm"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
