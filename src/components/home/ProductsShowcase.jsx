import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../brand/ProductCard'
import { products } from '../../data/content'

export default function ProductsShowcase() {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 hero-pattern-nexus" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/12 blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <SectionHeading
          badge="Our Products"
          title="Flagship Solutions Built by Codewave"
          subtitle="Nexus Retail for shops · E- ඉස්කෝලේ for schools — fully integrated with customized Odoo ERP."
          light
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <ProductCard product={products.pos} featured />
          <ProductCard product={products.lms} featured />
        </div>
      </div>
    </section>
  )
}
