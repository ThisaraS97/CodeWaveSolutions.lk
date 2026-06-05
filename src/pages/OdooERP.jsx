import { CheckCircle2, ArrowRight } from 'lucide-react'
import ProductPageHero from '../components/ui/ProductPageHero'
import SectionHeading from '../components/ui/SectionHeading'
import IconBox from '../components/ui/IconBox'
import CTA from '../components/home/CTA'
import Button from '../components/ui/Button'
import { odooModules, retailTypes, products } from '../data/content'

export default function OdooERP() {
  const pos = products.pos

  return (
    <>
      <ProductPageHero
        badge="Nexus Retail · Odoo ERP"
        title="Retail POS & ERP Built for Speed"
        subtitle="Nexus Retail is our flagship Point of Sale — fully integrated with customized Odoo ERP for small shops, large retail chains, and organizations."
        logo={pos.logo}
        accent="nexus"
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Who We Serve"
            title="Nexus Retail for Every Business Size"
            subtitle="Whether you run a single shop or manage a nationwide retail network, Nexus scales with you."
            badgeVariant="violet"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {retailTypes.map((type) => (
              <article key={type.title} className="glass-card group overflow-hidden card-hover-nexus">
                <div className="h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={`${type.title} - placeholder`}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{type.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{type.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Odoo + Nexus"
            title="Everything Your Business Needs in One Platform"
            subtitle="We configure Odoo modules around Nexus Retail — your daily POS experience, powered by enterprise ERP."
            badgeVariant="violet"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {odooModules.map((mod) => (
              <IconBox key={mod.title} theme="nexus" icon={mod.icon} title={mod.title} description={mod.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1">
              <div className="product-logo-wrap-nexus nexus-glow w-full max-w-lg rounded-3xl p-10">
                <img src={pos.logo} alt="Nexus Retail" className="mx-auto max-h-32 w-auto object-contain" />
                <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                  {pos.tagline}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="Nexus Retail"
                title="Fast Process UI for Retail"
                center={false}
                badgeVariant="violet"
                subtitle="Not generic Odoo screens — Nexus Retail is a purpose-built interface so cashiers and managers work faster with fewer mistakes."
              />
              <ul className="mb-8 space-y-3">
                {pos.highlights.concat(['Sinhala / Tamil / English interface options']).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button to="/contact" size="md">
                Request Nexus Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-strong nexus-glow grid gap-8 rounded-3xl p-10 text-center md:grid-cols-3 md:p-12">
            {[
              { value: '2–4 Weeks', label: 'Small Retail Go-Live' },
              { value: '6–12 Weeks', label: 'Enterprise Projects' },
              { value: '100%', label: 'Customizable Workflows' },
            ].map((item) => (
              <div key={item.label}>
                <p className="mb-2 text-3xl font-extrabold nexus-gradient-text md:text-4xl">{item.value}</p>
                <p className="text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
