# TaaSa Rice Processing Company - Official Website

<p align="center">
  <img src="/assets/img/logos/TaaSa.jpg" alt="TaaSa Rice Logo" width="200" />
</p>

---

## 🌟 Project Overview

**TaaSa Rice Processing Company** is a modern, fully responsive React website for a premium rice processing company and export company based in **Navithanveli, Ampara, Sri Lanka**. The website showcases premium quality rice products, company information, certifications, and provides easy contact options including WhatsApp integration.

### Key Highlights
- 🏭 **25+ Years** of industry experience
- 🌎 **Global Export** to Middle East & South Africa
- ✅ **ISO 9001 Certified** rice processing facility
- 📦 **Repacking Available** for international orders
- ⏰ **24/7 Available** for customer inquiries

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Vite 5** | Build Tool & Dev Server |
| **Tailwind CSS 3** | Styling & Responsive Design |
| **Framer Motion** | Animations & Interactions |
| **Lucide React** | Icons |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

```bash
# Clone or download the project
cd taasa-rice-mill

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔍 SEO Implementation

This project includes comprehensive SEO optimization:

### On-Page SEO ✅
- Enhanced meta title & description with 50+ keywords
- Proper heading structure (H1, H2, H3)
- Clean URL structure
- Image alt text
- Mobile-first responsive design
- Open Graph tags for social sharing
- Twitter Card optimization
- Pinterest-rich pins

### Technical SEO ✅
- XML Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Canonical URLs
- Structured Data (JSON-LD):
  - LocalBusiness
  - Organization
  - Product
  - FAQPage
  - BreadcrumbList
- PWA Manifest (`/manifest.json`)
- Geo location meta tags

### Local SEO ✅
- LocalBusiness schema with Sri Lanka coordinates
- NAP (Name, Address, Phone) consistency
- Geo meta tags for Sri Lanka region

### Social Media Optimization ✅
- Facebook Open Graph tags
- Twitter Card tags
- LinkedIn optimization
- Pinterest-rich pins

### Structured Data (Schema.org)
```json
- LocalBusiness (company info, location, hours)
- Organization (certifications, founder, area served)
- Product (White Rice, Non-Basmati Rice)
- FAQPage (common customer questions)
- BreadcrumbList (navigation structure)
```

---

## 📂 Project Structure

```
taasa-rice-mill/
├── public/
│   ├── assets/
│   │   ├── cerfif/           # Certification images
│   │   ├── img/
│   │   │   ├── pageimgs/     # Section images
│   │   │   └── logos/        # Company logos
│   │   └── SVG/              # SVG assets
│   ├── robots.txt            # Search engine directives
│   ├── sitemap.xml          # XML sitemap
│   └── manifest.json         # PWA manifest
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx    # Navigation with mobile menu
│   │   │   └── Footer.jsx    # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.jsx         # Landing hero section
│   │   │   ├── Features.jsx     # Why Choose Us (3 cards)
│   │   │   ├── About.jsx        # Company story & stats
│   │   │   ├── MDMessage.jsx    # Managing Director message
│   │   │   ├── CoreValues.jsx   # Timely Delivery, Pricing, Quality
│   │   │   ├── Process.jsx      # Rice processing steps
│   │   │   ├── Products.jsx     # Product showcase
│   │   │   ├── Certifications.jsx # ISO, GMP certifications
│   │   │   ├── Gallery.jsx      # Image gallery with lightbox
│   │   │   ├── Reviews.jsx      # Customer testimonials
│   │   │   └── Contact.jsx      # Contact form & map
│   │   └── ui/
│   │       ├── WaveDivider.jsx    # Wave gradient component
│   │       ├── WhatsAppButton.jsx  # Floating WhatsApp button
│   │       ├── LoadingScreen.jsx   # Splash screen
│   │       ├── WheatIcon.jsx       # Brand icon
│   │       └── FloatingRice.jsx     # Background animation
│   ├── lib/
│   │   └── constants.js        # Company info & config
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                 # Main HTML with SEO
├── tailwind.config.js         # Tailwind customization
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
├── README.md                  # This file
└── PROJECT_DOCUMENTATION.txt  # Detailed documentation
```

---

## 🎨 Design System

### Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| `deep-green` | #0B3D2E | Primary brand color |
| `olive-green` | #6B8E23 | Secondary accent |
| `accent-gold` | #C9A227 | Highlights & CTAs |
| `cream` | #F5F5DC | Backgrounds |
| `light-beige` | #FAF7F0 | Section backgrounds |

### Typography

| Font | Usage |
|------|-------|
| `Carter One` | Headings |
| `Nunito Sans` | Body text |
| `Handlee` | Buttons & labels |
| `Inter` | UI elements |
| `Poppins` | Additional fonts |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Default | < 640px | Mobile |
| `sm:` | 640px+ | Large mobile |
| `md:` | 768px+ | Tablet |
| `lg:` | 1024px+ | Desktop |
| `xl:` | 1280px+ | Large desktop |

---

## 🔧 Customization

### Changing Company Information

All company details are centralized in `src/lib/constants.js`:

```javascript
export const COMPANY_INFO = {
  name: 'TaaSa Rice Processing Company',
  shortName: 'TaaSa',
  phone: '+94 67 222 2540',
  whatsapp: '+94 77 713 7732',
  whatsappClean: '94777137732',
  email: 'taasarice@gmail.com',
  address: 'Chavalkadai, Navithanveli, Sri Lanka',
  facebook: 'https://web.facebook.com/...',
  defaultMessage: 'Hello TaaSa Rice...'
}
```

### Adding Products

Edit `src/components/sections/Products.jsx`:

```javascript
{
  id: 3,
  name: 'New Product',
  tagline: 'Product tagline',
  description: 'Product description',
  image: '/assets/img/pageimgs/product.jpg',
  badge: 'New',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  icon: AwardIcon,
  color: '#C9A227'
}
```

### Adding Gallery Images

Edit `src/components/sections/Gallery.jsx`:

```javascript
const images = [
  { src: '/assets/img/pageimgs/new-image.jpg', alt: 'Description' },
  // Add more images...
]
```

---

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your Git repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy! 🎉

### Vercel
```bash
npm i -g vercel
vercel
```

### Firebase Hosting
```bash
firebase init
firebase deploy
```

### Manual Build
```bash
npm run build
# Upload 'dist' folder to your hosting provider
```

---

## 📈 Analytics Setup (Future)

### Google Analytics 4
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to your project:

```javascript
// In index.html <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property: `https://taasariceprocessingcompany.netlify.app/`
3. Verify ownership via HTML meta tag or DNS
4. Submit sitemap: `https://taasariceprocessingcompany.netlify.app/sitemap.xml`

