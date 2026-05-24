import { motion } from 'framer-motion'

import {
  Mail,
  Instagram,
  MapPin,
  Phone,
  ArrowLeft,
} from 'lucide-react'

export default function Contact() {

  return (

    <div className="overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">

        {/* BG */}

        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-primary" />

        {/* GLOW */}

        <div className="absolute top-20 left-20 w-96 h-96 bg-gold/10 blur-3xl rounded-full" />

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >

          <span className="text-gold font-black text-lg">
            تواصل معنا
          </span>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mt-6">

            لنبدأ
            <span className="block text-gold">
              حواراً جديداً
            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-300 leading-[2.2]">

            نحن دائماً منفتحون على التعاون، النقاشات،
            المبادرات الثقافية، والتجارب السينمائية الجديدة.

          </p>

        </motion.div>

      </section>

      {/* CONTACT SECTION */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* FORM */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-14"
            >

              <h2 className="text-4xl font-black mb-10">
                أرسل رسالتك
              </h2>

              <div className="space-y-6">

                <input
                  placeholder="الاسم الكامل"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/40 transition-all duration-300"
                />

                <input
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/40 transition-all duration-300"
                />

                <input
                  placeholder="عنوان الرسالة"
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/40 transition-all duration-300"
                />

                <textarea
                  rows="7"
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-5 outline-none resize-none focus:border-gold/40 transition-all duration-300"
                />

                <button className="group bg-gold hover:bg-orange-500 transition-all duration-300 px-10 py-5 rounded-full font-black text-lg flex items-center gap-3">

                  إرسال الرسالة

                  <ArrowLeft className="group-hover:-translate-x-1 transition" />

                </button>

              </div>

            </motion.div>

            {/* INFO */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              <div>

                <span className="text-gold font-black">
                  معلومات التواصل
                </span>

                <h2 className="text-5xl font-black leading-tight mt-6 mb-8">

                  نرحب بجميع
                  <span className="block text-gold">
                    الأفكار والمبادرات
                  </span>

                </h2>

                <p className="text-gray-400 text-xl leading-[2]">

                  سواء كنت صانع أفلام، ناقداً، طالباً،
                  أو مهتماً بالسينما المستقلة، نحن هنا لبناء
                  مساحة حقيقية للحوار والتجربة الفنية.

                </p>

              </div>

              {/* CONTACT ITEMS */}

              <div className="space-y-6">

                {[
                  {
                    icon: Mail,
                    title: 'البريد الإلكتروني',
                    value: 'info@damascusfilmsalon.com',
                  },

                  {
                    icon: Instagram,
                    title: 'إنستغرام',
                    value: '@damascus.film.salon',
                  },

                  {
                    icon: Phone,
                    title: 'رقم التواصل',
                    value: '+963 9XX XXX XXX',
                  },

                  {
                    icon: MapPin,
                    title: 'الموقع',
                    value: 'دمشق - سوريا',
                  },
                ].map((item) => {

                  const Icon = item.icon

                  return (

                    <div
                      key={item.title}
                      className="group bg-charcoal/60 border border-white/10 rounded-[2rem] p-8 hover:border-gold/40 transition-all duration-500"
                    >

                      <div className="flex items-start gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition">

                          <Icon className="w-8 h-8 text-gold" />

                        </div>

                        <div>

                          <h3 className="text-2xl font-black mb-3">
                            {item.title}
                          </h3>

                          <p className="text-gray-400 text-lg">
                            {item.value}
                          </p>

                        </div>

                      </div>

                    </div>

                  )
                })}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="relative py-40 border-t border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange-500/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">

            السينما تبدأ
            <span className="block text-gold">
              من الحوار
            </span>

          </h2>

          <p className="text-gray-300 text-2xl leading-[2] max-w-3xl mx-auto mb-14">

            وكل رسالة قد تكون بداية لفكرة،
            مشروع، أو تجربة بصرية جديدة.

          </p>

          <button className="bg-gold hover:bg-orange-500 transition-all duration-300 px-12 py-5 rounded-full text-xl font-black shadow-2xl shadow-gold/20 hover:scale-105">

            انضم إلى المجتمع السينمائي

          </button>

        </div>

      </section>

    </div>

  )
}