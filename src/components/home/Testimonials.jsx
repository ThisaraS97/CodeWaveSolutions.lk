import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from retail owners, school principals, and business leaders across Sri Lanka."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <div className="glass-card relative h-full p-8 card-hover">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-violet-200" />
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="relative z-10 mb-6 leading-relaxed text-slate-600">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full border-2 border-slate-200 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
