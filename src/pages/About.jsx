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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="Technology That Understands Local Business"
                center={false}
                subtitle="Founded with a passion for making enterprise-grade software accessible to every business in Sri Lanka."
              />
              <div className="space-y-4 text-slate-600 leading-relaxed">
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
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Team collaboration - placeholder"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-500 text-white p-6 rounded-2xl shadow-lg hidden md:block">
                <p className="text-3xl font-extrabold">5+</p>
                <p className="text-sm text-brand-100">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-brand-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeading
            badge="What Drives Us"
            title="Mission, Vision & Values"
            subtitle="The principles that guide every project we deliver."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-100 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Expertise"
            title="What We Specialize In"
            subtitle="Focused expertise — not generalist development."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                className="px-4 py-3 rounded-xl bg-brand-50 border border-brand-100 text-sm font-medium text-brand-800 text-center"
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
