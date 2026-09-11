import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blog'

const blogImages = {
  'best-time-to-visit-kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
  'rajasthan-desert-camp-guide': 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
  'ladakh-road-trip-tips': 'https://images.unsplash.com/photo-1626621341517-b07c8d52d3a3?w=800&q=80',
  'kerala-backwaters-houseboat-guide': 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80',
  'indian-food-trail': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
  'sustainable-travel-india': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
}

export default function HomeBlog() {
  const featured = blogPosts[0]
  const supporting = blogPosts.slice(1, 4)

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-primary-500 font-semibold text-[11px] tracking-[0.2em] uppercase mb-3">Stories</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-tight">
              Travel Blog
            </h2>
          </div>
          <Link to="/blog" className="text-[13px] font-semibold text-charcoal hover:text-primary-500 transition-colors hidden md:block">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={blogImages[featured.slug]}
                  alt={featured.title}
                  className="w-full h-[280px] lg:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-forest-500 bg-forest-50 px-2.5 py-1 rounded">{featured.category}</span>
                  <span className="text-[11px] text-stone-400">{featured.date}</span>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-charcoal group-hover:text-primary-500 transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-stone-500 text-sm mt-2 leading-relaxed line-clamp-2">{featured.excerpt}</p>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-5">
            {supporting.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/blog/${post.slug}`} className="group flex gap-5">
                  <div className="w-28 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={blogImages[post.slug]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-forest-500 bg-forest-50 px-2 py-0.5 rounded">{post.category}</span>
                      <span className="text-[10px] text-stone-400">{post.date}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-charcoal group-hover:text-primary-500 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-stone-400 text-xs mt-1 line-clamp-1">{post.excerpt}</p>
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
