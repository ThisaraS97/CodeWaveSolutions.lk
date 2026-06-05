export default function CodewaveLogo({ variant = 'full', theme = 'dark', className = '' }) {
  const isLight = theme === 'light'

  if (variant === 'icon') {
    return (
      <div
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-lg shadow-cyan-500/20 ${className}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logo-bg" x1="8" y1="4" x2="56" y2="60">
              <stop stopColor="#0B1220" />
              <stop offset="1" stopColor="#0E3A5D" />
            </linearGradient>
            <linearGradient id="logo-wave" x1="12" y1="24" x2="52" y2="44">
              <stop stopColor="#22D3EE" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#logo-bg)" />
          <path
            d="M12 34c6-4 12-4 20 0s14 4 20 0"
            stroke="url(#logo-wave)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.45"
          />
          <path
            d="M12 28c6-4 12-4 20 0s14 4 20 0"
            stroke="url(#logo-wave)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M12 40c6-4 12-4 20 0s14 4 20 0"
            stroke="url(#logo-wave)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path d="M24 18h16" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 18v8" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
          <path d="M44 18v8" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <CodewaveLogo variant="icon" className="h-10 w-10 md:h-11 md:w-11" />
      <div className="leading-tight">
        <span
          className={`block text-[1.05rem] font-extrabold tracking-tight md:text-lg ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
          <span className="bg-gradient-to-r from-cyan-500 via-teal-600 to-sky-700 bg-clip-text text-transparent">
            Codewave
          </span>
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
            isLight ? 'text-cyan-200/80' : 'text-slate-500'
          }`}
        >
          Solutions
        </span>
      </div>
    </div>
  )
}
