import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { SITE } from '../data/site.js'
import logo from '../assets/logo-horizontal.webp'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand" aria-label="Occusmart home" onClick={closeMenu}>
          <img src={logo} alt="Occusmart Employee Health and Wellness" width="560" height="325" />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <nav id="primary-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {LINKS.map((item) => (
            <Link key={item.to} to={item.to} onClick={closeMenu}>{item.label}</Link>
          ))}
          <a className="nav-mobile-call" href={SITE.phoneHref} onClick={closeMenu}><Phone size={16} /> Call {SITE.phone}</a>
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={SITE.phoneHref}><Phone size={16} aria-hidden="true" /><span>{SITE.phone}</span></a>
          <Link className="btn btn-primary btn-sm" to="/contact">Request an enquiry</Link>
        </div>
      </div>
    </header>
  )
}
