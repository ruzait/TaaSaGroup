import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import About from '../components/sections/About'
import MDMessage from '../components/sections/MDMessage'
import CoreValues from '../components/sections/CoreValues'
import Process from '../components/sections/Process'
import Certifications from '../components/sections/Certifications'
import Products from '../components/sections/Products'
import FAQ from '../components/sections/FAQ'
import Gallery from '../components/sections/Gallery'
import Reviews from '../components/sections/Reviews'
import Contact from '../components/sections/Contact'
import FloatingRice from '../components/ui/FloatingRice'
import LoadingScreen from '../components/ui/LoadingScreen'
import Logo from '/assets/img/logos/TaaSa.svg'
import { COMPANIES, whatsappLink } from '../lib/constants'

export default function RicePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const criticalImages = [
      '/assets/img/logos/logo.png',
      '/assets/img/pageimgs/hero-bg.jpg',
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
  }, [])

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  const company = COMPANIES[0]

  return (
    <>
      {isLoading && <LoadingScreen 
        title="TaaSa Rice Processing"
        subtitle="Premium Quality Rice"
        primaryColor="#0B3D2E"
        accentColor="#C9A227"
        bgColor="#0B3D2E"
      />}
      <FloatingRice />
      <div className="min-h-screen bg-light-beige relative">
        <Navbar company={company} />
        <main>
          <Hero />
          <Features />
          <About />
          <MDMessage />
          <CoreValues />
          <Products />
          <Process />
          <Certifications />
          <Gallery />
          <FAQ />
          <Reviews />
          <Contact />
        </main>
        <Footer company={company} />
        <WhatsAppButton company={company} />
      </div>
    </>
  )
}

function Navbar({ company }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Gallery', href: '#gallery' },
  ]

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
          <Link to="/" className="flex items-center gap-3 touch-target">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl overflow-hidden p-1 sm:p-1.5 bg-white/90"
            >
              <img 
                src={Logo} 
                alt="TaaSa Rice" 
                className="w-full h-full object-contain rounded-lg"
                loading="eager"
              />
            </motion.div>
            <span className="font-cursive font-bold text-xl sm:text-2xl hidden sm:block text-white">
              TaaSa Rice
            </span>
          </Link>

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
            <div className="relative group">
              <button className="font-cursive font-medium transition-colors hover:text-accent-gold text-white/90 flex items-center gap-1">
                All Companies ▾
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="rounded-xl shadow-2xl overflow-hidden bg-deep-green">
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-white/10 transition-colors whitespace-nowrap font-nunito text-sm border-b border-white/10"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    TaaSa Group Home
                  </Link>
                  {COMPANIES.map((c) => (
                    <Link
                      key={c.id}
                      to={`/company/${c.id}`}
                      className="block px-4 py-2 hover:bg-white/10 transition-colors whitespace-nowrap font-nunito text-sm"
                      style={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      {c.shortName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-gold text-deep-green px-6 py-2 rounded-full font-cursive font-semibold hover:bg-yellow-400 transition-colors shadow-lg touch-target"
            >
              Contact
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 touch-target"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="md:hidden bg-deep-green/98 backdrop-blur-lg overflow-hidden origin-top fixed inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="px-4 py-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-cursive font-medium text-white py-3 hover:text-accent-gold transition-colors border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-cursive font-medium text-white py-3 hover:text-accent-gold transition-colors border-b border-white/10"
            >
              TaaSa Group
            </Link>
            <div className="border-b border-white/10 py-2">
              <span className="block font-cursive text-white/60 text-sm py-2">Other Companies</span>
              <div className="block px-4 py-2 flex items-center gap-2" style={{ backgroundColor: '#C9A22720', color: 'white' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                TaaSa Rice
              </div>
              {COMPANIES.slice(1).map((c) => (
                <Link
                  key={c.id}
                  to={`/company/${c.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-nunito text-white py-2 pl-4 hover:text-accent-gold"
                >
                  {c.shortName}
                </Link>
              ))}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-nunito text-white py-2 pl-4 hover:text-accent-gold"
              >
                TaaSa Group Home
              </Link>
            </div>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-accent-gold text-deep-green px-6 py-3 rounded-full font-cursive font-semibold text-center mt-4"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function Footer({ company }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer style={{ backgroundColor: company?.color || '#0B3D2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="TaaSa" className="w-12 h-12 bg-white/10 rounded-lg p-1" />
              <div>
                <h3 className="font-cursive font-bold text-xl text-white">TaaSa Business Group</h3>
                <p className="text-white/60 text-sm">Umbrella of 5 Companies</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              One umbrella, five specialized companies - delivering excellence across Agriculture, Trading, Packaging, Hospitality, and Tourism sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-handlee font-bold text-lg text-white mb-4">Contact</h4>
            <p className="text-white/70 text-sm">No.446, Sri Vajiragnana Mawatha, Colombo - 09</p>
            <p className="text-white/70 text-sm">+94 67 222 2540</p>
            <p className="text-white/70 text-sm">taasarice@gmail.com</p>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} TaaSa Business Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppButton({ company }) {
  if (!company) return null
  
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}