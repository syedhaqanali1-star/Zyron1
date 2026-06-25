import { useEffect, useRef } from 'react'
import { ArrowRight, MessageSquare, Sparkles, Shield, Clock, BarChart3 } from 'lucide-react'

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '40+' },
  { label: 'Avg. Response Time', value: '< 2s' },
  { label: 'Leads Generated', value: '10K+' },
]

export default function Hero() {
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-navy-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-navy-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={sectionRef} className="opacity-0 transition-opacity duration-700">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-6 border border-navy-900/10">
              <Sparkles className="w-4 h-4 text-gold-500" />
              AI-Powered Solutions for Local Businesses
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy-900 leading-[1.1] mb-6">
              Websites & AI Systems That Help{' '}
              <span className="gradient-text">Local Businesses Grow</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              We build websites, AI assistants, booking systems, and automation tools that help businesses get more customers and save time — no technical expertise required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#booking"
                className="btn-gold text-base px-8 py-4 gap-2 group"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="btn-secondary text-base px-8 py-4 gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Send a Message
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map(stat => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 p-8 animate-float">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 bg-gradient-to-br from-navy-900 to-navy-700 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">Zyron AI Assistant</div>
                    <div className="text-sm text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Online — Ready to help
                    </div>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="bg-navy-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 max-w-[80%]">
                      Hi! I'm Zyron's AI assistant. How can I help your business grow today?
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-gold-50 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-slate-700 max-w-[80%]">
                      How much does a website cost?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-gold-400" />
                    </div>
                    <div className="bg-navy-50 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-slate-700 max-w-[80%]">
                      Our websites start at $1,500. We'll discuss your needs in a free consultation and give you a custom quote. Want to book a time?
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-3">
                    <input
                      type="text"
                      placeholder="Ask me anything..."
                      className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
                      readOnly
                    />
                    <button className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Features */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium text-slate-700">24/7 Support</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 animate-float-delayed-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-gold-500" />
                  <span className="text-xs font-medium text-slate-700">90% More Leads</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 40C240 80 480 80 720 40C960 0 1200 0 1440 40V80H0V40Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

function Zap(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}