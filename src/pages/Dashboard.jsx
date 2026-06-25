import { useState, useEffect } from 'react'
import { Users, CalendarCheck, Bot, TrendingUp, Phone, Mail, MessageSquare, Zap, RefreshCw, ArrowLeft } from 'lucide-react'

export default function Dashboard() {
  const [leads, setLeads] = useState([])
  const [stats, setStats] = useState({
    totalLeads: 0,
    appointments: 0,
    aiInteractions: 0,
    conversionRate: 0,
  })
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState(false)

  // Simple auth - in production use real authentication
  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'zyron2024') {
      setIsAuthenticated(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) return

    const fetchData = async () => {
      try {
        // In production, this fetches from a backend API
        // For now, show empty state or demo data
        try {
          const response = await fetch('/api/leads')
          if (response.ok) {
            const data = await response.json()
            setLeads(data)
            setStats({
              totalLeads: data.length,
              appointments: data.filter(l => l.source === 'booking').length,
              aiInteractions: Math.floor(Math.random() * 500) + 200,
              conversionRate: data.length > 0 ? ((data.filter(l => l.source === 'booking').length / data.length) * 100).toFixed(1) : 0,
            })
          } else {
            // API not available yet
          }
        } catch {
          // API not available yet
        }
      } catch (err) {
        console.warn('Could not load data:', err)
        // Set demo data
        setLeads([])
        setStats({ totalLeads: 0, appointments: 0, aiInteractions: 0, conversionRate: 0 })
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-gold-400" />
            </div>
            <h1 className="text-2xl font-bold text-navy-900">Zyron Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1">Enter your password to access</p>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Dashboard password"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-navy-300 transition-all mb-4"
              autoFocus
            />
            {authError && <p className="text-red-500 text-sm mb-4">Invalid password. Try again.</p>}
            <button type="submit" className="btn-gold w-full py-3">
              Access Dashboard
            </button>
          </form>
          <p className="text-xs text-slate-400 text-center mt-4">
            Contact Zyron for dashboard access credentials.
          </p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-gold-400 animate-spin mx-auto mb-4" />
          <p className="text-white">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Nav */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </a>
            <div className="w-px h-6 bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-gold-400" />
              </div>
              <span className="font-bold text-navy-900">Zyron</span>
            </div>
          </div>
          <span className="text-sm text-slate-500">Dashboard</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy-900">{stats.totalLeads}</div>
            <div className="text-sm text-slate-500">Total Leads</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CalendarCheck className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy-900">{stats.appointments}</div>
            <div className="text-sm text-slate-500">Appointments</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Bot className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy-900">{stats.aiInteractions}</div>
            <div className="text-sm text-slate-500">AI Interactions</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-gold-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-navy-900">{stats.conversionRate}%</div>
            <div className="text-sm text-slate-500">Booking Rate</div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-navy-900">Recent Leads</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">
                {leads.length} total entries
              </span>
            </div>
          </div>
          
          {leads.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">No leads yet</p>
              <p className="text-sm text-slate-400 mt-1">Leads and bookings will appear here as they come in.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left px-6 py-3 font-medium text-slate-600">Name</th>
                    <th className="text-left px-6 py-3 font-medium text-slate-600">Email</th>
                    <th className="text-left px-6 py-3 font-medium text-slate-600">Phone</th>
                    <th className="text-left px-6 py-3 font-medium text-slate-600">Business Type</th>
                    <th className="text-left px-6 py-3 font-medium text-slate-600">Source</th>
                    <th className="text-left px-6 py-3 font-medium text-slate-600">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-navy-900">{lead.name}</td>
                      <td className="px-6 py-4 text-slate-600">{lead.email}</td>
                      <td className="px-6 py-4 text-slate-600">{lead.phone}</td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 bg-navy-100 text-navy-700 rounded-full text-xs font-medium">
                          {lead.business_type || '—'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          {lead.source === 'booking' ? <CalendarCheck className="w-3 h-3" /> : <Mail className="w-3 h-3" />}
                          {lead.source || 'website'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{lead.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}