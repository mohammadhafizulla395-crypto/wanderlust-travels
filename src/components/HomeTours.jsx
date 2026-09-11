import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'

function TourMeta({ tour }) {
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-500">
      <span>{tour.destination}</span>
      <span className="text-neutral-300">·</span>
      <span>{tour.duration}</span>
    </div>
  )
}

function TourRating({ tour }) {
  return (
    <div className="flex items-center gap-1.5">
      <svg className="w-3.5 h-3.5 text-terracotta fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-sm font-medium text-charcoal">{tour.rating}</span>
      <span className="text-xs text-neutral-400">({tour.reviewCount})</span>
    </div>
  )
}

export default function HomeTours() {
  const featured = tours[0]
  const rest = tours.slice(1, 5)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <p className="text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2">Tour Packages</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Curated Tour Packages</h2>
          </div>
          <Link
            to="/tours"
            className="text-forest hover:text-forest-deep font-semibold text-sm inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            View All Tours
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={`/tours/${featured.slug}`}
            className="group block bg-ivory rounded-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-[55%] overflow-hidden">
                <img
                  src={featured.image}
                  alt={`${featured.name} - ${featured.destination}`}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-terracotta text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                    ₹{featured.price.toLocaleString()}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="lg:w-[45%] p-6 sm:p-8 flex flex-col justify-center">
                <TourMeta tour={featured} />
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2 mb-3 group-hover:text-forest transition-colors">
                  {featured.name}
                </h3>
                <TourRating tour={featured} />
                <p className="text-neutral-500 text-sm leading-relaxed mt-4 mb-6">
                  {featured.shortDescription}
                </p>
                <div className="flex gap-3 mt-auto">
                  <span className="flex-1 text-center bg-terracotta hover:bg-terracotta-light text-white font-semibold text-sm py-2.5 rounded-lg transition-colors">
                    View Details
                  </span>
                  <Link
                    to={`/booking?tour=${encodeURIComponent(featured.name)}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 text-center border border-neutral-200 hover:bg-neutral-100 text-neutral-700 font-medium text-sm py-2.5 rounded-lg transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {rest.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={`/tours/${tour.slug}`}
                className="group block bg-ivory rounded-xl overflow-hidden h-full"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={`${tour.name} - ${tour.destination}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-terracotta text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                      ₹{tour.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <TourMeta tour={tour} />
                  <h3 className="font-heading text-base font-semibold mt-1.5 mb-2 group-hover:text-forest transition-colors line-clamp-1">
                    {tour.name}
                  </h3>
                  <TourRating tour={tour} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
