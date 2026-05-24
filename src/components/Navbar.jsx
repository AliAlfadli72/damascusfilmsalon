import { useState, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import {
  Menu,
  X,
  Ticket,
} from 'lucide-react'

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  const links = [
    {
      name: 'الرئيسية',
      path: '/',
    },
    {
      name: 'من نحن',
      path: '/about',
    },
    {
      name: 'الفعاليات',
      path: '/events',
    },
    {
      name: 'أرشيف السينما',
      path: '/archive',
    },
    {
      name: 'تواصل معنا',
      path: '/contact',
    },
  ]

  return (

    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-24">

          {/* LOGO */}

          <Link
            to="/"
            className="group"
          >

            <h1 className="text-2xl md:text-3xl font-black text-gold tracking-wide group-hover:scale-105 transition">

              Damascus Film Salon

            </h1>

            <p className="text-xs text-gray-400 mt-1 tracking-[0.3em] uppercase">

              صالون دمشق السينمائي

            </p>

          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-3">

            {links.map((link) => {

              const active = location.pathname === link.path

              return (

                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-3 rounded-full text-sm font-black transition-all duration-300 ${
                    active
                      ? 'text-gold bg-gold/10'
                      : 'text-white hover:text-gold hover:bg-white/5'
                  }`}
                >

                  {link.name}

                </Link>

              )
            })}

          </nav>

          {/* RIGHT ACTIONS */}

          <div className="flex items-center gap-4">

            {/* BOOK BUTTON */}

            <Link
              to="/booking"
              className="hidden md:flex items-center gap-3 bg-gold hover:bg-orange-500 text-white px-7 py-4 rounded-full font-black transition-all duration-300 shadow-2xl shadow-gold/20 hover:scale-105"
            >

              <Ticket className="w-5 h-5" />

              احجز الآن

            </Link>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl"
            >

              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >

        <div className="mx-6 mb-6 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6">

          <div className="flex flex-col gap-3">

            {links.map((link) => {

              const active = location.pathname === link.path

              return (

                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-5 py-4 rounded-2xl font-bold transition-all duration-300 ${
                    active
                      ? 'bg-gold/10 text-gold'
                      : 'hover:bg-white/5 text-white'
                  }`}
                >

                  {link.name}

                </Link>

              )
            })}

            {/* MOBILE BOOK BUTTON */}

            <Link
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-gold hover:bg-orange-500 transition-all duration-300 px-6 py-5 rounded-2xl font-black flex items-center justify-center gap-3"
            >

              <Ticket className="w-5 h-5" />

              احجز الآن

            </Link>

          </div>

        </div>

      </div>

    </header>

  )
}