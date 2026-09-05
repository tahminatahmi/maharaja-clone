import { useState } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  ['Home', '/'],
  ['About', '/about'],
  ['Menu', '/menu'],
  ['Private Dining', '/private-dining'],
  ['Location', '/locations'],
  ['News', '/news'],
  ['Contact', '/contact'],
]

const moreLinks = [
  ['Our Story', 'indian-culinary-heritage'],
  ['Charing Cross', 'charing-cross'],
  ['Soho', 'soho'],
  ['Pre-Theatre Dining', 'pre-theatre-dining'],
  ['Group Bookings', 'group-bookings'],
  ['Late-Night Dining', 'late-night-indian-london'],
  ['Near Leicester Square', 'leicester-square'],
  ['Near Covent Garden', 'covent-garden'],
  ['Near Trafalgar Square', 'trafalgar-square'],
  ['Press', 'press'],
  ['Privacy', 'privacy'],
  ['Accessibility', 'accessibility'],
]

const headingClass = 'text-[12px] font-semibold uppercase tracking-[0.38em] text-[#c5a65c]'
const linkClass = 'hover:text-[#c5a65c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a65c]'
const buttonClass = 'inline-flex min-h-[53px] items-center justify-center rounded-[2px] bg-[#c5a65c] px-8 py-3.5 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#192f20] hover:bg-[#d4b771] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a65c]'

export default function Footer() {
  const [newsletterMessage, setNewsletterMessage] = useState('')

  function handleNewsletterSubmit(event) {
    event.preventDefault()
    setNewsletterMessage('Newsletter signup is not available yet. Please try again later.')
  }

  return (
    <footer className="bg-[#192f20] text-[#deded2]">
      <div className="mx-auto w-[88%] max-w-[1280px] pt-16 pb-7 lg:pt-[72px]">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_1.1fr] lg:gap-8">
          <section aria-labelledby="footer-visit">
            <h2 id="footer-visit" className={headingClass}>Visit Us</h2>
            <div className="mt-7 space-y-6">
              <div>
                <h3 className="font-qasira text-[23px] font-normal leading-none text-[#c5a65c]">Charing Cross</h3>
                <address className="mt-2 text-[17px] leading-[28px] not-italic">
                  19A Charing Cross Road, London WC2H 0ET
                  <br />
                  <a href="tel:+442030913500" className={linkClass}>020 3091 3500</a>
                </address>
              </div>
              <div>
                <h3 className="font-qasira text-[23px] font-normal leading-none text-[#c5a65c]">Soho</h3>
                <address className="mt-2 text-[17px] leading-[28px] not-italic">
                  63 Old Compton Street, London W1D 6HT
                  <br />
                  <a href="tel:+447477107546" className={linkClass}>07477 107546</a>
                </address>
              </div>
            </div>
            <Link to="/contact" className={`${buttonClass} mt-11`}>Book A Table</Link>
          </section>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className={headingClass}>Explore</h2>
            <ul className="mt-7 space-y-[18px] text-[17px] leading-6">
              {navigation.map(([label, to]) => (
                <li key={label}><Link to={to} className={linkClass}>{label}</Link></li>
              ))}
              {moreLinks.map(([label, path]) => (
                <li key={label}>
                  <a href={`https://maharajaindian.co.uk/${path}/`} className={linkClass}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-newsletter" className="min-w-0 md:col-span-2 lg:col-span-1">
            <h2 id="footer-newsletter" className={headingClass}>Stay In Touch</h2>
            <p className="mt-7 text-[17px] leading-[28px] text-[#c7cabd]">
              Recipes, new menus, and the occasional dispatch from our kitchen – once a fortnight at most.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-2 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="your@email.com"
                className="min-h-[49px] min-w-0 flex-1 rounded-[4px] border border-[#c5a65c]/40 bg-white/5 px-[18px] py-3 text-[17px] text-[#deded2] placeholder:text-[#919b8e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a65c]"
              />
              <button type="submit" className={`${buttonClass} min-h-[49px] shrink-0 cursor-pointer px-7 py-3`}>Notify Me</button>
            </form>
            {newsletterMessage && <p role="status" className="mt-3 text-sm text-[#deded2]">{newsletterMessage}</p>}
            <div className="mt-[26px] flex flex-wrap gap-x-7 gap-y-4 border-t border-[#c5a65c]/20 pt-7 text-[13px] uppercase tracking-[0.12em] text-[#a3aa9b]">
              <a href="https://www.tripadvisor.co.uk/Restaurant_Review-d784337" className={linkClass}>TripAdvisor</a>
              <a href="https://www.squaremeal.co.uk/restaurants/maharaja-of-india_26971" className={linkClass}>SquareMeal</a>
              <a href="https://maharajaindian.co.uk/wp-content/uploads/2025/03/Maharaja-Menu-2025.pdf" className={linkClass}>PDF Menu</a>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#c5a65c]/15 pt-7 text-[14px] leading-5 text-[#9ca591] lg:flex-row lg:justify-between lg:gap-8">
          <p>© {new Date().getFullYear()} Maharaja of India. Charing Cross &amp; Soho, London. All rights reserved.</p>
          <p>Two restaurants, one kitchen. Crafted in London.</p>
        </div>
      </div>
    </footer>
  )
}
