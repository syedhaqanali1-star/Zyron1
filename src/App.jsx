import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import AIDemo from './sections/AIDemo'
import CallManagement from './sections/CallManagement'
import Booking from './sections/Booking'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'
import Dashboard from './pages/Dashboard'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <AIDemo />
        <CallManagement />
        <Booking />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}