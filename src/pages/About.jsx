import { Target, Eye, Heart, Users } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import CTA from '../components/home/CTA'
import { company, stats } from '../data/content'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'Empower small and medium businesses in Sri Lanka with affordable, world-class ERP and LMS technology that simplifies operations and accelerates growth.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted technology partner for retail and education sectors across South Asia — known for quality, speed, and genuine local support.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Integrity, client-first thinking, continuous improvement, and delivering solutions that actually work in the real world — not just on paper.',
  },
  {
    icon: Users,
    title: 'Our Team',
    description:
      'A dedicated team of Odoo developers, UI designers, and education technology specialists committed to your success from day one.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title={`About ${company.name}`}
        subtitle="We are a Sri Lanka-based technology company specializing in customized Odoo ERP and Learning Management Systems for businesses and educational institutions."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                badge="Our Story"
                title="Technology That Understands Local Business"
                center={false}
                subtitle="Founded with a passion for making enterprise-grade software accessible to every business in Sri Lanka."
              />
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>
                  {company.name} started with a simple observation: retail shop owners and school
                  administrators in Sri Lanka were struggling with fragmented software — one tool for
                  billing, another for inventory, spreadsheets for accounts, and paper for attendance.
                </p>
                <p>
                  We chose Odoo as our ERP foundation because it offers a complete business platform
                  that can be fully customized. Combined with our fast-process UI design philosophy, we
                  deliver systems that staff actually enjoy using.
                </p>
                <p>
                  Today, we serve retail shops from single outlets to multi-branch chains, schools,
                  tuition centres, and organizations across the country — with the same commitment to
                  quality and personal support.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass-strong overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Team collaboration - placeholder"
                  className="w-full object-cover opacity-90"
                />
              </div>
              <div className="glass-strong absolute -bottom-6 -left-6 hidden p-6 md:block">
                <p className="gradient-text text-3xl font-extrabold">5+</p>
                <p className="text-sm text-slate-500">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-stat-bar">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="mb-1 text-3xl font-extrabold gradient-text md:text-4xl">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="What Drives Us"
            title="Mission, Vision & Values"
            subtitle="The principles that guide every project we deliver."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="glass-card flex gap-5 p-6 card-hover">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-200 bg-violet-50">
                  <item.icon className="h-6 w-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Expertise" title="What We Specialize In" subtitle="Focused expertise — not generalist development." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Odoo ERP Implementation',
              'Retail POS Customization',
              'Multi-Branch Management',
              'Learning Management Systems',
              'Custom Dashboard Design',
              'Data Migration',
              'Staff Training',
              'Ongoing Support & Maintenance',
            ].map((skill) => (
              <div
                key={skill}
                className="glass rounded-xl px-4 py-3 text-center text-sm font-medium text-slate-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
