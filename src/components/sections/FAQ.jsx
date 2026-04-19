import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What types of rice do you produce?",
    answer: "We produce premium-quality white rice, including both basmati and non-basmati varieties, processed in our GMP and ISO 22000:2018 certified facility under strict quality control standards to ensure consistency, safety, and superior taste."
  },
  {
    question: "Do you export rice internationally?",
    answer: "Yes, we export to Middle East, South Africa, and worldwide. We offer repacking services and bulk orders for international markets."
  },
  {
    question: "What certifications does your company have?",
    answer: "We are ISO 9001:2015 Certified, ISO 22000:2018 Certified, and GMP Compliant. Our facility is also IDB approved."
  },
  {
    question: "What is your minimum order quantity?",
    answer: "We accommodate both small and bulk orders. For wholesale and export orders, please contact us via WhatsApp for specific details."
  },
  {
    question: "How can I place an order?",
    answer: "You can contact us via WhatsApp at +94 67 222 2540, email us at taasarice@gmail.com, or use the contact form on our website. We are available 24/7."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 bg-light-beige" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-cursive font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-deep-green mt-4 sm:mt-6 mb-4 sm:mb-6 heading-responsive">Frequently Asked Questions</h2>
          <p className="text-olive-green max-w-2xl mx-auto">
            Find answers to common questions about our rice products and services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-light-beige transition-colors"
              >
                <span className="font-semibold text-deep-green text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-deep-green transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-olive-green leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