import { useState, useEffect, useRef } from 'react'
import { Bot, Send, User, Zap, Sparkles, ArrowRight } from 'lucide-react'

const knowledgeBase = {
  "what services do you offer": "We offer three main services: (1) Website Design — custom business websites that are mobile-responsive and SEO-optimized, starting at $500. (2) AI Business Assistants — 24/7 AI that handles chat, emails, and customer questions. (3) Business Automation — lead capture, booking systems, CRM integration, and automated follow-ups.",
  "how much does a website cost": "Our websites are $500 upfront plus $250/year for hosting and maintenance. Or you can pay just $20/month with no upfront cost. The first year of maintenance is included free if you go with the upfront option! Either way, you get a premium, mobile-responsive website ready to go.",
  "can you build an ai assistant": "Absolutely! Our AI Business Assistants can handle website chat, answer emails, schedule appointments, capture leads, and even answer phone calls. Setup is $1,000, then $30/month or $300/year. They work 24/7 and learn from your business information.",
  "how long does a project take": "Most projects are completed in 1–3 weeks. A simple landing page can be ready in under a week. More complex sites with AI integration typically take 2–3 weeks. We'll give you a clear timeline before we start.",
  "do you work with restaurants": "Yes! We work with restaurants, cafes, coffee shops, barber shops, contractors, auto repair shops, and many other local service businesses. Each project is tailored to your specific industry and needs.",
  "what is an ai assistant": "An AI Assistant is like having a virtual team member who works 24/7. It answers customer questions on your website, responds to emails, schedules appointments, and captures leads — all automatically. Your customers get instant answers, and you save hours every day.",
  "do i need technical skills": "Not at all. We build everything and provide training. Plus, our maintenance plans mean we handle updates, security, and changes for you. You focus on running your business.",
  "how do i start": "Just book a free consultation! We'll hop on a call, learn about your business, discuss what you need, and put together a proposal. No commitment required. You can book using the form on this page.",
}

const quickQuestions = [
  "What services do you offer?",
  "How much does a website cost?",
  "Can you build an AI assistant?",
  "How long does a project take?",
]

export default function AIDemo() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi! I'm Zyron's AI assistant. I can answer questions about our services, pricing, and how we help local businesses grow. What would you like to know?" }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatRef = useRef(null)
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

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const getResponse = (question) => {
    const normalized = question.toLowerCase().trim()
    
    for (const [key, answer] of Object.entries(knowledgeBase)) {
      const keywords = key.split(' ')
      const matchCount = keywords.filter(k => normalized.includes(k)).length
      if (matchCount >= 2 || normalized.includes(key)) {
        return answer
      }
    }
    
    return "Great question! I'd recommend booking a free consultation where we can discuss your specific needs in detail. In the meantime, you can browse our services above or check out our FAQ section for more answers!"
  }

  const handleSend = (text) => {
    const question = text || input
    if (!question.trim() || isTyping) return

    setMessages(prev => [...prev, { role: 'user', text: question }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getResponse(question)
      setMessages(prev => [...prev, { role: 'assistant', text: response }])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <section id="ai-demo" className="section-padding bg-gradient-to-b from-navy-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={sectionRef} className="opacity-0 transition-opacity duration-700">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Try It Yourself
            </div>
            <h2 className="section-heading mb-4">Meet Your AI Assistant</h2>
            <p className="section-subheading mx-auto">
              See how Zyron's AI can handle customer questions, capture leads, and book appointments — entirely on its own.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Chat Container */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center gap-3 px-6 py-4 bg-navy-900 border-b border-navy-800">
              <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-navy-900" />
              </div>
              <div>
                <div className="font-semibold text-white">Zyron AI Assistant</div>
                <div className="flex items-center gap-1.5 text-sm text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Online — Ready to help
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="h-80 overflow-y-auto px-6 py-4 space-y-4 bg-white">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-gold-400" />
                    </div>
                  )}
                  <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gold-500 text-white rounded-tr-sm'
                      : 'bg-navy-50 text-slate-700 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-gold-400" />
                  </div>
                  <div className="bg-navy-50 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map(q => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-navy-300 hover:text-navy-700 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="px-6 py-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything about Zyron..."
                  className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center hover:bg-navy-800 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              This is just a preview. Imagine having this working 24/7 on your business website.
            </p>
            <a href="#booking" className="btn-gold gap-2 group">
              Get Your AI Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}