import { Check } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { SITE } from '../data/site.js'
import { SEO_PAGES } from '../data/seo.js'
import mark from '../assets/mark.webp'

const WHY = [
  'Experienced occupational health practitioner',
  'Compliant with South African legislation and best practice',
  'Tailored solutions for every industry',
  'A focus on prevention, productivity and sustainability',
  'Confidential, professional and compassionate care',
]

export default function About() {
  return (
    <>
      <Seo {...SEO_PAGES['/about']} path="/about" />
      <PageHero title="About Occusmart">
        We help employers promote health, reduce risk and build workplaces where people can do their best work.
      </PageHero>

      <section className="section">
        <div className="container about-grid">
          <div className="prose">
            <h2>Occupational health that works for the business and the employee</h2>
            <p>
              Healthy people make safer, more productive workplaces. Occusmart provides the examinations,
              monitoring and reporting that employers need to understand the health of their workforce and
              meet their legal obligations.
            </p>
            <p>
              Our approach is preventive. We look for problems early, recommend practical controls and
              support employees who are unwell or injured, always with professionalism and respect for
              confidentiality.
            </p>
            <h3>Why employers choose us</h3>
            <ul className="ticks ticks-large">
              {WHY.map((w) => (
                <li key={w}><Check size={18} strokeWidth={2.5} aria-hidden="true" />{w}</li>
              ))}
            </ul>
          </div>

          <aside className="practitioner" aria-label="Practitioner">
            <img src={mark} alt="" width="224" height="256" loading="lazy" />
            <h2>{SITE.practitioner.name}</h2>
            <p className="practitioner-title">{SITE.practitioner.title}</p>
            <p>
              Leads every assessment and engagement at Occusmart, from fitness medicals to compliance
              reporting.
            </p>
            <a className="btn btn-outline" href={SITE.phoneHref}>Call {SITE.phone}</a>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
