import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blog'
import { generateWhatsAppUrl } from '../utils/whatsapp'

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))]

const blogImages = {
  'best-time-to-visit-kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  'rajasthan-desert-camp-guide': 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
  'ladakh-road-trip-tips': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  'kerala-backwaters-houseboat-guide': 'https://images.unsplash.com/photo-1590050752117-29885f03b27a?w=800&q=80',
  'indian-food-trail': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
  'sustainable-travel-india': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => { document.title = 'Travel Blog | Wanderlust Travels' }, [])

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  const featured = blogPosts[0]

  return (
    <div>
      {/* Hero */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-stone-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                Stories
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
                Travel<br />Blog
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Stories, tips, and inspiration for your next adventure across India.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={blogImages[featured.slug]}
                  alt="Travel stories"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-ivory-soft py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[3/2] lg:aspect-auto lg:min-h-[320px]">
                <img
                  src={blogImages[featured.slug]}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-forest-700 bg-forest-50 px-3 py-1 rounded-lg">
                    {featured.category}
                  </span>
                  <span className="text-xs text-stone-400">{featured.date}</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-primary-500 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-stone-500 leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary-500 font-semibold text-sm">
                  Read Article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filter + Article Grid */}
      <section className="py-16 md:py-24 bg-ivory-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={blogImages[post.slug]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-medium px-3 py-1 rounded-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-stone-400">{post.date}</span>
                      <span className="text-xs text-stone-300">|</span>
                      <span className="text-xs text-stone-400">{post.content.length * 2} min read</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-stone-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary-500 font-medium text-sm">
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Photography */}
      <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80"
            alt="Travel photography"
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Inspired to Travel?
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-8">
              Let us help you turn these stories into your own adventure. Get in touch to start planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center bg-primary-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors duration-300"
              >
                Browse Tours
              </Link>
              <a
                href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
