import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar as CalendarIcon, Clock, MapPin, Ticket, ArrowLeft } from 'lucide-react'

export default function Events() {
  const [filter, setFilter] = useState('الكل')

  const events = [
    {
      id: 1,
      title: 'ورشة كتابة السيناريو السينمائي المستقل',
      type: 'ورشة تدريبية',
      date: '12 يونيو 2026',
      time: '06:00 مساءً',
      location: 'غاليري زوايا - دمشق',
      desc: 'ورشة مكثفة لتعليم أساسيات بناء الحبكة، تطوير الشخصيات، وصياغة الحوار بأسلوب سينمائي احترافي موجه للسينما المستقلة.',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'عرض فيلم وثائقي سوري مستقل ونقاش',
      type: 'عرض سينمائي',
      date: '18 يونيو 2026',
      time: '08:30 مساءً',
      location: 'بيت ثقافي تراثي - دمشق القديمة',
      desc: 'عرض سينمائي خاص لفيلم وثائقي سوري مستقل حائز على جوائز عالمية، يليه نقاش حميمي ومفتوح مع صناع العمل والجمهور.',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'جلسة نقدية: تفكيك الذاكرة السينمائية',
      type: 'جلسات نقد',
      date: '24 يونيو 2026',
      time: '07:00 مساءً',
      location: 'صالون دمشق السينمائي - القاعة الرئيسية',
      desc: 'جلسة نقاش وحوار نقدي حول السينما العربية الكلاسيكية وكيفية تأثيرها وصياغتها لذاكرة الهوية المجتمعية والمدن.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  const categories = ['الكل', 'عرض سينمائي', 'ورشة تدريبية', 'جلسات نقد']

  const filteredEvents = filter === 'الكل'
    ? events
    : events.filter(e => e.type === filter)

  return (
    <div className="overflow-hidden bg-midnight min-h-screen pt-28 pb-20">
      
      {/* Glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-projector-orange/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />

      {/* Header section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-right space-y-6 mb-16">
        <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider uppercase">
          أجندة الصالون
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-cairo leading-tight text-white">
          الفعاليات والورشات السينمائية
        </h1>
        <p className="text-gray-400 font-tajawal text-base md:text-lg leading-relaxed max-w-3xl">
          اكتشف عروضنا الأسبوعية وورش العمل التدريبية والندوات النقدية. احجز تذكرتك مقدماً لضمان مقعدك في صالة العرض.
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

      {/* Staggered Event Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        <AnimatePresence mode="wait">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 55 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-charcoal/40 border border-white/5 rounded-3xl overflow-hidden shadow-xl hover:border-projector-orange/20 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-0 items-center">
                
                {/* Visual Image container (5 columns) */}
                <div className="lg:col-span-5 h-[320px] lg:h-[450px] relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-midnight via-transparent to-black/20" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 right-4 bg-projector-orange text-white text-xs font-bold font-tajawal px-4 py-1.5 rounded-full">
                    {event.type}
                  </span>
                </div>

                {/* Content description container (7 columns) */}
                <div className="lg:col-span-7 p-8 md:p-12 text-right space-y-6">
                  <h2 className="text-2xl md:text-4xl font-black font-cairo text-white leading-tight">
                    {event.title}
                  </h2>
                  <p className="text-gray-400 font-tajawal text-sm md:text-base leading-relaxed">
                    {event.desc}
                  </p>

                  {/* Date, Time, Location metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-gray-300 font-tajawal text-xs md:text-sm">
                    <div className="flex items-center gap-2.5 bg-white/5 border border-white/5 p-3.5 rounded-xl justify-end">
                      <span>{event.date}</span>
                      <CalendarIcon className="w-4 h-4 text-projector-orange" />
                    </div>
                    <div className="flex items-center gap-2.5 bg-white/5 border border-white/5 p-3.5 rounded-xl justify-end">
                      <span>{event.time}</span>
                      <Clock className="w-4 h-4 text-projector-orange" />
                    </div>
                    <div className="flex items-center gap-2.5 bg-white/5 border border-white/5 p-3.5 rounded-xl justify-end">
                      <span className="text-xs truncate">{event.location}</span>
                      <MapPin className="w-4 h-4 text-projector-orange" />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 flex flex-wrap gap-4 justify-start lg:justify-end">
                    <Link
                      to="/booking"
                      className="group/btn bg-gradient-to-l from-projector-orange to-projector-warm hover:from-projector-warm hover:to-projector-orange text-white px-7 py-3.5 rounded-xl font-cairo font-bold text-sm transition-all duration-300 shadow-md flex items-center gap-2"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>احجز مقعدك</span>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  )
}