import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="section-padding flex min-h-[60vh] items-center">
      <div className="container-custom text-center">
        <div className="glass-strong mx-auto max-w-lg p-12">
          <p className="gradient-text mb-4 text-8xl font-extrabold">404</p>
          <h1 className="mb-4 text-3xl font-bold text-slate-900">Page Not Found</h1>
          <p className="mx-auto mb-8 max-w-md text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/" size="md">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
            <Button to="/contact" variant="secondary" size="md">
              <ArrowLeft className="h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
