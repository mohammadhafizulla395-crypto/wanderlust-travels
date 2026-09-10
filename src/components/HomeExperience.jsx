import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeExperience = () => {
  return (
    <section className="bg-neutral-900 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
              alt="Road trip travel adventure"
              className="rounded-2xl aspect-[4/5] object-cover w-full"
            />
            <div className="absolute bottom-6 right-6 bg-secondary-700 text-white rounded-2xl p-6 max-w-[220px]">
              <p className="font-heading text-2xl font-bold leading-tight">
                8+
              </p>
              <p className="text-sm mt-1 text-secondary-100">
                Years of crafting unforgettable journeys
              </p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-6"
          >
            <span className="text-secondary-400 uppercase tracking-[0.2em] text-sm font-medium">
              Travel Differently
            </span>

            <h2 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              More Than a Trip. A Story You'll Remember.
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed">
              We don't believe in cookie-cutter vacations. Every itinerary we
              craft is shaped around your curiosity, your pace, and the moments
              that matter most to you — from hidden alleyway cafés to
              sun-drenched coastlines you won't find on a postcard.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed">
              With over eight years of handpicked experiences and local
              partnerships across six continents, we turn the ordinary into
              something you'll still be talking about decades from now.
            </p>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-block bg-white text-neutral-900 font-semibold px-8 py-4 rounded-full hover:bg-primary-50 transition-colors duration-300"
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
