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
        <Route path="/taasa-rice" element={<RicePage />} />
        <Route path="/taasa-trading" element={<TradingPage />} />
        <Route path="/taasa-packaging" element={<PackagingPage />} />
        <Route path="/taasa-guestinn" element={<GuestInnPage />} />
        <Route path="/taasa-resort" element={<ResortPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App