import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/ui/PageHero'
import { company } from '../data/content'

const serviceOptions = [
  'Nexus Retail POS',
  'Custom Odoo ERP',
  'E- ඉස්කෝලේ LMS',
  'Fast Process UI',
  'ERP Consulting',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
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
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">Get in Touch</h2>
                <p className="text-slate-600 leading-relaxed">
                  Reach out via phone, email, or WhatsApp. We typically respond within 24 hours on
                  business days.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${company.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                    <Phone className="w-5 h-5 text-brand-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                    <p className="font-semibold text-navy-900">{company.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                    <Mail className="w-5 h-5 text-brand-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                    <p className="font-semibold text-navy-900">{company.email}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-brand-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">WhatsApp</p>
                    <p className="font-semibold text-navy-900">Chat with us instantly</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                    <p className="font-semibold text-navy-900">{company.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="w-16 h-16 text-brand-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
                    }}
                    className="text-brand-600 font-semibold hover:text-brand-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h3>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 ${
                          errors.name ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 ${
                          errors.email ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 ${
                          errors.phone ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="+94 77 123 4567"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white ${
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
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 resize-none ${
                        errors.message ? 'border-red-300' : 'border-slate-200'
                      }`}
                      placeholder="Tell us about your business and what you need..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/25 transition-all"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
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
