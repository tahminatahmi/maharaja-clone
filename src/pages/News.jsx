import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import articles from '../data/news'
import heroImage from '../assets/maharaja/photography/agatanowetastudio-07939.webp'
import './News.css'

export default function News() {
  const [message, setMessage] = useState('')

  function handleSubscribe(event) {
    event.preventDefault()
    setMessage('Newsletter signup is not available yet. Please try again later.')
  }

  return (
    <>
      <Navbar />
      <main id="main" className="news-page">
        <section className="news-hero" aria-labelledby="news-title">
          <img src={heroImage} alt="" fetchPriority="high" />
          <div className="news-container">
            <p className="news-label">News</p>
            <h1 id="news-title">Stories From The Kitchen</h1>
            <span className="news-divider" aria-hidden="true" />
            <p className="news-hero-description">New menus, seasonal dishes, awards, and the occasional dispatch from our chefs.</p>
          </div>
        </section>

        <section className="news-container news-articles" aria-label="Latest stories">
          <div className="news-article-grid">
            {articles.map(article => (
              <article className="news-article-card" key={article.href}>
                <a className="news-article-media" href={article.href} aria-hidden="true" tabIndex={-1}>
                  <img src={article.image} alt="" loading="lazy" width={600} height={400} />
                </a>
                <div className="news-article-body">
                  <time dateTime={article.dateTime}>{article.date}</time>
                  <h2><a href={article.href}>{article.title}</a></h2>
                  <p>{article.excerpt}</p>
                  <a className="news-article-link" href={article.href} aria-label={`Read more: ${article.title}`}>Read more →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="news-newsletter" aria-labelledby="news-newsletter-title">
          <div className="news-container news-newsletter-container">
            <p className="news-label">Newsletter</p>
            <h2 id="news-newsletter-title">New writing, in your inbox</h2>
            <p className="news-newsletter-description">Recipes, technique, and the occasional dispatch from service – no more than once a fortnight.</p>
            <form className="news-signup" onSubmit={handleSubscribe} aria-label="Newsletter signup">
              <label htmlFor="news-email">Email Address</label>
              <input id="news-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              <button type="submit">Notify Me</button>
              {message && <p className="news-signup-status" role="status">{message}</p>}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
