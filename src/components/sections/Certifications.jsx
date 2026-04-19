import { motion } from 'framer-motion'
import { BadgeCheck, CheckCircle, Shield as ShieldIcon, Award as AwardIcon } from 'lucide-react'

const certifications = [
  {
    icon: AwardIcon,
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    description: 'Our Quality Management System meets international requirements for consistent quality in rice processing and supply.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: ShieldIcon,
    title: 'ISO 22000:2018',
    subtitle: 'Food Safety Management System',
    description: 'Our Food Safety Management System meets international requirements ensuring safe and hygienic rice products.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: ShieldIcon,
    title: 'IDB Approved',
    subtitle: 'Industrial Development Board',
    description: 'TaaSa Rice Processing Company Private Limited is IDB Approved for manufacturing and export of rice products.',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: ShieldIcon,
    title: 'GMP',
    subtitle: 'Good Manufacturing Practice',
    description: 'We adhere to WHO-GMP standards ensuring products are consistently produced and controlled according to quality standards.',
    color: 'from-accent-gold to-yellow-500'
  },
  {
    icon: AwardIcon,
    title: 'Quality Assurance',
    subtitle: 'Certified Quality Assurance Professional (CQAP)',
    description: 'Internal assessment processes meet rigorous industry requirements.',
    color: 'from-purple-500 to-purple-600'
  }
]

const qualityPoints = [
  'Strict Quality Control Standards',
  'Quality Guarantee per Agreed Specifications',
  'Approved Samples Verification',
  'Hygiene Certified Processing',
  'Professional Quality Team',
  'International Standard Compliance'
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-10 sm:py-12 md:py-14 lg:py-16 bg-cream relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 lg:mb-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-deep-green/10 text-deep-green font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            Certifications
          </motion.span>
          
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive">
            Quality <span className="text-gradient-green">Guaranteed</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto subheading-responsive"
          >
            Our commitment to quality is backed by official certifications and strict adherence to international standards.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative group ${index === certifications.length - 1 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto md:col-start-1 md:col-end-3 md:max-w-lg md:mx-auto' : ''}`}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col">
                <div className={`h-3 bg-gradient-to-r ${cert.color}`} />
                
                <div className="p-6 sm:p-8 flex-1 flex items-start">
                  <div className="flex items-start gap-4 sm:gap-6 w-full">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <cert.icon className="text-white" size={24} sm:size={28} />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-cursive font-bold text-xl sm:text-2xl text-deep-green">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 font-handlee text-xs sm:text-sm mb-2">
                        {cert.subtitle}
                      </p>
                      <p className="text-gray-600 font-nunito leading-relaxed text-xs sm:text-sm line-clamp-3">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-gold/30 rounded-3xl transition-colors duration-500 pointer-events-none" />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-r from-accent-gold/20 to-olive-green/20 blur-2xl rounded-full" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-deep-green rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-olive-green/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 bg-accent-gold rounded-xl flex items-center justify-center">
                <BadgeCheck className="text-deep-green" size={28} />
              </div>
              <h3 className="font-cursive font-bold text-2xl sm:text-3xl text-white">
                Our Quality Promise
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {qualityPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-400" size={18} />
                  </div>
                  <span className="text-white/90 font-nunito text-sm sm:text-base">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-olive-green/10 to-transparent rounded-full blur-3xl"
      />
    </section>
  )
}
