import { motion } from 'framer-motion'
import {
  Film,
  Star,
  Clock3,
  Globe,
} from 'lucide-react'

export default function Archive() {

  const films = [
    {
      title: 'ذاكرة الضوء',
      category: 'فيلم وثائقي',
      year: '2024',
      duration: '95 دقيقة',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'المدينة الصامتة',
      category: 'سينما مستقلة',
      year: '2023',
      duration: '110 دقيقة',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'ما بعد الظل',
      category: 'دراما بصرية',
      year: '2022',
      duration: '88 دقيقة',
      image:
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'دمشق الأخيرة',
      category: 'سينما عربية',
      year: '2025',
      duration: '102 دقيقة',
      image:
        'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2070&auto=format&fit=crop',
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
              "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-primary" />

        {/* GLOW */}

        <div className="absolute top-10 right-10 w-96 h-96 bg-gold/10 blur-3xl rounded-full" />

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >

          <span className="text-gold font-black text-lg">
            أرشيف بصري
          </span>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mt-6">

            أرشيف
            <span className="block text-gold">
              السينما المستقلة
            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-300 leading-[2.2]">

            مساحة لحفظ واستعراض الأفلام والتجارب البصرية
            التي صنعت ذاكرة دمشق السينمائية الحديثة.

          </p>

        </motion.div>

      </section>

      {/* FILTERS */}

      <section className="py-12 border-b border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {[
              'الكل',
              'سينما مستقلة',
              'وثائقي',
              'دراما',
              'تجريبي',
              'عربي',
            ].map((item) => (

              <button
                key={item}
                className="px-6 py-3 rounded-full border border-white/10 hover:border-gold/40 hover:bg-gold/10 transition-all duration-300"
              >
                {item}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* FILMS */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {films.map((film, index) => (

              <motion.div
                key={film.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden rounded-[2rem] h-[550px]">

                  <img
                    src={film.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-sm font-bold">

                    {film.category}

                  </div>

                  {/* CONTENT */}

                  <div className="absolute bottom-0 p-8 w-full">

                    <h2 className="text-3xl font-black mb-4 leading-tight">
                      {film.title}
                    </h2>

                    <div className="flex items-center gap-5 text-gray-300 text-sm mb-5">

                      <div className="flex items-center gap-2">
                        <Clock3 className="w-4 h-4" />
                        {film.duration}
                      </div>

                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        {film.year}
                      </div>

                    </div>

                    <button className="w-full bg-gold hover:bg-orange-500 transition-all duration-300 py-4 rounded-2xl font-black">

                      مشاهدة التفاصيل

                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* QUOTE */}

      <section className="relative py-40 border-t border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange-500/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <Film className="w-20 h-20 text-gold mx-auto mb-10" />

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-12">

            السينما تحفظ
            <span className="block text-gold">
              ذاكرة المدن
            </span>

          </h2>

          <p className="text-gray-300 text-2xl leading-[2] max-w-3xl mx-auto">

            وكل فيلم هو محاولة جديدة لفهم الإنسان والحياة
            والمدينة من زاوية مختلفة.

          </p>

        </div>

      </section>

    </div>

  )
}