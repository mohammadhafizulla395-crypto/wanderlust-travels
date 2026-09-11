import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import Container from './Container'

const blogImages = {
  'best-time-to-visit-kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  'rajasthan-desert-camp-guide': 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
  'ladakh-road-trip-tips': 'https://images.unsplash.com/photo-1626621341517-b07c8d52d3a3?w=800&q=80',
}

export default function HomeBlog() {
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

  const featured = blogPosts[0]
  const supporting = blogPosts.slice(1, 4)

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
                Travel Journal
              </span>
            </div>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold"
              style={{ color: 'var(--color-charcoal)' }}
            >
              Stories From the Road
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold tracking-wide uppercase transition-colors duration-200"
            style={{ color: 'var(--color-primary-500)' }}
          >
            Read All Posts
            <svg className="inline-block ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 transition-all duration-800 ease-out delay-200"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <Link
            to={`/blog/${featured.slug}`}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: '16/10' }}>
              <img
                src={blogImages[featured.slug]}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--color-primary-50)',
                  color: 'var(--color-primary-600)',
                }}
              >
                {featured.category}
              </span>
              <span className="text-xs" style={{ color: 'var(--color-stone-500)' }}>
                {featured.date}
              </span>
            </div>
            <h3
              className="font-heading text-xl md:text-2xl font-bold leading-snug mb-2 group-hover:text-primary-600 transition-colors"
              style={{ color: 'var(--color-charcoal)' }}
            >
              {featured.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-stone-500)' }}>
              {featured.excerpt}
            </p>
          </Link>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {supporting.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex gap-5 items-start cursor-pointer transition-all duration-700 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(20px)',
                  transitionDelay: `${0.4 + i * 0.12}s`,
                }}
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={blogImages[post.slug]}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0 py-1">
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--color-primary-500)' }}>
                    {post.category}
                  </span>
                  <h4
                    className="font-heading text-sm font-bold leading-snug mt-1 mb-2 line-clamp-2"
                    style={{ color: 'var(--color-charcoal)' }}
                  >
                    {post.title}
                  </h4>
                  <span className="text-xs" style={{ color: 'var(--color-stone-500)' }}>
                    {post.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
