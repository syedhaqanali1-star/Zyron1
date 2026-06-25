import { useEffect, useRef } from 'react'
import { Heart, Users, Target, Award, Code2, Bot, Zap } from 'lucide-react'

const values = [
  { icon: Users, title: 'Local First', text: 'We understand local businesses because we are one. Every solution is built for real Main Street needs.' },
  { icon: Target, title: 'Affordable Excellence', text: 'Enterprise-level technology at prices that make sense for small businesses. No hidden fees, no surprises.' },
  { icon: Heart, title: 'Dedicated Support', text: 'When you work with us, you get us — directly. No call centers, no automated menus, just real help.' },
  { icon: Award, title: 'Results Driven', text: 'Every project is measured by one thing: does it help your business grow? Our track record speaks for itself.' },
]

export default function About() {
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
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="opacity-0 transition-opacity duration-700">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
              About Us
            </div>
            <h2 className="section-heading mb-4">Built by Two Brothers</h2>
            <p className="section-subheading mx-auto">
              We started Zyron because we saw local businesses struggling with expensive, complicated technology. 
              Our mission: make powerful digital tools accessible to every Main Street business.
            </p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-10">
                <Zap className="w-12 h-12 text-gold-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  As brothers, we grew up building things together. When we noticed how many local businesses 
                  were being left behind by the digital revolution — paying too much for mediocre websites, 
                  missing calls from potential customers, drowning in administrative work — we knew we had to help.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Zyron was born from a simple idea: every business deserves access to modern technology 
                  that actually works, without needing a technical degree or a Fortune 500 budget.
                </p>
              </div>
              {/* Decorative element */}
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl" />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-900">What Drives Us</h3>
              <div className="space-y-4">
                {values.map(value => (
                  <div key={value.title} className="flex gap-4 p-4 rounded-2xl hover:bg-navy-50 transition-colors">
                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-navy-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-navy-900 mb-8">Technology We Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Tailwind CSS', 'Node.js', 'AI/ML', 'Stripe', 'Twilio', 'Google Cloud', 'OpenAI'].map(tech => (
                <span key={tech} className="px-5 py-2.5 bg-navy-50 text-navy-700 rounded-full text-sm font-medium border border-navy-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}