import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../assets/maharaja/photography/agatanowetastudio-07793.webp'
import './Locations.css'

const locations = [
  {
    id: 'charing-cross', name: 'Charing Cross', area: 'West End',
    address: '19A Charing Cross Road, London WC2H 0ET', phone: '020 3091 3500',
    hours: 'Monday to Sunday, 12:00 - 00:00',
    transport: "Leicester Square is a minute's walk (Piccadilly & Northern lines); Charing Cross Underground and mainline station are four minutes away. The dining room sits beside the National Gallery, the Coliseum, and the Palace Theatre, with taxi ranks on the Strand and around Trafalgar Square.",
  },
  {
    id: 'soho', name: 'Soho', area: 'Central',
    address: '63 Old Compton Street, London W1D 6HT', phone: '07477 107546',
    hours: 'Mon-Thu 12:00 - 01:00 · Fri-Sat 12:00 - 02:00 · Sun 12:00 - 00:00',
    transport: "On Old Compton Street in the heart of Soho, three minutes from Leicester Square and Tottenham Court Road, and a short walk from Piccadilly Circus. Surrounded by the theatres of Shaftesbury Avenue and Soho's late-night bars, with kitchen service running well past midnight.",
  },
]

function LocationMap({ location }) {
  const [loaded, setLoaded] = useState(false)
  const title = `Maharaja of India - ${location.name}`
  const query = encodeURIComponent(`Maharaja of India, ${location.address}`)

  return loaded ? (
    <iframe
      className="location-map-frame"
      title={`Map of ${title}`}
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  ) : (
    <div className="location-map-placeholder" role="region" aria-label={`Map of ${title}`}>
      <p className="location-label">Map</p>
      <h3>{title}</h3>
      <p>We load Google Maps from a third party. To keep things private we ask before fetching it.</p>
      <button type="button" className="location-button location-button-gold" onClick={() => setLoaded(true)}>Load map</button>
      <p className="location-map-note">Loads google.com/maps for this map only.</p>
    </div>
  )
}

export default function Locations() {
  return (
    <>
      <Navbar />
      <main id="main" className="locations-page">
        <section className="location-hero" aria-labelledby="location-title">
          <img src={heroImage} alt="" fetchPriority="high" />
          <div className="location-container">
            <p className="location-label">Location</p>
            <h1 id="location-title">Two London Locations</h1>
            <span className="location-divider" aria-hidden="true" />
            <p className="location-hero-description">Both restaurants sit in the heart of central London, a short walk from theatres, galleries, and Soho nightlife.</p>
          </div>
        </section>

        <section className="location-container location-cards" aria-label="Our restaurants">
          {locations.map(location => (
            <article id={location.id} className="location-card" key={location.id}>
              <p className="location-label">{location.area}</p>
              <h2>Maharaja of India - {location.name}</h2>
              <address>
                {location.address}<br />
                <strong>Phone:</strong> <a href={`tel:${location.phone.replaceAll(' ', '')}`}>{location.phone}</a><br />
                <strong>Hours:</strong> {location.hours}
              </address>
              <div className="location-actions">
                <a className="location-button location-button-gold" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Maharaja of India, ${location.address}`)}`} target="_blank" rel="noopener noreferrer">Get Directions</a>
                <a className="location-button" href="https://www.sevenrooms.com/explore/maharajaofindia/reservations/create/search/" target="_blank" rel="noopener noreferrer">Book Here</a>
              </div>
              <div className="location-map"><LocationMap location={location} /></div>
            </article>
          ))}
        </section>

        <section className="location-travel location-container" aria-labelledby="location-travel-title">
          <div className="location-travel-heading">
            <p className="location-label">Getting Here</p>
            <h2 id="location-travel-title">Central, by Tube or Taxi</h2>
          </div>
          <div className="location-travel-grid">
            {locations.map(location => (
              <div key={location.id}>
                <h3>{location.name}</h3>
                <p>{location.transport}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
