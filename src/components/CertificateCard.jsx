import { Check } from 'lucide-react'
import mark from '../assets/mark.webp'

const ROWS = [
  'Medical examination',
  'Hearing test',
  'Lung function test',
  'Vision screening',
  'Biological monitoring',
  'Vaccination status',
]

// Illustrative fitness-for-work record. Ticks draw in once on load.
export default function CertificateCard() {
  return (
    <figure className="cert" aria-label="Illustration of a fitness for work record">
      <div className="cert-head">
        <img src={mark} alt="" width="224" height="256" />
        <div>
          <p className="cert-title">Fitness for work record</p>
          <p className="cert-note">Illustrative example</p>
        </div>
      </div>

      <dl className="cert-meta">
        <div><dt>Employee</dt><dd aria-hidden="true" /></div>
        <div><dt>Position</dt><dd aria-hidden="true" /></div>
      </dl>

      <ul className="cert-rows">
        {ROWS.map((label, i) => (
          <li key={label} style={{ '--i': i }}>
            <span className="cert-tick"><Check size={14} strokeWidth={3} aria-hidden="true" /></span>
            <span>{label}</span>
            <span className="cert-state">Completed</span>
          </li>
        ))}
      </ul>

      <div className="cert-outcome" style={{ '--i': ROWS.length }}>
        <span>Outcome</span>
        <strong>Fit for duty</strong>
      </div>
    </figure>
  )
}
