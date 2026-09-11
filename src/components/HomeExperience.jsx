import { motion } from 'framer-motion'

export default function HomeExperience() {
  return (
    <section className="py-20 md:py-28 bg-ivory-soft overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-4">Experience</p>
            <h2 className="font-heading text-2xl md:text-[2rem] font-bold text-charcoal leading-tight mb-5">
              Travel That
              <br />
              Transforms
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Every journey with Wanderlust is designed to create lasting memories. We combine local expertise with personalized attention to craft experiences that go beyond ordinary tourism.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-charcoal">100%</div>
                <div className="text-stone-400 text-xs mt-0.5">Satisfaction Rate</div>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <div className="text-2xl font-bold text-charcoal">24/7</div>
                <div className="text-stone-400 text-xs mt-0.5">Support Available</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80"
                alt="Mountain scenery"
                className="w-full h-[300px] md:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-forest-500 text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-white/70 text-xs mt-0.5">Years of Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
