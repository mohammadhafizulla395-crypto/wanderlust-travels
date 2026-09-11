import { motion } from 'framer-motion'

export default function HomeWhyUs() {
  return (
    <section className="py-20 md:py-28 bg-ivory-soft overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1100&q=80"
                alt="Mountain lake"
                className="w-full h-[300px] md:h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.04)]">
              <p className="text-forest-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">Why Us</p>
              <h2 className="font-heading text-2xl md:text-[2rem] font-bold text-charcoal leading-tight mb-7">
                Travel With
                <br />
                Confidence
              </h2>
              <div className="space-y-5">
                {[
                  { title: 'Expert Local Guides', desc: 'Knowledgeable guides who bring every destination to life with authentic stories.' },
                  { title: 'Transparent Pricing', desc: 'No hidden costs. What you see is exactly what you pay.' },
                  { title: 'Safety First', desc: 'Verified accommodations, insured vehicles, and 24/7 support during your trip.' },
                  { title: 'Custom Itineraries', desc: 'Every trip is tailored to your preferences, pace, and budget.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-primary-500 mt-2.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-charcoal mb-0.5">{item.title}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
