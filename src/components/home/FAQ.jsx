import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
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

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={faq.question} delay={index * 60}>
                <div className={`glass overflow-hidden rounded-2xl transition-shadow duration-300 ${isOpen ? 'shadow-lg shadow-violet-100/60' : ''}`}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-slate-50/80"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-violet-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}>
                    <div className="faq-panel-inner">
                      <div className="border-t border-slate-200 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
