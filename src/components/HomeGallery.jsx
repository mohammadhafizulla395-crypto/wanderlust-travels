import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { galleryItems } from '../data/gallery'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function HomeGallery() {
  const visibleItems = galleryItems.slice(0, 6)

  return (
    <section className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-primary-500 text-xs tracking-[0.3em] uppercase font-medium">
            Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mt-3 leading-[1.15]">
            Captured
            <br />
            Moments
          </h2>
        </div>

        <motion.div
          className="hidden md:grid grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {visibleItems.map((item, i) => {
            const isTall = i === 0 || i === 3
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                  isTall ? 'col-span-4 aspect-[3/4]' : 'col-span-4 aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="grid md:hidden grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {visibleItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  <h3 className="text-white text-sm font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors duration-300"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
