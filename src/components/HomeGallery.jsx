import { useEffect, useRef, useState } from 'react'
import { galleryItems } from '../data/gallery'
import Container from './Container'

const gridItems = [
  { cols: 'col-span-5', aspect: 'aspect-[3/4]' },
  { cols: 'col-span-4', aspect: 'aspect-square' },
  { cols: 'col-span-4', aspect: 'aspect-square' },
  { cols: 'col-span-5', aspect: 'aspect-[3/4]' },
  { cols: 'col-span-4', aspect: 'aspect-square' },
  { cols: 'col-span-4', aspect: 'aspect-square' },
]

export default function HomeGallery() {
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

  const items = galleryItems.slice(0, 6)

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
            Destination Mosaic
          </span>
          <h2
            className="font-heading text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--color-charcoal)' }}
          >
            Moments That Inspire
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 md:gap-5">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`${gridItems[i].cols} relative group overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-out`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(25px)',
                transitionDelay: `${0.2 + i * 0.1}s`,
              }}
            >
              <div className={`${gridItems[i].aspect} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div
                className="absolute inset-0 flex items-end p-5 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(24,25,22,0.7) 0%, transparent 50%)',
                  opacity: 0,
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              />
              <div
                className="absolute bottom-0 left-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              >
                <span className="text-xs font-semibold tracking-wider uppercase block mb-1" style={{ color: 'var(--color-primary-400)' }}>
                  {item.category}
                </span>
                <h4 className="text-sm font-semibold" style={{ color: 'var(--color-ivory)' }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
