import { motion } from 'framer-motion'
import { WaveGradient } from '../ui/WaveDivider'
import { COMPANY_INFO } from '../../lib/constants'

const HERO_COLORS = {
  primary: '#0B3D2E',
  accent: '#C9A227',
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/pageimgs/TaasaRice.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-green/90 via-deep-green/70 to-deep-green/95" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span 
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6" 
            style={{ backgroundColor: HERO_COLORS.accent, color: HERO_COLORS.primary }}
          >
            {COMPANY_INFO.sector}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cursive font-bold text-white text-4xl sm:text-5xl lg:text-6xl mb-4"
        >
          {COMPANY_INFO.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-handlee text-white/90 text-xl sm:text-2xl lg:text-3xl mb-6"
          style={{ color: HERO_COLORS.accent }}
        >
          {COMPANY_INFO.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-nunito text-white/80 max-w-2xl mx-auto"
        >
          {COMPANY_INFO.description}
        </motion.p>
      </div>

      <WaveGradient 
        direction="up"
        fromColor="#F8F5EF"
        toColor="#F8F5EF"
        midColor="#F8F5EF"
        height="80px"
      />
    </section>
  )
}