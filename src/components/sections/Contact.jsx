import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Send, Mail, AlertCircle, CheckCircle, Building2, Factory } from 'lucide-react'
import { useState } from 'react'
import { COMPANY_INFO, whatsappLink } from '../../lib/constants'

const DEFAULT_COLORS = {
  bg: '#FAF7F0',
  primary: '#0B3D2E',
  accent: '#C9A227',
}

const WhatsAppSvgIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const initialFormState = { name: '', phone: '', email: '', message: '' }
const initialErrorState = { name: '', phone: '', email: '', message: '' }

function validateField(name, value) {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required'
      if (value.trim().length < 2) return 'Name must be at least 2 characters'
      return ''
    case 'phone':
      if (!value.trim()) return 'Phone number is required'
      const phoneRegex = /^[\d\s+()-]{10,}$/
      if (!phoneRegex.test(value)) return 'Please enter a valid phone number'
      return ''
    case 'email':
      if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email address'
      }
      return ''
    case 'message':
      if (!value.trim()) return 'Message is required'
      if (value.trim().length < 10) return 'Message must be at least 10 characters'
      return ''
    default:
      return ''
  }
}

export default function Contact({ colors = DEFAULT_COLORS }) {
  const { bg = DEFAULT_COLORS.bg, primary = DEFAULT_COLORS.primary, accent = DEFAULT_COLORS.accent } = colors
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState(initialErrorState)
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const validateForm = () => {
    const newErrors = {}
    let isValid = true
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      newErrors[key] = error
      if (error) isValid = false
    })
    
    setErrors(newErrors)
    setTouched({ name: true, phone: true, email: true, message: true })
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    const message = `Hello ${COMPANY_INFO.name}!\n\nName: ${formData.name}\nPhone: ${formData.phone}${formData.email ? `\nEmail: ${formData.email}` : ''}\nMessage: ${formData.message}`
    
    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
    
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData(initialFormState)
      setErrors(initialErrorState)
      setTouched({})
    }, 1000)
  }

  return (
    <section id="contact" className="py-10 sm:py-12 md:py-14 lg:py-16 relative overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 font-handlee font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full"
            style={{ backgroundColor: `${primary}20`, color: primary }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
            Contact Us
          </motion.span>
          
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive" style={{ color: primary }}>
            Get In <span>Touch</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-base sm:text-lg lg:text-xl max-w-3xl mx-auto subheading-responsive"
            style={{ color: primary, opacity: 0.7 }}
          >
            Ready to order? Contact us for bulk pricing, export inquiries, or any questions about our products.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="h-56 sm:h-72 md:h-80 relative w-full overflow-hidden rounded-t-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.479822491507!2d81.77429287448592!3d7.412026412201829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae53d0b1f4e915f%3A0xa46bec5448caaa50!2sTaaSa%20Rice%20Processing%20Company%20Private%20Limited.!5e0!3m2!1sen!2slk!4v1775575416321!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TaaSa Rice Processing Company Location"
                />
              </div>

              <div className="p-5 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="col-span-1 sm:col-span-2 flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-2xl border border-green-200"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}20` }}>
                      <Clock style={{ color: primary }} size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-cursive font-bold text-lg" style={{ color: primary }}>Open 24 Hours</h4>
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <span className="w-2 h-2 bg-white rounded-full" />
                        </motion.span>
                      </div>
                      <p className="text-gray-600 font-nunito text-sm">
                        We're always here to serve you!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex items-start gap-4 p-4 bg-light-beige rounded-2xl"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}20` }}>
                      <Building2 style={{ color: primary }} size={28} />
                    </div>
                    <div>
                      <h4 className="font-cursive font-bold text-lg mb-1" style={{ color: primary }}>Office Address</h4>
                      <p className="text-gray-600 font-nunito text-sm leading-relaxed">
                        No.446, Sri Vajiragnana Mawatha,<br />
                        Dematagoda Road, Colombo - 09
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex items-start gap-4 p-4 bg-light-beige rounded-2xl"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}20` }}>
                      <Factory style={{ color: primary }} size={28} />
                    </div>
                    <div>
                      <h4 className="font-cursive font-bold text-lg mb-1" style={{ color: primary }}>Production Plant</h4>
                      <p className="text-gray-600 font-nunito text-sm leading-relaxed">
                        {COMPANY_INFO.plantAddress}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex items-start gap-4 p-4 bg-light-beige rounded-2xl"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}20` }}>
                      <Phone style={{ color: primary }} size={28} />
                    </div>
                    <div>
                      <h4 className="font-cursive font-bold text-lg mb-1" style={{ color: primary }}>Phone</h4>
                      <a href="tel:+94672222540" className="text-gray-600 font-nunito text-sm hover:opacity-70 transition-colors block">
                        0672 222 540
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex items-start gap-4 p-4 bg-light-beige rounded-2xl"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${accent}20` }}>
                      <Mail style={{ color: primary }} size={28} />
                    </div>
                    <div>
                      <h4 className="font-cursive font-bold text-lg mb-1" style={{ color: primary }}>Email</h4>
                      <a href="mailto:taasarice@gmail.com" className="text-gray-600 font-nunito text-sm hover:opacity-70 transition-colors block">
                        taasarice@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 flex flex-row gap-3"
                >
                  <a 
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 xs:py-4 px-2 xs:px-4 font-cursive font-bold text-center rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ backgroundColor: accent, color: primary }}
                  >
                    <WhatsAppSvgIcon />
                    <span className="hidden xs:inline">WhatsApp</span>
                  </a>
                  <a 
                    href="https://web.facebook.com/p/TaaSa-Rice-Processing-Company-Private-Limited-100063943992981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 xs:py-4 px-2 xs:px-4 bg-blue-600 text-white font-cursive font-bold text-center rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="hidden xs:inline">Facebook</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl p-8 md:p-12 h-full relative overflow-hidden" style={{ backgroundColor: primary }}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-olive-green/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h3 className="font-cursive font-bold text-3xl text-white mb-2">
                  Send us a Message
                </h3>
                <p className="text-white/60 font-nunito mb-8">
                  Fill the form or reach us via WhatsApp directly
                </p>

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your Name *"
                        className={`w-full px-6 py-4 bg-white/10 border rounded-xl text-white placeholder-white/50 font-nunito focus:outline-none transition-all duration-300 ${
                          errors.name && touched.name 
                            ? 'border-red-400 focus:border-red-400 focus:bg-red-500/10' 
                            : 'border-white/20 focus:border-accent focus:bg-white/20'
                        }`}
                        aria-label="Your Name"
                        aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                        aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                      />
                      {errors.name && touched.name && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle size={18} className="text-red-400" />
                        </div>
                      )}
                      {formData.name && !errors.name && touched.name && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <CheckCircle size={18} className="text-green-400" />
                        </div>
                      )}
                    </div>
                    {errors.name && touched.name && (
                      <p id="name-error" className="mt-1 text-red-400 text-sm font-nunito flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.name}
                      </p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number *"
                        className={`w-full px-6 py-4 bg-white/10 border rounded-xl text-white placeholder-white/50 font-nunito focus:outline-none transition-all duration-300 ${
                          errors.phone && touched.phone 
                            ? 'border-red-400 focus:border-red-400 focus:bg-red-500/10' 
                            : 'border-white/20 focus:border-accent focus:bg-white/20'
                        }`}
                        aria-label="Phone Number"
                        aria-invalid={errors.phone && touched.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && touched.phone && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle size={18} className="text-red-400" />
                        </div>
                      )}
                      {formData.phone && !errors.phone && touched.phone && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <CheckCircle size={18} className="text-green-400" />
                        </div>
                      )}
                    </div>
                    {errors.phone && touched.phone && (
                      <p id="phone-error" className="mt-1 text-red-400 text-sm font-nunito flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.phone}
                      </p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email Address (Optional)"
                        className={`w-full px-6 py-4 bg-white/10 border rounded-xl text-white placeholder-white/50 font-nunito focus:outline-none transition-all duration-300 ${
                          errors.email && touched.email 
                            ? 'border-red-400 focus:border-red-400 focus:bg-red-500/10' 
                            : 'border-white/20 focus:border-accent focus:bg-white/20'
                        }`}
                        aria-label="Email Address"
                        aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                        aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                      />
                      {errors.email && touched.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <AlertCircle size={18} className="text-red-400" />
                        </div>
                      )}
                      {formData.email && !errors.email && touched.email && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <CheckCircle size={18} className="text-green-400" />
                        </div>
                      )}
                    </div>
                    {errors.email && touched.email && (
                      <p id="email-error" className="mt-1 text-red-400 text-sm font-nunito flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.email}
                      </p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="4"
                        placeholder="Your Message * (e.g., Bulk order inquiry, Export pricing)"
                        className={`w-full px-6 py-4 bg-white/10 border rounded-xl text-white placeholder-white/50 font-nunito focus:outline-none transition-all duration-300 resize-none ${
                          errors.message && touched.message 
                            ? 'border-red-400 focus:border-red-400 focus:bg-red-500/10' 
                            : 'border-white/20 focus:border-accent focus:bg-white/20'
                        }`}
                        aria-label="Your Message"
                        aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                        aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                      />
                      {errors.message && touched.message && (
                        <div className="absolute right-3 top-3">
                          <AlertCircle size={18} className="text-red-400" />
                        </div>
                      )}
                      {formData.message && !errors.message && touched.message && (
                        <div className="absolute right-3 top-3">
                          <CheckCircle size={18} className="text-green-400" />
                        </div>
                      )}
                    </div>
                    {errors.message && touched.message && (
                      <p id="message-error" className="mt-1 text-red-400 text-sm font-nunito flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 font-handlee font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
style={{ backgroundColor: accent, color: primary }}
                    >
                      <Send size={20} />
                      {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                    </motion.button>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-white/50 font-nunito text-sm text-center mt-4"
                  >
                    Or message directly on WhatsApp: <a href={`https://wa.me/${COMPANY_INFO.whatsappClean}`} className="text-accent hover:underline">{COMPANY_INFO.whatsapp}</a>
                  </motion.p>
                </form>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-olive-green/10 to-transparent rounded-full blur-3xl" />
    </section>
  )
}
