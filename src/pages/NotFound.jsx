import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { SEO_PAGES } from '../data/seo.js'

export default function NotFound() {
  return (
    <>
      <Seo {...SEO_PAGES['/404']} path="/404" />
      <section className="section">
        <div className="container prose not-found">
          <h1>We could not find that page</h1>
          <p>The link may be out of date or the address may have a typing error.</p>
          <p><Link className="btn btn-primary" to="/">Back to the home page</Link></p>
        </div>
      </section>
    </>
  )
}
