import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
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
    tour: presetTour,
    date: '',
    travelers: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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
              Get Started
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Book Your Trip</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Fill in the details below and we'll connect with you on WhatsApp to finalize your booking.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <div className="bg-secondary-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold mb-3">Enquiry Submitted!</h2>
              <p className="text-neutral-500 mb-6">
                We've opened WhatsApp with your enquiry details. Please send the message to confirm your booking enquiry.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-neutral-100">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Select Tour *</label>
                <select
                  name="tour"
                  required
                  value={form.tour}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white"
                >
                  <option value="">Choose a tour</option>
                  {tours.map((t) => (
                    <option key={t.slug} value={t.name}>{t.name} — ₹{t.price.toLocaleString()}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Travel Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Number of Travelers *</label>
                  <select
                    name="travelers"
                    required
                    value={form.travelers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white"
                  >
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Traveler' : 'Travelers'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Additional Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-full transition-colors duration-300 text-lg"
              >
                Send Enquiry via WhatsApp
              </button>

              <p className="text-center text-xs text-neutral-400">
                Your enquiry will be sent to our travel team via WhatsApp. We typically respond within 30 minutes.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
