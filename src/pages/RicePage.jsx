import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
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
import WhatsAppButton from '../components/ui/WhatsAppButton'
import Logo from '/assets/img/logos/TaaSa.svg'
import { COMPANIES } from '../lib/constants'
import SEO from '../components/ui/SEO'

export default function RicePage() {
  SEO({ page: 'taasa-rice' })
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const criticalImages = ['/assets/img/logos/logo.png']
    let loadedCount = 0
    const totalImages = criticalImages.length

    criticalImages.forEach((src) => {
      const img = new Image()
      img.onload = () => { loadedCount++; if (loadedCount >= totalImages) setImagesLoaded(true) }
      img.onerror = () => { loadedCount++; if (loadedCount >= totalImages) setImagesLoaded(true) }
      img.src = src
    })

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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
      <div className="min-h-screen bg-light-beige relative overflow-x-hidden">
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
        <WhatsAppButton page="taasa-rice" />
      </div>
    </>
  )
}

function Navbar({ company }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
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
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-deep-green py-3"
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
                alt="TaaSa Rice" 
                className="w-full h-full object-contain rounded-lg"
                loading="eager"
              />
            </motion.div>
            <span className="font-cursive font-bold text-lg sm:text-2xl hidden sm:block text-white">
              TaaSa Rice
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="font-cursive font-medium transition-colors hover:text-accent-gold text-white/90 text-sm xl:text-base"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="relative group">
              <button className="font-cursive font-medium transition-colors hover:text-accent-gold text-white/90 flex items-center gap-1 text-sm xl:text-base">
                Our Companies ▾
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-deep-green/95 backdrop-blur-lg rounded-xl shadow-2xl py-2 w-56">
                  <Link to="/" className="block font-nunito text-white py-2 px-4 hover:text-accent-gold">TaaSa Home</Link>
                  {COMPANIES.slice(1).map((c) => (
                    <Link key={c.id} to={`/${c.id}`} className="block font-nunito text-white py-2 px-4 hover:text-accent-gold">{c.shortName}</Link>
                  ))}
                </div>
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-gold text-deep-green px-4 xl:px-6 py-1.5 xl:py-2 rounded-full font-cursive font-semibold hover:bg-yellow-400 transition-colors shadow-lg touch-target text-sm xl:text-base"
            >
              Contact
            </motion.a>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            className="lg:hidden bg-deep-green/98 backdrop-blur-lg overflow-y-auto origin-top fixed inset-0 top-[60px] z-[90]"
            style={{ backgroundColor: '#0B3D2E' }}
          >
            <div className="px-4 pt-4 pb-8 h-full">
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
                TaaSa Home
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
                    to={`/${c.id}`}
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
                  TaaSa Home
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
      </div>
    </motion.nav>
  )
}

function Footer({ company }) {
  return (
    <footer style={{ backgroundColor: company?.color || '#0B3D2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="TaaSa" className="w-12 h-12 bg-white/10 rounded-lg p-1" style={{ filter: 'brightness(0) invert(1)' }} />
              <div>
                <h3 className="font-cursive font-bold text-xl text-white">TaaSa Business Group</h3>
                <p className="text-white/60 text-sm">Umbrella of 5 Companies</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">One umbrella, five specialized companies.</p>
          </div>
          <div>
            <h4 className="font-handlee font-bold text-lg text-white mb-4">Our Companies</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-accent-gold text-sm">TaaSa Home</Link></li>
              {COMPANIES.slice(1).map((c) => (<li key={c.id}><Link to={`/${c.id}`} className="text-white/70 hover:text-accent-gold text-sm">{c.shortName}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-handlee font-bold text-lg text-white mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <Phone size={16} />
              <p>{company?.phone}</p>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <Mail size={16} />
              <p>{company?.email}</p>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin size={16} />
              <p>{company?.address || 'Colombo, Sri Lanka'}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/50 text-sm text-center">© {new Date().getFullYear()} TaaSa Business Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}