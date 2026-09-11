import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'
import { generateWhatsAppUrl } from '../utils/whatsapp'

export default function TourDetails() {
  const { slug } = useParams()
  const tour = tours.find((t) => t.slug === slug)

  useEffect(() => {
    if (tour) {
      document.title = `${tour.name} | Wanderlust Travels`
    }
  }, [tour])

  if (!tour) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold text-charcoal mb-4">Tour Not Found</h1>
        <p className="text-stone-500 mb-6">The tour you're looking for doesn't exist.</p>
        <Link to="/tours" className="text-primary-500 hover:text-primary-600 font-medium">
          Browse all tours
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* ── HERO — Cinematic ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={tour.image}
            alt={`${tour.name} - ${tour.destination}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-lg">
                {tour.destination}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {tour.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-4 py-1.5 rounded-lg">
                {tour.duration}
              </span>
              <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-4 py-1.5 rounded-lg">
                {tour.difficulty}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FLOATING QUICK FACTS ── */}
      <section className="-mt-20 relative z-10 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-8"
            style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.06)' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: 'Duration',
                  value: tour.duration,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  label: 'Difficulty',
                  value: tour.difficulty,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Group Size',
                  value: tour.groupSize,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  label: 'Best Time',
                  value: tour.bestTime,
                },
              ].map((fact, i) => (
                <div key={fact.label} className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center mx-auto mb-2">
                    {fact.icon}
                  </div>
                  <p className="text-xs text-stone-400 mb-0.5">{fact.label}</p>
                  <p className="text-sm font-semibold text-charcoal">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW — Editorial Split ── */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <img
                src={tour.image}
                alt={tour.name}
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 bg-white rounded-2xl p-8"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Overview
              </h2>
              <p className="text-stone-500 leading-relaxed text-lg">
                {tour.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Highlights
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              The experiences that make this tour truly special.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {tour.highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                <span className="text-stone-500 leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ITINERARY — Editorial Timeline ── */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
              Day-by-Day Itinerary
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-stone-200" />

            {tour.itinerary.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-4 md:gap-6 pb-8 last:pb-0"
              >
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-sm">
                  {String(day.day).padStart(2, '0')}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                    {day.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{day.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCLUSIONS / EXCLUSIONS ── */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Inclusions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6"
            >
              <h3 className="font-heading text-xl font-bold text-charcoal mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-forest-50 text-forest-500 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Included
              </h3>
              <ul className="space-y-3">
                {tour.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-stone-500">
                    <svg className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-6"
            >
              <h3 className="font-heading text-xl font-bold text-charcoal mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Not Included
              </h3>
              <ul className="space-y-3">
                {tour.excluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-stone-500">
                    <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY — Masonry ── */}
      {tour.gallery && tour.gallery.length > 0 && (
        <section className="py-16 bg-ivory-soft">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
                Gallery
              </h2>
            </motion.div>
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
              {tour.gallery.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative group rounded-2xl overflow-hidden break-inside-avoid"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 2 === 0 ? '4/3' : '1/1' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs font-medium">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TRAVEL INFO ── */}
      {tour.travelTips && tour.travelTips.length > 0 && (
        <section className="py-16 bg-ivory">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Travel Information
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">
                Essential tips to help you prepare for your {tour.destination} adventure.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tour.travelTips.map((tip, i) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6"
                >
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{tip.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA — Photography ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal">
          <img
            src={tour.gallery && tour.gallery.length > 0 ? tour.gallery[0].image : tour.image}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Book This Tour?
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-3 text-lg">
              Send us an enquiry and our travel experts will craft the perfect plan.
            </p>
            <p className="text-white text-2xl font-bold mb-8">
              From ₹{tour.price.toLocaleString()} <span className="text-sm font-normal text-stone-400">/ person</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/booking?tour=${encodeURIComponent(tour.name)}`}
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Enquire Now
              </Link>
              <Link
                to={`/destinations/${tour.destinationSlug}`}
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                View Destination
              </Link>
              <a
                href={generateWhatsAppUrl(
                  `Hi! I'm interested in the "${tour.name}" tour. Could you share more details?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-forest-500 hover:bg-forest-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
