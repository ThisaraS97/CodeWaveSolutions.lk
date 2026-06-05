import SectionHeading from '../ui/SectionHeading'
import IconBox from '../ui/IconBox'
import Reveal from '../ui/Reveal'
import { whyChooseUs } from '../../data/content'

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Why Codewave"
          title="Why Businesses Choose Us"
          subtitle="We combine deep Odoo expertise with a focus on retail speed and education technology — delivering results, not just software."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <IconBox
                icon={item.icon}
                title={item.title}
                description={item.description}
                theme={i === 1 ? 'nexus' : i === 2 ? 'emerald' : 'default'}
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
