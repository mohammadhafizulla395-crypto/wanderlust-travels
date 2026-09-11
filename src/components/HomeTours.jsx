import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'

function TourMeta({ tour }) {
  return (
    <div className="flex items-center gap-2 text-sm text-neutral-400">
      <span>{tour.duration}</span>
      <span>·</span>
      <svg className="w-3.5 h-3.5 text-primary-500 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-neutral-700 font-medium">{tour.rating}</span>
    </div>
  )
}

function PriceBadge({ price }) {
  return (
    <span className="bg-primary-500 text-white rounded-lg px-3 py-1.5 text-xs font-bold">
      ₹{price.toLocaleString()}
    </span>
  )
}

function TourActions({ tour }) {
  return (
    <div className="flex gap-3">
      <Link
        to={`/tours/${tour.slug}`}
        className="flex-1 text-center bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg font-medium text-sm py-2.5 transition-colors"
      >
        View Details
      </Link>
      <Link
        to={`/booking?tour=${encodeURIComponent(tour.name)}`}
        className="flex-1 text-center border border-neutral-200 hover:bg-neutral-50 text-neutral-700 rounded-lg font-medium text-sm py-2.5 transition-colors"
      >
        Enquire
      </Link>
    </div>
  )
}

function FeaturedCard({ tour }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group bg-white rounded-xl overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row h-full">
        <div className="relative lg:w-[45%] overflow-hidden">
          <img
            src={tour.image}
            alt={`${tour.name} - ${tour.destination}`}
            className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute top-4 right-4">
            <PriceBadge price={tour.price} />
          </div>
        </div>

        <div className="lg:w-[55%] p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <TourMeta tour={tour} />
          <h3 className="font-heading text-2xl sm:text-3xl font-semibold mt-3 mb-4 group-hover:text-secondary-500 transition-colors">
            {tour.name}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-8">
            {tour.shortDescription}
          </p>
          <div className="mt-auto">
            <TourActions tour={tour} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function SmallCard({ tour, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.image}
          alt={`${tour.name} - ${tour.destination}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <PriceBadge price={tour.price} />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <TourMeta tour={tour} />
        <h3 className="font-heading text-lg font-semibold mt-2 mb-2 group-hover:text-secondary-500 transition-colors">
          {tour.name}
        </h3>
        <p className="text-neutral-500 text-sm line-clamp-2 mb-6 flex-1">
          {tour.shortDescription}
        </p>
        <div className="mt-auto">
          <TourActions tour={tour} />
        </div>
      </div>
    </motion.div>
  )
}

export default function HomeTours() {
  const featured = tours.slice(0, 4)
  const [main, ...rest] = featured

  return (
    <section className="py-20 md:py-28 bg-primary-50">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16 gap-4">
          <div className="max-w-lg">
            <p className="text-secondary-500 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
              Tours & Packages
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
              Journeys Worth Taking
            </h2>
          </div>
          <Link
            to="/tours"
            className="text-secondary-500 hover:text-secondary-600 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
          >
            View All Tours
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <FeaturedCard tour={main} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {rest.map((tour, i) => (
            <SmallCard key={tour.slug} tour={tour} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
