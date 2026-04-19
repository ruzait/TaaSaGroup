/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-green': '#0B3D2E',
        'olive-green': '#6B8E23',
        'cream': '#F5F5DC',
        'light-beige': '#FAF7F0',
        'accent-gold': '#C9A227',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'carter': ['Carter One', 'cursive'],
        'cursive': ['Carter One', 'cursive'],
        'handlee': ['Handlee', 'cursive'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 20px rgba(201, 162, 39, 0.3)',
        'card': '0 10px 40px rgba(11, 61, 46, 0.1)',
        'card-hover': '0 20px 60px rgba(11, 61, 46, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 5s ease-in-out infinite 2s',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'wave-wobble': 'waveWobble 6s ease-in-out infinite',
        'gentle-float': 'gentleFloat 5s ease-in-out infinite',
        'breathing-pulse': 'breathingPulse 4s ease-in-out infinite',
        'soft-glow': 'softGlow 6s ease-in-out infinite',
        'sparkle-fade': 'sparkleFade 5s ease-in-out infinite',
        'fall-tumble': 'fallTumble 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'morph-glow': 'morphGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 162, 39, 0.6)' },
        },
        waveWobble: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        breathingPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.15)', opacity: '1' },
        },
        softGlow: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 5px rgba(201, 162, 39, 0.3))' },
          '50%': { filter: 'brightness(1.2) drop-shadow(0 0 15px rgba(201, 162, 39, 0.6))' },
        },
        sparkleFade: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        fallTumble: {
          '0%': { transform: 'translateY(-50px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        morphGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 20px rgba(201, 162, 39, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 40px rgba(201, 162, 39, 0.8))' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '480px',
        'tablet': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
