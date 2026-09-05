import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function InstagramIcon({ size = 17 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 17 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.6 22v-9h3l.45-3.5H13.6V7.27c0-1.01.28-1.7 1.74-1.7h1.86V2.45a25 25 0 0 0-2.71-.14c-2.68 0-4.52 1.64-4.52 4.65V9.5H7v3.5h2.97v9h3.63Z" />
    </svg>
  )
}

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Private Dining', to: '/private-dining' },
  { label: 'Locations', to: '/locations' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="bg-[#11100e] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-block text-2xl font-light tracking-[0.22em]"
            >
              AURUM
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              Contemporary Indian dining shaped by seasonal ingredients,
              considered hospitality and bold, balanced flavour.
            </p>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                aria-label="Instagram"
                title="Social profile unavailable in this demo"
                className="flex h-10 w-10 items-center justify-center border border-white/15 transition hover:border-[#c8a46b] hover:text-[#c8a46b]"
              >
                <InstagramIcon />
              </button>

              <button
                type="button"
                aria-label="Facebook"
                title="Social profile unavailable in this demo"
                className="flex h-10 w-10 items-center justify-center border border-white/15 transition hover:border-[#c8a46b] hover:text-[#c8a46b]"
              >
                <FacebookIcon />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#c8a46b]">
              Explore
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#c8a46b]">
              Mayfair
            </h3>

            <div className="space-y-4 text-sm text-white/55">
              <p className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#c8a46b]"
                />
                <span>
                  18 Brook Street
                  <br />
                  London W1
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-[#c8a46b]" />
                <span>020 7946 0182</span>
              </p>

              <p className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-[#c8a46b]" />
                <span>mayfair@aurum.example</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#c8a46b]">
              Canary Wharf
            </h3>

            <div className="space-y-4 text-sm text-white/55">
              <p className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#c8a46b]"
                />
                <span>
                  7 Harbour Square
                  <br />
                  London E14
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Phone size={17} className="shrink-0 text-[#c8a46b]" />
                <span>020 7946 0214</span>
              </p>

              <p className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-[#c8a46b]" />
                <span>wharf@aurum.example</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#c8a46b]">
              Opening hours
            </p>

            <div className="grid max-w-2xl gap-2 text-sm text-white/50 sm:grid-cols-2">
              <p>Monday – Thursday: 12:00 – 23:00</p>
              <p>Friday – Saturday: 12:00 – 00:00</p>
              <p>Sunday: 12:00 – 22:30</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 border border-white/20 px-6 py-4 text-xs font-medium uppercase tracking-[0.17em] transition hover:border-white hover:bg-white hover:text-[#11100e]"
          >
            Book a Table
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Aurum. Learning project only.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <button type="button" className="transition hover:text-white">
              Privacy
            </button>

            <button type="button" className="transition hover:text-white">
              Cookies
            </button>

            <button type="button" className="transition hover:text-white">
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
