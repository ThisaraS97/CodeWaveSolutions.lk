import Reveal from './Reveal'

export default function PageHero({ badge, title, subtitle, image, badgeVariant = 'default' }) {
  const badgeClass =
    badgeVariant === 'violet'
      ? 'glass-badge glass-badge-violet'
      : badgeVariant === 'emerald'
        ? 'glass-badge glass-badge-emerald'
        : 'glass-badge'

  return (
    <section className="section-padding pb-12 pt-8 md:pb-16">
      <div className="container-custom">
        <div className={`grid ${image ? 'items-center gap-12 lg:grid-cols-2' : ''}`}>
          <div className={image ? '' : 'max-w-3xl'}>
            {badge && (
              <Reveal>
                <span className={`${badgeClass} mb-4 inline-block`}>{badge}</span>
              </Reveal>
            )}
            <Reveal delay={80}>
              <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={160}>
                <p className="text-lg leading-relaxed text-slate-600">{subtitle}</p>
              </Reveal>
            )}
          </div>
          {image && (
            <Reveal direction="right" delay={120}>
              <div className="glass-strong hidden overflow-hidden rounded-3xl lg:block">
                <img src={image} alt="" className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
