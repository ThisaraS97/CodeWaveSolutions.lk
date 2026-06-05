export default function EIskoleLogo({ size = 'md', showTagline = true, className = '' }) {
  const sizes = {
    sm: { main: 'text-xl', sub: 'text-[0.55rem]', sinhala: 'text-lg' },
    md: { main: 'text-3xl', sub: 'text-[0.62rem]', sinhala: 'text-2xl' },
    lg: { main: 'text-4xl', sub: 'text-xs', sinhala: 'text-3xl' },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="flex items-baseline gap-0.5 leading-none">
        <span
          className={`${s.main} font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 bg-clip-text text-transparent`}
        >
          E-
        </span>
        <span
          className={`${s.sinhala} font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 bg-clip-text text-transparent`}
        >
          ඉස්කෝලේ
        </span>
      </div>
      {showTagline && (
        <span className={`${s.sub} mt-2 font-semibold uppercase tracking-[0.28em] text-slate-400`}>
          Learning Management System
        </span>
      )}
    </div>
  )
}
