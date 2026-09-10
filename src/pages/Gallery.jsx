import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { galleryItems } from '../data/gallery'
import { generateWhatsAppUrl } from '../utils/whatsapp'

const categories = ['All', ...new Set(galleryItems.map((item) => item.category))]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => { document.title = 'Gallery | Wanderlust Travels' }, [])

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (item) => {
    setLightbox(item)
    setLightboxIndex(filtered.findIndex((g) => g.id === item.id))
  }

  const navigateLightbox = useCallback((direction) => {
    const newIndex = direction === 'next'
      ? (lightboxIndex + 1) % filtered.length
      : (lightboxIndex - 1 + filtered.length) % filtered.length
    setLightboxIndex(newIndex)
    setLightbox(filtered[newIndex])
  }, [lightboxIndex, filtered])

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') navigateLightbox('next')
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightbox, navigateLightbox])

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-neutral-300 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
              Visual Journey
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Gallery
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              A visual journey through India's most breathtaking landscapes and experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => openLightbox(item)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-white/60 text-xs">{item.category}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-6 text-sm text-neutral-400"
          >
            Showing {filtered.length} of {galleryItems.length} photos
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('prev') }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox('next') }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.div
              key={lightbox.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-neutral-900">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-heading text-xl font-semibold text-white mb-1">{lightbox.title}</h3>
                <p className="text-neutral-400 text-sm">{lightbox.category} · {lightboxIndex + 1} of {filtered.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Want to Capture Your Own Moments?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Let us plan a trip that gives you photos and memories worth cherishing forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center bg-primary-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-700 transition-colors duration-300"
              >
                Browse Tours
              </Link>
              <a
                href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
