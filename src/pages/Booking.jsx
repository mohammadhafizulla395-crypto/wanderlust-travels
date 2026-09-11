import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'
import { generateWhatsAppUrl } from '../utils/whatsapp'

export default function Booking() {
  const [searchParams] = useSearchParams()
  const presetTour = searchParams.get('tour') || ''

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    tour: presetTour,
    date: '',
    travelers: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { document.title = 'Book Your Trip | Wanderlust Travels' }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dateDisplay = form.date
      ? new Date(form.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
      : 'Flexible'

    const msg = `Hello, I am interested in booking the following tour.

Tour: ${form.tour}
Destination: ${form.destination || 'Not specified'}
Travel Date: ${dateDisplay}
Travelers: ${form.travelers}
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Additional Message:
${form.message || 'No additional message.'}

Please share the availability and details.`

    window.open(generateWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero — Split */}
      <section className="bg-ivory overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80"
                alt="Plan your journey"
                className="w-20 h-20 rounded-xl object-cover mb-6 shadow-sm"
                loading="eager"
              />
              <p className="text-primary-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                Get Started
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
                Plan Your Journey
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
                Fill in the details below and we'll connect with you on WhatsApp to finalize your booking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                  alt="Road trip adventure"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form — Floating panel with background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-ivory-soft/95 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10 max-w-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-ivory-soft rounded-xl p-8 md:p-12 text-center border border-stone-200/50 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">Enquiry Submitted!</h2>
              <p className="text-stone-500 mb-6 text-sm">
                We've opened WhatsApp with your enquiry details. Please send the message to confirm your booking enquiry.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary-500 font-medium hover:text-primary-500/80 text-sm"
              >
                Submit another enquiry
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-ivory-soft/95 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-stone-200/50 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Destination</label>
                    <input
                      type="text"
                      name="destination"
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      placeholder="e.g. Kerala, Rajasthan..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Select Tour *</label>
                  <select
                    name="tour"
                    required
                    value={form.tour}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  >
                    <option value="">Choose a tour</option>
                    {tours.map((t) => (
                      <option key={t.slug} value={t.name}>{t.name} — {t.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Travel Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Group Size *</label>
                    <select
                      name="travelers"
                      required
                      value={form.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    >
                      {[...Array(20)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Traveler' : 'Travelers'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1">Additional Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-500/90 text-white font-semibold py-4 rounded transition-colors duration-300 text-lg"
                >
                  Send Enquiry via WhatsApp
                </button>

                <p className="text-center text-xs text-stone-400">
                  Your enquiry will be sent to our travel team via WhatsApp. We typically respond within 30 minutes.
                </p>
              </form>
            </motion.div>
          )}
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
              Have Questions Before Booking?
            </h2>
            <p className="text-stone-500 mb-8">
              Our travel experts are ready to help you plan the perfect trip. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center bg-primary-500 text-white font-semibold px-8 py-4 rounded hover:bg-primary-500/90 transition-colors duration-300"
              >
                View FAQ
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-stone-300 text-stone-600 font-semibold px-8 py-4 rounded hover:bg-stone-50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
