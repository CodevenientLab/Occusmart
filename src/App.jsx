import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

function LoadingScreen() {
  return (
    <div className="site-loader" role="status" aria-label="Loading Occusmart">
      <div className="loader-mark" aria-hidden="true">
        <svg className="loader-heart" viewBox="0 0 64 58" fill="none">
          <path d="M32 53.5 7.8 30.2C-7.2 14.7 13.8-4.8 29.1 10.1L32 13l2.9-2.9C50.2-4.8 71.2 14.7 56.2 30.2L32 53.5Z" />
        </svg>
        <svg className="loader-pulse" viewBox="0 0 220 54" fill="none" aria-hidden="true">
          <path className="pulse-track" d="M2 28H62L76 28 88 8 103 46 119 18 130 28H218" />
          <path className="pulse-line" d="M2 28H62L76 28 88 8 103 46 119 18 130 28H218" />
        </svg>
      </div>
      <span className="loader-name">occusmart</span>
      <span className="loader-caption">Occupational health. Thoughtfully delivered.</span>
    </div>
  )
}

function AppShell() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1450)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {loading && <LoadingScreen />}
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return <AppShell />
}
