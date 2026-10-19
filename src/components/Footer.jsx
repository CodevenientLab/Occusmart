import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react'
import { SITE } from '../data/site.js'
import logo from '../assets/logo-horizontal.webp'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><a href="#home" aria-label="Occusmart, back to top"><img src={logo} alt="Occusmart Employee Health and Wellness" width="560" height="325" loading="lazy" /></a><p>{SITE.tagline}</p></div>
        <div className="footer-contact"><span className="footer-label">GET IN TOUCH</span><a href={SITE.phoneHref}><Phone size={15} />{SITE.phone}</a><a href={`mailto:${SITE.email}`}><Mail size={15} />{SITE.email}</a><a href={SITE.mapsHref} target="_blank" rel="noreferrer"><MapPin size={15} />Midstream, Centurion <ArrowUpRight size={13} /></a></div>
        <div className="footer-links"><span className="footer-label">ON THIS PAGE</span><a href="#services">Services</a><a href="#approach">Our approach</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p><details className="privacy-details" id="privacy"><summary>Privacy notice</summary><div className="privacy-copy"><p>Information submitted through this website is used to respond to your enquiry. Please do not submit private medical information through this form. Your details may be processed by the website’s email or form service to deliver your message. Under POPIA, you may contact <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to ask about personal information you have provided. This notice should be reviewed and confirmed by Occusmart before launch to ensure it reflects the final form provider and retention practices.</p></div></details></div>
    </footer>
  )
}
