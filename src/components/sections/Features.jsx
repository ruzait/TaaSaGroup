import { motion } from 'framer-motion'
import { Award, Tag, Shield, Globe, Package, Truck, MapPin, ArrowRight, Star, Factory } from 'lucide-react'

const features = [
  {
    icon: Factory,
    title: 'Modern Rice Processing Facility',
    description: 'Modern rice processing facility with GMP & ISO standards, delivering premium quality and hygiene in every grain.',
    image: '/assets/img/pageimgs/gallery_1.jpeg',
    badge: 'Facility'
  },
  {
    icon: Globe,
    title: 'International Export',
    description: 'Strong distribution network to Middle East and South Africa. Export-ready quality rice varieties.',
    image: '/assets/img/pageimgs/plase-2.jpeg',
    badge: 'Export Ready'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-selected grains meeting the highest quality standards for taste and nutrition.',
    image: '/assets/img/pageimgs/white-rice.jpg',
    badge: 'Premium'
  }
]

const exportData = {
  countries: ['Middle East', 'South Africa', 'Sri Lanka'],
  products: ['White Raw Rice IRR64', 'Basmati & Non-Basmati Rice'],
  features: [
    { 
      icon: Package, 
      title: 'Premium Varieties', 
      description: 'White Raw Rice IRR64 & Basmati & Non-Basmati',
      color: '#C9A227'
    },
    { 
      icon: Truck, 
      title: 'Global Logistics', 
      description: 'Middle East & South Africa',
      color: '#6B8E23'
    },
    { 
      icon: Award, 
      title: 'Bulk Orders', 
      description: 'Wholesale & Export Grade',
      color: '#0B3D2E'
    }
  ]
}

function ExportCard({ item, index }) {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group h-full"
    >
      <div className="relative h-full p-6 sm:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
        <div 
          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: item.color }}
        />
        
        <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: item.color }} />
        
        <div className="relative flex items-start gap-4 sm:gap-5 mb-auto">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <item.icon size={28} style={{ color: item.color }} />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-cursive font-bold text-lg sm:text-xl text-deep-green mb-1">
              {item.title}
            </h4>
            <p className="font-nunito text-gray-500 text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
            className="h-full opacity-50"
            style={{ backgroundColor: item.color }}
          />
        </div>
      </div>
    </motion.div>
  )
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="relative group cursor-pointer"
    >
      <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={feature.image}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-deep-green/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
        
        <div className="absolute top-5 left-5 opacity-100 group-hover:opacity-0 transition-all duration-300 group-hover:translate-y-4">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-deep-green rounded-2xl flex items-center justify-center shadow-2xl">
            <feature.icon className="text-white" size={28} />
          </div>
        </div>

        <div className="absolute top-5 right-5 opacity-100 group-hover:opacity-0 transition-all duration-300 group-hover:translate-y-4">
          <span className="px-4 py-2 bg-accent-gold text-white font-handlee font-bold text-xs rounded-full shadow-lg">
            {feature.badge}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 opacity-100 group-hover:opacity-0 transition-all duration-300 group-hover:translate-y-4">
          <h3 className="font-cursive font-bold text-3xl text-white mb-3">
            {feature.title}
          </h3>
          <p className="text-white/80 font-nunito leading-relaxed text-lg">
            {feature.description}
          </p>
        </div>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-accent-gold/30 blur-2xl rounded-full" />

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-[#F8F5EF] relative overflow-hidden noise-bg">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10 lg:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-deep-green/10 text-deep-green font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            Why Choose Us
          </motion.span>
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive">
            Why <span className="text-gradient-green">TaaSa</span>?
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 subheading-responsive"
          >
            Experience the difference of quality, affordability, and trust. With international reach and commitment to excellence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 relative z-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-olive-green/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-accent-gold/20 to-transparent rounded-full blur-3xl"
      />
    </section>
  )
}
