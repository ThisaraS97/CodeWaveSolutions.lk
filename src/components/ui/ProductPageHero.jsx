import Reveal from './Reveal'

export default function ProductPageHero({ badge, title, subtitle, logo, accent = 'default' }) {
  const badgeClass =
    accent === 'nexus'
      ? 'glass-badge glass-badge-violet'
      : accent === 'emerald'
        ? 'glass-badge glass-badge-emerald'
        : 'glass-badge'

  const logoWrapClass =
    accent === 'emerald' ? 'product-logo-wrap-lms lms-glow' : 'product-logo-wrap-nexus nexus-glow'

  const titleClass =
    accent === 'nexus' ? 'nexus-gradient-text' : accent === 'emerald' ? 'lms-gradient-text' : 'text-slate-900'

  return (
    <section className="section-padding relative overflow-hidden pb-12 pt-8 md:pb-16">
      <div
        className={`hero-glow absolute right-0 top-10 h-64 w-64 ${accent === 'emerald' ? 'bg-emerald-300/20' : 'bg-violet-300/25'}`}
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {badge && (
              <Reveal>
                <span className={`${badgeClass} mb-4 inline-block`}>{badge}</span>
              </Reveal>
            )}
            <Reveal delay={80}>
              <h1 className={`mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl ${titleClass}`}>
                {title}
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal delay={160}>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
              </Reveal>
            )}
          </div>

          {logo && (
            <Reveal direction="right" delay={120} className="flex justify-center lg:justify-end">
              <div className={`${logoWrapClass} animate-float w-full max-w-md rounded-3xl`}>
                <img src={logo} alt="" className="max-h-28 w-auto object-contain" />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
