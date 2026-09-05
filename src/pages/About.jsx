import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../assets/maharaja/photography/agatanowetastudio-07784.webp'
import './About.css'

const faqs = [
  ['How long has Maharaja of India been open?', 'Our flagship Charing Cross restaurant has been serving the West End since 1960, with Soho following in 2014. Both restaurants are independently owned and operated.'],
  ['What kind of Indian cuisine do you serve?', 'Regional Indian – Punjabi tandoor, Mughal slow-braising, Kashmiri yoghurt curries, and a handful of South Indian dishes. The menu is broad enough to feed a celebration and considered enough to feed a single quiet supper.'],
  ['Are your chefs from India?', 'Our kitchen brigade has decades of regional Indian experience between them. The recipes were learned by our chefs from their families, and most of the senior team trained in India before joining us in London.'],
  ['Do you source ingredients from India?', 'Key spices – Kashmiri chillies, cardamom, fenugreek, certain rices – come direct from India through specialist importers. Meat and dairy are British. Vegetables come from London markets.'],
]

const tiles = [
  ['Step Inside', 'Luxurious Interior', 'View Gallery', 'https://maharajaindian.co.uk/gallery/'],
  ['From The Kitchen', 'Delicious Cuisine', 'See Our Menu', 'https://maharajaindian.co.uk/wp-content/uploads/2025/03/Maharaja-Menu-2025.pdf'],
  ['Five Stars', 'Happy Customers', 'Read Reviews', 'https://www.tripadvisor.co.uk/Restaurant_Review-d784337'],
]

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-page" id="main">
        <section className="about-hero" aria-labelledby="about-title">
          <img src={heroImage} alt="" className="about-hero-image" fetchPriority="high" />
          <div className="about-container">
            <p className="about-label">About</p>
            <h1 id="about-title">Exquisite Flavours, Timeless Traditions</h1>
            <span className="about-hero-divider" aria-hidden="true" />
            <p className="about-hero-description">Over six decades of regional Indian cooking, two London restaurants, one uncompromising kitchen.</p>
          </div>
        </section>

        <section className="about-narrative about-container" aria-label="Our story">
          <div className="about-story">
            <p>Maharaja of India was founded on a simple idea: that great Indian cooking is the product of time, patience, and respect for ingredients. We work with regional traditions – Punjabi tandoor, Mughal slow-braising, Goan coastal – and we cook them properly.</p>
            <p>Our spices are ground in-house. Our breads are flat-baked to order. Our lamb is cooked over coals so long it forgets it was ever raw. That's the Maharaja standard, and it's why guests have come back to our Charing Cross dining room for years.</p>
          </div>
          <div className="about-ornament" aria-hidden="true"><span>◆</span></div>
          <blockquote className="about-quote">“The kitchen is the most honest room in the restaurant. Every plate tells you exactly how much we care.”</blockquote>
        </section>

        <section className="about-container" aria-label="Maharaja in numbers">
          <div className="about-stats">
            {[['65+', 'Years Serving London'], ['500k+', 'Meals Served'], ['2', 'London Restaurants']].map(([number, label]) => (
              <div key={label}><span className="about-stat-number">{number}</span><span className="about-stat-label">{label}</span></div>
            ))}
          </div>
        </section>

        <section className="about-container" aria-label="Discover Maharaja">
          <div className="about-tiles">
            {tiles.map(([label, title, action, href]) => (
              <a className="about-tile" href={href} key={title}>
                <span className="about-tile-label">{label}</span>
                <h2>{title}</h2>
                <span className="about-tile-cta">{action} →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="about-faq-section about-container" aria-labelledby="about-faq-title">
          <div className="about-faq-heading">
            <p className="about-label">Frequently Asked</p>
            <h2 id="about-faq-title">Questions, Answered</h2>
          </div>
          <div className="about-faq-list">
            {faqs.map(([question, answer], index) => (
              <details className="about-faq" key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
