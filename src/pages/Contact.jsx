import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { SITE } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Contact Occusmart in Midstream, Centurion. Call 083 2504343, WhatsApp or send an enquiry about occupational health services for your business."
        path="/contact"
      />
      <PageHero title="Contact us">
        Tell us about your business and what you need. We will come back with a clear next step.
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <ContactForm />
          </div>

          <aside className="contact-card" aria-label="Contact details">
            <h2>Reach us directly</h2>
            <ul>
              <li>
                <Phone size={20} aria-hidden="true" />
                <div><span className="k">Phone</span><a href={SITE.phoneHref}>{SITE.phone}</a></div>
              </li>
              <li>
                <MessageCircle size={20} aria-hidden="true" />
                <div><span className="k">WhatsApp</span><a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">Message us</a></div>
              </li>
              <li>
                <Mail size={20} aria-hidden="true" />
                <div><span className="k">Email</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <span className="k">Visit</span>
                  <address>
                    {SITE.address.map((l) => (<span key={l}>{l}<br /></span>))}
                  </address>
                  <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer">Get directions</a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
