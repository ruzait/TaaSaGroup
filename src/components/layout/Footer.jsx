import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, MapPin, Phone, Mail, ArrowUp, Clock, Globe } from 'lucide-react'
import WheatIcon from '../ui/WheatIcon'
import { WaveGradient } from '../ui/WaveDivider'
import Logo from '/assets/img/logos/TaaSa.svg'
import { COMPANY_INFO, whatsappLink } from '../../lib/constants'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Companies', href: '/#companies' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const socialLinks = [
  { 
    icon: WhatsAppIcon, 
    href: whatsappLink(),
    label: 'WhatsApp'
  },
  { 
    icon: Facebook, 
    href: COMPANY_INFO.facebook,
    label: 'Facebook'
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-deep-green relative overflow-hidden">
      <WaveGradient 
        direction="down"
        fromColor="#F5F5DC"
        toColor="#F0F1D5"
        height="60px"
        style="smooth"
        animated={false}
        className="relative -top-1"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 pt-8 md:pt-4 sm:pt-2">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-28 h-16 sm:w-32 sm:h-18 rounded-2xl backdrop-blur-sm p-2 flex items-center justify-center" style={{ boxShadow: '0 -4px 10px rgba(0,0,0,0.3), 0 4px 20px rgba(0,0,0,0.4)' }}
              >
                <img src={Logo} alt="TaaSa Rice Processing Company" className="w-full h-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              </motion.div>
              <div className="flex flex-col justify-center md:justify-start text-center md:text-left">
                <span className="font-cursive font-bold text-3xl sm:text-4xl text-white">TaaSa Rice</span>
                <p className="text-white/60 text-sm sm:text-base font-nunito">Processing Company</p>
              </div>
            </div>
            <p className="text-white/70 font-nunito leading-relaxed mb-6 text-sm">
              Leading White Raw Rice IRR64 Producer, Importer & Exporter based in Chavalakada, Navithanveli, Sri Lanka, delivering premium-quality rice to local and international markets.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Clock className="text-green-400" size={16} />
              </div>
              <span className="text-white/60 font-nunito text-sm">Open 24 Hours</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-gold/20 rounded-lg flex items-center justify-center">
                <Globe className="text-accent-gold" size={16} />
              </div>
              <span className="text-white/60 font-nunito text-sm">Export to Middle East & South Africa</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="font-handlee font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-gold rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                >
                  {link.href === '/' ? (
                    <Link to="/" className="text-white/70 hover:text-accent-gold transition-colors font-nunito flex items-center gap-2 group text-sm">
                      <span className="w-0 group-hover:w-4 h-0.5 bg-accent-gold transition-all duration-300" />
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-white/70 hover:text-accent-gold transition-colors font-nunito flex items-center gap-2 group text-sm">
                      <span className="w-0 group-hover:w-4 h-0.5 bg-accent-gold transition-all duration-300" />
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h4 className="font-handlee font-bold text-lg text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-gold rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start lg:justify-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent-gold" size={14} sm:size={18} />
                </div>
                <span className="text-white/70 font-nunito text-xs sm:text-sm leading-relaxed text-left">
                  No.446, Sri Vajiragnana Mawatha,<br />
                  Dematagoda Road, Colombo - 09
                </span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent-gold" size={14} sm:size={18} />
                </div>
                <a href="tel:+94672222540" className="text-white/70 hover:text-accent-gold transition-colors font-nunito text-xs sm:text-sm">
                  +94 67 222 2540
                </a>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent-gold" size={14} sm:size={18} />
                </div>
                <a href="mailto:taasarice@gmail.com" className="text-white/70 hover:text-accent-gold transition-colors font-nunito text-xs sm:text-sm">
                  taasarice@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-10 sm:mt-14 pt-6 sm:pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent-gold hover:text-deep-green text-white/60 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-white/50 font-nunito text-sm text-center md:text-right order-2 md:order-1">
              © {new Date().getFullYear()} TaaSa Rice Processing Company. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-accent-gold/50 transition-all duration-300 order-1 md:order-2"
            >
              <ArrowUp className="text-deep-green" size={22} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 bottom-20 opacity-5">
          <WheatIcon size={120} variant="gentle-float" />
        </div>
        <div className="absolute -right-20 top-20 opacity-5">
          <WheatIcon size={120} variant="gentle-float" style={{ animationDelay: '5s' }} />
        </div>
      </div>
    </footer>
  )
}
