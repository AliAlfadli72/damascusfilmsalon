import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Ticket, Armchair, ChevronLeft, ChevronRight, Check, Film, CreditCard } from 'lucide-react'

export default function Booking() {
  const [step, setStep] = useState(1)
  const [selectedFilm, setSelectedFilm] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const rows = ['A', 'B', 'C', 'D', 'E', 'F']
  const seatsPerRow = 10
  const reservedSeats = ['A4', 'A5', 'B7', 'B8', 'C3', 'D6', 'E2']
  const unavailableSeats = ['C9', 'C10']
  const ticketPrice = 15
  const total = selectedSeats.length * ticketPrice

  const films = [
    {
      id: 1,
      title: 'ذاكرة الضوء',
      category: 'عرض سينمائي وثائقي',
      duration: '95 دقيقة',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
      description: 'عرض خاص لفيلم مستقل يتبعه نقاش مفتوح مع صناع العمل.',
    },
    {
      id: 2,
      title: 'المدينة الصامتة',
      category: 'دراما سينمائية مستقلة',
      duration: '110 دقيقة',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop',
      description: 'رحلة فلسفية صامتة ترصد التفاصيل المعمارية لدمشق القديمة.',
    },
    {
      id: 3,
      title: 'ما بعد الظل',
      category: 'سينما تجريبية',
      duration: '88 دقيقة',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop',
      description: 'تجربة بصرية تتناول انعكاسات الذاكرة الشخصية على جدران البيوت.',
    },
  ]

  const dates = ['12 يونيو', '13 يونيو', '14 يونيو', '15 يونيو', '16 يونيو']
  const times = ['06:00 مساءً', '08:30 مساءً', '10:00 مساءً']

  const toggleSeat = (seatId) => {
    if (reservedSeats.includes(seatId) || unavailableSeats.includes(seatId)) return
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    )
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="overflow-hidden bg-midnight min-h-screen pt-28 pb-20">
      
      {/* Glows */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-projector-orange/10 blur-[130px] rounded-full pointer-events-none animate-pulse-glow" />

      {/* Header section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-right space-y-4 mb-12">
        <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider uppercase">
          شريان الصالون التفاعلي
        </span>
        <h1 className="text-4xl md:text-6xl font-black font-cairo text-white">
          حجز التذاكر والفعاليات
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Step Indicator Progress Bar */}
        <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {['الفيلم', 'التاريخ', 'المقاعد', 'البيانات', 'التأكيد'].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className={`text-xs md:text-sm font-tajawal font-bold ${step >= index + 1 ? 'text-white' : 'text-gray-500'}`}>
                {item}
              </span>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-cairo text-xs font-bold transition duration-300 ${
                step >= index + 1 ? 'bg-projector-orange text-white' : 'bg-white/5 border border-white/10 text-gray-500'
              }`}>
                {step > index + 1 ? <Check className="w-3.5 h-3.5" /> : index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Split: Form Wizard (Left) & Sticky Summary (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Wizard Form Content */}
          <div className="lg:col-span-8 bg-charcoal/30 border border-white/5 p-6 md:p-10 rounded-2xl">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Film Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl md:text-2xl font-bold font-cairo text-white text-right mb-6">اختر الفعالية أو الفيلم</h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {films.map((film) => (
                      <button
                        key={film.id}
                        onClick={() => {
                          setSelectedFilm(film)
                          nextStep()
                        }}
                        className={`group text-right border rounded-xl overflow-hidden bg-charcoal/40 transition duration-300 ${
                          selectedFilm?.id === film.id ? 'border-projector-orange' : 'border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                          <img src={film.image} alt={film.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-5 space-y-2">
                          <span className="text-projector-orange text-xs font-tajawal font-bold">{film.category}</span>
                          <h3 className="text-lg font-bold font-cairo text-white">{film.title}</h3>
                          <p className="text-gray-400 font-tajawal text-xs leading-relaxed">{film.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Date & Time Selection */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-8 text-right"
                >
                  <div>
                    <h2 className="text-xl font-bold font-cairo text-white mb-4">اختر تاريخ العرض</h2>
                    <div className="flex flex-wrap gap-3 justify-start sm:justify-end">
                      {dates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`px-6 py-3.5 rounded-xl font-tajawal font-bold text-sm transition-all duration-200 ${
                            selectedDate === date
                              ? 'bg-projector-orange text-white'
                              : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold font-cairo text-white mb-4">اختر وقت العرض</h2>
                    <div className="flex flex-wrap gap-3 justify-start sm:justify-end">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-6 py-3.5 rounded-xl font-tajawal font-bold text-sm transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-projector-orange text-white'
                              : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-end gap-3">
                    <button
                      onClick={nextStep}
                      disabled={!selectedDate || !selectedTime}
                      className="bg-projector-orange hover:bg-projector-orange/90 disabled:opacity-30 text-white px-8 py-3.5 rounded-xl font-cairo font-bold text-sm transition duration-200"
                    >
                      متابعة حجز المقاعد
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Seat Selection */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-8"
                >
                  <h2 className="text-xl font-bold font-cairo text-white text-right">اختر المقاعد</h2>
                  
                  {/* Theater Screen Curved Graphic */}
                  <div className="space-y-2">
                    <div className="w-full h-2 rounded-full bg-gradient-to-r from-transparent via-projector-orange to-transparent opacity-80 blur-sm projector-glow" />
                    <p className="text-center font-cairo text-xs text-projector-orange font-bold tracking-[0.3em]">شاشة العرض الرئيسية</p>
                  </div>

                  {/* Seat Grid layout */}
                  <div className="space-y-4 pt-8">
                    {rows.map((row) => (
                      <div key={row} className="flex items-center justify-center gap-3">
                        <span className="w-6 text-center text-gray-500 font-bold font-cairo text-xs">{row}</span>
                        <div className="flex gap-2">
                          {[...Array(seatsPerRow)].map((_, i) => {
                            const seatId = `${row}${i + 1}`
                            const isReserved = reservedSeats.includes(seatId)
                            const isUnavailable = unavailableSeats.includes(seatId)
                            const isSelected = selectedSeats.includes(seatId)

                            return (
                              <button
                                key={seatId}
                                disabled={isReserved || isUnavailable}
                                onClick={() => toggleSeat(seatId)}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                                  isUnavailable
                                    ? 'bg-gray-800 text-gray-900 cursor-not-allowed opacity-20'
                                    : isReserved
                                    ? 'bg-red-500/20 border border-red-500/40 text-red-500 cursor-not-allowed'
                                    : isSelected
                                    ? 'bg-projector-orange border border-projector-orange text-white shadow-lg'
                                    : 'bg-white/5 border border-white/5 text-gray-400 hover:border-projector-orange/40'
                                }`}
                              >
                                <Armchair className="w-3.5 h-3.5" />
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Legend key indicators */}
                  <div className="flex flex-wrap gap-6 justify-center pt-6 text-xs text-gray-400 font-tajawal">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-white/5 border border-white/5" />
                      <span>متاح</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-projector-orange text-white flex items-center justify-center"><Check className="w-2.5 h-2.5" /></div>
                      <span>محدد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-red-500/20 border border-red-500/40 text-red-500" />
                      <span>محجوز مسبقاً</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-gray-800 opacity-20" />
                      <span>غير متاح</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-end gap-3">
                    <button
                      onClick={nextStep}
                      disabled={selectedSeats.length === 0}
                      className="bg-projector-orange hover:bg-projector-orange/90 disabled:opacity-30 text-white px-8 py-3.5 rounded-xl font-cairo font-bold text-sm transition duration-200"
                    >
                      متابعة وإدخال البيانات
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Personal Details Form */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6 text-right"
                >
                  <h2 className="text-xl font-bold font-cairo text-white">البيانات الشخصية</h2>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400 font-tajawal text-sm">الاسم الكامل</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full"
                        placeholder="أدخل اسمك الثلاثي"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400 font-tajawal text-sm">رقم الهاتف</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full"
                        placeholder="+963 9xx xxx xxx"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-gray-400 font-tajawal text-sm">البريد الإلكتروني</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-tajawal text-sm focus:border-projector-orange/40 text-right w-full"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-end gap-3">
                    <button
                      onClick={nextStep}
                      disabled={!formData.name || !formData.phone || !formData.email}
                      className="bg-projector-orange hover:bg-projector-orange/90 disabled:opacity-30 text-white px-8 py-3.5 rounded-xl font-cairo font-bold text-sm transition duration-200"
                    >
                      تأكيد الحجز والدفع
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Confirmation */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-8 text-right"
                >
                  <div className="flex flex-col items-center justify-center py-8 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-projector-orange/10 flex items-center justify-center text-projector-orange">
                      <Check className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold font-cairo text-white">تم تأكيد طلب الحجز المبدئي</h2>
                    <p className="text-gray-400 font-tajawal text-sm">تم إرسال تفاصيل التذكرة إلى بريدك الإلكتروني.</p>
                  </div>

                  <div className="bg-white/5 border border-white/5 p-6 rounded-xl space-y-4 text-sm font-tajawal">
                    <div className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-white">{selectedFilm?.title}</span>
                      <span className="text-gray-400">الفيلم</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-white">{selectedDate} في {selectedTime}</span>
                      <span className="text-gray-400">الموعد</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-white">{selectedSeats.join(', ')}</span>
                      <span className="text-gray-400">المقاعد</span>
                    </div>
                    <div className="flex justify-between pt-3">
                      <span className="text-projector-orange font-bold text-lg">{total} $</span>
                      <span className="text-gray-400">المبلغ الإجمالي</span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex justify-end">
                    <button
                      onClick={() => {
                        setStep(1)
                        setSelectedFilm(null)
                        setSelectedDate(null)
                        setSelectedTime(null)
                        setSelectedSeats([])
                        setFormData({ name: '', email: '', phone: '' })
                      }}
                      className="bg-projector-orange hover:bg-projector-orange/90 text-white px-8 py-3.5 rounded-xl font-cairo font-bold text-sm transition duration-200"
                    >
                      العودة للرئيسية والبدء من جديد
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            {/* Back indicator trigger */}
            {step > 1 && step < 5 && (
              <button
                onClick={prevStep}
                className="mt-6 flex items-center gap-1.5 text-gray-500 hover:text-white font-tajawal text-xs transition duration-200"
              >
                <ChevronRight className="w-4 h-4" />
                <span>العودة للخطوة السابقة</span>
              </button>
            )}
          </div>

          {/* Sticky checkout summary block (Right sidebar) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 text-right">
            <div className="bg-charcoal/50 border border-white/5 p-6 rounded-2xl space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 justify-end border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-lg font-bold font-cairo text-white">ملخص الحجز</h3>
                  <p className="text-xs text-gray-500 font-tajawal mt-0.5">تفاصيل التذكرة المحددة</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-projector-orange/10 text-projector-orange flex items-center justify-center shrink-0">
                  <Ticket className="w-5 h-5" />
                </div>
              </div>

              {selectedFilm ? (
                <div className="space-y-6">
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/5">
                    <img src={selectedFilm.image} alt={selectedFilm.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold font-cairo text-white text-base">{selectedFilm.title}</h4>
                    <p className="text-xs text-projector-orange font-tajawal font-bold mt-1">{selectedFilm.category}</p>
                  </div>

                  <ul className="space-y-3 text-xs text-gray-400 font-tajawal">
                    <li className="flex justify-between">
                      <span className="text-white">{selectedDate || '—'}</span>
                      <span>التاريخ</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white">{selectedTime || '—'}</span>
                      <span>الوقت</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white">{selectedSeats.length ? `${selectedSeats.length} تذاكر` : '—'}</span>
                      <span>عدد المقاعد</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-white">{selectedSeats.length ? selectedSeats.join(', ') : '—'}</span>
                      <span>المقاعد المحددة</span>
                    </li>
                  </ul>

                  <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                    <span className="text-xl font-bold font-cairo text-projector-orange">{total} $</span>
                    <span className="text-sm font-tajawal text-gray-400">المبلغ الإجمالي</span>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-gray-500 font-tajawal text-sm">
                  لم يتم اختيار أي فيلم بعد.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}