---

## 🔒 Security Best Practices

- ✅ HTTPS enabled (Netlify default)
- ✅ No sensitive data in client-side code
- ✅ Sanitize form inputs
- ✅ Use environment variables for API keys

---

## 🛠️ Troubleshooting

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Cache Issues
```bash
# Clear Vite cache
rm -rf node_modules/.vite
```

### Tailwind Issues
```bash
# Rebuild Tailwind
npx tailwindcss -o tailwind.css
```

---

## 📞 Company Information

| | |
|---|---|
| **Company** | TaaSa Rice Processing Company (Pvt) Ltd |
| **Location** | Navithanveli, Ampara, Sri Lanka |
| **Phone** | +94 67 222 2540 |
| **WhatsApp** | +94 77 713 7732 |
| **Email** | taasarice@gmail.com |
| **Facebook** | [TaaSa Rice Processing Company](https://web.facebook.com/p/TaaSa-Rice-Processing-Company-Private-Limited-100063943992981) |
| **Hours** | 24/7 Available |

---

## 📄 License

This project is for commercial use by TaaSa Rice Processing Company.

---

## 🙏 Acknowledgments

- React & Vite teams
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Google Fonts

---

<p align="center">
  Made with ❤️ for TaaSa Rice Processing Company
</p>

---

## 📋 Quick Reference

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173

# Production
npm run build        # Build to dist folder
npm run preview      # Preview production build

# Utilities
npm run lint         # Run linter (if configured)
npm run typecheck    # Type checking (if configured)
```

---

**Last Updated:** April 2026
**Version:** 2.0.0
**Website:** https://taasariceprocessingcompany.netlify.app/