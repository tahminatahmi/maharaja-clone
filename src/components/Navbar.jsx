import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from "../assets/maharaja/logo.webp";

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Private Dining', path: '/private-dining' },
  { name: 'Location', path: '/locations' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-[#183b2b] text-white">
      <nav
        className="site-container flex h-[86px] items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Left */}
        <div className="flex items-center gap-9">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex w-[48px] shrink-0 flex-col items-center"
          >
            <img
              src={logo}
              alt="Maharaja of India"
              className="h-[42px] w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-[14px] font-normal text-white/90 transition hover:text-[#d8b35e]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="https://www.sevenrooms.com/explore/maharajaofindia/reservations/create/search/"
            className="inline-flex h-[52px] min-w-[186px] items-center justify-center bg-[#d4af5c] px-7 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#173728]"
          >
            Book A Table
          </Link>

          <a
            href="https://www.maharajacharingcross.co.uk/order.aspx"
            className="inline-flex h-[52px] min-w-[216px] items-center justify-center border border-white/45 px-7 text-[12px] font-semibold uppercase tracking-[0.25em] text-white"
          >
            Click & Collect
          </a>
        </div>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#183b2b] px-5 pb-8 lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-sm text-white/90"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
