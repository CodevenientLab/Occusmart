import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for could not be found." path="/404" noindex />
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
