import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blog'

const blogImages = {
  'best-time-to-visit-kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  'rajasthan-desert-camp-guide': 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
  'ladakh-road-trip-tips': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  'kerala-backwaters-houseboat-guide': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  'indian-food-trail': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
  'sustainable-travel-india': 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800&q=80',
}

export default function HomeJournal() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1, 4)

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <p className="text-terracotta font-semibold text-xs tracking-[0.2em] uppercase mb-2">Journal</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Travel Journal</h2>
          </div>
          <Link
            to="/blog"
            className="text-forest hover:text-forest-deep font-semibold text-sm inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            Read All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group block bg-white rounded-xl overflow-hidden"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={blogImages[featured.slug]}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-charcoal text-xs font-semibold px-3 py-1.5 rounded-lg">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                  <span>{featured.date}</span>
                  <span className="text-neutral-300">·</span>
                  <span>{featured.author}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold group-hover:text-forest transition-colors mb-2">
                  {featured.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{featured.excerpt}</p>
              </div>
            </Link>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex sm:flex-col lg:flex-row gap-4 bg-white rounded-xl overflow-hidden"
                >
                  <div className="relative w-24 h-24 sm:w-full sm:h-40 lg:w-28 lg:h-28 shrink-0 overflow-hidden">
                    <img
                      src={blogImages[post.slug]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 p-4 sm:pt-0 lg:py-4 lg:pr-4">
                    <span className="text-terracotta text-xs font-semibold">{post.category}</span>
                    <h3 className="font-heading text-sm font-bold mt-1 mb-1 group-hover:text-forest transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 text-xs">{post.date}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
