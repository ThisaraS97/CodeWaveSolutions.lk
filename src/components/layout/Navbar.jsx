import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, company } from '../../data/content'
import Button from '../ui/Button'
import CodewaveLogo from '../brand/CodewaveLogo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link to="/" className="group transition-opacity hover:opacity-90" onClick={() => setOpen(false)}>
            <CodewaveLogo />
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-xl px-3.5 py-2 text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-700"
            >
              <Phone className="h-4 w-4" />
              {company.phone}
            </a>
            <Button to="/contact" size="sm">
              Free Consultation
            </Button>
          </div>

          <button
            type="button"
            className="rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="animate-fade-up border-t border-slate-100 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive(link.path) ? 'bg-slate-900 text-white' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
