import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { galleryItems } from '../data/gallery'

export default function HomeGallery() {
  const items = galleryItems.slice(0, 7)

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <p className="text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2">Gallery</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Destination Mosaic</h2>
          </div>
          <Link
            to="/gallery"
            className="text-forest hover:text-forest-deep font-semibold text-sm inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="hidden md:grid grid-cols-12 grid-rows-[auto_auto] gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-5 row-span-2 relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img src={items[0].image} alt={items[0].title} className="w-full h-full min-h-[340px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <div><span className="text-white/70 text-xs font-medium">{items[0].category}</span><h3 className="text-white text-lg font-bold">{items[0].title}</h3></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="col-span-4 relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img src={items[1].image} alt={items[1].title} className="w-full h-[165px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div><span className="text-white/70 text-xs font-medium">{items[1].category}</span><h3 className="text-white text-base font-bold">{items[1].title}</h3></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-3 relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img src={items[2].image} alt={items[2].title} className="w-full h-[165px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div><span className="text-white/70 text-xs font-medium">{items[2].category}</span><h3 className="text-white text-base font-bold">{items[2].title}</h3></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-4 relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img src={items[3].image} alt={items[3].title} className="w-full h-[165px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div><span className="text-white/70 text-xs font-medium">{items[3].category}</span><h3 className="text-white text-base font-bold">{items[3].title}</h3></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-3 relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img src={items[4].image} alt={items[4].title} className="w-full h-[165px] object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div><span className="text-white/70 text-xs font-medium">{items[4].category}</span><h3 className="text-white text-base font-bold">{items[4].title}</h3></div>
            </div>
          </motion.div>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-3">
          {items.slice(0, 6).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <div><span className="text-white/70 text-[10px] font-medium">{item.category}</span><h3 className="text-white text-sm font-bold">{item.title}</h3></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
