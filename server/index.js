import express from 'express'
import cors from 'cors'
import { execSync } from 'child_process'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

function escapeSql(str) {
  if (!str) return ''
  return String(str).replace(/'/g, "''")
}

// Helper: run team-db query
function dbQuery(sql) {
  try {
    const result = execSync(`team-db "${sql.replace(/"/g, '\\"')}"`, {
      timeout: 10000,
      encoding: 'utf8',
    })
    return JSON.parse(result)
  } catch (err) {
    console.error('DB error:', err.message)
    return null
  }
}

// POST /api/booking - Store appointment booking
app.post('/api/booking', (req, res) => {
  const { name, email, phone, date, time, businessType, description } = req.body

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' })
  }

  const message = escapeSql(description || '')
  const sql = `INSERT INTO leads (name, email, phone, business_type, message, source, preferred_date, preferred_time, created_at) VALUES (
    '${escapeSql(name)}',
    '${escapeSql(email)}',
    '${escapeSql(phone)}',
    '${escapeSql(businessType)}',
    'Booking consultation - ${escapeSql(description || 'No details')}',
    'booking',
    '${escapeSql(date)}',
    '${escapeSql(time)}',
    datetime('now')
  )`

  dbQuery(sql)
  res.json({ success: true, message: 'Consultation booked!' })
})

// POST /api/contact - Store contact form
app.post('/api/contact', (req, res) => {
  const { name, email, phone, businessName, businessType, budget, timeline, message: msg } = req.body

  if (!name || !email || !msg) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  const fullMessage = escapeSql(`Timeline: ${timeline || 'Not specified'} | ${msg || ''}`)
  const sql = `INSERT INTO leads (name, email, phone, business_type, budget, message, source, created_at) VALUES (
    '${escapeSql(name)}',
    '${escapeSql(email)}',
    '${escapeSql(phone)}',
    '${escapeSql(businessType || businessName)}',
    '${escapeSql(budget)}',
    'Contact: ${fullMessage}',
    'contact',
    datetime('now')
  )`

  dbQuery(sql)
  res.json({ success: true, message: 'Message sent!' })
})

// GET /api/leads - Get all leads
app.get('/api/leads', (req, res) => {
  const result = dbQuery("SELECT * FROM leads ORDER BY created_at DESC LIMIT 100")
  res.json(result || [])
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Zyron API server running on port ${PORT}`)
})
