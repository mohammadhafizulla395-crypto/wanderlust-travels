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
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-600 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                Help Center
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Common<br />Questions
              </h1>
              <p className="text-neutral-500 text-lg leading-relaxed max-w-lg">
                Find answers to common questions about our tours, bookings, and travel services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                alt="FAQ"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
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
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-0"
              >
                {filtered.map((faq, i) => {
                  const globalIndex = faqData.indexOf(faq)
                  const isOpen = openIndex === globalIndex
                  return (
                    <div
                      key={globalIndex}
                      className="border-b border-neutral-100 last:border-b-0"
                    >
                      <button
                        onClick={() => toggle(globalIndex)}
                        onKeyDown={(e) => handleKeyDown(e, globalIndex)}
                        className="w-full text-left py-5 flex items-center justify-between cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-neutral-900 pr-4">{faq.question}</span>
                        <span className={`text-neutral-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
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
                            <div className="pb-5 text-neutral-500 text-sm leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-neutral-500 mb-4">No questions found in this category.</p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="text-primary-600 font-medium hover:text-primary-700"
                >
                  View all questions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-neutral-900/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-neutral-300 max-w-xl mx-auto mb-8">
              Can't find what you're looking for? Our team is happy to help with any questions about your trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-neutral-900 font-semibold px-8 py-4 rounded-lg hover:bg-neutral-100 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <a
                href={generateWhatsAppUrl('Hello! I have a question about booking a tour with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
