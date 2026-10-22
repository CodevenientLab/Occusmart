import { Check } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { SERVICE_GROUPS } from '../data/services.js'
import { SEO_PAGES } from '../data/seo.js'

export default function Services() {
  return (
    <>
      <Seo {...SEO_PAGES['/services']} path="/services" />
      <PageHero title="Occupational health services">
        Practical assessments, monitoring and reporting that help you keep your people healthy and your
        business compliant.
      </PageHero>

      <div className="container services-page">
        <nav className="jump" aria-label="Service groups">
          {SERVICE_GROUPS.map((g) => (
            <a key={g.title} href={`#${g.title.toLowerCase().replace(/\s+/g, '-')}`}>{g.title}</a>
          ))}
        </nav>

        {SERVICE_GROUPS.map((group) => {
          const gid = group.title.toLowerCase().replace(/\s+/g, '-')
          return (
            <section key={group.title} id={gid} className="svc-group" aria-labelledby={`${gid}-h`}>
              <div className="svc-group-head">
                <h2 id={`${gid}-h`}>{group.title}</h2>
                <p>{group.intro}</p>
              </div>
              <div className="svc-list">
                {group.items.map(({ id, name, text, points, icon: Icon }) => (
                  <article key={id} id={id} className="svc">
                    <span className="service-icon"><Icon size={24} aria-hidden="true" /></span>
                    <div>
                      <h3>{name}</h3>
                      <p>{text}</p>
                      <ul className="ticks">
                        {points.map((p) => (
                          <li key={p}><Check size={16} strokeWidth={2.5} aria-hidden="true" />{p}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <CtaBand
        title="Not sure which services you need?"
        text="Describe your workplace and we will recommend a sensible programme."
      />
    </>
  )
}
