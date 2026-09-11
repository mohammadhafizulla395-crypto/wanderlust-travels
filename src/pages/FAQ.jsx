import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const faqCategories = ['All Questions', 'Booking', 'Payments & Pricing', 'Tours & Packages', 'Travel Tips'];

const faqData = [
  {
    id: 1,
    category: 'Booking',
    question: 'How do I book a trip with Wanderlust Travels?',
    answer: 'You can book a trip through our website by visiting the Book Your Journey page, or by contacting us directly via WhatsApp, phone, or email. Our travel consultants will guide you through destination options, help you choose the perfect tour package, and handle all the details from start to finish.',
  },
  {
    id: 2,
    category: 'Booking',
    question: 'Can I customize a tour package?',
    answer: 'Absolutely! We specialize in creating personalized travel experiences. You can customize any of our tour packages to match your interests, pace, and budget. Simply let us know your preferences when you contact us, and we\'ll craft a bespoke itinerary just for you.',
  },
  {
    id: 3,
    category: 'Payments & Pricing',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, credit/debit cards (Visa, Mastercard), and PayPal. For some destinations, we also accept local payment methods. A 30% deposit is required to confirm your booking, with the remaining balance due 30 days before your departure date.',
  },
  {
    id: 4,
    category: 'Payments & Pricing',
    question: 'Are there any hidden fees?',
    answer: 'No, we believe in complete transparency. Our quoted prices include all accommodation, meals (as specified), transportation, guided tours, and entrance fees unless otherwise noted. The only additional costs might be personal expenses, optional activities, and tips.',
  },
  {
    id: 5,
    category: 'Payments & Pricing',
    question: 'Do you offer payment plans?',
    answer: 'Yes! For bookings made more than 60 days in advance, we offer flexible payment plans that allow you to spread the cost over several installments. Contact us to discuss the best payment schedule for your trip.',
  },
  {
    id: 6,
    category: 'Tours & Packages',
    question: 'What is included in your tour packages?',
    answer: 'Our tour packages typically include accommodation, meals (as specified in the itinerary), all transportation between destinations, English-speaking local guides, entrance fees to attractions, and select experiences. Each package page details exactly what\'s included.',
  },
  {
    id: 7,
    category: 'Tours & Packages',
    question: 'How many people are in your group tours?',
    answer: 'Our small group tours are limited to 12 travelers maximum, ensuring a more intimate and personalized experience. We also offer private tours for individuals, couples, and families who prefer to travel exclusively with their own group.',
  },
  {
    id: 8,
    category: 'Tours & Packages',
    question: 'Do you offer family-friendly tours?',
    answer: 'Yes! We have several tour packages designed specifically for families with children. These include age-appropriate activities, family-sized accommodations, and flexible schedules that accommodate younger travelers. Contact us to find the best family-friendly option for your needs.',
  },
  {
    id: 9,
    category: 'Travel Tips',
    question: 'Do I need a visa for my destination?',
    answer: 'Visa requirements vary by destination and your nationality. Once you book with us, we provide detailed visa guidance for your specific trip, including application requirements, processing times, and any necessary documentation. We recommend starting the visa process at least 2-3 months before departure.',
  },
  {
    id: 10,
    category: 'Travel Tips',
    question: 'What should I pack for my trip?',
    answer: 'We provide a comprehensive packing list specific to your destination and travel dates after booking. Generally, we recommend versatile clothing layers, comfortable walking shoes, sun protection, any necessary medications, and a good camera. We also advise on destination-specific items like rain gear or warm layers.',
  },
  {
    id: 11,
    category: 'Travel Tips',
    question: 'Is travel insurance necessary?',
    answer: 'While not mandatory, we strongly recommend comprehensive travel insurance for all trips. It protects against unexpected events like trip cancellations, medical emergencies, lost luggage, and more. We can recommend reliable travel insurance providers that offer coverage for your specific destination.',
  },
  {
    id: 12,
    category: 'Booking',
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy varies depending on how far in advance you cancel and the specific tour. Generally, cancellations more than 60 days out receive a full refund minus the deposit. Cancellations 30-60 days out receive a 50% refund. Within 30 days, refunds are subject to supplier policies. We recommend travel insurance for full protection.',
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [openId, setOpenId] = useState(null);

  const filteredFaqs = activeCategory === 'All Questions'
    ? faqData
    : faqData.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFaq(id);
    }
  };

  return (
    <div className="min-h-screen bg-ivory">
      <title>Frequently Asked Questions | Wanderlust Travels</title>

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&h=600&fit=crop"
          alt="FAQ"
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
            Frequently Asked Questions
          </motion.h1>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-8 pt-16">
        <div className="flex flex-wrap justify-center gap-3">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenId(null); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-forest text-white'
                  : 'bg-white text-charcoal hover:bg-forest/10 border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest/50"
                aria-expanded={openId === faq.id}
              >
                <span className="font-heading text-lg text-charcoal pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-charcoal/50 flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-charcoal/70 leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-xl p-8 md:p-12 border border-neutral-200 text-center">
          <h2 className="font-heading text-3xl text-charcoal mb-4">Still Have Questions?</h2>
          <p className="text-charcoal/60 mb-8 max-w-lg mx-auto">
            Our travel experts are ready to help you with any questions about your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5B] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let us take care of the details while you focus on making memories.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Book Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
