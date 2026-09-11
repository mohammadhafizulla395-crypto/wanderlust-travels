import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from '../data/faq'
import { generateWhatsAppUrl } from '../utils/whatsapp'

const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'booking', label: 'Booking' },
  { id: 'payments', label: 'Payments & Pricing' },
  { id: 'tours', label: 'Tours & Packages' },
  { id: 'travel', label: 'Travel Tips' },
]

const categoryMap = {
  0: 'booking',
  1: 'payments',
  2: 'tours',
  3: 'booking',
  4: 'tours',
  5: 'payments',
  6: 'travel',
  7: 'travel',
  8: 'tours',
  9: 'travel',
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => { document.title = 'Frequently Asked Questions | Wanderlust Travels' }, [])

  const filtered = activeCategory === 'all'
    ? faqData
    : faqData.filter((_, i) => categoryMap[i] === activeCategory)

  const toggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }, [])

  const handleKeyDown = useCallback((e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(i)
    }
  }, [toggle])

  return (
    <div>
      {/* Hero — Split */}
      <section className="bg-ivory overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80"
                alt="Travel planning"
                className="w-20 h-20 rounded-xl object-cover mb-6 shadow-sm"
                loading="eager"
              />
              <p className="text-primary-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                Help Center
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
                Common Questions
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
                Find answers to common questions about our tours, bookings, and travel services.
              </p>
            </motion.div>

            {/* Right — Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                  alt="FAQ travel planning"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories + Accordion */}
      <section className="bg-ivory-soft py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setOpenIndex(null) }}
                  className={`flex-shrink-0 px-5 py-2.5 rounded text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filtered.map((faq, i) => {
                  const globalIndex = faqData.indexOf(faq)
                  const isOpen = openIndex === globalIndex
                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="bg-white rounded-xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggle(globalIndex)}
                        onKeyDown={(e) => handleKeyDown(e, globalIndex)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-stone-50/50 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                        <span className={`text-stone-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {i < filtered.length - 1 && (
                        <div className="border-b border-stone-100" />
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-10 h-10 text-stone-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-stone-500 mb-4">No questions found in this category.</p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="text-primary-500 font-medium hover:text-primary-500/80"
                >
                  View all questions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA — Photography + dark overlay + floating ivory panel */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto bg-ivory-soft rounded-xl p-8 md:p-10 border border-stone-200/50 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Still Have Questions?
            </h2>
            <p className="text-stone-500 mb-8">
              Can't find what you're looking for? Our team is happy to help with any questions about your trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-500/90 text-white font-semibold px-8 py-4 rounded transition-colors duration-300"
              >
                Contact Us
              </Link>
              <a
                href={generateWhatsAppUrl('Hello! I have a question about booking a tour with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-600 font-semibold px-8 py-4 rounded hover:bg-stone-50 transition-all duration-300"
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
