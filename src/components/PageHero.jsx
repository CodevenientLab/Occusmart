export default function PageHero({ title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        {children && <p className="lead">{children}</p>}
      </div>
    </section>
  )
}
