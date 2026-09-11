import { motion } from 'framer-motion';
import { reviews } from '../data/reviews';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-primary-500' : 'text-neutral-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function HomeTestimonials() {
  const featured = reviews[0];
  const rest = reviews.slice(1, 4);

  return (
    <section className="bg-primary-50 py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary-500 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-8">
              What Our Travelers Say
            </h2>

            <div className="bg-white rounded-xl p-8 md:p-10">
              <StarRating rating={featured.rating || 5} />
              <span className="text-5xl font-serif text-primary-200 select-none leading-none block mb-4">
                &ldquo;
              </span>
              <p className="text-neutral-600 text-lg italic leading-relaxed mb-6">
                {featured.text}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                <div className="w-11 h-11 rounded-full bg-secondary-500 text-white flex items-center justify-center text-sm font-semibold">
                  {getInitials(featured.name)}
                </div>
                <div>
                  <p className="font-medium text-sm text-neutral-800">{featured.name}</p>
                  <p className="text-xs text-neutral-400">{featured.tour}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            {rest.map((review, i) => (
              <motion.div
                key={review.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6"
              >
                <StarRating rating={review.rating || 5} />
                <p className="text-neutral-600 text-sm italic leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary-500 text-white flex items-center justify-center text-xs font-semibold">
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-neutral-800">{review.name}</p>
                    <p className="text-xs text-neutral-400">{review.tour}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
