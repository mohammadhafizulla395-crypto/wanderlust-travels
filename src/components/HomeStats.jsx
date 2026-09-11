import { useEffect, useRef, useState } from 'react'
import Container from './Container'

const stats = [
  { value: '5000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Destinations Covered' },
  { value: '100+', label: 'Curated Journeys' },
  { value: '4.8/5', label: 'Average Rating' },
]

export default function HomeStats() {
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
      className="py-16 md:py-20"
      style={{ backgroundColor: 'var(--color-charcoal)' }}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center py-6 md:py-8 transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(15px)',
                transitionDelay: `${i * 0.1}s`,
                borderRight: i < 3 ? '1px solid rgba(247,243,235,0.12)' : 'none',
              }}
            >
              <div
                className="text-3xl md:text-4xl font-heading font-bold mb-2"
                style={{ color: 'var(--color-primary-400)' }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm tracking-wide uppercase"
                style={{ color: 'var(--color-stone-500)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
