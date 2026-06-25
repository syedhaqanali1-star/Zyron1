import { useState, useEffect, useRef } from 'react'
import { Send, ArrowRight, CheckCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'

const businessTypes = [
  'Barber Shop / Salon',
  'Restaurant',
  'Coffee Shop / Cafe',
  'Contractor / Construction',
  'Auto Repair / Mechanic',
  'Medical / Dental',
  'Retail Store',
  'Service Business',
  'Other',
]

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  '$10,000+',
  'Not Sure',
]

const timelines = [
  'ASAP (within 1 week)',
  '1-2 Weeks',
  '2-4 Weeks',
  '1-3 Months',
  'Just Exploring',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
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

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) throw new Error('Failed to send')
      
      setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-navy-50">
        <div className="max-w-xl mx-auto text-center">
          <div className="card p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Message Sent! 🎉</h3>
            <p className="text-slate-600 mb-2">Thanks for reaching out, {formData.name}!</p>
            <p className="text-slate-500 mb-6">We'll review your message and get back to you within 24 hours. Keep an eye on your inbox.</p>
            <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', businessName: '', businessType: '', budget: '', timeline: '', message: '' }) }} className="btn-secondary text-sm">
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-navy-50 to-white">
      <div ref={sectionRef} className="opacity-0 transition-opacity duration-700 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
            Contact Us
          </div>
          <h2 className="section-heading mb-4">Let's Talk About Your Project</h2>
          <p className="section-subheading mx-auto">
            Tell us about your business and what you need. We'll get back to you within 24 hours with a custom proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Your Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      placeholder="john@mybusiness.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 transition-all" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Business Name</label>
                    <input type="text" name="businessName" value={formData.businessName} onChange={handleChange}
                      placeholder="My Business LLC"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 transition-all" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Business Type</label>
                    <select name="businessType" value={formData.businessType} onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 outline-none focus:border-navy-300 transition-all">
                      <option value="">Select...</option>
                      {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 outline-none focus:border-navy-300 transition-all">
                      <option value="">Select...</option>
                      {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 outline-none focus:border-navy-300 transition-all">
                      <option value="">Select...</option>
                      {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1.5">Tell us about your project *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required
                    rows={4}
                    placeholder="I need a website for my restaurant with online ordering and a menu..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 transition-all resize-none" />
                </div>

                <button type="submit" disabled={loading}
                  className="btn-gold w-full py-4 text-base gap-2 group">
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-6 space-y-6">
              <h3 className="font-bold text-navy-900">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy-900">Email</div>
                    <div className="text-sm text-slate-500">zyronhelp12@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy-900">Phone</div>
                    <div className="text-sm text-slate-500">+1 (413) 333-6029</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-navy-900">Business Hours</div>
                    <div className="text-sm text-slate-500">Mon–Fri: 9AM–6PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6 bg-navy-900 text-white border-navy-800">
              <h3 className="font-bold mb-2">Prefer to book directly?</h3>
              <p className="text-slate-400 text-sm mb-4">Skip the form and book a free 30-minute consultation call directly.</p>
              <a href="#booking" className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors">
                Book Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              By submitting this form, you agree to our Privacy Policy. We'll never share your information with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}