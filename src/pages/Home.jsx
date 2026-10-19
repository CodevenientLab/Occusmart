import { ArrowDownRight, ArrowRight, ClipboardCheck, FileText, HeartPulse, MapPin, Phone, ShieldCheck, Stethoscope, Users } from 'lucide-react'
import ContactForm from '../components/ContactForm.jsx'
import { SITE } from '../data/site.js'
import { SERVICE_GROUPS } from '../data/services.js'
import portrait from '../assets/practitioner-portrait.webp'
import Seo from '../components/Seo.jsx'

const APPROACH = [
  { icon: Users, title: 'Understand the work', text: 'We start with your workforce, the roles people perform and the workplace exposures that matter.' },
  { icon: Stethoscope, title: 'Plan the right assessments', text: 'We help identify relevant examinations, tests and monitoring based on your needs.' },
  { icon: ClipboardCheck, title: 'Make the next steps clear', text: 'Receive practical outcomes and records to support follow-up and workplace health planning.' },
]

const GROUP_ICONS = [Stethoscope, ShieldCheck, HeartPulse]

export default function Home() {
  return (
    <>
      <Seo
        description="Occusmart provides occupational health services for employers, including fitness medicals, hearing and lung function testing, vision screening, biological monitoring and workplace wellness in Centurion."
        path="/"
      />
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Occupational health & wellness</p>
            <h1 id="hero-title">Healthy people make <em>stronger workplaces.</em></h1>
            <p className="hero-lead">Practical occupational health services that help employers care for their people, understand workplace health risks and support safer work.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Discuss your requirements <ArrowRight size={17} aria-hidden="true" /></a>
              <a className="text-link" href="#services">Explore our services <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="hero-detail"><MapPin size={16} aria-hidden="true" /><span>Based in Midstream, Centurion</span><span className="detail-divider" /><a href={SITE.phoneHref}>{SITE.phone}</a></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src={portrait} alt="Portrait used in Occusmart’s supplied brand material" width="270" height="405" fetchPriority="high" /></div>
            <div className="portrait-caption"><span className="caption-mark" aria-hidden="true">O</span><div><strong>Occusmart</strong><span>Employee health & wellness</span></div></div>
            <p className="visual-note">Professional care.<br />Healthier workforces.</p>
          </div>
        </div>
        <div className="hero-bottom-rule" aria-hidden="true"><span /></div>
      </section>

      <section className="intro-strip" aria-label="Our focus">
        <div className="container intro-strip-inner">
          <p>Occupational health, made practical.</p>
          <p><ShieldCheck size={18} aria-hidden="true" /> Confidential, people-centred service</p>
          <p><Users size={18} aria-hidden="true" /> Support for employers and employees</p>
        </div>
      </section>

      <section className="section services-section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div><p className="eyebrow">What we do <span className="eyebrow-line" /></p><h2 id="services-title">Occupational health services for the realities of work.</h2></div>
            <p className="section-intro">From employee medicals and workplace screening to health risk assessments and ongoing wellness, we help you identify the services that fit your team and work environment.</p>
          </div>
          <div className="service-groups">
            {SERVICE_GROUPS.map((group, groupIndex) => {
              const GroupIcon = GROUP_ICONS[groupIndex] || HeartPulse
              return (
              <section className="service-group" key={group.title} aria-labelledby={`service-group-${groupIndex}`}>
                <div className="service-group-heading"><span className="group-icon" aria-hidden="true"><GroupIcon size={22} strokeWidth={1.8} /></span><div><h3 id={`service-group-${groupIndex}`}>{group.title}</h3><p>{group.intro}</p></div></div>
                <div className="service-list">
                  {group.items.map((service) => {
                    const Icon = service.icon
                    return (
                      <article className="service-item" key={service.id}>
                        <span className="service-item-icon"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span>
                        <div className="service-item-copy"><h4>{service.name}</h4><p>{service.text}</p>{service.points?.length > 0 && <p className="service-detail">{service.points.join(' · ')}</p>}</div>
                        <a href={`#contact`} className="service-enquire" aria-label={`Enquire about ${service.name}`}><ArrowRight size={19} aria-hidden="true" /></a>
                      </article>
                    )
                  })}
                </div>
              </section>
            )})}
          </div>
          <p className="services-note">Not sure what your workplace needs? Tell us about your team and the work they do, and we can discuss the relevant options.</p>
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="container approach-layout">
          <div className="approach-intro"><p className="eyebrow eyebrow-light">A straightforward process <span className="eyebrow-line" /></p><h2 id="approach-title">Clear guidance.<br /><em>Practical next steps.</em></h2><p>Occupational health should support better decisions, not add unnecessary complexity. Our approach starts with understanding your workplace and ends with information you can use.</p><a href="#contact" className="btn btn-light">Talk to Occusmart <ArrowRight size={17} aria-hidden="true" /></a></div>
          <ol className="approach-steps">{APPROACH.map((step) => { const StepIcon = step.icon; return <li key={step.title}><span className="approach-step-icon"><StepIcon size={21} strokeWidth={1.8} aria-hidden="true" /></span><div><h3>{step.title}</h3><p>{step.text}</p></div></li> })}</ol>
        </div>
      </section>

      <section className="about-section section" id="about" aria-labelledby="about-title">
        <div className="container about-layout">
          <div className="about-side-label"><span>OCCUSMART</span><span>EMPLOYEE HEALTH & WELLNESS</span></div>
          <div className="about-copy"><p className="eyebrow">About the practice <span className="eyebrow-line" /></p><h2 id="about-title">Workplace health with people at the centre.</h2><p>Occusmart Employee Health & Wellness supports organisations with occupational medical services and practical workplace health support. We recognise that every workplace has different roles, risks and responsibilities, so the right conversation comes first.</p><p>Led by Funeka Ngcakani, Occupational Medical Practitioner, the practice aims to make occupational health easier to understand and act on for both employers and employees.</p><div className="about-signature"><span className="signature-rule" /><div><strong>Funeka Ngcakani</strong><span>Occupational Medical Practitioner</span></div></div></div>
          <aside className="about-note"><span className="note-icon"><HeartPulse size={24} aria-hidden="true" /></span><h3>Healthier people.<br />Safer work.</h3><p>Care that considers the person, the job and the environment.</p></aside>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-layout">
          <div className="contact-copy"><p className="eyebrow eyebrow-light">Start a conversation <span className="eyebrow-line" /></p><h2 id="contact-title">Let’s talk about your workplace.</h2><p>Share a little about your organisation and what you need. We’ll use your enquiry to understand what support may be appropriate.</p>
            <div className="contact-methods"><a href={SITE.phoneHref}><span><Phone size={18} aria-hidden="true" /></span><div><small>Call us</small><strong>{SITE.phone}</strong></div></a><a href={`mailto:${SITE.email}`}><span><FileText size={18} aria-hidden="true" /></span><div><small>Email</small><strong>{SITE.email}</strong></div></a><a href={SITE.mapsHref} target="_blank" rel="noreferrer"><span><MapPin size={18} aria-hidden="true" /></span><div><small>Visit</small><strong>Shopping @ Eastway, Shop 30 A<br />Midstream, Centurion 1692</strong></div></a></div>
          </div>
          <div className="contact-form-wrap"><div className="form-heading"><span>ENQUIRY FORM</span><p>Fields marked * are required.</p></div><ContactForm /></div>
        </div>
      </section>
    </>
  )
}
