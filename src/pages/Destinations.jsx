import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)

  const categories = ['All', ...new Set(destinations.map((d) => d.category))]

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredDestinations(destinations)
    } else {
      setFilteredDestinations(destinations.filter((d) => d.category === activeCategory))
    }
  }, [activeCategory])

  const getGridClass = (index) => {
    if (index === 0) return 'col-span-12 md:col-span-7'
    if (index === 1) return 'col-span-12 md:col-span-5'
    return 'col-span-12 md:col-span-4'
  }

  return (
    <div>
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">
                Explore
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1]">
                Find Your<br />Next Place
              </h1>
              <p className="text-stone-500 text-base md:text-lg mt-6 max-w-md leading-relaxed">
                From misty hill stations to sun-kissed beaches, discover India's most extraordinary destinations curated for the modern traveler.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80"
                  alt="Explore destinations"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid grid-cols-12 gap-5">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.slug}
                className={getGridClass(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/destinations/${dest.slug}`}
                  className="group block rounded-2xl overflow-hidden relative"
                >
                  <div className="overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
                      {dest.name}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{dest.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
