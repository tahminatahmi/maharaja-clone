import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import menuSections from '../data/menu.json'
import heroImage from '../assets/maharaja/photography/agatanowetastudio-07822.webp'
import './Menu.css'

const pdfMenu = 'https://maharajaindian.co.uk/wp-content/uploads/2025/03/Maharaja-Menu-2025.pdf'

export default function Menu() {
  return (
    <>
      <Navbar />
      <main id="main" className="menu-page">
        <section className="menu-hero" aria-labelledby="menu-title">
          <img src={heroImage} alt="" fetchPriority="high" />
          <div className="menu-container">
            <p className="menu-label">Menu</p>
            <h1 id="menu-title">From The Kitchen</h1>
            <span className="menu-divider" aria-hidden="true" />
            <p className="menu-hero-description">Starters, tandoori, the classic curries, biryanis, breads. Served at both our Charing Cross and Soho restaurants.</p>
          </div>
        </section>

        <section className="menu-intro menu-container" aria-label="Our kitchen">
          <div>
            <p className="menu-intro-story">Since they first set foot in 1498, starting with the Portuguese, Europeans have been fascinated by the riches of the Indian sub-continent, with emphasis increasing during the British Raj. It was not only tea and jute, but the vast variety of spices and herbs that tempted them to stay so far from home over the countries. Inspired by tradition and innovation, our kitchen becomes like a spice market every day, using the great range of herbs and spices which are ground and skilfully blended in the preparation of some of the great classic dishes that we offer to you in our tempting menu.</p>
            <div className="menu-actions">
              <a className="menu-button menu-button-gold" href="https://www.sevenrooms.com/explore/maharajaofindia/reservations/create/search/" target="_blank" rel="noopener noreferrer">Book A Table</a>
              <a className="menu-button" href={pdfMenu}>Download PDF Menu</a>
            </div>
          </div>
        </section>

        <nav className="menu-container menu-jump" aria-label="Menu sections">
          <ul>{menuSections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul>
        </nav>

        <div className="menu-container menu-dishes">
          {menuSections.map(section => (
            <section id={section.id} className="menu-section" key={section.id} aria-labelledby={`${section.id}-title`}>
              <header className="menu-section-head">
                <span className="menu-section-mark" aria-hidden="true">◆</span>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                {section.intro && <p>{section.intro}</p>}
              </header>
              <ul className="menu-list">
                {section.items.map(dish => (
                  <li className="menu-item" key={dish.number}>
                    <h3><span className="menu-item-number">{dish.number}.</span> {dish.name}</h3>
                    {dish.description && <p className="menu-item-description">{dish.description}</p>}
                    {dish.choices && <p className="menu-item-choices"><span>Choice of:</span> {dish.choices.replace('Choice of: ', '')}</p>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="menu-drinks">
          <div className="menu-container menu-small-container">
            <p className="menu-label">Drinks</p>
            <h2>Wine, Beer, Cocktails &amp; More</h2>
            <p>Full drinks menu – champagne, wine, beer, cocktails, mocktails, soft drinks, spirits – is detailed in the printed menu and available on request.</p>
            <a className="menu-button" href={pdfMenu}>View Full Drinks Menu (PDF)</a>
          </div>
        </section>
        <section className="menu-allergy">
          <div className="menu-container menu-small-container">
            <h2 className="menu-label">Allergy &amp; Service</h2>
            <p>If there is a dish you like and not listed on the menu, please enquire from the staff. We will be pleased to prepare it for you. We do not use any artificial colour. All prices include VAT and the applicable rate and exclude service charge which will be discretionary 15% upon billing and are in pound sterling. Management reserves the right to refuse service without any explanation.</p>
          </div>
        </section>
        <section className="menu-reserve">
          <div className="menu-container">
            <p className="menu-label">Reserve</p>
            <h2>Try the Menu in Person</h2>
            <p className="menu-reserve-description">The menu is served identically at both restaurants. Pick the location that suits you and we'll see you soon.</p>
            <div className="menu-actions">
              <Link className="menu-button menu-button-gold" to="/locations">Charing Cross</Link>
              <Link className="menu-button menu-button-light" to="/locations">Soho</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
