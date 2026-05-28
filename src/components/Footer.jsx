import { Link } from 'react-router-dom'
import { Instagram, Facebook, Mail, MapPin, Phone, Ticket, ArrowLeft } from 'lucide-react'

export default function Footer() {
  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'الفعاليات', path: '/events' },
    { name: 'أرشيف السينما', path: '/archive' },
    { name: 'تواصل معنا', path: '/contact' },
  ]

  const contactData = {
    location: "دمشق، سوريا - المنطقة الثقافية التراثية",
    email: "info@damascusfilmsalon.com",
    phone: "+963 11 XXXXXXX",
    socials: {
      instagram: "@DamascusFilmSalon",
      facebook: "/DamascusFilmSalon"
    }
  }

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-midnight to-black overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-projector-orange/5 blur-[120px] rounded-full pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-projector-warm/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Pre-footer Call to Action Card */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="relative bg-gradient-to-br from-charcoal to-midnight/90 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-projector-orange/10 blur-[80px] rounded-full" />
          
          <div className="relative z-10 grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div>
              <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider uppercase">
                بوابتك للسينما البديلة
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-cairo leading-tight mt-3 mb-6">
                السينما كما يجب <span className="text-transparent bg-clip-text bg-gradient-to-l from-projector-orange to-projector-warm">أن تُشاهد</span>
              </h2>
              <p className="text-gray-400 font-tajawal text-base md:text-lg leading-relaxed max-w-2xl">
                انضم إلى ملتقى عشاق الفن السابع في دمشق. اختبر عروضاً غير تجارية تفتح نوافذ للفكر والحوار السينمائي الممتع.
              </p>
            </div>
            
            <div className="flex lg:justify-end">
              <Link
                to="/booking"
                className="group flex items-center gap-3 bg-gradient-to-l from-projector-orange to-projector-warm hover:from-projector-warm hover:to-projector-orange text-white px-8 py-4.5 rounded-2xl font-cairo font-bold text-base transition-all duration-300 shadow-lg hover:shadow-projector-orange/20 hover:-translate-y-1"
              >
                <Ticket className="w-5 h-5" />
                <span>احجز تذكرتك للفعالية القادمة</span>
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/5">
        
        {/* Brand section */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-3xl font-black font-cairo text-transparent bg-clip-text bg-gradient-to-l from-projector-orange to-projector-warm leading-tight">
            Damascus<br />Film Salon
          </h2>
          <p className="text-gray-400 font-tajawal text-sm leading-relaxed max-w-sm">
            مساحة ثقافية مستقلة وملتقى فكري يجمع صناع الأفلام، النقاد، وعشاق الفن السابع في تجربة بصرية مغايرة للمألوف في قلب دمشق.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`https://instagram.com/${contactData.socials.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-projector-orange/40 hover:bg-projector-orange/10 text-gray-400 hover:text-projector-orange transition duration-300 flex items-center justify-center"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`https://facebook.com/${contactData.socials.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-projector-orange/40 hover:bg-projector-orange/10 text-gray-400 hover:text-projector-orange transition duration-300 flex items-center justify-center"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Sitemap links */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-bold font-cairo text-white">الصفحات</h3>
          <ul className="space-y-3.5">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-projector-orange font-tajawal text-sm transition duration-200 block hover:-translate-x-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="text-lg font-bold font-cairo text-white">تواصل معنا</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4.5 h-4.5 text-projector-orange shrink-0 mt-1" />
              <span className="text-gray-400 font-tajawal text-sm leading-relaxed">{contactData.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4.5 h-4.5 text-projector-orange shrink-0" />
              <a href={`mailto:${contactData.email}`} className="text-gray-400 hover:text-projector-orange font-tajawal text-sm transition duration-200">
                {contactData.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4.5 h-4.5 text-projector-orange shrink-0" />
              <a href={`tel:${contactData.phone}`} className="text-gray-400 hover:text-projector-orange font-tajawal text-sm transition duration-200">
                {contactData.phone}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="lg:col-span-3 space-y-6">
          <h3 className="text-lg font-bold font-cairo text-white">النشرة البريدية</h3>
          <p className="text-gray-400 font-tajawal text-sm leading-relaxed">
            اشترك لتلقي تفاصيل عروضنا الأسبوعية وورش العمل والندوات القادمة مباشرة.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none font-tajawal text-sm text-white placeholder-gray-500 focus:border-projector-orange/40 transition duration-300 w-full"
            />
            <button className="w-full bg-projector-orange hover:bg-projector-orange/90 text-white font-cairo font-bold text-sm py-3 rounded-xl transition duration-300 shadow-md">
              اشترك الآن
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Footer Details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 font-tajawal text-xs">
          © {new Date().getFullYear()} صالون دمشق السينمائي. جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-6 text-xs text-gray-500 font-tajawal">
          <a href="#" className="hover:text-projector-orange transition">سياسة الخصوصية</a>
          <a href="#" className="hover:text-projector-orange transition">الشروط والأحكام</a>
        </div>
      </div>

    </footer>
  )
}