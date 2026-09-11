import { motion } from 'framer-motion'
import { reviews } from '../data/reviews'

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? 'text-terracotta' : 'text-neutral-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function HomeTestimonials() {
  const featured = reviews[0]
  const rest = reviews.slice(1, 4)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">
              What Our Travelers Say
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-ivory rounded-xl p-7"
            >
              <StarRating rating={featured.rating} />
              <div className="text-5xl font-serif text-terracotta/30 leading-none mt-4 mb-2">&ldquo;</div>
              <p className="text-charcoal text-[15px] italic leading-relaxed mb-5">
                {featured.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center text-xs font-bold">
                  {getInitials(featured.name)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-charcoal">{featured.name}</p>
                  <p className="text-xs text-neutral-500">{featured.tour}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {rest.map((review, i) => (
              <motion.div
                key={review.id || i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-ivory rounded-xl p-5"
              >
                <StarRating rating={review.rating} />
                <p className="text-neutral-600 text-sm leading-relaxed mt-3 mb-4 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-neutral-200">
                  <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-[10px] font-bold">
                    {getInitials(review.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-xs text-charcoal truncate">{review.name}</p>
                    <p className="text-[10px] text-neutral-400 truncate">{review.tour}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
