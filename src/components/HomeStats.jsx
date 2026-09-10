import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const stats = [
  { number: '500+', label: 'Happy Travelers', suffix: '' },
  { number: '25+', label: 'Destinations', suffix: '' },
  { number: '50+', label: 'Curated Experiences', suffix: '' },
  { number: '4.9', label: 'Traveler Rating', suffix: '/5' },
]

export default function HomeStats() {
  return (
    <section className="py-16 md:py-20 bg-primary-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
                {stat.suffix && <span className="text-2xl text-primary-200">{stat.suffix}</span>}
              </div>
              <div className="text-primary-100 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
