import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import EIskoleLogo from '../brand/EIskoleLogo'
import { company, products } from '../../data/content'

export default function Hero() {
  const pos = products.pos

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 hero-pattern" />
      <div className="pointer-events-none absolute inset-0 hero-pattern-nexus opacity-80" />

      <div className="container-custom relative">
        <div className="grid min-h-[calc(100vh-4.5rem)] items-center gap-14 py-14 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-blue-600/10 px-4 py-2 text-sm text-violet-100 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              Sri Lanka&apos;s Odoo ERP · POS · LMS Partner
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Enterprise software.
              <span className="mt-2 block nexus-gradient-text">Built for local business.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
              {company.name} builds <strong className="nexus-gradient-text font-semibold">Nexus Retail</strong> POS,
              <strong className="font-semibold text-emerald-300"> E- ඉස්කෝලේ</strong> LMS, and fully customized Odoo
              ERP for retailers, schools, and organizations.
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <Link
                to={pos.path}
                className="nexus-border-gradient inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-2.5 shadow-md transition-all hover:nexus-glow"
              >
                <img src={pos.logo} alt="" className="h-8 w-auto object-contain" />
              </Link>
              <Link
                to={products.lms.path}
                className="inline-flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-2.5 backdrop-blur-sm transition-colors hover:bg-emerald-500/20"
              >
                <div className="origin-left scale-75">
                  <EIskoleLogo size="sm" showTagline={false} />
                </div>
              </Link>
            </div>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" size="lg" className="nexus-gradient-bg border-0 shadow-lg shadow-violet-500/30 hover:opacity-95">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button to="/services" variant="outline" size="lg">
                View All Services
              </Button>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {['Free Consultation', 'Nexus Retail POS', 'E- ඉස්කෝලේ LMS', 'Local Support'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden animate-fade-up lg:block" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-6 rounded-[2rem] nexus-gradient-bg opacity-20 blur-3xl" />

            <div className="relative space-y-5">
              <div className="glass-panel-nexus animate-float overflow-hidden rounded-3xl p-6 nexus-glow">
                <div className="mb-5 flex items-center justify-center rounded-2xl bg-white px-6 py-8">
                  <img src={pos.logo} alt="Nexus Retail POS" className="max-h-20 w-auto object-contain" />
                </div>
                <p className="text-center text-sm font-medium text-violet-200/90">
                  Point of Sale · Offline billing · Multi-branch ready
                </p>
              </div>

              <div className="glass-panel ml-8 overflow-hidden rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-6 backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50/95 to-cyan-50/95 px-6 py-8">
                  <EIskoleLogo size="md" />
                </div>
                <p className="text-center text-sm font-medium text-emerald-200/90">
                  Digital school platform · Exams · Parent portals
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-violet-200 bg-white p-4 shadow-xl nexus-glow">
              <p className="text-2xl font-extrabold nexus-gradient-text">99.9%</p>
              <p className="text-xs text-slate-500">System Uptime</p>
            </div>
            <div className="absolute -right-2 -top-2 rounded-2xl border border-violet-200 bg-white p-4 shadow-lg">
              <p className="text-2xl font-extrabold text-slate-900">2–4 wks</p>
              <p className="text-xs text-slate-500">Retail Go-Live</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
