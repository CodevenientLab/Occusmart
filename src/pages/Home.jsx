import { ArrowDownRight, ArrowRight, ClipboardCheck, FileText, HeartPulse, MapPin, Phone, ShieldCheck, Stethoscope, Users, BriefcaseMedical, HardHat, Activity } from 'lucide-react'
import ContactForm from '../components/ContactForm.jsx'
import { SITE } from '../data/site.js'
import { SERVICE_GROUPS } from '../data/services.js'
import workplaceHealth from '../assets/workplace-health.webp'
import clinicalConsultation from '../assets/clinical-consultation.webp'
import artisan from '../assets/artisan.webp'
import Seo from '../components/Seo.jsx'
import aerosudLogo from '../assets/logos/Aerosud.png'
import johannesburgWaterLogo from '../assets/logos/Johannesburg_Water.jpg'
import acsaLogo from '../assets/logos/acsa_seeklogo.png'
import columbusLogo from '../assets/logos/columbus_stainless.jpg'
import gautengHealthLogo from '../assets/logos/gauteng_health.jpg'
import lifeHealthcareLogo from '../assets/logos/life_healthcare.jpg'
import nestleLogo from '../assets/logos/nestle.png'
import parmalatLogo from '../assets/logos/parmalat.png'
import prasaLogo from '../assets/logos/prasa.jpg'
import saMintLogo from '../assets/logos/sa_mint.png'
import saaTechnicalLogo from '../assets/logos/saa_technical.jpg'
import sansaLogo from '../assets/logos/sansa.png'
import standardBankLogo from '../assets/logos/standard_bank.png'
import universityOfPretoriaLogo from '../assets/logos/university_of_pretoria.png'

const APPROACH = [
  { icon: Users, title: 'Understand the work', text: 'We consider your workforce, job demands and the workplace exposures that matter.' },
  { icon: Stethoscope, title: 'Plan appropriate support', text: 'We discuss relevant medicals, screening and monitoring based on your organisation’s needs.' },
  { icon: ClipboardCheck, title: 'Make the next steps clear', text: 'Receive practical outcomes and reporting to support follow-up and workplace health planning.' },
]

const INDUSTRIES = ['Mining and minerals', 'Manufacturing and rail', 'Laboratories', 'Healthcare', 'Construction and engineering', 'Government and public sector', 'Dairy and food production', 'Other workplaces with occupational health risks']
const ORGANISATIONS = [
  { name: 'ACSA', style: 'wordmark-acsa', logo: acsaLogo },
  { name: 'Aerosud', style: 'wordmark-aerosud', logo: aerosudLogo },
  { name: 'South Deep', detail: 'GOLD MINE', style: 'wordmark-southdeep' },
  { name: 'SAA', detail: 'TECHNICAL', style: 'wordmark-saa', logo: saaTechnicalLogo },
  { name: 'SA MINT', style: 'wordmark-mint', logo: saMintLogo },
  { name: 'SABN', style: 'wordmark-sabn' },
  { name: 'Nestlé', style: 'wordmark-nestle', logo: nestleLogo },
  { name: 'Standard Bank', detail: 'South Africa', style: 'wordmark-standardbank', logo: standardBankLogo },
  { name: 'Parmalat', style: 'wordmark-parmalat', logo: parmalatLogo },
  { name: 'Gauteng Health', style: 'wordmark-gauteng', logo: gautengHealthLogo },
  { name: 'Columbus', detail: 'STAINLESS', style: 'wordmark-columbus', logo: columbusLogo },
  { name: 'Assen', detail: 'IRON ORE MINE', style: 'wordmark-assen' },
  { name: 'SAMCA', style: 'wordmark-samca' },
  { name: 'SANSA', style: 'wordmark-sansa', logo: sansaLogo },
  { name: 'University of Pretoria', style: 'wordmark-up', logo: universityOfPretoriaLogo },
  { name: 'Joburg Water', style: 'wordmark-joburg', logo: johannesburgWaterLogo },
  { name: 'PRASA', style: 'wordmark-prasa', logo: prasaLogo },
  { name: 'Life Healthcare', style: 'wordmark-life', logo: lifeHealthcareLogo },
]
const GROUP_ICONS = [Stethoscope, ShieldCheck, HeartPulse, BriefcaseMedical]

