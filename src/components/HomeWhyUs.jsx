import { useEffect, useRef, useState } from 'react'
import Container from './Container'

const benefits = [
  {
    number: '01',
    title: 'Expert Local Guides',
    text: 'Passionate storytellers who know every hidden corner.',
  },
  {
    number: '02',
    title: 'Bespoke Itineraries',
    text: 'Every journey crafted to match your pace and interests.',
  },
  {
    number: '03',
    title: 'Handpicked Stays',
    text: 'From heritage havelis to boutique retreats, curated for comfort.',
  },
  {
    number: '04',
    title: 'Seamless Travel',
    text: 'End-to-end logistics handled, so you simply enjoy.',
  },
]

export default function HomeWhyUs() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div
            className="lg:col-span-7 relative rounded-2xl overflow-hidden transition-all duration-1000 ease-out"
            style={{
              aspectRatio: '4/5',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1100&q=80"
              alt="Travel experience"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="lg:col-span-5 lg:-ml-16 z-10 mt-8 lg:mt-0 transition-all duration-1000 ease-out delay-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <div
              className="rounded-2xl p-8 md:p-12 lg:p-14"
              style={{
                backgroundColor: 'var(--color-ivory)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.08)',
              }}
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase block mb-4"
                style={{ color: 'var(--color-primary-500)' }}
              >
                Why Travel With Us
              </span>
              <h2
                className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-10"
                style={{ color: 'var(--color-charcoal)' }}
              >
                Every Detail,
                <br />
                Considered
              </h2>

              <div className="space-y-8">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex gap-5 transition-all duration-700 ease-out"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(15px)',
                      transitionDelay: `${0.5 + i * 0.12}s`,
                    }}
                  >
                    <span
                      className="text-xs font-bold tracking-wider mt-1 flex-shrink-0"
                      style={{ color: 'var(--color-primary-400)' }}
                    >
                      {b.number}
                    </span>
                    <div>
                      <h3
                        className="font-heading text-lg font-semibold mb-1"
                        style={{ color: 'var(--color-charcoal)' }}
                      >
                        {b.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-stone-500)' }}>
                        {b.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
