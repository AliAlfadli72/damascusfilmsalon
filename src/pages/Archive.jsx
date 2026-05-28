import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Calendar, Clock, ArrowLeft } from 'lucide-react'

export default function Archive() {
  const [filter, setFilter] = useState('الكل')

  const films = [
    {
      id: 1,
      title: 'ذاكرة الضوء',
      category: 'وثائقي',
      year: '2024',
      duration: '95 دقيقة',
      desc: 'توثيق بصري حميمي للفنانين المستقلين في دمشق وحول كيفية بقاء الضوء والفن حياً.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'المدينة الصامتة',
      category: 'سينما مستقلة',
      year: '2023',
      duration: '110 دقيقة',
      desc: 'رحلة فلسفية صامتة داخل أحياء دمشق القديمة ترصد التفاصيل المعمارية والإنسانية غير المرئية.',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'ما بعد الظل',
      category: 'دراما',
      year: '2022',
      duration: '88 دقيقة',
      desc: 'فيلم تجريبي درامي يتناول انعكاسات الذاكرة الشخصية على جدران البيوت الدمشقية العتيقة.',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'دمشق الأخيرة',
      category: 'وثائقي',
      year: '2025',
      duration: '102 دقيقة',
      desc: 'تحقيق وثائقي يبحث في تحولات الصالات السينمائية القديمة بدمشق ومصير تراثها الثقافي.',
      image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  const categories = ['الكل', 'سينما مستقلة', 'وثائقي', 'دراما']

  const filteredFilms = filter === 'الكل'
    ? films
    : films.filter(f => f.category === filter)

  return (
    <div className="overflow-hidden bg-midnight min-h-screen pt-28 pb-20">
      
      {/* Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-projector-orange/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />

      {/* Header section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-right space-y-6 mb-16">
        <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider uppercase">
          الأرشيف الرقمي
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-cairo leading-tight text-white">
          أرشيف السينما المستقلة
        </h1>
        <p className="text-gray-400 font-tajawal text-base md:text-lg leading-relaxed max-w-3xl">
          مكتبة بصرية توثيقية تضم روائع السينما البديلة والأفلام المعروضة سابقاً في الصالون، مساهمة منا في حفظ الذاكرة السينمائية السورية.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-16 flex flex-wrap gap-3 justify-end">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full font-tajawal font-bold text-sm transition-all duration-300 ${
              filter === cat
                ? 'bg-projector-orange text-white shadow-[0_4px_15px_rgba(224,107,0,0.3)]'
                : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Movie poster aspect grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredFilms.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-charcoal/40 border border-white/5 rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:border-projector-orange/30"
              >
                
                {/* 2:3 Cinematic Poster ratio container */}
                <div className="aspect-[2/3] w-full overflow-hidden relative">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Category overlay label */}
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold font-tajawal px-3 py-1 rounded-full">
                    {film.category}
                  </span>

                  {/* Dynamic hovering details panel */}
                  <div className="absolute inset-0 bg-midnight/90 p-8 flex flex-col justify-between text-right opacity-0 group-hover:opacity-100 transition-all duration-300 border border-projector-orange/20">
                    
                    <div className="space-y-4">
                      <span className="text-projector-orange text-xs font-bold font-tajawal tracking-wide uppercase">
                        {film.category}
                      </span>
                      <h3 className="text-2xl font-black font-cairo text-white leading-tight">
                        {film.title}
                      </h3>
                      <p className="text-gray-400 font-tajawal text-xs md:text-sm leading-relaxed">
                        {film.desc}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Meta information */}
                      <div className="flex flex-col gap-2 text-xs text-gray-300 font-tajawal">
                        <div className="flex items-center gap-2 justify-end">
                          <span>{film.duration}</span>
                          <Clock className="w-3.5 h-3.5 text-projector-orange" />
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                          <span>{film.year}</span>
                          <Calendar className="w-3.5 h-3.5 text-projector-orange" />
                        </div>
                      </div>

                      <button className="w-full bg-projector-orange hover:bg-projector-orange/95 text-white font-cairo font-bold text-xs py-3 rounded-xl transition duration-300">
                        طلب عرض خاص
                      </button>
                    </div>

                  </div>

                  {/* Standard Static content representation */}
                  <div className="absolute bottom-0 p-6 w-full text-right pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-bold font-cairo text-white">
                      {film.title}
                    </h3>
                    <div className="flex gap-4 text-xs text-gray-400 font-tajawal mt-2 justify-end">
                      <span>{film.year}</span>
                      <span>{film.duration}</span>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}