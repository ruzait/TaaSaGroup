export const BRAND_COLORS = {
  deepGreen: '#0B3D2E',
  oliveGreen: '#6B8E23',
  accentGold: '#C9A227',
  cream: '#FAF7F0',
  lightBeige: '#F5F5DC',
}

export const COMPANIES = [
  {
    id: 'taasa-rice',
    name: 'TaaSa Rice Processing Company',
    shortName: 'TaaSa Rice Processing',
    tagline: 'Premium Quality Rice Producer & Exporter',
    description: 'Leading White Raw Rice IRR64 Producer, Importer and Exporter delivering premium-quality rice to local and international markets.',
    sector: 'Agriculture',
    color: '#0B3D2E',
    accent: '#C9A227',
    heroImage: '/assets/img/pageimgs/hero-bg.jpg',
    features: ['Premium IRR64 Rice', 'Import & Export', 'Local & International Markets'],
    phone: '+94 67 222 2540',
    whatsapp: '+94 72 051 6432',
    email: 'taasarice@gmail.com',
    address: 'No.446, Sri Vajiragnana Mawatha, Dematagoda Road, Colombo - 09',
    facebook: 'https://web.facebook.com/p/TaaSa-Rice-Processing-Company-Private-Limited-100063943992981',
  },
  {
    id: 'taasa-trading',
    name: 'TaaSa Trading Company',
    shortName: 'TaaSa Trading',
    tagline: 'Global Trade & Distribution',
    description: 'International trading solutions connecting Sri Lankan products to global markets with reliable supply chain management.',
    sector: 'Trading',
    color: '#1A374D',
    accent: '#6998AB',
    secondary: '#406882',
    bgLight: '#B1D0E0',
    heroImage: '/assets/img/companies/trading-hero.jpg',
    features: ['International Trade', 'Supply Chain', 'Distribution Network'],
    phone: '+94 67 222 2540',
    whatsapp: '+94 72 051 6432',
    email: 'taasatrading@gmail.com',
    address: 'No.446, Sri Vajiragnana Mawatha, Dematagoda Road, Colombo - 09',
    facebook: '',
  },
  {
    id: 'taasa-packaging',
    name: 'TaaSa Packaging Industries',
    shortName: 'TaaSa Packaging Industries',
    tagline: 'Innovative Packaging Solutions',
    description: 'Quality packaging solutions for food, retail, and industrial sectors with sustainable materials.',
    sector: 'Manufacturing',
    color: '#49243E',
    accent: '#DBAFA0',
    heroImage: '/assets/img/companies/packaging-hero.jpg',
    features: ['Food Packaging', 'Retail Packaging', 'Custom Solutions'],
    phone: '+94 67 222 2540',
    whatsapp: '+94 72 051 6432',
    email: 'taasapackaging@gmail.com',
    address: 'No.381/3021, Intersection of Chavalakada, Navithanveli - 32308',
    facebook: '',
  },
  {
    id: 'taasa-guestinn',
    name: 'TaaSa Guest Inn',
    shortName: 'TaaSa Guest Inn',
    tagline: 'Comfortable Stays & Warm Hospitality',
    description: 'Cozy guesthouses with authentic Sri Lankan hospitality, perfect for travelers seeking comfort and culture.',
    sector: 'Hospitality',
    color: '#662222',
    accent: '#F5DAA7',
    heroImage: '/assets/img/companies/guestinn-hero.jpg',
    features: ['Comfortable Rooms', 'Local Cuisine', 'Cultural Experience'],
    phone: '+94 67 222 2540',
    whatsapp: '+94 72 051 6432',
    email: 'taasaguestinn@gmail.com',
    address: 'Navithanveli, Sri Lanka',
    facebook: '',
  },
  {
    id: 'taasa-resort',
    name: 'TaaSa Resort',
    shortName: 'TaaSa Resort',
    tagline: 'Luxury Escape in Paradise',
    description: 'Premium resort experience combining natural beauty with world-class amenities and service.',
    sector: 'Tourism',
    color: '#005461',
    accent: '#00B7B5',
    secondary: '#018790',
    bgLight: '#F4F4F4',
    heroImage: '/assets/img/companies/resort-hero.jpg',
    features: ['Luxury Villas', 'Beach Access', 'Spa & Wellness'],
    phone: '+94 67 222 2540',
    whatsapp: '+94 72 051 6432',
    email: 'taasaresort@gmail.com',
    address: 'Coastal Sri Lanka',
    facebook: '',
  },
]

export const COMPANY_INFO = {
  name: 'TaaSa Rice Processing Company',
  shortName: 'TaaSa',
  sector: 'Rice Processing',
  tagline: 'Premium Quality Rice from Paddy to Table',
  description: 'Leading White Raw Rice IRR64 Producer, Importer and Exporter in Sri Lanka. Delivering premium quality rice to families and businesses since 2014.',
  phone: '+94 672 222 540',
  whatsapp: '+94 72 051 6432',
  whatsappClean: '94720516432',
  email: 'taasarice@gmail.com',
  officeAddress: 'No.446, Sri Vajiragnana Mawatha, Dematagoda Road, Colombo - 09',
  plantAddress: 'No. 381/3021, Intersection of Chavalakada, Navithanveli - 32308',
  facebook: 'https://web.facebook.com/p/TaaSa-Rice-Processing-Company-Private-Limited-100063943992981'
}

export const WHATSAPP_MESSAGES = {
  home: 'Hello TaaSa Business Group, I would like to inquire about your companies and services.',
  'taasa-rice': 'Hello TaaSa Rice Processing, I am interested in your premium quality rice products. Could you please share your product catalog and pricing?',
  'taasa-trading': 'Hello TaaSa Trading, I need assistance with international trade and import/export services. Can you please provide more information?',
  'taasa-packaging': 'Hello TaaSa Packaging Industries, I am looking for packaging solutions. Could you please share your product range and quotes?',
  'taasa-guestinn': 'Hello TaaSa Guest Inn, I would like to book a stay. What accommodations do you have available and what are the rates?',
  'taasa-resort': 'Hello TaaSa Resort, I am interested in your luxury resort. What packages do you offer and what are the booking details?'
}

export const whatsappLink = (page = 'home', message = WHATSAPP_MESSAGES[page]) => 
  `https://wa.me/${COMPANY_INFO.whatsappClean}?text=${encodeURIComponent(message || WHATSAPP_MESSAGES.home)}`

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Gallery', href: '#gallery' },
]

export const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
]

export const EXPORT_COUNTRIES = ['Middle East', 'South Africa', 'Sri Lanka']
