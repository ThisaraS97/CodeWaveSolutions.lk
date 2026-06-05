import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40',
  secondary:
    'bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 hover:border-brand-300',
  outline:
    'border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
  dark: 'bg-navy-900 text-white hover:bg-navy-800',
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

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
