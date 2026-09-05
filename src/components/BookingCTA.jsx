import { ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'

function BookingCTA() {
  return (
    <section className="bg-[#171512] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-white/10 px-6 py-16 text-center md:px-12 md:py-20 lg:px-20">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[#171512]/80" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-[#c8a46b]/40">
              <CalendarDays
                size={21}
                strokeWidth={1.4}
                className="text-[#c8a46b]"
              />
            </div>

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
              Reservations
            </p>

            <h2 className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              Your table is
              <span className="block italic text-[#d9c7ab]">
                waiting.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
              Join us for an evening of contemporary Indian cooking, warm
              hospitality and a dining experience designed to be shared.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#f3eee6] px-7 py-4 text-xs font-medium uppercase tracking-[0.17em] text-[#211d19] transition hover:bg-white sm:w-auto"
              >
                Book a Table
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/menu"
                className="inline-flex w-full items-center justify-center border border-white/25 px-7 py-4 text-xs font-medium uppercase tracking-[0.17em] text-white transition hover:border-white hover:bg-white hover:text-[#211d19] sm:w-auto"
              >
                View Menu
              </Link>
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.14em] text-white/35">
              Mayfair · Canary Wharf
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA
