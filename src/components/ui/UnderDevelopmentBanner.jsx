import { motion } from 'framer-motion'
import { Hammer, Clock, Star, Building2, Truck, Package, Home, Palmtree } from 'lucide-react'

const companyIcons = {
  'taasa-trading': Truck,
  'taasa-packaging': Package,
  'taasa-guestinn': Home,
  'taasa-resort': Palmtree,
}

export default function UnderDevelopmentBanner({ company }) {
  const { id, shortName, tagline, color, accent } = company || {}
  const IconComponent = companyIcons[id] || Building2

  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
            style={{ backgroundColor: accent, color: color }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Hammer className="w-5 h-5" />
            </motion.span>
            <span className="font-cursive font-bold text-lg">Under Development</span>
          </motion.div>

          <h2 className="font-cursive font-bold text-5xl mb-4" style={{ color }}>
            {shortName || 'This Company'}
          </h2>
          <p className="font-handlee text-2xl mb-6" style={{ color: accent }}>
            {tagline || 'Coming Soon'}
          </p>

          <p className="font-nunito text-gray-600 max-w-xl mx-auto mb-8 text-lg">
            We're working hard to bring you something amazing. Our team is developing 
            something special that will exceed your expectations.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md">
              <Clock className="w-4 h-4" style={{ color: accent }} />
              <span className="font-nunito text-sm text-gray-600">Expected Launch: 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md">
              <Star className="w-4 h-4" style={{ color: accent }} />
              <span className="font-nunito text-sm text-gray-600">Premium Quality</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="aspect-square rounded-xl flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <IconComponent className="w-8 h-8" style={{ color: accent }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}