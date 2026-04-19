import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe, Truck, Package, TrendingUp, Check, Phone, Mail, MapPin } from 'lucide-react'
import Contact from '../components/sections/Contact'
import { WaveGradient } from '../components/ui/WaveDivider'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import Logo from '/assets/img/logos/TaaSa.svg'
import LoadingScreen from '../components/ui/LoadingScreen'
import { COMPANIES } from '../lib/constants'

const COLORS = {
  color: COMPANIES[1].color,
  accent: COMPANIES[1].accent,
  secondary: COMPANIES[1].secondary,
  bg: COMPANIES[1].bgLight || '#F5F5DC'
}

export default function TradingPage() {
  const company = COMPANIES[1]
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

    const timeout = setTimeout(() => setImagesLoaded(true), 5000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  return (
    <>
      {isLoading && <LoadingScreen 
        title={company.shortName}
        subtitle={company.tagline}
        primaryColor={company.color}
        accentColor={company.accent}
        bgColor={company.color}
      />}
      <Navbar company={company} />
      <Hero />
      <About />
      <Services />
      <GlobalNetwork />
      <WhyUs />
      <Contact colors={{ bg: COLORS.bg, primary: COLORS.color, accent: COLORS.accent }} />
      <Footer company={company} />
      <WhatsAppButton />
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'backdrop-blur-md shadow-2xl py-2' : 'py-3'}`}
      style={{ 
        backgroundColor: isScrolled ? `${COLORS.color}F2` : COLORS.color,
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="TaaSa" className="w-12 h-10 bg-white/90 rounded-lg p-0.5" />
            <span className="font-cursive font-bold text-lg sm:text-2xl hidden sm:block text-white">{company.shortName}</span>
          </Link>
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <Link to="#about" className="font-cursive text-white text-sm xl:text-base hover:text-accent transition-colors">About</Link>
            <Link to="#services" className="font-cursive text-white text-sm xl:text-base hover:text-accent transition-colors">Services</Link>
            <div className="relative group">
              <button className="font-cursive font-medium transition-colors hover:text-accent text-white/90 flex items-center gap-1 text-sm xl:text-base">
                Our Companies ▾
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="rounded-xl shadow-2xl overflow-hidden backdrop-blur-lg py-2 w-40" style={{ backgroundColor: COLORS.color }}>
                  <Link
                    to="/"
                    className="block font-nunito text-white py-2 px-4 hover:text-accent transition-colors"
                  >
                    TaaSa Home
                  </Link>
                  {COMPANIES.filter(c => c.id !== company.id).map((c) => (
                    <Link
                      key={c.id}
                      to={`/company/${c.id}`}
                      className="block font-nunito text-white py-2 px-4 hover:text-accent transition-colors"
                    >
                      {c.shortName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="#contact" className="px-4 xl:px-6 py-1.5 xl:py-2 rounded-full font-cursive font-semibold text-sm xl:text-base hover:opacity-90 transition-colors shadow-lg" style={{ backgroundColor: COLORS.accent, color: COLORS.color }}>Contact</Link>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-1.5 sm:p-2 z-50"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden overflow-y-auto fixed inset-0 top-[60px] z-[90]" style={{ backgroundColor: COLORS.color }}>
          <div className="px-4 pt-4 pb-8 h-full">
            <Link to="#about" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="#services" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <div className="border-b border-white/10 py-2">
              <span className="block font-cursive font-medium py-2 text-white/60 text-sm">Our Companies</span>
              <Link to="/" className="block font-nunito text-white py-2 pl-4 hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>TaaSa Home</Link>
              {COMPANIES.filter(c => c.id !== company.id).map((c) => (
                <Link key={c.id} to={`/company/${c.id}`} className="block font-nunito text-white py-2 pl-4 hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>{c.shortName}</Link>
              ))}
            </div>
            <Link to="#contact" className="block font-cursive font-semibold text-center mt-4 py-3 rounded-full" style={{ backgroundColor: COLORS.accent, color: COLORS.color }} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/pageimgs/GlobalTrading.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: COLORS.accent, color: COLORS.color }}>
          {COMPANIES[1].sector}
        </span>
        <h1 className="font-cursive font-bold text-white text-5xl mb-4">{COMPANIES[1].shortName}</h1>
        <p className="font-handlee text-white/90 text-2xl mb-6">{COMPANIES[1].tagline}</p>
<p className="font-nunito text-white/80 max-w-2xl mx-auto">{COMPANIES[1].description}</p>
        </div>
      <WaveGradient 
        direction="up"
        fromColor="#B1D0E0"
        toColor={COLORS.bg}
        midColor="#B1D0E0"
        height="80px"
      />
    </section>
  )
}

function Footer({ company }) {
  return (
    <footer style={{ backgroundColor: COLORS.color }}>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="TaaSa" className="w-12 h-12 bg-white/10 rounded-lg p-1" />
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
              <li><Link to="/" className="text-white/70 hover:text-accent text-sm">TaaSa Home</Link></li>
              {COMPANIES.filter(c => c.id !== company.id).map((c) => (
                <li key={c.id}><Link to={`/company/${c.id}`} className="text-white/70 hover:text-accent text-sm">{c.shortName}</Link></li>
              ))}
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

function About() {
  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="font-cursive font-bold text-4xl mb-4" style={{ color: COLORS.color }}>About {COMPANIES[1].shortName}</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.accent }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <p className="font-nunito text-gray-700 text-lg">{COMPANIES[1].description}</p>
            <p className="font-nunito text-gray-700">We specialize in international trade, connecting Sri Lankan products with global markets. Our extensive network ensures reliable supply chain solutions for businesses worldwide.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}>
              <Globe className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} />
              <h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Global</h4>
              <p className="text-sm text-gray-600">Markets</p>
            </div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}>
              <Truck className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} />
              <h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Fast</h4>
              <p className="text-sm text-gray-600">Delivery</p>
            </div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}>
              <Package className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} />
              <h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Quality</h4>
              <p className="text-sm text-gray-600">Products</p>
            </div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}>
              <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} />
              <h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Trusted</h4>
              <p className="text-sm text-gray-600">Partner</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="font-cursive font-bold text-4xl mb-4" style={{ color: COLORS.color }}>Our Services</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.accent }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANIES[1].features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl"
              style={{ backgroundColor: COLORS.bg, borderLeft: `4px solid ${COLORS.accent}` }}
            >
              <Check className="w-6 h-6 mb-3" style={{ color: COLORS.accent }} />
              <h3 className="font-handlee font-bold text-lg mb-2" style={{ color: COLORS.color }}>{feature}</h3>
              <p className="font-nunito text-gray-600 text-sm">Professional services tailored to your needs.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GlobalNetwork() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: COLORS.color }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Globe className="w-20 h-20 mx-auto mb-6" style={{ color: COLORS.accent }} />
          <h2 className="font-cursive font-bold text-3xl text-white mb-4">Global Trade Network</h2>
          <p className="text-white/70 max-w-2xl mx-auto">We connect Sri Lankan businesses with markets across the Middle East, Africa, Europe, and Asia. Our established logistics ensure smooth international trade.</p>
        </motion.div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="font-cursive font-bold text-4xl mb-4" style={{ color: COLORS.color }}>Why Choose Us</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.accent }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Experienced Team', 'Competitive Pricing', 'Reliable Supply Chain', '24/7 Support'].map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 p-4 rounded-xl bg-white">
              <Check className="w-5 h-5" style={{ color: COLORS.accent }} />
              <span className="font-nunito font-medium" style={{ color: COLORS.color }}>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





