import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-primary-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function FeaturedTour({ tour }) {
  return (
    <motion.div
      custom={0}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden">
        <div className="relative overflow-hidden aspect-[3/2] lg:aspect-auto">
          <img
            src={tour.image}
            alt={`${tour.name} - ${tour.destination}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>

        <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            {tour.name}
          </h3>

          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
            <span>{tour.destination}</span>
            <span>·</span>
            <span>{tour.duration}</span>
          </div>

          <div className="flex items-center gap-1.5 mb-5">
            <StarIcon />
            <span className="text-sm font-medium text-neutral-700">{tour.rating}</span>
          </div>

          <p className="text-neutral-500 text-sm leading-relaxed mb-6">
            {tour.shortDescription}
          </p>

          <div className="flex items-baseline gap-1 mb-8">
            <span className="font-heading text-2xl font-bold text-primary-500">
              ₹{tour.price.toLocaleString()}
            </span>
            <span className="text-neutral-400 text-sm">/ person</span>
          </div>

          <div className="flex gap-3">
            <Link
              to={`/tours/${tour.slug}`}
              className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-6 py-2.5 font-medium text-sm transition-colors"
            >
              View Details
            </Link>
            <Link
              to={`/booking?tour=${encodeURIComponent(tour.name)}`}
              className="border border-neutral-200 hover:bg-neutral-50 text-neutral-700 rounded-lg px-6 py-2.5 font-medium text-sm transition-colors"
            >
              Enquire
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function SupportingTour({ tour, index }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group bg-white rounded-xl p-4 flex gap-5 items-center"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
        <img
          src={tour.image}
          alt={`${tour.name} - ${tour.destination}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-heading text-base font-bold text-neutral-900 truncate">
          {tour.name}
        </h4>
        <p className="text-sm text-neutral-500 mt-0.5">{tour.destination}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-heading text-lg font-bold text-primary-500">
            ₹{tour.price.toLocaleString()}
          </span>
          <div className="flex items-center gap-1">
            <StarIcon />
            <span className="text-sm font-medium text-neutral-700">{tour.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function HomeTours() {
  const [main, ...supporting] = tours.slice(0, 4)

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <span className="text-primary-500 text-xs font-semibold tracking-[0.3em] uppercase">
            Curated Journeys
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mt-3">
            Tours Worth<br />Taking
          </h2>
        </div>

        <FeaturedTour tour={main} />

        <div className="flex flex-col gap-4 mt-8">
          {supporting.map((tour, i) => (
            <SupportingTour key={tour.slug} tour={tour} index={i + 1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold text-sm transition-colors"
          >
            View All Tours
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
