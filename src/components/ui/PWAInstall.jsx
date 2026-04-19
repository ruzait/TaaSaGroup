import { useState, useEffect } from 'react'
import { Download, X, Smartphone } from 'lucide-react'

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showBanner, setShowBanner] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const checkInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          window.navigator.standalone === true) {
        setIsInstalled(true)
      }
    }
    checkInstalled()

    const handleBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowBanner(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setShowBanner(false)
      setIsInstalled(true)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowBanner(false)
  }

  if (isInstalled) return null

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  return (
    <>
      {/* Navbar Install Button - Desktop */}
      {!isMobile && (
        <button
          onClick={handleInstall}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent-gold text-deep-green font-handlee font-bold rounded-lg hover:bg-accent-gold/90 transition-colors cursor-pointer"
          title="Install App"
        >
          <Download size={18} />
          <span>Install App</span>
        </button>
      )}

      {/* Mobile Install Banner - Chrome/Edge/Android */}
      {showBanner && isMobile && !isSafari && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <div className="bg-deep-green text-white px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center">
                <Download size={20} className="text-deep-green" />
              </div>
              <div>
                <p className="font-handlee font-bold text-sm">Install TaaSa Rice</p>
                <p className="text-xs text-white/70">Add to Home Screen</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleInstall}
                className="px-3 py-1.5 bg-accent-gold text-deep-green font-handlee font-bold text-sm rounded-md"
              >
                Install
              </button>
              <button
                onClick={handleDismiss}
                className="p-1.5 text-white/70 hover:text-white"
                aria-label="Dismiss"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Safari iOS / Other Browsers - Show Permanent Banner */}
      {isMobile && isSafari && !showBanner && !isInstalled && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <div className="bg-olive-green text-white px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center">
                <Smartphone size={20} className="text-deep-green" />
              </div>
              <div>
                <p className="font-handlee font-bold text-sm">Add to Home Screen</p>
                <p className="text-xs text-white/70">Tap Share → Add to Home Screen</p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-1.5 text-white/70 hover:text-white"
              aria-label="Dismiss"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Firefox / Other Desktop - Show Permanent Banner */}
      {!isMobile && !deferredPrompt && !isInstalled && (
        <div className="hidden md:block">
          <button
            onClick={() => alert('To install: Go to Menu → Add to Home Screen or Install App')}
            className="flex items-center gap-2 px-4 py-2 bg-accent-gold text-deep-green font-handlee font-bold rounded-lg hover:bg-accent-gold/90 transition-colors cursor-pointer"
            title="Install App"
          >
            <Download size={18} />
            <span>Install App</span>
          </button>
        </div>
      )}
    </>
  )
}