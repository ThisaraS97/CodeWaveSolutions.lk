import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import GlassBackground from './GlassBackground'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative flex min-h-screen flex-col">
      <GlassBackground />
      <Navbar />
      <main className="relative flex-1 pt-16 md:pt-[4.5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
