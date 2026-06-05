export default function PageHero({ badge, title, subtitle, image }) {
  return (
    <section className="relative bg-navy-900 hero-pattern overflow-hidden">
      <div className="container-custom relative py-16 md:py-24">
        <div className={`grid ${image ? 'lg:grid-cols-2 gap-12 items-center' : ''}`}>
          <div className={image ? '' : 'max-w-3xl'}>
            {badge && (
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">{title}</h1>
            {subtitle && <p className="text-lg text-slate-300 leading-relaxed">{subtitle}</p>}
          </div>
          {image && (
            <div className="hidden lg:block rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={image} alt="" className="w-full h-72 object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
