import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'
import { generateWhatsAppUrl } from '../utils/whatsapp'
import Breadcrumbs from '../components/Breadcrumbs'

function TourHero({ tour }) {
  return (
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
        <Breadcrumbs items={[
          { label: 'Tours', to: '/tours' },
          { label: tour.name },
        ]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded mb-4">
            {tour.destination}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1]">
            {tour.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-400 fill-current" viewBox="0 0 20 20">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{tour.duration}</span>
            </div>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-400 fill-current" viewBox="0 0 20 20">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{tour.difficulty}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function QuickFacts({ tour }) {
  const facts = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Duration', value: tour.duration },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: 'Difficulty', value: tour.difficulty },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: 'Group Size', value: tour.groupSize },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, label: 'Best Time', value: tour.bestTime },
  ]

  return (
    <section className="relative -mt-20 z-10 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-ivory-soft rounded-xl p-6 md:p-8 border border-stone-200/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-charcoal text-white flex items-center justify-center flex-shrink-0">
                  {fact.icon}
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">{fact.label}</p>
                  <p className="text-sm font-semibold text-charcoal">{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TourOverview({ tour }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Visual anchor above heading */}
        <div className="mb-4">
          <div className="w-16 h-12 rounded-lg overflow-hidden">
            <img
              src={tour.gallery?.[0]?.image || tour.image}
              alt="Tour overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-10">Overview</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden aspect-[16/10]">
              <img
                src={tour.gallery?.[1]?.image || tour.image}
                alt={`${tour.name} overview`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-ivory-soft rounded-xl p-8 border border-stone-200/50 lg:-ml-10 lg:mt-10 relative z-10"
            >
              <p className="text-stone-600 leading-relaxed text-base">
                {tour.description}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <p className="text-2xl font-bold text-primary-500">
                  ₹{tour.price.toLocaleString()}
                </p>
                <span className="text-sm text-stone-500">/ person</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TourHighlights({ tour }) {
  return (
    <section className="py-16 md:py-24 bg-ivory-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">Highlights</h2>
          <p className="text-stone-500 max-w-2xl">
            The experiences that make this tour truly special.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {tour.highlights.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-2" />
              <span className="text-stone-600 text-sm leading-relaxed">{h}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TourItinerary({ tour }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">Day-by-Day Itinerary</h2>
          <p className="text-stone-500 max-w-2xl">
            A detailed look at each day of your journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
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
                <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-sm">
                  {String(day.day).padStart(2, '0')}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">{day.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{day.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function InclusionsExclusions({ tour }) {
  return (
    <section className="py-16 md:py-24 bg-ivory-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">What's Included</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-forest-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-forest-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal">Included</h3>
            </div>
            <ul className="space-y-3">
              {tour.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <svg className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal">Not Included</h3>
            </div>
            <ul className="space-y-3">
              {tour.excluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600">
                  <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TourGallery({ tour }) {
  if (!tour.gallery || tour.gallery.length === 0) return null

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">Gallery</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tour.gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative group rounded-xl overflow-hidden ${
                i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
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
  )
}

function TravelInfo({ tour }) {
  if (!tour.travelTips || tour.travelTips.length === 0) return null

  const tipIcons = [
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  ]

  return (
    <section className="py-16 md:py-24 bg-ivory-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">Travel Information</h2>
          <p className="text-stone-500 max-w-2xl">
            Essential tips to help you prepare for your {tour.destination} adventure.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl">
          {tour.travelTips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-charcoal text-white flex items-center justify-center mb-4">
                {tipIcons[i % tipIcons.length]}
              </div>
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{tip.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TourCTA({ tour }) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src={tour.gallery?.[0]?.image || tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto bg-ivory rounded-xl p-10 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">Starting from</p>
            <p className="text-4xl font-bold text-primary-500 mb-1">
              ₹{tour.price.toLocaleString()}
            </p>
            <p className="text-sm text-stone-500 mb-6">per person</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Ready to Book?
            </h2>
            <p className="text-stone-500 mb-8 text-sm leading-relaxed">
              Send us an enquiry and our travel experts will craft the perfect plan for your {tour.destination} adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to={`/booking?tour=${encodeURIComponent(tour.name)}`}
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 text-sm"
              >
                Enquire Now
              </Link>
              <a
                href={generateWhatsAppUrl(`Hi! I'm interested in the ${tour.name} tour. Can you share more details?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-forest-500 text-forest-500 hover:bg-forest-500 hover:text-white font-semibold px-8 py-3.5 rounded transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function RelatedTours({ currentSlug, destinationSlug }) {
  const related = tours
    .filter((t) => t.slug !== currentSlug)
    .sort((a, b) => {
      if (a.destinationSlug === destinationSlug && b.destinationSlug !== destinationSlug) return -1
      if (a.destinationSlug !== destinationSlug && b.destinationSlug === destinationSlug) return 1
      return 0
    })
    .slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-ivory-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">Related Tours</h2>
          <p className="text-stone-500">More journeys you might love.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/tours/${tour.slug}`}
                className="group block bg-white rounded-xl overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-stone-500">{tour.destination}</span>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs text-stone-500">{tour.duration}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal group-hover:text-primary-500 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-sm text-stone-500 mt-1">
                    ₹{tour.price.toLocaleString()} <span className="text-xs">/ person</span>
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
      <div className="py-32 text-center bg-ivory">
        <h1 className="text-3xl font-bold mb-4 text-charcoal">Tour Not Found</h1>
        <p className="text-stone-500 mb-6">The tour you're looking for doesn't exist.</p>
        <Link to="/tours" className="text-primary-500 hover:text-primary-600 underline font-medium">
          Browse all tours
        </Link>
      </div>
    )
  }

  return (
    <div>
      <TourHero tour={tour} />
      <QuickFacts tour={tour} />
      <TourOverview tour={tour} />
      <TourHighlights tour={tour} />
      <TourItinerary tour={tour} />
      <InclusionsExclusions tour={tour} />
      <TourGallery tour={tour} />
      <TravelInfo tour={tour} />
      <TourCTA tour={tour} />
      <RelatedTours currentSlug={slug} destinationSlug={tour.destinationSlug} />
    </div>
  )
}
