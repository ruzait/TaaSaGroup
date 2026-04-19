import { motion } from 'framer-motion'
import { Clock, BadgeCheck, Award } from 'lucide-react'

const coreValues = [
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Reliable delivery schedules you can count on, every single time.',
    color: '#6B8E23',
    bgColor: 'rgba(107, 142, 35, 0.1)'
  },
  {
    icon: BadgeCheck,
    title: 'Competitive Pricing',
    description: 'Best market prices without compromising on quality. Value for every rupee.',
    color: '#0B3D2E',
    bgColor: 'rgba(11, 61, 46, 0.1)'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Quality guarantee as per agreed specifications and approved samples.',
    color: '#D4AF37',
    bgColor: 'rgba(212, 175, 55, 0.1)'
  }
]

const circlePositions = [
  { right: '-right-6', top: '-top-6', size: 'w-24 h-24' },
  { right: '-right-8', bottom: '-bottom-8', size: 'w-20 h-20' },
  { left: '-left-6', bottom: '-bottom-6', size: 'w-28 h-28' },
]

function ValueCard({ value, index }) {
  const position = circlePositions[index % circlePositions.length]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group h-full"
    >
      <div className="relative p-6 sm:p-7 lg:p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
        <div 
          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: value.color }}
        />
        
        <div 
          className={`absolute ${position.size} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${position.right || ''} ${position.top || ''} ${position.bottom || ''} ${position.left || ''}`}
          style={{ backgroundColor: value.color }}
        />
        
        <div className="relative flex flex-col items-center text-center flex-grow">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg flex-shrink-0"
            style={{ backgroundColor: value.bgColor }}
          >
            <value.icon size={32} style={{ color: value.color }} />
          </motion.div>
          
          <h4 className="font-cursive font-bold text-xl sm:text-2xl text-deep-green mb-2 sm:mb-3">
            {value.title}
          </h4>
          
          <p className="font-nunito text-gray-500 text-sm sm:text-base leading-relaxed flex-grow">
            {value.description}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 + index * 0.15 }}
            className="h-full opacity-50"
            style={{ backgroundColor: value.color }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function CoreValues() {
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-br from-[#F5F5DC] via-[#EAECCD] to-[#F5F5DC] relative overflow-hidden">
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
            Our Values
          </motion.span>
          
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive">
            Our Core <span className="text-gradient-green">Values</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto subheading-responsive"
          >
            Our team is dedicated and committed to our basic important principles that drive everything we do.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-4xl mx-auto">
          {coreValues.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
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
          opacity: [0.05, 0.1, 0.05]
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
