import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Happy Travelers' },
  { number: '25+', label: 'Destinations' },
  { number: '50+', label: 'Curated Experiences' },
  { number: '4.9/5', label: 'Traveler Rating' },
]

export default function HomeStats() {
  return (
    <section className="bg-forest py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
              <p className="mt-1.5 text-white/50 text-xs tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
