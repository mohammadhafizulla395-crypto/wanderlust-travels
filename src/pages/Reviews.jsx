import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { generateWhatsAppUrl } from '../utils/whatsapp';

const reviews = [
  {
    id: 1,
    name: 'Alexandra & James',
    location: 'London, UK',
    rating: 5,
    text: 'An absolutely transformative experience. Every detail was considered, from the private villa overlooking the rice terraces to the midnight hot air balloon ride over the savannah. This was not just a trip — it was a revelation.',
    trip: 'Bali & Kenya',
    date: 'March 2024',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'The depth of local knowledge and access they provided was unlike anything we have experienced before. We dined in homes, explored hidden temples, and witnessed ceremonies rarely seen by outsiders.',
    trip: 'Japan & Vietnam',
    date: 'January 2024',
  },
  {
    id: 3,
    name: 'The Williams Family',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'Traveling with three teenagers can be challenging, but they crafted an itinerary that kept everyone engaged. The children still talk about the gorilla trekking and the cooking class in Marrakech.',
    trip: 'East Africa & Morocco',
    date: 'December 2023',
  },
  {
    id: 4,
    name: 'Henrik & Søren',
    location: 'Copenhagen, Denmark',
    rating: 5,
    text: 'Impeccable taste and extraordinary attention to detail. They understood our desire for quiet luxury and delivered a journey that was both sophisticated and deeply authentic.',
    trip: 'Iceland & Norway',
    date: 'February 2024',
  },
  {
    id: 5,
    name: 'Isabella Rossi',
    location: 'Milan, Italy',
    rating: 5,
    text: 'From the moment I made the first inquiry to my return home, the care and professionalism were exceptional. They found experiences I did not know existed in destinations I thought I knew well.',
    trip: 'Patagonia & Peru',
    date: 'November 2023',
  },
  {
    id: 6,
    name: 'David & Margaret Chen',
    location: 'San Francisco, USA',
    rating: 5,
    text: 'For our anniversary, they created a journey through the Scottish Highlands that was pure poetry. Private whisky tastings, a castle dinner, and a sunrise hike guided by a local historian.',
    trip: 'Scotland & Ireland',
    date: 'April 2024',
  },
];

const stats = [
  { number: '2,500+', label: 'Happy Travelers' },
  { number: '5.0', label: 'Average Rating' },
  { number: '98%', label: 'Would Return' },
  { number: '100%', label: 'Bespoke Journeys' },
];

const trustItems = [
  { icon: 'shield', title: 'Protected Booking', description: 'Full financial protection on every journey booked through us.' },
  { icon: 'headset', title: '24/7 Support', description: 'Your dedicated concierge is available around the clock, wherever you are.' },
  { icon: 'award', title: 'Award-Winning', description: 'Recognized by Condé Nast Traveler and Travel + Leisure for excellence.' },
  { icon: 'handshake', title: 'Trusted Partners', description: 'Exclusive relationships with the finest hotels and local operators worldwide.' },
];

const featured = {
  quote: 'They did not just plan a trip for us. They created a life-changing experience that brought our family closer together and gave us stories we will tell for generations.',
  author: 'The Harrington Family',
  location: 'New York, USA',
  rating: 5,
};

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TrustIcon({ icon }) {
  if (icon === 'shield') {
    return (
      <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  }
  if (icon === 'headset') {
    return (
      <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    );
  }
  if (icon === 'award') {
    return (
      <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.013 6.013 0 01-1.77.506 6.013 6.013 0 01-1.77-.506m3.54 0a6.013 6.013 0 01-1.77.506 6.013 6.013 0 01-1.77-.506" />
      </svg>
    );
  }
  if (icon === 'handshake') {
    return (
      <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    );
  }
  return null;
}

export default function Reviews() {
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
                  alt="Travel moments"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Testimonials</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Voices of Our Travelers</h1>
              <p className="font-body text-stone-500 leading-relaxed max-w-lg">
                Every journey we create is a collaboration. These are the stories and reflections from those who have traveled with us.
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
                alt="Traveler"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-ivory border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center ${i < stats.length - 1 ? 'md:border-r md:border-stone-200/50' : ''}`}>
                <p className="font-heading text-3xl md:text-4xl text-primary-500 mb-1">{stat.number}</p>
                <p className="font-body text-sm text-stone-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-primary-200 text-[120px] leading-none font-heading mb-0 select-none">"</div>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-charcoal italic leading-relaxed -mt-16 mb-8">
              {featured.quote}
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: featured.rating }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="font-body text-charcoal font-medium">{featured.author}</p>
            <p className="font-body text-stone-500 text-sm">{featured.location}</p>
          </motion.div>
        </div>
      </section>

      {/* REVIEW GRID */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bg-white rounded-xl p-6 ${i % 3 === 0 ? 'md:mt-0' : i % 3 === 1 ? 'md:mt-8' : 'md:mt-4'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-heading text-lg text-charcoal">{review.name}</h3>
                    <p className="font-body text-stone-500 text-sm">{review.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <StarIcon key={j} />
                    ))}
                  </div>
                </div>
                <p className="font-body text-stone-500 leading-relaxed mb-4 italic">"{review.text}"</p>
                <div className="flex gap-4 text-xs font-body text-stone-500 uppercase tracking-wider">
                  <span>{review.trip}</span>
                  <span className="text-stone-200">|</span>
                  <span>{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 md:py-28 bg-ivory-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 text-center mb-3">Why Trust Us</p>
          <h2 className="font-heading text-3xl md:text-4xl text-charcoal text-center mb-16">Our Commitment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <TrustIcon icon={item.icon} />
                </div>
                <h3 className="font-heading text-base text-charcoal mb-2">{item.title}</h3>
                <p className="font-body text-stone-500 text-sm leading-relaxed">{item.description}</p>
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
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary-500 mb-3">Join Our Travelers</p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
              Your Story Starts Here
            </h2>
            <p className="font-body text-stone-500 leading-relaxed mb-8 max-w-lg mx-auto">
              Join the thousands of travelers who have discovered the world through our bespoke journeys. Let us craft your next unforgettable experience.
            </p>
            <a
              href={generateWhatsAppUrl("Hello! I'd love to start planning a luxury journey.")}
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
