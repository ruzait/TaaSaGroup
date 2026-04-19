import { motion } from 'framer-motion'
import Logo from '/assets/img/logos/TaaSa.svg'

export default function LoadingScreen({ 
  title = "TaaSa Business Group",
  subtitle = "Loading...",
  primaryColor = "#0B3D2E", 
  accentColor = "#C9A227",
  bgColor = "#0B3D2E"
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-center">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 1, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="w-24 h-24 mx-auto mb-8"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-4 rounded-full" style={{ borderColor: `${accentColor}30` }} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-4 border-transparent rounded-full"
              style={{ borderTopColor: accentColor }}
            />
            <div className="absolute inset-3 rounded-full flex items-center justify-center">
              <img 
                src={Logo} 
                alt="TaaSa" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <h1 className="font-cursive font-bold text-3xl text-white">
            {title}
          </h1>
          <p className="text-white/60 font-nunito text-sm">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="h-full"
            style={{ backgroundColor: accentColor }}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              backgroundColor: `${accentColor}30`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
