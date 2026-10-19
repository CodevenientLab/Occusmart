import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { SITE } from '../data/site.js'

export default function CtaBand({ title = 'Talk to us about your workforce', text = 'Tell us about your business and we will recommend the assessments and monitoring that fit.' }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn btn-hivis">Request a quote</Link>
          <a href={SITE.phoneHref} className="btn btn-ghost-light">
            <Phone size={18} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
