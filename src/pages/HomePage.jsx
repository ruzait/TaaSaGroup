import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Scale, Package, Home, Palmtree, Truck, Droplets, Sparkles, Award, Globe, Clock, Shield, Leaf, Users, TrendingUp, Phone, Mail, MapPin } from 'lucide-react'
import Logo from '/assets/img/logos/TaaSa.svg'
import { COMPANIES } from '../lib/constants'
import LoadingScreen from '../components/ui/LoadingScreen'
import Contact from '../components/sections/Contact'
import { WaveGradient } from '../components/ui/WaveDivider'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import SEO from '../components/ui/SEO'

const COLORS = { color: '#0f172a', accent: '#C9A227', bg: '#F5F5DC' }

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 50); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll) }, [])
  useEffect(() => { if (isMobileMenuOpen) { document.body.style.overflow = 'hidden' } else { document.body.style.overflow = '' }; return () => { document.body.style.overflow = '' } }, [isMobileMenuOpen])
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-3`} style={{ backgroundColor: isScrolled ? COLORS.color : COLORS.color }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2"><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-14 h-12 rounded-xl overflow-hidden p-0.5 bg-white/90">
                <img src={Logo} alt="TaaSa" className="w-full h-full object-contain rounded-lg" />
              </motion.div><span className="font-cursive font-bold text-lg sm:text-2xl hidden sm:block text-white">TaaSa Business Group</span></Link>
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <Link to="#home" className="font-cursive text-white text-sm xl:text-base hover:text-accent transition-colors">Home</Link>
            <Link to="#companies" className="font-cursive text-white text-sm xl:text-base hover:text-accent transition-colors">Companies</Link>
            <Link to="#about" className="font-cursive text-white text-sm xl:text-base hover:text-accent transition-colors">About</Link>
            <div className="relative group">
              <button className="font-cursive font-medium transition-colors hover:text-accent text-white/90 flex items-center gap-1 text-sm xl:text-base">
                Our Companies ▾
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="rounded-xl shadow-2xl overflow-hidden backdrop-blur-lg py-2 w-56" style={{ backgroundColor: COLORS.color }}>
                  <Link to="/" className="block font-nunito text-white py-2 px-4 hover:text-accent transition-colors">TaaSa Home</Link>
                  {COMPANIES.map((c) => (
                    <Link key={c.id} to={`/${c.id}`} className="block font-nunito text-white py-2 px-4 hover:text-accent transition-colors">{c.shortName}</Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="#contact" className="px-4 xl:px-6 py-1.5 xl:py-2 rounded-full font-cursive font-semibold text-sm xl:text-base hover:opacity-90 transition-colors shadow-lg" style={{ backgroundColor: COLORS.accent, color: COLORS.color }}>Contact</Link>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-1.5 sm:p-2 z-50" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden overflow-y-auto fixed inset-0 top-[60px] z-[90]" style={{ backgroundColor: COLORS.color }}>
          <div className="px-4 pt-4 pb-8 h-full">
            <Link to="#home" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="#companies" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>Companies</Link>
            <Link to="#about" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <div className="border-b border-white/10 py-2">
              <span className="block font-cursive font-medium py-2 text-white/60 text-sm">Our Companies</span>
              <Link to="/" className="block font-nunito text-white py-2 pl-4 hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>TaaSa Home</Link>
              {COMPANIES.map((c) => (
                <Link key={c.id} to={`/${c.id}`} className="block font-nunito text-white py-2 pl-4 hover:text-accent" onClick={() => setIsMobileMenuOpen(false)}>{c.shortName}</Link>
              ))}
            </div>
            <Link to="#contact" className="block font-cursive font-semibold text-center mt-4 py-3 rounded-full" style={{ backgroundColor: COLORS.accent, color: COLORS.color }} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

function Footer() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 100); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll) }, [])
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return (
    <footer style={{ backgroundColor: COLORS.color }}>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="TaaSa" className="w-12 h-12 bg-white/10 rounded-lg p-1" style={{ filter: 'brightness(0) invert(1)' }} />
              <div>
                <h3 className="font-cursive font-bold text-xl text-white">TaaSa Business Group</h3>
                <p className="text-white/60 text-sm">Umbrella of 5 Companies</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">One umbrella, five specialized companies delivering excellence across Sri Lanka.</p>
          </div>
          <div>
            <h4 className="font-cursive font-bold text-lg text-white mb-4">Our Companies</h4>
            <ul className="space-y-2">
              {COMPANIES.map((c) => (
                <li key={c.id}>
                  <Link to={`/${c.id}`} className="text-white/70 hover:text-white text-sm transition-colors">
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-cursive font-bold text-lg text-white mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <Phone size={16} />
              <p>+94 67 222 2540</p>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <Mail size={16} />
              <p>taasabusinessgroup@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin size={16} />
              <p>No.446, Sri Vajiragnana Mawatha, Colombo 09</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-white/50 text-sm text-center">© {new Date().getFullYear()} TaaSa Business Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

const COMPANY_IMAGES = {
  'taasa-rice': '/assets/img/pageimgs/TaasaRice.png',
  'taasa-trading': '/assets/img/pageimgs/GlobalTrading.png',
  'taasa-packaging': '/assets/img/pageimgs/Packaging.png',
  'taasa-guestinn': '/assets/img/pageimgs/GuestInn.png',
  'taasa-resort': '/assets/img/pageimgs/TaaSaResort.png',
}

const sectorIcons = {
  Agriculture: Droplets,
  Trading: Truck,
  Manufacturing: Package,
  Hospitality: Home,
  Tourism: Palmtree,
}

const sectorGradients = {
  Agriculture: 'from-[#0B3D2E] via-[#1a5c42] to-[#0B3D2E]',
  Trading: 'from-[#0B1F3B] via-[#1a3a5c] to-[#0B1F3B]',
  Manufacturing: 'from-[#A47251] via-[#b58361] to-[#A47251]',
  Hospitality: 'from-[#7c2d12] via-[#a4421c] to-[#7c2d12]',
  Tourism: 'from-[#0f766e] via-[#14b8a6] to-[#0f766e]',
}

export default function HomePage() {
  SEO({ page: 'home' })
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const criticalImages = ['/assets/img/logos/logo.png', '/assets/img/pageimgs/hero-bg.jpg']
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

  return (
    <>
      {isLoading && <LoadingScreen 
        title="TaaSa Business Group"
        subtitle="Umbrella of 5 Companies"
        primaryColor="#0f172a"
        accentColor="#C9A227"
        bgColor="#0f172a"
      />}
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px]"
          style={{ backgroundImage: "url('/assets/img/pageimgs/HomePage.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col items-center mb-6">
              <img src={Logo} alt="TaaSa" className="w-48 h-36" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="font-cursive font-bold text-white text-4xl sm:text-5xl">TaaSa Business Group</span>
            </div>
            <p className="font-nunito text-white/80 text-lg sm:text-xl max-w-2xl mx-auto">
              One Umbrella, Five Specialized Companies
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-nunito text-white/70 max-w-3xl mx-auto mb-12 text-base sm:text-lg"
          >
            Delivering excellence across Agriculture, Trading, Packaging, Hospitality, and Tourism sectors in Sri Lanka
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#companies"
              className="px-8 py-3 rounded-full font-cursive font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
              style={{ backgroundColor: '#C9A227', color: '#0F172A' }}
            >
              Explore Our Companies
            </a>
          </motion.div>
        </div>

        <WaveGradient
          direction="up"
          fromColor="#0F172A"
          toColor="#0F172A"
          midColor="#0F172A"
          height="100px"
          style="smooth"
        />
      </section>

      {/* Companies Overview - Full Width Cards */}
      <section id="companies" className="py-20" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-cursive font-bold text-4xl sm:text-5xl mb-4 text-white">
              Our Companies
            </h2>
            <p className="font-nunito text-white/70 max-w-2xl mx-auto">
              Five specialized companies under one umbrella, each excelling in their respective sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {COMPANIES.map((company, index) => {
              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl group"
                  style={{ backgroundColor: company.color }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col lg:flex-row gap-0 w-full overflow-hidden">
                    {/* Image Side */}
                    <div className="lg:w-1/2 h-[180px] sm:h-[220px] md:h-[250px] lg:h-[400px] relative overflow-hidden">
                      <motion.img 
                        src={COMPANY_IMAGES[company.id] || '/assets/img/pageimgs/hero-bg.jpg'}
                        alt={company.shortName}
                        className="w-full h-full object-cover object-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                      <motion.div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(135deg, ${company.accent}20, transparent)` }}
                      />
                    </div>
                    
                    {/* Content Side */}
                    <div className="lg:w-1/2 p-4 sm:p-6 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-nunito mb-4 w-fit" style={{ backgroundColor: company.accent, color: company.color }}>
                          {company.sector}
                        </span>
                        <h3 className="font-cursive font-bold text-3xl lg:text-4xl text-white mb-3 group-hover:text-white transition-colors">
                          {company.shortName}
                        </h3>
                        <p className="font-handlee text-xl lg:text-2xl mb-4" style={{ color: company.accent }}>
                          {company.tagline}
                        </p>
                        <p className="font-nunito text-white/80 text-base lg:text-lg mb-6 leading-relaxed line-clamp-3">
                          {company.description}
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            to={`/${company.id}`}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-cursive font-semibold text-base transition-all w-full"
                            style={{ backgroundColor: company.accent, color: company.color }}
                          >
                            Visit {company.shortName} <ArrowRight className="w-5 h-5" />
                          </Link>
                        </motion.div>
                      </motion.div>
                      
                      {/* Decorative elements - random positions */}
                      <motion.div 
                        className="absolute w-32 h-32 rounded-full opacity-15"
                        style={{ 
                          backgroundColor: company.accent,
                          right: -20,
                          bottom: -30,
                        }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                      />
                      <motion.div 
                        className="absolute w-20 h-20 rounded-full opacity-20"
                        style={{ 
                          backgroundColor: company.accent,
                          left: -10,
                          top: '20%',
                        }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <motion.div 
                        className="absolute w-16 h-16 rounded-full opacity-10"
                        style={{ 
                          backgroundColor: company.accent,
                          right: '30%',
                          top: -20,
                        }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.18, 0.08] }}
                        transition={{ duration: 5, repeat: Infinity, delay: index * 0.7 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About the Group */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[2/2] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/img/pageimgs/Thaahir_HomePage.jpeg" 
                  alt="TaaSa Leadership" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white shadow-2xl">
                <p className="font-cursive font-bold text-xl" style={{ color: '#0f172a' }}>Leading Excellence</p>
                <p className="font-nunito text-gray-600 text-sm">Since 2017</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cursive font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#0f172a' }}>
                About <span style={{ backgroundImage: `linear-gradient(135deg, ${COLORS.color}, ${COLORS.accent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', backgroundClip: 'text' }}>TaaSa Business Group</span>
              </h2>
              <div className="w-20 h-1 rounded-full mb-8" style={{ backgroundColor: '#C9A227' }} />
              <p className="font-nunito text-gray-700 text-lg mb-6 leading-relaxed">
                TaaSa Business Group is a premier conglomerate in Sri Lanka, operating across five diverse sectors: Agriculture, Trading, Manufacturing, Hospitality, and Tourism. Founded with a vision to deliver excellence, we have grown from a single rice processing company into a multi-industry leader.
              </p>
              <p className="font-nunito text-gray-700 text-lg mb-8 leading-relaxed">
                Our group combines traditional Sri Lankan values with modern business practices, ensuring quality products and exceptional services while maintaining our commitment to sustainability and community development.
              </p>
              <div className="p-6 rounded-2xl bg-white shadow-lg border-l-4" style={{ borderColor: '#C9A227' }}>
                <p className="font-nunito text-gray-500 text-sm mb-1">Managing Director</p>
                <h3 className="font-cursive font-bold text-2xl" style={{ color: '#0f172a' }}>SL. Mohamed Thahir</h3>
                <p className="font-nunito text-gray-600 text-sm mt-2">Founder & Visionary Leader</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-cursive font-bold text-4xl sm:text-5xl mb-4 text-white">
              Why Choose Us
            </h2>
            <p className="font-nunito text-white/70 max-w-2xl mx-auto">
              What sets TaaSa Business Group apart from the rest
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, title: 'Quality Assurance', desc: 'Premium products meeting international standards' },
              { icon: Globe, title: 'Global Reach', desc: 'Exporting to markets worldwide' },
              { icon: Clock, title: 'Timely Delivery', desc: 'Reliable and efficient service' },
              { icon: Shield, title: 'Trusted Experience', desc: 'Over 10 years of industry expertise' },
              { icon: Users, title: 'Customer Focus', desc: '24/7 dedicated support' },
              { icon: TrendingUp, title: 'Competitive Pricing', desc: 'Best value for your investment' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                <benefit.icon className="w-10 h-10 mb-4" style={{ color: '#C9A227' }} />
                <h3 className="font-cursive font-bold text-xl text-white mb-2">{benefit.title}</h3>
                <p className="font-nunito text-white/70">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F5DC' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-cursive font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#0f172a' }}>
              Industries We Serve
            </h2>
            <p className="font-nunito text-gray-600 max-w-2xl mx-auto">
              Diverse sectors, unified excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPANIES.map((company, index) => (
              <Link key={company.id} to={`/${company.id}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 sm:p-6 rounded-2xl text-center group cursor-pointer"
                  style={{ backgroundColor: company.color }}
                >
                  <div className="text-4xl sm:text-5xl mb-3 text-white drop-shadow-lg">
                    {company.id === 'taasa-rice' && '🌾'}
                    {company.id === 'taasa-trading' && '🚢'}
                    {company.id === 'taasa-packaging' && '📦'}
                    {company.id === 'taasa-guestinn' && '🏠'}
                    {company.id === 'taasa-resort' && '🏝️'}
                  </div>
                  <h3 className="font-cursive font-bold text-base sm:text-lg text-white">{company.shortName}</h3>
                  <p className="font-nunito text-white/80 text-xs sm:text-sm mt-1">{company.sector}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#0f172a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5', label: 'Companies' },
              { number: '10+', label: 'Years Experience' },
              { number: 'Global', label: 'Markets' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <motion.h3 
                  className="font-cursive font-bold text-4xl sm:text-5xl mb-2"
                  style={{ color: '#C9A227' }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="font-nunito text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact colors={{ bg: COLORS.bg, primary: COLORS.color, accent: COLORS.accent }} />
      
      <Footer />
      <WhatsAppButton page="home" />
    </>
  )
}