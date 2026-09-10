import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Happy Travelers' },
  { number: '25+', label: 'Destinations' },
  { number: '50+', label: 'Experiences' },
  { number: '4.9', label: 'Rating' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function HomeStats() {
  return (
    <section className="bg-neutral-900 py-16 md:py-20">
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 md:divide-x md:divide-neutral-700">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col items-center text-center md:px-12 lg:px-16 first:md:pl-0 last:md:pr-0"
            >
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.number}
              </p>
              <p className="mt-2 text-neutral-400 text-sm tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
