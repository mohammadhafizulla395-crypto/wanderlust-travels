import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { tours } from '../data/tours'
import Container from './Container'

const formatPrice = (p) => `₹${p.toLocaleString('en-IN')}`

export default function HomeTours() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const featured = tours[0]
  const compact = tours.slice(1, 4)

  return (
    <section ref={sectionRef} className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <Container>
        <div
          className="mb-14 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase block mb-4"
            style={{ color: 'var(--color-primary-500)' }}
          >
            Featured Journey
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--color-charcoal)' }}
          >
            A Journey We Love
          </h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8 transition-all duration-800 ease-out delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <Link
            to={`/tours/${featured.slug}`}
            className="lg:col-span-7 relative group rounded-2xl overflow-hidden cursor-pointer"
            style={{ aspectRatio: '16/10' }}
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(24,25,22,0.65) 0%, transparent 50%)',
            }} />
          </Link>

          <div
            className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 rounded-2xl"
            style={{
              backgroundColor: 'var(--color-ivory-soft)',
              border: '1px solid var(--color-stone-200)',
            }}
          >
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-3 px-3 py-1 rounded-full self-start"
              style={{
                backgroundColor: 'var(--color-primary-50)',
                color: 'var(--color-primary-600)',
              }}
            >
              {featured.category}
            </span>
            <h3
              className="font-heading text-2xl md:text-3xl font-bold mb-2"
              style={{ color: 'var(--color-charcoal)' }}
            >
              {featured.name}
            </h3>
            <p className="text-sm mb-4" style={{ color: 'var(--color-stone-500)' }}>
              {featured.destination}
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-stone-500)' }}>
              {featured.shortDescription}
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-stone-600)' }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {featured.duration}
              </div>
              <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--color-stone-600)' }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {featured.startingLocation}
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--color-primary-600)' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {featured.rating}
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs block mb-1" style={{ color: 'var(--color-stone-500)' }}>From</span>
                <span
                  className="text-3xl font-heading font-bold"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {formatPrice(featured.price)}
                </span>
                <span className="text-xs ml-1" style={{ color: 'var(--color-stone-500)' }}>/ person</span>
              </div>
              <Link
                to={`/tours/${featured.slug}`}
                className="inline-flex items-center justify-center px-7 py-3.5 font-semibold rounded-lg transition-all duration-200 text-white text-sm"
                style={{ backgroundColor: 'var(--color-primary-500)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-600)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-500)'}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {compact.map((tour, i) => (
            <Link
              key={tour.slug}
              to={`/tours/${tour.slug}`}
              className="group rounded-xl overflow-hidden transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${0.5 + i * 0.12}s`,
                border: '1px solid var(--color-stone-200)',
                backgroundColor: 'var(--color-ivory-soft)',
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4
                  className="font-heading text-lg font-bold mb-1"
                  style={{ color: 'var(--color-charcoal)' }}
                >
                  {tour.name}
                </h4>
                <p className="text-xs mb-3" style={{ color: 'var(--color-stone-500)' }}>
                  {tour.duration}
                </p>
                <span className="text-sm font-bold" style={{ color: 'var(--color-primary-600)' }}>
                  {formatPrice(tour.price)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
