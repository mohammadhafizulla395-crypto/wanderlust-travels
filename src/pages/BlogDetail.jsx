import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blog'
import Breadcrumbs from '../components/Breadcrumbs'
import { generateWhatsAppUrl } from '../utils/whatsapp'

const blogImages = {
  'best-time-to-visit-kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
  'rajasthan-desert-camp-guide': 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
  'ladakh-road-trip-tips': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
  'kerala-backwaters-houseboat-guide': 'https://images.unsplash.com/photo-1590050752117-29885f03b27a?w=1200&q=80',
  'indian-food-trail': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80',
  'sustainable-travel-india': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
}

const relatedBlogImages = {
  'best-time-to-visit-kerala': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
  'rajasthan-desert-camp-guide': 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80',
  'ladakh-road-trip-tips': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80',
  'kerala-backwaters-houseboat-guide': 'https://images.unsplash.com/photo-1590050752117-29885f03b27a?w=600&q=80',
  'indian-food-trail': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  'sustainable-travel-india': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
}

export default function BlogDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Wanderlust Travels`
    } else {
      document.title = 'Article Not Found | Wanderlust Travels'
    }
  }, [post])

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-neutral-500 mb-6">The article you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-primary-600 hover:underline font-medium">
          Browse all articles
        </Link>
      </div>
    )
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)
  const readingTime = post.content.length * 2

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = encodeURIComponent(`Check out this article: ${post.title}`)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blogImages[post.slug]}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pb-8 md:pb-12">
          <Breadcrumbs items={[
            { label: 'Blog', to: '/blog' },
            { label: post.title },
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium text-primary-300 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-white/70 text-sm">
              <span>{post.author}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{readingTime} min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Share Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3 mb-10 pb-6 border-b border-neutral-100"
            >
              <span className="text-sm text-neutral-500 font-medium">Share:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 flex items-center justify-center transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 flex items-center justify-center transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a
                href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 flex items-center justify-center transition-colors"
                aria-label="Share on WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl)
                }}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 flex items-center justify-center transition-colors"
                aria-label="Copy link"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              </button>
            </motion.div>

            {/* Article Body */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-neutral-700 leading-relaxed text-lg mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.article>

            {/* Key Takeaways */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
               className="mt-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-100"
            >
              <h3 className="font-heading text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="space-y-3">
                {post.content.slice(0, 3).map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 text-sm leading-relaxed">{p.slice(0, 120)}...</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Related Articles */}
            {related.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16 pt-12 border-t border-neutral-200"
              >
                <h3 className="font-heading text-2xl font-bold mb-8">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={relatedBlogImages[r.slug]}
                          alt={r.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-secondary-600 mb-1 block">{r.category}</span>
                        <h4 className="font-heading font-semibold text-sm group-hover:text-primary-600 transition-colors line-clamp-2">
                          {r.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
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
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Let us help you turn these stories into your own adventure. Get in touch to start planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tours"
                className="inline-flex items-center justify-center bg-primary-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-700 transition-colors duration-300"
              >
                Browse Tours
              </Link>
              <a
                href={generateWhatsAppUrl('Hello! I would like to plan a trip with Wanderlust Travels.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
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
