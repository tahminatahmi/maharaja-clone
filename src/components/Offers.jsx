import { ArrowRight, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

function Offers() {
  return (
    <section className="bg-[#f3eee6] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden bg-[#2a241f] text-white lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1400&q=80"
              alt="Indian dining set menu"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute left-6 top-6 flex items-center gap-2 bg-[#f3eee6] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#2a241f]">
              <Utensils size={15} />
              Seasonal Menu
            </div>
          </div>

          <div className="flex items-center p-8 md:p-12 lg:p-16">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#c8a46b]">
                A curated experience
              </p>

              <h2 className="mb-7 text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
                The Aurum
                <span className="block italic text-[#d9c7ab]">
                  tasting menu.
                </span>
              </h2>

              <p className="mb-8 text-base leading-8 text-white/65">
                Discover a seasonal selection of small plates, charcoal-fired
                favourites, slow-cooked curries and house desserts designed to
                be enjoyed across the table.
              </p>

              <div className="mb-10 grid gap-6 border-y border-white/10 py-6 sm:grid-cols-2">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/40">
                    Available
                  </p>
                  <p className="text-lg font-light">
                    Sunday – Thursday
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/40">
                    From
                  </p>
                  <p className="text-lg font-light">
                    £42 per guest
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-3 bg-[#f3eee6] px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#2a241f] transition hover:bg-white"
                >
                  View Set Menu
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#d9c7ab] transition hover:text-white"
                >
                  Book a Table
                </Link>
              </div>

              <p className="mt-8 text-xs leading-6 text-white/35">
                Example offer created for this learning project. Pricing and
                availability are fictional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
