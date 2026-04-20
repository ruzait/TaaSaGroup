import { useEffect } from 'react'

const SEO_DATA = {
  home: {
    title: 'TaaSa Business Group | Leading Business Conglomerate in Sri Lanka',
    description: 'TaaSa Business Group - Sri Lanka\'s premier diversified business conglomerate since 2017. Operating 5 specialized companies: TaaSa Rice Processing (ISO 9001:2015), TaaSa Trading, TaaSa Packaging Industries, TaaSa Guest Inn, and TaaSa Resort. Exporting worldwide.',
    keywords: 'TaaSa Business Group, Sri Lanka business conglomerate, rice processing Sri Lanka, rice exporter, trading company Sri Lanka, packaging industry Sri Lanka, guest inn Sri Lanka, resort Sri Lanka, hospitality Sri Lanka, export company Sri Lanka, business group Sri Lanka, diversified group, ISO 9001 certified',
    canonical: 'https://taasabusinessgroup.com/',
    ogImage: 'https://taasabusinessgroup.com/assets/img/pageimgs/HomePage.png',
    ogTitle: 'TaaSa Business Group | Sri Lanka\'s Leading Business Conglomerate',
    ogDescription: 'Sri Lanka\'s premier diversified business conglomerate since 2017. 5 companies: Rice Processing, Trading, Packaging, Guest Inn & Resort.'
  },
  'taasa-rice': {
    title: 'TaaSa Rice Processing | Premium Quality Rice Producer & Exporter Sri Lanka',
    description: 'Leading White Raw Rice IRR64 Producer, Importer and Exporter in Sri Lanka. ISO 9001:2015 & GMP Certified. Exporting to Middle East, South Africa & worldwide. Premium quality rice from paddy to table.',
    keywords: 'rice processing Sri Lanka, rice exporter Sri Lanka, IRR64 rice, white raw rice, bulk rice export, rice supplier Sri Lanka, rice mill Sri Lanka, premium rice, basmati rice alternatives, agricultural export Sri Lanka',
    canonical: 'https://taasabusinessgroup.com/taasa-rice',
    ogImage: 'https://taasabusinessgroup.com/assets/img/pageimgs/TaasaRice.png',
    ogTitle: 'TaaSa Rice Processing | Premium Quality Rice Producer & Exporter',
    ogDescription: 'Leading White Raw Rice IRR64 Producer & Exporter in Sri Lanka. ISO 9001:2015 Certified. Exporting to Middle East & worldwide.'
  },
  'taasa-trading': {
    title: 'TaaSa Trading | Global Trade & Distribution Company Sri Lanka',
    description: 'International trading solutions connecting Sri Lankan products to global markets. Reliable supply chain management, import-export services, and distribution network across Middle East, Africa & Asia.',
    keywords: 'trading company Sri Lanka, international trade, import export Sri Lanka, supply chain management, global distribution, Sri Lanka exporter, trade services, wholesale trade, international business Sri Lanka',
    canonical: 'https://taasabusinessgroup.com/taasa-trading',
    ogImage: 'https://taasabusinessgroup.com/assets/img/pageimgs/GlobalTrading.png',
    ogTitle: 'TaaSa Trading | Global Trade & Distribution Sri Lanka',
    ogDescription: 'International trading solutions connecting Sri Lankan products to global markets with reliable supply chain management.'
  },
  'taasa-packaging': {
    title: 'TaaSa Packaging Industries | Innovative Packaging Solutions Sri Lanka',
    description: 'Quality packaging solutions for food, retail, and industrial sectors in Sri Lanka. Sustainable materials, custom packaging design, and manufacturing. ISO 9001:2015 Certified.',
    keywords: 'packaging industry Sri Lanka, packaging solutions, food packaging, retail packaging, custom packaging, sustainable packaging, packaging manufacturer Sri Lanka, packaging materials, industrial packaging',
    canonical: 'https://taasabusinessgroup.com/taasa-packaging',
    ogImage: 'https://taasabusinessgroup.com/assets/img/pageimgs/Packaging.png',
    ogTitle: 'TaaSa Packaging Industries | Innovative Packaging Solutions',
    ogDescription: 'Quality packaging solutions for food, retail, and industrial sectors with sustainable materials.'
  },
  'taasa-guestinn': {
    title: 'TaaSa Guest Inn | Authentic Sri Lankan Hospitality & Accommodation',
    description: 'Cozy guesthouses with authentic Sri Lankan hospitality in Navithanveli. Perfect for travelers seeking comfort and culture. Traditional accommodations, local cuisine, and cultural experience.',
    keywords: 'guest house Sri Lanka, accommodation Navithanveli, Sri Lanka hospitality, traditional guest inn, bed breakfast Sri Lanka, cultural tourism accommodation, Sri Lankan homestay, eco tourism Sri Lanka',
    canonical: 'https://taasabusinessgroup.com/taasa-guestinn',
    ogImage: 'https://taasabusinessgroup.com/assets/img/pageimgs/GuestInn.png',
    ogTitle: 'TaaSa Guest Inn | Authentic Sri Lankan Hospitality',
    ogDescription: 'Cozy guesthouses with authentic Sri Lankan hospitality. Perfect for travelers seeking comfort and culture.'
  },
  'taasa-resort': {
    title: 'TaaSa Resort | Luxury Beach Resort & Tourism Sri Lanka',
    description: 'Premium resort experience combining natural beauty with world-class amenities in Sri Lanka. Luxury villas, beach access, spa & wellness. Your paradise escape in the Indian Ocean.',
    keywords: 'luxury resort Sri Lanka, beach resort Sri Lanka, tourism Sri Lanka, spa resort Sri Lanka, luxury accommodation Sri Lanka, beach tourism, wellness resort Sri Lanka, holiday resort Sri Lanka',
    canonical: 'https://taasabusinessgroup.com/taasa-resort',
    ogImage: 'https://taasabusinessgroup.com/assets/img/pageimgs/TaaSaResort.png',
    ogTitle: 'TaaSa Resort | Luxury Beach Resort Sri Lanka',
    ogDescription: 'Premium resort experience combining natural beauty with world-class amenities and service.'
  }
}

export default function SEO({ page = 'home' }) {
  const seo = SEO_DATA[page] || SEO_DATA.home
  
  useEffect(() => {
    document.title = seo.title
    
    const metaTags = [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { name: 'canonical', content: seo.canonical }
    ]
    
    metaTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', tag.name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', tag.content)
    })
    
    const ogTags = [
      { property: 'og:title', content: seo.ogTitle },
      { property: 'og:description', content: seo.ogDescription },
      { property: 'og:url', content: seo.canonical },
      { property: 'og:image', content: seo.ogImage }
    ]
    
    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', tag.property)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', tag.content)
    })
    
  }, [seo])
  
  return null
}