import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { galleryItems } from '../data/gallery';

const HomeGallery = () => {
  const visibleItems = galleryItems.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-primary-50">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 md:mb-16 gap-4">
          <div className="max-w-lg">
            <p className="text-secondary-500 font-semibold text-sm tracking-[0.15em] uppercase mb-3">
              Gallery
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight">
              Captured Moments
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-secondary-500 hover:text-secondary-600 font-semibold text-sm inline-flex items-center gap-2 transition-colors"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-4">
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.5, delay: 0.1 }}
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
              transition={{ duration: 0.5, delay: 0.05 }}
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
              transition={{ duration: 0.5, delay: 0.15 }}
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
              transition={{ duration: 0.5, delay: 0.08 }}
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
              transition={{ duration: 0.5, delay: 0.18 }}
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
              transition={{ duration: 0.5, delay: i * 0.06 }}
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
      </div>
    </section>
  );
};

export default HomeGallery;
