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
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-primary-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">Stories</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
              Travel Blog
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-sm font-semibold text-neutral-900 hover:text-primary-500 transition-colors hidden md:block"
          >
            View All Articles
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
                  className="w-full h-[320px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-secondary-600 bg-secondary-50 px-3 py-1 rounded-lg">{featured.category}</span>
                  <span className="text-xs text-neutral-400">{featured.date}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-primary-500 transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-3 leading-relaxed">{featured.excerpt}</p>
              </div>
            </Link>
          </motion.div>

          <div className="flex flex-col gap-6">
            {supporting.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group flex gap-5">
                  <div className="w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={blogImages[post.slug]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-secondary-600 bg-secondary-50 px-2 py-0.5 rounded">{post.category}</span>
                      <span className="text-[11px] text-neutral-400">{post.date}</span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-neutral-900 group-hover:text-primary-500 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-neutral-400 text-xs mt-1.5 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <Link
          to="/blog"
          className="text-sm font-semibold text-neutral-900 hover:text-primary-500 transition-colors mt-8 block md:hidden"
        >
          View All Articles
        </Link>
      </div>
    </section>
  )
}
