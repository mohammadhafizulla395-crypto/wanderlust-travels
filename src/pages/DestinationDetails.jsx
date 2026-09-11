import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'
import { tours } from '../data/tours'
import { generateWhatsAppUrl } from '../utils/whatsapp'
import Breadcrumbs from '../components/Breadcrumbs'

/* ─── HERO — Cinematic ─── */
function DestinationHero({ destination }) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={destination.image}
          alt={`${destination.name} — ${destination.tagline}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pb-12 md:pb-16">
        <Breadcrumbs items={[
          { label: 'Destinations', to: '/destinations' },
          { label: destination.name },
        ]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-primary-500 text-white text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-lg mb-4">
            {destination.category}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-[1.05]">
            {destination.name}
          </h1>
          <p className="text-white/60 text-lg max-w-md">{destination.tagline}</p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── FLOATING SUMMARY PANEL ─── */
function FloatingSummary({ destination }) {
  const meta = [
    { label: 'State', value: destination.state, icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )},
    { label: 'Category', value: destination.category, icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    )},
    { label: 'Tours Available', value: `${destination.tourCount} tours`, icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )},
    { label: 'Best Time', value: destination.bestTimeToVisit.split('.')[0], icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )},
  ]

  return (
    <div className="-mt-20 relative z-10 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-ivory-soft rounded-xl p-6 md:p-8 border border-stone-200/50"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {meta.map((item) => (
            <div key={item.label}>
              <div className="flex items-center gap-2 text-stone-500 mb-1.5">
                <span className="text-primary-500">{item.icon}</span>
                <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
              </div>
              <p className="font-heading font-semibold text-charcoal text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-stone-200/50">
          <Link
            to={`/tours?destination=${encodeURIComponent(destination.name)}`}
            className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Explore Tours
          </Link>
          <Link
            to={`/booking?destination=${encodeURIComponent(destination.name)}`}
            className="inline-flex items-center justify-center border border-stone-300 hover:border-charcoal text-charcoal font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-sm"
          >
            Plan Your Trip
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

/* ─── STORY — Editorial with Visual Anchor ─── */
function DestinationStory({ destination }) {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4">
        {/* Visual Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <img
            src={destination.gallery?.[0]?.image || destination.image}
            alt=""
            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
          />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
            The Story of {destination.name}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Large image — 7/12 */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={destination.gallery?.[0]?.image || destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Floating text panel — 5/12 */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-xl p-6 md:p-8 border border-stone-200/50 md:sticky md:top-24">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">About</h3>
              <p className="text-stone-600 leading-relaxed text-[15px]">
                {destination.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── HIGHLIGHTS ─── */
function DestinationHighlights({ destination }) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
            Highlights
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-4">
          {destination.highlights.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 border border-stone-100"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
              <span className="text-stone-700 text-[15px] leading-relaxed">{h}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── BEST TIME ─── */
function BestTimeToVisit({ destination }) {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-ivory-soft rounded-xl p-8 md:p-10 border border-stone-200/50"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-charcoal">Best Time to Visit</h3>
            </div>
            <p className="text-stone-600 leading-relaxed">{destination.bestTimeToVisit}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── POPULAR TOURS ─── */
function DestinationTours({ destination, relatedTours }) {
  if (relatedTours.length === 0) return null

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Popular Tours in {destination.name}
          </h2>
          <p className="text-stone-500 max-w-2xl">
            Carefully curated experiences to help you explore the best of {destination.name}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedTours.slice(0, 3).map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/tours/${tour.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-lg transition-all duration-500 h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-charcoal text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                      ₹{tour.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-stone-500">{tour.duration}</span>
                    <span className="text-stone-300">·</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-primary-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-medium text-stone-600">{tour.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-primary-500 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-stone-500 text-sm line-clamp-2 mb-4">
                    {tour.shortDescription}
                  </p>
                  <div className="flex gap-2">
                    <span className="flex-1 text-center bg-primary-500 text-white font-medium text-sm py-2.5 rounded-lg">
                      View Details
                    </span>
                    <Link
                      to={`/booking?tour=${encodeURIComponent(tour.name)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center border border-stone-200 text-stone-700 font-medium text-sm py-2.5 rounded-lg hover:bg-stone-50 transition-colors"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── GALLERY — Masonry ─── */
function DestinationGallery({ destination }) {
  if (!destination.gallery || destination.gallery.length === 0) return null

  const heights = ['aspect-[3/4]', 'aspect-square', 'aspect-[4/3]', 'aspect-[3/4]']

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
            Gallery
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {destination.gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative group rounded-xl overflow-hidden ${heights[i % heights.length]}`}
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

/* ─── TRAVEL TIPS ─── */
function TravelTips({ destination }) {
  if (!destination.travelTips || destination.travelTips.length === 0) return null

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Travel Tips
          </h2>
          <p className="text-stone-500 max-w-2xl">
            Essential information to help you prepare for your trip to {destination.name}.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
          {destination.travelTips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-stone-100"
            >
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">{tip.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{tip.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA — Full-bleed photo + floating panel ─── */
function DestinationCTA({ destination }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={destination.gallery?.[0]?.image || destination.image}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto px-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-ivory rounded-xl p-8 md:p-12 text-center max-w-xl w-full"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Ready to Explore {destination.name}?
            </h2>
            <p className="text-stone-500 mb-8 leading-relaxed">
              Let us help you plan the perfect trip. Get in touch and we'll create a personalized itinerary just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={generateWhatsAppUrl(`Hi! I'm interested in tours to ${destination.name}. Can you share more details?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                to={`/tours?destination=${encodeURIComponent(destination.name)}`}
                className="inline-flex items-center justify-center border border-stone-300 hover:border-charcoal text-charcoal font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 text-sm"
              >
                View Tours
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── RELATED DESTINATIONS ─── */
function RelatedDestinations({ currentSlug }) {
  const related = destinations.filter((d) => d.slug !== currentSlug).slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Related Destinations
          </h2>
          <p className="text-stone-500">You might also love exploring these places.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((dest, i) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/destinations/${dest.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-heading text-lg font-bold text-white">{dest.name}</h3>
                    <p className="text-white/70 text-xs">{dest.tagline}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── MAIN ─── */
export default function DestinationDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const destination = destinations.find((d) => d.slug === slug)

  useEffect(() => {
    if (destination) {
      document.title = `${destination.name} Travel Packages & Tours | Wanderlust Travels`
    }
  }, [destination])

  if (!destination) {
    return (
      <div className="py-32 text-center bg-ivory">
        <h1 className="text-3xl font-bold mb-4 text-charcoal">Destination Not Found</h1>
        <p className="text-stone-500 mb-6">The destination you're looking for doesn't exist.</p>
        <Link to="/destinations" className="text-primary-500 hover:text-primary-600 font-medium">
          Browse all destinations
        </Link>
      </div>
    )
  }

  const relatedTours = tours.filter((t) => t.destinationSlug === slug)

  return (
    <div>
      <DestinationHero destination={destination} />
      <FloatingSummary destination={destination} />
      <DestinationStory destination={destination} />
      <DestinationHighlights destination={destination} />
      <BestTimeToVisit destination={destination} />
      <DestinationTours destination={destination} relatedTours={relatedTours} />
      <DestinationGallery destination={destination} />
      <TravelTips destination={destination} />
      <DestinationCTA destination={destination} />
      <RelatedDestinations currentSlug={slug} />
    </div>
  )
}
