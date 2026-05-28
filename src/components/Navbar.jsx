import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Ticket } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'الفعاليات', path: '/events' },
    { name: 'أرشيف السينما', path: '/archive' },
    { name: 'تواصل معنا', path: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight/80 backdrop-blur-xl border-b border-projector-orange/20 py-4 shadow-xl'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <Link to="/" className="group flex flex-col items-start focus:outline-none">
            <h1 className="text-xl md:text-2xl font-black font-cairo tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-projector-orange to-projector-warm transition duration-300 group-hover:scale-[1.02]">
              Damascus Film Salon
            </h1>
            <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] -mt-1 uppercase">
              صالون دمشق السينمائي
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2.5 font-tajawal font-bold text-sm transition-all duration-300 rounded-full group ${
                    active
                      ? 'text-projector-orange'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {active && (
                    <span className="absolute inset-0 bg-projector-orange/10 rounded-full border border-projector-orange/30 shadow-[0_0_15px_rgba(224,107,0,0.15)]" />
                  )}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-projector-orange transition-all duration-300 group-hover:w-1/2 rounded-full" />
                </Link>
              )
            })}
          </nav>

          {/* CTA & Mobile trigger */}
          <div className="flex items-center gap-4">
            <Link
              to="/booking"
              className="hidden md:flex items-center gap-2 bg-gradient-to-l from-projector-orange to-projector-warm hover:from-projector-warm hover:to-projector-orange text-white px-6 py-3 rounded-full font-cairo font-bold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(224,107,0,0.25)] hover:shadow-[0_4px_30px_rgba(224,107,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Ticket className="w-4 h-4" />
              <span>احجز الآن</span>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-projector-orange/30 transition-all duration-300 flex items-center justify-center text-gray-300 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-6 bg-midnight/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl font-tajawal font-bold text-sm transition-all duration-300 ${
                    active
                      ? 'bg-projector-orange/10 text-projector-orange border-r-2 border-projector-orange'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-3 bg-gradient-to-l from-projector-orange to-projector-warm text-white px-4 py-3.5 rounded-xl font-cairo font-black text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <Ticket className="w-4 h-4" />
              <span>احجز الآن</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}