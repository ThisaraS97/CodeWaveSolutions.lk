import Reveal from './Reveal'

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  badgeVariant = 'default',
}) {
  const badgeClass =
    badgeVariant === 'violet'
      ? 'glass-badge glass-badge-violet'
      : badgeVariant === 'emerald'
        ? 'glass-badge glass-badge-emerald'
        : 'glass-badge'

  return (
    <div className={`mb-12 md:mb-16 ${center ? 'mx-auto max-w-3xl text-center' : ''}`}>
      {badge && (
        <Reveal>
          <span className={`${badgeClass} mb-4 inline-block`}>{badge}</span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
