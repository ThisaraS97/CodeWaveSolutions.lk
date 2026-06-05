import SectionHeading from '../ui/SectionHeading'
import IconBox from '../ui/IconBox'
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item) => (
            <IconBox key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
