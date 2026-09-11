import { useEffect, useRef, useState } from 'react'
import { reviews } from '../data/reviews'
import Container from './Container'

export default function HomeTestimonials() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const review = reviews[0]

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
      className="py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: 'var(--color-ivory-soft)' }}
    >
      <Container>
        <div
          className="max-w-4xl mx-auto text-center transition-all duration-1000 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(25px)',
          }}
        >
          <div
            className="text-[120px] md:text-[160px] font-heading leading-none select-none pointer-events-none mb-[-40px] md:mb-[-60px]"
            style={{ color: 'var(--color-primary-100)' }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase block mb-8"
            style={{ color: 'var(--color-primary-500)' }}
          >
            Guest Testimonial
          </span>

          <blockquote
            className="font-heading text-2xl md:text-3xl lg:text-4xl italic leading-snug mb-10"
            style={{ color: 'var(--color-charcoal)' }}
          >
            {review.text}
          </blockquote>

          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill={i < review.rating ? 'var(--color-primary-500)' : 'none'}
                viewBox="0 0 24 24"
                stroke={i < review.rating ? 'var(--color-primary-500)' : 'var(--color-stone-300)'}
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
          </div>

          <div>
            <p
              className="font-heading text-lg font-semibold mb-1"
              style={{ color: 'var(--color-charcoal)' }}
            >
              {review.name}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-stone-500)' }}>
              {review.tour}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
