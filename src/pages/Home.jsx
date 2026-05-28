import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play, Film, Users, Clapperboard, Calendar, Clock, MapPin } from 'lucide-react'
import heroCinematic from '../assets/hero_cinematic.png'

export default function Home() {
  const features = [
    {
      title: 'عروض مستقلة',
      icon: Film,
      desc: 'سلسلة عروض أسبوعية مختارة لأفلام وثائقية وقصيرة وتجريبية خارجة عن النمط التجاري السائد.',
    },
    {
      title: 'نقاشات نقدية',
      icon: Users,
      desc: 'حوارات مفتوحة تلي كل عرض سينمائي تجمع الجمهور بصناع السينما والنقاد لتعميق الوعي البصري.',
    },
    {
      title: 'ورشات عمل',
      icon: Clapperboard,
      desc: 'برامج عملية متخصصة في الإخراج، كتابة السيناريو، والتصوير لدعم الجيل الجديد من السينمائيين.',
    },
  ]

  const featuredEvent = {
    title: 'أمسية السينما البديلة وسينما الواقع',
    type: 'عرض سينمائي ونقاش مفتوح',
    date: '18 يونيو 2026',
    time: '08:30 مساءً',
    location: 'دمشق القديمة - بيت ثقافي تراثي',
    desc: 'عرض خاص لفيلم وثائقي سوري مستقل حائز على جوائز عالمية، يليه نقاش حميمي حول تحديات الإنتاج المستقل مع المخرج والمنتج.',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
  }

  const archiveHighlights = [
    {
      title: 'ذاكرة الضوء',
      category: 'وثائقي مستقل',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'المدينة الصامتة',
      category: 'دراما بصرية',
      image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'ما بعد الظل',
      category: 'سينما تجريبية',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  return (
    <div className="overflow-hidden bg-midnight">
      
      {/* 1. HERO - Asymmetric 60/40 Split Screen */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        
        {/* Glows and overlays */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-projector-orange/10 blur-[130px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-10 right-20 w-[450px] h-[450px] bg-projector-warm/5 blur-[150px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          
          {/* RIGHT SIDE: Text content (60%) */}
          <div className="lg:col-span-7 space-y-8 text-right order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-projector-orange/30 bg-projector-orange/10 text-projector-orange"
            >
              <Play className="w-3.5 h-3.5 fill-projector-orange" />
              <span className="text-xs md:text-sm font-tajawal font-bold tracking-wide">
                السينما كما يجب أن تُشاهد
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black font-cairo leading-tight text-white"
            >
              مساحة مستقلة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-projector-orange to-projector-warm">
                للشغف السينمائي
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 font-tajawal text-base md:text-xl leading-[2] max-w-2xl"
            >
              في قلب دمشق، نجمع صناع السينما، النقاد، والمشاهدين لنخلق معاً حواراً فكرياً وبصرياً فريداً من نوعه. نكشف النقاب عن عراقة التراث ونعرض الفن في أبهى تجلياته.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/events"
                className="group bg-gradient-to-l from-projector-orange to-projector-warm hover:from-projector-warm hover:to-projector-orange text-white px-8 py-4 rounded-xl font-cairo font-bold text-base transition-all duration-300 shadow-lg hover:shadow-projector-orange/20 hover:-translate-y-0.5"
              >
                <span>اكتشف عروضنا</span>
              </Link>
              <Link
                to="/booking"
                className="border border-white/10 hover:border-projector-orange/30 bg-white/5 backdrop-blur-md px-8 py-4 rounded-xl font-tajawal font-bold text-base text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                احجز مقعدك
              </Link>
            </motion.div>
          </div>

          {/* LEFT SIDE: Cinematic image and ambient frame (40%) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 lg:mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] md:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/5"
            >
              {/* Image asset with overlay */}
              <img
                src={heroCinematic}
                alt="Damascus Film Salon Theater"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-black/30" />
              
              {/* Decorative cinematic frame details */}
              <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] font-mono tracking-widest text-white/40">
                <span>REC ●</span>
                <span>00:26:05</span>
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/40">
                <span>DFS PROJECTOR ON</span>
              </div>
            </motion.div>
            
            {/* Absolute offset decorative card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-charcoal/90 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl max-w-xs shadow-2xl hidden sm:block"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-xl bg-projector-orange/10 flex items-center justify-center text-projector-orange shrink-0">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-cairo text-white">العرض القادم</h4>
                  <p className="text-xs text-gray-400 font-tajawal mt-1">تأثير السينما السورية الكلاسيكية</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES/FEATURES - Interactive Cards */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-right max-w-3xl mb-16 space-y-4">
            <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider uppercase">
              ماذا نقدم في الصالون؟
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-cairo leading-tight text-white">
              طقوس سينمائية تعيد إحياء المشاهدة
            </h2>
            <p className="text-gray-400 font-tajawal text-base md:text-lg leading-relaxed">
              لا نكتفي بعرض الفيلم، بل ننسج حوله تجربة ثقافية فنية متكاملة تهدف إلى تعزيز الثقافة الفنية وتطوير المواهب.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group bg-charcoal/50 backdrop-blur-sm border border-white/5 hover:border-projector-orange/30 p-8 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(224,107,0,0.05)]"
                >
                  <div className="w-14 h-14 rounded-xl bg-projector-orange/10 group-hover:bg-projector-orange/20 text-projector-orange flex items-center justify-center mb-6 transition duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-cairo text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-tajawal text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED EVENT - Layered Overlay Card */}
      <section className="py-24 bg-gradient-to-b from-midnight via-charcoal/20 to-midnight relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Image (6 columns) */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-gradient-to-l from-projector-orange/20 to-projector-warm/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-projector-orange text-white text-xs font-bold font-tajawal px-4 py-1.5 rounded-full">
                  {featuredEvent.type}
                </span>
              </div>
            </div>

            {/* Text Overlay (6 columns) */}
            <div className="lg:col-span-6 space-y-6 text-right lg:pr-6">
              <span className="text-projector-warm font-cairo font-bold text-sm tracking-wider">
                الفعالية القادمة والحدث الأبرز
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-cairo text-white leading-tight">
                {featuredEvent.title}
              </h2>
              <p className="text-gray-300 font-tajawal text-sm md:text-base leading-relaxed">
                {featuredEvent.desc}
              </p>
              
              {/* Event Metadata cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-gray-400 font-tajawal text-sm">
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl justify-end">
                  <span>{featuredEvent.date}</span>
                  <Calendar className="w-4 h-4 text-projector-orange" />
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl justify-end">
                  <span>{featuredEvent.time}</span>
                  <Clock className="w-4 h-4 text-projector-orange" />
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-4 rounded-xl justify-end">
                  <span className="text-xs">{featuredEvent.location}</span>
                  <MapPin className="w-4 h-4 text-projector-orange" />
                </div>
              </div>

              <div className="pt-6 flex flex-wrap gap-4 justify-start lg:justify-end">
                <Link
                  to="/booking"
                  className="bg-projector-orange hover:bg-projector-orange/90 text-white font-cairo font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-md"
                >
                  احجز مقعدك الآن
                </Link>
                <Link
                  to="/events"
                  className="border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-8 py-3.5 rounded-xl transition duration-300"
                >
                  تفاصيل الفعالية
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. VISUAL ARCHIVE PREVIEW - Staggered Grid */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-right">
            <div>
              <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider">
                من عروضنا السابقة
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-cairo text-white mt-3">
                أرشيف الأفلام والذاكرة البصرية
              </h2>
            </div>
            <Link
              to="/archive"
              className="text-projector-orange hover:text-projector-warm font-tajawal font-bold text-sm flex items-center gap-2 transition duration-200"
            >
              <span>تصفح الأرشيف الكامل</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* Staggered dynamic grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {archiveHighlights.map((film, index) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 ${
                  index === 1 ? 'md:translate-y-8' : ''
                }`}
              >
                <div className="aspect-[3/4] w-full overflow-hidden relative">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold font-tajawal px-3.5 py-1.5 rounded-full">
                    {film.category}
                  </span>

                  {/* Details Overlay */}
                  <div className="absolute bottom-0 p-6 w-full text-right space-y-2">
                    <h3 className="text-xl font-bold font-cairo text-white">
                      {film.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-tajawal">
                      تاريخ العرض: نوفمبر 2025
                    </p>
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        to="/archive"
                        className="text-projector-orange hover:text-projector-warm font-tajawal font-bold text-xs flex items-center justify-end gap-1.5"
                      >
                        <span>عرض التفاصيل</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STATS - Physical glow strip */}
      <section className="py-20 border-y border-white/5 bg-charcoal/30 backdrop-blur-md relative mt-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ['+120', 'عرض سينمائي'],
              ['+40', 'ورشة تدريبية'],
              ['+3000', 'حضور سنوي'],
              ['+25', 'مخرج وفنان مستقل'],
            ].map((stat) => (
              <div key={stat[1]} className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-black font-cairo text-projector-orange">
                  {stat[0]}
                </h3>
                <p className="text-gray-400 font-tajawal text-sm md:text-base">
                  {stat[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}