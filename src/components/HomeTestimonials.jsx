import { motion } from 'framer-motion'
import { reviews } from '../data/reviews'
import SectionHeading from './SectionHeading'

export default function HomeTestimonials() {
  const featured = reviews.slice(0, 3)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Travelers Say"
          subtitle="Real experiences from real travelers. Discover why they trust Wanderlust for their journeys."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className={`w-4 h-4 ${j < review.rating ? 'text-primary-400' : 'text-neutral-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm flex-shrink-0">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium text-sm text-neutral-800">{review.name}</div>
                  <div className="text-xs text-neutral-400">{review.tour}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
