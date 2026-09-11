import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { generateWhatsAppUrl } from '../utils/whatsapp';

const categories = ['All', 'Destinations', 'Travel Tips', 'Culture', 'Luxury', 'Adventure'];

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Slow Travel: Why Less Is More',
    excerpt: 'In a world obsessed with bucket lists and rushing from landmark to landmark, we explore the transformative power of lingering longer in a single destination.',
    category: 'Travel Tips',
    date: 'March 15, 2024',
    readTime: '8 min read',
    featured: true,
    slug: 'art-of-slow-travel',
  },
  {
    id: 2,
    title: 'Hidden Temples of Bali: A Guide to Sacred Spaces',
    excerpt: 'Beyond the well-known temples lie sacred spaces where ancient rituals continue undisturbed. We reveal the island\'s most spiritual corners.',
    category: 'Destinations',
    date: 'March 10, 2024',
    readTime: '6 min read',
    featured: false,
    slug: 'hidden-temples-bali',
  },
  {
    id: 3,
    title: 'Luxury Safari Lodges That Redefine Wildlife Travel',
    excerpt: 'From private conservancies to community-owned camps, discover safari experiences that combine extraordinary wildlife encounters with uncompromising luxury.',
    category: 'Luxury',
    date: 'March 5, 2024',
    readTime: '10 min read',
    featured: false,
    slug: 'luxury-safari-lodges',
  },
  {
    id: 4,
    title: 'The Culinary Roadmaps of Southeast Asia',
    excerpt: 'A journey through the region\'s most extraordinary food cultures, from night markets to Michelin-starred restaurants that honor tradition.',
    category: 'Culture',
    date: 'February 28, 2024',
    readTime: '7 min read',
    featured: false,
    slug: 'culinary-southeast-asia',
  },
  {
    id: 5,
    title: 'Patagonia Untamed: Adventure at the Edge of the World',
    excerpt: 'We trek through the last frontier of wilderness, where glaciers calve into turquoise lakes and condors soar above granite spires.',
    category: 'Adventure',
    date: 'February 20, 2024',
    readTime: '9 min read',
    featured: false,
    slug: 'patagonia-untamed',
  },
  {
    id: 6,
    title: 'The Revival of Rail Travel Across Europe',
    excerpt: 'As sustainable luxury gains momentum, train journeys are experiencing a renaissance. We chart the most scenic and sophisticated routes.',
    category: 'Destinations',
    date: 'February 15, 2024',
    readTime: '6 min read',
    featured: false,
    slug: 'rail-travel-europe',
  },
];

const blogImages = {
  1: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
  2: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  3: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
  4: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&q=80',
  5: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  6: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&q=80',
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(p => p.featured);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="bg-ivory min-h-screen">
      {/* HERO — Split */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-xl overflow-hidden aspect-[16/9] mb-8">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                  alt="Travel stories"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Stories</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">From the Field</h1>
              <p className="font-body text-stone-500 leading-relaxed max-w-lg">
                Dispatches from the world's most extraordinary destinations. Insights, inspiration, and the art of thoughtful travel.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
                alt="Writer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredPost && (
        <section className="pb-16 bg-ivory-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-6">Featured Story</p>
              <Link to={`/blog/${featuredPost.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 group">
                  <div className="overflow-hidden aspect-[4/3] lg:aspect-auto">
                    <img
                      src={blogImages[featuredPost.id]}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="font-body text-xs uppercase tracking-wider text-primary-500 mb-3">{featuredPost.category}</span>
                    <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-primary-500 transition-colors">{featuredPost.title}</h2>
                    <p className="font-body text-stone-500 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs font-body text-stone-500 uppercase tracking-wider">
                      <span>{featuredPost.date}</span>
                      <span className="text-stone-200">|</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* FILTER */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-charcoal text-white'
                    : 'bg-ivory-soft text-stone-500 border border-stone-200/50 hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.filter(p => !p.featured || selectedCategory !== 'All').map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="bg-white rounded-xl overflow-hidden h-full">
                    <div className="overflow-hidden h-48">
                      <img
                        src={blogImages[post.id]}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-body text-xs uppercase tracking-wider text-primary-500 mb-2 block">{post.category}</span>
                      <h3 className="font-heading text-lg text-charcoal mb-3 group-hover:text-primary-500 transition-colors">{post.title}</h3>
                      <p className="font-body text-stone-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs font-body text-stone-500 uppercase tracking-wider">
                        <span>{post.date}</span>
                        <span className="text-stone-200">|</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
            alt="Begin your journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-ivory-soft rounded-xl p-8 md:p-12 text-center border border-stone-200/50"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Create Your Story</p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Inspired to Travel?
            </h2>
            <p className="font-body text-stone-500 leading-relaxed mb-8 max-w-lg mx-auto">
              Let us turn the stories you read into experiences you live. Every journey begins with a conversation.
            </p>
            <a
              href={generateWhatsAppUrl("Hello! I've been reading your blog and am inspired to plan a journey.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-500 text-white font-body text-sm uppercase tracking-wider px-8 py-3.5 rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              Start Planning
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
