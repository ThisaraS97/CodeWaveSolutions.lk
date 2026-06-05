import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../brand/ProductCard'
import Reveal from '../ui/Reveal'
import { products } from '../../data/content'

export default function ProductsShowcase() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="Our Products"
          title="Flagship Solutions Built by Codewave"
          subtitle="Nexus Retail for shops · E- ඉස්කෝලේ for schools — fully integrated with customized Odoo ERP."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <ProductCard product={products.pos} featured />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <ProductCard product={products.lms} featured />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
