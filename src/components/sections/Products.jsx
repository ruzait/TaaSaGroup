import { motion } from 'framer-motion'
import { ArrowRight, Award, TrendingUp, CheckCircle2 } from 'lucide-react'
import { COMPANY_INFO } from '../../lib/constants'

const products = [
  {
    id: 1,
    name: 'White Raw Rice IRR64',
    tagline: 'Healthy Life for Every Family',
    description: 'We are pleased to offer our White Raw Rice IRR64, known for its excellent grain quality, natural taste, and consistent cooking performance. It is carefully processed to meet high-quality standards, making it ideal for both domestic consumption and as a reliable raw material for industrial and factory use.',
    image: '/assets/img/pageimgs/white-rice.jpg',
    badge: 'Best Seller',
    features: [
      'ISO 9001:2015 Certified',
      'Excellent Grain Quality',
      'Ideal for Industrial Use'
    ],
    icon: Award,
    color: '#C9A227'
  },
  {
    id: 2,
    name: 'Basmati & Non-Basmati Rice',
    tagline: 'Repacking Available & Exporting Worldwide',
    description: 'We supply premium export-grade rice, carefully processed and repacked to meet strict international standards. Renowned for its long grain length, superior clarity, and consistent quality, our rice is well-suited for global markets and diverse customer requirements.',
    image: '/assets/img/pageimgs/Brown-Rice.jpg',
    badge: 'Export Ready',
    features: [
      'ISO 22000:2018 Certified',
      'Bulk Packaging',
      'Global Logistics'
    ],
    icon: TrendingUp,
    color: '#0B3D2E'
  }
]

function ProductCard({ product, index }) {
  const isFirst = index === 0
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl bg-deep-green w-full">
        <div className={`relative w-full lg:w-1/2 min-h-[180px] sm:min-h-[220px] md:min-h-[280px] overflow-hidden ${
          isFirst ? 'lg:order-1' : 'lg:order-2'
        }`}>
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 scale-100 hover:scale-110"
          />
          
          <div className="absolute top-4 left-4 bg-green-500 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl">
            <span className="text-sm font-handlee font-bold text-white flex items-center gap-2">
              <product.icon size={14} className="text-white" />
              {product.badge}
            </span>
          </div>
          
          
        </div>

        <div className={`w-full lg:w-1/2 p-4 lg:p-6 flex flex-col justify-center ${
          isFirst ? 'lg:order-2' : 'lg:order-1'
        }`}>
          <div className="space-y-3">
            <span className="text-xs font-handlee font-semibold uppercase tracking-widest text-accent-gold">
              Premium Rice
            </span>
            
            <h3 className="font-cursive font-bold text-xl lg:text-2xl text-white">
              {product.name}
            </h3>
            
            <p className="text-sm font-medium text-white/70">
              {product.tagline}
            </p>
            
            <p className="text-sm leading-relaxed text-white/60">
              {product.description}
            </p>

            <div className="flex flex-col gap-1 pt-1">
              {product.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-1.5 text-white/70">
                  <CheckCircle2 size={12} className="text-accent-gold" />
                  <span className="text-sm font-nunito">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10">
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hello%20${encodeURIComponent(COMPANY_INFO.name)}%2C%20I%20would%20like%20to%20inquire%20about%20bulk%20pricing%20for%20${encodeURIComponent(product.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-handlee font-bold text-sm transition-all bg-accent-gold text-deep-green hover:bg-accent-gold/90"
              >
                <span>Request Quote</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="products" className="py-10 sm:py-12 lg:py-14 bg-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-deep-green/10 text-deep-green font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            Our Products
          </div>
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive">
            Premium <span className="text-gradient-green">Rice Varieties</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto subheading-responsive"
          >
            Premium rice selection, meticulously processed for local families and international markets.
          </motion.p>
        </motion.div>

        <div className="space-y-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        
      </div>
    </section>
  )
}
