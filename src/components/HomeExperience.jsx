import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeExperience = () => {
  return (
    <section className="bg-neutral-900 py-20 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
              alt="Road trip travel adventure"
              className="rounded-xl aspect-[4/5] object-cover w-full"
            />
            <div className="absolute bottom-6 right-6 bg-secondary-500 text-white rounded-xl p-6 max-w-[200px]">
              <p className="font-heading text-3xl font-bold leading-tight">
                8+
              </p>
              <p className="text-sm mt-1 text-white/80">
                Years of crafting unforgettable journeys
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="text-secondary-400 uppercase tracking-[0.2em] text-sm font-medium">
              Travel Differently
            </span>

            <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl leading-tight mt-3 mb-6">
              More Than a Trip. A Story You'll Remember.
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              We don't believe in cookie-cutter vacations. Every itinerary we
              craft is shaped around your curiosity, your pace, and the moments
              that matter most to you — from hidden alleyway cafés to
              sun-drenched coastlines you won't find on a postcard.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed">
              With over eight years of handpicked experiences and local
              partnerships, we turn the ordinary into something you'll still be
              talking about decades from now.
            </p>

            <div className="pt-8">
              <Link
                to="/about"
                className="inline-block bg-white text-neutral-900 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-300"
              >
                Discover Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeExperience;
