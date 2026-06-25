import { useEffect, useRef } from 'react'
import { ArrowUpRight, Star, TrendingUp, Clock, Users, BarChart3 } from 'lucide-react'

const projects = [
  {
    name: "Modern Barber Co.",
    type: "Barber Shop",
    image: null,
    gradient: "from-amber-500 to-orange-600",
    icon: "✂️",
    result: "+340% more bookings",
    stats: { leads: "+280%", time: "60 hrs/mo saved", rating: "4.9" },
    testimonial: "Zyron built us an incredible website with an AI booking assistant. Our phone has been ringing off the hook!",
    author: "Mike R.",
    authorRole: "Owner, Modern Barber Co.",
  },
  {
    name: "Bella's Ristorante",
    type: "Restaurant",
    image: null,
    gradient: "from-red-500 to-rose-600",
    icon: "🍝",
    result: "+200% online reservations",
    stats: { leads: "+200%", time: "40 hrs/mo saved", rating: "5.0" },
    testimonial: "The AI assistant handles all our reservation calls. We saved thousands in staff time.",
    author: "Bella C.",
    authorRole: "Owner, Bella's Ristorante",
  },
  {
    name: "Brew & Bean",
    type: "Coffee Shop",
    image: null,
    gradient: "from-amber-700 to-brown-800",
    icon: "☕",
    result: "+180% catering inquiries",
    stats: { leads: "+180%", time: "25 hrs/mo saved", rating: "4.8" },
    testimonial: "Professional website, fast turnaround, and the AI chat answers customer questions 24/7.",
    author: "Sarah L.",
    authorRole: "Owner, Brew & Bean",
  },
  {
    name: "Precision Auto Works",
    type: "Auto Repair",
    image: null,
    gradient: "from-blue-600 to-indigo-700",
    icon: "🔧",
    result: "+250% appointment requests",
    stats: { leads: "+250%", time: "45 hrs/mo saved", rating: "4.9" },
    testimonial: "The automated booking system alone was worth it. Best investment we've made for the shop.",
    author: "Dave K.",
    authorRole: "Owner, Precision Auto Works",
  },
  {
    name: "Oakridge Contracting",
    type: "Contractor",
    image: null,
    gradient: "from-green-600 to-emerald-700",
    icon: "🏗️",
    result: "+190% qualified leads",
    stats: { leads: "+190%", time: "50 hrs/mo saved", rating: "4.7" },
    testimonial: "Zyron's lead capture system filters out tire-kickers. We only get calls from serious clients now.",
    author: "Tom W.",
    authorRole: "Owner, Oakridge Contracting",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-gold-400 mb-4 border border-white/10">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Real businesses. Real results. See how we've helped local businesses transform their digital presence and grow revenue.
          </p>
        </div>

        {/* Project Grid */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-12')
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-12 transition-all duration-700"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left - Project Preview */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{project.icon}</span>
              <div>
                <div className="text-lg font-bold text-white">{project.name}</div>
                <div className="text-sm text-slate-400">{project.type}</div>
              </div>
            </div>

            {/* Gradient Preview */}
            <div className={`flex-1 min-h-[160px] rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
              <div className="text-center">
                <div className="text-5xl mb-2">{project.icon}</div>
                <div className="text-white/80 text-sm font-medium">{project.type} Website</div>
              </div>
            </div>

            {/* Result Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium border border-green-500/20">
              <TrendingUp className="w-4 h-4" />
              {project.result}
            </div>
          </div>

          {/* Right - Details */}
          <div className="md:col-span-3 p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/10 flex flex-col">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <BarChart3 className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">{project.stats.leads}</div>
                <div className="text-xs text-slate-400">More Leads</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <Clock className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">{project.stats.time}</div>
                <div className="text-xs text-slate-400">Time Saved</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <Star className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-white">{project.stats.rating}</div>
                <div className="text-xs text-slate-400">Rating</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="flex-1">
              <div className="bg-white/5 rounded-2xl p-5 mb-4">
                <svg className="w-6 h-6 text-gold-400/50 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  "{project.testimonial}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-xs font-bold text-navy-950">
                    {project.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{project.author}</div>
                    <div className="text-xs text-slate-500">{project.authorRole}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors self-start"
            >
              Get results like this
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}