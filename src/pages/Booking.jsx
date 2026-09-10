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
    phone: '',
    email: '',
    destination: '',
    tour: presetTour,
    date: '',
    travelers: '1',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { document.title = 'Booking Enquiry | Wanderlust Travels' }, [])

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
Preferred Destination: ${form.destination || 'No preference'}

Additional Message:
${form.message || 'No additional message.'}

Please share the availability and details.`

    window.open(generateWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

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
                Booking
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Plan Your<br />Journey
              </h1>
              <p className="text-neutral-500 text-lg leading-relaxed max-w-lg">
                Fill in the details below and we'll connect with you on WhatsApp to finalize your booking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
                alt="Booking"
                className="rounded-2xl w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm" />
            </div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <h2 className="font-heading text-2xl font-bold mb-3 text-neutral-900">Enquiry Submitted!</h2>
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Preferred Destination</label>
                      <input
                        type="text"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                        placeholder="e.g. Kerala, Rajasthan"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Tour Package</label>
                      <select
                        name="tour"
                        required
                        value={form.tour}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white"
                      >
                        <option value="">Choose a tour</option>
                        {tours.map((t) => (
                          <option key={t.slug} value={t.name}>{t.name} — ₹{t.price.toLocaleString()}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Travel Date</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Group Size</label>
                      <select
                        name="travelers"
                        required
                        value={form.travelers}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all bg-white"
                      >
                        {[...Array(20)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'Traveler' : 'Travelers'}</option>
                        ))}
                      </select>
                    </div>
                    <div />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
                    >
                      Send Enquiry via WhatsApp
                    </button>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Your enquiry will be sent to our travel team via WhatsApp. We typically respond within 30 minutes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
