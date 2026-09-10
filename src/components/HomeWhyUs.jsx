import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Curated Experiences',
    description: 'Every tour is carefully crafted by travel experts who know India inside out.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Local Expertise',
    description: 'Our local guides provide authentic insights that transform a trip into a truly immersive cultural experience.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Plans',
    description: "Whether you're a solo traveler, couple, or family, we adapt our itineraries to match your pace.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Trusted Support',
    description: '24/7 assistance during your trip. From inquiry to return, we are always just a call away.',
  },
]

export default function HomeWhyUs() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Travel With Us"
          subtitle="We don't just plan trips — we craft experiences that stay with you long after you return home."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="bg-white rounded-2xl p-7 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center mx-auto mb-5">
                {benefit.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
