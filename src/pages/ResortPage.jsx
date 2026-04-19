import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Palmtree, Check, Waves, Sun, Camera, Flower2 } from 'lucide-react'
import Contact from '../components/sections/Contact'
import { WaveGradient } from '../components/ui/WaveDivider'
import Logo from '/assets/img/logos/TaaSa.svg'
import LoadingScreen from '../components/ui/LoadingScreen'
import { COMPANIES } from '../lib/constants'

const COLORS = { 
  color: COMPANIES[4].color, 
  accent: COMPANIES[4].accent, 
  secondary: COMPANIES[4].secondary,
  bg: COMPANIES[4].bgLight || '#F5F5DC' 
}

export default function ResortPage() {
  const company = COMPANIES[4]
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const criticalImages = ['/assets/img/logos/logo.png']
    let loadedCount = 0, totalImages = criticalImages.length
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
    if (imagesLoaded) { const timer = setTimeout(() => setIsLoading(false), 500); return () => clearTimeout(timer) }
  }, [imagesLoaded])

  return (
    <>
      {isLoading && <LoadingScreen title={company.shortName} subtitle={company.tagline} primaryColor={company.color} accentColor={company.accent} bgColor={company.color} />}
      <Navbar company={company} />
      <Hero />
      <About />
      <Villas />
      <Experiences />
      <SpaWellness />
      <WhyChoose />
      <Contact colors={{ bg: COLORS.bg, primary: COLORS.color, accent: COLORS.accent }} />
      <Footer company={company} />
      <WhatsAppButton company={company} />
    </>
  )
}

