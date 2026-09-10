import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'
import SectionHeading from './SectionHeading'

export default function HomeTours() {
  const featured = tours.slice(0, 4)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Journeys Worth Taking"
          subtitle="Handpicked tours that combine comfort, adventure, and authentic cultural experiences across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={`${tour.name} - ${tour.destination}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      {tour.destination}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                     <span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full">
                      ₹{tour.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-neutral-400">{tour.duration}</span>
                    <span className="text-neutral-300">·</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-primary-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-medium text-neutral-600">{tour.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-neutral-500 text-sm line-clamp-2 mb-5 flex-1">
                    {tour.shortDescription}
                  </p>

                  <div className="flex gap-2 mt-auto">
                    <Link
                      to={`/tours/${tour.slug}`}
                      className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm py-2.5 rounded-full transition-colors"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/booking?tour=${encodeURIComponent(tour.name)}`}
                      className="flex-1 text-center border border-primary-200 hover:bg-primary-50 text-primary-700 font-medium text-sm py-2.5 rounded-full transition-colors"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
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
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
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
