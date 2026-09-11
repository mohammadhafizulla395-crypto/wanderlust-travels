import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateWhatsAppUrl } from '../utils/whatsapp';

const categories = ['All', 'Asia', 'Africa', 'Europe', 'Oceania', 'Americas'];

const galleryItems = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt: 'Mountain landscape', category: 'Asia', caption: 'Dolomites, Italy' },
  { id: 2, src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', alt: 'Beach sunset', category: 'Oceania', caption: 'Maldives' },
  { id: 3, src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', alt: 'Desert road', category: 'Africa', caption: 'Sahara Crossing' },
  { id: 4, src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80', alt: 'Lake and mountains', category: 'Europe', caption: 'Swiss Alps' },
  { id: 5, src: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80', alt: 'Tropical temple', category: 'Asia', caption: 'Bali, Indonesia' },
  { id: 6, src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80', alt: 'Coastal village', category: 'Europe', caption: 'Amalfi Coast' },
  { id: 7, src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80', alt: 'Snowy peaks', category: 'Americas', caption: 'Patagonia' },
  { id: 8, src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', alt: 'City lights', category: 'Europe', caption: 'Paris at Dusk' },
  { id: 9, src: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80', alt: 'Ancient ruins', category: 'Africa', caption: 'Luxor, Egypt' },
  { id: 10, src: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', alt: 'Overwater bungalow', category: 'Oceania', caption: 'Fiji Islands' },
  { id: 11, src: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80', alt: 'Thai longtail', category: 'Asia', caption: 'Phi Phi Islands' },
  { id: 12, src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80', alt: 'Desert skyline', category: 'Asia', caption: 'Dubai Skyline' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex(prev => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToNext, goToPrev]);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-ivory min-h-screen">
      {/* HERO — Split */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Gallery</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Visual Journey</h1>
              <p className="font-body text-stone-500 leading-relaxed max-w-lg">
                A curated collection of moments captured across the world's most extraordinary destinations. Each image tells a story of discovery and wonder.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                alt="Gallery hero"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-charcoal text-white'
                    : 'bg-ivory-soft text-stone-500 border border-stone-200/50 hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID — Asymmetric Masonry */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            {filteredItems.map((item, i) => {
              const spanClass = i % 5 === 0 || i % 5 === 3 ? 'col-span-12 sm:col-span-6 lg:col-span-5' : 'col-span-12 sm:col-span-6 lg:col-span-4';
              const aspectClass = i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                  className={`${spanClass} group cursor-pointer overflow-hidden rounded-xl relative`}
                  onClick={() => openLightbox(i)}
                >
                  <div className={`relative overflow-hidden ${aspectClass}`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-end p-6">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                        <p className="font-heading text-white text-lg">{item.caption}</p>
                        <p className="font-body text-white/70 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="max-w-5xl max-h-[80vh] px-16" onClick={e => e.stopPropagation()}>
              <img
                src={filteredItems[currentImageIndex]?.src}
                alt={filteredItems[currentImageIndex]?.alt}
                className="max-w-full max-h-[75vh] object-contain mx-auto"
              />
              <div className="text-center mt-4">
                <p className="font-heading text-white text-lg">{filteredItems[currentImageIndex]?.caption}</p>
                <p className="font-body text-white/50 text-sm">{currentImageIndex + 1} / {filteredItems.length}</p>
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
            alt="Begin your journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-ivory-soft rounded-xl p-8 md:p-12 text-center border border-stone-200/50"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Create Your Story</p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Ready for Your Next Visual Chapter?
            </h2>
            <p className="font-body text-stone-500 leading-relaxed mb-8 max-w-lg mx-auto">
              Let us design a journey filled with moments worth capturing. Your story begins with a conversation.
            </p>
            <a
              href={generateWhatsAppUrl("Hello! I've been browsing your gallery and would love to plan a journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 text-white font-body text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              Start Planning
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