function Navbar({ company }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 50); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll) }, [])
  useEffect(() => { if (isMobileMenuOpen) { document.body.style.overflow = 'hidden' } else { document.body.style.overflow = '' }; return () => { document.body.style.overflow = '' } }, [isMobileMenuOpen])
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!isScrolled ? 'py-4' : 'py-2'}`} style={{ backgroundColor: isScrolled ? `${COLORS.color}F2` : 'transparent', backdropFilter: isScrolled ? 'blur(12px)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3"><img src={Logo} alt="TaaSa" className="w-16 h-12 bg-white/90 rounded-lg p-1" /><span className="font-cursive font-bold text-xl text-white">{company.shortName}</span></Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="#about" className="font-cursive text-white">About</Link>
            <Link to="#villas" className="font-cursive text-white">Villas</Link>
            <Link to="#experiences" className="font-cursive text-white">Experiences</Link>
            <div className="relative group">
              <button className="font-cursive font-medium transition-colors hover:text-accent text-white/90 flex items-center gap-1">
                All Companies ▾
              </button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="rounded-xl shadow-2xl overflow-hidden" style={{ backgroundColor: COLORS.color }}>
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
            <Link to="#contact" className="px-6 py-2 rounded-full font-cursive text-white" style={{ backgroundColor: COLORS.accent }}>Contact</Link>
          </div>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-4 px-4 max-h-[calc(100vh-4rem)] overflow-y-auto" style={{ backgroundColor: COLORS.color }}>
          <Link to="#about" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="#villas" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>Villas</Link>
          <Link to="#experiences" className="block font-cursive text-white py-3 border-b border-white/10" onClick={() => setIsMobileMenuOpen(false)}>Experiences</Link>
          <Link to="#contact" className="block font-cursive text-white py-3" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </motion.nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/pageimgs/TaaSaResort.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: COLORS.accent, color: COLORS.color }}>{COMPANIES[4].sector}</span>
        <h1 className="font-cursive font-bold text-white text-5xl mb-4">{COMPANIES[4].shortName}</h1>
        <p className="font-handlee text-white/90 text-2xl mb-6">{COMPANIES[4].tagline}</p>
        <p className="font-nunito text-white/80 max-w-2xl mx-auto">{COMPANIES[4].description}</p>
      </div>
      <WaveGradient direction="up" fromColor={COLORS.bg} toColor={COLORS.bg} height="80px" />
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <p className="font-nunito text-gray-700 text-lg">{COMPANIES[4].description}</p>
            <p className="font-nunito text-gray-700 mt-4">Escape to paradise at {COMPANIES[4].shortName}. Experience luxury with pristine beaches, world-class amenities, and unparalleled service.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}><Palmtree className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} /><h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Beach</h4><p className="text-sm text-gray-600">Front</p></div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}><Waves className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} /><h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Ocean</h4><p className="text-sm text-gray-600">Views</p></div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}><Sun className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} /><h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Sunset</h4><p className="text-sm text-gray-600">Views</p></div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white' }}><Flower2 className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} /><h4 className="font-bold text-2xl" style={{ color: COLORS.color }}>Luxury</h4><p className="text-sm text-gray-600">Spa</p></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Villas() {
  return (
    <section id="villas" className="py-20 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="font-cursive font-bold text-4xl mb-4" style={{ color: COLORS.color }}>Luxury Villas</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.accent }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Beach Villa', 'Pool Villa', 'Family Villa'].map((villa, index) => (
            <motion.div key={villa} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="rounded-xl overflow-hidden" style={{ backgroundColor: COLORS.bg }}>
              <div className="h-48" style={{ backgroundColor: COLORS.color }} />
              <div className="p-6">
                <h3 className="font-handlee font-bold text-xl mb-2" style={{ color: COLORS.color }}>{villa}</h3>
                <p className="font-nunito text-gray-600 text-sm">Spacious villa with breathtaking views and premium amenities.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experiences() {
  return (
    <section id="experiences" className="py-20 px-4" style={{ backgroundColor: COLORS.color }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="font-cursive font-bold text-3xl text-white mb-8">Unique Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'white/10' }}><Waves className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} /><p className="text-white">Water Sports</p></div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'white/10' }}><Camera className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} /><p className="text-white">Sunset Cruises</p></div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'white/10' }}><Flower2 className="w-10 h-10 mx-auto mb-3" style={{ color: COLORS.accent }} /><p className="text-white">Spa Treatments</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SpaWellness() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="font-cursive font-bold text-4xl mb-4" style={{ color: COLORS.color }}>Spa & Wellness</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.accent }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['Ayurvedic Treatments', 'Yoga Sessions', 'Meditation', 'Massage Therapy'].map((item, i) => (
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

function WhyChoose() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="font-cursive font-bold text-4xl mb-4" style={{ color: COLORS.color }}>Why Choose {COMPANIES[4].shortName}</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: COLORS.accent }} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['World-Class Amenities', 'Pristine Beach', 'Luxury Accommodations', 'Exquisite Dining'].map((item, i) => (
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

function Footer({ company }) {
  return (
    <footer style={{ backgroundColor: COLORS.color }}>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><div className="flex items-center gap-3 mb-4"><img src={Logo} alt="TaaSa" className="w-12 h-12 bg-white/10 rounded-lg p-1" /><div><h3 className="font-cursive font-bold text-xl text-white">TaaSa Business Group</h3><p className="text-white/60 text-sm">Umbrella of 5 Companies</p></div></div><p className="text-white/70 text-sm">One umbrella, five specialized companies.</p></div>
          <div><h4 className="font-handlee font-bold text-lg text-white mb-4">Our Companies</h4><ul className="space-y-2">{COMPANIES.map((c) => (<li key={c.id}><Link to={`/company/${c.id}`} className="text-white/70 hover:text-white text-sm">{c.shortName}</Link></li>))}</ul></div>
          <div><h4 className="font-handlee font-bold text-lg text-white mb-4">Contact</h4><p className="text-white/70 text-sm">{company?.address || 'Sri Lanka'}</p><p className="text-white/70 text-sm">{company?.phone}</p><p className="text-white/70 text-sm">{company?.email}</p></div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center"><p className="text-white/50 text-sm">© {new Date().getFullYear()} TaaSa Business Group. All rights reserved.</p></div>
      </div>
    </footer>
  )
}

function WhatsAppButton({ company }) {
  return (<a href={`https://wa.me/${company?.whatsapp?.replace(/\s/g, '') || '94720516432'}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform" style={{ backgroundColor: '#25D366' }}><svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>)
}