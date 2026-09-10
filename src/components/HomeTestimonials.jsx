import { motion } from 'framer-motion';
import { reviews } from '../data/reviews';
import SectionHeading from './SectionHeading';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-primary-400' : 'text-neutral-200'}`}
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function HomeTestimonials() {
  const displayedReviews = reviews.slice(0, 3);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="What Our Travelers Say"
          subtitle="Real experiences from real travelers. Discover why they trust Wanderlust for their journeys."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {displayedReviews.map((review, i) => (
            <motion.div
              key={review.id || i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              className="bg-neutral-50 rounded-2xl p-7 flex flex-col"
            >
              <StarRating rating={review.rating || 5} />

              <div className="relative flex-1">
                <span className="absolute -top-1 -left-1 text-3xl font-serif text-primary-300/60 select-none leading-none">
                  &ldquo;
                </span>
                <p className="text-neutral-600 text-sm italic leading-relaxed pl-4">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-700 flex items-center justify-center text-xs font-semibold shrink-0">
                  {getInitials(review.name)}
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm text-neutral-800 truncate">
                    {review.name}
                  </p>
                  <p className="text-xs text-neutral-400 truncate">{review.tour}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
