import { useEffect, useRef } from 'react'
import { Phone, Mic, MessageSquare, CalendarCheck, Forward, ArrowRight, Headphones, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Answer Incoming Calls',
    description: 'Your AI voice assistant answers every call with a natural, professional voice. No more missed business opportunities.',
  },
  {
    icon: MessageSquare,
    title: 'Handle Common Questions',
    description: 'Answers questions about hours, services, pricing, location, and more — instantly and accurately.',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule Appointments',
    description: 'Callers can book appointments directly through the voice assistant. Integrates with your calendar.',
  },
  {
    icon: Forward,
    title: 'Smart Escalation',
    description: 'When a conversation needs a human touch, it seamlessly forwards the call to you or your team.',
  },
]

const stats = [
  { value: '85%', label: 'Calls handled by AI' },
  { value: '24/7', label: 'Never miss a call' },
  { value: '< 2s', label: 'Average response' },
  { value: '3x', label: 'More booked calls' },
]

export default function CallManagement() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('opacity-100')
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-gradient-to-b from-white to-navy-50/30 overflow-hidden">
      <div ref={sectionRef} className="opacity-0 transition-opacity duration-700 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
            <Phone className="w-4 h-4" />
            AI Voice Assistant
          </div>
          <h2 className="section-heading mb-4">Never Miss Another Call</h2>
          <p className="section-subheading mx-auto">
            Our AI voice assistant answers calls, handles customer questions, and books appointments — just like a human receptionist, but available 24/7.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map(stat => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="bg-navy-900 rounded-[2.5rem] p-4 max-w-sm mx-auto shadow-2xl">
              <div className="bg-navy-950 rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-navy-900 px-6 pt-8 pb-4 text-center border-b border-navy-800">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Headphones className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-white font-semibold">Zyron AI Voice</div>
                  <div className="text-green-400 text-sm">Connected — Incoming Call</div>
                </div>

                {/* Call Log */}
                <div className="p-6 space-y-4 min-h-[300px]">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="bg-navy-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300">
                      Hello, you've reached Precision Auto Works. How can I help you today?
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-navy-800/50 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-slate-400">
                      Hi, do you do brake repairs?
                    </div>
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-xs text-white">C</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-navy-800 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="bg-navy-800 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-300">
                      Yes, we do! I can book you in for tomorrow at 10 AM. Would that work?
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-navy-800/50 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-slate-400">
                      Perfect, book it!
                    </div>
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-xs text-white">C</span>
                    </div>
                  </div>
                </div>

                {/* Call Controls */}
                <div className="px-6 pb-6 flex justify-center gap-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-400 rotate-[135deg]" />
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Mic className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="w-12 h-12 bg-navy-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">...</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Badges */}
            <div className="hidden lg:block absolute -top-4 -right-4 bg-green-50 border border-green-200 rounded-xl px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-green-800">Appointment Booked</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="space-y-6">
              {features.map((feat, i) => (
                <div key={feat.title} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:shadow-md hover:border-navy-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                    <feat.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">{feat.title}</h4>
                    <p className="text-sm text-slate-600">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-navy-900 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-gold-400" />
                <h4 className="font-semibold text-white">Ready for a smarter phone?</h4>
              </div>
              <p className="text-slate-400 text-sm mb-4">Set up in days, not weeks. Works with your existing phone number.</p>
              <a href="#booking" className="btn-gold text-sm inline-flex gap-2">
                Get AI Call Handling
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}