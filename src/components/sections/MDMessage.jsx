import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

export default function MDMessage() {
  const ref = useRef(null)

  const mdInfo = {
    name: 'Sathakku Lebbe Mohamed Thahir',
    title: "Managing Director",
    image: '/assets/img/pageimgs/MD_thahir.jpeg',
    message: `At TaaSa Rice Processing Company (PVT) Ltd., we are dedicated to delivering high-quality rice products while supporting the sustainability of Sri Lanka's agricultural sector. Our journey is driven by a commitment to combine tradition with modern innovation, ensuring consistent excellence in everything we do.

Quality, safety, and reliability are the foundation of our operations. We adhere strictly to internationally recognized standards such as GMP, ISO 9001:2015, and ISO 22000:2018, reflecting our strong commitment to quality assurance and food safety. Every grain we process meets the highest standards of consistency and care.

As we grow, we continue to invest in advanced technologies, operational efficiency, and sustainable practices. We also value the trust of our customers and the strong partnerships we maintain with farmers and stakeholders. With a clear vision and unwavering commitment, we are confident in achieving sustainable growth and strengthening our position as a trusted industry leader.`
  }

  return (
    <section id="md-message" ref={ref} className="py-8 md:py-10 lg:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-deep-green" />
      <img 
        src="/assets/img/pageimgs/gallery_1.jpeg" 
        alt="background" 
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-accent-gold/10 text-accent-gold font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full animate-pulse bg-accent-gold" />
            Leadership Message
          </span>
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Message from Our <span className="text-gradient-gold">Leader</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex items-center"
          >
            <div className="flex flex-col items-center text-center w-full">
              <div className="relative group">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={mdInfo.image}
                    alt={mdInfo.name}
                    className="w-64 h-80 sm:w-72 sm:h-[400px] lg:w-80 lg:h-[450px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-110"
                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 8px 16px rgba(201,162,39,0.2))' }}
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-accent-gold/30 to-olive-green/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="h-full rounded-2xl p-4 sm:p-6 lg:p-8 pb-0 relative overflow-hidden"
              style={{ 
                backgroundColor: '#011b147a',
                border: '1px dashed #4c4b4b',
                zIndex: 0
              }}>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-2 w-16 h-16 text-accent-gold"
                style={{ opacity: 0.15, zIndex: 0 }}
              >
                <Quote size={64} />
              </motion.div>
              
              <div className="relative z-10">
                <div className="font-nunito text-white/90 text-sm sm:text-base leading-relaxed space-y-6 sm:space-y-4">
                  {mdInfo.message.split('\n\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 pb-4 sm:pb-0"
                >
                  <p className="text-right text-accent-gold font-handlee text-lg">— {mdInfo.name}</p>
                  <p className="text-right text-white/50 text-xs mt-1">{mdInfo.title}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
