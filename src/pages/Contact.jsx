import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { generateWhatsAppUrl } from '../utils/whatsapp'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { document.title = 'Contact Us | Wanderlust Travels' }, [])

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    const msg = `Hello, I would like to get in touch.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nMessage: ${form.message}`
    window.open(generateWhatsAppUrl(msg), '_blank')
    setSubmitted(true)
  }

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
                Contact
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Get in<br />Touch
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Have a question or want to plan your next trip? We'd love to hear from you.
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
                  src="https://images.unsplash.com/photo-1530521954074-f49f981e7754?w=800&q=80"
                  alt="Contact us"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section — Split */}
      <section className="bg-ivory-soft py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                  alt="Travel contact"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right — Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
                {/* Contact Info */}
                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="text-sm text-stone-400 mb-0.5">Phone</div>
                      <a href="tel:+919100527275" className="text-charcoal font-medium hover:text-primary-500 transition-colors">
                        +91 91005 27275
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div>
                      <div className="text-sm text-stone-400 mb-0.5">WhatsApp</div>
                      <a href="https://wa.me/919100527275" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                        +91 91005 27275
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="text-sm text-stone-400 mb-0.5">Email</div>
                      <a href="mailto:hello@wanderlusttravels.in" className="text-charcoal font-medium hover:text-primary-500 transition-colors">
                        hello@wanderlusttravels.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-stone-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="text-sm text-stone-400 mb-0.5">Office</div>
                      <div className="text-charcoal font-medium">MG Road, Kochi, Kerala 682011</div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a
                    href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919100527275"
                    className="flex items-center justify-center gap-2 border border-stone-200 hover:border-stone-300 text-charcoal font-semibold px-5 py-3 rounded-lg transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                </div>

                {/* Contact Form */}
                {submitted ? (
                  <div className="bg-forest-50 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-forest-500 text-white flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">WhatsApp Opening...</h3>
                    <p className="text-stone-500 mb-6">
                      We've prepared your message and opened WhatsApp. Send the message there to complete your enquiry.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                      className="text-primary-500 font-medium hover:text-primary-600"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${errors.name ? 'border-red-400' : 'border-stone-200'}`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${errors.email ? 'border-red-400' : 'border-stone-200'}`}
                          placeholder="you@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-1">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-stone-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none ${errors.message ? 'border-red-400' : 'border-stone-200'}`}
                        placeholder="Tell us about your travel plans or question..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                    </button>
                    <p className="text-xs text-stone-400 text-center">
                      Your message will open in WhatsApp. No data is stored on our servers.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — Photography */}
      <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80"
            alt="Travel photography"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-8">
              Browse our curated tour packages or let us create a custom itinerary just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors duration-300"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+919100527275"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
