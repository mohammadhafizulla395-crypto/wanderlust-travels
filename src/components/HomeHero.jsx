import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '5,000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Destinations' },
  { value: '100+', label: 'Curated Tours' },
]

export default function HomeHero() {
  const imgRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1920&q=85"
          alt="Scenic view of India"
          className="w-full h-full object-cover origin-center"
          style={{
            animation: 'kenBurns 20s ease-in-out infinite alternate',
          }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(24,25,22,0.85) 0%, rgba(24,25,22,0.45) 40%, rgba(24,25,22,0.1) 100%)',
        }} />
      </div>

      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -1%); }
        }
      `}</style>

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div
          className="max-w-2xl transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-6 transition-all duration-1000 delay-200"
            style={{
              color: 'var(--color-primary-400)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            Wanderlust Travels
          </span>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6" style={{ color: 'var(--color-ivory)' }}>
            Discover the Beauty
            <br />
            of India
          </h1>

          <p
            className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed transition-all duration-1000 delay-400"
            style={{
              color: 'var(--color-stone-400)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            Handcrafted luxury journeys through India's most breathtaking
            landscapes, ancient cultures, and hidden gems.
          </p>

          <div
            className="flex flex-wrap gap-4 transition-all duration-1000 delay-500"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(15px)',
            }}
          >
            <Link
              to="/tours"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              style={{ backgroundColor: 'var(--color-primary-500)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-500)'}
            >
              Explore Journeys
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30"
              style={{
                color: 'var(--color-ivory)',
                border: '1.5px solid rgba(247,243,235,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(247,243,235,0.1)'
                e.currentTarget.style.borderColor = 'rgba(247,243,235,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(247,243,235,0.35)'
              }}
            >
              View Destinations
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 right-6 md:right-16 lg:right-24 z-10 hidden md:flex gap-8 px-8 py-6 rounded-xl backdrop-blur-md transition-all duration-1000 delay-700"
        style={{
          backgroundColor: 'rgba(247,243,235,0.08)',
          border: '1px solid rgba(247,243,235,0.12)',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl font-bold font-heading" style={{ color: 'var(--color-primary-400)' }}>
              {stat.value}
            </div>
            <div className="text-xs mt-1 tracking-wide uppercase" style={{ color: 'var(--color-stone-400)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
