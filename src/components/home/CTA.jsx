import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <Reveal direction="scale">
          <div className="glass-cta text-center">
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Ready to Modernize Your Business?</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Book a free consultation today. We&apos;ll assess your needs and show you exactly how Odoo ERP or our
                LMS can transform your operations.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button to="/contact" size="lg">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href="https://wa.me/94771234567" variant="outline" size="lg">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
