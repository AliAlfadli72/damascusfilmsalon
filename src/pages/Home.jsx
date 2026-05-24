import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Play,
  Film,
  Users,
  Clapperboard,
} from 'lucide-react'

export default function Home() {

  const features = [
    {
      title: 'عروض سينمائية أسبوعية',
      icon: Film,
      desc: 'تجربة سينمائية تفاعلية تجمع بين الفن والحوار النقدي.',
    },
    {
      title: 'ورش تدريب أكاديمية',
      icon: Clapperboard,
      desc: 'برامج تعليمية متخصصة لتطوير المواهب السينمائية.',
    },
    {
      title: 'ملتقى صنّاع الأفلام',
      icon: Users,
      desc: 'مساحة للتواصل وتبادل الخبرات بين الفنانين والجمهور.',
    },
  ]

  return (
    <div className="overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-primary/60 to-primary" />

        {/* GLOW */}

        <div className="absolute top-40 left-20 w-72 h-72 bg-gold/20 blur-3xl rounded-full" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full" />

        {/* CONTENT */}

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-xl mb-8">

              <Play className="w-4 h-4 text-gold" />

              <span className="text-sm text-gold font-bold">
                منصة السينما المستقلة في دمشق
              </span>

            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">

              السينما كما يجب
              <span className="block text-gold mt-2">
                أن تُشاهد
              </span>

            </h1>

            <p className="max-w-3xl mx-auto mt-10 text-xl md:text-2xl text-gray-300 leading-[2.2]">

              مساحة ثقافية مستقلة تجمع صنّاع الأفلام والنقاد والجمهور
              في تجربة بصرية وفكرية مختلفة داخل قلب دمشق.

            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

              <button className="group bg-gold hover:bg-orange-500 transition-all duration-300 px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 shadow-2xl shadow-gold/20">

                اكتشف الفعاليات

                <ArrowLeft className="group-hover:-translate-x-1 transition" />

              </button>

              <button className="border border-white/20 hover:border-gold/40 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-full font-bold text-lg transition-all duration-300">

                شاهد العرض التعريفي

              </button>

            </div>

          </motion.div>

        </div>

      </section>
      {/* FEATURED EVENT */}

<section className="py-32">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* IMAGE */}

      <div className="relative">

        <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-[3rem]" />

        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop"
          className="relative rounded-[3rem] h-[600px] w-full object-cover"
        />

      </div>

      {/* CONTENT */}

      <div>

        <span className="text-gold font-black text-lg">
          الفعالية القادمة
        </span>

        <h2 className="text-6xl font-black leading-tight mt-6 mb-8">

          أمسية سينمائية
          <span className="block text-gold">
            في قلب دمشق
          </span>

        </h2>

        <p className="text-gray-400 text-xl leading-[2.2] mb-10">

          عرض خاص لفيلم مستقل يتبعه نقاش مفتوح مع النقاد وصنّاع
          الأفلام ضمن تجربة ثقافية فريدة.

        </p>

        <div className="flex flex-wrap gap-5">

          <button className="bg-gold px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition">
            احجز مقعدك
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full font-bold hover:border-gold transition">
            اقرأ التفاصيل
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
{/* FILM GALLERY */}

<section className="py-32 bg-black/20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-end justify-between mb-16">

      <div>

        <span className="text-gold font-black">
          أرشيف بصري
        </span>

        <h2 className="text-5xl font-black mt-4">
          لقطات من عالم السينما
        </h2>

      </div>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop',
      ].map((img, index) => (

        <div
          key={index}
          className="group relative overflow-hidden rounded-[2rem] h-[500px]"
        >

          <img
            src={img}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-8">

            <h3 className="text-3xl font-black mb-3">
              تجربة سينمائية
            </h3>

            <p className="text-gray-300">
              السينما كمساحة للحوار والثقافة.
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
{/* CTA */}

<section className="relative py-40 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-orange-500/10 blur-3xl" />

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <span className="text-gold font-black text-lg">
      انضم إلى المجتمع السينمائي
    </span>

    <h2 className="text-6xl md:text-7xl font-black leading-tight mt-6 mb-10">

      حيث تبدأ الحكاية
      <span className="block text-gold">
        بعد نهاية العرض
      </span>

    </h2>

    <p className="text-gray-300 text-2xl leading-[2] max-w-3xl mx-auto mb-14">

      نخلق مساحة حقيقية للحوار الفني والنقدي تجمع بين الجمهور
      وصنّاع الأفلام في تجربة ثقافية استثنائية.

    </p>

    <button className="bg-gold hover:bg-orange-500 transition-all duration-300 px-12 py-5 rounded-full text-xl font-black shadow-2xl shadow-gold/30 hover:scale-105">

      ابدأ رحلتك السينمائية

    </button>

  </div>

</section>

      {/* FEATURES */}

      <section className="relative py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">
              لماذا دمشق فيلم صالون؟
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-9">
              تجربة ثقافية حديثة تعيد بناء العلاقة بين السينما والجمهور.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((item, index) => {

              const Icon = item.icon

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-charcoal/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 hover:border-gold/40 hover:-translate-y-2 transition-all duration-500"
                >

                  <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition">

                    <Icon className="w-10 h-10 text-gold" />

                  </div>

                  <h3 className="text-3xl font-black mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-9 text-lg">
                    {item.desc}
                  </p>

                </motion.div>

              )
            })}

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-24 border-y border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              ['+120', 'عرض سينمائي'],
              ['+40', 'ورشة تدريبية'],
              ['+3000', 'حضور سنوي'],
              ['+25', 'مخرج وفنان'],
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

    </div>
  )
}