import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { processSteps } from '../../data/content'

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Our Process"
          title="How We Work With You"
          subtitle="A proven, transparent process from first meeting to go-live and beyond."
        />

        <div className="process-timeline grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 100}>
              <div className="process-step text-center">
                <div className="process-step-dot gradient-text">{step.step}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
