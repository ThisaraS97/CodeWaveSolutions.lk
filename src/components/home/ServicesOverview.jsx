import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/content'

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          badge="What We Do"
          title="Solutions Built for Your Business"
          subtitle="From single-shop retailers to multi-branch chains, schools, and corporate organizations — powered by Nexus Retail and E- ඉස්කෝලේ."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white card-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - placeholder`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                {service.product && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-700 backdrop-blur-sm">
                    {service.product}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mb-6 grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 text-xs text-slate-500">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
