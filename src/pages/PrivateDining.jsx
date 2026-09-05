import { useState } from 'react'
import { PanelsTopLeft, Star, House } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../assets/maharaja/photography/agatanowetastudio-07775.webp'
import './PrivateDining.css'

const features = [
  { icon: PanelsTopLeft, title: 'Bespoke Menus', text: 'Built around your guests, your occasion, and any dietary needs.' },
  { icon: Star, title: 'Sommelier-Led Pairings', text: 'Curated wines and aperitifs chosen to match each course on the menu.' },
  { icon: House, title: 'Private Room', text: 'Discreet, fully bookable, seating from 8 to 24 guests in comfort.' },
]

export default function PrivateDining() {
  const [submitMessage, setSubmitMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitMessage('Online enquiries are not connected yet. Please call 020 3091 3500 to discuss your event. Your enquiry has not been sent.')
  }

  return (
    <>
      <Navbar />
      <main id="main" className="private-page">
        <section className="private-hero" aria-labelledby="private-title">
          <img src={heroImage} alt="" fetchPriority="high" />
          <div className="private-container">
            <p className="private-label">Private Dining</p>
            <h1 id="private-title">Elegant Private Dining</h1>
            <span className="private-divider" aria-hidden="true" />
            <p className="private-hero-description">Bespoke menus, a private room, and a kitchen that builds the evening around you.</p>
          </div>
        </section>

        <section className="private-story private-container" aria-label="Your private dining experience">
          <div>
            <p>Whether for a milestone birthday, a corporate dinner, or a quiet celebration with family, our private dining room at Charing Cross seats up to twenty-four. The room is fully bookable, the kitchen is yours, and the menu is yours to shape.</p>
            <p>Our private dining team will guide you through canapé options, wine pairings, and any dietary requirements – and a head chef will join you at the table at the start of service to walk you through the menu.</p>
          </div>
        </section>

        <section className="private-container" aria-label="Private dining features">
          <div className="private-features">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <span className="private-feature-icon"><Icon size={28} strokeWidth={1.5} aria-hidden="true" /></span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="private-enquiry" aria-labelledby="private-enquiry-title">
          <div className="private-container private-enquiry-heading">
            <p className="private-label">Enquire</p>
            <h2 id="private-enquiry-title">Plan Your Evening</h2>
            <p>Tell us about your event and we'll come back to you within one working day with menus, room availability, and pricing.</p>
          </div>
          <div className="private-container">
            <form className="private-form" aria-label="Private dining enquiry" onSubmit={handleSubmit}>
              <label htmlFor="pd-name">Name</label>
              <input id="pd-name" name="name" type="text" autoComplete="name" required />
              <label htmlFor="pd-email">Email</label>
              <input id="pd-email" name="email" type="email" autoComplete="email" required />
              <label htmlFor="pd-phone">Phone</label>
              <input id="pd-phone" name="phone" type="tel" autoComplete="tel" />
              <label htmlFor="pd-site">Which restaurant?</label>
              <select id="pd-site" name="site" defaultValue="either">
                <option value="either">Either / no preference</option>
                <option value="charing-cross">Charing Cross</option>
                <option value="soho">Soho</option>
              </select>
              <label htmlFor="pd-date">Preferred date</label>
              <input id="pd-date" name="date" type="text" placeholder="e.g. 14 December" />
              <label htmlFor="pd-guests">Number of guests</label>
              <input id="pd-guests" name="guests" type="number" min="2" max="200" />
              <label htmlFor="pd-occasion">Occasion (optional)</label>
              <input id="pd-occasion" name="occasion" type="text" placeholder="Birthday, corporate, family…" />
              <label htmlFor="pd-message">Tell us about your event</label>
              <textarea id="pd-message" name="message" rows={4} required minLength={10} />
              <button type="submit">Send Enquiry</button>
              {submitMessage && <p className="private-form-status" role="status">{submitMessage}</p>}
            </form>
            <p className="private-booking-note">Prefer to book a regular table?{' '}
              <a href="https://www.sevenrooms.com/explore/maharajaofindia/reservations/create/search/" target="_blank" rel="noopener noreferrer">Book via SevenRooms →</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
