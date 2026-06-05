import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your Business?
            </h2>
            <p className="text-brand-100 text-lg mb-8 leading-relaxed">
              Book a free consultation today. We&apos;ll assess your needs and show you exactly how
              Odoo ERP or our LMS can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="secondary" size="lg">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href="https://wa.me/94771234567"
                variant="outline"
                size="lg"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
