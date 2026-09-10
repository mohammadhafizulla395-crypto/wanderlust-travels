import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { destinations } from '../data/destinations'
import { tours } from '../data/tours'
import Breadcrumbs from '../components/Breadcrumbs'

function DestinationHero({ destination }) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={destination.image}
          alt={`${destination.name} - ${destination.tagline}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-neutral-900/20 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pb-10 md:pb-14">
        <Breadcrumbs
          items={[
            { label: 'Destinations', to: '/destinations' },
            { label: destination.name },
          ]}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-primary-400 font-semibold text-sm tracking-[0.2em] uppercase mb-2">
            {destination.tagline}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            {destination.name}
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-6">{destination.state}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={`/tours?destination=${encodeURIComponent(destination.name)}`}
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm shadow-lg shadow-primary-500/25"
            >
              Explore Tours
            </Link>
            <Link
              to={`/booking?destination=${encodeURIComponent(destination.name)}`}
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 text-sm"
            >
              Plan Trip
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function DestinationAbout({ destination }) {
  const descLines = destination.description?.split('\n').slice(0, 2).join(' ')

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={destination.gallery?.[0]?.image || destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-6 shadow-lg max-w-xs">
              <h3 className="font-heading text-lg font-bold mb-2">About {destination.name}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{descLines}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Discover {destination.name}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-lg">
              {destination.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DestinationHighlights({ destination }) {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Highlights
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {destination.highlights.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <svg
                className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-neutral-700 leading-relaxed">{h}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BestTimeToVisit({ destination }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-6 h-6 text-secondary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <h3 className="font-heading text-2xl font-bold">Best Time to Visit</h3>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              {destination.bestTimeToVisit}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DestinationTours({ destination, relatedTours }) {
  if (relatedTours.length === 0) return null

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Popular Tours in {destination.name}
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Carefully curated experiences to help you explore the best of{' '}
            {destination.name}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {relatedTours.map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                to={`/tours/${tour.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full">
                      ₹{tour.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-neutral-400">{tour.duration}</span>
                    <span className="text-neutral-300">·</span>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-3.5 h-3.5 text-primary-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-medium text-neutral-600">
                        {tour.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                    {tour.shortDescription}
                  </p>
                  <div className="flex gap-2">
                    <span className="flex-1 text-center bg-primary-600 text-white font-medium text-sm py-2.5 rounded-full">
                      View Details
                    </span>
                    <Link
                      to={`/booking?tour=${encodeURIComponent(tour.name)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 text-center border border-primary-200 text-primary-700 font-medium text-sm py-2.5 rounded-full hover:bg-primary-50 transition-colors"
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

function DestinationGallery({ destination }) {
  if (!destination.gallery || destination.gallery.length === 0) return null

  return (
    <section className="py-20 md:py-28 bg-white">
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
          {destination.gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative group rounded-xl overflow-hidden ${
                i === 0 ? 'row-span-2 aspect-[1/2]' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-medium">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TravelTips({ destination }) {
  if (!destination.travelTips || destination.travelTips.length === 0) return null

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Travel Tips</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Essential information to help you prepare for your trip to {destination.name}.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {destination.travelTips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6"
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

function DestinationCTA({ destination }) {
  return (
    <section className="relative py-20 md:py-28 bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={destination.image}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-neutral-900/60" />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8">
            Let us help you plan the perfect trip to {destination.name}. Get in touch
            and we'll create a personalized itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/tours?destination=${encodeURIComponent(destination.name)}`}
              className="inline-flex items-center justify-center bg-primary-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              View Tours
            </Link>
            <Link
              to={`/booking?destination=${encodeURIComponent(destination.name)}`}
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Plan Your Trip
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function RelatedDestinations({ currentSlug }) {
  const related = destinations.filter((d) => d.slug !== currentSlug).slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Related Destinations
          </h2>
          <p className="text-neutral-500">You might also love exploring these places.</p>
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
                className="group block rounded-2xl overflow-hidden relative aspect-[4/3]"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-heading text-lg font-bold text-white">{dest.name}</h3>
                  <p className="text-white/70 text-xs">{dest.state}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
        <p className="text-neutral-500 mb-6">
          The destination you're looking for doesn't exist.
        </p>
        <Link
          to="/destinations"
          className="text-primary-600 hover:underline font-medium"
        >
          Browse all destinations
        </Link>
      </div>
    )
  }

  const relatedTours = tours.filter((t) => t.destinationSlug === slug)

  return (
    <div>
      <DestinationHero destination={destination} />
      <DestinationAbout destination={destination} />
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
