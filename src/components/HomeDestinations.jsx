import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'

export default function HomeDestinations() {
  const featured = destinations[0]
  const rest = destinations.slice(1, 5)

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Explore</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-tight">
              Featured Destinations
            </h2>
          </div>
          <Link
            to="/destinations"
            className="text-[13px] font-semibold text-charcoal hover:text-primary-500 transition-colors hidden md:block"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-7"
          >
            <Link to={`/destinations/${featured.slug}`} className="group block relative rounded-2xl overflow-hidden h-[320px] md:h-[420px]">
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 md:p-9">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/60 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-md">{featured.category}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mt-3">{featured.name}</h3>
                <p className="text-white/60 text-sm mt-1">{featured.tagline}</p>
              </div>
            </Link>
          </motion.div>

          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-4 md:gap-5">
            {rest.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/destinations/${d.slug}`} className="group block relative rounded-2xl overflow-hidden h-[150px] md:h-[calc(210px-0.625rem)]">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-heading text-base font-bold text-white">{d.name}</h3>
                    <p className="text-white/50 text-xs mt-0.5">{d.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <Link
          to="/destinations"
          className="text-[13px] font-semibold text-charcoal hover:text-primary-500 transition-colors mt-8 block md:hidden"
        >
          View All Destinations
        </Link>
      </div>
    </section>
  )
}
