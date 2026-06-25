import { useEffect, useRef } from 'react'
import { Code2, Bot, Workflow, Globe, Smartphone, Layout, MessageSquare, Mail, CalendarCheck, Users, Building2, Coffee, Scissors, Wrench, Utensils } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Website Design',
    description: 'Custom business websites that look premium and drive results.',
    items: [
      'Custom business websites',
      'Mobile responsive design',
      'High-converting landing pages',
      'Portfolio & gallery sites',
      'SEO optimization',
      'Fast loading performance',
    ],
  },
  {
    icon: Bot,
    title: 'AI Business Assistants',
    description: 'Intelligent AI that handles customer communication 24/7.',
    items: [
      'Answer customer questions anytime',
      'Handle website live chat',
      'Respond to emails automatically',
      'Assist with appointment scheduling',
      'Capture & qualify leads',
      'Route complex issues to your team',
    ],
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'Automate repetitive tasks and never miss a lead again.',
    items: [
      'Lead collection & management',
      'Smart contact forms',
      'CRM integrations',
      'Appointment reminders',
      'Automated follow-up sequences',
      'Analytics & reporting',
    ],
  },
]

const industries = [
  { icon: Scissors, name: 'Barber Shops' },
  { icon: Utensils, name: 'Restaurants' },
  { icon: Coffee, name: 'Coffee Shops' },
  { icon: Wrench, name: 'Auto Repair' },
  { icon: Building2, name: 'Contractors' },
  { icon: Users, name: 'Service Pros' },
]

export default function Services() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0')
              entry.target.classList.remove('opacity-0', 'translate-y-8')
            }, i * 150)
          }
        })
      },
      { threshold: 0.1 }
    )
    cardsRef.current.forEach(ref => ref && observer.observe(ref))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-navy-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
            What We Do
          </div>
          <h2 className="section-heading mb-4">Services That Help You Grow</h2>
          <p className="section-subheading mx-auto">
            From stunning websites to intelligent AI assistants, we provide everything local businesses need to thrive in the digital age.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={el => cardsRef.current[i] = el}
              className="card opacity-0 translate-y-8 transition-all duration-700 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">Simple, Transparent Pricing</h3>
            <p className="text-slate-600 max-w-xl mx-auto">No hidden fees. No surprises. Pick what works for your business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Website Pricing */}
            <div className="card relative overflow-hidden border-2 border-navy-100 hover:border-navy-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-900 to-navy-700" />
              <div className="pt-2">
                <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-navy-700" />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-1">Website</h4>
                <p className="text-sm text-slate-500 mb-4">Professional business website</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-navy-900">$500</div>
                  <div className="text-sm text-slate-500">one-time setup</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Premium mobile-responsive design
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    SEO optimized
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Free first year maintenance
                  </li>
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Yearly plan</span>
                    <span className="font-semibold text-navy-900">$250/yr</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t border-slate-100 pt-2">
                    <span className="text-slate-600">Monthly plan</span>
                    <span className="font-semibold text-navy-900">$20/mo</span>
                  </div>
                </div>
                <a href="#booking" className="btn-primary w-full text-sm">Get Started</a>
              </div>
            </div>

            {/* AI Agent Pricing */}
            <div className="card relative overflow-hidden border-2 border-gold-200 bg-gradient-to-b from-gold-50/30 to-white hover:border-gold-400">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-gold-500 text-white text-xs font-semibold rounded-full">Popular</div>
              <div className="pt-2">
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-gold-600" />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-1">AI Assistant</h4>
                <p className="text-sm text-slate-500 mb-4">24/7 AI that answers calls & chats</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-navy-900">$1,000</div>
                  <div className="text-sm text-slate-500">one-time setup</div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    24/7 website chat & email responses
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Lead capture & qualification
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Appointment scheduling
                  </li>
                </ul>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Yearly plan</span>
                    <span className="font-semibold text-navy-900">$300/yr</span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-t border-slate-100 pt-2">
                    <span className="text-slate-600">Monthly plan</span>
                    <span className="font-semibold text-navy-900">$30/mo</span>
                  </div>
                </div>
                <a href="#booking" className="btn-gold w-full text-sm">Get AI Assistant</a>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map(ind => (
              <div
                key={ind.name}
                className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-navy-200 transition-all duration-200"
              >
                <ind.icon className="w-5 h-5 text-navy-700" />
                <span className="font-medium text-slate-700">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}