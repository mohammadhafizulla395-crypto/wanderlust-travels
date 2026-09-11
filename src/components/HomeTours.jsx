import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'

export default function HomeTours() {
  const featured = tours[0]
  const rest = tours.slice(1, 4)

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Journeys</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-tight">
              Featured Tours
            </h2>
          </div>
          <Link to="/tours" className="text-[13px] font-semibold text-charcoal hover:text-primary-500 transition-colors hidden md:block">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <Link to={`/tours/${featured.slug}`} className="group block bg-white rounded-2xl overflow-hidden">
              <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg">
                  {featured.duration}
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-forest-500 bg-forest-50 px-2.5 py-1 rounded">{featured.destination}</span>
                  <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-primary-500 bg-primary-50 px-2.5 py-1 rounded">{featured.category}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal group-hover:text-primary-500 transition-colors">
                  {featured.name}
                </h3>
                <p className="text-stone-500 text-sm mt-2 line-clamp-2">{featured.shortDescription}</p>
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-stone-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-charcoal">₹{featured.price.toLocaleString()}</span>
                    <span className="text-stone-400 text-xs">/ person</span>
                  </div>
                  <span className="text-[13px] font-semibold text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-5">
            {rest.map((t, i) => (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/tours/${t.slug}`} className="group flex bg-white rounded-2xl overflow-hidden">
                  <div className="w-36 md:w-44 flex-shrink-0 overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-forest-500 bg-forest-50 px-2 py-0.5 rounded">{t.destination}</span>
                        <span className="text-[10px] text-stone-400">{t.duration}</span>
                      </div>
                      <h4 className="font-heading text-sm md:text-base font-bold text-charcoal group-hover:text-primary-500 transition-colors line-clamp-1">
                        {t.name}
                      </h4>
                      <p className="text-stone-400 text-xs mt-1 line-clamp-1">{t.shortDescription}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-lg font-bold text-charcoal">₹{t.price.toLocaleString()}</span>
                      <span className="text-[12px] font-semibold text-primary-500">View</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
