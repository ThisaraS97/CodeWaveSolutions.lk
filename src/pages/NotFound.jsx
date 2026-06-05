import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <div className="container-custom text-center">
        <p className="text-8xl font-extrabold gradient-text mb-4">404</p>
        <h1 className="text-3xl font-bold text-navy-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" size="md">
            <Home className="w-4 h-4" />
            Go Home
          </Button>
          <Button to="/contact" variant="secondary" size="md">
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
