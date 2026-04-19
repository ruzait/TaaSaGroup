import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import WheatIcon from '../ui/WheatIcon'
import { WaveGradient } from '../ui/WaveDivider'

const HERO_COLORS = {
  badge: {
    bg: 'rgba(255,255,255,0.1)',
    border: 'rgba(255,255,255,0.2)',
    text: 'rgba(255,255,255,0.9)',
    dot: '#6B8E23',
    dotGlow: 'rgba(107,142,35,0.5)',
  },
  gradient: {
    from: '#0B3D2E',
    via: '#0B3D2E',
    to: '#0B3D2E',
    overlayGold: 'rgba(201,162,39,0.05)',
    overlayGreen: 'rgba(107,142,35,0.05)',
  },
  particles: {
    color: '#C9A227',
    glow: 'rgba(201,162,39,0.5)',
  },
  text: {
    primary: 'white',
    secondary: 'rgba(255,255,255,0.8)',
    accent: '#C9A227',
    highlight: '#6B8E23',
  },
  wave: {
    fromColor: '#F8F5EF',
    midColor: '#F8F5EF',
    toColor: '#F8F5EF',
  },
}

const PARTICLE_COUNT = 6
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: 15 + i * 15,
  top: 20 + Math.sin(i) * 30,
  delay: i * 0.8,
}))

const DOT_PATTERN_SVG = `data:image/svg+xml;base64,${btoa(`
<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <filter id="noiseFilter">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
</svg>
`)}`

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ 
          y, 
          opacity,
          backgroundImage: `url('/assets/img/pageimgs/TaasaRice.png')`,
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-deep-green/90 via-deep-green/70 to-deep-green/95" />
      
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 animate-aurora" 
          style={{ background: `linear-gradient(90deg, ${HERO_COLORS.gradient.overlayGold}, ${HERO_COLORS.gradient.overlayGreen})` }}
        />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `url("${DOT_PATTERN_SVG}")`,
            backgroundPosition: 'center', 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              backgroundColor: HERO_COLORS.particles.color,
              boxShadow: `0 0 10px ${HERO_COLORS.particles.glow}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full backdrop-blur-md border text-white/90 font-cursive text-sm"
            style={{ 
              backgroundColor: HERO_COLORS.badge.bg,
              borderColor: HERO_COLORS.badge.border,
            }}
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse" 
              style={{ 
                backgroundColor: HERO_COLORS.badge.dot,
                boxShadow: `0 0 10px ${HERO_COLORS.badge.dotGlow}`,
              }} 
            />
            Leading White Raw Rice IRR64 Producer, Importer and Exporter
          </motion.span>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-cursive font-bold text-white text-responsive-hero"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            TaaSa Rice
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-cursive font-bold text-responsive-hero"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
          >
            <span className="text-gradient-gold glow-text">Processing Company (Pvt) Ltd</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-nunito text-white/80 max-w-3xl mx-auto leading-relaxed px-4"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
        >
          <span style={{ color: HERO_COLORS.text.accent }} className="font-semibold">Premium quality rice</span> from{' '}
          <span style={{ color: HERO_COLORS.text.highlight }} className="font-semibold">TaaSa Rice</span> - Paddy fields to your table.
        </motion.p>
      </div>

      <div className="absolute top-16 md:top-20 right-4 md:right-10 opacity-20 pointer-events-none">
        <WheatIcon size={96} variant="wave-wobble" />
      </div>

      <div className="absolute bottom-32 md:bottom-40 left-4 md:left-10 opacity-20 pointer-events-none">
        <WheatIcon size={72} variant="wave-wobble" className="animate-wave-wobble" style={{ animationDelay: '1s' }} />
      </div>

      <WaveGradient 
        direction="up"
        fromColor="#F8F5EF"
        toColor="#F8F5EF"
        midColor="#F8F5EF"
        height="120px"
        style="smooth"
        animated={false}
      />
    </section>
  )
}
