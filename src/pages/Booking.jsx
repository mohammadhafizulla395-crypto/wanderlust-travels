import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { tours } from '../data/tours'
import { generateWhatsAppUrl } from '../utils/whatsapp'

export default function Booking() {
  const [searchParams] = useSearchParams()
  const presetTour = searchParams.get('tour') || ''

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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

  const destinations = [...new Set(tours.map((t) => t.destination))]

  return (
    <div>
      {/* Hero — Split */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-stone-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                Booking
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Plan Your<br />Journey
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Fill in the details below and we'll connect with you on WhatsApp to finalize your booking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                  alt="Plan your journey"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form — Floating Panel */}
      <section className="bg-ivory-soft py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {submitted ? (
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
              <div className="w-16 h-16 rounded-full bg-forest-500 text-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">Enquiry Submitted!</h2>
              <p className="text-stone-500 mb-6">
                We've opened WhatsApp with your enquiry details. Please send the message to confirm your booking enquiry.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary-500 font-medium hover:text-primary-600"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <div className="relative">
              {/* Background image with blur + dark overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />
              </div>

              {/* Floating panel */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
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
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
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
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
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
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Destination</label>
                      <select
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white"
                      >
                        <option value="">Select destination</option>
                        {destinations.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Tour Package *</label>
                    <select
                      name="tour"
                      required
                      value={form.tour}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white"
                    >
                      <option value="">Choose a tour</option>
                      {tours.map((t) => (
                        <option key={t.slug} value={t.name}>{t.name} — Rs {t.price.toLocaleString()}</option>
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
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Group Size *</label>
                      <select
                        name="travelers"
                        required
                        value={form.travelers}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white"
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Person' : 'People'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300 text-lg"
                  >
                    Send Enquiry via WhatsApp
                  </button>
                </form>

                {/* WhatsApp quick link */}
                <div className="mt-6 pt-6 border-t border-stone-200 text-center">
                  <p className="text-sm text-stone-500 mb-3">Prefer to message directly?</p>
                  <a
                    href={generateWhatsAppUrl('Hello! I would like to enquire about a tour package with Wanderlust Travels.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
