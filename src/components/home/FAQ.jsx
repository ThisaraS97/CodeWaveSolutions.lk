import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { faqs } from '../../data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about our Odoo ERP and LMS services."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-navy-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-500 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
