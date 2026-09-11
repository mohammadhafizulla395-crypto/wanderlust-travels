import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { generateWhatsAppUrl } from '../utils/whatsapp';

const timeline = [
  { year: '2010', title: 'Founded', description: 'Born from a passion for authentic travel experiences.' },
  { year: '2015', title: 'Expansion', description: 'Expanded operations across Southeast Asia and East Africa.' },
  { year: '2020', title: 'Evolution', description: 'Pivoted to intimate, curated luxury journeys.' },
  { year: '2024', title: 'Recognition', description: 'Awarded Best Boutique Tour Operator.' },
];

const values = [
  { title: 'Authenticity', description: 'We design journeys that connect you with the true spirit of each destination, beyond surface-level tourism.' },
  { title: 'Precision', description: 'Every detail is considered and crafted with intention, from the first welcome to the final farewell.' },
  { title: 'Stewardship', description: 'We travel with respect for local cultures, environments, and communities that host us.' },
];

const stats = [
  { number: '14+', label: 'Years of Experience' },
  { number: '45', label: 'Countries Curated' },
  { number: '2,500+', label: 'Journeys Designed' },
  { number: '98%', label: 'Guest Satisfaction' },
];

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-ivory min-h-screen">
      {/* HERO */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="rounded-xl overflow-hidden aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
                alt="Luxury landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-ivory-soft rounded-xl p-8 border border-stone-200/50 max-w-lg -mt-20 relative z-10"
            >
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Our Story</p>
              <h1 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
                Crafting Extraordinary Journeys Since 2010
              </h1>
              <p className="font-body text-stone-500 leading-relaxed">
                We believe travel should transform, not just transport. Every journey we create is a bespoke narrative, designed to immerse you in the world's most extraordinary destinations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR STORY — Editorial Split */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80"
                  alt="Journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="bg-ivory rounded-xl p-8 md:p-10 border border-stone-200/50">
                <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Est. 2010</p>
                <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-6">The Art of Thoughtful Travel</h2>
                <p className="font-body text-stone-500 leading-relaxed mb-4">
                  Founded with a singular vision: to redefine luxury travel as something deeply personal and profoundly meaningful. We rejected the notion that opulence means excess, and instead championed the luxury of experience, of time, of genuine human connection.
                </p>
                <p className="font-body text-stone-500 leading-relaxed">
                  Our team of seasoned travel architects has explored every corner of the globe, building relationships with extraordinary hosts, hidden gems, and cultural custodians who share our passion for authentic discovery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-ivory border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center ${i < stats.length - 1 ? 'md:border-r md:border-stone-200/50' : ''}`}>
                <p className="font-heading text-3xl md:text-4xl text-primary-500 mb-1">{stat.number}</p>
                <p className="font-body text-sm text-stone-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 text-center mb-3">Our Journey</p>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal text-center mb-16">Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-stone-200" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <p className="font-body text-sm text-stone-500 uppercase tracking-wider mb-1">{item.year}</p>
                  <h3 className="font-heading text-xl text-charcoal mb-1">{item.title}</h3>
                  <p className="font-body text-stone-500 text-sm">{item.description}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-charcoal border-4 border-ivory z-10" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 bg-white rounded-xl p-8 md:p-10"
            >
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Our Mission</p>
              <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-6">To Transform How the World Experiences Travel</h2>
              <p className="font-body text-stone-500 leading-relaxed">
                We exist to create journeys that linger long after return. Through meticulous curation and deep local knowledge, we craft experiences that broaden perspectives, forge connections, and reveal the extraordinary beauty of our world.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-5 bg-white rounded-xl p-8 md:p-10"
            >
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Our Vision</p>
              <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-6">A World Connected Through Meaningful Journeys</h2>
              <p className="font-body text-stone-500 leading-relaxed">
                We envision a future where travel serves as a bridge between cultures, fostering understanding, respect, and lasting bonds that transcend borders and generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 text-center mb-3">What Guides Us</p>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal text-center mb-16">Our Core Values</h2>
          <div className="space-y-12">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="mt-2 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-charcoal mb-2">{val.title}</h3>
                  <p className="font-body text-stone-500 leading-relaxed max-w-2xl">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
                  alt="Why travel with us"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="bg-ivory-soft rounded-xl p-8 md:p-10 border border-stone-200/50">
                <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">The Difference</p>
                <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-8">Why Travel With Us</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Bespoke Itineraries', desc: 'No templates, only tailored journeys designed around your interests and pace.' },
                    { title: 'Local Expertise', desc: 'Access to guides, hosts, and experiences unavailable to the general traveler.' },
                    { title: 'Seamless Support', desc: 'Dedicated travel concierge from first inquiry to your final return.' },
                    { title: 'Cultural Immersion', desc: 'Deep, meaningful encounters that go beyond the typical tourist experience.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-heading text-base text-charcoal mb-1">{item.title}</h3>
                        <p className="font-body text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Begin Your Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Your Next Chapter Awaits
            </h2>
            <p className="font-body text-stone-500 leading-relaxed mb-8 max-w-lg mx-auto">
              Let us craft a journey that reflects your spirit of discovery. Every adventure begins with a conversation.
            </p>
            <a
              href={generateWhatsAppUrl("Hello! I'd like to learn more about your luxury travel experiences.")}
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
