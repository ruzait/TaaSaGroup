import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import RicePage from './pages/RicePage'
import TradingPage from './pages/TradingPage'
import PackagingPage from './pages/PackagingPage'
import GuestInnPage from './pages/GuestInnPage'
import ResortPage from './pages/ResortPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/taasa-rice" element={<RicePage />} />
        <Route path="/company/taasa-trading" element={<TradingPage />} />
        <Route path="/company/taasa-packaging" element={<PackagingPage />} />
        <Route path="/company/taasa-guestinn" element={<GuestInnPage />} />
        <Route path="/company/taasa-resort" element={<ResortPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App