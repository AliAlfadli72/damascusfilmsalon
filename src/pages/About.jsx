import { motion } from 'framer-motion'
import { Eye, Target, Sparkles, ShieldCheck } from 'lucide-react'
import aboutStory from '../assets/about_story.webp'

export default function About() {
  const values = [
    {
      icon: Sparkles,
      title: 'الأصالة الثقافية',
      desc: 'الارتباط العضوي بالهوية والقصص المحلية، وربط الجيل الجديد بجذور الحكاية السورية وعمقها التاريخي.',
    },
    {
      icon: ShieldCheck,
      title: 'الاستقلالية الفنية',
      desc: 'توفير مساحة حرة للتعبير والتجريب الفني بعيداً عن ضغوط الأسواق التجارية والإنتاج الربحي المكرر.',
    },
    {
      icon: Target,
      title: 'التميز البصري',
      desc: 'تقديم تجارب عرض سينمائية استثنائية وعالية الجودة هندسياً وتقنياً بفضل أنظمة طاقة بديلة وصوتية متطورة.',
    },
  ]

  return (
    <div className="overflow-hidden bg-midnight">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-projector-orange/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center z-10 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-projector-orange font-cairo font-bold text-sm tracking-wider uppercase"
          >
            حكايتنا وهويتنا
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-cairo leading-tight text-white"
          >
            عن صالون دمشق السينمائي
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 font-tajawal text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            "السينما كما يجب أن تُشاهد" — أكثر من مجرد شاشة عرض، نحن ملتقى فكري مستقل لإحياء التراث وبناء مجتمع نقدي واعٍ.
          </motion.p>
        </div>
      </section>

      {/* Story Narrative & Image */}
      <section className="py-20 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Text story (7 columns) */}
            <div className="lg:col-span-7 space-y-6 text-right order-2 lg:order-1">
              <span className="text-projector-warm font-cairo font-bold text-sm tracking-wider">
                من نحن
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-cairo text-white leading-tight">
                في قلب دمشق، وُلدت الفكرة
              </h2>
              <p className="text-gray-300 font-tajawal text-base md:text-lg leading-[2] text-justify">
                في قلب دمشق، حيث تتشابك عراقة التاريخ بالحكايا اليومية، وُلد "صالون دمشق السينمائي" ليكون أكثر من مجرد شاشة عرض. نحن مساحة ثقافية مستقلة وملتقى فكري يجمع صنّاع الأفلام، النقاد، وعشاق الفن السابع في تجربة بصرية مغايرة للمألوف.
              </p>
              <p className="text-gray-300 font-tajawal text-base md:text-lg leading-[2] text-justify">
                انطلقنا من شغف إعادة إحياء طقوس السينما الكلاسيكية بروح عصرية، لنمنح الجمهور السوري نافذةً يرى من خلالها العالم، ومنصةً تعيد تقديم القصص المحلية والعالمية بعيون سينمائية احترافية وملهمة.
              </p>
            </div>

            {/* Cinematic image layout (5 columns) */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={aboutStory}
                  alt="Vintage cinema reels and projection beam"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-black/20" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Split Cards */}
      <section className="py-20 relative bg-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8">
          
          {/* Vision card */}
          <div className="bg-charcoal/40 border border-white/5 p-10 rounded-2xl text-right space-y-4">
            <div className="w-12 h-12 rounded-xl bg-projector-orange/10 text-projector-orange flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-cairo text-white">رؤيتنا</h3>
            <p className="text-gray-400 font-tajawal text-base leading-relaxed">
              أن نصبح المركز الثقافي المستقل الأول للسينما البديلة والصناعة الإبداعية في سوريا، والوجهة الأساسية لإحياء التراث السينمائي وبناء مجتمع نقدي واعٍ.
            </p>
          </div>

          {/* Mission card */}
          <div className="bg-charcoal/40 border border-white/5 p-10 rounded-2xl text-right space-y-4">
            <div className="w-12 h-12 rounded-xl bg-projector-warm/10 text-projector-warm flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-cairo text-white">رسالتنا</h3>
            <p className="text-gray-400 font-tajawal text-base leading-relaxed">
              تقديم تجارب عرض سينمائية استثنائية وعالية الجودة، ودعم السينمائيين المستقلين محلياً عبر توفير بيئة تفاعلية تجمع بين العرض، النقاش، والتعليم الثقافي المستدام.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values Asymmetric Grid */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-projector-orange font-cairo font-bold text-sm tracking-wider">ركائزنا الأساسية</span>
            <h2 className="text-3xl md:text-5xl font-black font-cairo text-white">القيم الجوهرية للصالون</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={val.title}
                  className="bg-charcoal/30 border border-white/5 hover:border-projector-orange/20 p-8 rounded-2xl text-right space-y-4 transition duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-projector-orange/10 text-projector-orange flex items-center justify-center">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-xl font-bold font-cairo text-white">{val.title}</h3>
                  <p className="text-gray-400 font-tajawal text-sm md:text-base leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

    </div>
  )
}