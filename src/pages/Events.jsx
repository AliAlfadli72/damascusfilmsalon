import { motion } from 'framer-motion'

import {
  Calendar,
  Clock3,
  MapPin,
  ArrowLeft,
  Ticket,
} from 'lucide-react'

export default function Events() {

  const events = [
    {
      title: 'ورشة كتابة السيناريو السينمائي',
      type: 'ورشة تدريبية',
      date: '12 يونيو 2026',
      time: '06:00 مساءً',
      location: 'غاليري زوايا - دمشق',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
    },

    {
      title: 'عرض فيلم وثائقي مستقل',
      type: 'عرض سينمائي',
      date: '18 يونيو 2026',
      time: '08:30 مساءً',
      location: 'بيت ثقافي - دمشق',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    },

    {
      title: 'جلسة تحليل ونقد بصري',
      type: 'نقاش مفتوح',
      date: '24 يونيو 2026',
      time: '07:00 مساءً',
      location: 'صالون دمشق السينمائي',
      image:
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  return (

    <div className="overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}

        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-primary/50 to-primary" />

        {/* GLOW */}

        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/10 blur-3xl rounded-full" />

        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >

          <span className="text-gold font-black text-lg">
            الفعاليات والورش
          </span>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mt-6">

            حيث تتحول
            <span className="block text-gold">
              السينما إلى تجربة
            </span>

          </h1>

          <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-300 leading-[2.2]">

            عروض سينمائية، ورش أكاديمية، ونقاشات بصرية
            تخلق مساحة جديدة للحوار الفني والثقافي.

          </p>

        </motion.div>

      </section>

      {/* FILTERS */}

      <section className="py-10 border-b border-white/10 bg-black/20 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {[
              'الكل',
              'عروض سينمائية',
              'ورش تدريبية',
              'جلسات نقد',
              'فعاليات خاصة',
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

      {/* EVENTS */}

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="space-y-16">

            {events.map((event, index) => (

              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >

                <div className="grid lg:grid-cols-2 gap-0 bg-charcoal/80 border border-white/10 rounded-[3rem] overflow-hidden hover:border-gold/30 transition-all duration-500">

                  {/* IMAGE */}

                  <div className="relative h-[500px] overflow-hidden">

                    <img
                      src={event.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute top-6 right-6 px-5 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-sm font-black">

                      {event.type}

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-12 flex flex-col justify-center">

                    <h2 className="text-5xl font-black leading-tight mb-8">

                      {event.title}

                    </h2>

                    <p className="text-gray-400 text-lg leading-[2] mb-10">

                      فعالية ثقافية معاصرة تهدف لخلق مساحة حقيقية
                      للنقاش البصري والتفاعل بين الجمهور وصنّاع الأفلام.

                    </p>

                    {/* META */}

                    <div className="space-y-5 mb-12">

                      <div className="flex items-center gap-4 text-gray-300">

                        <Calendar className="w-5 h-5 text-gold" />

                        <span>{event.date}</span>

                      </div>

                      <div className="flex items-center gap-4 text-gray-300">

                        <Clock3 className="w-5 h-5 text-gold" />

                        <span>{event.time}</span>

                      </div>

                      <div className="flex items-center gap-4 text-gray-300">

                        <MapPin className="w-5 h-5 text-gold" />

                        <span>{event.location}</span>

                      </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-5">

                      <button className="group/btn bg-gold hover:bg-orange-500 transition-all duration-300 px-8 py-4 rounded-full font-black text-lg flex items-center gap-3">

                        احجز مقعدك

                        <Ticket className="w-5 h-5" />

                      </button>

                      <button className="border border-white/10 hover:border-gold/40 transition-all duration-300 px-8 py-4 rounded-full font-bold flex items-center gap-3">

                        اقرأ التفاصيل

                        <ArrowLeft className="w-5 h-5" />

                      </button>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="relative py-40 overflow-hidden border-t border-white/10">

        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-orange-500/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-10">

            كل عرض هو
            <span className="block text-gold">
              بداية حوار جديد
            </span>

          </h2>

          <p className="text-gray-300 text-2xl leading-[2] max-w-3xl mx-auto mb-14">

            نخلق مساحة مستقلة تحتفي بالسينما والتجريب
            والوعي الثقافي الحديث.

          </p>

          <button className="bg-gold hover:bg-orange-500 transition-all duration-300 px-12 py-5 rounded-full text-xl font-black shadow-2xl shadow-gold/20 hover:scale-105">

            اكتشف جميع الفعاليات

          </button>

        </div>

      </section>

    </div>

  )
}