import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Happy Travelers' },
  { number: '25+', label: 'Destinations' },
  { number: '50+', label: 'Curated Experiences' },
  { number: '4.9/5', label: 'Traveler Rating' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function HomeStats() {
  return (
    <section className="relative bg-secondary-500 overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-[10%] w-48 h-48 rounded-full bg-white/5 blur-2xl" />
        <div className="absolute bottom-10 right-[15%] w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-white">
                {stat.number}
              </p>
              <p className="mt-2 text-white/60 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
