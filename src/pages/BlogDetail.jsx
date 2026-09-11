import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const postsData = {
  'best-time-to-visit-kerala': {
    title: 'The Best Time to Visit Kerala: A Complete Month-by-Month Guide',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400&h=600&fit=crop',
    category: 'Travel Tips',
    date: '15 August 2026',
    author: 'Wanderlust Team',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    excerpt: 'Planning a trip to Kerala? Here\'s everything you need to know about the best time to visit.',
    body: [
      { type: 'paragraph', content: 'Kerala is a year-round destination, but the experience changes dramatically depending on when you visit. The state has three main seasons — monsoon, summer, and winter — each offering a unique perspective of God\'s Own Country.' },
      { type: 'paragraph', content: 'The monsoon season (June to September) transforms Kerala into a lush green paradise. While heavy rains might limit outdoor activities, this is the best time for Ayurvedic treatments. Many resorts offer special monsoon packages with traditional Panchakarma therapies.' },
      { type: 'heading', content: 'Winter: The Peak Season' },
      { type: 'paragraph', content: 'Winter (October to February) is the peak tourist season, and for good reason. The weather is pleasant with temperatures ranging from 22°C to 32°C, making it perfect for houseboat cruises, beach visits, and hill station exploration. This is when Kerala truly shines.' },
      { type: 'paragraph', content: 'Summer (March to May) brings warmer temperatures, but the hill stations of Munnar, Wayanad, and Thekkady offer a cool escape. This is also a great time for wildlife spotting, as animals gather around water sources.' },
      { type: 'heading', content: 'Our Recommendation' },
      { type: 'paragraph', content: 'Our recommendation: Visit between November and February for the best overall experience. If you love monsoons and Ayurveda, June to August has its own charm.' },
    ],
    takeaways: [
      'Kerala has three main seasons: monsoon, summer, and winter',
      'Winter (Oct-Feb) is the peak season with pleasant weather for all activities',
      'Monsoon (Jun-Sep) is ideal for Ayurvedic treatments and lush green scenery',
      'Summer hill stations offer a cool escape from the heat',
      'November to February offers the best overall experience',
    ],
  },
  'rajasthan-desert-camp-guide': {
    title: 'Your Ultimate Guide to Desert Camping in Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1400&h=600&fit=crop',
    category: 'Destinations',
    date: '10 August 2026',
    author: 'Wanderlust Team',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    excerpt: 'Sleep under a million stars in the Thar Desert. Here\'s everything you need to know about desert camping in Jaisalmer.',
    body: [
      { type: 'paragraph', content: 'There\'s something profoundly magical about spending a night in the Thar Desert. The golden sand dunes, the vast starlit sky, and the traditional Rajasthani folk music create an experience that stays with you forever.' },
      { type: 'heading', content: 'Choosing Your Desert Camp' },
      { type: 'paragraph', content: 'The best desert camps are located near Sam Sand Dunes, about 42 km from Jaisalmer. These range from budget-friendly tent stays to ultra-luxury glamping experiences with private butlers and gourmet dining.' },
      { type: 'paragraph', content: 'A typical desert camp experience includes a jeep safari to the dunes, a camel ride at sunset, traditional Rajasthani dinner with folk music and dance performances, and stargazing in the clear desert sky.' },
      { type: 'heading', content: 'What to Pack' },
      { type: 'paragraph', content: 'Pack light cotton clothes for the day and a warm layer for the night — desert temperatures can drop significantly after sunset. Don\'t forget sunscreen, sunglasses, and a good camera.' },
      { type: 'paragraph', content: 'We recommend booking at least 2 weeks in advance during peak season (October to March). Many camps sell out quickly during Christmas and New Year.' },
    ],
    takeaways: [
      'Best desert camps are near Sam Sand Dunes, 42 km from Jaisalmer',
      'Experiences include jeep safari, camel ride, folk music, and stargazing',
      'Pack light layers — desert temperatures drop significantly at night',
      'Book at least 2 weeks in advance during peak season (Oct-Mar)',
      'Camps range from budget tents to ultra-luxury glamping',
    ],
  },
  'ladakh-road-trip-tips': {
    title: '10 Essential Tips for a Ladakh Road Trip',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1400&h=600&fit=crop',
    category: 'Adventure',
    date: '5 August 2026',
    author: 'Wanderlust Team',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    excerpt: 'Dreaming of a Ladakh road trip? These essential tips will help you prepare for the adventure of a lifetime.',
    body: [
      { type: 'paragraph', content: 'A Ladakh road trip is on every adventure traveler\'s bucket list, and rightfully so. The dramatic landscapes, high-altitude passes, and the thrill of the journey make it one of the greatest road trips in the world.' },
      { type: 'heading', content: 'Acclimatize Properly' },
      { type: 'paragraph', content: 'First and foremost — acclimatize properly. Leh sits at 11,500 feet, and altitude sickness is a real concern. Spend at least 24 hours resting in Leh before heading to higher altitudes.' },
      { type: 'paragraph', content: 'The best time to drive to Ladakh is from June to September when the Srinagar-Leh and Manali-Leh highways are open. Always check road conditions before setting out, as landslides can cause unexpected closures.' },
      { type: 'heading', content: 'Essential Packing' },
      { type: 'paragraph', content: 'Pack essential medications including Diamox (for altitude sickness), basic first-aid supplies, and plenty of warm clothing. Temperatures can drop below zero even in summer at high passes.' },
      { type: 'paragraph', content: 'Fuel up whenever you can — petrol pumps are sparse between towns. Carry extra water and dry snacks. A power bank is essential as charging points are limited.' },
      { type: 'heading', content: 'Stay Flexible' },
      { type: 'paragraph', content: 'Most importantly, be flexible. Weather in Ladakh can change rapidly, and road conditions are unpredictable. The best experiences often come from unplanned stops along the way.' },
    ],
    takeaways: [
      'Acclimatize for at least 24 hours in Leh before heading higher',
      'Best time: June to September when highways are open',
      'Pack Diamox, warm clothing, and first-aid supplies',
      'Fuel up whenever possible — petrol pumps are sparse',
      'Be flexible — the best experiences are often unplanned',
    ],
  },
  'kerala-backwaters-houseboat-guide': {
    title: 'Kerala Houseboats: Everything You Need to Know Before You Book',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400&h=600&fit=crop',
    category: 'Travel Tips',
    date: '1 August 2026',
    author: 'Wanderlust Team',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    excerpt: 'Houseboats are Kerala\'s most iconic experience. Here\'s how to choose the right one and what to expect.',
    body: [
      { type: 'paragraph', content: 'A stay on a Kerala houseboat (known locally as a Kettuvallam) is an experience like no other. These traditional rice barges, converted into floating hotels, glide through the serene backwaters of Alleppey and Kumarakom.' },
      { type: 'heading', content: 'Choosing Your Houseboat' },
      { type: 'paragraph', content: 'Houseboats range from budget to ultra-luxury. Budget boats offer basic amenities with a crew of two (a captain and a cook). Premium and luxury houseboats feature air-conditioned bedrooms, modern bathrooms, sun decks, and multi-course meals prepared on board.' },
      { type: 'paragraph', content: 'The standard houseboat cruise covers Alleppey backwaters, passing through narrow canals lined with coconut palms, village life, and paddy fields. Most cruises start in the late morning and continue until the next morning.' },
      { type: 'heading', content: 'Booking Tips' },
      { type: 'paragraph', content: 'Book in advance during peak season (October to February). Weekend rates are typically higher than weekday rates. For the most peaceful experience, opt for a weekday cruise.' },
      { type: 'paragraph', content: 'Don\'t miss the freshly prepared Kerala meal served on board — the fish curry, karimeen (pearl spot fish), and appam are exceptional. The crew often sources ingredients from local markets along the route.' },
    ],
    takeaways: [
      'Kerala houseboats (Kettuvallam) are traditional rice barges converted into floating hotels',
      'Options range from budget to ultra-luxury with AC and sun decks',
      'Standard cruises cover Alleppey backwaters through coconut palm-lined canals',
      'Book in advance for Oct-Feb peak season; weekdays are more peaceful',
      'Don\'t miss the freshly prepared Kerala meal on board',
    ],
  },
  'indian-food-trail': {
    title: 'A Food Lover\'s Guide to Traveling Through India',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1400&h=600&fit=crop',
    category: 'Culture',
    date: '25 July 2026',
    author: 'Wanderlust Team',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    excerpt: 'India is a food paradise. From Kerala\'s fish curry to Rajasthan\'s dal bati, here\'s a culinary journey across the country.',
    body: [
      { type: 'paragraph', content: 'India\'s culinary diversity is as vast as its geographical diversity. Every state, every city, and sometimes every neighborhood has its own specialty. For food-loving travelers, India is an endless adventure.' },
      { type: 'heading', content: 'Kerala: The Spice Coast' },
      { type: 'paragraph', content: 'Start in Kerala for the freshest seafood — karimeen fry, prawn moilee, and appam with stew are must-tries. Don\'t miss the traditional Sadhya, a vegetarian feast served on a banana leaf during festivals.' },
      { type: 'heading', content: 'Rajasthan: Royal Kitchens' },
      { type: 'paragraph', content: 'Rajasthan offers hearty Rajasthani thalis — dal baati churma, ker sangri, and laal maas. The royal kitchens of Udaipur and Jaipur serve elaborate versions of these traditional dishes.' },
      { type: 'paragraph', content: 'In Himachal Pradesh, try the local siddu (steamed bread), madra (chickpea curry), and the ubiquitous dham — a traditional feast served during festivals.' },
      { type: 'paragraph', content: 'Goa\'s cuisine reflects its Portuguese heritage — fish recheado, pork vindaloo, and bebinca (layered dessert) are must-tries. The beach shacks serve some of the freshest seafood you\'ll ever taste.' },
    ],
    takeaways: [
      'India\'s culinary diversity matches its geographical diversity',
      'Kerala: karimeen fry, prawn moilee, appam, and traditional Sadhya feast',
      'Rajasthan: dal baati churma, ker sangri, and laal maas',
      'Himachal: siddu, madra, and traditional dham feast',
      'Goa: fish recheado, pork vindaloo, and bebinca',
    ],
  },
  'sustainable-travel-india': {
    title: 'How to Travel Sustainably in India',
    image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1400&h=600&fit=crop',
    category: 'Sustainability',
    date: '20 July 2026',
    author: 'Wanderlust Team',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    excerpt: 'Travel responsibly and leave a positive impact. Here are practical tips for sustainable travel in India.',
    body: [
      { type: 'paragraph', content: 'As travelers, we have the power to make a positive impact on the places we visit. Sustainable travel isn\'t about sacrificing comfort — it\'s about making conscious choices that benefit local communities and the environment.' },
      { type: 'heading', content: 'Choose Local Accommodations' },
      { type: 'paragraph', content: 'Start by choosing locally owned accommodations over international chains. Homestays and guesthouses not only offer a more authentic experience but also directly support local families and economies.' },
      { type: 'paragraph', content: 'Reduce plastic usage by carrying a reusable water bottle and shopping bag. Many destinations in India still lack proper waste management, and your small effort can make a significant difference.' },
      { type: 'heading', content: 'Respect Local Culture' },
      { type: 'paragraph', content: 'Respect local cultures and traditions. Dress modestly when visiting temples and religious sites. Ask permission before photographing people, especially in rural areas.' },
      { type: 'paragraph', content: 'Support local artisans by purchasing handicrafts directly from them instead of souvenir shops. This ensures fair prices for the artisans and authentic souvenirs for you.' },
      { type: 'paragraph', content: 'Choose eco-friendly tour operators who follow responsible tourism practices. Ask about their policies on waste management, water conservation, and community support.' },
    ],
    takeaways: [
      'Choose locally owned homestays and guesthouses over international chains',
      'Carry a reusable water bottle and shopping bag to reduce plastic',
      'Dress modestly at temples and ask before photographing people',
      'Buy handicrafts directly from artisans for fair prices and authentic souvenirs',
      'Choose eco-friendly tour operators with responsible tourism policies',
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
    slug: 'best-time-to-visit-kerala',
    title: 'The Best Time to Visit Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop',
    category: 'Travel Tips',
    date: '15 August 2026',
  },
  {
    slug: 'rajasthan-desert-camp-guide',
    title: 'Desert Camping in Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=250&fit=crop',
    category: 'Destinations',
    date: '10 August 2026',
  },
  {
    slug: 'ladakh-road-trip-tips',
    title: 'Ladakh Road Trip Tips',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&h=250&fit=crop',
    category: 'Adventure',
    date: '5 August 2026',
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
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link to={`/blog/${article.slug}`} className="group block">
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
            Let us help you create your own unforgettable travel experience in India.
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
