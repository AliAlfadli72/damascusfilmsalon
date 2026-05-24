import { Link } from 'react-router-dom'

import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Ticket,
  ArrowLeft,
} from 'lucide-react'

export default function Footer() {

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

    <footer className="relative mt-32 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-2xl">

      {/* GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />

      {/* CTA */}

      <section className="relative border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="bg-gradient-to-br from-gold/10 to-orange-500/5 border border-gold/20 rounded-[3rem] p-12 md:p-16 overflow-hidden relative">

            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_40%)]" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-center">

              {/* TEXT */}

              <div>

                <span className="text-gold font-black text-lg">
                  ابدأ رحلتك السينمائية
                </span>

                <h2 className="text-5xl md:text-7xl font-black leading-tight mt-6 mb-8">

                  حيث تبدأ
                  <span className="block text-gold">
                    الحكاية الحقيقية
                  </span>

                </h2>

                <p className="max-w-3xl text-xl text-gray-300 leading-[2]">

                  انضم إلى مجتمع دمشق فيلم صالون
                  واكتشف تجربة سينمائية مستقلة
                  تجمع بين الفن والحوار والثقافة البصرية.

                </p>

              </div>

              {/* BUTTON */}

              <Link
                to="/booking"
                className="group bg-gold hover:bg-orange-500 transition-all duration-300 px-10 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-gold/20 hover:scale-105"
              >

                <Ticket className="w-6 h-6" />

                احجز الآن

                <ArrowLeft className="group-hover:-translate-x-1 transition" />

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* MAIN FOOTER */}

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-16">

          {/* BRAND */}

          <div>

            <h2 className="text-4xl font-black text-gold leading-tight mb-6">

              Damascus
              <span className="block">
                Film Salon
              </span>

            </h2>

            <p className="text-gray-400 text-lg leading-[2] mb-10">

              منصة ثقافية مستقلة تهدف لإحياء السينما البديلة
              وصناعة حراك بصري معاصر داخل قلب دمشق.

            </p>

            {/* SOCIAL */}

            <div className="flex items-center gap-4">

              {[
                {
                  icon: Instagram,
                  href: '#',
                },

                {
                  icon: Facebook,
                  href: '#',
                },

                {
                  icon: Mail,
                  href: '#',
                },
              ].map((item, index) => {

                const Icon = item.icon

                return (

                  <a
                    key={index}
                    href={item.href}
                    className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-gold/10 transition-all duration-300 flex items-center justify-center"
                  >

                    <Icon className="w-5 h-5" />

                  </a>

                )
              })}

            </div>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="text-2xl font-black mb-8">
              الصفحات
            </h3>

            <div className="space-y-5">

              {links.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-gold transition-all duration-300 hover:translate-x-1"
                >

                  {link.name}

                </Link>

              ))}

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-2xl font-black mb-8">
              تواصل معنا
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <Mail className="w-5 h-5 text-gold mt-1" />

                <div>

                  <p className="text-gray-400">
                    info@damascusfilmsalon.com
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Instagram className="w-5 h-5 text-gold mt-1" />

                <div>

                  <p className="text-gray-400">
                    @damascus.film.salon
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <MapPin className="w-5 h-5 text-gold mt-1" />

                <div>

                  <p className="text-gray-400">
                    دمشق - سوريا
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* NEWSLETTER */}

          <div>

            <h3 className="text-2xl font-black mb-8">
              النشرة البريدية
            </h3>

            <p className="text-gray-400 leading-8 mb-8">

              اشترك ليصلك جديد العروض
              والورش والفعاليات القادمة.

            </p>

            <div className="space-y-4">

              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-gold/40 transition-all duration-300"
              />

              <button className="w-full bg-gold hover:bg-orange-500 transition-all duration-300 py-4 rounded-2xl font-black">

                اشتراك

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="relative border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">

            © 2026 Damascus Film Salon — جميع الحقوق محفوظة

          </p>

          <div className="flex items-center gap-8 text-sm text-gray-500">

            <button className="hover:text-gold transition">
              سياسة الخصوصية
            </button>

            <button className="hover:text-gold transition">
              الشروط والأحكام
            </button>

          </div>

        </div>

      </div>

    </footer>

  )
}