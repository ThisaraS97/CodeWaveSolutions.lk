export default function ProductPageHero({
  badge,
  title,
  subtitle,
  logo,
  accent = 'cyan',
}) {
  const accentOverlay = {
    nexus: 'from-violet-400/25 via-violet-600/15 to-blue-600/25',
    emerald: 'from-emerald-500/20 to-cyan-600/10',
    cyan: 'from-cyan-500/20 to-teal-600/10',
  }

  const badgeStyles = {
    nexus:
      'border-violet-400/30 bg-gradient-to-r from-violet-500/20 to-blue-600/20 text-violet-100',
    emerald: 'border-white/10 bg-white/5 text-emerald-200',
    cyan: 'border-white/10 bg-white/5 text-cyan-200',
  }

  const isNexus = accent === 'nexus'

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className={`pointer-events-none absolute inset-0 ${isNexus ? 'hero-pattern-nexus' : 'hero-pattern'}`} />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentOverlay[accent] || accentOverlay.cyan}`}
      />

      <div className="container-custom relative py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {badge && (
              <span
                className={`mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${badgeStyles[accent] || badgeStyles.cyan}`}
              >
                {badge}
              </span>
            )}
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            {subtitle && <p className="max-w-xl text-lg leading-relaxed text-slate-300">{subtitle}</p>}
          </div>

          {logo && (
            <div className="flex justify-center lg:justify-end">
              <div className="product-logo-wrap-nexus nexus-glow w-full max-w-md rounded-3xl">
                <img src={logo} alt="" className="max-h-28 w-auto object-contain" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
