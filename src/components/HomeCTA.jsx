import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

export default function HomeCTA() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ minHeight: '500px' }}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Tropical beach"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(24,25,22,0.6)' }}
        />
      </div>

      <Container className="relative z-10 h-full flex items-center justify-center py-16">
        <div
          className="max-w-xl w-full text-center rounded-2xl p-10 md:p-14 transition-all duration-1000 ease-out"
          style={{
            backgroundColor: 'rgba(247,243,235,0.95)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.2)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
          }}
        >
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase block mb-4"
            style={{ color: 'var(--color-primary-500)' }}
          >
            Start Your Journey
          </span>

          <h2
            className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ color: 'var(--color-charcoal)' }}
          >
            Your Adventure
            <br />
            Awaits
          </h2>

          <p
            className="text-sm leading-relaxed mb-10 max-w-sm mx-auto"
            style={{ color: 'var(--color-stone-500)' }}
          >
            Let us craft a journey that speaks to your soul. Get in touch
            and let the planning begin.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 font-semibold rounded-lg transition-all duration-200 text-white text-sm"
              style={{ backgroundColor: 'var(--color-primary-500)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-500)'}
            >
              Plan Your Trip
            </Link>
            <Link
              to="/tours"
              className="inline-flex items-center justify-center px-8 py-3.5 font-semibold rounded-lg transition-all duration-200 text-sm"
              style={{
                color: 'var(--color-charcoal)',
                border: '1.5px solid var(--color-stone-300)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-stone-500)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-stone-300)'
              }}
            >
              Browse Tours
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
