import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import EIskoleLogo from './EIskoleLogo'

export default function ProductCard({ product }) {
  const isNexus = product.id === 'nexus-retail'
  const isLms = product.id === 'e-iskole'

  return (
    <article
      className={`glass-card group relative overflow-hidden card-hover ${isNexus ? 'card-hover-nexus' : 'card-hover-lms'}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${product.accentGradient}`}
        aria-hidden="true"
      />

      <div className="p-8 pb-6">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div
            className={`flex min-h-[88px] flex-1 items-center justify-center rounded-2xl px-5 py-4 ${
              isNexus ? 'product-logo-wrap-nexus' : 'product-logo-wrap-lms'
            }`}
          >
            {isLms ? (
              <EIskoleLogo size="md" />
            ) : (
              <img src={product.logo} alt={`${product.name} logo`} className="max-h-16 w-auto object-contain" />
            )}
          </div>
          <span className={`glass-badge shrink-0 text-[0.65rem] ${isNexus ? 'glass-badge-violet' : 'glass-badge-emerald'}`}>
            {product.badge}
          </span>
        </div>

        <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${product.labelClass}`}>
          {product.category}
        </p>
        <h3 className={`mb-3 text-2xl font-bold tracking-tight ${isNexus ? 'nexus-gradient-text' : 'lms-gradient-text'}`}>
          {product.name}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-slate-600">{product.description}</p>

        <ul className="mb-8 grid gap-2">
          {product.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${product.dotClass}`} />
              {item}
            </li>
          ))}
        </ul>

        <Link
          to={product.path}
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${product.linkClass}`}
        >
          Explore {product.shortName}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="relative h-44 overflow-hidden border-t border-slate-200/80">
        <img
          src={product.image}
          alt={`${product.name} preview`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${product.imageOverlay}`} />
      </div>
    </article>
  )
}
