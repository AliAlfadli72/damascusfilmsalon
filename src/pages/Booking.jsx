import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import {
  Calendar,
  Clock3,
  MapPin,
  Ticket,
  Armchair,
  ChevronLeft,
  ChevronRight,
  Check,
  Film,
  CreditCard,
} from 'lucide-react'

export default function Booking() {

  const [step, setStep] = useState(1)

  const [selectedFilm, setSelectedFilm] = useState(null)

  const [selectedDate, setSelectedDate] = useState(null)

  const [selectedTime, setSelectedTime] = useState(null)

  const [selectedSeats, setSelectedSeats] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  const seatsPerRow = 12

  const reservedSeats = [
    'A4',
    'A5',
    'A9',
    'B7',
    'B8',
    'C3',
    'D6',
    'E2',
    'E11',
    'G1',
    'G2',
  ]

  const unavailableSeats = [
    'C11',
    'C12',
    'F6',
    'F7',
  ]

  const ticketPrice = 15

  const total = selectedSeats.length * ticketPrice

  const films = [
    {
      id: 1,
      title: 'ذاكرة الضوء',
      category: 'عرض سينمائي خاص',
      duration: '95 دقيقة',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop',
      description:
        'عرض خاص لفيلم مستقل يتبعه نقاش مفتوح مع صنّاع الفيلم.',
    },

    {
      id: 2,
      title: 'المدينة الصامتة',
      category: 'دراما',
      duration: '110 دقيقة',
      image:
        'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=2070&auto=format&fit=crop',
      description:
        'رحلة بصرية داخل مدينة تبحث عن هويتها المفقودة.',
    },

    {
      id: 3,
      title: 'ما بعد الظل',
      category: 'دراما بصرية',
      duration: '88 دقيقة',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop',
      description:
        'تجربة سينمائية تجريبية عن الذاكرة والهوية.',
    },

    {
      id: 4,
      title: 'دمشق الأخيرة',
      category: 'وثائقي',
      duration: '102 دقيقة',
      image:
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop',
      description:
        'وثائقي بصري يوثق التحولات الثقافية داخل دمشق.',
    },
  ]

  const dates = [
    '12 يونيو',
    '13 يونيو',
    '14 يونيو',
    '15 يونيو',
    '16 يونيو',
    '17 يونيو',
    '18 يونيو',
  ]

  const times = [
    '06:00 مساء',
    '08:00 مساء',
    '09:30 مساء',
  ]

  const toggleSeat = (seatId) => {

    if (
      reservedSeats.includes(seatId) ||
      unavailableSeats.includes(seatId)
    ) return

    setSelectedSeats((prev) => {

      if (prev.includes(seatId)) {
        return prev.filter((seat) => seat !== seatId)
      }

      return [...prev, seatId]
    })
  }

  const nextStep = () => setStep((prev) => prev + 1)

  const prevStep = () => setStep((prev) => prev - 1)

  return (

    <div className="min-h-screen bg-primary overflow-hidden">

      {/* HERO */}

      <section className="relative pt-40 pb-20 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-primary" />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >

            <span className="text-gold font-black text-lg">
              تجربة سينمائية تفاعلية
            </span>

            <h1 className="text-6xl md:text-8xl font-black mt-6 leading-tight">

              تفاصيل
              <span className="block text-gold">
                الحجز
              </span>

            </h1>

            <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-300 leading-[2.2]">

              احجز مقعدك واستمتع بتجربة سينمائية مستقلة
              داخل أجواء دمشق فيلم صالون.

            </p>

          </motion.div>

          {/* STEPS */}

          <div className="flex flex-wrap justify-center gap-6">

            {[
              'اختر الفيلم',
              'اختر التاريخ',
              'اختر المقاعد',
              'بياناتك الشخصية',
              'التأكيد',
            ].map((item, index) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black transition-all duration-300 ${
                    step >= index + 1
                      ? 'bg-gold text-white'
                      : 'bg-white/5 border border-white/10 text-gray-500'
                  }`}
                >

                  {step > index + 1
                    ? <Check className="w-5 h-5" />
                    : index + 1}

                </div>

                <span className="hidden md:block font-bold text-gray-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="pb-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid xl:grid-cols-[1fr_380px] gap-10">

            {/* MAIN */}

            <div>

              <AnimatePresence mode="wait">

                {/* STEP 1 */}

                {step === 1 && (

                  <motion.div
                    key="films"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
                  >

                    {films.map((film) => (

                      <button
                        key={film.id}
                        onClick={() => {
                          setSelectedFilm(film)
                          nextStep()
                        }}
                        className={`group text-right bg-charcoal/80 border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                          selectedFilm?.id === film.id
                            ? 'border-gold shadow-2xl shadow-gold/20'
                            : 'border-white/10 hover:border-gold/40'
                        }`}
                      >

                        <div className="h-[420px] overflow-hidden relative">

                          <img
                            src={film.image}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        </div>

                        <div className="p-8">

                          <span className="text-gold text-sm font-bold">
                            {film.category}
                          </span>

                          <h2 className="text-3xl font-black mt-4 mb-5">
                            {film.title}
                          </h2>

                          <p className="text-gray-400 leading-8 mb-6">
                            {film.description}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-400">

                            <span>
                              {film.duration}
                            </span>

                            <Film className="w-4 h-4" />

                          </div>

                        </div>

                      </button>

                    ))}

                  </motion.div>

                )}

                {/* STEP 2 */}

                {step === 2 && (

                  <motion.div
                    key="dates"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className="space-y-12"
                  >

                    <div className="bg-charcoal/80 border border-white/10 rounded-[3rem] p-10">

                      <h2 className="text-4xl font-black mb-10">
                        اختر التاريخ
                      </h2>

                      <div className="grid md:grid-cols-4 xl:grid-cols-7 gap-5">

                        {dates.map((date) => (

                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`p-8 rounded-3xl border transition-all duration-300 ${
                              selectedDate === date
                                ? 'bg-gold border-gold'
                                : 'bg-black/20 border-white/10 hover:border-gold/30'
                            }`}
                          >

                            <h3 className="text-2xl font-black">
                              {date}
                            </h3>

                          </button>

                        ))}

                      </div>

                    </div>

                    <div className="bg-charcoal/80 border border-white/10 rounded-[3rem] p-10">

                      <h2 className="text-4xl font-black mb-10">
                        اختر الوقت
                      </h2>

                      <div className="flex flex-wrap gap-5">

                        {times.map((time) => (

                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`px-10 py-6 rounded-2xl font-black text-xl transition-all duration-300 ${
                              selectedTime === time
                                ? 'bg-gold'
                                : 'bg-black/20 border border-white/10 hover:border-gold/30'
                            }`}
                          >

                            {time}

                          </button>

                        ))}

                      </div>

                      <button
                        disabled={!selectedDate || !selectedTime}
                        onClick={nextStep}
                        className="mt-12 bg-gold hover:bg-orange-500 disabled:opacity-30 transition-all duration-300 px-12 py-5 rounded-2xl font-black text-xl"
                      >

                        متابعة

                      </button>

                    </div>

                  </motion.div>

                )}

                {/* STEP 3 */}

                {step === 3 && (

                  <motion.div
                    key="seats"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className="bg-charcoal/80 border border-white/10 rounded-[3rem] p-10"
                  >

                    {/* SCREEN */}

                    <div className="mb-20">

                      <div className="w-full h-8 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-80 blur-sm" />

                      <div className="text-center text-gold font-black mt-5 tracking-[0.5em]">
                        SCREEN
                      </div>

                    </div>

                    {/* SEATS */}

                    <div className="space-y-6">

                      {rows.map((row) => (

                        <div
                          key={row}
                          className="flex items-center justify-center gap-4"
                        >

                          <span className="w-10 text-gray-500 font-black">
                            {row}
                          </span>

                          {[...Array(seatsPerRow)].map((_, i) => {

                            const seatId = `${row}${i + 1}`

                            const reserved = reservedSeats.includes(seatId)

                            const unavailable = unavailableSeats.includes(seatId)

                            const selected = selectedSeats.includes(seatId)

                            return (

                              <div
                                key={seatId}
                                className={i === 5 ? 'mr-8' : ''}
                              >

                                <button
                                  disabled={reserved || unavailable}
                                  onClick={() => toggleSeat(seatId)}
                                  className={`group relative w-14 h-14 rounded-2xl transition-all duration-300 ${
                                    unavailable
                                      ? 'bg-gray-700/20 opacity-20 cursor-not-allowed'
                                      : reserved
                                      ? 'bg-red-500/40 cursor-not-allowed'
                                      : selected
                                      ? 'bg-gold scale-110 shadow-2xl shadow-gold/30'
                                      : 'bg-white/5 border border-white/10 hover:border-gold/40 hover:scale-105'
                                  }`}
                                >

                                  <Armchair className="w-5 h-5 mx-auto" />

                                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-black text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">

                                    {seatId}

                                  </div>

                                </button>

                              </div>

                            )
                          })}

                        </div>

                      ))}

                    </div>

                    {/* LEGEND */}

                    <div className="flex flex-wrap justify-center gap-10 mt-16">

                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-white/10" />
                        <span className="text-gray-400">متاح</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-red-500/50" />
                        <span className="text-gray-400">محجوز</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-gray-700/40" />
                        <span className="text-gray-400">غير متاح</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-gold" />
                        <span className="text-gray-400">محدد</span>
                      </div>

                    </div>

                    <button
                      disabled={selectedSeats.length === 0}
                      onClick={nextStep}
                      className="mt-16 bg-gold hover:bg-orange-500 disabled:opacity-30 transition-all duration-300 px-12 py-5 rounded-2xl font-black text-xl"
                    >

                      متابعة

                    </button>

                  </motion.div>

                )}

                {/* STEP 4 */}

                {step === 4 && (

                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className="bg-charcoal/80 border border-white/10 rounded-[3rem] p-12"
                  >

                    <h2 className="text-5xl font-black mb-12">
                      بياناتك الشخصية
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                      <input
                        placeholder="الاسم الكامل"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="bg-black/20 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/40"
                      />

                      <input
                        placeholder="رقم الهاتف"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        className="bg-black/20 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/40"
                      />

                      <div className="md:col-span-2">

                        <input
                          placeholder="البريد الإلكتروني"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-gold/40"
                        />

                      </div>

                    </div>

                    <button
                      onClick={nextStep}
                      className="mt-14 bg-gold hover:bg-orange-500 transition-all duration-300 px-12 py-5 rounded-2xl font-black text-xl"
                    >

                      متابعة الدفع

                    </button>

                  </motion.div>

                )}

                {/* STEP 5 */}

                {step === 5 && (

                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    className="bg-charcoal/80 border border-white/10 rounded-[3rem] p-12"
                  >

                    <div className="flex items-center gap-5 mb-12">

                      <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center">

                        <CreditCard className="w-10 h-10 text-gold" />

                      </div>

                      <div>

                        <h2 className="text-5xl font-black">
                          تأكيد الحجز
                        </h2>

                        <p className="text-gray-400 mt-2">
                          راجع تفاصيل طلبك قبل المتابعة
                        </p>

                      </div>

                    </div>

                    <div className="space-y-8 text-xl">

                      <div className="flex justify-between border-b border-white/10 pb-5">
                        <span className="text-gray-400">الفيلم</span>
                        <span>{selectedFilm?.title}</span>
                      </div>

                      <div className="flex justify-between border-b border-white/10 pb-5">
                        <span className="text-gray-400">التاريخ</span>
                        <span>{selectedDate}</span>
                      </div>

                      <div className="flex justify-between border-b border-white/10 pb-5">
                        <span className="text-gray-400">الوقت</span>
                        <span>{selectedTime}</span>
                      </div>

                      <div className="flex justify-between border-b border-white/10 pb-5">
                        <span className="text-gray-400">المقاعد</span>
                        <span>{selectedSeats.join(', ')}</span>
                      </div>

                      <div className="flex justify-between text-3xl font-black pt-5">

                        <span>
                          الإجمالي
                        </span>

                        <span className="text-gold">
                          ${total}
                        </span>

                      </div>

                    </div>

                    <button className="w-full mt-16 bg-gold hover:bg-orange-500 transition-all duration-300 py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-gold/20">

                      تأكيد الحجز والدفع

                    </button>

                  </motion.div>

                )}

              </AnimatePresence>

              {/* BACK */}

              {step > 1 && (

                <button
                  onClick={prevStep}
                  className="mt-10 flex items-center gap-3 text-gray-400 hover:text-gold transition"
                >

                  <ChevronRight className="w-5 h-5" />

                  العودة للخطوة السابقة

                </button>

              )}

            </div>

            {/* SIDEBAR */}

            <div>

              <div className="sticky top-32 bg-charcoal/80 border border-white/10 rounded-[3rem] p-10">

                <div className="flex items-center gap-5 mb-10">

                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">

                    <Ticket className="w-8 h-8 text-gold" />

                  </div>

                  <div>

                    <h2 className="text-3xl font-black">
                      ملخص الحجز
                    </h2>

                    <p className="text-gray-400">
                      تفاصيل التجربة السينمائية
                    </p>

                  </div>

                </div>

                {selectedFilm ? (

                  <>
                    <img
                      src={selectedFilm.image}
                      className="w-full h-[320px] object-cover rounded-[2rem] mb-8"
                    />

                    <h3 className="text-4xl font-black mb-6">
                      {selectedFilm.title}
                    </h3>

                    <div className="space-y-5 text-gray-300">

                      <div className="flex items-center justify-between">
                        <span>التاريخ</span>
                        <span>{selectedDate || '—'}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span>الوقت</span>
                        <span>{selectedTime || '—'}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span>عدد التذاكر</span>
                        <span>{selectedSeats.length}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span>المقاعد</span>
                        <span>
                          {selectedSeats.length
                            ? selectedSeats.join(', ')
                            : '—'}
                        </span>
                      </div>

                    </div>

                    <div className="border-t border-white/10 mt-10 pt-8 flex items-center justify-between text-3xl font-black">

                      <span>
                        الإجمالي
                      </span>

                      <span className="text-gold">
                        ${total}
                      </span>

                    </div>
                  </>

                ) : (

                  <div className="text-center py-20 text-gray-500">

                    اختر فيلماً للبدء بالحجز

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  )
}