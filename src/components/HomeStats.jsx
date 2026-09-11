import { motion } from 'framer-motion'

export default function HomeStats() {
  return (
    <section className="bg-charcoal py-14 md:py-16">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { num: '5000+', label: 'Happy Travelers' },
            { num: '50+', label: 'Destinations' },
            { num: '100+', label: 'Tour Packages' },
            { num: '4.8/5', label: 'Average Rating' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`text-center py-4 ${i < 3 ? 'md:border-r border-white/5' : ''}`}
            >
              <div className="text-white font-bold text-2xl md:text-3xl">{s.num}</div>
              <div className="text-stone-500 text-xs tracking-wide uppercase mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
