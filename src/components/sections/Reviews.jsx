import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Ahamed FBS',
    location: 'Colombo, Sri Lanka',
    rating: 5,
    text: 'Price 100% ✅ Best quality rice at the most affordable prices in Ampara. Been buying for years!',
    avatar: '👨‍💼'
  },
  {
    name: 'Safeena Banu',
    location: 'Batticaloa, Sri Lanka',
    rating: 5,
    text: 'Red rice special! My family loves it. Fresh and pure, just like from the village.',
    avatar: '👩‍👧‍👦'
  },
  {
    name: 'Rashid Ibrahim',
    location: 'Kandy, Sri Lanka',
    rating: 5,
    text: 'Wholesale buyer here. Best rates for bulk orders. Highly recommend TaaSa Rice Processing!',
    avatar: '🏪'
  },
  {
    name: 'Fathima Zahra',
    location: 'Trincomalee, Sri Lanka',
    rating: 5,
    text: 'The rice is perfect for biryani. Authentic taste and excellent packaging.',
    avatar: '👩‍🍳'
  },
  {
    name: 'Mansoor Ali',
    location: 'Ampara, Sri Lanka',
    rating: 5,
    text: 'Open 24 hours - true to their word! Emergency order was handled perfectly.',
    avatar: '⭐'
  },
  {
    name: 'Nimal Perera',
    location: 'Galle, Sri Lanka',
    rating: 5,
    text: 'Best rice processing company in Sri Lanka. Quality is consistently excellent!',
    avatar: '🏠'
  },
  {
    name: 'Priyanthi Silva',
    location: 'Negombo, Sri Lanka',
    rating: 5,
    text: 'Fresh rice with natural taste. My family prefers TaaSa rice only!',
    avatar: '👩‍🌾'
  },
  {
    name: 'Samantha Dissanayake',
    location: 'Anuradhapura, Sri Lanka',
    rating: 5,
    text: 'Premium quality rice for wholesale. Best prices and reliable service.',
    avatar: '🚛'
  },
  {
    name: 'Hassan Al-Rashid',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Excellent quality White Raw Rice IRR64. Shipment was timely and packaging was perfect. Will order again!',
    avatar: '🏢'
  },
  {
    name: 'Sarah Mohammed',
    location: 'Johannesburg, South Africa',
    rating: 5,
    text: 'TaaSa Rice is the best supplier for our retail store. Premium quality and consistent. Highly recommended!',
    avatar: '🛒'
  },
  {
    name: 'Ali Ahmed',
    location: 'Riyadh, Saudi Arabia',
    rating: 5,
    text: 'Great Basmati & Non-Basmati Rice. Fast shipping to Middle East and excellent customer service.',
    avatar: '📦'
  },
  {
    name: 'Mike Johnson',
    location: 'Cape Town, South Africa',
    rating: 5,
    text: 'Reliable partner for rice imports. Quality is outstanding and delivery is always on time.',
    avatar: '🏭'
  },
  {
    name: 'Omar Khalil',
    location: 'Doha, Qatar',
    rating: 5,
    text: 'Best rice exporter from Sri Lanka! Professional service and premium quality products.',
    avatar: '🌾'
  },
  {
    name: 'Khalid Mahmood',
    location: 'Kuwait',
    rating: 5,
    text: 'Consistent quality rice shipments. TaaSa is our trusted supplier for the past 3 years!',
    avatar: '🏪'
  },
  {
    name: 'David Williams',
    location: 'Durban, South Africa',
    rating: 5,
    text: 'Outstanding service and premium rice quality. Our customers love their products!',
    avatar: '🏠'
  },
  {
    name: 'Ahmed Hassan',
    location: 'Muscat, Oman',
    rating: 5,
    text: 'Excellent Basmati Rice. Highly recommend TaaSa for all rice exports to Middle East!',
    avatar: '🏔️'
  },
  {
    name: 'Fatima Al-Sayed',
    location: 'Manama, Bahrain',
    rating: 5,
    text: 'Top quality rice with excellent packaging. Very professional team to work with!',
    avatar: '👩‍💼'
  },
  {
    name: 'Peter Clarke',
    location: 'Port Elizabeth, South Africa',
    rating: 5,
    text: 'Best rice supplier from Sri Lanka. Great communication and reliable deliveries.',
    avatar: '🚢'
  },
  {
    name: 'Yusuf Ahmed',
    location: 'Sharjah, UAE',
    rating: 5,
    text: 'Premium quality IRR 64 rice. Our preferred supplier for rice imports!',
    avatar: '🏗️'
  },
  {
    name: 'John Dube',
    location: 'Pretoria, South Africa',
    rating: 5,
    text: 'Consistent quality and timely deliveries. TaaSa is a reliable partner for our business!',
    avatar: '🏢'
  }
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [displayReviews, setDisplayReviews] = useState(() => {
    const shuffled = [...reviews].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 8)
  })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    if (displayReviews.length === 0) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % displayReviews.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [displayReviews.length])

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % displayReviews.length)
  }
  
  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + displayReviews.length) % displayReviews.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-20 bg-cream relative overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-deep-green/10 text-deep-green font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            Testimonials
          </motion.span>
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive">
            What Our <span className="text-gradient-green">Customers Say</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto subheading-responsive"
          >
            Don't just take our word for it. Here's what our valued customers have to say.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
          <div className="absolute -top-2 -left-1 sm:-top-4 sm:-left-2 text-deep-green/10 pointer-events-none overflow-hidden">
            <Quote size={48} className="sm:w-20 sm:h-20" />
          </div>

          <div className="relative overflow-hidden rounded-3xl min-h-[280px] sm:min-h-[260px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-white rounded-3xl p-5 sm:p-8 md:p-12"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(displayReviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-accent-gold fill-accent-gold" size={24} />
                  ))}
                </div>

                <p className="font-nunito text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  "{displayReviews[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-deep-green to-olive-green rounded-full flex items-center justify-center text-3xl">
                    {displayReviews[currentIndex].avatar}
                  </div>
                  <div>
                    <div className="font-handlee font-bold text-deep-green text-lg">
                      {displayReviews[currentIndex].name}
                    </div>
                    <div className="text-gray-500 font-nunito text-sm">
                      {displayReviews[currentIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 flex justify-center items-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-deep-green hover:bg-deep-green hover:text-white transition-colors duration-300 touch-manipulation cursor-pointer z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2 z-20" role="tablist" aria-label="Review navigation">
              {displayReviews.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Review ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation cursor-pointer ${
                    index === currentIndex ? 'bg-accent-gold w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-deep-green hover:bg-deep-green hover:text-white transition-colors duration-300 touch-manipulation cursor-pointer z-20"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
    </section>
  )
}
