import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { COMPANIES } from '../lib/constants'
import { WaveGradient } from '../components/ui/WaveDivider'
import CompanyPageLayout from '../components/layout/CompanyPageLayout'
import Contact from '../components/sections/Contact'
import LoadingScreen from '../components/ui/LoadingScreen'
import SEO from '../components/ui/SEO'

export default function CompanyPage() {
  const { companyId } = useParams()
  const company = COMPANIES.find(c => c.id === companyId)
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setImagesLoaded(false)
    const criticalImages = [
      '/assets/img/logos/logo.png',
      company?.heroImage || '/assets/img/pageimgs/hero-bg.jpg',
    ].filter(Boolean)

    if (criticalImages.length === 0) {
      setImagesLoaded(true)
      return
    }

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
  }, [companyId])

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 500)
      return () => clearTimeout(timer)
    }
  }, [imagesLoaded])

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cursive font-bold text-2xl mb-4">Company Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {company && <SEO page={company.id} />}
      {isLoading && <LoadingScreen 
        title={company?.shortName || 'TaaSa Business Group'}
        subtitle={company?.tagline || 'Loading...'}
        primaryColor={company?.color || '#0B3D2E'}
        accentColor={company?.accent || '#C9A227'}
        bgColor={company?.color || '#0B3D2E'}
      />}
      <CompanyPageLayout company={company}>
        <HeroSection company={company} />
      <AboutSection company={company} />
      <FeaturesSection company={company} />
      <Contact colors={{ bg: '#F5F5DC', primary: company.color, accent: company.accent }} />
      </CompanyPageLayout>
    </>
  )
}

function HeroSection({ company }) {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const heroImg = company.heroImage || '/assets/img/pageimgs/hero-bg.jpg'

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ 
          y,
          backgroundImage: `url('${heroImg}')`,
          backgroundColor: company.color 
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-b" style={{ 
        background: `linear-gradient(to bottom, ${company.color}CC, ${company.color}99, ${company.color}E6)` 
      }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span 
            className="inline-block px-4 py-2 rounded-full font-nunito text-sm"
            style={{ 
              backgroundColor: `${company.accent}20`, 
              color: company.accent,
              border: `1px solid ${company.accent}40`
            }}
          >
            {company.sector}
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-cursive font-bold text-white text-responsive-hero mb-4"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
        >
          {company.shortName}
        </motion.h1>

        <motion.p
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-handlee font-bold text-white/90 text-xl sm:text-2xl mb-6"
        >
          {company.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-nunito text-white/80 max-w-2xl mx-auto"
        >
          {company.description}
        </motion.p>
      </div>

      <WaveGradient
        direction="up"
        fromColor="#F5F5DC"
        toColor="#F5F5DC"
        midColor="#F5F5DC"
        height="80px"
        style="smooth"
      />
    </section>
  )
}

function AboutSection({ company }) {
  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl mb-4" style={{ color: company.color }}>
            About {company.shortName}
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: company.accent }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl"
          style={{ 
            backgroundColor: 'white',
            boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
          }}
        >
          <p className="font-nunito text-gray-700 leading-relaxed text-center text-lg">
            {company.description}
          </p>
          <p className="font-nunito text-gray-700 leading-relaxed text-center text-lg mt-6">
            With years of experience in the {company.sector.toLowerCase()} industry, we are committed to delivering 
            excellence and satisfaction to our clients. Our dedicated team ensures every project receives 
            the attention and expertise it deserves.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesSection({ company }) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl mb-4" style={{ color: company.color }}>
            Our Services
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: company.accent }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {company.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl"
              style={{ 
                backgroundColor: '#F5F5DC',
                borderLeft: `4px solid ${company.accent}`
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${company.accent}20` }}
              >
                <Check className="w-6 h-6" style={{ color: company.accent }} />
              </div>
              <h3 className="font-handlee font-bold text-lg mb-2" style={{ color: company.color }}>
                {feature}
              </h3>
              <p className="font-nunito text-gray-600 text-sm">
                Professional {feature.toLowerCase()} services tailored to your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}