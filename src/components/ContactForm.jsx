import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { ALL_SERVICES } from '../data/services.js'
import { SITE } from '../data/site.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initial = { name: '', email: '', phone: '', organisation: '', interest: '', message: '', consent: false, website: '' }

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  function validate() {
    const e = {}
    if (!values.name.trim()) e.name = 'Enter your name.'
    if (!values.email.trim()) e.email = 'Enter your email address.'
    else if (!EMAIL_RE.test(values.email)) e.email = 'Enter a valid email address, for example name@company.co.za.'
    if (!values.message.trim()) e.message = 'Tell us how we can help.'
    if (!values.consent) e.consent = 'Please agree so we can respond to your enquiry.'
    return e
  }

  async function onSubmit(ev) {
    ev.preventDefault()
    if (values.website) return // honeypot caught a bot
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      document.getElementById(`field-${Object.keys(e)[0]}`)?.focus()
      return
    }

    const subject = `Website enquiry from ${values.name}`
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || '-'}`,
      `Organisation: ${values.organisation || '-'}`,
      `Interested in: ${values.interest || 'General enquiry'}`,
      '',
      values.message,
    ].join('\n')

    if (!ENDPOINT) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: subject, consent: undefined, website: undefined }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={32} aria-hidden="true" />
        <h2>{ENDPOINT ? 'Thank you, your message is on its way' : 'Your email app should now be open'}</h2>
        <p>
          {ENDPOINT
            ? 'We will respond to your enquiry as soon as we can.'
            : `Send the pre-filled email to complete your enquiry. If nothing opened, write to ${SITE.email}.`}
        </p>
        <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>Send another enquiry</button>
      </div>
    )
  }

  const err = (f) => (errors[f] ? `err-${f}` : undefined)

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="field-name">Full name <span className="req" aria-hidden="true">*</span></label>
        <input id="field-name" name="name" autoComplete="name" required value={values.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={err('name')} />
        {errors.name && <p className="error" id="err-name">{errors.name}</p>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="field-email">Email <span className="req" aria-hidden="true">*</span></label>
          <input id="field-email" name="email" type="email" autoComplete="email" required value={values.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={err('email')} />
          {errors.email && <p className="error" id="err-email">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="field-phone">Phone</label>
          <input id="field-phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="field-organisation">Company or organisation</label>
          <input id="field-organisation" name="organisation" autoComplete="organization" value={values.organisation} onChange={set('organisation')} />
        </div>
        <div className="field">
          <label htmlFor="field-interest">I am interested in</label>
          <select id="field-interest" name="interest" value={values.interest} onChange={set('interest')}>
            <option value="">General enquiry</option>
            {ALL_SERVICES.map((s) => (<option key={s.id} value={s.name}>{s.name}</option>))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="field-message">How can we help? <span className="req" aria-hidden="true">*</span></label>
        <textarea id="field-message" name="message" rows="5" required value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={err('message')} />
        {errors.message && <p className="error" id="err-message">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div className="hp" aria-hidden="true">
        <label>Leave this field empty<input tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} /></label>
      </div>

      <div className="field field-check">
        <input id="field-consent" type="checkbox" checked={values.consent} onChange={set('consent')} aria-invalid={!!errors.consent} aria-describedby={err('consent')} />
        <label htmlFor="field-consent">
          I agree that Occusmart may use these details to respond to my enquiry, as described in the{' '}
          <a href="#privacy">privacy notice</a>.
        </label>
      </div>
      {errors.consent && <p className="error" id="err-consent">{errors.consent}</p>}

      {status === 'error' && (
        <p className="error error-box" role="alert">
          Your message could not be sent. Please try again, or email {SITE.email} or call {SITE.phone}.
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        <Send size={18} aria-hidden="true" />
        {status === 'sending' ? 'Sending' : 'Send enquiry'}
      </button>
    </form>
  )
}
