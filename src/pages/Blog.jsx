import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog';

const categories = ['All', 'Travel Tips', 'Destinations', 'Adventure', 'Culture', 'Sustainability'];

const featuredArticle = {
  id: 1,
  slug: 'best-time-to-visit-kerala',
  title: blogPosts[0].title,
  excerpt: blogPosts[0].excerpt,
  image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=500&fit=crop',
  category: blogPosts[0].category,
  date: blogPosts[0].date,
  author: blogPosts[0].author,
};

const supportingArticles = [
  {
    id: 2,
    slug: 'rajasthan-desert-camp-guide',
    title: blogPosts[1].title,
    excerpt: blogPosts[1].excerpt,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=250&fit=crop',
    category: blogPosts[1].category,
    date: blogPosts[1].date,
    author: blogPosts[1].author,
  },
  {
    id: 3,
    slug: 'ladakh-road-trip-tips',
    title: blogPosts[2].title,
    excerpt: blogPosts[2].excerpt,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=250&fit=crop',
    category: blogPosts[2].category,
    date: blogPosts[2].date,
    author: blogPosts[2].author,
  },
  {
    id: 4,
    slug: 'kerala-backwaters-houseboat-guide',
    title: blogPosts[3].title,
    excerpt: blogPosts[3].excerpt,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop',
    category: blogPosts[3].category,
    date: blogPosts[3].date,
    author: blogPosts[3].author,
  },
];

const gridArticles = [
  {
    id: 5,
    slug: 'indian-food-trail',
    title: blogPosts[4].title,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop',
    category: blogPosts[4].category,
    date: blogPosts[4].date,
    author: blogPosts[4].author,
  },
  {
    id: 6,
    slug: 'sustainable-travel-india',
    title: blogPosts[5].title,
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=400&h=250&fit=crop',
    category: blogPosts[5].category,
    date: blogPosts[5].date,
    author: blogPosts[5].author,
  },
  {
    id: 7,
    slug: 'best-time-to-visit-kerala',
    title: 'Why Kerala Should Be Your First Trip to India',
    image: 'https://images.unsplash.com/photo-1594818379496-db5a7e5f1b46?w=400&h=250&fit=crop',
    category: 'Destinations',
    date: 'July 15, 2026',
    author: 'Wanderlust Team',
  },
  {
    id: 8,
    slug: 'rajasthan-desert-camp-guide',
    title: 'A Photographer\'s Guide to Rajasthan',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=250&fit=crop',
    category: 'Culture',
    date: 'July 10, 2026',
    author: 'Wanderlust Team',
  },
  {
    id: 9,
    slug: 'ladakh-road-trip-tips',
    title: 'Monsoon Travel in India: Best Destinations',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    category: 'Travel Tips',
    date: 'July 5, 2026',
    author: 'Wanderlust Team',
  },
  {
    id: 10,
    slug: 'kerala-backwaters-houseboat-guide',
    title: 'Hidden Gems of Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&h=250&fit=crop',
    category: 'Adventure',
    date: 'June 28, 2026',
    author: 'Wanderlust Team',
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
            <Link to={`/blog/${featuredArticle.slug}`} className="group block">
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
                <Link to={`/blog/${article.slug}`} className="group flex gap-4">
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
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
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
              <Link to={`/blog/${article.slug}`} className="group block">
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
            Let us help you plan an unforgettable Indian adventure that you'll be writing about for years to come.
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
