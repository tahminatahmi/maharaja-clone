import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../assets/maharaja/photography/agatanowetastudio-07795.webp'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('Online messages are not connected yet. Please email hello@maharajaindian.co.uk or call us. Your message has not been sent.')
  }

  return (
    <>
      <Navbar />
      <main id="main" className="contact-page">
        <section className="contact-hero" aria-labelledby="contact-title">
          <img src={heroImage} alt="" fetchPriority="high" />
          <div className="contact-container">
            <p className="contact-label">Contact</p>
            <h1 id="contact-title">Get in Touch</h1>
            <span className="contact-divider" aria-hidden="true" />
            <p className="contact-hero-description">Questions, feedback, private dining enquiries – we read every message and reply within one working day.</p>
          </div>
        </section>

        <section className="contact-container contact-content" aria-label="Contact details and enquiry form">
          <aside aria-labelledby="contact-details-title">
            <p className="contact-label">Reach Us</p>
            <h2 id="contact-details-title">By Phone, By Email, In Person</h2>
            <div className="contact-address">
              <h3>Charing Cross</h3>
              <address>19A Charing Cross Road, London WC2H 0ET<br /><a href="tel:02030913500">020 3091 3500</a></address>
            </div>
            <div className="contact-address">
              <h3>Soho</h3>
              <address>63 Old Compton Street, London W1D 6HT<br /><a href="tel:07477107546">07477 107546</a></address>
            </div>
            <p className="contact-email"><strong>Email:</strong> <a href="mailto:hello@maharajaindian.co.uk">hello@maharajaindian.co.uk</a></p>
          </aside>

          <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
            <label htmlFor="contact-site">Which restaurant?</label>
            <select id="contact-site" name="site" defaultValue="">
              <option value="">Either / both</option>
              <option value="charing-cross">Charing Cross</option>
              <option value="soho">Soho</option>
            </select>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={5} minLength={10} required />
            <button type="submit">Send Message</button>
            {status && <p role="status" className="contact-status">{status}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
