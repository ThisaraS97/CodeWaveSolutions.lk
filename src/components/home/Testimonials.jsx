import { Star, Quote } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real feedback from retail owners, school principals, and business leaders across Sri Lanka."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white p-8 rounded-2xl border border-slate-100 card-hover relative"
            >
              <Quote className="w-10 h-10 text-brand-200 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-100"
                />
                <div>
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
