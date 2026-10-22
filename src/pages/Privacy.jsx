import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { SITE } from '../data/site.js'
import { SEO_PAGES } from '../data/seo.js'

export default function Privacy() {
  return (
    <>
      <Seo {...SEO_PAGES['/privacy']} path="/privacy" />
      <PageHero title="Privacy notice">
        How we handle personal information submitted through this website.
      </PageHero>

      <section className="section">
        <div className="container prose prose-narrow">
          <p><strong>Last updated:</strong> October 2026</p>

          <h2>Who we are</h2>
          <p>
            {SITE.legalName} ("Occusmart", "we") is the responsible party for personal information
            collected through this website. You can reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>What we collect</h2>
          <p>
            When you use the contact form we collect the details you enter: your name, email address,
            telephone number, organisation and message. This website does not ask you to submit health
            information. Please do not include medical details in an enquiry.
          </p>

          <h2>Why we collect it</h2>
          <p>
            We use this information only to respond to your enquiry and to discuss our services with you.
            We do not sell your information or use it for unrelated marketing.
          </p>

          <h2>Sharing and storage</h2>
          <p>
            Enquiries are delivered to Occusmart by email or through our form provider, which processes the
            message on our behalf. We keep enquiries only for as long as we need them to deal with your
            request and meet our legal obligations.
          </p>

          <h2>Your rights</h2>
          <p>
            Under the Protection of Personal Information Act 4 of 2013 (POPIA) you may ask us to confirm
            what personal information we hold about you, and to correct or delete it. Email us to make a
            request. You also have the right to complain to the Information Regulator at{' '}
            <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a>.
          </p>

          <h2>Cookies and analytics</h2>
          <p>This website does not set advertising cookies.</p>
        </div>
      </section>
    </>
  )
}
