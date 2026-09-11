import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const postsData = {
  1: {
    title: 'The Hidden Temples of Bali: A Spiritual Journey Through Ancient Java',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&h=600&fit=crop',
    category: 'Culture',
    date: 'September 5, 2026',
    author: 'Sarah Mitchell',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    excerpt: 'Discover the mystical temples tucked away in the lush jungles of Bali.',
    body: [
      { type: 'paragraph', content: 'The morning mist clings to the ancient stones as we ascend the final steps to Pura Lempuyang. This is not the Bali of resort brochures — this is something older, deeper, and infinitely more moving. Hidden among the volcanic peaks and terraced rice paddies of eastern Bali lie temples that most visitors never see.' },
      { type: 'paragraph', content: 'Our journey begins in the pre-dawn darkness, guided by local priest Ketut Wija, whose family has tended these sacred grounds for seven generations. The air is thick with the scent of frangipani and burning incense as we navigate narrow paths carved through centuries of jungle growth.' },
      { type: 'heading', content: 'The Gates of Heaven' },
      { type: 'paragraph', content: 'Pura Lempuyang, often called the "Gates of Heaven," is one of the oldest and most revered temples in Bali. The iconic split gateway frames Mount Agung, Bali\'s highest volcano, creating a scene that feels almost otherworldly. But the real magic happens when you step beyond the famous photo spot and explore the upper temples.' },
      { type: 'paragraph', content: 'Climbing the 1,700 steps to the summit temple is a pilgrimage in every sense. Each of the seven temples along the route represents a different stage of spiritual ascent. The locals move slowly, pausing to pray at each station, their offerings of flowers and rice creating colorful patterns on the dark stone.' },
      { type: 'heading', content: 'Sacred Rituals and Ancient Traditions' },
      { type: 'paragraph', content: 'What makes these hidden temples truly special is the living tradition they represent. Unlike many historical sites around the world, these are not museum pieces — they are active places of worship where Balinese Hindu traditions have been practiced continuously for over a thousand years.' },
      { type: 'paragraph', content: 'During our visit, we witnessed a melasti ceremony — a purification ritual held before the Balinese New Year. Hundreds of villagers processed to the temple, carrying sacred objects wrapped in white cloth. The chanting, the gamelan music, and the communal energy created an atmosphere of profound spiritual significance.' },
      { type: 'heading', content: 'Practical Tips for Temple Visitors' },
      { type: 'paragraph', content: 'If you\'re planning to visit these hidden temples, there are a few important things to know. First, dress respectfully — sarongs and sashes are required and can be borrowed at the entrance. Second, always ask permission before photographing ceremonies or worshippers. Third, consider hiring a local guide who can explain the significance of what you\'re seeing.' },
      { type: 'paragraph', content: 'The best time to visit is during the early morning hours when the light is soft and the temples are less crowded. Many of the hidden temples can only be reached by hiring a local driver, as they\'re not on the typical tourist routes. This is part of their charm — they remain authentic and peaceful, far from the crowds that flock to Tanah Lot and Uluwatu.' },
    ],
    takeaways: [
      'Pura Lempuyang\'s seven temples represent stages of spiritual ascent with 1,700 steps to climb',
      'These are living temples — active places of worship, not just historical sites',
      'Hire a local guide to understand the significance of rituals and architecture',
      'Visit in early morning for best light and fewer crowds',
      'Always dress respectfully with sarong and sash provided at entrances',
    ],
  },
  2: {
    title: 'Street Food Adventures in Bangkok',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&h=600&fit=crop',
    category: 'Food',
    date: 'September 2, 2026',
    author: 'James Chen',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    excerpt: 'From pad thai to mango sticky rice, explore the vibrant street food scene.',
    body: [
      { type: 'paragraph', content: 'Bangkok is a city that lives and breathes through its street food. Every corner, every alley, every market stall tells a story of flavors passed down through generations. This isn\'t just eating — it\'s an immersive cultural experience that engages all your senses.' },
      { type: 'paragraph', content: 'Our food journey begins at dawn in Chinatown\'s Yaowarat Road, where vendors set up their portable kitchens before the sun rises. The sizzle of woks, the aroma of charcoal-grilled meats, and the rhythmic chopping of cleavers create a symphony of culinary preparation.' },
      { type: 'heading', content: 'The Essential Dishes' },
      { type: 'paragraph', content: 'No Bangkok food tour is complete without pad thai, but the version you\'ll find on the streets bears little resemblance to what you\'ve had at home. The noodles are smoky from the wok, the tamarind sauce perfectly balanced between sweet and sour, and the fresh bean sprouts add a satisfying crunch that ties everything together.' },
      { type: 'paragraph', content: 'Then there\'s som tum — green papaya salad that packs a punch of flavor: spicy, sour, sweet, and salty all at once. Watch the vendor pound it in a clay mortar, adding ingredients to order. The sound of the pestle is Bangkok\'s culinary heartbeat.' },
      { type: 'heading', content: 'Hidden Gems Off the Tourist Trail' },
      { type: 'paragraph', content: 'While the famous markets like Chatuchak and Khao San Road have their charm, the real magic lies in the neighborhoods where locals eat. In Ari, a residential area popular with young professionals, you\'ll find innovative takes on traditional dishes alongside classic recipes that haven\'t changed in decades.' },
      { type: 'paragraph', content: 'The Rot Fai night market in the eastern part of the city offers a more local experience than its famous counterpart near Chatuchak. Here, families gather at communal tables, sharing plates of grilled seafood, Isaan sausages, and bowls of boat noodles while live music plays in the background.' },
      { type: 'heading', content: 'Eating Etiquette and Tips' },
      { type: 'paragraph', content: 'Bangkok street food culture has its own set of unwritten rules. Don\'t sit at a table unless you plan to order from that vendor. Chopsticks are for noodle dishes only — use a spoon and fork for rice-based meals. And always finish what you take — leaving food uneaten is considered wasteful and disrespectful.' },
    ],
    takeaways: [
      'Bangkok\'s street food is best experienced in local neighborhoods like Ari and Rot Fai',
      'Start your food tour at dawn in Chinatown for the most authentic experience',
      'Use chopsticks only for noodle dishes; use spoon and fork for rice-based meals',
      'Never sit at a table unless you plan to order from that vendor',
      'Mango sticky rice from street vendors rivals any restaurant dessert',
    ],
  },
};

const defaultPost = {
  title: 'Travel Article',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=600&fit=crop',
  category: 'Travel',
  date: 'September 1, 2026',
  author: 'Wanderlust Team',
  authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  excerpt: 'An inspiring travel story from the Wanderlust Travels team.',
  body: [
    { type: 'paragraph', content: 'Travel has a way of transforming us, of opening our eyes to new perspectives and possibilities. Every journey begins with a single step, and the stories we collect along the way become the chapters of our lives.' },
    { type: 'paragraph', content: 'At Wanderlust Travels, we believe that travel should be more than just visiting places — it should be about connecting with people, understanding cultures, and creating memories that last a lifetime.' },
  ],
  takeaways: [
    'Every journey begins with curiosity and an open mind',
    'The best travel experiences come from genuine cultural connections',
  ],
};

const relatedArticles = [
  {
    id: 5,
    title: 'Hiking the Inca Trail: A Complete Guide',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=250&fit=crop',
    category: 'Adventure',
    date: 'August 18, 2026',
  },
  {
    id: 6,
    title: 'Best Time to Visit Kyoto for Cherry Blossoms',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop',
    category: 'Nature',
    date: 'August 12, 2026',
  },
  {
    id: 7,
    title: 'Exploring the Markets of Marrakech',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&h=250&fit=crop',
    category: 'Culture',
    date: 'August 8, 2026',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = postsData[id] || { ...defaultPost, id: Number(id) || 1 };

  return (
    <div className="min-h-screen bg-ivory">
      <title>{post.title} | Wanderlust Travels</title>

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-[1320px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-terracotta font-semibold text-sm uppercase tracking-wide">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-5xl text-white mt-2 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
                <span>{post.date}</span>
                <span>·</span>
                <span>By {post.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Share Bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-charcoal">{post.author}</p>
              <p className="text-xs text-charcoal/50">{post.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-charcoal/50 hidden sm:inline">Share:</span>
            <button className="w-9 h-9 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {post.body.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="font-heading text-2xl md:text-3xl text-charcoal mt-10 mb-4">
                  {block.content}
                </h2>
              );
            }
            return (
              <p key={i} className="text-charcoal/80 text-lg leading-relaxed mb-6">
                {block.content}
              </p>
            );
          })}
        </motion.div>

        {/* Key Takeaways */}
        {post.takeaways && (
          <div className="mt-12 bg-white rounded-xl p-8 border border-neutral-200">
            <h3 className="font-heading text-2xl text-charcoal mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              {post.takeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal/80">
                  <svg className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* Related Articles */}
      <section className="max-w-[1320px] mx-auto px-6 lg:px-8 pb-20">
        <h2 className="font-heading text-3xl text-charcoal mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link to={`/blog/${article.id}`} className="group block">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-xs font-semibold text-terracotta uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="font-heading text-xl text-charcoal group-hover:text-forest transition-colors mt-1">
                    {article.title}
                  </h3>
                  <p className="text-sm text-charcoal/50 mt-1">{article.date}</p>
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
            Inspired by This Story?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you create your own unforgettable travel experience.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-terracotta hover:bg-terracotta/90 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Plan Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