export default function Home() {
  return (
    <>
      <Seo description="Occusmart provides occupational medicals, medical surveillance, health risk assessments, fitness-for-work support and workplace wellness services for organisations in South Africa." path="/" />
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A comprehensive occupational health & wellness service</p>
            <h1 id="hero-title">Healthy employees. <em>Safer workplaces.</em></h1>
            <p className="hero-lead">Professional occupational health services designed to protect employees, support employers and promote safe, healthy and productive workplaces.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">Discuss your workplace <ArrowRight size={17} aria-hidden="true" /></a>
              <a className="text-link" href="#services">Explore our services <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="hero-detail"><MapPin size={16} aria-hidden="true" /><span>Midstream, Centurion</span><span className="detail-divider" /><a href={SITE.phoneHref}>{SITE.phone}</a></div>
          </div>
          <div className="hero-visual hero-visual-wide">
            <div className="hero-photo-main"><img src={workplaceHealth} alt="Yellow hard hat, protective eyewear and stethoscope representing occupational health at work" width="600" height="360" fetchPriority="high" /></div>
            <div className="hero-photo-secondary"><img src={artisan} alt="Artisan at work" width="610" height="390" /></div>
            <div className="hero-image-label"><span className="caption-mark" aria-hidden="true">O</span><div><strong>Occusmart</strong><span>Healthy Employees. Safer Workplaces. Stronger Organisations.</span></div></div>
          </div>
        </div>
        <div className="hero-bottom-rule" aria-hidden="true"><span /></div>
      </section>

      <section className="intro-strip" aria-label="Our focus"><div className="container intro-strip-inner"><p>Occupational health, made practical.</p><p><ShieldCheck size={18} aria-hidden="true" /> Confidential, people-centred service</p><p><Users size={18} aria-hidden="true" /> Support for employers and employees</p></div></section>

      <section className="section services-section" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-heading section-heading-split"><div><p className="eyebrow">Our services <span className="eyebrow-line" /></p><h2 id="services-title">Occupational health support for every stage of work.</h2></div><p className="section-intro">From pre-placement medicals to health surveillance, risk assessments and return-to-work support, our services are tailored to your workforce, industry and occupational risks.</p></div>
          <div className="service-groups">{SERVICE_GROUPS.map((group, groupIndex) => { const GroupIcon = GROUP_ICONS[groupIndex] || HeartPulse; return <section className="service-group" key={group.title} aria-labelledby={`service-group-${groupIndex}`}><div className="service-group-heading"><span className="group-icon" aria-hidden="true"><GroupIcon size={22} strokeWidth={1.8} /></span><div><h3 id={`service-group-${groupIndex}`}>{group.title}</h3><p>{group.intro}</p></div></div><div className="service-list">{group.items.map((service) => { const Icon = service.icon; return <article className="service-item" key={service.id}><span className="service-item-icon"><Icon size={22} strokeWidth={1.7} aria-hidden="true" /></span><div className="service-item-copy"><h4>{service.name}</h4><p>{service.text}</p>{service.points?.length > 0 && <p className="service-detail">{service.points.join(' · ')}</p>}</div><a href="#contact" className="service-enquire" aria-label={`Enquire about ${service.name}`}><ArrowRight size={19} aria-hidden="true" /></a></article> })}</div></section> })}</div>
          <p className="services-note">Mobile services and workplace wellness can be discussed on request. Not sure what your workplace needs? Tell us about your team and we can discuss suitable options.</p>
        </div>
      </section>

      <section className="industries-section section" id="industries" aria-labelledby="industries-title"><div className="container industries-layout"><div><p className="eyebrow">Industry experience <span className="eyebrow-line" /></p><h2 id="industries-title">Built around the realities of your workplace.</h2><p className="section-intro">Occupational health needs differ by job, exposure and industry. Our approach considers the risks employees may encounter, from noise and dust to chemicals, biological agents, ergonomics, heights and heavy machinery.</p><div className="industry-list">{INDUSTRIES.map((industry) => <span key={industry}><HardHat size={16} aria-hidden="true" />{industry}</span>)}</div></div><figure className="industry-photo"><img src={clinicalConsultation} alt="Occupational health consultation between a healthcare professional and a worker" loading="lazy" width="610" height="390"/><figcaption>Clinical insight. Workplace understanding. Practical guidance.</figcaption></figure></div></section>

      <section className="organisations-section" aria-labelledby="organisations-title"><div className="container"><div className="organisations-heading"><div><p className="eyebrow">Industry experience <span className="eyebrow-line" /></p><h2 id="organisations-title">Experience across leading workplaces.</h2></div><p>Dr Ngcakani’s experience spans public- and private-sector organisations across healthcare, mining, manufacturing, transport and technical services.</p></div><div className="organisation-logo-grid">{ORGANISATIONS.map((org) => <div className={`organisation-logo ${org.style}`} key={org.name} aria-label={org.detail ? `${org.name} ${org.detail}` : org.name}>{org.logo ? <img src={org.logo} alt="" loading="lazy" /> : <span>{org.name}</span>}{org.detail && <small>{org.detail}</small>}</div>)}</div></div></section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title"><div className="container approach-layout"><div className="approach-intro"><p className="eyebrow eyebrow-light">Our approach <span className="eyebrow-line" /></p><h2 id="approach-title">Clear guidance.<br /><em>Practical next steps.</em></h2><p>Occupational health is more than conducting examinations. Our goal is to help organisations identify risks early, support employees and make informed workplace decisions.</p><a href="#contact" className="btn btn-light">Talk to Occusmart <ArrowRight size={17} aria-hidden="true" /></a></div><ol className="approach-steps">{APPROACH.map((step) => { const StepIcon = step.icon; return <li key={step.title}><span className="approach-step-icon"><StepIcon size={21} strokeWidth={1.8} aria-hidden="true" /></span><div><h3>{step.title}</h3><p>{step.text}</p></div></li> })}</ol></div></section>

      <section className="about-section section" id="about" aria-labelledby="about-title"><div className="container about-layout"><div className="about-side-label"><span>OCCUSMART</span><span>EMPLOYEE HEALTH & WELLNESS</span></div><div className="about-copy"><p className="eyebrow">About the practice <span className="eyebrow-line" /></p><h2 id="about-title">Nearly 20 years of occupational health experience.</h2><p>Dr F. Ngcakani is an Occupational Health Doctor whose work focuses on the relationship between health and work. She assesses employees’ fitness to perform their duties safely, identifies occupational health risks, supports return-to-work processes and advises on appropriate workplace health interventions.</p><p>The aim is not simply to label an employee “fit” or “unfit”, but to provide an objective assessment of health in relation to the demands and risks of the job, while supporting a healthy, safe and productive workforce.</p><p>Her experience spans mining, manufacturing, laboratories, healthcare, construction and public- and private-sector workplaces. Occusmart provides professional, risk-based services tailored to the needs of organisations and their employees, including reporting and trend information where appropriate.</p><div className="about-signature"><span className="signature-rule" /><div><strong>Dr F. Ngcakani</strong><span>Occupational Health Doctor</span></div></div></div><aside className="about-note"><span className="note-icon"><HeartPulse size={24} aria-hidden="true" /></span><h3>Professional.<br />Employee-centred.<br />Business-focused.</h3><p>Objective advice that considers employee health, workplace requirements and confidentiality.</p></aside></div></section>

      <section className="commitment-section"><div className="container commitment-layout"><div><p className="eyebrow">Our commitment <span className="eyebrow-line" /></p><h2>Ethical, evidence-based occupational health support.</h2></div><div className="commitment-points"><p><ShieldCheck size={19} aria-hidden="true"/><span><strong>Professional and objective</strong> — advice grounded in clinical findings and workplace requirements.</span></p><p><Users size={19} aria-hidden="true"/><span><strong>Employee-centred</strong> — health and dignity considered alongside safe, sustainable work.</span></p><p><Activity size={19} aria-hidden="true"/><span><strong>Business-focused</strong> — practical support for risk management, compliance and workforce wellbeing.</span></p><p><FileText size={19} aria-hidden="true"/><span><strong>Confidentiality</strong> — employee medical information handled with professional care.</span></p></div></div></section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="container contact-layout"><div className="contact-copy"><p className="eyebrow eyebrow-light">Let’s talk about your workplace <span className="eyebrow-line" /></p><h2 id="contact-title">A service shaped around your organisation.</h2><p>Whether you need occupational medicals, a medical surveillance programme, fitness-for-work assessments or ongoing occupational health support, we can discuss an approach suited to your workforce.</p><div className="contact-methods"><a href={SITE.phoneHref}><span><Phone size={18} aria-hidden="true" /></span><div><small>Bookings</small><strong>{SITE.phone}</strong></div></a><a href={`mailto:${SITE.email}`}><span><FileText size={18} aria-hidden="true" /></span><div><small>Email</small><strong>{SITE.email}</strong></div></a><a href={SITE.mapsHref} target="_blank" rel="noreferrer"><span><MapPin size={18} aria-hidden="true" /></span><div><small>Visit</small><strong>Shopping on Eastway, Shop 30A<br />Cnr Midstream Ridge Drive & Eastway Drive<br />Midstream 1692</strong></div></a></div></div><div className="contact-form-wrap"><div className="form-heading"><span>ENQUIRY FORM</span><p>Fields marked * are required.</p></div><ContactForm /></div></div></section>
    </>
  )
}
