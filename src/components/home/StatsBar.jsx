import AnimatedCounter from '../ui/AnimatedCounter'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/content'

export default function StatsBar() {
  return (
    <section className="glass-stat-bar">
      <div className="container-custom py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <p className="mb-1 text-3xl font-extrabold gradient-text md:text-4xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
