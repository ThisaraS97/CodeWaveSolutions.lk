import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import { company } from '../data/content'

const FORM_NAME = 'contact'

const serviceOptions = [
  'Nexus Retail POS',
  'Custom Odoo ERP',
  'E- ඉස්කෝලේ LMS',
  'Fast Process UI',
  'ERP Consulting',
  'Other',
]

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.service) newErrors.service = 'Please select a service'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setSubmitError('')

    try {
      const body = new URLSearchParams({
        'form-name': FORM_NAME,
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.service,
        message: form.message,
      }).toString()

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setSubmitted(true)
    } catch {
      setSubmitError('Could not send your message. Please contact us via WhatsApp or phone.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's Talk About Your Project"
        subtitle="Get a free consultation. Tell us about your business and we'll show you how we can help."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-navy-900">Get in Touch</h2>
                <p className="leading-relaxed text-slate-600">
                  Reach out via phone, email, or WhatsApp. We typically respond within 24 hours on
                  business days.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500">
                    <Phone className="h-5 w-5 text-brand-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Phone</p>
                    <p className="font-semibold text-navy-900">{company.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500">
                    <Mail className="h-5 w-5 text-brand-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Email</p>
                    <p className="font-semibold text-navy-900">{company.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 transition-colors group-hover:bg-brand-500">
                    <MessageCircle className="h-5 w-5 text-brand-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">WhatsApp</p>
                    <p className="font-semibold text-navy-900">Chat with us instantly</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10">
                    <MapPin className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Location</p>
                    <p className="font-semibold text-navy-900">{company.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl border border-brand-200 bg-brand-50 p-10 text-center">
                  <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-brand-500" />
                  <h3 className="mb-2 text-2xl font-bold text-navy-900">Message Sent!</h3>
                  <p className="mb-6 text-slate-600">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm(emptyForm)
                      setSubmitError('')
                    }}
                    className="font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name={FORM_NAME}
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <input type="hidden" name="form-name" value={FORM_NAME} />

                  {/* Honeypot — spam protection (Netlify) */}
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don&apos;t fill this out:
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <h3 className="mb-6 text-xl font-bold text-navy-900">Send Us a Message</h3>

                  {submitError && (
                    <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {submitError}
                    </p>
                  )}

                  <div className="mb-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60 ${
                          errors.name ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60 ${
                          errors.email ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={submitting}
                        className={`w-full rounded-xl border px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60 ${
                          errors.phone ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="+94 77 123 4567"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        disabled={submitting}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      disabled={submitting}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60 ${
                        errors.service ? 'border-red-300' : 'border-slate-200'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      disabled={submitting}
                      rows={5}
                      className={`w-full resize-none rounded-xl border px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60 ${
                        errors.message ? 'border-red-300' : 'border-slate-200'
                      }`}
                      placeholder="Tell us about your business and what you need..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
