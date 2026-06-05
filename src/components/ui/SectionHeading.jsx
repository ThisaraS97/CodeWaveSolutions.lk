export default function SectionHeading({ badge, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
            light ? 'bg-white/10 text-brand-300' : 'bg-brand-100 text-brand-700'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
