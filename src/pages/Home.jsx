import Hero from '../components/home/Hero'
import StatsBar from '../components/home/StatsBar'
import ProductsShowcase from '../components/home/ProductsShowcase'
import ServicesOverview from '../components/home/ServicesOverview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Process from '../components/home/Process'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTA from '../components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProductsShowcase />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
