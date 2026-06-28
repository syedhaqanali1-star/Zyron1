import { useState, useEffect, useRef } from 'react'
import { CalendarCheck, ArrowRight, CheckCircle, Clock, Building2, Phone, Mail, User } from 'lucide-react'
import { notifyDiscord, clip } from '../config'

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

export default function Booking() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    businessType: '',
    description: '',
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

    // Fire-and-forget Discord notification (no backend on GitHub Pages).
    notifyDiscord({
      embed: {
        title: '\ud83d\udcc5 New Consultation Booking',
        color: 0x4f46e5,
        fields: [
          { name: 'Name', value: clip(formData.name), inline: true },
          { name: 'Email', value: clip(formData.email), inline: true },
          { name: 'Phone', value: clip(formData.phone), inline: true },
          { name: 'Business Type', value: clip(formData.businessType), inline: true },
          { name: 'Preferred Date', value: clip(formData.date), inline: true },
          { name: 'Preferred Time', value: clip(formData.time), inline: true },
          { name: 'Details', value: clip(formData.description) },
        ],
        timestamp: new Date().toISOString(),
      },
    })

    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <section id="booking" className="section-padding bg-gradient-to-b from-white to-navy-50">
        <div className="max-w-xl mx-auto text-center">
          <div className="card p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Consultation Booked! 🎉</h3>
            <p className="text-slate-600 mb-2">Thank you, {formData.name}!</p>
            <p className="text-slate-500 mb-6">We've scheduled your free consultation. You'll receive a confirmation email shortly with the details and a calendar invite.</p>
            <div className="bg-navy-50 rounded-xl p-4 mb-6 text-sm text-left space-y-2">
              <div className="flex items-center gap-2"><CalendarCheck className="w-4 h-4 text-navy-600" /> <span className="text-slate-700">{formData.date} at {formData.time}</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-navy-600" /> <span className="text-slate-700">{formData.email}</span></div>
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-navy-600" /> <span className="text-slate-700">{formData.businessType}</span></div>
            </div>
            <button onClick={() => { setSubmitted(false); setFormData({ date: '', time: '', name: '', email: '', phone: '', businessType: '', description: '' }) }} className="btn-secondary text-sm">
              Book Another
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-white to-navy-50">
      <div ref={sectionRef} className="opacity-0 transition-opacity duration-700 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900/5 rounded-full text-sm font-medium text-navy-700 mb-4 border border-navy-900/10">
            <CalendarCheck className="w-4 h-4" />
            Free Consultation
          </div>
          <h2 className="section-heading mb-4">Book a Free Consultation</h2>
          <p className="section-subheading mx-auto">
            No pressure, no commitment. Just a conversation about your business and how we can help you grow.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    <CalendarCheck className="w-4 h-4 inline mr-1 text-navy-600" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    <Clock className="w-4 h-4 inline mr-1 text-navy-600" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    <User className="w-4 h-4 inline mr-1 text-navy-600" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    <Mail className="w-4 h-4 inline mr-1 text-navy-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@mybusiness.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    <Phone className="w-4 h-4 inline mr-1 text-navy-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    <Building2 className="w-4 h-4 inline mr-1 text-navy-600" />
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all"
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">Tell us about your project</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="I need a website for my barbershop with online booking..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 focus:ring-1 focus:ring-navy-300 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full py-4 text-base gap-2 group"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Booking...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Book Your Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                By booking, you agree to our Privacy Policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}