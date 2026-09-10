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
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function HomeStats() {
  return (
    <section className="relative bg-secondary-700 overflow-hidden py-16 md:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-[10%] w-48 h-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-10 right-[15%] w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-8 right-[8%] w-3 h-3 rounded-full bg-white/10" />
        <div className="absolute bottom-12 left-[20%] w-2 h-2 rounded-full bg-white/10" />
        <div className="absolute top-1/4 right-[25%] w-4 h-4 rounded-full bg-white/10" />
        <div className="absolute bottom-1/4 left-[35%] w-2.5 h-2.5 rounded-full bg-white/10" />
        <div className="absolute top-[60%] right-[10%] w-3.5 h-3.5 rounded-full bg-white/10" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
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
              <p className="mt-2 text-secondary-200 text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}