import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'
import { tours } from '../data/tours'

function generateWhatsAppUrl(destination) {
  const phone = '919876543210'
  const message = `Hi! I'm interested in visiting ${destination.name}. Could you share more details?`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export default function DestinationDetails() {
  const { slug } = useParams()
  const [destination, setDestination] = useState(null)
  const [relatedTours, setRelatedTours] = useState([])

  useEffect(() => {
    const found = destinations.find((d) => d.slug === slug)
    setDestination(found)
    if (found) {
      const matched = tours.filter((t) => t.destinationSlug === slug).slice(0, 3)
      setRelatedTours(matched)
    }
    window.scrollTo(0, 0)
  }, [slug])

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">Destination Not Found</h2>
          <Link to="/destinations" className="text-primary-500 font-semibold hover:underline">
            Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  const galleryAspects = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/3]']

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />
        <div className="relative z-10 w-full mx-auto max-w-[1400px] px-5 md:px-8 pb-16 md:pb-20">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg mb-4">
            {destination.category}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            {destination.name}
          </h1>
          <p className="text-white/80 text-lg mt-3">{destination.tagline}</p>
        </div>
      </section>

      {/* Floating Panel */}
      <section className="-mt-20 relative z-10 pb-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <p className="text-stone-400 text-xs font-semibold tracking-[0.1em] uppercase mb-1">Best Time</p>
                <p className="text-charcoal font-semibold text-sm">{destination.bestTimeToVisit.split('.')[0]}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs font-semibold tracking-[0.1em] uppercase mb-1">Tour Count</p>
                <p className="text-charcoal font-semibold text-sm">{destination.tourCount} tours available</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs font-semibold tracking-[0.1em] uppercase mb-1">Category</p>
                <p className="text-charcoal font-semibold text-sm">{destination.category}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs font-semibold tracking-[0.1em] uppercase mb-1">State</p>
                <p className="text-charcoal font-semibold text-sm">{destination.state}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6">About</h2>
                <div className="space-y-4">
                  {destination.description.split('. ').reduce((acc, sentence, i, arr) => {
                    if (i % 2 === 0) {
                      const next = arr[i + 1] ? '. ' + arr[i + 1] : ''
                      acc.push(sentence + next)
                    }
                    return acc
                  }, []).map((para, i) => (
                    <p key={i} className="text-stone-500 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Highlights</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
              What Makes It Special
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl mx-auto">
            {destination.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 py-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-2" />
                <span className="text-stone-600 text-sm leading-relaxed">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Time */}
      <section className="py-16 bg-ivory-soft">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-bold text-charcoal mb-4">Best Time to Visit</h3>
            <p className="text-stone-500 text-sm leading-relaxed">{destination.bestTimeToVisit}</p>
          </motion.div>
        </div>
      </section>

      {/* Popular Tours */}
      {relatedTours.length > 0 && (
        <section className="py-20 md:py-28 bg-ivory">
          <div className="mx-auto max-w-[1400px] px-5 md:px-8">
            <div className="text-center mb-14">
              <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Journeys</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
                Popular Tours in {destination.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {relatedTours.map((tour, i) => (
                <motion.div
                  key={tour.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link to={`/tours/${tour.slug}`} className="group block bg-white rounded-2xl overflow-hidden">
                    <div className="relative h-[240px] overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg">
                        {tour.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-forest-500 bg-forest-50 px-2.5 py-1 rounded">{tour.destination}</span>
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-primary-500 bg-primary-50 px-2.5 py-1 rounded">{tour.category}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-primary-500 transition-colors">
                        {tour.name}
                      </h3>
                      <p className="text-stone-500 text-sm mt-2 line-clamp-2">{tour.shortDescription}</p>
                      <div className="flex items-center justify-between mt-5 pt-5 border-t border-stone-100">
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-charcoal">₹{tour.price.toLocaleString()}</span>
                          <span className="text-stone-400 text-xs">/ person</span>
                        </div>
                        <span className="text-[13px] font-semibold text-primary-500 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          View
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Gallery</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
              Captured Moments
            </h2>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {destination.gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative rounded-2xl overflow-hidden break-inside-avoid cursor-pointer"
              >
                <div className={`${galleryAspects[i % galleryAspects.length]} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-end">
                  <span className="text-white text-sm font-semibold px-5 py-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {item.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-ivory-soft">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Tips</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
              Travel Tips
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {destination.travelTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-2xl p-6"
              >
                <h4 className="font-heading font-bold text-charcoal mb-2">{tip.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Explore<br />{destination.name}?
          </h2>
          <p className="text-white/70 text-base md:text-lg mt-5 max-w-lg mx-auto">
            Let us craft your perfect journey to this incredible destination.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg text-sm transition-colors"
            >
              Plan Your Trip
            </Link>
            <a
              href={generateWhatsAppUrl(destination)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-sm transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
