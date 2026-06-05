import { CheckCircle2, ArrowRight } from 'lucide-react'
import ProductPageHero from '../components/ui/ProductPageHero'
import SectionHeading from '../components/ui/SectionHeading'
import IconBox from '../components/ui/IconBox'
import CTA from '../components/home/CTA'
import Button from '../components/ui/Button'
import EIskoleLogo from '../components/brand/EIskoleLogo'
import { lmsFeatures, lmsClients, products } from '../data/content'

export default function LMS() {
  const lms = products.lms

  return (
    <>
      <ProductPageHero
        badge="E- ඉස්කෝලේ · LMS"
        title="Digital School Platform for Sri Lanka"
        subtitle="E- ඉස්කෝලේ is our flagship Learning Management System — courses, online exams, attendance, fees, and parent portals for schools and tuition centres."
        logo={null}
        accent="emerald"
      />

      <section className="border-b border-slate-100 bg-gradient-to-b from-emerald-50/50 to-white py-10">
        <div className="container-custom flex justify-center">
          <div className="product-logo-wrap max-w-xl rounded-3xl border border-emerald-100 bg-white p-10 shadow-lg">
            <EIskoleLogo size="lg" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Who It's For"
            title="E- ඉස්කෝලේ for Every Education Need"
            subtitle="From a single tuition teacher to large schools and corporate training departments."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {lmsClients.map((client) => (
              <article
                key={client.title}
                className="group overflow-hidden rounded-3xl border border-slate-200/80 card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={client.image}
                    alt={`${client.title} - placeholder`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{client.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{client.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            badge="Platform Features"
            title="Everything Inside E- ඉස්කෝලේ"
            subtitle="Purpose-built features for educators, students, and administrators."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lmsFeatures.map((feature) => (
              <IconBox
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1">
              <div className="product-logo-wrap w-full max-w-lg rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 p-10 shadow-xl">
                <EIskoleLogo size="lg" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                badge="E- ඉස්කෝලේ"
                title="Built for Sri Lankan Education"
                center={false}
                subtitle="We understand local education — term systems, grade structures, tuition batches, and parent expectations."
              />
              <ul className="mb-8 space-y-3">
                {lms.highlights.concat(['Teacher portal for lesson planning & grading']).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button to="/contact" size="md">
                Schedule E- ඉස්කෝලේ Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 hero-pattern">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">For Teachers</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Upload lessons, videos, and assignments easily</li>
                <li>• Create and grade exams in minutes</li>
                <li>• Track student progress per subject</li>
                <li>• Communicate with students and parents</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">For Administrators</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Manage batches, classes, and timetables</li>
                <li>• Fee collection and financial reports</li>
                <li>• Attendance analytics and alerts</li>
                <li>• Export data for government reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
