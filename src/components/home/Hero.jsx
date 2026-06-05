import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import EIskoleLogo from '../brand/EIskoleLogo'
import Reveal from '../ui/Reveal'
import { company, products } from '../../data/content'

export default function Hero() {
  const pos = products.pos

  return (
    <section className="section-padding relative overflow-hidden pt-8 md:pt-12">
      <div className="hero-glow absolute right-0 top-20 h-72 w-72 bg-violet-300/25" aria-hidden="true" />
      <div className="hero-glow absolute bottom-10 left-1/4 h-56 w-56 bg-emerald-300/20" aria-hidden="true" />

      <div className="container-custom">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal delay={0}>
              <div className="glass-badge mb-6 inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                Sri Lanka&apos;s Odoo ERP · POS · LMS Partner
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Enterprise software.
                <span className="mt-2 block gradient-text-animated">Built for local business.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
                {company.name} builds <strong className="nexus-gradient-text font-semibold">Nexus Retail</strong> POS,
                <strong className="lms-gradient-text font-semibold"> E- ඉස්කෝලේ</strong> LMS, and fully customized Odoo
                ERP for retailers, schools, and organizations.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mb-8 flex flex-wrap gap-3">
                <Link
                  to={pos.path}
                  className="glass-strong card-hover-nexus card-hover inline-flex items-center gap-3 rounded-2xl px-4 py-3"
                >
                  <img src={pos.logo} alt="" className="h-8 w-auto object-contain" />
                </Link>
                <Link
                  to={products.lms.path}
                  className="glass-strong card-hover-lms card-hover inline-flex items-center rounded-2xl px-4 py-3"
                >
                  <div className="origin-left scale-75">
                    <EIskoleLogo size="sm" showTagline={false} />
                  </div>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mb-10 flex flex-col gap-4 sm:flex-row">
                <Button to="/contact" size="lg">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
                <Button to="/services" variant="outline" size="lg">
                  View All Services
                </Button>
              </div>
            </Reveal>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {['Free Consultation', 'Nexus Retail POS', 'E- ඉස්කෝලේ LMS', 'Local Support'].map((item, index) => (
                <Reveal key={item} delay={400 + index * 60} as="li" className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal direction="right" delay={120} className="relative hidden lg:block">
            <div className="space-y-5">
              <div className="glass-strong animate-float nexus-glow overflow-hidden rounded-3xl p-6">
                <div className="glass-logo-surface mb-5">
                  <img src={pos.logo} alt="Nexus Retail POS" className="max-h-20 w-auto object-contain" />
                </div>
                <p className="text-center text-sm font-medium text-violet-700">
                  Point of Sale · Offline billing · Multi-branch ready
                </p>
              </div>

              <div className="glass-strong lms-glow ml-8 overflow-hidden rounded-3xl border-emerald-200/80 p-6">
                <div className="glass-logo-surface-emerald mb-5">
                  <EIskoleLogo size="md" />
                </div>
                <p className="text-center text-sm font-medium text-emerald-700">
                  Digital school platform · Exams · Parent portals
                </p>
              </div>
            </div>

            <div className="glass-strong animate-float-delayed absolute -bottom-4 -left-4 rounded-2xl p-4">
              <p className="text-2xl font-extrabold gradient-text">99.9%</p>
              <p className="text-xs text-slate-500">System Uptime</p>
            </div>
            <div className="glass animate-float absolute -right-2 -top-2 rounded-2xl p-4">
              <p className="text-2xl font-extrabold text-slate-900">2–4 wks</p>
              <p className="text-xs text-slate-500">Retail Go-Live</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
