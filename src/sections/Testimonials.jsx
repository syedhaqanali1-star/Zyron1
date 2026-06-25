import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Maria Santos",
    business: "Sunrise Cafe",
    role: "Owner",
    rating: 5,
    text: "Zyron transformed our online presence completely. We went from a basic Facebook page to a stunning website with online ordering. Our catering bookings have tripled since launch!",
    initials: "MS",
  },
  {
    name: "James Wilson",
    business: "Wilson's Auto Care",
    role: "Owner",
    rating: 5,
    text: "The AI booking system has been a game changer. Customers can book appointments 24/7, and we've stopped missing calls after hours. Best decision we ever made for the shop.",
    initials: "JW",
  },
  {
    name: "Priya Patel",
    business: "Patel Law Group",
    role: "Managing Partner",
    rating: 5,
    text: "Professional, responsive, and incredibly talented. The AI assistant handles initial client questions so our team can focus on cases. Lead quality improved dramatically.",
    initials: "PP",
  },
  {
    name: "Carlos Mendez",
    business: "Mendez Construction",
    role: "Owner",
    rating: 5,
    text: "We finally have a website that looks as professional as the work we do. The lead capture system sends us qualified prospects — no more spam calls. Money well spent.",
    initials: "CM",
  },
  {
    name: "Lisa Thompson",
    business: "Thompson Barber Co.",
    role: "Owner",
    rating: 5,
    text: "My barbershop has never been busier. The online booking system alone brought in a flood of new customers. Zyron understood exactly what we needed.",
    initials: "LT",
  },
  {
    name: "David Chen",
    business: "Golden Dragon Restaurant",
    role: "Owner",
    rating: 4,
    text: "The website is beautiful and the AI chat handles reservation questions instantly. Our staff can focus on serving customers instead of answering the same questions all day.",
    initials: "DC",
  },
]

export default function Testimonials() {
  const scrollRef = useRef(null)

  return (
    <section className="section-padding bg-gradient-to-b from-navy-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
            Testimonials
          </div>
          <h2 className="section-heading mb-4">What Our Clients Say</h2>
          <p className="section-subheading mx-auto">
            Don't take our word for it. Here's what local business owners have to say about working with Zyron.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-md border border-slate-100">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="text-sm text-slate-600">
              <span className="font-bold text-navy-900">4.9</span> average from <span className="font-medium">40+ reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }, index * 100)
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="card opacity-0 translate-y-8 transition-all duration-500 relative"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="w-8 h-8 text-gold-200 mb-4" />
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < t.rating ? 'fill-gold-400 text-gold-400' : 'text-slate-200'}`}
          />
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed mb-6 text-sm">"{t.text}"</p>
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy-900 to-navy-700 flex items-center justify-center text-sm font-bold text-gold-400">
          {t.initials}
        </div>
        <div>
          <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
          <div className="text-xs text-slate-500">{t.business} — {t.role}</div>
        </div>
      </div>
    </div>
  )
}