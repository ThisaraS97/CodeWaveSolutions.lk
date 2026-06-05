import { Link } from 'react-router-dom'

const variants = {
  primary:
    'btn-shine border border-cyan-200 bg-gradient-to-r from-slate-800 via-cyan-700 to-cyan-500 text-white shadow-lg shadow-cyan-200/70 hover:shadow-cyan-300/80 hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98]',
    outline:
    'border-2 border-slate-300 bg-white/80 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50/50 hover:scale-[1.02] active:scale-[0.98]',
  glass:
    'border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:scale-[1.02] active:scale-[0.98]',
  dark: 'border border-slate-800 bg-slate-900 text-white hover:bg-slate-800',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ${variants[variant] || variants.primary} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
