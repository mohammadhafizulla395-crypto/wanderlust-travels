import { motion } from 'framer-motion'
import { galleryItems } from '../data/gallery'

export default function HomeGallery() {
  const items = galleryItems.slice(0, 8)

  const getSpan = (i) => {
    if (i === 0) return 'col-span-12 md:col-span-5 row-span-2'
    if (i === 1) return 'col-span-6 md:col-span-4'
    if (i === 2) return 'col-span-6 md:col-span-3'
    if (i === 3) return 'col-span-6 md:col-span-4'
    if (i === 4) return 'col-span-6 md:col-span-3'
    if (i === 5) return 'col-span-6 md:col-span-4'
    if (i === 6) return 'col-span-6 md:col-span-3'
    return 'col-span-12 md:col-span-4'
  }

  const getAspect = (i) => {
    if (i === 0) return 'aspect-[3/4]'
    if (i === 1) return 'aspect-[4/3]'
    if (i === 3) return 'aspect-[3/2]'
    return 'aspect-square'
  }

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-14">
          <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Gallery</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-tight">
            Visual Journey
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`${getSpan(i)} group relative rounded-xl overflow-hidden cursor-pointer`}
            >
              <div className={`${getAspect(i)} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
