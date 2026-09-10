import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { galleryItems } from '../data/gallery';
import SectionHeading from './SectionHeading';

const HomeGallery = () => {
  const visibleItems = galleryItems.slice(0, 6);

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Captured Moments"
          subtitle="A glimpse into the incredible experiences waiting for you across India."
        />

        <div className="hidden md:grid grid-cols-3 gap-4">
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0 * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[3/4]"
            >
              <img
                src={visibleItems[0].image}
                alt={visibleItems[0].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm font-medium">{visibleItems[0].category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{visibleItems[0].title}</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3 * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
            >
              <img
                src={visibleItems[3].image}
                alt={visibleItems[3].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm font-medium">{visibleItems[3].category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{visibleItems[3].title}</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
            >
              <img
                src={visibleItems[1].image}
                alt={visibleItems[1].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm font-medium">{visibleItems[1].category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{visibleItems[1].title}</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 4 * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[3/4]"
            >
              <img
                src={visibleItems[4].image}
                alt={visibleItems[4].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm font-medium">{visibleItems[4].category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{visibleItems[4].title}</h3>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
            >
              <img
                src={visibleItems[2].image}
                alt={visibleItems[2].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm font-medium">{visibleItems[2].category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{visibleItems[2].title}</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 5 * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
            >
              <img
                src={visibleItems[5].image}
                alt={visibleItems[5].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-sm font-medium">{visibleItems[5].category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{visibleItems[5].title}</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid md:hidden grid-cols-2 gap-4">
          {visibleItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                i % 3 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white/80 text-xs font-medium">{item.category}</span>
                  <h3 className="text-white text-base font-bold mt-0.5">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View Full Gallery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
