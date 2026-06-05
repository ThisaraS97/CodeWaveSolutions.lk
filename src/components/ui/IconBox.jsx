import * as LucideIcons from 'lucide-react'

export default function IconBox({ icon, title, description, className = '', theme = 'default' }) {
  const Icon = LucideIcons[icon] || LucideIcons.Circle

  const iconWrap =
    theme === 'nexus'
      ? 'border border-violet-200 bg-violet-50 group-hover:nexus-gradient-bg'
      : theme === 'emerald'
        ? 'border border-emerald-200 bg-emerald-50 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-teal-500'
        : 'border border-slate-200 bg-slate-50 group-hover:bg-violet-50'

  const iconColor =
    theme === 'nexus'
      ? 'text-violet-600 group-hover:text-white'
      : theme === 'emerald'
        ? 'text-emerald-600 group-hover:text-white'
        : 'text-slate-600 group-hover:text-violet-700'

  return (
    <div className={`glass-card group p-6 card-hover ${className}`}>
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
