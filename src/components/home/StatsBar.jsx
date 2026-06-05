import { stats } from '../../data/content'

export default function StatsBar() {
  return (
    <section className="bg-brand-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-500" />
      <div className="container-custom relative py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-brand-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
