import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { company, navLinks, products } from '../../data/content'
import CodewaveLogo from '../brand/CodewaveLogo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="glass-footer text-slate-600">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="mb-5 inline-block">
              <CodewaveLogo variant="lg" />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-500">{company.description}</p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook', href: company.facebook, external: true },
                { Icon: Linkedin, label: 'LinkedIn', href: company.linkedin, external: true },
                { Icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${company.whatsapp}`, external: true },
              ].map(({ Icon, label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-500 transition-colors hover:text-violet-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Our Products</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={products.pos.path} className="text-slate-500 transition-colors hover:text-violet-700">
                  {products.pos.name} — POS
                </Link>
              </li>
              <li>
                <Link to={products.lms.path} className="text-slate-500 transition-colors hover:text-emerald-700">
                  {products.lms.name} — LMS
                </Link>
              </li>
              <li>
                <Link to="/odoo-erp" className="text-slate-500 transition-colors hover:text-blue-700">
                  Custom Odoo ERP
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-500 transition-colors hover:text-violet-700">
                  ERP Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
                <span className="text-slate-500">{company.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-violet-500" />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-slate-500 hover:text-violet-700">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-violet-500" />
                <a href={`mailto:${company.email}`} className="text-slate-500 hover:text-violet-700">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">&copy; {year} {company.name}. All rights reserved.</p>
          <p className="text-sm text-slate-500">Nexus Retail · E- ඉස්කෝලේ · Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
