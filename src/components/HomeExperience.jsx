import { useEffect, useRef, useState } from 'react'
import Container from './Container'

export default function HomeExperience() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--color-ivory-soft)' }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div
            className="lg:col-span-5 transition-all duration-1000 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
            }}
          >
            <div
              className="w-16 h-16 rounded-xl overflow-hidden mb-8 shadow-sm"
              style={{ border: '2px solid var(--color-stone-200)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80"
                alt="Travel"
                className="w-full h-full object-cover"
              />
            </div>

            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase block mb-4"
              style={{ color: 'var(--color-primary-500)' }}
            >
              Travel Story
            </span>

            <h2
              className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-8"
              style={{ color: 'var(--color-charcoal)' }}
            >
              The Road to
              <br />
              Self-Discovery
            </h2>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--color-stone-500)' }}
            >
              Every journey through India is more than sightseeing. It is a
              conversation with centuries of history, a meditation on vast
              landscapes, and a deep connection with people whose warmth
              transcends language.
            </p>

            <div
              className="py-6 px-8 rounded-xl"
              style={{
                borderLeft: '3px solid var(--color-primary-500)',
                backgroundColor: 'rgba(201,106,50,0.04)',
              }}
            >
              <p
                className="font-heading text-xl italic leading-relaxed mb-3"
                style={{ color: 'var(--color-charcoal)' }}
              >
                "Travel is the only thing you buy that makes you richer."
              </p>
              <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-stone-400)' }}>
                Ancient Proverb
              </span>
            </div>
          </div>

          <div
            className="lg:col-span-7 relative transition-all duration-1000 ease-out delay-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&q=80"
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 md:-bottom-6 px-8 py-6 rounded-xl backdrop-blur-md"
              style={{
                backgroundColor: 'rgba(247,243,235,0.92)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                border: '1px solid var(--color-stone-200)',
              }}
            >
              <div className="text-3xl font-heading font-bold mb-1" style={{ color: 'var(--color-primary-500)' }}>
                98%
              </div>
              <div className="text-xs tracking-wide uppercase" style={{ color: 'var(--color-stone-500)' }}>
                Guests Return Home
                <br />
                With Unforgettable Memories
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
