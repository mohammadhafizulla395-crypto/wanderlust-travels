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
      {/* ─── HERO — Editorial Split ─── */}
      <section className="bg-ivory py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left — Text */}
            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary-500 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                  Explore
                </p>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-[1.05]">
                  Find Your Next<br />Place
                </h1>
                <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
                  From serene backwaters to majestic mountains, discover India's most breathtaking destinations curated just for you.
                </p>
              </motion.div>
            </div>

            {/* Right — Oversized Image */}
            <motion.div
              className="md:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80"
                  alt="Explore India's finest destinations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary-500/10 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION HEADING with Visual Anchor ─── */}
      <section className="pb-10 md:pb-14">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=200&q=80"
              alt=""
              className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
            />
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal">
                Curated Destinations
              </h2>
              <p className="text-stone-500 text-sm mt-0.5">Handpicked for the discerning traveller</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FILTERS ─── */}
      <section className="pb-10 md:pb-14">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DESTINATION GRID — Asymmetric Editorial ─── */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-12 h-12 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="font-heading text-xl font-semibold mb-2">No destinations found</h3>
              <p className="text-stone-500 mb-6">Try selecting a different category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="text-primary-500 font-medium hover:text-primary-600"
              >
                View all destinations
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-12 gap-5 md:gap-6">
              {filtered.map((dest, i) => {
                const spans = i === 0
                  ? 'col-span-12 md:col-span-7'
                  : i === 1
                  ? 'col-span-12 md:col-span-5'
                  : 'col-span-12 md:col-span-4'

                return (
                  <motion.div
                    key={dest.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className={spans}
                  >
                    <Link
                      to={`/destinations/${dest.slug}`}
                      className="group block rounded-xl overflow-hidden bg-white relative"
                    >
                      <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                        <img
                          src={dest.image}
                          alt={`${dest.name} — ${dest.tagline}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />

                        {/* Category pill */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg">
                            {dest.category}
                          </span>
                        </div>

                        {/* Text overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                          <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                            {dest.name}
                          </h3>
                          <p className="text-white/70 text-sm">{dest.tagline}</p>
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="px-5 py-4 flex items-center justify-between">
                        <p className="text-stone-500 text-sm line-clamp-1 max-w-[70%]">
                          {dest.shortDescription}
                        </p>
                        <span className="inline-flex items-center text-primary-500 font-medium text-sm flex-shrink-0 group-hover:text-primary-600 transition-colors">
                          Explore
                          <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
