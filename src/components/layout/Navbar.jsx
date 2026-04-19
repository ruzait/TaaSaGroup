import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Logo from '/assets/img/logos/TaaSa.svg'
import { NAV_LINKS } from '../../lib/constants'

const SCROLL_THRESHOLD = 50

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-deep-green/95 backdrop-blur-md shadow-2xl py-2'
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 touch-target"
            aria-label="TaaSa Rice - Home"
          >
            <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl overflow-hidden p-1 sm:p-1.5 bg-white/90">
              <img 
                src={Logo} 
                alt="TaaSa Rice Processing Company Logo" 
                className="w-full h-full object-contain rounded-lg"
                loading="eager"
              />
            </div>
            <span className="font-cursive font-bold text-xl sm:text-2xl hidden sm:block text-white">
              TaaSa Rice
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="font-cursive font-medium transition-colors hover:text-accent-gold text-white/90"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-gold text-deep-green px-6 py-2 rounded-full font-cursive font-semibold hover:bg-yellow-400 transition-colors shadow-lg touch-target"
            >
              Contact
            </motion.a>
            <InstallAppButton />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 touch-target"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-deep-green/98 backdrop-blur-lg overflow-hidden origin-top"
          >
            <div className="px-4 py-5 sm:py-6 space-y-1 sm:space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-white font-cursive font-medium text-base sm:text-lg py-3 sm:py-4 hover:text-accent-gold transition-colors border-b border-white/10 touch-target"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={handleNavClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="block bg-accent-gold text-deep-green px-6 py-3 sm:py-4 rounded-full font-cursive font-semibold text-center mt-4 sm:mt-6 touch-target"
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handleBeforeInstall)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
      }
    } else {
      // For Safari/Firefox - show instructions
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      
      if (isMobile) {
        alert('To add to Home Screen:\n1. Tap the Share button\n2. Select "Add to Home Screen"')
      } else if (isMac) {
        alert('To install on Mac:\n1. Open Safari\n2. Go to File → Add to Dock\nOR drag the favicon from address bar to Dock')
      } else {
        alert('To install on this browser:\nGo to Menu → Settings → Add to Home Screen')
      }
    }
  }

  // Show button always so users can get instructions
  return (
    <motion.button
      type="button"
      onClick={handleInstall}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white font-handlee font-bold rounded-lg hover:bg-white/30 transition-colors cursor-pointer border border-white/20"
      title="Install App"
    >
      <Download size={18} />
      <span className="hidden lg:inline">Install App</span>
    </motion.button>
  )
}
