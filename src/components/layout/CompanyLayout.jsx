import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import Logo from '/assets/img/logos/TaaSa.svg'
import { COMPANIES } from '../../lib/constants'
import LoadingScreen from '../ui/LoadingScreen'
import WhatsAppButton from '../ui/WhatsAppButton'

const SCROLL_THRESHOLD = 50

export default function CompanyLayout({ children, company, showFloating = true }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const criticalImages = [
      '/assets/img/logos/logo.png',
      company?.heroImage || '/assets/img/pageimgs/hero-bg.jpg',
    ]

    let loadedCount = 0
    const totalImages = criticalImages.length

    criticalImages.forEach((src) => {
      const img = new Image()
      img.onload = () => {
        loadedCount++
        if (loadedCount >= totalImages) setImagesLoaded(true)
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount >= totalImages) setImagesLoaded(true)
      }
      img.src = src
    })

    const timeout = setTimeout(() => setImagesLoaded(true), 5000)
    return () => clearTimeout(timeout)
  }, [company?.heroImage])

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const textColor = isScrolled ? '#ffffff' : '#ffffff'
  const bgColor = isScrolled ? `${company?.color || '#0B3D2E'}F2` : 'transparent'

  return (
    <>
      {isLoading && <LoadingScreen />}
      {showFloating && company?.id === 'taasa-rice' && <div className="hidden" />}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ 
          backgroundColor: isScrolled ? bgColor : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 touch-target">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl overflow-hidden p-1 sm:p-1.5 bg-white/90"
              >
                <img 
                  src={Logo} 
                  alt="TaaSa Business Group" 
                  className="w-full h-full object-contain rounded-lg"
                  loading="eager"
                />
              </motion.div>
              <span className="font-cursive font-bold text-xl sm:text-2xl hidden sm:block" style={{ color: textColor }}>
                {company?.shortName || 'TaaSa Business Group'}
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="font-cursive font-medium hover:opacity-80 transition-opacity" style={{ color: textColor }}>
                Home
              </Link>
              <div className="relative group">
                <button className="font-cursive font-medium flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: textColor }}>
                  Companies ▾
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="rounded-xl shadow-2xl overflow-hidden" style={{ backgroundColor: company?.color || '#0B3D2E' }}>
                    {COMPANIES.map((c) => (
                      <Link
                        key={c.id}
                        to={`/company/${c.id}`}
                        className="block px-4 py-2 hover:opacity-80 transition-opacity whitespace-nowrap font-nunito text-sm text-white"
                      >
                        {c.shortName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                to="#contact"
                className="px-6 py-2 rounded-full font-cursive font-semibold hover:opacity-90 transition-opacity shadow-lg touch-target"
                style={{ 
                  backgroundColor: company?.accent || '#C9A227', 
                  color: company?.color || '#0B3D2E' 
                }}
              >
                Contact
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 touch-target"
              style={{ color: textColor }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden overflow-hidden origin-top"
              style={{ backgroundColor: company?.color || '#0B3D2E' }}
            >
              <div className="px-4 py-5 space-y-1">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-cursive font-medium py-3 border-b border-white/10"
                  style={{ color: textColor }}
                >
                  Home
                </Link>
                <div className="border-b border-white/10 py-2">
                  <span className="block font-cursive font-medium py-2 text-white/60 text-sm">Our Companies</span>
                  {COMPANIES.map((c) => (
                    <Link
                      key={c.id}
                      to={`/company/${c.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block font-nunito py-2 pl-4 hover:opacity-80"
                      style={{ color: textColor }}
                    >
                      {c.shortName}
                    </Link>
                  ))}
                </div>
                <Link
                  to="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center font-cursive font-semibold py-3 rounded-full mt-4"
                  style={{ 
                    backgroundColor: company?.accent || '#C9A227', 
                    color: company?.color || '#0B3D2E' 
                  }}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main style={{ backgroundColor: '#F5F5DC' }}>
        {children}
      </main>

      <footer style={{ backgroundColor: company?.color || '#0B3D2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={Logo} alt="TaaSa" className="w-12 h-12" />
                <div>
                  <h3 className="font-cursive font-bold text-xl text-white">TaaSa Business Group</h3>
                  <p className="text-white/60 text-sm">Umbrella of 5 Companies</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                One umbrella, five specialized companies - delivering excellence across Agriculture, Trading, Packaging, Hospitality, and Tourism sectors.
              </p>
            </div>
            <div>
              <h4 className="font-handlee font-bold text-lg text-white mb-4">Our Companies</h4>
              <ul className="space-y-2">
                {COMPANIES.map((c) => (
                  <li key={c.id}>
                    <Link to={`/company/${c.id}`} className="text-white/70 hover:text-white text-sm">
                      {c.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-handlee font-bold text-lg text-white mb-4">Contact</h4>
              <p className="text-white/70 text-sm">{company?.address || 'Colombo, Sri Lanka'}</p>
              <p className="text-white/70 text-sm">{company?.phone}</p>
              <p className="text-white/70 text-sm">{company?.email}</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} TaaSa Business Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {!isLoading && (
        <a
          href={`https://wa.me/${company?.whatsapp?.replace(/\s/g, '') || '94720516432'}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          style={{ backgroundColor: '#25D366' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </>
  )
}