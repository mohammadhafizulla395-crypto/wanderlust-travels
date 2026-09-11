import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import Container from './Container'

export default function HomeDestinations() {
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

  const featured = destinations[0]
  const small = destinations.slice(1, 3)

  return (
    <section ref={sectionRef} className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: 'var(--color-primary-500)' }}
              >
                Featured Destinations
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-charcoal)' }}>
              Where Will Your Story
              <br />
              Take You?
            </h2>
          </div>
          <Link
            to="/destinations"
            className="text-sm font-semibold tracking-wide uppercase transition-colors duration-200"
            style={{ color: 'var(--color-primary-500)' }}
          >
            View All Destinations
            <svg className="inline-block ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          <Link
            to={`/destinations/${featured.slug}`}
            className="md:col-span-7 relative group rounded-2xl overflow-hidden cursor-pointer"
            style={{ aspectRatio: '4/5' }}
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(24,25,22,0.7) 0%, rgba(24,25,22,0.05) 50%)',
            }} />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <span
                className="inline-block text-xs font-semibold tracking-[0.15em] uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(201,106,50,0.9)',
                  color: 'var(--color-ivory)',
                }}
              >
                {featured.category}
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
                {featured.name}
              </h3>
              <p className="text-white/70 text-sm">{featured.tagline}</p>
            </div>
          </Link>

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
            {small.map((dest, i) => (
              <Link
                key={dest.slug}
                to={`/destinations/${dest.slug}`}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  aspectRatio: '16/9',
                  transition: 'all 0.8s ease-out',
                  transitionDelay: `${0.3 + i * 0.15}s`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(24,25,22,0.7) 0%, rgba(24,25,22,0.05) 50%)',
                }} />
                <div className="absolute bottom-0 left-0 p-6">
                  <span
                    className="inline-block text-xs font-semibold tracking-[0.15em] uppercase mb-2 px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(201,106,50,0.9)',
                      color: 'var(--color-ivory)',
                    }}
                  >
                    {dest.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-xs">{dest.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
