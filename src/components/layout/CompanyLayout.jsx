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
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
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
            <Link to="/" className="flex items-center gap-2 sm:gap-3 touch-target">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-12 sm:w-16 sm:h-12 rounded-xl overflow-hidden p-0.5 sm:p-1 bg-white/90"
              >
                <img 
                  src={Logo} 
                  alt="TaaSa Business Group" 
                  className="w-full h-full object-contain rounded-lg"
                  loading="eager"
                />
              </motion.div>
              <span className="font-cursive font-bold text-lg sm:text-2xl hidden sm:block" style={{ color: textColor }}>
                {company?.shortName || 'TaaSa Business Group'}
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link to="/" className="font-cursive font-medium hover:opacity-80 transition-opacity text-sm xl:text-base" style={{ color: textColor }}>
                Home
              </Link>
              <div className="relative group">
                <button className="font-cursive font-medium flex items-center gap-1 hover:opacity-80 transition-opacity text-sm xl:text-base" style={{ color: textColor }}>
                  Companies ▾
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="rounded-xl shadow-2xl overflow-hidden" style={{ backgroundColor: company?.color || '#0B3D2E' }}>
                    {COMPANIES.map((c) => (
                      <Link
                        key={c.id}
                        to={`/${c.id}`}
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
                className="px-4 xl:px-6 py-1.5 xl:py-2 rounded-full font-cursive font-semibold hover:opacity-90 transition-opacity shadow-lg touch-target text-sm xl:text-base"
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
              className="lg:hidden p-1.5 sm:p-2 touch-target z-50"
              style={{ color: textColor }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="lg:hidden overflow-y-auto origin-top fixed inset-0 top-[60px] z-[90]"
              style={{ backgroundColor: company?.color || '#0B3D2E' }}
            >
              <div className="px-4 pt-4 pb-8 h-full space-y-1">
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
                      to={`/${c.id}`}
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
                    <Link to={`/${c.id}`} className="text-white/70 hover:text-white text-sm">
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
            <p className="text-white/50 text-sm text-center">© {new Date().getFullYear()} TaaSa Business Group. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {!isLoading && <WhatsAppButton />}
    </>
  )
}