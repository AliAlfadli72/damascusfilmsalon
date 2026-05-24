import { motion } from 'framer-motion'
import {
  Eye,
  Target,
  Film,
  Users,
} from 'lucide-react'

export default function About() {

  const values = [
    {
      icon: Eye,
      title: 'الرؤية',
      desc: 'أن يصبح صالون دمشق السينمائي المنصة الثقافية السينمائية الأهم في سوريا.',
    },
    {
      icon: Target,
      title: 'الرسالة',
      desc: 'خلق مساحة فنية مستقلة للحوار والتجربة السينمائية المعاصرة.',
    },
    {
      icon: Users,
      title: 'المجتمع',
      desc: 'بناء جيل جديد من المهتمين بالفن السابع والنقد البصري.',
    },
  ]

  return (

    <div className="overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        {/* BG */}

        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/75" />

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
            من نحن
          </span>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mt-6">

            مساحة مستقلة
            <span className="block text-gold mt-3">
              للسينما والحوار
            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-300 leading-[2.2]">

            صالون دمشق السينمائي منصة ثقافية تسعى لإحياء السينما
            البديلة وبناء مجتمع بصري معاصر داخل قلب دمشق.

          </p>

        </motion.div>

      </section>

      {/* STORY */}

      <section className="py-32">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* TEXT */}

            <div>

              <span className="text-gold font-black">
                قصة الصالون
              </span>

              <h2 className="text-5xl font-black leading-tight mt-6 mb-10">

                حيث تبدأ الحكاية
                <span className="block text-gold">
                  بعد نهاية العرض
                </span>

              </h2>

              <div className="space-y-8 text-lg text-gray-300 leading-[2.2]">

                <p>
                  نؤمن أن السينما ليست مجرد شاشة عرض، بل تجربة
                  فكرية وإنسانية قادرة على إعادة تشكيل الوعي البصري
                  والثقافي.
                </p>

                <p>
                  نسعى لخلق مساحة تجمع بين الجمهور وصنّاع الأفلام
                  والنقاد ضمن بيئة فنية مستقلة تحتفي بالحوار والتجريب.
                </p>

                <p>
                  من خلال الورش والعروض واللقاءات، نعمل على دعم
                  المواهب المحلية وصناعة حراك سينمائي معاصر.
                </p>

              </div>

            </div>

            {/* IMAGE */}

            <div className="relative">

              <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-[3rem]" />

              <img
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2070&auto=format&fit=crop"
                className="relative rounded-[3rem] h-[700px] w-full object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="py-32 bg-black/20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="text-gold font-black">
              رؤيتنا
            </span>

            <h2 className="text-5xl font-black mt-4">
              فلسفة دمشق فيلم صالون
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {values.map((item, index) => {

              const Icon = item.icon

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-charcoal/80 border border-white/10 rounded-[2rem] p-10 hover:border-gold/40 transition-all duration-500"
                >

                  <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition">

                    <Icon className="w-10 h-10 text-gold" />

                  </div>

                  <h3 className="text-3xl font-black mb-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-9">
                    {item.desc}
                  </p>

                </motion.div>

              )
            })}

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-28">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              ['+120', 'عرض سينمائي'],
              ['+40', 'ورشة تدريبية'],
              ['+3000', 'زائر سنوي'],
              ['+25', 'فنان ومخرج'],
            ].map((item) => (

              <div key={item[1]}>

                <h3 className="text-6xl font-black text-gold mb-4">
                  {item[0]}
                </h3>

                <p className="text-gray-400 text-lg">
                  {item[1]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL SECTION */}

      <section className="relative py-40 overflow-hidden border-t border-white/10">

        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange-500/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <Film className="w-20 h-20 text-gold mx-auto mb-10" />

          <h2 className="text-6xl font-black leading-tight mb-10">

            السينما ليست
            <span className="block text-gold">
              مجرد مشاهدة
            </span>

          </h2>

          <p className="text-gray-300 text-2xl leading-[2] max-w-3xl mx-auto">

            بل مساحة للحوار والتأمل وصناعة الوعي الثقافي والبصري.

          </p>

        </div>

      </section>

    </div>

  )
}