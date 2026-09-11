import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { generateWhatsAppUrl } from '../utils/whatsapp'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1920&q=85"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-8 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-[11px] font-semibold tracking-[0.25em] uppercase mb-5"
          >
            Premium Travel Experiences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white leading-[1.05] mb-6"
          >
            Discover the
            <br />
            Beauty of India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Curated journeys through India's most extraordinary destinations.
            From the backwaters of Kerala to the peaks of Ladakh.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Explore Destinations
            </Link>
            <a
              href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="hidden lg:flex absolute right-8 bottom-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 p-6 gap-8"
        >
          {[
            { num: '5000+', label: 'Travelers' },
            { num: '50+', label: 'Destinations' },
            { num: '4.8/5', label: 'Rating' },
          ].map((s, i) => (
            <div key={s.label} className={`text-center ${i < 2 ? 'pr-8 border-r border-white/10' : ''}`}>
              <div className="text-white font-bold text-xl">{s.num}</div>
              <div className="text-white/50 text-[11px] tracking-wide uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
