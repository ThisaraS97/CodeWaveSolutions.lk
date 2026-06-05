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
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.id} className="glass-card group overflow-hidden card-hover">
                <img
                  src={service.image}
                  alt={`${service.title} - placeholder`}
                  className="h-52 w-full object-cover opacity-75 transition-transform group-hover:scale-105"
                />
                <div className="p-8">
                  <span className="glass-badge text-[0.65rem]">Service {String(index + 1).padStart(2, '0')}</span>
                  <h2 className="mb-3 mt-3 text-2xl font-bold text-slate-900">{service.title}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button to={service.path} variant="primary" size="sm">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Nexus Retail UI"
            title="Interfaces Built for Speed"
            subtitle="Nexus Retail delivers a purpose-built POS experience — not generic ERP screens — so your team completes daily tasks in fewer clicks."
            badgeVariant="violet"
          />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="glass-strong nexus-glow overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop"
                alt="Custom UI dashboard - placeholder"
                className="h-auto w-full object-cover opacity-90"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="glass-strong p-6 card-hover">
                <span className="gradient-text text-3xl font-extrabold">{step.step}</span>
                <h3 className="mb-2 mt-3 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="glass-cta mx-auto max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">Not Sure Which Service You Need?</h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-600">
              Tell us about your business and we&apos;ll recommend the right solution — no obligation.
            </p>
            <Button to="/contact" size="lg">
              Talk to an Expert
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
