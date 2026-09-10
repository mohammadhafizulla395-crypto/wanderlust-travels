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

  const getGridClass = (index) => {
    if (index === 0) return 'col-span-12 md:col-span-7 h-80 md:h-96'
    if (index === 1 || index === 2) return 'col-span-12 md:col-span-5 h-48 md:h-[calc(50%-0.75rem)]'
    return 'col-span-12 md:col-span-4 h-64'
  }

  return (
    <div>
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-500 text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
                Explore
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                Find Your<br />Next Place
              </h1>
              <p className="text-neutral-500 text-lg max-w-md">
                From serene backwaters to majestic mountains, discover breathtaking destinations curated just for you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:order-last"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80"
                  alt="Explore destinations"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="mt-12 flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="font-heading text-2xl font-semibold text-neutral-900 mb-3">
                No destinations found
              </h3>
              <p className="text-neutral-500 mb-8">
                Try selecting a different category.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="px-6 py-3 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                View all destinations
              </button>
            </div>
          ) : (
            <div className="mt-12 grid grid-cols-12 gap-3">
              {filtered.map((dest, i) => (
                <motion.div
                  key={dest.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={getGridClass(i)}
                >
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="group block rounded-2xl overflow-hidden relative w-full h-full"
                  >
                    <img
                      src={dest.image}
                      alt={`${dest.name} - ${dest.tagline}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                        {dest.name}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">{dest.category}</p>
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
