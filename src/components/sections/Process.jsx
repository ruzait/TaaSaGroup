import { motion } from 'framer-motion'
import { Truck, Wind, Wheat, Sparkles, Layers, ClipboardCheck, Package, ArrowRight, CheckCircle } from 'lucide-react'
import { WaveGradient } from '../ui/WaveDivider'

const productionSteps = [
  {
    step: '01',
    icon: Truck,
    title: 'Paddy Receiving',
    description: 'Fresh paddy collected directly from local farmers in Sri Lanka'
  },
  {
    step: '02',
    icon: Wind,
    title: 'Pre-Cleaning',
    description: 'Advanced removal of straw, dust, and impurities'
  },
  {
    step: '03',
    icon: Wheat,
    title: 'Dehusking',
    description: 'Shell husks to reveal premium rice kernels'
  },
  {
    step: '04',
    icon: Sparkles,
    title: 'Polishing',
    description: 'Buff and whiten for flawless appearance'
  },
  {
    step: '05',
    icon: Layers,
    title: 'Grading',
    description: 'Sort by size and quality standards'
  },
  {
    step: '06',
    icon: ClipboardCheck,
    title: 'Quality Check',
    description: 'Rigorous inspection at every stage for excellence',
    isHighlight: true
  },
  {
    step: '07',
    icon: Package,
    title: 'Packaging',
    description: 'Sealed and ready for distribution worldwide',
    badge: 'GMP Standard'
  }
]

export default function Process() {
  return (
    <section id="process" className="relative py-12 sm:py-14 md:py-16 lg:py-20 bg-deep-green overflow-hidden">
      <WaveGradient 
        direction="up"
        fromColor="#F5F5DC"
        toColor="#F5F5DC"
        height="100px"
        style="smooth"
        animated={false}
      />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-green via-[#1a3d2e] to-olive-green/30" />
        
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-accent-gold/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-olive-green/30 rounded-full blur-[100px]"
        />
        
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,215,0,0.08) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 bg-gradient-to-r from-accent-gold/20 via-accent-gold/10 to-accent-gold/20 text-accent-gold font-handlee font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full border border-accent-gold/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse shadow-lg shadow-accent-gold/50" />
            From Farm to Table
          </motion.div>
          
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-6 sm:mt-8 mb-5 sm:mb-6 heading-responsive">
            How{' '}
            <span className="text-gradient-gold">Quality Rice</span>
            <br className="sm:hidden" />
            {' '}is Produced
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto subheading-responsive"
          >
            A visual step-by-step journey showing how we transform raw paddy into premium quality rice - building trust with every grain.
          </motion.p>
        </motion.div>

        <div className="relative">
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-5 md:gap-5 lg:gap-6">
            {productionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                <div className={`relative h-full ${item.isHighlight ? 'sm:-mt-2 lg:mt-0' : ''}`}>
                  <div className={`
                    relative bg-white/[0.06] backdrop-blur-xl border rounded-2xl px-5 sm:px-6 lg:px-6 py-4 h-full overflow-hidden transition-all duration-500
                    ${item.isHighlight 
                      ? 'border-accent-gold/60 shadow-[0_0_40px_rgba(201,162,39,0.3)] lg:shadow-[0_0_50px_rgba(201,162,39,0.4)]' 
                      : 'border-white/10 hover:border-white/25'
                    }
                  `}>
                    {item.isHighlight && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-accent-gold/10 rounded-2xl"
                      />
                    )}
                    
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 via-transparent to-transparent rounded-full blur-xl" />
                    
                    <div className="relative space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`
                            w-10 h-10 sm:w-12 sm:h-12 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center shadow-lg border
                            ${item.isHighlight 
                              ? 'bg-gradient-to-br from-accent-gold to-yellow-300 shadow-accent-gold/30 border-white/20' 
                              : 'bg-gradient-to-br from-accent-gold/80 to-yellow-400 shadow-accent-gold/20 border-white/10'
                            }
                          `}
                        >
                          <item.icon className={item.isHighlight ? 'text-deep-green' : 'text-deep-green'} size={18} />
                        </motion.div>
                        
                        <div className={`
                          font-handlee font-bold text-xl sm:text-2xl lg:text-2xl
                          ${item.isHighlight ? 'text-accent-gold' : 'text-white/60'}
                        `}>
                          {item.step}
                        </div>
                      </div>

                      <div>
                        <h3 className={`
                          font-cursive font-bold text-sm sm:text-base text-white mb-1 group-hover:text-accent-gold transition-colors duration-300
                          ${item.isHighlight ? 'text-accent-gold' : ''}
                        `}>
                          {item.title}
                        </h3>
                        <p className="text-white/50 font-nunito text-[11px] sm:text-xs leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {(item.isHighlight || item.badge) && (
                        <div className="flex items-center gap-1.5 pt-1">
                          {item.isHighlight && (
                            <>
                              <CheckCircle className="text-accent-gold" size={14} />
                              <span className="text-accent-gold font-handlee text-xs">Quality Assured</span>
                            </>
                          )}
                          {item.badge && !item.isHighlight && <span className="text-accent-gold font-handlee text-xs">{item.badge}</span>}
                        </div>
                      )}
                    </div>

                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${item.isHighlight ? 'via-accent-gold' : 'via-white/30'}`} />
                  </div>
                </div>

                {index < productionSteps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 xl:right-0 z-20">
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-deep-green border-2 border-accent-gold/60 flex items-center justify-center shadow-lg"
                    >
                      {(index === 3 || index === 5) ? (
                        <>
                          <span className="hidden md:block xl:hidden">
                            <motion.div
                              animate={{ y: [0, 8, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                              <ArrowRight className="text-accent-gold w-3 h-3 md:w-4 lg:h-4 rotate-90" />
                            </motion.div>
                          </span>
                          <span className="hidden xl:block">
                            <ArrowRight className="text-accent-gold w-3 h-3 lg:w-4 lg:h-4" />
                          </span>
                        </>
                      ) : (
                        <ArrowRight className="text-accent-gold w-3 h-3 lg:w-4 lg:h-4" />
                      )}
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-10 text-center pb-16 sm:pb-4"
        >
          <span className="inline-block text-white/70 font-nunito text-sm sm:text-base">
            Every batch tested for <span className="text-accent-gold font-semibold">purity, moisture & quality</span>
          </span>
        </motion.div>
      </div>

      <WaveGradient 
        direction="up"
        fromColor="#F5F5DC"
        toColor="#F5F5DC"
        height="100px"
        style="smooth"
        animated={false}
      />
    </section>
  )
}
