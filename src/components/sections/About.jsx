import { motion, useScroll, useTransform } from 'framer-motion'
import { Sprout, Truck, Users } from 'lucide-react'
import { useRef } from 'react'
import WheatIcon from '../ui/WheatIcon'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    { icon: Sprout, number: '25+', label: 'Years Experience', suffix: '' },
    { icon: Users, number: '10K+', label: 'Happy Customers', suffix: '' },
    { icon: Truck, number: '3+', label: 'Export Countries', suffix: '' }
  ]

  return (
    <section id="about" ref={ref} className="relative py-10 sm:py-12 md:py-14 lg:py-16 bg-cream overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-accent-gold/10 text-accent-gold font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
              About Us
            </motion.span>

            <div className="relative mb-2 sm:mb-4">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green leading-tight"
              >
                Leading White Raw Rice <span className="text-gradient-gold">IRR64</span> Producer, Importer and Exporter
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                whileInView={{ opacity: 0.5, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none z-20"
              >
                <WheatIcon size={64} variant="wave-wobble" />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 font-nunito text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
            >
              <span className="text-deep-green font-semibold">TaaSa Rice Processing Company Private Limited</span> is a rice processing company based in Chavalkadai, Navithanveli. The company specializes in the processing, packaging, and export of high-quality rice varieties such as Raw, Non-Basmati, and Sona Masoori. Head Office located at No.446, Sri Vajiragnana Mawatha, Dematagoda Road, Colombo - 09.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 font-nunito leading-relaxed mb-6 sm:mb-8"
            >
              TaaSa sources its raw materials from the best paddy fields in Sri Lanka and uses state-of-the-art technology to process and package the rice. The company has a strong distribution network both within Sri Lanka and internationally, and exports its products to countries such as the Middle East and South Africa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 sm:w-16 mx-auto bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 rounded-2xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-accent-gold w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="font-handlee font-bold text-2xl sm:text-3xl lg:text-4xl text-deep-green mb-1">{stat.number}</div>
                  <div className="text-gray-500 font-nunito text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ y: imageY }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-gold/20 to-olive-green/20 rounded-3xl blur-2xl" />
                <img
                  src="/assets/img/pageimgs/From-Paddy.jpg"
                  alt="Premium Rice Processing"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 left-1 sm:left-4 md:left-6 bg-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl z-10"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center">
                    <WheatIcon size={24} sm:size={32} md:size={36} lg:size={40} variant="glow" />
                  </div>
                  <div>
                    <div className="font-handlee font-bold text-deep-green text-base sm:text-lg md:text-xl lg:text-2xl">100% Pure</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
                className="absolute top-1 sm:top-2 right-1 sm:right-2 md:top-2 md:-right-4 lg:top-0 lg:-right-4 bg-accent-gold p-2 sm:p-2 md:p-3 lg:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl z-10"
              >
                <div className="text-center">
                  <div className="font-handlee font-bold text-deep-green text-base sm:text-xl md:text-2xl lg:text-3xl">25+</div>
                  <div className="text-deep-green/70 font-nunito text-xs sm:text-sm hidden md:block">Years</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
                className="absolute top-1/2 -right-4 sm:-right-8 bg-green-600 p-2 sm:p-3 rounded-xl shadow-xl z-10"
              >
                <div className="text-center">
                  <div className="font-handlee font-bold text-white text-xs sm:text-base">IDB</div>
                  <div className="text-white/80 font-nunito text-xs hidden sm:block">Approved</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-olive-green/10 to-transparent rounded-full blur-3xl" />
    </section>
  )
}
