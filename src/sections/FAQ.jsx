import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Our websites are $500 upfront plus $250/year for hosting, maintenance, and updates. OR you can pay $20/month with no upfront cost. The first year of maintenance is included free with the upfront payment. Either way, you get a premium, mobile-responsive website with SEO built-in."
  },
  {
    q: "How much does the AI Assistant cost?",
    a: "The AI Assistant (chat, email responses, lead capture) is $1,000 to set up, then $30/month or $300/year for ongoing service. It handles website chat, answers emails, qualifies leads, and can book appointments — working 24/7 for your business."
  },
  {
    q: "Do I need technical skills to manage everything?",
    a: "Not at all. We build everything so you can manage it easily, and we provide training. Plus, our maintenance plans mean we handle updates, security, backups, and changes for you. You focus on running your business."
  },
  {
    q: "How does the AI handle phone calls?",
    a: "Our AI voice assistant can answer incoming calls, handle common questions (hours, services, pricing), take detailed messages, schedule appointments, and forward urgent requests directly to you. It sounds natural and your customers won't know they're talking to AI unless you tell them."
  },
  {
    q: "Can you integrate with my existing systems?",
    a: "Yes. We integrate with most CRM platforms, scheduling tools, payment processors, email marketing services, and POS systems. Let us know what you're using and we'll make everything work together seamlessly."
  },
  {
    q: "What kind of support do you offer?",
    a: "All clients get direct access to our team — no call centers or ticketing systems. Our maintenance plans include priority support with response times under 2 hours during business hours. We're always here to help."
  },
  {
    q: "Is there a contract or can I cancel anytime?",
    a: "No long-term contracts. We offer month-to-month plans for maintenance and AI services. You can cancel anytime. For website builds, we work on a project basis with clear milestones and deliverables."
  },
  {
    q: "How do you handle SEO?",
    a: "All our websites are built with SEO best practices: proper semantic HTML, fast loading speeds, mobile optimization, meta tags, schema markup, and Google-friendly architecture. We can also provide ongoing SEO services to help you rank higher in local search results."
  },
  {
    q: "What's the first step to getting started?",
    a: "Book a free consultation call. We'll discuss your business, goals, and what you need. No pressure, no hard sell. If we're a good fit, we'll put together a proposal. If not, we'll point you in the right direction. Sound fair?"
  },
]

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-4')
        }
      },
      { threshold: 0.1 }
    )
    if (itemRef.current) observer.observe(itemRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      className="opacity-0 translate-y-4 transition-all duration-500"
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="border border-slate-200 rounded-2xl overflow-hidden hover:border-navy-200 transition-colors">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-navy-50/50 transition-colors"
        >
          <span className="font-medium text-navy-900 pr-4">{faq.q}</span>
          <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white to-navy-50/30">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
            FAQ
          </div>
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="section-subheading mx-auto">
            Everything you need to know about working with Zyron. Still have questions? We're happy to chat.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-navy-900 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-slate-400 mb-6">We're here to help. Reach out anytime.</p>
          <a href="#contact" className="btn-gold inline-flex gap-2">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}