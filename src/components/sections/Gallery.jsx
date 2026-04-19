import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/assets/img/pageimgs/gallery_1.jpeg', alt: 'Rice processing factory' },
  { src: '/assets/img/pageimgs/gallery_2.jpeg', alt: 'Quality inspection' },
  { src: '/assets/img/pageimgs/gallery_3.jpeg', alt: 'Rice paddy fields' },
  { src: '/assets/img/pageimgs/gallery_4.jpeg', alt: 'Quality inspection' },
  { src: '/assets/img/pageimgs/gallery_5.jpeg', alt: 'Packaged rice products' },
  { src: '/assets/img/pageimgs/gallery_6.jpg', alt: 'Export packaging' },
  { src: '/assets/img/pageimgs/gallery_7.jpeg', alt: 'Rice milling equipment' },
  { src: '/assets/img/pageimgs/gallery_10.jpeg', alt: 'Packaged rice products' },
  { src: '/assets/img/pageimgs/gallery_8.jpeg', alt: 'Export packaging' }
]


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = useCallback((index) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = ''
  }, [])

  const nextImage = useCallback(() => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }, [])

  const prevImage = useCallback(() => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return

      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, closeLightbox, nextImage, prevImage])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <section id="gallery" className="py-10 sm:py-12 md:py-14 lg:py-20 bg-[#EAECCD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 bg-deep-green/10 text-deep-green font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
            Gallery
          </motion.span>
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive">
            Our Farm <span className="text-gradient-green">Gallery</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto subheading-responsive"
          >
            Take a visual journey through our rice fields and milling operations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? 'col-span-2 sm:col-span-1 md:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(index)
                }
              }}
              aria-label={`View ${image.alt} in full size`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[150px] sm:min-h-[200px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-deep-green/0 group-hover:bg-deep-green/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100">
                  <span className="text-2xl" aria-hidden="true">🔍</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-olive-green/10 rounded-full blur-3xl" />

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={40} />
            </button>
            
            <button
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2 z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
            
            <motion.img
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[80vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2 z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 text-white/60 font-nunito" aria-live="polite">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}