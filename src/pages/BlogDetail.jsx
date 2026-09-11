import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { generateWhatsAppUrl } from '../utils/whatsapp';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Slow Travel: Why Less Is More',
    excerpt: 'In a world obsessed with bucket lists and rushing from landmark to landmark, we explore the transformative power of lingering longer in a single destination.',
    category: 'Travel Tips',
    date: 'March 15, 2024',
    readTime: '8 min read',
    slug: 'art-of-slow-travel',
    content: [
      'In an age where social media tempts us to collect passport stamps like currency, there exists a quieter, more rewarding approach to exploring our world. Slow travel is not merely about spending more time in one place — it is a philosophy that prioritizes depth over breadth, connection over consumption, and presence over progress.',
      'When we linger in a destination, we begin to notice the rhythms that define local life. The café owner who remembers your order after the second morning. The evening market vendor who saves you the best produce. The neighbor who waves from their balcony as you return from a walk. These micro-connections are the invisible threads that weave us into the fabric of a place.',
      'The practical benefits are equally compelling. Staying longer in one location reduces the carbon footprint of constant transit, allows for deeper cultural immersion, and often proves more economical than a whirlwind tour of multiple destinations. You gain the luxury of spontaneity — the freedom to follow an unexpected recommendation, to revisit a beloved spot, or simply to sit with a book in a garden you have come to call your own.',
      'Consider, for instance, spending a full month in a single Italian village rather than racing through Rome, Florence, and Venice in ten days. You would shop at the local market, learn to prepare regional dishes, discover walking paths known only to residents, and perhaps even develop a friendship or two that extends beyond the transactional.',
      'Slow travel asks us to resist the urge to optimize every moment and instead embrace the beauty of unhurried discovery. It is the antithesis of efficiency, and therein lies its power. When we stop rushing, we start seeing. And in that seeing, we find the transformative experiences that travel promises but hurry so often steals.',
    ],
  },
  {
    id: 2,
    title: 'Hidden Temples of Bali: A Guide to Sacred Spaces',
    excerpt: 'Beyond the well-known temples lie sacred spaces where ancient rituals continue undisturbed.',
    category: 'Destinations',
    date: 'March 10, 2024',
    readTime: '6 min read',
    slug: 'hidden-temples-bali',
    content: [
      'Bali\'s most famous temples — Tanah Lot, Uluwatu, Besakih — draw millions of visitors annually. But beyond these celebrated landmarks exist sacred spaces where Balinese spiritual life continues as it has for centuries, undisturbed by the rhythms of tourism.',
      'In the highlands above Ubud, Pura Gunung Kawi Sebatu sits surrounded by gardens of extraordinary beauty. Fed by natural springs, its crystal-clear pools reflect ancient stone carvings with mirror-like precision. Here, the only sounds are flowing water and the occasional offerings being placed by local devotees.',
      'Further east, Tirta Gangga\'s lesser-known neighbor, Pura Lidah, offers a more intimate water temple experience. Without the crowds that congregate at the water palace, visitors can observe purification ceremonies in their most authentic form, guided only by the gentle presence of temple guardians.',
      'The key to experiencing Bali\'s hidden temples lies in approaching them with respect and humility. Dress appropriately, observe from a respectful distance during ceremonies, and consider hiring a local guide who can illuminate the spiritual significance of what you witness. These are not museums — they are living, breathing spaces of worship.',
      'To visit these temples is to understand that Bali\'s true magic resides not in its Instagram-famous gates, but in the quiet devotion that permeates every corner of this extraordinary island.',
    ],
  },
  {
    id: 3,
    title: 'Luxury Safari Lodges That Redefine Wildlife Travel',
    excerpt: 'From private conservancies to community-owned camps, discover extraordinary wildlife encounters with uncompromising luxury.',
    category: 'Luxury',
    date: 'March 5, 2024',
    readTime: '10 min read',
    slug: 'luxury-safari-lodges',
    content: [
      'The modern luxury safari has evolved far beyond the canvas tent and bucket shower. Today\'s finest lodges combine extraordinary wildlife access with architectural vision, culinary excellence, and a deep commitment to conservation and community.',
      'In Kenya\'s Laikipia Plateau, private conservancies have pioneered a model where luxury travel directly funds wildlife protection. Guests at lodges like Segera and Lewa Wilderness enjoy intimate encounters with endangered species while knowing their presence supports anti-poaching patrols, habitat restoration, and community development programs.',
      'Tanzania\'s mobile camps follow the great migration, offering front-row seats to one of nature\'s greatest spectacles without sacrificing an ounce of comfort. Imagine sipping sundowners as a million wildebeest thunder past your luxury tent, knowing that tomorrow you will wake in a different location, following the herds.',
      'The true luxury of these experiences lies not in thread counts or champagne brands, but in the privilege of witnessing wildlife in its purest form — undisturbed, unmanaged, and utterly wild. It is a luxury that money alone cannot buy; it requires the stewardship and vision that the best safari operators bring to their work.',
      'When selecting a luxury safari lodge, prioritize those with genuine conservation credentials, community ownership or partnership models, and a track record of employing and empowering local people. The most exclusive experience is one that leaves the wilderness richer than you found it.',
    ],
  },
  {
    id: 4,
    title: 'The Culinary Roadmaps of Southeast Asia',
    excerpt: 'A journey through the region\'s most extraordinary food cultures.',
    category: 'Culture',
    date: 'February 28, 2024',
    readTime: '7 min read',
    slug: 'culinary-southeast-asia',
    content: [
      'Southeast Asia\'s culinary landscape is among the most diverse and thrilling on Earth. From the complex spice pastes of Thailand to the subtle umami of Vietnamese cuisine, every nation offers a gastronomic journey that reflects its history, geography, and cultural soul.',
      'In Thailand, the best meals often come from the simplest settings. A plastic stool at a Bangkok night market, a family-run shophouse in Chiang Mai, or a beachside grill on a southern island — these are the stages upon which Thai cuisine performs its daily magic. The key is freshness: herbs picked that morning, seafood caught hours before, and rice ground fresh at the local mill.',
      'Vietnam offers a masterclass in balance. The pho of Hanoi, fragrant with star anise and cinnamon, is a study in restraint. The banh mi of Saigon tells the story of French colonialism and Vietnamese ingenuity in a single bite. Every dish is an equation of sweet, sour, salty, and spicy, calibrated with precision that borders on alchemy.',
      'In Indonesia, the rendang of West Sumatra — slow-cooked for hours until the coconut milk reduces to a dark, fragrant coating — represents the patience and depth that define the archipelago\'s culinary traditions. Each region, each island, each village offers its own variations, making Indonesia a lifetime\'s worth of discovery for the food-obsessed traveler.',
      'The greatest culinary journeys in Southeast Asia are not planned around restaurant reservations but around curiosity. Follow the smoke, listen to the sizzle, and trust that the best meal of your life is being prepared on a stove you have not yet found.',
    ],
  },
  {
    id: 5,
    title: 'Patagonia Untamed: Adventure at the Edge of the World',
    excerpt: 'We trek through the last frontier of wilderness.',
    category: 'Adventure',
    date: 'February 20, 2024',
    readTime: '9 min read',
    slug: 'patagonia-untamed',
    content: [
      'At the southern tip of South America, where the Andes meet the sea, lies Patagonia — a landscape of such raw, elemental beauty that it redefines one\'s understanding of wilderness. Glaciers calve into turquoise lakes. Granite spires pierce clouds that race across an endless sky. Guanacos graze on windswept steppes where no road reaches.',
      'The Torres del Paine circuit is among the world\'s great treks, a multi-day journey through landscapes that shift from dense forest to alpine desert to glacier-carved valleys. Each day brings a new panorama, each turn reveals a vista that photographs cannot capture because Patagonia is a place that must be felt — the wind on your face, the cold in your bones, the silence between gusts.',
      'Further south, the Carretera Austral winds through Chilean Patagonia\'s most remote corners. Here, the traveler encounters几乎没有 other visitors. Foxes cross the road ahead of you. Condors circle above. Hot springs offer warmth after days of exposure to the elements. It is travel stripped to its most essential: man, machine, and wilderness.',
      'The luxury of Patagonia lies not in what is provided but in what is absent. There is no noise, no crowd, no distraction. There is only the landscape, vast and indifferent and breathtakingly beautiful, asking nothing of you except your presence and your respect.',
      'To visit Patagonia is to understand that wilderness is not merely a geographic concept but a state of being. It is to remember what the world looked like before we rearranged it to suit our convenience. And it is to carry that memory forward, as a reminder of what we must protect.',
    ],
  },
  {
    id: 6,
    title: 'The Revival of Rail Travel Across Europe',
    excerpt: 'As sustainable luxury gains momentum, train journeys are experiencing a renaissance.',
    category: 'Destinations',
    date: 'February 15, 2024',
    readTime: '6 min read',
    slug: 'rail-travel-europe',
    content: [
      'There is a romance to rail travel that no other mode of transport can replicate. The gentle rocking of the carriage, the ever-changing landscape framed by large windows, the convivial atmosphere of the dining car — these are experiences that transform transit into journey.',
      'Europe\'s rail network is experiencing a renaissance, driven by both sustainability concerns and a growing appreciation for the journey itself. New night train services connect cities that were previously only linked by short-haul flights, while luxury rail experiences like the Venice Simplon-Orient-Express and the Glacier Express offer travel as an art form.',
      'The environmental case for rail is compelling: a train journey produces a fraction of the carbon emissions of an equivalent flight. But the experiential case may be even stronger. Arriving in a city by train, having watched the countryside transform around you, creates a sense of arrival that an airport transfer simply cannot match.',
      'For the luxury traveler, rail offers unique advantages. Private compartments, fine dining, and the freedom to move about the train create a social and spatial experience that airlines have forgotten how to provide. It is, in many ways, the original luxury travel — and it is returning to prominence with grace and style.',
      'We recommend building rail journeys into itineraries not as a means of getting from A to B, but as an experience in itself. The journey is, after all, the destination.',
    ],
  },
];

const blogImages = {
  1: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',
  2: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
  3: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80',
  4: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=1600&q=80',
  5: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',
  6: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80',
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <main className="bg-ivory min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-charcoal mb-4">Article Not Found</h1>
          <Link to="/blog" className="font-body text-primary-500 hover:underline">
            Return to Journal
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="bg-ivory min-h-screen">
      {/* HERO — Full image */}
      <section className="relative h-[50vh] min-h-[350px]">
        <img
          src={blogImages[post.id]}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-body text-xs uppercase tracking-wider text-primary-500 bg-charcoal/60 backdrop-blur-sm px-3 py-1.5 rounded-lg mb-4">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-3xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm font-body text-white/70">
                <span>{post.date}</span>
                <span className="text-white/30">|</span>
                <span>{post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-body text-lg text-stone-500 italic leading-relaxed mb-10 pb-10 border-b border-stone-200/50">
              {post.excerpt}
            </p>
            <div className="space-y-8">
              {post.content.map((paragraph, i) => (
                <p key={i} className="font-body text-stone-600 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16 md:py-20 bg-ivory-soft">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3 text-center">Continue Reading</p>
          <h2 className="font-heading text-2xl md:text-3xl text-charcoal text-center mb-12">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relPost, i) => (
              <motion.div
                key={relPost.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${relPost.slug}`} className="block group">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="overflow-hidden h-40">
                      <img
                        src={blogImages[relPost.id]}
                        alt={relPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="font-body text-xs uppercase tracking-wider text-primary-500 mb-2 block">{relPost.category}</span>
                      <h3 className="font-heading text-base text-charcoal mb-2 group-hover:text-primary-500 transition-colors">{relPost.title}</h3>
                      <p className="font-body text-stone-500 text-sm line-clamp-2">{relPost.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wider text-charcoal border border-stone-300 px-6 py-3 rounded-lg hover:border-charcoal transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Journal
            </Link>
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
              Inspired to Write Your Own Chapter?
            </h2>
            <p className="font-body text-stone-500 leading-relaxed mb-8 max-w-lg mx-auto">
              Let us craft a journey that gives you stories worth telling. Your next adventure awaits.
            </p>
            <a
              href={generateWhatsAppUrl("Hello! I've been reading your blog and would love to plan a journey.")}
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
