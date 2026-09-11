import { motion } from 'framer-motion'
import { reviews } from '../data/reviews'

export default function HomeTestimonials() {
  const featured = reviews[0]

  return (
    <section className="py-20 md:py-28 bg-ivory-soft">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-tight mb-12">
            What Our Travelers Say
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary-200 text-[80px] md:text-[100px] font-heading leading-none select-none mb-4">&ldquo;</div>
            <blockquote className="font-heading text-xl md:text-2xl lg:text-[1.65rem] text-charcoal italic leading-relaxed mb-8">
              {featured.text}
            </blockquote>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-charcoal font-bold text-sm">
                {featured.name.charAt(0)}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-charcoal">{featured.name}</div>
                <div className="text-[12px] text-stone-400">{featured.tour} &middot; {featured.destination}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
