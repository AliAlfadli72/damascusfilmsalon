import { motion } from 'framer-motion'
import { Mail, Instagram, MapPin, Phone, ArrowLeft, Facebook } from 'lucide-react'
import contactMap from '../assets/contact_map.png'

export default function Contact() {
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
    <div className="overflow-hidden bg-midnight min-h-screen pt-28 pb-20">
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-projector-orange/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />

      {/* Header section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-right space-y-6 mb-16">
        <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider uppercase">
          قنوات التواصل
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-cairo leading-tight text-white">
          تواصل معنا ونمي الحوار
        </h1>
        <p className="text-gray-400 font-tajawal text-base md:text-lg leading-relaxed max-w-3xl">
          سواء كنت صانع أفلام، ناقداً، أو عاشقاً للسينما البديلة، يسعدنا سماع صوتك ومقترحاتك لبناء مساحة تفاعلية مستدامة.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetrical 2-Column Split: Form (Left) & Info Cards + Map (Right) */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Premium Contact Form (7 columns) */}
          <div className="lg:col-span-7 bg-charcoal/30 border border-white/5 p-8 md:p-12 rounded-3xl text-right space-y-8 order-2 lg:order-1">
            <h2 className="text-2xl font-bold font-cairo text-white">أرسل رسالتك للصالون</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 font-tajawal text-xs md:text-sm">الاسم الكامل</label>
                  <input
                    type="text"
                    className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full text-white"
                    placeholder="الاسم الثلاثي"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 font-tajawal text-xs md:text-sm">رقم الهاتف</label>
                  <input
                    type="tel"
                    className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full text-white"
                    placeholder="+963 9xx xxx xxx"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 font-tajawal text-xs md:text-sm">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full text-white"
                  placeholder="name@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 font-tajawal text-xs md:text-sm">موضوع الرسالة</label>
                <input
                  type="text"
                  className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full text-white"
                  placeholder="مثال: شراكة ثقافية، ورشة عمل، استفسار"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 font-tajawal text-xs md:text-sm">محتوى الرسالة</label>
                <textarea
                  rows="6"
                  className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full text-white resize-none"
                  placeholder="اكتب تفاصيل مقترحك أو استفسارك هنا..."
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button className="group flex items-center gap-2 bg-gradient-to-l from-projector-orange to-projector-warm hover:from-projector-warm hover:to-projector-orange text-white px-8 py-4 rounded-xl font-cairo font-bold text-sm transition-all duration-300 shadow-md hover:shadow-projector-orange/20 hover:-translate-y-0.5">
                  <span>إرسال الرسالة</span>
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Info Cards & Local Damascus Map (5 columns) */}
          <div className="lg:col-span-5 space-y-6 text-right order-1 lg:order-2">
            
            {/* Info Cards */}
            <div className="bg-charcoal/30 border border-white/5 p-6 rounded-2xl space-y-6">
              
              {/* Location card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-projector-orange/10 text-projector-orange flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-cairo text-white text-sm">موقعنا في دمشق</h4>
                  <p className="text-xs text-gray-400 font-tajawal mt-1">{contactData.location}</p>
                </div>
              </div>

              {/* Email card */}
              <div className="flex items-start gap-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-xl bg-projector-orange/10 text-projector-orange flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-cairo text-white text-sm">البريد الإلكتروني المباشر</h4>
                  <a href={`mailto:${contactData.email}`} className="text-xs text-gray-400 hover:text-projector-orange font-tajawal mt-1 block transition">
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-xl bg-projector-orange/10 text-projector-orange flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-cairo text-white text-sm">رقم الهاتف</h4>
                  <a href={`tel:${contactData.phone}`} className="text-xs text-gray-400 hover:text-projector-orange font-tajawal mt-1 block transition">
                    {contactData.phone}
                  </a>
                </div>
              </div>

              {/* Social Channels card */}
              <div className="flex items-start gap-4 border-t border-white/5 pt-4">
                <div>
                  <h4 className="font-bold font-cairo text-white text-sm">قنوات التواصل الاجتماعي</h4>
                  <div className="flex gap-6 mt-3">
                    <a
                      href={`https://instagram.com/${contactData.socials.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-projector-orange font-tajawal flex items-center gap-1.5 transition"
                    >
                      <span>إنستغرام</span>
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://facebook.com/${contactData.socials.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-projector-orange font-tajawal flex items-center gap-1.5 transition"
                    >
                      <span>فيسبوك</span>
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Artistic Map Mockup (Using the Damascus Lantern alleyway image) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={contactMap}
                alt="Damascus historic alleyway showing location area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-charcoal/90 backdrop-blur-md border border-projector-orange/40 px-5 py-3 rounded-2xl text-center shadow-2xl projector-glow">
                  <p className="font-bold font-cairo text-xs text-white">المنطقة الثقافية التراثية</p>
                  <p className="text-[10px] text-projector-orange font-tajawal mt-1">صالون دمشق السينمائي</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}