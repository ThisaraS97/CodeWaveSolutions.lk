import * as LucideIcons from 'lucide-react'

export default function IconBox({ icon, title, description, className = '', theme = 'default' }) {
  const Icon = LucideIcons[icon] || LucideIcons.Circle

  const iconWrap =
    theme === 'nexus'
      ? 'bg-violet-100 group-hover:nexus-gradient-bg'
      : 'bg-brand-500/10 group-hover:bg-brand-500'

  const iconColor =
    theme === 'nexus'
      ? 'text-violet-600 group-hover:text-white'
      : 'text-brand-600 group-hover:text-white'

  return (
    <div
      className={`group rounded-2xl border bg-white p-6 card-hover ${
        theme === 'nexus' ? 'border-violet-100 card-hover-nexus' : 'border-slate-100'
      } ${className}`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${iconWrap}`}
      >
        <Icon className={`h-6 w-6 transition-colors ${iconColor}`} />
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  )
}
