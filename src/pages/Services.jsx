import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import IconBox from '../components/ui/IconBox'
import CTA from '../components/home/CTA'
import Button from '../components/ui/Button'
import { services, processSteps } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Technology Solutions That Drive Growth"
        subtitle="We specialize in Odoo ERP customization, fast-process UI design, and Learning Management Systems — tailored for retail, education, and organizations."
        image="https://images.unsplash.com/photo-1454165804603-c06757f441fe?w=800&h=500&fit=crop"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={service.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover"
              >
                <img
                  src={service.image}
                  alt={`${service.title} - placeholder`}
                  className="w-full h-52 object-cover"
                />
                <div className="p-8">
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-2xl font-bold text-navy-900 mt-2 mb-3">{service.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button to={service.path} variant="primary" size="sm">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-violet-50/60 to-blue-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Nexus Retail UI"
            title="Interfaces Built for Speed"
            subtitle="Nexus Retail delivers a purpose-built POS experience — not generic ERP screens — so your team completes daily tasks in fewer clicks."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl border border-violet-200/60 shadow-lg nexus-glow">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop"
                alt="Custom UI dashboard - placeholder"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <IconBox theme="nexus" icon="Smartphone" title="Mobile-First" description="Works perfectly on tablets and phones for on-the-go management." />
              <IconBox theme="nexus" icon="MousePointerClick" title="One-Click Actions" description="Common tasks like sales, returns, and stock checks in a single tap." />
              <IconBox theme="nexus" icon="LayoutDashboard" title="Role Dashboards" description="Cashiers, managers, and owners see only what they need." />
              <IconBox theme="nexus" icon="Wifi" title="Offline POS" description="Keep selling even when internet drops — syncs when back online." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Delivery Process"
            title="From Idea to Launch"
            subtitle="Our structured approach ensures your project stays on track and on budget."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-brand-50 border border-brand-100">
                <span className="text-3xl font-extrabold text-brand-600">{step.step}</span>
                <h3 className="text-lg font-bold text-navy-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Tell us about your business and we&apos;ll recommend the right solution — no obligation.
          </p>
          <Button to="/contact" size="lg">
            Talk to an Expert
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <CTA />
    </>
  )
}
