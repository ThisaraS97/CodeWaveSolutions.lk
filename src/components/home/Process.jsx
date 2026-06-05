import SectionHeading from '../ui/SectionHeading'
import { processSteps } from '../../data/content'

export default function Process() {
  return (
    <section className="section-padding bg-navy-900 hero-pattern">
      <div className="container-custom">
        <SectionHeading
          badge="Our Process"
          title="How We Work With You"
          subtitle="A proven, transparent process from first meeting to go-live and beyond."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-brand-500/50" />
              )}
              <span className="text-4xl font-extrabold gradient-text mb-4 block">{step.step}</span>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
