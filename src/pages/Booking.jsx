import { useState } from 'react';
import { motion } from 'framer-motion';
import { destinations } from '../data/destinations';
import { tours } from '../data/tours';
import { generateWhatsAppUrl } from '../utils/whatsapp';

const Booking = () => {
  const [form, setForm] = useState({
    destination: '',
    tour: '',
    date: '',
    travelers: 2,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const availableTours = form.destination
    ? tours.filter((t) => t.destinationSlug === form.destination)
    : tours;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      if (name === 'destination') {
        return { ...prev, destination: value, tour: '' };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleTravelers = (delta) => {
    setForm((prev) => ({
      ...prev,
      travelers: Math.max(1, Math.min(20, prev.travelers + delta)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const destName = destinations.find((d) => d.slug === form.destination)?.name || form.destination;
    const tourName = tours.find((t) => t.slug === form.tour)?.name || form.tour;
    const text = encodeURIComponent(
      `Hello Wanderlust Travels! I'd like to plan a trip:\n\n📍 Destination: ${destName}\n🗺 Tour: ${tourName}\n📅 Preferred Date: ${form.date}\n👥 Travelers: ${form.travelers}\n\n💬 Message: ${form.message || 'No additional message'}`
    );
    window.open(generateWhatsAppUrl(text.replace(/%20/g, ' ')), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ivory">
      <title>Plan Your Journey | Wanderlust Travels</title>

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&h=600&fit=crop"
          alt="Plan Your Journey"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl text-white text-center"
          >
            Plan Your Journey
          </motion.h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative -mt-24 pb-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Blurred Background */}
            <div className="absolute inset-0 rounded-xl bg-white/40 backdrop-blur-sm transform translate-y-4" />

            {/* Form Panel */}
            <div className="relative bg-ivory rounded-xl p-8 md:p-12 shadow-xl border border-neutral-200">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-forest" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-heading text-3xl text-charcoal mb-3">Trip Request Sent!</h2>
                  <p className="text-charcoal/60 text-lg mb-8 max-w-md mx-auto">
                    We've opened WhatsApp with your trip details. Our travel experts will get back to you within 2 hours with a personalized itinerary.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ destination: '', tour: '', date: '', travelers: 2, message: '' });
                    }}
                    className="text-forest hover:text-forest/80 font-medium underline underline-offset-4"
                  >
                    Plan Another Trip
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <h2 className="font-heading text-3xl text-charcoal mb-2">Where Would You Like to Go?</h2>
                    <p className="text-charcoal/50">Tell us your dream destination and we'll craft the perfect itinerary.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Destination */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Destination *</label>
                        <select
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-lg border border-neutral-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors appearance-none"
                        >
                          <option value="" disabled>Choose a destination</option>
                          {destinations.map((d) => (
                            <option key={d.slug} value={d.slug}>{d.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* Tour */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Tour Package *</label>
                        <select
                          name="tour"
                          value={form.tour}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-lg border border-neutral-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors appearance-none"
                        >
                          <option value="" disabled>Select a tour</option>
                          {availableTours.map((t) => (
                            <option key={t.slug} value={t.slug}>{t.name} — {t.destination}</option>
                          ))}
                        </select>
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Preferred Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3.5 rounded-lg border border-neutral-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                        />
                      </div>

                      {/* Travelers */}
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">Number of Travelers *</label>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => handleTravelers(-1)}
                            className="w-12 h-12 rounded-lg border border-neutral-200 bg-white text-charcoal hover:bg-neutral-50 flex items-center justify-center text-xl font-medium transition-colors"
                          >
                            −
                          </button>
                          <span className="text-2xl font-heading text-charcoal w-12 text-center">
                            {form.travelers}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleTravelers(1)}
                            className="w-12 h-12 rounded-lg border border-neutral-200 bg-white text-charcoal hover:bg-neutral-50 flex items-center justify-center text-xl font-medium transition-colors"
                          >
                            +
                          </button>
                          <span className="text-sm text-charcoal/50 ml-2">
                            {form.travelers === 1 ? '1 traveler' : `${form.travelers} travelers`}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1.5">Additional Details</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-lg border border-neutral-200 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors resize-none"
                        placeholder="Tell us about your travel preferences, special occasions, dietary requirements, or any questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
                    >
                      Request Trip Details via WhatsApp
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Not Sure Where to Go?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Speak with one of our travel experts to discover your perfect Indian destination.
          </p>
          <a
            href={generateWhatsAppUrl('Hi! I need help planning my next trip to India.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5B] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat with a Travel Expert
          </a>
        </div>
      </section>
    </div>
  );
};

export default Booking;
