import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'
import Breadcrumbs from '../components/Breadcrumbs'

function TourHero({ tour }) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={tour.image}
          alt={`${tour.name} - ${tour.destination}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pb-10 md:pb-14">
        <Breadcrumbs items={[
          { label: 'Tours', to: '/tours' },
          { label: tour.name },
        ]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {tour.destination}
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {tour.category}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            {tour.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80 mb-6">
            <div className="flex items-center gap-1.5">
               <svg className="w-4 h-4 text-primary-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">{tour.rating}</span>
              <span className="text-white/50">({tour.reviewCount} reviews)</span>
            </div>
            <span className="text-white/40">·</span>
            <span>{tour.duration}</span>
            <span className="text-white/40">·</span>
            <span className="text-primary-300 font-semibold text-lg">₹{tour.price.toLocaleString()} <span className="text-sm font-normal text-white/60">/ person</span></span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={`/booking?tour=${encodeURIComponent(tour.name)}`}
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm shadow-lg shadow-primary-600/25"
            >
              Enquire Now
            </Link>
            <Link
              to={`/destinations/${tour.destinationSlug}`}
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm"
            >
              View Destination
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function QuickFacts({ tour }) {
  const facts = [
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Duration', value: tour.duration },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: 'Destination', value: tour.destination },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>, label: 'Tour Type', value: tour.category },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: 'Group Size', value: tour.groupSize },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, label: 'Difficulty', value: tour.difficulty },
    { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>, label: 'Best Time', value: tour.bestTime },
  ]

  return (
    <section className="py-12 md:py-16 border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center p-4 rounded-xl bg-neutral-50"
            >
               <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-2">
                 {fact.icon}
               </div>
              <p className="text-xs text-neutral-400 mb-0.5">{fact.label}</p>
              <p className="text-sm font-semibold text-neutral-800">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TourOverview({ tour }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Overview</h2>
            <p className="text-neutral-600 leading-relaxed text-lg">{tour.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TourHighlights({ tour }) {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Highlights</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            The experiences that make this tour truly special.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {tour.highlights.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 bg-white rounded-xl p-5 border border-neutral-100"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-neutral-700 text-sm leading-relaxed">{h}</span>
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
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Day-by-Day Itinerary</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            A detailed look at each day of your journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-neutral-200" />

            {tour.itinerary.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-4 md:gap-6 pb-8 last:pb-0"
              >
                <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-primary-600/20">
                  {String(day.day).padStart(2, '0')}
                </div>
                <div className="flex-1 bg-white rounded-xl p-5 md:p-6 border border-neutral-100 shadow-sm">
                  <h3 className="font-heading text-lg font-semibold mb-2">{day.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{day.description}</p>
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
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">Included</h3>
            </div>
            <ul className="space-y-3">
              {tour.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <svg className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold">Not Included</h3>
            </div>
            <ul className="space-y-3">
              {tour.excluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600">
                  <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tour.gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative group rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Travel Information</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Essential tips to help you prepare for your {tour.destination} adventure.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {tour.travelTips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-neutral-100"
            >
              <h3 className="font-heading font-semibold text-lg mb-2">{tip.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TourCTA({ tour }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Book This Tour?
          </h2>
          <p className="text-primary-100 max-w-xl mx-auto mb-8">
            Send us an enquiry and our travel experts will craft the perfect plan for your {tour.destination} adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/booking?tour=${encodeURIComponent(tour.name)}`}
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-primary-600/25"
            >
              Enquire Now
            </Link>
            <Link
              to={`/destinations/${tour.destinationSlug}`}
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              View Destination
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Related Tours</h2>
          <p className="text-neutral-500">More journeys you might love.</p>
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
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      ₹{tour.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-neutral-400">{tour.destination}</span>
                    <span className="text-neutral-300">·</span>
                    <span className="text-xs text-neutral-400">{tour.duration}</span>
                  </div>
                  <h3 className="font-heading font-semibold group-hover:text-primary-600 transition-colors">
                    {tour.name}
                  </h3>
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
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
        <p className="text-neutral-500 mb-6">The tour you're looking for doesn't exist.</p>
        <Link to="/tours" className="text-primary-600 hover:underline font-medium">
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
