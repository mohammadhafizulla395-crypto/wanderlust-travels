import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = ['All', 'Adventure', 'Culture', 'Food', 'Nature', 'Luxury'];

const featuredArticle = {
  id: 1,
  title: 'The Hidden Temples of Bali: A Spiritual Journey Through Ancient Java',
  excerpt: 'Discover the mystical temples tucked away in the lush jungles of Bali, where ancient traditions meet breathtaking natural beauty. Our guide takes you off the beaten path to experience the true spiritual heart of Indonesia.',
  image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop',
  category: 'Culture',
  date: 'September 5, 2026',
  author: 'Sarah Mitchell',
};

const supportingArticles = [
  {
    id: 2,
    title: 'Street Food Adventures in Bangkok',
    excerpt: 'From pad thai to mango sticky rice, explore the vibrant street food scene.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop',
    category: 'Food',
    date: 'September 2, 2026',
    author: 'James Chen',
  },
  {
    id: 3,
    title: 'Safari Planning: What You Need to Know',
    excerpt: 'Everything first-time safari goers should know before booking their trip.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=250&fit=crop',
    category: 'Adventure',
    date: 'August 28, 2026',
    author: 'Aisha Patel',
  },
  {
    id: 4,
    title: 'Luxury Overwater Bungalows Compared',
    excerpt: 'We compared the top overwater bungalows in the Maldives and French Polynesia.',
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=250&fit=crop',
    category: 'Luxury',
    date: 'August 22, 2026',
    author: 'Laura Kim',
  },
];

const gridArticles = [
  {
    id: 5,
    title: 'Hiking the Inca Trail: A Complete Guide',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=250&fit=crop',
    category: 'Adventure',
    date: 'August 18, 2026',
    author: 'Marco Rivera',
  },
  {
    id: 6,
    title: 'Best Time to Visit Kyoto for Cherry Blossoms',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop',
    category: 'Nature',
    date: 'August 12, 2026',
    author: 'Yuki Tanaka',
  },
  {
    id: 7,
    title: 'Exploring the Markets of Marrakech',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&h=250&fit=crop',
    category: 'Culture',
    date: 'August 8, 2026',
    author: 'Fatima Al-Rashid',
  },
  {
    id: 8,
    title: 'Island Hopping in the Philippines',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop',
    category: 'Adventure',
    date: 'August 2, 2026',
    author: 'David Santos',
  },
  {
    id: 9,
    title: 'A Wine Lover\'s Guide to Tuscany',
    image: 'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?w=400&h=250&fit=crop',
    category: 'Food',
    date: 'July 28, 2026',
    author: 'Elena Rossi',
  },
  {
    id: 10,
    title: 'Northern Lights: Chasing the Aurora',
    image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400&h=250&fit=crop',
    category: 'Nature',
    date: 'July 22, 2026',
    author: 'Erik Larsen',
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGrid = activeCategory === 'All'
    ? gridArticles
    : gridArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-ivory">
      <title>Travel Journal | Wanderlust Travels</title>

      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=600&fit=crop"
          alt="Travel Journal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl text-white"
          >
            Travel Journal
          </motion.h1>
        </div>
      </section>

      {/* Featured + Supporting */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <Link to="/blog/1" className="group block">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-semibold text-terracotta uppercase tracking-wide">
                    {featuredArticle.category}
                  </span>
                  <span className="text-sm text-charcoal/50">{featuredArticle.date}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-charcoal group-hover:text-forest transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="mt-3 text-charcoal/70 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <p className="mt-3 text-sm text-charcoal/50">By {featuredArticle.author}</p>
              </div>
            </Link>
          </motion.div>

          {/* Supporting */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {supportingArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${article.id}`} className="group flex gap-4">
                  <div className="overflow-hidden rounded-xl flex-shrink-0 w-28 h-28 md:w-32 md:h-32">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-semibold text-terracotta uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="text-xs text-charcoal/50">{article.date}</span>
                    </div>
                    <h3 className="font-heading text-lg text-charcoal group-hover:text-forest transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-charcoal/60 mt-1 line-clamp-2 hidden md:block">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-forest text-white'
                  : 'bg-white text-charcoal hover:bg-forest/10 border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Articles */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGrid.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link to={`/blog/${article.id}`} className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-terracotta uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-xs text-charcoal/50">{article.date}</span>
                  </div>
                  <h3 className="font-heading text-xl text-charcoal group-hover:text-forest transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/50">By {article.author}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            Ready to Write Your Own Story?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you plan an unforgettable adventure that you'll be writing about for years to come.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
